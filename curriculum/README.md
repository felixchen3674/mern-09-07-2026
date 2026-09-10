# Curriculum

A single React + Vite SPA hosting the MERN training curriculum, one page per day/section
behind an index page.

## Start

```bash
npm install
npm run dev
```

Open the printed URL (default <http://localhost:5173>) and pick a day from the index.

## Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) + build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npx tsc --noEmit -p tsconfig.app.json` | Type-check only |

## Layout

```
src/curriculum.ts     # manifest — declares every page; drives Home.tsx and nav
src/App.tsx           # routes, one per page
src/Home.tsx          # index page
src/components/       # shared UI (CodeBlock, DayNav, ...)
src/styles/           # shared page styles
src/weekN/dayN-*/      # Lecture, Notes, Practice, Concepts, Lab per day
src/general/           # standalone notes belonging to no week
```

Requires Node 18+.
