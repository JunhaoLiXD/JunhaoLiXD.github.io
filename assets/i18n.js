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

        "hero.role": "CV Researcher · Open Source · Cat-supervised",
        "hero.hello": "HELLO, I'M",
        "hero.name": "JUNHAO.",
        "hero.subtitle": "I build things at the intersection of computer vision, backend systems, and IoT — and I care about making them simple, reliable, and a little bit elegant.",
        "hero.cta1": "View My Work",
        "hero.cta2": "Email Me",

        "about.title": "01. About Me",
        "about.p1": "Hi, I'm Junhao — a <strong>Computer Science</strong> student at the <strong>University of Florida</strong> (with a minor in <strong>Astronomy</strong>) who loves turning ideas into things that actually run. By day I tinker with <strong>computer vision</strong> and image processing; I'm an open-source enthusiast, equally at home in <strong>Python</strong> and <strong>C++</strong>, and I like to think of machine learning as a bit of alchemy.",
        "about.p2": "I also enjoy building <strong>scalable backend systems</strong> and <strong>integrated IoT ecosystems</strong> — there's something satisfying about bridging low-level hardware sensors and the software that gives them a voice. When I step away from the keyboard, I'm usually stargazing or being supervised by my two cats.",
        "about.p3": "Here are the core technologies I have been working with:",

        "projects.title": "02. Selected Projects",
        "proj1.title": "Image Enhancement Platform",
        "proj1.desc": "A full-stack platform with a plugin-based pipeline architecture for composable image enhancement. It bundles algorithms from CLAHE and Retinex MSR to neural low-light enhancement (Zero-DCE), running pipelines as non-blocking async jobs behind a React UI with side-by-side previews.",
        "proj2.title": "IoT Smart Bike Lock System",
        "proj2.desc": "Led the design of a dual-ESP32 security system: a lock unit detects tampering via accelerometer motion sensing, while a bike unit handles GPS tracking and connectivity. A Firebase Cloud Function listens for alarm events and fires real-time mobile alerts via Pushover.",
        "proj3.title": "Hand Landmark Detection",
        "proj3.desc": "An end-to-end pipeline for detecting 47 anatomical hand keypoints. Built on <strong>MMPose</strong> with an <strong>HRNet-W32</strong> backbone, I compared a heatmap baseline against a coordinate-classification (SimCC) head — the SimCC model reached <strong>0.94 COCO AP</strong> with notably lower end-point error.",
        "common.source": "Source Code ->",

        "beyond.title": "03. Beyond Code",
        "beyond.astro.title": "Astronomy",
        "beyond.astro.desc": "Minoring in Astronomy and a sucker for a clear night sky — I never get tired of pointing a lens at things millions of light-years away.",
        "beyond.oss.title": "Open Source",
        "beyond.oss.desc": "I learn best by reading other people's code and giving back where I can. Most of my projects live in the open on GitHub.",
        "beyond.cats.title": "Two Cats",
        "beyond.cats.desc": "My two cats are my full-time code reviewers — they cross the keyboard at the most critical moments, and somehow it still compiles.",
        "beyond.music.title": "Music",
        "beyond.music.desc": "I'm a big music lover, and lately I can't stop playing ZUTOMAYO (ずっと真夜中でいいのに。). The right track makes any debugging session better.",

        "contact.title": "Get In Touch",
        "contact.text": "I am currently looking for internship opportunities for Summer 2026. Whether you have a question, an internship opportunity, or would like to discuss a project, feel free to reach out!",
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

        "hero.role": "计算机视觉 · 开源爱好者 · 资深猫奴",
        "hero.hello": "你好，我是",
        "hero.name": "君豪。",
        "hero.subtitle": "我在计算机视觉、后端系统与物联网的交叉点上做东西，并且在意让它们简单、可靠，还带一点优雅。",
        "hero.cta1": "查看作品",
        "hero.cta2": "邮件联系",

        "about.title": "01. 关于我",
        "about.p1": "你好，我是君豪 —— 佛罗里达大学的<strong>计算机科学</strong>学生（辅修<strong>天文学</strong>），喜欢把想法变成真正能跑起来的东西。白天我折腾<strong>计算机视觉</strong>和图像处理；我是个开源爱好者，<strong>Python</strong> 和 <strong>C++</strong> 都用得顺手，也乐于把机器学习当成一门“炼金术”。",
        "about.p2": "我也喜欢构建<strong>可扩展的后端系统</strong>和<strong>集成式物联网生态</strong> —— 在底层硬件传感器和赋予它们“声音”的软件之间架起桥梁，是件很有成就感的事。离开键盘的时候，我通常在看星星，或者被我的两只猫监督。",
        "about.p3": "以下是我常用的核心技术：",

        "projects.title": "02. 精选项目",
        "proj1.title": "图像增强平台",
        "proj1.desc": "一个采用插件式 pipeline 架构的全栈图像增强平台，支持算法自由组合。内置从 CLAHE、Retinex MSR 到神经网络低光增强（Zero-DCE）等多种算法，以非阻塞异步任务运行，并配有 React 前端和左右对比预览。",
        "proj2.title": "物联网智能车锁系统",
        "proj2.desc": "主导设计的双 ESP32 安防系统：锁端通过加速度计检测撞动，车端负责 GPS 定位与联网。Firebase Cloud Function 监听报警事件，并通过 Pushover 实时推送手机提醒。",
        "proj3.title": "手部关键点检测",
        "proj3.desc": "一套端到端的手部解剖关键点检测流程，可定位 47 个关键点。基于 <strong>MMPose</strong> 与 <strong>HRNet-W32</strong> 主干网络，对比了 heatmap 基线与坐标分类（SimCC）方案——SimCC 模型达到 <strong>0.94 COCO AP</strong>，端点误差显著更低。",
        "common.source": "查看源码 ->",

        "beyond.title": "03. 键盘之外",
        "beyond.astro.title": "天文",
        "beyond.astro.desc": "辅修天文学，也是个晴朗夜空的死忠粉 —— 把镜头对准几百万光年之外的东西，我永远不会腻。",
        "beyond.oss.title": "开源",
        "beyond.oss.desc": "我最好的学习方式就是读别人的代码，并在力所能及时回馈社区。我的大部分项目都公开在 GitHub 上。",
        "beyond.cats.title": "两只猫",
        "beyond.cats.desc": "我的两只猫是全职代码审查员 —— 它们总在最关键的时刻踩过键盘，而代码居然还能编译通过。",
        "beyond.music.title": "音乐",
        "beyond.music.desc": "我是个不折不扣的音乐爱好者，最近单曲循环最多的是 ZUTOMAYO（ずっと真夜中でいいのに。）。一首对的歌，能让任何 debug 时光都好过不少。",

        "contact.title": "联系我",
        "contact.text": "我目前正在寻找 2026 年暑期的实习机会。无论你有任何问题、实习机会，还是想交流项目，都欢迎随时与我联系！",
        "contact.emailLabel": "邮箱：",

        "form.name": "你的称呼",
        "form.email": "你的邮箱",
        "form.message": "想说的话",
        "form.submit": "发送消息",
        "form.sending": "发送中…",
        "form.success": "谢谢！消息已发送，我会尽快回复你。",
        "form.error": "出了点问题，请直接发邮件到 lijunhao3165@gmail.com。",

        "footer.text": "由李君豪设计与开发 —— 伴着过量咖啡和身旁的两只猫。&copy; 2026"
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
