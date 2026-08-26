// =========================================
//  Astronomy — 天文
//  A sub-page of the "Beyond Code" section. Two blocks:
//    1. Photo gallery  (observatory visits + astrophotography)
//    2. Sci-fi bookshelf (novels I recommend)
//  Data-driven and bilingual. Shares the "preferred-lang" key
//  with the rest of the site. Pure static, no dependencies.
// =========================================

// ---- Photo gallery data ----
// To add a real photo:
//   1. Drop the image file in  astronomy/assets/
//   2. Add an entry below, e.g.:
//        { src: "assets/moon.jpg",
//          en: { cap: "Waxing gibbous over the observatory" },
//          zh: { cap: "天文台上空的盈凸月" } }
// Leave `src` as "" to render a "coming soon" placeholder tile.
const PHOTOS = [
    {
        src: "assets/IMG_1692.JPEG",
        en: { cap: "Star party at the observatory — red lights, a dome, and a plane's contrail overhead" },
        zh: { cap: "天文台的观星之夜——红色的灯、圆顶，还有划过夜空的火箭尾迹" }
    },
    {
        src: "assets/IMG_1697.JPEG",
        en: { cap: "At the eyepiece, under red light, the dome slit open to the sky" },
        zh: { cap: "红光下凑到目镜前，圆顶的缝隙敞开着，对着星空" }
    },
    {
        src: "assets/IMG_1698.JPEG",
        en: { cap: "Inside the dome — the big scope tips toward the open slit" },
        zh: { cap: "圆顶内部——大望远镜仰向敞开的观测缝" }
    },
    {
        src: "assets/IMG_1699.JPEG",
        en: { cap: "The main telescope up close, mid tour" },
        zh: { cap: "参观途中，近距离看主望远镜" }
    },
    {
        src: "assets/IMG_5101.JPEG",
        en: { cap: "A night of imaging — laptop, red lamp and the rig tracking the sky" },
        zh: { cap: "一整夜的拍摄——笔记本、红光台灯，和追着星空转的设备" }
    },
    {
        src: "assets/IMG_9902.JPEG",
        en: { cap: "A comet over the fields at dusk, tail pointing up from the horizon" },
        zh: { cap: "暮色下田野上空的彗星，长尾自地平线向上扬起" }
    }
];

// ---- Sci-fi bookshelf data ----
// Replace / extend with your own picks. `cover` is optional — leave "" to
// render a pixel-book placeholder built from the title's first letter.
//   { title:{en,zh}, author:{en,zh}, year:"1965", cover:"",
//     blurb:{en:"...", zh:"..."} }
const BOOKS = [
    {
        title: { en: "The Three-Body Problem", zh: "三体" },
        author: { en: "Liu Cixin", zh: "刘慈欣" },
        year: "2008",
        cover: "assets/cover-santi.svg",
        blurb: {
            en: "First contact, but colder and grander than you'd expect — physics as destiny, and a universe that does not care.",
            zh: "一次第一次接触，却比想象中更冷峻、更宏大——把物理写成命运，宇宙从不温柔。"
        }
    },
    {
        title: { en: "Mountain", zh: "山" },
        author: { en: "Liu Cixin", zh: "刘慈欣" },
        year: "2006",
        cover: "assets/cover-shan.svg",
        blurb: {
            en: "A short story about the pull to climb — a sailor, and a race born inside a hollow world that spent eons digging its way up toward the stars.",
            zh: "一篇关于「攀登」的短篇——一个水手，和一个诞生于空心世界内部、用亿万年凿穿岩层、只为向星空攀登的种族。"
        }
    }
];

// ---- Page chrome strings ----
const UI = {
    en: {
        back: "← Back",
        title: "ASTRONOMY",
        sub: "Observatory nights, and the sci-fi that got me looking up",
        intro: "Romance isn't found only here on Earth. Below: photos I've taken, and novels I keep recommending.",
        galleryTitle: "01. Photo Album",
        galleryIntro: "Observatory visits and astrophotography. Click a photo to enlarge.",
        booksTitle: "02. Sci-Fi Shelf",
        booksIntro: "Novels I love — the ones I'd hand you first.",
        soon: "COMING SOON",
        by: "by",
        close: "Close"
    },
    zh: {
        back: "← 返回",
        title: "天文",
        sub: "天文台之夜，以及让我抬头仰望的科幻",
        intro: "浪漫的事物，不仅仅在地球上。下面是我拍的照片，和我一直在安利的小说。",
        galleryTitle: "01. 相册",
        galleryIntro: "天文台之行与天文摄影。点击照片可放大。",
        booksTitle: "02. 科幻书架",
        booksIntro: "我很喜欢的小说——最想第一时间塞给你的那几本。",
        soon: "敬请期待",
        by: "作者",
        close: "关闭"
    }
};

const STORAGE_KEY = "preferred-lang";

function currentLang() {
    return document.documentElement.lang === "zh" ? "zh" : "en";
}

// --- Photo carousel ("observation deck") ---
// One framed viewport; photos slide horizontally. No visible captions —
// arrows, dots, drag/swipe and ← → keys drive it; click a photo to enlarge.
let galleryIndex = 0;

function buildGallery() {
    const track = document.getElementById("gallery-track");
    const dots = document.getElementById("gallery-dots");
    if (!track || !dots) return;

    // Photos without a real src are skipped (placeholders don't slide well).
    const shots = PHOTOS.filter((p) => p.src);
    track.innerHTML = "";
    dots.innerHTML = "";

    shots.forEach((photo, i) => {
        const alt = (photo.en && photo.en.cap) || "Astronomy photo";

        const slide = document.createElement("div");
        slide.className = "gallery-slide";
        slide.innerHTML = `<img src="${photo.src}" alt="${alt}" loading="lazy" draggable="false">`;
        // Click enlarges via the shared lightbox — no caption passed.
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

    const total = document.getElementById("gallery-total");
    if (total) total.textContent = String(shots.length).padStart(2, "0");

    goToSlide(0);
}

function goToSlide(i) {
    const n = document.querySelectorAll(".gallery-slide").length;
    if (n === 0) return;
    galleryIndex = (i % n + n) % n;

    const track = document.getElementById("gallery-track");
    if (track) track.style.transform = `translateX(-${galleryIndex * 100}%)`;

    document.querySelectorAll(".gallery-dot").forEach((d, idx) =>
        d.classList.toggle("is-active", idx === galleryIndex));

    const idxEl = document.getElementById("gallery-idx");
    if (idxEl) idxEl.textContent = String(galleryIndex + 1).padStart(2, "0");
}

function nextSlide() { goToSlide(galleryIndex + 1); }
function prevSlide() { goToSlide(galleryIndex - 1); }

// Wire arrows, keyboard and drag/swipe. Runs once.
function initGalleryControls() {
    const prev = document.querySelector(".gallery-prev");
    const next = document.querySelector(".gallery-next");
    if (prev) prev.addEventListener("click", prevSlide);
    if (next) next.addEventListener("click", nextSlide);

    // ← / → step through slides, but not while the lightbox is open.
    document.addEventListener("keydown", (e) => {
        if (!document.getElementById("lightbox").hidden) return;
        if (e.key === "ArrowRight") nextSlide();
        else if (e.key === "ArrowLeft") prevSlide();
    });

    // Drag / swipe. A small movement is treated as a click (→ lightbox);
    // a real drag slides and swallows the trailing click so it can't enlarge.
    const stage = document.querySelector(".gallery-stage");
    if (!stage) return;
    let startX = null;
    let dragged = false;
    stage.addEventListener("pointerdown", (e) => { startX = e.clientX; dragged = false; });
    stage.addEventListener("pointerup", (e) => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 45) {
            dragged = true;
            (dx < 0 ? nextSlide : prevSlide)();
        }
        startX = null;
    });
    stage.addEventListener("pointercancel", () => { startX = null; });
    stage.addEventListener("pointerleave", () => { startX = null; });
    // Capture-phase: if the pointerup was a drag, eat the click on the image.
    stage.addEventListener("click", (e) => {
        if (dragged) { e.stopPropagation(); e.preventDefault(); dragged = false; }
    }, true);
}

// --- Render: sci-fi bookshelf ---
function renderBooks() {
    const lang = currentLang();
    const t = UI[lang];
    const grid = document.getElementById("book-grid");
    grid.innerHTML = "";

    BOOKS.forEach((book) => {
        const title = book.title[lang];
        const author = book.author[lang];
        const blurb = book.blurb[lang];

        const cover = book.cover
            ? `<img class="book-cover" src="${book.cover}" alt="${title}" loading="lazy">`
            : `<div class="book-cover book-cover-ph" aria-hidden="true"><span>${title.charAt(0)}</span></div>`;

        const card = document.createElement("article");
        card.className = "book-card";
        card.innerHTML = `
            ${cover}
            <div class="book-info">
                <h3 class="book-title">${title}</h3>
                <p class="book-meta">${t.by} ${author}${book.year ? " · " + book.year : ""}</p>
                <p class="book-blurb">${blurb}</p>
            </div>`;
        grid.appendChild(card);
    });
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

    // The lightbox close button keeps its ✕ glyph; only its label is translated.
    const closeBtn = document.querySelector(".lightbox-close");
    if (closeBtn) closeBtn.setAttribute("aria-label", t.close);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    // The photo carousel has no visible text, so it's language-independent
    // and built once (see DOMContentLoaded). Only the bookshelf re-renders.
    renderBooks();
}

function detectInitialLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (saved === "en" || saved === "zh") return saved;
    return (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(detectInitialLanguage());
    buildGallery();
    initGalleryControls();

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            applyLanguage(currentLang() === "en" ? "zh" : "en");
        });
    }

    // Lightbox close: button, backdrop click, Escape.
    document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox").addEventListener("click", (e) => {
        if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !document.getElementById("lightbox").hidden) closeLightbox();
    });
});
