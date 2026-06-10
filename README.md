# Tuan Doan — Portfolio

Personal portfolio website. Vanilla HTML, CSS, and JavaScript. No build step required.

## Structure

```
portfolio/
├── index.html            Main page (single-page, all sections)
├── style.css             All styles (mobile-first, CSS custom properties)
├── script.js             Theme toggle, mobile nav, scroll reveal
├── resume.pdf            Drop your PDF here (not included)
├── assets/
│   ├── favicon.svg       TD monogram favicon
│   ├── og-image.svg      Open Graph / social preview image
│   └── projects/         Project thumbnail placeholders (SVG)
└── .nojekyll             Tells GitHub Pages not to run Jekyll
```

## Running locally

Open `index.html` directly in any browser. No server or install needed.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to the branch and root folder (`/`) that contains `index.html`.
4. GitHub Pages will serve the site at `https://<username>.github.io/<repo>/`.

All asset paths are relative, so the site works whether served from the root or a subpath.

## Placeholders to fill in

| # | What | Where |
|---|------|--------|
| 1 | Your contact email | `index.html` — search for `your-email@example.com` |
| 2 | LinkedIn URL | `index.html` — search for `your-profile` |
| 3 | Resume PDF | Drop `resume.pdf` into the repo root |
| 4 | Bunches repo link | `index.html` — first project card, marked `<!-- TODO -->` |
| 5 | Skin Cancer Detection App repo link | `index.html` — second project card, marked `<!-- TODO -->` |
| 6 | E-Waste Gurus repo link | `index.html` — third project card, marked `<!-- TODO -->` |
| 7 | GoFundMe Clone repo link | `index.html` — fourth project card, marked `<!-- TODO -->` |
| 8 | OG image (optional) | Replace `assets/og-image.svg` with a PNG for best social preview compatibility |
