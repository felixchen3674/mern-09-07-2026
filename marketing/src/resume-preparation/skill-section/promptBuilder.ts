// Builds the prompt a student pastes into their own AI. Pure string assembly — no model is
// called from this site. The student's AI does the writing, so every student gets a different
// result (LLM output isn't deterministic), which is the point: resumes shouldn't look identical.
//
// Prompt shape (deliberate, so the output stays reliable on any provider):
//   - the long reference data FIRST, each piece wrapped in its own XML tag the instructions name;
//   - the settings and instructions LAST, so they are the freshest thing the model reads;
//   - hard rules as a short numbered list, with the "why" attached where a model would
//     otherwise be tempted to cut a corner (inventing tools, padding with off-topic skills);
//   - no mention of any resume builder, template or file format — the model returns plain text.

import type { Bucket, Layout } from "./parse";

/** How many skills the AI should put on each line. One fixed target: longer lines padded the output. */
const SKILLS_PER_CATEGORY = "roughly 10 to 15 (pick the most in-demand ones)";

/**
 * How freely the AI may treat the layout's category names. This is plain prompt text, not a model
 * setting: "exact" mimics a low-temperature run (the names are copied as written), "creative"
 * asks the AI to choose its own wording for each name.
 */
export type NameMode = "exact" | "creative";

export const NAME_MODES: Record<NameMode, { label: string; hint: string; rule: string }> = {
  exact: {
    label: "Exact",
    hint: "Keep the names as shown",
    rule: `Use the category names exactly as written in <structure>, in the same order. Do not rename, merge, split, reorder or add categories.`,
  },
  creative: {
    label: "Creative",
    hint: "Let the AI reword them",
    rule: `Keep the same categories in the same order, each fed by the same buckets, but choose your own wording for each category name. Pick the label you judge most natural and recognizable to a recruiter reading a resume, even when it differs from the name in <structure>. Keep each name short (one to four words). Do not merge, split, reorder or add categories.`,
  },
};

export type PromptInputs = {
  nameMode: NameMode;
  /** Optional skills the student knows that are not in the bank (e.g. "Java, Python, C#"). */
  extraSkills: string;
};

/** The skills bank, one bucket per line, exactly as written in 07-technical-skills-bank.md. */
export function renderBank(buckets: Bucket[]): string {
  return buckets.map((b) => `${b.id} · ${b.name}: ${b.keywords}`).join("\n");
}

function renderStructure(layout: Layout): string {
  const lines = [`Layout: ${layout.name}`];
  if (layout.description) lines.push(`Intent: ${layout.description}`);
  lines.push(`Categories (${layout.categories.length}), in this order, each with the buckets that feed it:`);
  layout.categories.forEach((c, i) => lines.push(`${i + 1}. ${c.name} — ${c.feeds}`));
  return lines.join("\n");
}

export function buildPrompt(inputs: PromptInputs, buckets: Bucket[], layout: Layout): string {
  const { nameMode } = inputs;
  const extra = inputs.extraSkills.trim();
  const count = layout.categories.length;

  return `You are an expert technical recruiter and resume writer. You are writing the "Technical Skills" section of the resume for an entry-level full-stack + AI developer who completed an intensive training that covered every skill in the bank below.

<skills-bank>
Each entry is a high-level skill that belongs in a resume skills section. Buckets are labeled S01, S02, and so on.

${renderBank(buckets)}
</skills-bank>

${extra ? `<extra-skills>\nThe candidate also knows these skills, which are not in <skills-bank>:\n\n${extra}\n</extra-skills>\n\n` : ""}<structure>
${renderStructure(layout)}
</structure>

<settings>
Number of categories: ${count}
Category names: ${nameMode}
Skills per category: ${SKILLS_PER_CATEGORY}
</settings>

<instructions>
Write the "Technical Skills" section using the layout in <structure> and the numbers in <settings>.

Rules:
1. Use only skills that appear in <skills-bank>${extra ? " or <extra-skills>" : ""}, spelled exactly as written there. Do not invent, rename, abbreviate or add detail to a skill, and do not add parentheses or sub-features. Never add a skill that is not in the bank${extra ? " or in <extra-skills>" : ""}.
2. Write exactly ${count} categories. ${NAME_MODES[nameMode].rule} Every category must have skills in it.
3. Fill each category from the buckets that feed it. Aim for the skills-per-category target in <settings>. If the buckets feeding a category hold fewer skills than the target, list all of them. Never pad a category with skills from unrelated buckets.
4. Within each category, put the most in-demand, most widely recognized skills first and supporting tools after.
5. A skill appears in only one category, even if it fits in two.${extra ? `
6. Include every skill from <extra-skills>, spelled as the candidate wrote it. Put each in the one category where it fits best by its nature (for example a programming language under the languages or backend category), even if no bucket feeds that category. They count toward the skills-per-category target, and they come after the bank skills of the same category.` : ""}
</instructions>

<output-format>
Reply with exactly two parts and nothing else.

Part 1: the skills section inside one plain-text code block, one category per line, written as "Category name: skill, skill, skill". No bullets, no bold, no tables, no icons, no skill ratings, no emoji.

Part 2: under the heading "Be ready to explain", list the 5 skills you included that carry the most interview risk, each followed by one short sentence on what an interviewer is likely to ask about it.
</output-format>`;
}
