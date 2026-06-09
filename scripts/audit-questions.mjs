import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const questionsDir = path.join(process.cwd(), "data", "questions");
const files = (await readdir(questionsDir))
  .filter((file) => file.endsWith(".json"))
  .sort((a, b) => a.localeCompare(b, "ja"));

const issues = [];

for (const file of files) {
  const fullPath = path.join(questionsDir, file);
  const questions = JSON.parse(stripBom(await readFile(fullPath, "utf8")));
  const answerCounts = { 1: 0, 2: 0, 3: 0 };

  questions.forEach((question, index) => {
    const location = `${file} [${index}]`;
    const choices = question["選択肢"];
    const answer = question["正解"];
    answerCounts[answer] += 1;

    if (new Set(choices).size !== 3) {
      issues.push(`${location}: 選択肢が重複しています。`);
    }
    if (typeof question["解説"] !== "string" || question["解説"].trim().length < 35) {
      issues.push(`${location}: 解説が短すぎます。`);
    }
    if (!choices[answer - 1]) {
      issues.push(`${location}: 正解番号が選択肢に対応していません。`);
    }
  });

  if (questions.length >= 20) {
    const counts = Object.values(answerCounts);
    if (Math.max(...counts) - Math.min(...counts) > 2) {
      issues.push(`${file}: 正解位置が偏っています。分布=${JSON.stringify(answerCounts)}`);
    }
  }

  console.log(`${file}: ${questions.length} questions, answers ${JSON.stringify(answerCounts)}`);
}

if (issues.length > 0) {
  console.error(issues.join("\n"));
  process.exit(1);
}

console.log("question audit passed");

function stripBom(value) {
  return value.charCodeAt(0) === 0xfeff ? value.slice(1) : value;
}
