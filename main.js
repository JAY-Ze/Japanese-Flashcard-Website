const data = {
  hiragana: [
    // Vowels
    { char: "あ", romaji: "a", words: ["あさ (asa – morning)", "あめ (ame – rain)"] },
    { char: "い", romaji: "i", words: ["いぬ (inu – dog)", "いえ (ie – house)"] },
    { char: "う", romaji: "u", words: ["うみ (umi – sea)", "うた (uta – song)"] },
    { char: "え", romaji: "e", words: ["えき (eki – station)", "えいが (eiga – movie)"] },
    { char: "お", romaji: "o", words: ["おちゃ (ocha – tea)", "おと (oto – sound)"] },

    // K
    { char: "か", romaji: "ka", words: ["かさ (kasa – umbrella)"] },
    { char: "き", romaji: "ki", words: ["き (ki – tree)"] },
    { char: "く", romaji: "ku", words: ["くるま (kuruma – car)"] },
    { char: "け", romaji: "ke", words: ["けさ (kesa – this morning)"] },
    { char: "こ", romaji: "ko", words: ["こども (kodomo – child)"] },

    // S
    { char: "さ", romaji: "sa", words: ["さくら (sakura – cherry blossom)"] },
    { char: "し", romaji: "shi", words: ["しろ (shiro – white)"] },
    { char: "す", romaji: "su", words: ["すし (sushi)"] },
    { char: "せ", romaji: "se", words: ["せかい (sekai – world)"] },
    { char: "そ", romaji: "so", words: ["そら (sora – sky)"] },

    // T
    { char: "た", romaji: "ta", words: ["たべる (taberu – eat)"] },
    { char: "ち", romaji: "chi", words: ["ちず (chizu – map)"] },
    { char: "つ", romaji: "tsu", words: ["つき (tsuki – moon)"] },
    { char: "て", romaji: "te", words: ["て (te – hand)"] },
    { char: "と", romaji: "to", words: ["とけい (tokei – watch)"] },

    // N
    { char: "な", romaji: "na", words: ["なまえ (namae – name)"] },
    { char: "に", romaji: "ni", words: ["にほん (nihon – Japan)"] },
    { char: "ぬ", romaji: "nu", words: ["いぬ (inu – dog)"] },
    { char: "ね", romaji: "ne", words: ["ねこ (neko – cat)"] },
    { char: "の", romaji: "no", words: ["のむ (nomu – drink)"] },

    // H
    { char: "は", romaji: "ha", words: ["はな (hana – flower)"] },
    { char: "ひ", romaji: "hi", words: ["ひ (hi – sun)"] },
    { char: "ふ", romaji: "fu", words: ["ふね (fune – boat)"] },
    { char: "へ", romaji: "he", words: ["へや (heya – room)"] },
    { char: "ほ", romaji: "ho", words: ["ほん (hon – book)"] },

    // M
    { char: "ま", romaji: "ma", words: ["まち (machi – town)"] },
    { char: "み", romaji: "mi", words: ["みず (mizu – water)"] },
    { char: "む", romaji: "mu", words: ["むし (mushi – insect)"] },
    { char: "め", romaji: "me", words: ["め (me – eye)"] },
    { char: "も", romaji: "mo", words: ["もり (mori – forest)"] },

    // Y
    { char: "や", romaji: "ya", words: ["やま (yama – mountain)"] },
    { char: "ゆ", romaji: "yu", words: ["ゆき (yuki – snow)"] },
    { char: "よ", romaji: "yo", words: ["よる (yoru – night)"] },

    // R
    { char: "ら", romaji: "ra", words: ["らいねん (rainen – next year)"] },
    { char: "り", romaji: "ri", words: ["りんご (ringo – apple)"] },
    { char: "る", romaji: "ru", words: ["くる (kuru – come)"] },
    { char: "れ", romaji: "re", words: ["れきし (rekishi – history)"] },
    { char: "ろ", romaji: "ro", words: ["ろく (roku – six)"] },

    // W + N
    { char: "わ", romaji: "wa", words: ["わたし (watashi – I)"] },
    { char: "を", romaji: "wo", words: ["Used as object particle"] },
    { char: "ん", romaji: "n", words: ["にほん (nihon – Japan)"] }
  ],

  katakana: [
    // Vowels
    { char: "ア", romaji: "a", words: ["アイス (aisu – ice cream)"] },
    { char: "イ", romaji: "i", words: ["インド (indo – India)"] },
    { char: "ウ", romaji: "u", words: ["ウイルス (uirusu – virus)"] },
    { char: "エ", romaji: "e", words: ["エネルギー (enerugī – energy)"] },
    { char: "オ", romaji: "o", words: ["オレンジ (orenji – orange)"] },

    // K
    { char: "カ", romaji: "ka", words: ["カメラ (kamera – camera)"] },
    { char: "キ", romaji: "ki", words: ["キロ (kiro – kilo)"] },
    { char: "ク", romaji: "ku", words: ["クラス (kurasu – class)"] },
    { char: "ケ", romaji: "ke", words: ["ケーキ (kēki – cake)"] },
    { char: "コ", romaji: "ko", words: ["コーヒー (kōhī – coffee)"] },

    // S
    { char: "サ", romaji: "sa", words: ["サラダ (sarada – salad)"] },
    { char: "シ", romaji: "shi", words: ["シャツ (shatsu – shirt)"] },
    { char: "ス", romaji: "su", words: ["スーパー (sūpā – supermarket)"] },
    { char: "セ", romaji: "se", words: ["セット (setto – set)"] },
    { char: "ソ", romaji: "so", words: ["ソファ (sofa)"] },

    // T
    { char: "タ", romaji: "ta", words: ["タクシー (takushī – taxi)"] },
    { char: "チ", romaji: "chi", words: ["チーズ (chīzu – cheese)"] },
    { char: "ツ", romaji: "tsu", words: ["ツアー (tsuā – tour)"] },
    { char: "テ", romaji: "te", words: ["テレビ (terebi – TV)"] },
    { char: "ト", romaji: "to", words: ["トマト (tomato)"] },

    // N
    { char: "ナ", romaji: "na", words: ["ナイフ (naifu – knife)"] },
    { char: "ニ", romaji: "ni", words: ["ニュース (nyūsu – news)"] },
    { char: "ヌ", romaji: "nu", words: ["ヌードル (nūdoru – noodles)"] },
    { char: "ネ", romaji: "ne", words: ["ネコ (neko – cat)"] },
    { char: "ノ", romaji: "no", words: ["ノート (nōto – notebook)"] },

    // H
    { char: "ハ", romaji: "ha", words: ["ハンバーガー (hanbāgā)"] },
    { char: "ヒ", romaji: "hi", words: ["ヒント (hinto – hint)"] },
    { char: "フ", romaji: "fu", words: ["フォーク (fōku – fork)"] },
    { char: "ヘ", romaji: "he", words: ["ヘルメット (herumetto – helmet)"] },
    { char: "ホ", romaji: "ho", words: ["ホテル (hoteru – hotel)"] },

    // M
    { char: "マ", romaji: "ma", words: ["マップ (mappu – map)"] },
    { char: "ミ", romaji: "mi", words: ["ミルク (miruku – milk)"] },
    { char: "ム", romaji: "mu", words: ["ムービー (mūbī – movie)"] },
    { char: "メ", romaji: "me", words: ["メール (mēru – mail)"] },
    { char: "モ", romaji: "mo", words: ["モード (mōdo – mode)"] },

    // Y
    { char: "ヤ", romaji: "ya", words: ["ヨガ (yoga)"] },
    { char: "ユ", romaji: "yu", words: ["ユニット (yunitto – unit)"] },
    { char: "ヨ", romaji: "yo", words: ["ヨーロッパ (Yōroppa – Europe)"] },

    // R
    { char: "ラ", romaji: "ra", words: ["ラーメン (rāmen)"] },
    { char: "リ", romaji: "ri", words: ["リモコン (rimokon – remote)"] },
    { char: "ル", romaji: "ru", words: ["ルール (rūru – rule)"] },
    { char: "レ", romaji: "re", words: ["レストラン (resutoran – restaurant)"] },
    { char: "ロ", romaji: "ro", words: ["ロボット (robotto – robot)"] },

    // W + N
    { char: "ワ", romaji: "wa", words: ["ワイン (wain – wine)"] },
    { char: "ヲ", romaji: "wo", words: ["Rarely used"] },
    { char: "ン", romaji: "n", words: ["コンビニ (konbini – convenience store)"] }
  ]
};

let currentMode = "hiragana";
let currentCard = {};

const characterEl = document.getElementById("character");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const wordsEl = document.getElementById("words");
const modeEl = document.getElementById("mode");

function getRandomCard() {
  const set = data[currentMode];
  return set[Math.floor(Math.random() * set.length)];
}

function loadCard() {
  currentCard = getRandomCard();
  characterEl.textContent = currentCard.char;
  answerEl.value = "";
  feedbackEl.textContent = "";
  wordsEl.innerHTML = "";
  answerEl.focus();
}

function checkAnswer() {
  const userAnswer = answerEl.value.trim().toLowerCase();
  if (!userAnswer) return;

  if (userAnswer === currentCard.romaji) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "#4ade80";
  } else {
    feedbackEl.textContent = `❌ Wrong — ${currentCard.romaji}`;
    feedbackEl.style.color = "#f87171";
  }

  wordsEl.innerHTML = `
    <p class="mt-2 text-neutral-400">Common words:</p>
    <ul class="mt-1 list-disc list-inside">
      ${currentCard.words.map(w => `<li>${w}</li>`).join("")}
    </ul>
  `;
}

function nextCard() {
  loadCard();
}

modeEl.addEventListener("change", () => {
  currentMode = modeEl.value;
  loadCard();
});

answerEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});

loadCard();
