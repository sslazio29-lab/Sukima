const app = document.querySelector("#app");
const homeButton = document.querySelector("#homeButton");

const state = {
  manifest: null,
  subject: null,
  unit: null,
  questions: [],
  sessionQueue: [],
  currentIndex: null,
  answered: new Set(),
  picked: null
};

homeButton.addEventListener("click", () => {
  state.subject = null;
  state.unit = null;
  state.questions = [];
  state.sessionQueue = [];
  state.currentIndex = null;
  state.picked = null;
  renderSubjects();
});

init();

async function init() {
  try {
    const response = await fetch("data/manifest.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`manifest load failed: ${response.status}`);
    state.manifest = await response.json();
    renderSubjects();
  } catch (error) {
    renderError("問題一覧を読み込めませんでした。manifest.json を確認してください。");
    console.error(error);
  }
}

function renderSubjects() {
  homeButton.hidden = true;
  const subjects = Object.keys(state.manifest.subjects).sort((a, b) => a.localeCompare(b, "ja"));
  if (subjects.length === 0) {
    app.innerHTML = `<section class="panel empty">問題がまだありません。</section>`;
    return;
  }

  app.innerHTML = `
    <section class="panel">
      <h2>科目を選ぶ</h2>
      <div class="stack">
        ${subjects.map((subject) => buttonHtml(subject, `data-subject="${escapeHtml(subject)}"`)).join("")}
      </div>
    </section>
  `;

  app.querySelectorAll("[data-subject]").forEach((button) => {
    button.addEventListener("click", () => {
      state.subject = button.dataset.subject;
      renderUnits();
    });
  });
}

function renderUnits() {
  homeButton.hidden = false;
  const units = state.manifest.subjects[state.subject].slice().sort((a, b) => a.unit.localeCompare(b.unit, "ja"));
  app.innerHTML = `
    <section class="panel">
      <h2>${escapeHtml(state.subject)} の単元</h2>
      <div class="stack">
        ${units.map((entry) => buttonHtml(entry.unit, `data-unit="${escapeHtml(entry.unit)}"`)).join("")}
      </div>
    </section>
  `;

  app.querySelectorAll("[data-unit]").forEach((button) => {
    button.addEventListener("click", async () => {
      state.unit = button.dataset.unit;
      await loadUnit();
    });
  });
}

async function loadUnit() {
  const entry = state.manifest.subjects[state.subject].find((candidate) => candidate.unit === state.unit);
  try {
    const response = await fetch(entry.path, { cache: "no-store" });
    if (!response.ok) throw new Error(`question load failed: ${response.status}`);
    state.questions = await response.json();
    state.answered = loadAnswered();
    renderCountPicker();
  } catch (error) {
    renderError("問題を読み込めませんでした。JSON を確認してください。");
    console.error(error);
  }
}

function renderCountPicker() {
  const unansweredCount = getUnansweredIndexes().length;
  if (unansweredCount === 0) {
    renderFinished();
    return;
  }

  const counts = [3, 5, 10].filter((count) => count < unansweredCount);
  counts.push(unansweredCount);
  const uniqueCounts = [...new Set(counts)];

  app.innerHTML = `
    <section class="panel">
      <h2>何問解く？</h2>
      <p class="muted">${escapeHtml(state.subject)} / ${escapeHtml(state.unit)}：未回答 ${unansweredCount} 問</p>
      <div class="stack">
        ${uniqueCounts.map((count) => buttonHtml(`${count}問`, `data-count="${count}"`)).join("")}
      </div>
    </section>
  `;

  app.querySelectorAll("[data-count]").forEach((button) => {
    button.addEventListener("click", () => startSession(Number(button.dataset.count)));
  });
}

function startSession(count) {
  state.sessionQueue = shuffle(getUnansweredIndexes()).slice(0, count);
  state.currentIndex = null;
  state.picked = null;
  nextQuestion();
}

function nextQuestion() {
  state.picked = null;
  state.currentIndex = state.sessionQueue.shift() ?? null;
  if (state.currentIndex === null) {
    renderCountPicker();
    return;
  }
  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  app.innerHTML = `
    <section class="panel">
      <p class="muted">${escapeHtml(state.subject)} / ${escapeHtml(state.unit)}</p>
      <h2>${escapeHtml(question["問題文"])}</h2>
      <div class="choice-grid">
        ${question["選択肢"].map((choice, index) => `
          <button class="choice-button" type="button" data-choice="${index + 1}">
            ${escapeHtml(choice)}
          </button>
        `).join("")}
      </div>
    </section>
  `;

  app.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => pickChoice(Number(button.dataset.choice)));
  });
}

function pickChoice(choiceNumber) {
  if (state.picked !== null) return;
  state.picked = choiceNumber;

  const question = state.questions[state.currentIndex];
  const isCorrect = choiceNumber === question["正解"];
  if (isCorrect) {
    state.answered.add(state.currentIndex);
    saveAnswered();
  }

  app.querySelectorAll("[data-choice]").forEach((button) => {
    const buttonChoice = Number(button.dataset.choice);
    button.disabled = true;
    if (buttonChoice === question["正解"]) button.classList.add("correct");
    if (buttonChoice === choiceNumber && !isCorrect) button.classList.add("wrong");
  });

  const result = document.createElement("section");
  result.className = `panel result ${isCorrect ? "correct" : "wrong"}`;
  result.innerHTML = `
    <h2>${isCorrect ? "正解" : "不正解"}</h2>
    <p>${escapeHtml(question["解説"])}</p>
    <button class="button" type="button" id="nextButton">次へ</button>
  `;
  app.append(result);
  document.querySelector("#nextButton").addEventListener("click", nextQuestion);
}

function renderFinished() {
  app.innerHTML = `
    <section class="panel">
      <h2>この単元は全問回答済み</h2>
      <p class="muted">${escapeHtml(state.subject)} / ${escapeHtml(state.unit)}</p>
      <button class="button" type="button" id="resetUnitButton">この単元をリセット</button>
    </section>
  `;

  document.querySelector("#resetUnitButton").addEventListener("click", () => {
    localStorage.removeItem(storageKey());
    state.answered = new Set();
    renderCountPicker();
  });
}

function renderError(message) {
  app.innerHTML = `<section class="panel empty">${escapeHtml(message)}</section>`;
}

function getUnansweredIndexes() {
  return state.questions
    .map((_, index) => index)
    .filter((index) => !state.answered.has(index));
}

function loadAnswered() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey()) || "[]");
    return new Set(saved.filter((index) => Number.isInteger(index)));
  } catch {
    return new Set();
  }
}

function saveAnswered() {
  localStorage.setItem(storageKey(), JSON.stringify([...state.answered].sort((a, b) => a - b)));
}

function storageKey() {
  return `sukima:${state.subject}:${state.unit}:answered`;
}

function shuffle(items) {
  const copied = items.slice();
  for (let index = copied.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copied[index], copied[swapIndex]] = [copied[swapIndex], copied[index]];
  }
  return copied;
}

function buttonHtml(label, attributes) {
  return `<button class="button" type="button" ${attributes}>${escapeHtml(label)}</button>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
