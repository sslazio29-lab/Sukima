import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const questionsDir = path.join(process.cwd(), "data", "questions");
const manifestPath = path.join(process.cwd(), "data", "manifest.json");
const filenamePattern = /^(.+?)_(.+)\.json$/u;
const unitOrder = {
  漢文: [
    "返り点と書き下し",
    "再読文字",
    "否定・疑問・反語",
    "使役・受身・比較",
    "仮定・限定・累加",
    "重要句形",
    "故事成語・重要語"
  ],
  古文: [
    "重要古語",
    "助動詞",
    "敬語",
    "助詞",
    "和歌と修辞",
    "古典常識",
    "読解基礎",
    "文学史"
  ],
  日本史: [
    "飛鳥・奈良時代",
    "平安時代",
    "鎌倉時代",
    "室町時代",
    "戦国・安土桃山時代",
    "江戸時代前期",
    "江戸時代中期",
    "江戸時代後期",
    "江戸時代",
    "明治時代前期",
    "明治時代後期",
    "明治時代",
    "大正時代",
    "昭和時代前期",
    "昭和時代後期",
    "昭和時代",
    "平成時代"
  ]
};

const files = (await readdir(questionsDir))
  .filter((file) => file.endsWith(".json"))
  .sort((a, b) => a.localeCompare(b, "ja"));

const subjects = {};

for (const file of files) {
  const match = file.match(filenamePattern);
  if (!match) {
    fail(`${file}: ファイル名は 科目_単元.json にしてください。`);
  }

  const [, subject, unit] = match;
  const fullPath = path.join(questionsDir, file);
  const raw = await readFile(fullPath, "utf8");
  let questions;
  try {
    questions = JSON.parse(stripBom(raw));
  } catch (error) {
    fail(`${file}: JSON として読めません。${error.message}`);
  }

  validateQuestions(file, questions);

  subjects[subject] ??= [];
  subjects[subject].push({
    unit,
    path: `data/questions/${file}`,
    count: questions.length
  });
}

const manifest = {
  subjects: sortSubjects(subjects)
};

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`generated ${path.relative(process.cwd(), manifestPath)} (${files.length} files)`);

function validateQuestions(file, questions) {
  if (!Array.isArray(questions)) {
    fail(`${file}: 中身は問題オブジェクトの配列にしてください。`);
  }
  if (questions.length === 0) {
    fail(`${file}: 問題が0件です。`);
  }

  questions.forEach((question, index) => {
    const location = `${file} [${index}]`;
    requireString(question, "問題文", location);
    requireString(question, "解説", location);

    if (!Array.isArray(question["選択肢"]) || question["選択肢"].length !== 3) {
      fail(`${location}: 選択肢は必ず3つにしてください。`);
    }
    question["選択肢"].forEach((choice, choiceIndex) => {
      if (typeof choice !== "string" || choice.trim() === "") {
        fail(`${location}: 選択肢${choiceIndex + 1}が空です。`);
      }
    });

    if (![1, 2, 3].includes(question["正解"])) {
      fail(`${location}: 正解は 1〜3 の番号にしてください。`);
    }

    const allowedKeys = new Set(["問題文", "選択肢", "正解", "解説"]);
    for (const key of Object.keys(question)) {
      if (!allowedKeys.has(key)) {
        fail(`${location}: 未使用フィールド "${key}" があります。`);
      }
    }
  });
}

function requireString(question, key, location) {
  if (typeof question?.[key] !== "string" || question[key].trim() === "") {
    fail(`${location}: ${key} が空です。`);
  }
}

function sortSubjects(subjects) {
  return Object.fromEntries(
    Object.entries(subjects)
      .sort(([a], [b]) => a.localeCompare(b, "ja"))
      .map(([subject, units]) => [
        subject,
        units.sort((a, b) => compareUnits(subject, a.unit, b.unit))
      ])
  );
}

function compareUnits(subject, a, b) {
  const order = unitOrder[subject];
  if (!order) {
    return a.localeCompare(b, "ja");
  }

  const aIndex = order.indexOf(a);
  const bIndex = order.indexOf(b);
  if (aIndex !== -1 || bIndex !== -1) {
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  }

  return a.localeCompare(b, "ja");
}

function stripBom(value) {
  return value.charCodeAt(0) === 0xfeff ? value.slice(1) : value;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
