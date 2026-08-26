// =========================================
//  Drinking — 喝酒 / 鸡尾酒
//  A sub-page of the "Beyond Code" section. Two blocks:
//    1. Top 10 favourite classic cocktails (a ranked leaderboard)
//    2. Photo album, split into two tabs:
//         · At the Bar   (nights out)
//         · Home Bar      (drinks I mix at home)
//  Data-driven and bilingual. Shares the "preferred-lang" key with the
//  rest of the site. Pure static, no dependencies. A nod to VA-11 Hall-A.
// =========================================

// ---- Top 10 cocktails ----
// Reorder / rewrite to taste — this is just a starting ranking.
//   { name:{en,zh}, base:{en,zh}, note:{en,zh} }
const COCKTAILS = [
    {
        name: { en: "Whiskey Sour", zh: "威士忌酸" },
        base: { en: "Whiskey · Lemon · Sugar · Egg White", zh: "威士忌 · 柠檬 · 糖 · 蛋清" },
        note: { en: "Silky, tart, a cloud of foam on top.", zh: "顺滑、微酸，顶着一层云一样的泡沫。" }
    },
    {
        name: { en: "Margarita", zh: "玛格丽特" },
        base: { en: "Tequila · Lime · Triple Sec", zh: "龙舌兰 · 青柠 · 橙皮酒" },
        note: { en: "Salt, citrus, sunshine.", zh: "盐、柑橘，还有阳光。" }
    },
    {
        name: { en: "Long Island Iced Tea", zh: "长岛冰茶" },
        base: { en: "Gin · Vodka · Rum · Tequila · Triple Sec · Lemon · Cola", zh: "金酒 · 伏特加 · 朗姆 · 龙舌兰 · 橙皮酒 · 柠檬 · 可乐" },
        note: { en: "Five spirits pretending to be iced tea. Sip slowly.", zh: "五种烈酒假装成冰茶，慢点喝。" }
    },
    {
        name: { en: "Gin & Tonic", zh: "金汤力" },
        base: { en: "Gin · Tonic Water", zh: "金酒 · 汤力水" },
        note: { en: "Deceptively simple; everything rides on the gin. Bring a bottle.", zh: "看似简单，全靠金酒说话。来我家记得带一瓶。" }
    },
    {
        name: { en: "Mojito", zh: "莫吉托" },
        base: { en: "Rum · Lime · Mint · Soda", zh: "朗姆 · 青柠 · 薄荷 · 苏打" },
        note: { en: "A garden in a glass for a hot night.", zh: "闷热夜里，一整座花园装进杯子。" }
    },
    {
        name: { en: "New York Sour", zh: "纽约酸" },
        base: { en: "Whiskey · Lemon · Sugar · Red Wine Float", zh: "威士忌 · 柠檬 · 糖 · 红酒浮层" },
        note: { en: "A whiskey sour crowned with a ribbon of red wine.", zh: "威士忌酸，顶上再浮一层红酒。" }
    },
    {
        name: { en: "Zombie", zh: "僵尸" },
        base: { en: "Blended Rums · Lime · Fruit Juices · Falernum", zh: "多款朗姆 · 青柠 · 果汁 · 法勒纳姆糖浆" },
        note: { en: "Tiki firepower — traditionally a two-drink limit.", zh: "提基风的高度数炸弹，传统上限两杯。" }
    },
    {
        name: { en: "Negroni", zh: "尼格罗尼" },
        base: { en: "Gin · Campari · Sweet Vermouth", zh: "金酒 · 金巴利 · 甜味美思" },
        note: { en: "Bitter, bracing, perfectly balanced.", zh: "苦烈而平衡，恰到好处。" }
    },
    {
        name: { en: "Gimlet", zh: "吉姆雷特" },
        base: { en: "Gin · Lime Cordial", zh: "金酒 · 青柠甜露" },
        note: { en: "Gin and lime, sharp and clean.", zh: "金酒配青柠，锋利又干净。" }
    },
    {
        name: { en: "Dry Martini", zh: "干马天尼" },
        base: { en: "Gin · Dry Vermouth", zh: "金酒 · 干味美思" },
        note: { en: "Cold, clean and a little dangerous. Stirred, not shaken.", zh: "冰冷、干净，还有点危险。要搅不要摇。" }
    }
];

// ---- Photo album data ----
// Two tabs. To add a real photo:
//   1. Drop the file in  drinks/assets/bar/  or  drinks/assets/home/
//   2. Add an entry to the matching array below, e.g.:
//        { src: "assets/bar/negroni.jpg" }
// Leave an array empty to show a "coming soon" placeholder for that tab.
const BAR_PHOTOS = [
    // { src: "assets/bar/xxxx.jpg" },
];

const HOME_PHOTOS = [
    // { src: "assets/home/xxxx.jpg" },
];

// ---- Page chrome strings ----
const UI = {
    en: {
        back: "← Back",
        title: "DRINKING",
        sub: "What dispels all sorrows? Only a good drink.",
        intro: "A ranked shelf of the classics I keep coming back to, and photos from the bar and my little home counter.",
        rankTitle: "01. Top 10 Classics",
        rankIntro: "My favourite classic cocktails, ranked. Fight me at the bar.",
        galleryTitle: "02. Photo Album",
        tabBar: "At the Bar",
        tabHome: "Home Bar",
        base: "Base",
        soon: "COMING SOON",
        soonBar: "Bar nights — photos coming soon",
        soonHome: "Home mixes — photos coming soon",
        close: "Close"
    },
    zh: {
        back: "← 返回",
        title: "喝酒",
        sub: "何以解忧？唯有杜康。",
        intro: "一份我一喝再喝的经典鸡尾酒榜单，还有在酒吧和我家小吧台拍的照片。",
        rankTitle: "01. 经典 Top 10",
        rankIntro: "我最喜欢的经典鸡尾酒排行榜。不服来吧台辩。",
        galleryTitle: "02. 相册",
        tabBar: "在酒吧",
        tabHome: "在家自调",
        base: "基酒",
        soon: "敬请期待",
        soonBar: "酒吧之夜 —— 照片敬请期待",
        soonHome: "在家自调 —— 照片敬请期待",
        close: "关闭"
    }
};

const STORAGE_KEY = "preferred-lang";

function currentLang() {
    return document.documentElement.lang === "zh" ? "zh" : "en";
}

// --- Render: Top 10 leaderboard ---
function renderRanking() {
    const lang = currentLang();
    const t = UI[lang];
    const list = document.getElementById("rank-list");
    if (!list) return;
    list.innerHTML = "";

    COCKTAILS.forEach((c, i) => {
        const rank = i + 1;
        const row = document.createElement("article");
        row.className = "rank-row" + (rank === 1 ? " is-top" : "");
        row.innerHTML = `
            <span class="rank-num">${String(rank).padStart(2, "0")}</span>
            <div class="rank-body">
                <h3 class="rank-name">${c.name[lang]}</h3>
                <p class="rank-base"><span class="rank-base-label">${t.base}</span> ${c.base[lang]}</p>
                <p class="rank-note">${c.note[lang]}</p>
            </div>`;
        list.appendChild(row);
    });
}

// --- Photo album: two tabs sharing one sliding viewport ---
let galleryIndex = 0;
let activeTab = "bar"; // "bar" | "home"

function currentPhotos() {
    return activeTab === "home" ? HOME_PHOTOS : BAR_PHOTOS;
}

function buildGallery() {
    const lang = currentLang();
    const t = UI[lang];
    const track = document.getElementById("gallery-track");
    const dots = document.getElementById("gallery-dots");
    if (!track || !dots) return;

    const shots = currentPhotos().filter((p) => p.src);
    track.innerHTML = "";
    dots.innerHTML = "";
    galleryIndex = 0;

    // Empty tab → a single "coming soon" placeholder slide, no dots.
    if (shots.length === 0) {
        const soon = activeTab === "home" ? t.soonHome : t.soonBar;
        const slide = document.createElement("div");
        slide.className = "gallery-slide is-placeholder";
        slide.innerHTML = `
            <div class="gallery-placeholder">
                <span class="gallery-glass" aria-hidden="true">🍸</span>
                <span class="gallery-soon">${soon}</span>
            </div>`;
        track.appendChild(slide);
        updateGalleryChrome(0, 0);
        return;
    }

    shots.forEach((photo, i) => {
        const slide = document.createElement("div");
        slide.className = "gallery-slide";
        slide.innerHTML = `<img src="${photo.src}" alt="${(activeTab === "home" ? t.tabHome : t.tabBar) + " " + (i + 1)}" loading="lazy" draggable="false">`;
        slide.querySelector("img").addEventListener("click", () => openLightbox(photo.src, ""));
        track.appendChild(slide);

        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "gallery-dot";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", `Photo ${i + 1}`);
        dot.addEventListener("click", () => goToSlide(i));
        dots.appendChild(dot);
    });

    goToSlide(0);
}

function updateGalleryChrome(idx, total) {
    const idxEl = document.getElementById("gallery-idx");
    const totalEl = document.getElementById("gallery-total");
    if (idxEl) idxEl.textContent = String(total === 0 ? 0 : idx + 1).padStart(2, "0");
    if (totalEl) totalEl.textContent = String(total).padStart(2, "0");
}

function goToSlide(i) {
    const n = document.querySelectorAll(".gallery-slide:not(.is-placeholder)").length;
    if (n === 0) return;
    galleryIndex = (i % n + n) % n;

    const track = document.getElementById("gallery-track");
    if (track) track.style.transform = `translateX(-${galleryIndex * 100}%)`;

    document.querySelectorAll(".gallery-dot").forEach((d, idx) =>
        d.classList.toggle("is-active", idx === galleryIndex));

    updateGalleryChrome(galleryIndex, n);
}

function nextSlide() { goToSlide(galleryIndex + 1); }
function prevSlide() { goToSlide(galleryIndex - 1); }

function switchTab(tab) {
    if (tab === activeTab) return;
    activeTab = tab;
    document.querySelectorAll(".gtab").forEach((b) =>
        b.classList.toggle("is-active", b.dataset.tab === tab));
    buildGallery();
}

function initGalleryControls() {
    const prev = document.querySelector(".gallery-prev");
    const next = document.querySelector(".gallery-next");
    if (prev) prev.addEventListener("click", prevSlide);
    if (next) next.addEventListener("click", nextSlide);

    document.querySelectorAll(".gtab").forEach((b) =>
        b.addEventListener("click", () => switchTab(b.dataset.tab)));

    // ← / → step through slides, but not while the lightbox is open.
    document.addEventListener("keydown", (e) => {
        if (!document.getElementById("lightbox").hidden) return;
        if (e.key === "ArrowRight") nextSlide();
        else if (e.key === "ArrowLeft") prevSlide();
    });

    // Drag / swipe; a real drag swallows the trailing click so it can't enlarge.
    const stage = document.querySelector(".gallery-stage");
    if (!stage) return;
    let startX = null;
    let dragged = false;
    stage.addEventListener("pointerdown", (e) => { startX = e.clientX; dragged = false; });
    stage.addEventListener("pointerup", (e) => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 45) { dragged = true; (dx < 0 ? nextSlide : prevSlide)(); }
        startX = null;
    });
    stage.addEventListener("pointercancel", () => { startX = null; });
    stage.addEventListener("pointerleave", () => { startX = null; });
    stage.addEventListener("click", (e) => {
        if (dragged) { e.stopPropagation(); e.preventDefault(); dragged = false; }
    }, true);
}

// --- Lightbox ---
function openLightbox(src, cap) {
    const box = document.getElementById("lightbox");
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-cap").textContent = cap;
    box.hidden = false;
    document.body.style.overflow = "hidden";
    box.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
    const box = document.getElementById("lightbox");
    box.hidden = true;
    document.getElementById("lightbox-img").src = "";
    document.body.style.overflow = "";
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

    const closeBtn = document.querySelector(".lightbox-close");
    if (closeBtn) closeBtn.setAttribute("aria-label", t.close);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    renderRanking();
    buildGallery(); // captions/placeholder text are language-dependent
}

function detectInitialLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (saved === "en" || saved === "zh") return saved;
    return (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(detectInitialLanguage());
    initGalleryControls();

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            applyLanguage(currentLang() === "en" ? "zh" : "en");
        });
    }

    document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox").addEventListener("click", (e) => {
        if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !document.getElementById("lightbox").hidden) closeLightbox();
    });
});
