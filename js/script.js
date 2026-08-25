// Smooth-scroll for in-page anchor links.
// Uses event delegation on the document so links inserted dynamically
// (e.g. by i18n.js re-rendering innerHTML, or after a language switch)
// still scroll smoothly without needing to be re-bound.
document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    // Ignore a bare "#" (no target).
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    }
});
