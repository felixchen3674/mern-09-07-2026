// The Step 3 prompt: pasted as a NEW message right after the AI has answered the Step 2 prompt,
// so the AI audits its own output. It is the same for every student, so it is a constant, not a
// builder. It relies on the earlier messages for the job details, the dates and the draft.

export const REVIEW_PROMPT = `Now review your own answer above as a strict fact-checker. Your job is to find problems before this goes on a resume, not to defend what you wrote. Use the job details and dates I gave in my first message. If I gave no dates, say so and skip check 1.

Run these checks:

1. Time period. For every technology, tool, framework and practice in the project description and bullets, ask whether it existed and was in real professional use during the job dates. Flag anything that did not exist yet, or existed but was not yet mainstream, using your own knowledge of release dates. Examples: Claude Code (2025), Model Context Protocol (late 2024), LLM or generative AI features (mainstream from about 2023), Playwright (2020), React Hooks (2019), Vite (2020), React Server Components (stable in 2024). If you are not sure about a date, say you are unsure instead of guessing.

2. Internal consistency. Flag technologies that do not belong together or do not fit the project, and any bullet that contradicts the project description or another bullet. For example, using two tools that do the same job (Playwright and Cypress, Jest and Vitest, two CI systems, two state libraries) in one project is unusual. It only makes sense during a migration, or across separate projects or microservices, so flag it and ask whether the job details support that. Do not flag a pairing that has a clear reason to exist.

3. Writing rules. Flag: a bullet count outside roughly 10 to 12 without a good reason; any bullet not in past tense; repeated opening verbs; a technology used in more than 3 bullets; buzzwords or technology names in the project description; vague endings such as "improving efficiency" or "driving business value"; filler such as "responsible for" or "worked on".

Reply in this format, as normal Markdown (no code block):

**Problems found**
A numbered list. For each problem give the check number, the exact bullet or phrase, why it is a problem, and the fix. If there are no problems, write "None found" and stop here.

**Corrected version**
Only if you found problems: the full project description and bullets again, with every problem fixed. Change nothing else, and keep the "Check these" list updated.`;
