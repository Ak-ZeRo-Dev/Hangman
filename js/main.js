// Variables
const language = document.querySelector(`.language`);
const mainContainer = document.querySelector(`.main-container`);
const numErrors =
  document.querySelector(`.draw`).children.length +
  document.querySelector(`.man`).children.length;
let wrongAttempts = 0;
// Theme
const theme = document.querySelector(`.theme`);
const light = document.querySelector(`.light`);
const night = document.querySelector(`.night`);
// Player Info
const playerInfo = document.querySelector(`.player-info`);
const playerNameInput = document.querySelector(`#name`);
const arBtn = document.querySelector(`#arabic`);
const enBtn = document.querySelector(`#english`);
const play = document.querySelector(`#play`);
// Game Info
const gameInfo = document.querySelector(`.game-info `);
const playerName = document.querySelector(`.player-name`);
const category = document.querySelector(`.category`);
const gameWord = document.querySelector(`#categoryWord`);
// Draw And Letters
const hangman = document.querySelector(`.hangman`);
const allLetters = document.querySelector(`.all-letters`);
// Answer
const allAnswer = document.querySelector(`.answer`);
const answerLetter = document.querySelector(`answer-letter`);
// All Letters
const enLetters = `abcdefghijklmnopqrstuvwxyz+#`;
const arLetters = `ابتثجحخدذرزسشصضطظعغفقكلمنهويىءآأؤإئة`;
// All Words Game
const words = {
  Arabic: {
    "العلماء العرب": [
      "ابن الهيثم",
      "الخوارزمي",
      "ابن سينا",
      "ابن رشد",
      "البيروني",
      "الفارابي",
      "الرازي",
      "المسعودي",
      "البتاني",
      "ابن النفيس",
      "ابن سينا الصغير",
      "ابن زهر",
      "ابن باجة",
      "ابن اليمامة",
      "جابر بن حيان",
      "المعري",
      "ابن عرفة",
      "أبو العلاء المعري",
      "ابن عربي",
    ],
    "الشيوخ العرب": [
      "الشافعي",
      "أحمد بن حنبل",
      "مالك بن أنس",
      "البخاري",
      "النووي",
      "ابن قدامة الجوزية",
      "ابن حجر العسقلاني",
      "ابن حجر العيني",
      "القرافي",
      "النووي الإصطخري",
      "محمد حسان",
      "عبد الله المطلق",
      "سعد البريك",
      "عائض القرني",
      "محمد العريفي",
      "ناصر العمر",
      "محمد الطبلاوي",
      "أحمد الخليلي (الإمارات العربية",
      "محمد العبد اللطيف",
      "سلمان العودة",
    ],
    "الدول العربية": [
      "الجزائر",
      "البحرين",
      "جزر القمر",
      "جيبوتي",
      "مصر",
      "العراق",
      "الأردن",
      "الكويت",
      "لبنان",
      "ليبيا",
      "موريتانيا",
      "المغرب",
      "عُمان",
      "فلسطين",
      "قطر",
      "المملكة العربية السعودية",
      "الصومال",
      "السودان",
      "سوريا",
      "تونس",
      "الإمارات العربية المتحدة",
      "اليمن",
    ],
    "الدول الغربية": [
      "الولايات المتحدة الأمريكية",
      "كندا",
      "المملكة المتحدة",
      "ألمانيا",
      "فرنسا",
      "إسبانيا",
      "إيطاليا",
      "البرتغال",
      "هولندا",
      "بلجيكا",
      "سويسرا",
      "النمسا",
      "السويد",
      "النرويج",
      "الدنمارك",
    ],
    "الأفلام العربية": [
      "الجزيرة",
      "المصير",
      "ابن حميدو",
      "الكيف",
      "العنكبوت",
      "الكهف",
      "المغتربون",
      "لمح البصر",
      "العودة إلى الأصل",
      "الناظر",
      "القرد بيتكلم",
      "أهواك",
      "أنا وهو وهي",
      "الشحرورة",
      "حسن ومرقص",
      "أغا والكوتشينة",
      "مدرسة المشاغبين",
      "البريء",
      "الظل الطويل",
      "الغول",
    ],
  },
  English: {
    Programming: [
      "C#",
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "Ruby",
      "Swift",
      "Go",
      "Kotlin",
      "Rust",
      "PHP",
      "TypeScript",
      "Dart",
      "R",
      "flutter",
      "nodejs",
      "React",
      "Angular",
      "Vue",
    ],
    People: [
      "Elon Musk",
      "Albert Einstein",
      "William Shakespeare",
      "Marilyn Monroe",
      "Nelson Mandela",
      "Michael Jackson",
      "Oprah Winfrey",
      "Steve Jobs",
      "Elvis Presley",
      "Amelia Earhart",
      "Walt Disney",
      "Malala Yousafzai",
      "Muhammad Ali",
      "Angelina Jolie",
      "Barack Obama",
    ],
    "Arab Countries": [
      "Algeria",
      "Bahrain",
      "Comoros",
      "Djibouti",
      "Egypt",
      "Iraq",
      "Jordan",
      "Kuwait",
      "Lebanon",
      "Libya",
      "Mauritania",
      "Morocco",
      "Oman",
      "Palestine",
      "Qatar",
      "Saudi Arabia",
      "Somalia",
      "Sudan",
      "Syria",
      "Tunisia",
      "Yemen",
    ],
    "Western Countries": [
      "United States",
      "Canada",
      "United Kingdom",
      "Germany",
      "France",
      "Spain",
      "Italy",
      "Portugal",
      "Netherlands",
      "Belgium",
      "Switzerland",
      "Austria",
      "Sweden",
      "Norway",
      "Denmark",
      "Finland",
      "Ireland",
      "Greece",
      "Australia",
    ],
    Movies: [
      "The Godfather",
      "Titanic",
      "Avatar",
      "Star Wars",
      "Jurassic Park",
      "The Lord of the Rings",
      "Harry Potter",
      "Forrest Gump",
      "Pulp Fiction",
    ],
  },
};

// Edit Theme
light.addEventListener("click", () => {
  document.body.style.cssText = `
  background-color: white;
  color:black;`;
  gameInfo.style.borderColor = `black`;
  hangman.style.cssText = `
  background-color: #eee;
  border-color: black`;
  allAnswer.style.backgroundColor = `#eee`;
  answerLetter.style.cssText = `
  background-color: #5cb8e4;
  border-bottom: 3px solid #2260ff;`;
});
night.addEventListener("click", () => {
  document.body.style.cssText = `
  background-color: #181823;
  color: white;`;
  gameInfo.style.borderColor = `white`;
  hangman.style.cssText = `
  background-color: #2B2730;
  border-color: white`;
  allAnswer.style.backgroundColor = `#2B2730`;
  answerLetter.style.cssText = `
  background-color: #eee;
  border-bottom: 3px solid #068fff;`;
});

// Get Player Info And Change The Game for that
play.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (arBtn.dataset.status === `yes` || enBtn.dataset.status === `yes`) {
    document.querySelector(`.overlay`).style.display = `none`;
    playerInfo.style.display = `none`;
    player();
    // words();
    mainContainer.style.display = `flex`;
  }
});

// Add Player Name
function player() {
  if (playerNameInput.value.trim())
    playerName.textContent = playerNameInput.value;
  else playerName.textContent = `Ak-ZeRo`;
}

// Check Any Lang That Player Want
language.addEventListener(`click`, (e) => {
  if (e.target === arBtn) {
    arBtn.dataset.status = `yes`;
    enBtn.dataset.status = `no`;
  } else {
    enBtn.dataset.status = `yes`;
    arBtn.dataset.status = `no`;
  }
});

// Change Language
const arabicText = {
  // gameName: "لعبة الرجل المشنوق",
  playerNameLabel: "اسم اللاعب:",
  categoryNameLabel: "الكلمة من: ",
};

const englishText = {
  gameName: "HANGMAN",
  playerNameLabel: "Player Name:",
  categoryNameLabel: "Word From: ",
};

document.getElementById("arabic").addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.lang = "ar";
    document.getElementById("gameName").textContent = englishText.gameName;
    document.getElementById("playerName").textContent =
      arabicText.playerNameLabel;
    document.getElementById("mainWord").textContent =
      arabicText.categoryNameLabel;
    document.getElementById("answer").style.direction = "rtl";
    category.style.direction = "rtl";
    allLetters.style.direction = "rtl";
    gameWord.style.paddingRight = `5px`;
    addletter(arLetters);
    chooseWord(words.Arabic);
  }
});

document.getElementById("english").addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.lang = "en";
    document.getElementById("gameName").textContent = englishText.gameName;
    document.getElementById("playerName").textContent =
      englishText.playerNameLabel;
    document.getElementById("mainWord").textContent =
      englishText.categoryNameLabel;
    document.getElementById("answer").style.direction = "ltr";
    category.style.direction = "ltr";
    allLetters.style.direction = "ltr";
    gameWord.style.paddingLeft = `5px`;
    addletter(enLetters);
    chooseWord(words.English);
  }
});

// async function words() {
//   try {
//     const data = await fetch("./words.json");
//     const allWords = await data.json();
//     if (arBtn.dataset.status === `yes`) chooseWord(allWords.Arabic);
//     else chooseWord(allWords.English);
//   } catch (reason) {
//     return Error(`Reason: ${reason}`);
//   }
// }

// Add letters
function addletter(lang) {
  allLetters.innerHTML = "";
  lang
    .toUpperCase()
    .split("")
    .forEach((e) => {
      let letter = document.createElement(`a`);
      letter.textContent = e;
      letter.classList.add(`letter`);
      allLetters.append(letter);
    });
}

// Choose Word And Change Game Info
function chooseWord(words) {
  // Choose Word From Words Object
  const keys = Object.keys(words);
  const RandomKeysNum = Math.floor(Math.random() * keys.length);
  const RandomKeys = keys[RandomKeysNum];
  const RandomValNum = Math.floor(Math.random() * keys[RandomKeysNum].length);
  const RandomVal = words[RandomKeys][RandomValNum];
  const arrRandomVal = Array.from(RandomVal);
  // Update Game Word
  chaneGameWord(RandomKeys);
  // Add Span Letter
  addSpan(arrRandomVal);
  // compare keyboardLetter and word answer
  addLetter(RandomVal, arrRandomVal);
}

// Update Game Word
function chaneGameWord(key) {
  if (key === `arabCountries`) gameWord.textContent = `Arab Countries`;
  else if (key === `westernCountries`)
    gameWord.textContent = `Western Countries`;
  else gameWord.textContent = key;
}

// Add Span Letter
function addSpan(arrWord) {
  arrWord.forEach((letter) => {
    const spanLetter = document.createElement(`span`);
    spanLetter.classList.add(`answer-letter`);
    if (letter === " ") spanLetter.classList.add(`space`);
    allAnswer.append(spanLetter);
  });
}
// Add Click And Keyboard Event To All Letters

function addLetter(answer, word) {
  allLetters.addEventListener(`click`, (e) => {
    let status = false;
    check(e.target.innerHTML, word, status, answer);
  });
  document.addEventListener(`keypress`, (e) => {
    let status = false;
    check(e.key.toUpperCase(), word, status, answer);
  });
}

// Check Letter Answer
function check(event, word, status, answer) {
  const arrAllLetters = Array.from(allLetters.children);
  arrAllLetters.forEach((ele) => {
    if (event === ele.innerHTML.toUpperCase()) {
      ele.classList.add(`clicked`);
      word.forEach((letter, index) => {
        if (letter.toUpperCase() == ele.innerHTML.toUpperCase()) {
          status = true;
          document
            .querySelectorAll(`.main-container .container .answer span`)
            .forEach((span, i) => {
              if (index === i) {
                span.textContent = letter;
                span.style.cssText = `
                background-color: #27c39f;
                border: none;`;
              }
            });
        }
      });
    }
  });
  // Check answer was right or wrong
  if (status !== true) {
    wrongAttempts++;
    hangman.classList.add(`wrong-${wrongAttempts}`);
    if (hangman.classList.contains(`wrong-${numErrors}`)) {
      allLetters.classList.add(`finished`);
      gameOver(answer);
    }
    document.querySelector(`#wrong`).play();
  } else {
    document.querySelector(`#correct`).play();
  }
  const upperWord = word.map((ele) => ele.toUpperCase());
  const answerSpan = Array.from(document.querySelectorAll(`.answer-letter`));
  const upperSpan = answerSpan.map((ele) => ele.innerHTML.toUpperCase());
  // Add win popup
  if (
    upperWord.sort().toString().trim() == upperSpan.sort().toString().trim()
  ) {
    win();
  }
}

function showOverlay(content) {
  const overlayContainer = document.createElement("div");
  overlayContainer.className = "overlay-container";

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = content;

  overlayContainer.appendChild(popup);
  document.body.appendChild(overlayContainer);
  allLetters.classList.add("finished");
}

function level() {
  let level;
  if (arBtn.dataset.status === `yes`) {
    return (level = getLevelTextAr());
  } else {
    return (level = getLevelTextEn());
  }
}

function win() {
  const levelText = level();
  const levelMsgs = levelMsg();
  const win = winMsg();
  const play = playAgain();
  const content = `
    <span>${win}</span>
    <span class="rate">${levelMsgs} ${levelText}</span>
    <button class="play-again" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
      <span>${play}</span>
    </button>
  `;

  showOverlay(content);

  document.querySelector(".play-again").addEventListener("click", () => {
    window.location.reload();
  });
}

function levelMsg() {
  if (arBtn.dataset.status === `yes`) {
    return `مستواك`;
  } else {
    return `Your Level Is`;
  }
}

function winMsg() {
  if (arBtn.dataset.status === `yes`) {
    return `تهانيا`;
  } else {
    return `Congratulations!`;
  }
}
function playAgain() {
  if (arBtn.dataset.status === `yes`) {
    return `العب مجددا`;
  } else {
    return `Play Again`;
  }
}

function gameOver(answer) {
  const losesText = loseText();
  const losesMsg = loseMsg();
  const play = playAgain();
  const content = `
    <span>${losesMsg}</span>
    <span>${losesText} ${answer}</span>
    <button class="play-again" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
      <span>${play}</span>
    </button>
  `;

  showOverlay(content);
  document.querySelector(".play-again").addEventListener("click", () => {
    window.location.reload();
  });
}
function loseText() {
  if (arBtn.dataset.status === `yes`) {
    return `الكلمة هي`;
  } else {
    return `Word Is`;
  }
}

function loseMsg() {
  if (arBtn.dataset.status === `yes`) {
    return `خسرت`;
  } else {
    return `Game Over`;
  }
}

function getLevelTextAr() {
  const errorRate = (wrongAttempts / numErrors) * 100;
  if (errorRate > 0 && errorRate <= 37.5) {
    return "متقدم";
  } else if (errorRate > 37.5 && errorRate <= 75) {
    return "متوسط";
  } else if (errorRate > 75 && errorRate <= 100) {
    return "مبتدئ";
  } else {
    return "خبير";
  }
}
function getLevelTextEn() {
  const errorRate = (wrongAttempts / numErrors) * 100;
  if (errorRate > 0 && errorRate <= 37.5) {
    return "Advanced";
  } else if (errorRate > 37.5 && errorRate <= 75) {
    return "Intermediate";
  } else if (errorRate > 75 && errorRate <= 100) {
    return "Beginner";
  } else {
    return "Expert";
  }
}
