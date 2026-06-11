import { get } from "node:https";

const [subject, unit] = process.argv.slice(2);
const baseUrl = "https://sslazio29-lab.github.io/Sukima";

if (!subject || !unit) {
  console.error("Usage: npm.cmd run pages:check -- <科目> <単元>");
  process.exit(1);
}

const manifest = await fetchJson(`${baseUrl}/data/manifest.json`);
const units = manifest.subjects?.[subject];
if (!Array.isArray(units)) {
  fail(`manifest に科目 "${subject}" がありません。`);
}

const entry = units.find((candidate) => candidate.unit === unit);
if (!entry) {
  const available = units.map((candidate) => candidate.unit).join(" > ");
  fail(`manifest に "${subject} / ${unit}" がありません。現在の ${subject}: ${available}`);
}

const questions = await fetchJson(`${baseUrl}/${encodeURI(entry.path)}`);
if (!Array.isArray(questions)) {
  fail(`${entry.path}: JSON が問題配列ではありません。`);
}
if (questions.length !== entry.count) {
  fail(`${entry.path}: manifest count ${entry.count} と JSON count ${questions.length} が一致しません。`);
}

console.log(`ManifestStatus=200`);
console.log(`${subject}Order=${units.map((candidate) => `${candidate.unit}:${candidate.count}`).join(" > ")}`);
console.log(`JsonStatus=200`);
console.log(`JsonPath=${entry.path}`);
console.log(`JsonCount=${questions.length}`);

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    get(url, { headers: { "User-Agent": "Sukima-pages-check" } }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        if (response.statusCode !== 200) {
          reject(new Error(`${url}: HTTP ${response.statusCode}`));
          return;
        }
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(new Error(`${url}: JSON parse failed: ${error.message}`));
        }
      });
    }).on("error", reject);
  });
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
