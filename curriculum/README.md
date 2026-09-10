# Week 1 — Web Dev Fundamentals (JS/TS Core)

Static lesson pages served by [Vite](https://vite.dev/).

## Start

```bash
cd week1-web-foundation
npm install     # first time only
npm run dev
```

Open the printed URL (default <http://localhost:5173>) and pick a lesson from the index.

## Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check (`tsc`) + build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |

## Layout

```
index.html                  # lesson index / entry point
src/day1-html-css-dom/      # lecture, notes, practice, concepts
public/                     # static assets copied as-is
```

Requires Node 18+ (developed on Node 22).
