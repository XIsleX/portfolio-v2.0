# Ravel Jonathan — Portfolio

Interactive, responsive portfolio built with React (Vite), Tailwind CSS v4, and Framer Motion.
Design concept: an IT "system status console" — status indicators, a ticket-log style
experience section, and a capability-matrix skills grid, all grounded in real IT Support
language (uptime, tickets, resolved/in-progress, root cause).

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to test the production build locally
```

The production files are output to `dist/`.

## Deploy

This is a static site — deploy the `dist/` folder to any static host:
- **Vercel / Netlify**: connect the repo, build command `npm run build`, output dir `dist`
- **GitHub Pages**: use `dist/` as the publish directory (you may need to set `base` in
  `vite.config.js` if deploying to a subpath, e.g. `username.github.io/repo-name`)

## What to customize before publishing

1. **Social links** — `src/components/Hero.jsx`, `src/components/Projects.jsx`, and
   `src/components/Contact.jsx` currently point to placeholder GitHub/LinkedIn URLs
   (`https://github.com/`, `https://linkedin.com/`). Replace with your real profile URLs.
2. **Downloadable CV** — `public/Ravel_Jonathan_CV.pdf` is included and linked from the
   hero "download_cv" button. Swap this file if you update your CV later (keep the same
   filename, or update the `href` in `Hero.jsx`).
3. **Projects section** (`src/components/Projects.jsx`) — the "Helpdesk Automation Script"
   card is marked `in_progress` because it doesn't exist yet. Once you build it (or the
   documentation repo we discussed), update its status to `resolved` and add the real
   GitHub link.
4. **Fonts** — loaded from Google Fonts (Sora, IBM Plex Sans, JetBrains Mono) via
   `index.html`. Requires internet access to load; self-host if you need offline support.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-based `@theme` config in `src/index.css`)
- Framer Motion (scroll reveals, staggered entrances, hover/pulse micro-interactions)
- lucide-react (icons) + two hand-rolled SVG icons for GitHub/LinkedIn
