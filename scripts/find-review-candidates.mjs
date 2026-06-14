import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const questionsDir = path.join(process.cwd(), "data", "questions");
const filenamePattern = /^(.+?)_(.+)\.json$/u;
const args = parseArgs(process.argv.slice(2));
const files = (await readdir(questionsDir))
  .filter((file) => file.endsWith(".json"))
  .filter((file) => matchesScope(file, args))
  .sort((a, b) => a.localeCompare(b, "ja"));

const candidates = [];

for (const file of files) {
  const match = file.match(filenamePattern);
  if (!match) continue;
  const [, subject, unit] = match;
  const questions = JSON.parse(stripBom(await readFile(path.join(questionsDir, file), "utf8")));

  questions.forEach((question, index) => {
    const result = scoreQuestion({ file, subject, unit, index, question });
    if (result.score >= args.minScore) {
      candidates.push(result);
    }
  });
}

candidates.sort((a, b) => b.score - a.score || a.file.localeCompare(b.file, "ja") || a.index - b.index);
const limited = candidates.slice(0, args.limit);

if (args.format === "json") {
  console.log(JSON.stringify({
    generatedBy: "scripts/find-review-candidates.mjs",
    scope: {
      subject: args.subject,
      unit: args.unit,
      minScore: args.minScore,
      limit: args.limit
    },
    totalCandidates: candidates.length,
    returnedCandidates: limited.length,
    candidates: limited
  }, null, 2));
} else {
  console.log(`review candidates: ${limited.length}/${candidates.length} returned`);
  for (const candidate of limited) {
    console.log(`\n[score ${candidate.score}] ${candidate.file} [${candidate.index}] ${candidate.question}`);
    for (const issue of candidate.issues) {
      console.log(`- ${issue.type}: ${issue.message}`);
    }
    candidate.choices.forEach((choice, choiceIndex) => {
      const marker = choiceIndex + 1 === candidate.answer ? "*" : " ";
      console.log(`  ${marker}${choiceIndex + 1}. ${choice}`);
    });
    console.log(`  解説: ${candidate.explanation}`);
  }
}

function scoreQuestion({ file, subject, unit, index, question }) {
  const choices = question["選択肢"] ?? [];
  const answer = question["正解"];
  const explanation = String(question["解説"] ?? "");
  const text = String(question["問題文"] ?? "");
  const correct = String(choices[answer - 1] ?? "");
  const distractors = choices.filter((_, choiceIndex) => choiceIndex !== answer - 1).map(String);
  const issues = [];

  addLengthOutlierIssues(issues, choices, answer);
  addExtremeWordIssues(issues, choices, answer);
  addVagueChoiceIssues(issues, choices, answer);
  addFormatPatternIssues(issues, choices, answer);
  addExplanationIssues(issues, explanation, choices, answer);
  addCrossDomainIssues(issues, subject, unit, choices, answer);
  addCorrectnessLeakIssues(issues, text, correct, distractors);

  const score = issues.reduce((sum, issue) => sum + issue.weight, 0);
  return {
    file,
    subject,
    unit,
    index,
    score,
    question: text,
    choices,
    answer,
    explanation,
    issues: issues.map(({ weight, ...issue }) => issue)
  };
}

function addLengthOutlierIssues(issues, choices, answer) {
  const lengths = choices.map((choice) => visibleLength(choice));
  const sorted = [...lengths].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const correctLength = lengths[answer - 1] ?? 0;
  const distractorLengths = lengths.filter((_, index) => index !== answer - 1);
  const avgDistractor = average(distractorLengths);

  if (max - min >= 24 && max >= min * 2.2) {
    issues.push({
      type: "choice-length-spread",
      message: `選択肢の長さ差が大きいです (${lengths.join("/")})。見た目で切れる可能性があります。`,
      weight: 2
    });
  }
  if (correctLength >= avgDistractor * 1.9 && correctLength - avgDistractor >= 18) {
    issues.push({
      type: "answer-length-leak",
      message: "正答だけが長く、説明的に見える可能性があります。",
      weight: 3
    });
  }
}

function addExtremeWordIssues(issues, choices, answer) {
  const extremePattern = /(必ず|すべて|まったく|だけ|のみ|常に|絶対|例外なく|完全に|無関係|0になる|無限大)/u;
  const hits = choices.map((choice) => extremePattern.test(choice));
  const distractorHits = hits.filter((_, index) => index !== answer - 1).filter(Boolean).length;
  if (distractorHits >= 2 && !hits[answer - 1]) {
    issues.push({
      type: "distractor-extreme-words",
      message: "誤答に極端語が偏っています。安直な消去肢になっていないか確認してください。",
      weight: 2
    });
  }
}

function addVagueChoiceIssues(issues, choices, answer) {
  const vaguePattern = /(わからない|どれでもよい|関係しない|同じである|変化しない|まったくない|無視できる)/u;
  choices.forEach((choice, index) => {
    if (index !== answer - 1 && vaguePattern.test(choice)) {
      issues.push({
        type: "vague-distractor",
        message: `選択肢${index + 1}が汎用的な外れに見える可能性があります。`,
        weight: 1
      });
    }
  });
}

function addFormatPatternIssues(issues, choices, answer) {
  const endings = choices.map((choice) => normalizeEnding(choice));
  if (new Set(endings).size === 3) {
    issues.push({
      type: "choice-form-mismatch",
      message: "3択の文型・語尾がばらついています。形式差で切れないか確認してください。",
      weight: 1
    });
  }

  const correct = choices[answer - 1] ?? "";
  const distractors = choices.filter((_, index) => index !== answer - 1);
  if (containsFormula(correct) && distractors.every((choice) => !containsFormula(choice))) {
    issues.push({
      type: "answer-only-formula",
      message: "正答だけに式・記号が含まれています。見た目で浮いていないか確認してください。",
      weight: 2
    });
  }
}

function addExplanationIssues(issues, explanation, choices, answer) {
  if (visibleLength(explanation) < 55) {
    issues.push({
      type: "thin-explanation",
      message: "解説が短めです。誤答との差分や混同ポイントが足りるか確認してください。",
      weight: 2
    });
  }

  const correct = choices[answer - 1] ?? "";
  if (visibleLength(correct) >= 4 && !explanation.includes(stripDecorations(correct).slice(0, 8))) {
    issues.push({
      type: "explanation-does-not-mention-answer",
      message: "解説が正答語を明示していない可能性があります。",
      weight: 1
    });
  }
}

function addCrossDomainIssues(issues, subject, unit, choices, answer) {
  const domainPatterns = {
    化学: /(天皇|幕府|仏教思想|助動詞|敬語|遺伝子|生態系|細胞|神経|文学|和歌|漢文)/u,
    生物: /(幕府|天皇|助動詞|酸化数|モル濃度|ベンゼン|化学平衡|律令|荘園)/u,
    日本史: /(モル|酸化数|細胞|DNA|助動詞|ベンゼン|化学平衡|シナプス)/u,
    古文: /(モル|酸化数|細胞|DNA|幕府|ベンゼン|化学平衡)/u,
    漢文: /(モル|酸化数|細胞|DNA|幕府|ベンゼン|化学平衡)/u,
    倫理: /(モル|酸化数|ベンゼン|助動詞|鎌倉幕府|DNA|化学平衡)/u
  };
  const pattern = domainPatterns[subject];
  if (!pattern) return;

  choices.forEach((choice, index) => {
    if (index !== answer - 1 && pattern.test(choice)) {
      issues.push({
        type: "possible-cross-domain-distractor",
        message: `選択肢${index + 1}が ${subject}/${unit} から離れた語を含む可能性があります。`,
        weight: 3
      });
    }
  });
}

function addCorrectnessLeakIssues(issues, question, correct, distractors) {
  const promptTerms = extractTerms(question);
  const correctOverlap = overlapCount(promptTerms, extractTerms(correct));
  const distractorOverlap = Math.max(...distractors.map((choice) => overlapCount(promptTerms, extractTerms(choice))), 0);
  if (correctOverlap >= distractorOverlap + 2 && correctOverlap >= 2) {
    issues.push({
      type: "answer-repeats-prompt-terms",
      message: "正答だけが問題文の語を多く反復しています。語の重なりで選べないか確認してください。",
      weight: 1
    });
  }
}

function parseArgs(argv) {
  const parsed = {
    subject: "",
    unit: "",
    limit: 120,
    minScore: 2,
    format: "text"
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--subject") parsed.subject = argv[++i] ?? "";
    else if (arg === "--unit") parsed.unit = argv[++i] ?? "";
    else if (arg === "--limit") parsed.limit = Number(argv[++i] ?? parsed.limit);
    else if (arg === "--min-score") parsed.minScore = Number(argv[++i] ?? parsed.minScore);
    else if (arg === "--format") parsed.format = argv[++i] ?? parsed.format;
    else if (arg === "--json") parsed.format = "json";
    else if (arg === "--help" || arg === "-h") {
      console.log("Usage: node scripts/find-review-candidates.mjs [--subject 科目] [--unit 単元] [--limit N] [--min-score N] [--format text|json]");
      process.exit(0);
    }
  }
  if (!Number.isFinite(parsed.limit) || parsed.limit < 1) parsed.limit = 120;
  if (!Number.isFinite(parsed.minScore) || parsed.minScore < 1) parsed.minScore = 2;
  return parsed;
}

function matchesScope(file, args) {
  const match = file.match(filenamePattern);
  if (!match) return false;
  const [, subject, unit] = match;
  return (!args.subject || subject === args.subject) && (!args.unit || unit === args.unit);
}

function visibleLength(value) {
  return String(value).replace(/\s+/gu, "").length;
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / Math.max(values.length, 1);
}

function normalizeEnding(value) {
  const text = String(value).trim();
  if (/[。.!?？]$/u.test(text)) return text.slice(-1);
  if (/こと$/u.test(text)) return "こと";
  if (/もの$/u.test(text)) return "もの";
  if (/反応$/u.test(text)) return "反応";
  return "other";
}

function containsFormula(value) {
  return /[A-Z][a-z]?\d*|[-+]=|[⇄→←]|[\[\]^]/u.test(value);
}

function stripDecorations(value) {
  return String(value).replace(/[()[\]{}「」『』・\s]/gu, "");
}

function extractTerms(value) {
  return stripDecorations(value)
    .split(/[、。，．・\/／:：;；（）()「」『』\s]+/u)
    .filter((term) => term.length >= 3);
}

function overlapCount(a, b) {
  const bSet = new Set(b);
  return a.filter((term) => bSet.has(term)).length;
}

function stripBom(value) {
  return value.charCodeAt(0) === 0xfeff ? value.slice(1) : value;
}
