// =========================================
//  Bilingual (EN / ZH) support
//  - Each translatable element carries a data-i18n="key".
//  - The English text also lives in index.html as the default,
//    so the page still reads correctly with JavaScript disabled.
//  - Values may contain inline HTML (e.g. <strong>), so we set innerHTML.
// =========================================

const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.beyond": "Beyond",
        "nav.contact": "Contact",
        "nav.tarot": "🔮 Tarot",

        "hero.role": "CV Researcher · J-Music Lover · Cat-supervised",
        "hero.hello": "HELLO, I'M",
        "hero.name": "JUNHAO.",
        "hero.subtitle": "Welcome to my site! There are no easter eggs here… probably.",
        "hero.cta1": "View My Work",
        "hero.cta2": "Email Me",

        "about.title": "01. About Me",
        "about.p1": "Hi, I'm Junhao Li — currently majoring in <strong>Computer Science</strong> with a minor in <strong>Astronomy</strong> at the University of Florida. Right now I'm really into <strong>computer vision and AI models</strong>, and I love tinkering with all kinds of open-source projects. Rather than letting an idea stay just an idea, I enjoy actually building it, getting it to run, and then polishing it bit by bit.",
        "about.p2": "Music is an essential part of who I am. Lately I've been listening mostly to Japanese music, especially <strong>ZUTOMAYO (ずっと真夜中でいいのに。) — if you're an ACAね fan too, then we're friends for life!</strong> Right now I'm still basking in the memories of their Hong Kong concert.",
        "about.p3": "I also enjoy a drink now and then — whisky and cocktails are my favorites. If you'd like to buy me a drink, <strong>feel free to reach out anytime!</strong><a href=\"#contact\" class=\"inline-jump\">Contact →</a> Or if you're after some mysterious house special, hit me up too — I promise I can pour you something a little different!",
        "about.p4": "Or, if you'd like to meet my two adorable cats, <strong>Quanquan</strong> and <strong>Yuanyuan</strong>, I've put together a photo album for them too — feel free!",

        "projects.title": "02. Selected Projects",
        "proj1.title": "Image Enhancement Platform",
        "proj1.desc": "A full-stack platform with a plugin-based pipeline architecture for composable image enhancement. It bundles algorithms from CLAHE and Retinex MSR to neural low-light enhancement (Zero-DCE), running pipelines as non-blocking async jobs behind a React UI with side-by-side previews.",
        "proj2.title": "IoT Smart Bike Lock System",
        "proj2.desc": "Led the design of a dual-ESP32 security system: a lock unit detects tampering via accelerometer motion sensing, while a bike unit handles GPS tracking and connectivity. A Firebase Cloud Function listens for alarm events and fires real-time mobile alerts via Pushover.",
        "proj3.title": "Hand Landmark Detection",
        "proj3.desc": "An end-to-end pipeline for detecting 47 anatomical hand keypoints. Built on <strong>MMPose</strong> with an <strong>HRNet-W32</strong> backbone, I compared a heatmap baseline against a coordinate-classification (SimCC) head — the SimCC model reached <strong>0.94 COCO AP</strong> with notably lower end-point error.",
        "common.source": "Source Code ->",
        "common.live": "Live Demo ->",

        "beyond.title": "03. Beyond Code",
        "beyond.astro.title": "Astronomy",
        "beyond.astro.desc": "Minoring in Astronomy — and a sci-fi lover at heart. Romance isn't found only here on Earth.",
        "beyond.astro.more": "Come take a look →",
        "beyond.drink.title": "Drinking",
        "beyond.drink.desc": "What dispels all sorrows? Only a good drink! If you're coming over, bring a bottle of gin — and let's make gin & tonics together!",
        "beyond.drink.more": "Come take a look →",
        "beyond.cats.title": "Two Cats",
        "beyond.cats.desc": "My two cutest little ones — Quanquan and Yuanyuan! Wishing them health and happiness, always!",
        "beyond.music.title": "Music",
        "beyond.music.desc": "A J-music lover, forever devoted to ZUTOMAYO (ずっと真夜中でいいのに。)!",

        "contact.title": "Get In Touch",
        "contact.text": "I'm currently looking for job opportunities in 2027. Whether you have a question, an opportunity, or would like to discuss a project, feel free to reach out!",
        "contact.emailLabel": "Email:",

        "form.name": "Your name",
        "form.email": "Your email",
        "form.message": "Your message",
        "form.submit": "Send Message",
        "form.sending": "Sending…",
        "form.success": "Thanks! Your message has been sent — I'll get back to you soon.",
        "form.error": "Something went wrong. Please email me directly at lijunhao3165@gmail.com.",

        "footer.text": "Designed &amp; Built by Junhao Li — with too much coffee and two cats nearby. &copy; 2026"
    },

    zh: {
        "nav.home": "首页",
        "nav.about": "关于",
        "nav.projects": "项目",
        "nav.beyond": "生活",
        "nav.contact": "联系",
        "nav.tarot": "🔮 占卜",

        "hero.role": "计算机视觉 · 日音爱好者 · 猫奴",
        "hero.hello": "你好，我是",
        "hero.name": "李君豪。",
        "hero.subtitle": "欢迎光临我的网站！这里没有彩蛋……应该没有。",
        "hero.cta1": "查看作品",
        "hero.cta2": "邮件联系",

        "about.title": "01. 关于我",
        "about.p1": "你好，我是李君豪，目前在佛罗里达大学主修 <strong>计算机科学</strong>，辅修 <strong>天文学</strong>。我目前对 <strong>计算机视觉和 AI 模型</strong> 比较感兴趣，也很喜欢折腾各种开源项目。比起只停留在想法上，我更享受把一个点子真正做出来、跑起来，再一点点把它改好的过程。",
        "about.p2": "音乐是我不可或缺的一部分。最近听得最多的是日音，尤其喜欢 <strong>ずっと真夜中でいいのに，如果你也喜欢 ACAね，那么我们就是永远的朋友！</strong>目前正沉浸在香港场演唱会的回忆中。",
        "about.p3": "我平时也会小酌几杯，比较偏爱威士忌和鸡尾酒。如果你想请我喝酒，<strong>请随时联系我！</strong><a href=\"#contact\" class=\"inline-jump\">联系我 →</a>或者你想喝点神秘特调，你也可以联系我，我保证能让你喝上点不一样的东西！",
        "about.p4": "又或者，你想看看我家的两只可爱猫咪，<strong>圈圈</strong>和<strong>缘缘</strong>，我也准备了相册，feel free！",

        "projects.title": "02. 精选项目",
        "proj1.title": "图像增强平台",
        "proj1.desc": "一个采用插件式 pipeline 架构的全栈图像增强平台，支持算法自由组合。内置从 CLAHE、Retinex MSR 到神经网络低光增强（Zero-DCE）等多种算法，以非阻塞异步任务运行，并配有 React 前端和左右对比预览。",
        "proj2.title": "物联网智能车锁系统",
        "proj2.desc": "主导设计的双 ESP32 安防系统：锁端通过加速度计检测撞动，车端负责 GPS 定位与联网。Firebase Cloud Function 监听报警事件，并通过 Pushover 实时推送手机提醒。",
        "proj3.title": "手部关键点检测",
        "proj3.desc": "一套端到端的手部解剖关键点检测流程，可定位 47 个关键点。基于 <strong>MMPose</strong> 与 <strong>HRNet-W32</strong> 主干网络，对比了 heatmap 基线与坐标分类（SimCC）方案——SimCC 模型达到 <strong>0.94 COCO AP</strong>，端点误差显著更低。",
        "common.source": "查看源码 ->",
        "common.live": "在线体验 ->",

        "beyond.title": "03. 键盘之外",
        "beyond.astro.title": "天文",
        "beyond.astro.desc": "辅修天文学，也是个科幻爱好者。浪漫的事物，不仅仅在地球上。",
        "beyond.astro.more": "进来看看 →",
        "beyond.music.title": "音乐",
        "beyond.music.desc": "日音爱好者，永远喜欢 ZUTOMAYO（ずっと真夜中でいいのに。）！",
        "beyond.cats.title": "两只猫",
        "beyond.cats.desc": "我最可爱的两个小家伙！圈圈和缘缘！希望他们永远健康开心！",
        "beyond.drink.title": "喝酒",
        "beyond.drink.desc": "何以解忧，唯有杜康！来我家喝酒的话，能不能带上一瓶金酒，然后一起喝金汤力！",
        "beyond.drink.more": "进来看看 →",


        "contact.title": "联系我",
        "contact.text": "我目前正在寻找 2027 年的工作机会。无论你有任何问题、实习机会，还是想交流项目，都欢迎随时与我联系！",
        "contact.emailLabel": "邮箱：",

        "form.name": "你的称呼",
        "form.email": "你的邮箱",
        "form.message": "想说的话",
        "form.submit": "发送消息",
        "form.sending": "发送中…",
        "form.success": "谢谢！消息已发送，我会尽快回复你。",
        "form.error": "出了点问题，请直接发邮件到 lijunhao3165@gmail.com。",

        "footer.text": "由李君豪设计与开发 —— 以及过量咖啡和身旁的两只猫。&copy; 2026"
    }
};

const STORAGE_KEY = "preferred-lang";

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Translate input/textarea placeholders.
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key] !== undefined) {
            el.placeholder = dict[key];
        }
    });

    document.documentElement.lang = lang;

    // The toggle shows the language you can switch TO.
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.textContent = lang === "en" ? "中文" : "EN";
    }

    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
        /* localStorage may be unavailable (e.g. private mode) — ignore. */
    }
}

function detectInitialLanguage() {
    let saved = null;
    try {
        saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        /* ignore */
    }
    if (saved === "en" || saved === "zh") {
        return saved;
    }
    // First visit: fall back to the browser's preferred language.
    const browser = (navigator.language || "en").toLowerCase();
    return browser.startsWith("zh") ? "zh" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(detectInitialLanguage());

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const current = document.documentElement.lang === "zh" ? "zh" : "en";
            applyLanguage(current === "en" ? "zh" : "en");
        });
    }

    setupContactForm();
});

// =========================================
//  Contact form (Web3Forms, AJAX — no page reload, no mail client needed)
// =========================================
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form || !status) {
        return;
    }

    const t = (key) => {
        const lang = document.documentElement.lang === "zh" ? "zh" : "en";
        return (translations[lang] || translations.en)[key];
    };

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        status.className = "form-status";
        status.textContent = t("form.sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(form)
            });
            const data = await response.json();

            if (data.success) {
                status.classList.add("success");
                status.textContent = t("form.success");
                form.reset();
            } else {
                status.classList.add("error");
                status.textContent = t("form.error");
            }
        } catch (err) {
            status.classList.add("error");
            status.textContent = t("form.error");
        }
    });
}
