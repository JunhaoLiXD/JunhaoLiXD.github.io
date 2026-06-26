// =========================================
//  Cat Tarot — 猫猫塔罗
//  22 Major Arcana, re-imagined as cats. Three-card spread
//  (Past / Present / Future) with reversals. Pure static, no deps.
// =========================================

// Each card: number, roman, palette (fur/eye), a theme prop (emoji),
// and bilingual upright/reversed meanings. The cat art is one shared
// pixel SVG, recolored per card.
const DECK = [
    { n: 0,  r: "0",     fur: "#f0e9ff", eye: "#39e6d6", prop: "✨",
      en: { cat: "The Curious Kitten", up: "New beginnings, a fearless leap, open-hearted curiosity.", rev: "Recklessness, hesitation, a fear of the unknown." },
      zh: { cat: "好奇的小猫", up: "全新的开始、纵身一跃、敞开心扉的好奇。", rev: "鲁莽、犹豫、对未知的恐惧。" } },
    { n: 1,  r: "I",     fur: "#b06bff", eye: "#ffd24a", prop: "🪄",
      en: { cat: "The Trickster", up: "Skill, focus, turning will into reality.", rev: "Scattered energy, tricks that misfire, self-doubt." },
      zh: { cat: "戏法猫", up: "才能、专注、将意志化为现实。", rev: "精力涣散、弄巧成拙、自我怀疑。" } },
    { n: 2,  r: "II",    fur: "#6d8bff", eye: "#39e6d6", prop: "🌑",
      en: { cat: "The Midnight Cat", up: "Intuition, secrets, a quiet inner knowing.", rev: "Ignored instincts, hidden truths surfacing." },
      zh: { cat: "午夜猫", up: "直觉、秘密、静默的内在洞察。", rev: "被忽视的直觉、隐藏的真相浮现。" } },
    { n: 3,  r: "III",   fur: "#ff7eb6", eye: "#ffd24a", prop: "👑",
      en: { cat: "The Queen Cat", up: "Nurturing, abundance, warm comfort.", rev: "Smothering, neglect, a creative block." },
      zh: { cat: "猫后", up: "滋养、丰盛、温暖的舒适。", rev: "过度溺爱、疏于照料、灵感枯竭。" } },
    { n: 4,  r: "IV",    fur: "#ff4d8d", eye: "#39e6d6", prop: "🏛️",
      en: { cat: "The Alpha Tom", up: "Structure, authority, steady control.", rev: "Rigidity, domineering, a loss of grip." },
      zh: { cat: "猫王", up: "秩序、权威、稳定的掌控。", rev: "僵化、专断、失去掌控。" } },
    { n: 5,  r: "V",     fur: "#ffd24a", eye: "#b06bff", prop: "📜",
      en: { cat: "The Wise Old Cat", up: "Tradition, guidance, learning the ropes.", rev: "Rebellion, questioning dogma, your own path." },
      zh: { cat: "智慧老猫", up: "传统、指引、循序学习。", rev: "叛逆、质疑成规、走自己的路。" } },
    { n: 6,  r: "VI",    fur: "#ff4d8d", eye: "#39e6d6", prop: "💕",
      en: { cat: "The Two Cats", up: "Connection, a meaningful choice, harmony.", rev: "Discord, misalignment, a hard choice." },
      zh: { cat: "一对猫", up: "连结、重要的选择、和谐。", rev: "失和、错位、艰难的抉择。" } },
    { n: 7,  r: "VII",   fur: "#39e6d6", eye: "#ff4d8d", prop: "🏹",
      en: { cat: "The Hunt", up: "Drive, willpower, victory through focus.", rev: "Stalling, scattered direction, losing control." },
      zh: { cat: "狩猎", up: "冲劲、意志、专注致胜。", rev: "停滞、方向涣散、失控。" } },
    { n: 8,  r: "VIII",  fur: "#ffb14d", eye: "#b06bff", prop: "🐾",
      en: { cat: "The Gentle Paw", up: "Gentle courage, patience, quiet inner power.", rev: "Self-doubt, raw impulse, a depleted spirit." },
      zh: { cat: "温柔的爪", up: "温柔的勇气、耐心、静默的内在力量。", rev: "自我怀疑、被冲动支配、能量耗竭。" } },
    { n: 9,  r: "IX",    fur: "#8a93b5", eye: "#39e6d6", prop: "🏮",
      en: { cat: "The Lone Stray", up: "Solitude, reflection, seeking your truth.", rev: "Isolation, feeling lost, avoiding the world." },
      zh: { cat: "独行的流浪猫", up: "独处、内省、寻找你的真相。", rev: "孤立、迷失、逃避世界。" } },
    { n: 10, r: "X",     fur: "#b06bff", eye: "#ffd24a", prop: "🧶",
      en: { cat: "The Ball of Yarn", up: "A turning point, luck, the wheel of cycles.", rev: "Bad timing, resisting change, stuck in a rut." },
      zh: { cat: "毛线球", up: "转折点、运气、循环之轮。", rev: "时运不济、抗拒变化、原地打转。" } },
    { n: 11, r: "XI",    fur: "#e8e6f0", eye: "#39e6d6", prop: "⚖️",
      en: { cat: "The Balanced Cat", up: "Fairness, truth, cause and effect.", rev: "Bias, avoidance, an account left unsettled." },
      zh: { cat: "平衡之猫", up: "公正、真相、因果。", rev: "偏颇、逃避、未了的账。" } },
    { n: 12, r: "XII",   fur: "#6dd0ff", eye: "#ff4d8d", prop: "🙃",
      en: { cat: "The Upside-down Cat", up: "A pause, a new perspective, letting go.", rev: "Stalling, pointless sacrifice, feeling stuck." },
      zh: { cat: "四脚朝天的猫", up: "暂停、换个角度、臣服与放手。", rev: "拖延、无谓的牺牲、卡住动弹不得。" } },
    { n: 13, r: "XIII",  fur: "#2c2647", eye: "#ff4d8d", prop: "🌀",
      en: { cat: "The Ninth Life", up: "An ending, transformation, a fresh life.", rev: "Clinging on, fear of change, stagnation." },
      zh: { cat: "第九条命", up: "结束、蜕变、崭新的一生。", rev: "紧抓不放、恐惧改变、停滞。" } },
    { n: 14, r: "XIV",   fur: "#39e6d6", eye: "#ffd24a", prop: "🫗",
      en: { cat: "The Groomer", up: "Balance, patience, blending things just right.", rev: "Excess, impatience, things knocked off-balance." },
      zh: { cat: "梳毛", up: "平衡、耐心、调和得恰到好处。", rev: "过度、急躁、失衡。" } },
    { n: 15, r: "XV",    fur: "#ff4d8d", eye: "#ffd24a", prop: "⛓️",
      en: { cat: "The Feral", up: "Temptation, attachment, wild instinct.", rev: "Breaking free, releasing what binds you." },
      zh: { cat: "野猫", up: "诱惑、执着、野性本能。", rev: "挣脱束缚、放下绑住你的东西。" } },
    { n: 16, r: "XVI",   fur: "#ff6b6b", eye: "#39e6d6", prop: "🏺",
      en: { cat: "The Toppled Vase", up: "Sudden upheaval, things knocked down to rebuild.", rev: "Disaster narrowly avoided, a slow unraveling." },
      zh: { cat: "被推落的花瓶", up: "突如其来的剧变、被推倒以重建。", rev: "勉强避开的灾难、缓慢的崩解。" } },
    { n: 17, r: "XVII",  fur: "#6d8bff", eye: "#39e6d6", prop: "⭐",
      en: { cat: "The Stargazer Cat", up: "Hope, healing, a guiding light.", rev: "Doubt, dimmed faith, feeling disconnected." },
      zh: { cat: "观星猫", up: "希望、疗愈、指引的光。", rev: "怀疑、信念黯淡、失去连结。" } },
    { n: 18, r: "XVIII", fur: "#b06bff", eye: "#ffd24a", prop: "🌙",
      en: { cat: "The Night Prowler", up: "Mystery, dreams, trusting the dark.", rev: "The fog lifting, hidden fears revealed." },
      zh: { cat: "夜行者", up: "神秘、梦境、信任黑暗。", rev: "迷雾散去、隐藏的恐惧现形。" } },
    { n: 19, r: "XIX",   fur: "#ffd24a", eye: "#ff4d8d", prop: "☀️",
      en: { cat: "The Sunbeam Nap", up: "Joy, warmth, success, pure vitality.", rev: "Clouded joy, delays, a low spark." },
      zh: { cat: "阳光午睡", up: "喜悦、温暖、成功、纯粹的活力。", rev: "被遮蔽的喜悦、延迟、活力不足。" } },
    { n: 20, r: "XX",    fur: "#c9b6ff", eye: "#39e6d6", prop: "🔔",
      en: { cat: "The Call Home", up: "Awakening, a reckoning, a clear call.", rev: "Self-doubt, ignoring the call home." },
      zh: { cat: "归家的呼唤", up: "觉醒、清算、清晰的召唤。", rev: "自我怀疑、对归家的呼唤充耳不闻。" } },
    { n: 21, r: "XXI",   fur: "#39e6d6", eye: "#ff4d8d", prop: "🌐",
      en: { cat: "The Whole Territory", up: "Completion, wholeness, a sense of belonging.", rev: "Loose ends, almost-there, a final delay." },
      zh: { cat: "完整的领地", up: "圆满、完整、归属感。", rev: "未竟之事、功亏一篑、最后的延宕。" } }
];

// Traditional arcana names, shown alongside each card's cat name.
const TRAD = {
    0:  { en: "The Fool",          zh: "愚者" },
    1:  { en: "The Magician",      zh: "魔术师" },
    2:  { en: "The High Priestess",zh: "女祭司" },
    3:  { en: "The Empress",       zh: "皇后" },
    4:  { en: "The Emperor",       zh: "皇帝" },
    5:  { en: "The Hierophant",    zh: "教皇" },
    6:  { en: "The Lovers",        zh: "恋人" },
    7:  { en: "The Chariot",       zh: "战车" },
    8:  { en: "Strength",          zh: "力量" },
    9:  { en: "The Hermit",        zh: "隐士" },
    10: { en: "Wheel of Fortune",  zh: "命运之轮" },
    11: { en: "Justice",           zh: "正义" },
    12: { en: "The Hanged Man",    zh: "倒吊人" },
    13: { en: "Death",             zh: "死神" },
    14: { en: "Temperance",        zh: "节制" },
    15: { en: "The Devil",         zh: "恶魔" },
    16: { en: "The Tower",         zh: "高塔" },
    17: { en: "The Star",          zh: "星星" },
    18: { en: "The Moon",          zh: "月亮" },
    19: { en: "The Sun",           zh: "太阳" },
    20: { en: "Judgement",         zh: "审判" },
    21: { en: "The World",         zh: "世界" }
};

// Page chrome strings (the deck meanings live in DECK above).
const UI = {
    en: {
        title: "CAT TAROT",
        sub: "A three-card draw from the Glitch City cat deck",
        intro: "Take a breath, hold your question in mind, then deal the cards. Past · Present · Future — cards may fall reversed.",
        deal: "DEAL CARDS",
        again: "DRAW AGAIN",
        revealAll: "REVEAL ALL",
        back: "← Back",
        flip: "TAP TO REVEAL",
        pos: ["PAST", "PRESENT", "FUTURE"],
        hint: "Click a card to flip it."
    },
    zh: {
        title: "猫猫塔罗",
        sub: "来自 Glitch City 猫咪牌组的三张占卜",
        intro: "深呼吸，在心里默念你的问题，然后发牌。过去 · 现在 · 未来 —— 牌可能逆位出现。",
        deal: "发牌",
        again: "重新占卜",
        revealAll: "全部翻开",
        back: "← 返回",
        flip: "点击翻牌",
        pos: ["过去", "现在", "未来"],
        hint: "点击卡牌即可翻开。"
    }
};

const STORAGE_KEY = "preferred-lang";

// --- Shared pixel cat (geometric SVG, recolored via CSS vars --fur / --eye) ---
function catSVG() {
    return `
<svg class="cat" viewBox="0 0 24 24" shape-rendering="crispEdges" role="img" aria-label="pixel cat">
  <g class="cat-fur">
    <rect x="18" y="9" width="3" height="11"/>
    <rect x="18" y="7" width="5" height="3"/>
    <rect x="5" y="12" width="13" height="9"/>
    <rect x="6" y="4" width="11" height="9"/>
    <polygon points="6,4 6,-1 10,4"/>
    <polygon points="17,4 17,-1 13,4"/>
  </g>
  <polygon class="cat-ear" points="7,3.5 7,0.5 9,3.5"/>
  <polygon class="cat-ear" points="16,3.5 16,0.5 14,3.5"/>
  <rect class="cat-belly" x="8" y="14" width="7" height="7"/>
  <rect class="cat-paw" x="6" y="19" width="3" height="2"/>
  <rect class="cat-paw" x="14" y="19" width="3" height="2"/>
  <rect class="cat-eye" x="8" y="7" width="2" height="3"/>
  <rect class="cat-eye" x="13" y="7" width="2" height="3"/>
  <rect class="cat-nose" x="11" y="10" width="2" height="1"/>
  <rect class="cat-whisker" x="2" y="9" width="4" height="1"/>
  <rect class="cat-whisker" x="17" y="9" width="4" height="1"/>
</svg>`;
}

function currentLang() {
    return document.documentElement.lang === "zh" ? "zh" : "en";
}

// --- Draw logic ---
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let currentDraw = null; // [{card, reversed}, x3]

function deal() {
    const picks = shuffle(DECK).slice(0, 3);
    currentDraw = picks.map((card) => ({ card, reversed: Math.random() < 0.5 }));
    renderSpread();
}

function renderSpread() {
    const lang = currentLang();
    const t = UI[lang];
    const spread = document.getElementById("spread");
    spread.innerHTML = "";

    currentDraw.forEach((slot, i) => {
        const { card, reversed } = slot;
        const c = card[lang];
        const trad = TRAD[card.n][lang];
        const meaning = reversed ? c.rev : c.up;

        const el = document.createElement("div");
        el.className = "tarot-card";
        el.style.setProperty("--fur", card.fur);
        el.style.setProperty("--eye", card.eye);
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "button");
        el.setAttribute("aria-label", `${t.pos[i]} — ${t.flip}`);
        el.innerHTML = `
          <div class="card-inner">
            <div class="card-back">
              <div class="card-back-sigil">${catSVG()}</div>
              <span class="card-back-label">${t.flip}</span>
            </div>
            <div class="card-front ${reversed ? "is-reversed" : ""}">
              <div class="card-pos">${t.pos[i]}</div>
              <div class="card-art">
                <span class="card-prop" aria-hidden="true">${card.prop}</span>
                <div class="card-cat">${catSVG()}</div>
              </div>
              <div class="card-info">
                <div class="card-trad">${trad} · ${card.r}</div>
                <div class="card-name">${c.cat}</div>
                <p class="card-meaning">${meaning}</p>
              </div>
            </div>
          </div>`;

        const flip = () => el.classList.add("flipped");
        el.addEventListener("click", flip);
        el.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
        });

        spread.appendChild(el);
    });

    document.getElementById("controls-initial").hidden = true;
    document.getElementById("controls-result").hidden = false;
}

function revealAll() {
    document.querySelectorAll(".tarot-card").forEach((c) => c.classList.add("flipped"));
}

// --- Language ---
function applyLanguage(lang) {
    const t = UI[lang] || UI.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-t]").forEach((el) => {
        const key = el.getAttribute("data-t");
        if (t[key] !== undefined) el.textContent = t[key];
    });

    const toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = lang === "en" ? "中文" : "EN";

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    if (currentDraw) renderSpread(); // re-render cards in the new language
}

function detectInitialLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (saved === "en" || saved === "zh") return saved;
    return (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(detectInitialLanguage());

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            applyLanguage(currentLang() === "en" ? "zh" : "en");
        });
    }

    document.getElementById("deal-btn").addEventListener("click", deal);
    document.getElementById("again-btn").addEventListener("click", deal);
    document.getElementById("reveal-btn").addEventListener("click", revealAll);
});
