# Personal Website

This repository contains the source code for my personal portfolio website hosted with GitHub Pages.

## Live Website
[Visit my website](https://junhaolixd.github.io/)

## About
This website is used to present my background, skills, projects, and contact information.

## Built With
- HTML
- CSS
- JavaScript

## Project Structure
```text
.
├── index.html        # Home page (Home / About / Projects / Beyond / Contact)
├── tarot/
│   └── index.html    # Cat Tarot reading page — served at /tarot/
├── css/
│   ├── style.css     # Theme, layout, and responsive rules (shared)
│   └── tarot.css     # Tarot-page styles
├── js/
│   ├── script.js     # Smooth-scroll for anchor navigation
│   ├── i18n.js       # EN/ZH translations, language toggle, contact form
│   └── tarot.js      # Cat Tarot deck data + draw logic
├── assets/
│   ├── img1.jpg      # Profile photo
│   └── favicon.svg   # Site favicon
├── CLAUDE.md         # Project notes & change log
└── README.md
```

Each sub-page lives in its own folder as `index.html` (so it gets a clean URL like
`/tarot/`) and references the shared `css/`, `js/`, and `assets/` at the repo root
via `../`. New pages (e.g. a photo gallery) should follow the same pattern,
e.g. `photos/index.html` → `/photos/`.
