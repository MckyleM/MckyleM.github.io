# Mckyle Meyer — Portfolio (React)

A coding-themed, professional-minimal rebuild of the portfolio as a Vite + React app.

## Run

```bash
cd react
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Structure

- `src/data/content.js` — all copy (profile, about, projects, skills, education). **Edit here to update content.**
- `src/components/` — one component + co-located CSS per section.
- `public/assets/` — images and the resume PDF.
- `public/fonts/` — the Xeroda display face (used for the hero wordmark).

## Design

- **Theme:** near-black editor palette with the original green (`#b4e674`) / blue (`#7cb8e9`) accents.
- **Type:** JetBrains Mono (code/UI) + Sora (body); Xeroda for the name.
- **Motion:** Framer Motion staggered reveals, scroll-spy nav, animated caret.
- **Interactive:** working calculator (ported from the original JS) and a before/after image-compare slider.
