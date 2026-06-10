/* ============================================================
   1. THEME TOGGLE
   ============================================================ */
(function () {
  const html = document.documentElement;
  const btn  = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function getInitialTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  applyTheme(getInitialTheme());

  if (btn) {
    btn.addEventListener('click', function () {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }
})();


/* ============================================================
   2. MOBILE NAV
   ============================================================ */
(function () {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('main-nav');
  const body      = document.body;

  if (!hamburger || !nav) return;

  function openNav() {
    body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
  }

  function closeNav() {
    body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
  }

  hamburger.addEventListener('click', function () {
    body.classList.contains('nav-open') ? closeNav() : openNav();
  });

  // Close when a nav link is clicked
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) closeNav();
  });

  // Close when clicking outside the nav
  document.addEventListener('click', function (e) {
    if (
      body.classList.contains('nav-open') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeNav();
    }
  });
})();


/* ============================================================
   3. SCROLL REVEAL
   ============================================================ */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach(function (el) { observer.observe(el); });
})();
