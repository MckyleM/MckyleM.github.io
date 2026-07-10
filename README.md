# me.mckyle.dev

My portfolio site and generated one-page resume. Live at **[me.mckyle.dev](https://me.mckyle.dev/)**.

## The idea

Every fact on the site *and* in the resume PDF renders from a single data file:
[`react/src/data/profile.js`](react/src/data/profile.js). Change a bullet there and the React
site updates and the PDF regenerates — the two can never drift apart.

## Structure

```
react/            React 18 + Vite single-page app (the site)
  src/data/       profile.js — single source of truth for all content
  src/components/ Sections render from data; no facts hard-coded in JSX
resume/           Resume generator: template.mjs renders profile.js to HTML,
                  generate.mjs prints it to a one-page A4 PDF via headless Chrome
vite.config.js    Root build config used by the Cloudflare Workers deploy
```

## Commands

```
npm run dev      # local dev server
npm run build    # production build (dist/)
npm run resume   # regenerate the one-page resume PDF from profile.js
```

## Stack

React 18, Vite, framer-motion, Playwright (PDF printing), deployed on Cloudflare Workers.
