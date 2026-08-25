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
//   1. Drop the image file in  assets/astro/
//   2. Add an entry below, e.g.:
//        { src: "../assets/astro/moon.jpg",
//          en: { cap: "Waxing gibbous over the observatory" },
//          zh: { cap: "天文台上空的盈凸月" } }
// Leave `src` as "" to render a "coming soon" placeholder tile.
const PHOTOS = [
    { src: "", en: { cap: "Observatory night — coming soon" }, zh: { cap: "天文台之夜 —— 敬请期待" } },
    { src: "", en: { cap: "The Moon, up close — coming soon" }, zh: { cap: "望远镜下的木星 —— 敬请期待" } },
    { src: "", en: { cap: "Deep sky — coming soon" }, zh: { cap: "深空天体 —— 敬请期待" } }
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
        cover: "",
        blurb: {
            en: "First contact, but colder and grander than you'd expect — physics as destiny, and a universe that does not care.",
            zh: "一次第一次接触，却比想象中更冷峻、更宏大——把物理写成命运，宇宙从不温柔。"
        }
    },
    {
        title: { en: "Dune", zh: "沙丘" },
        author: { en: "Frank Herbert", zh: "弗兰克·赫伯特" },
        year: "1965",
        cover: "",
        blurb: {
            en: "Desert, prophecy and power. A world so complete you can taste the sand.",
            zh: "沙漠、预言与权力。一个完整到能尝到沙粒的世界。"
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

// --- Render: photo gallery ---
function renderGallery() {
    const lang = currentLang();
    const t = UI[lang];
    const grid = document.getElementById("photo-grid");
    grid.innerHTML = "";

    PHOTOS.forEach((photo) => {
        const cap = photo[lang].cap;

        if (!photo.src) {
            // Placeholder tile — no image yet.
            const tile = document.createElement("div");
            tile.className = "photo-tile is-placeholder";
            tile.innerHTML = `
                <div class="photo-placeholder">
                    <span class="photo-star" aria-hidden="true">✦</span>
                    <span class="photo-soon">${t.soon}</span>
                </div>
                <figcaption class="photo-cap">${cap}</figcaption>`;
            grid.appendChild(tile);
            return;
        }

        const fig = document.createElement("figure");
        fig.className = "photo-tile";
        fig.innerHTML = `
            <button type="button" class="photo-btn" aria-label="${cap}">
                <img src="${photo.src}" alt="${cap}" loading="lazy">
            </button>
            <figcaption class="photo-cap">${cap}</figcaption>`;
        fig.querySelector(".photo-btn").addEventListener("click", () => openLightbox(photo.src, cap));
        grid.appendChild(fig);
    });
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

    renderGallery();
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
