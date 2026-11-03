# Marketing — Resume & Keyword Kit

This folder is also a small React + Vite site (same setup as `../curriculum`), for students to use:

```bash
npm install
npm run dev      # http://localhost:47822
npm run build    # tsc -b && vite build
```

- `src/marketing.ts` is the manifest (sections → pages), like `curriculum.ts`. Adding a page = one entry there + one `<Route>` in `src/App.tsx`.
- **Resume Preparation → Skill Section Builder** (`/resume-preparation/skill-section`): the student picks one of 3 layouts, chooses whether the AI may reword category names, and the page assembles a prompt for their own AI to write the skills section. No AI is called from the site.
- **Resume Preparation → Summary Builder** (`/resume-preparation/summary`): generates a prompt for the bullet points of the resume summary (Frontend, Backend & APIs, Data, Cloud & DevOps, GenAI, Collaboration). The student writes the first line (title, years, industries) themselves; an optional textarea adds their own info to the prompt. Areas come from `09-summary-bullets.md`, technologies from 07.
- **Resume Preparation → Experience Builder** (`/resume-preparation/experience`): the student describes one job in a textarea; the prompt asks the AI for a plain-language project description plus 10–12 keyword-rich bullets (past tense, at most 1–2 metrics, a "Check these" list of added keywords). Allocation comes from `10-experience-bullets.md`, keywords from 05 († items dropped).
- The skill builder reads `07-technical-skills-bank.md` (the **high-level** skills only) and `08-builder-layouts.md` (the 3 layouts) directly, so **those two files are the source of truth**. Edit them and the page updates. Keep their shapes: `### Sxx · Name` followed by one skill line (07), and `### N · Name` + italic description + `| Category | Buckets |` table + a `## Quick picker` table (08). The parsers are in `src/resume-preparation/skill-section/parse.ts`.
- `05` (full keyword bank) and `06` (12 layouts) are **not** used by the page. `05` is the detailed list for project descriptions; `06` is the wider layout reference.

The markdown guides below are the written reference behind it.

Everything students (and we, when pitching the batch) need to turn the 7-week MERN + AI curriculum into resume content.

| File | What it's for |
|---|---|
| [01-tech-stack-by-tier.md](01-tech-stack-by-tier.md) | **Source of truth.** Every technology, sorted by how deeply we teach it (Hands-on / Working knowledge / Conceptual), with the day it comes from. Decides what goes where on a resume. |
| [02-ats-keyword-bank.md](02-ats-keyword-bank.md) | Flat, copy-paste keyword lists grouped by category, plus job-title and methodology keywords that ATS filters scan for. |
| [03-skills-section-templates.md](03-skills-section-templates.md) | Ready-to-paste "Technical Skills" blocks for 4 target roles (Full-Stack, Frontend, Backend, AI/LLM Engineer). |
| [04-resume-bullet-bank.md](04-resume-bullet-bank.md) | Achievement-style bullets per area, with `[metric]` placeholders. Use as a pattern; replace with real project facts. |
| [05-master-keyword-bank.md](05-master-keyword-bank.md) | **The full keyword bank.** 450+ keywords split into 28 small buckets (B01–B28); † marks conceptual-only items. |
| [06-skill-section-layouts.md](06-skill-section-layouts.md) | 12 ways to categorize the skills section, each mapped to the buckets in 05, so students draw from one bank but get different-looking resumes. |
| [09-summary-bullets.md](09-summary-bullets.md) | **Used by the Summary Builder.** The 6 summary areas, bullets per area, and which 07 buckets feed each. |
| [10-experience-bullets.md](10-experience-bullets.md) | **Used by the Experience Builder.** Bullets per area for one job and which 05 buckets feed each. |
| [07-technical-skills-bank.md](07-technical-skills-bank.md) | **Used by the builder.** The high-level skills only (16 buckets, S01–S16), the ones that belong in a skills section. No conceptual-only (†) items. |
| [08-builder-layouts.md](08-builder-layouts.md) | **Used by the builder.** The 3 simplified layouts, mapped to the 07 buckets. |

## How these were derived

- **What was taught:** `curriculum/src/curriculum.ts` (Weeks 1–5 + AI Training days 26–34 + additional topics).
- **What was actually coded:** imports and dependencies across the lecture code (`backend-lecture-code/`, `curriculum/src/**/lecture/`) and the final-evaluation `help-desk` project (React 19, TypeScript, Vite, Axios, Express, Drizzle ORM, Swagger).
- **What interviewers will ask:** `curriculum/src/evaluation-question-list/questions.md` (~500 questions). A keyword on a resume is fair game for these questions.

## The one rule

**Only list a tool at the level you can defend.** Tier 1 = you can build with it. Tier 2 = you can explain and use it with docs. Tier 3 = you can answer the interview question about it but have not built with it, so list it only in a "Familiar with" line or leave it off. Every keyword is a promise an interviewer can test.

## Caveat

Tiers were inferred from lecture code and the curriculum outline, not from a student-by-student skills audit. Adjust them to match what each student actually built in their own labs and practice projects.
