// Builds the prompt a student pastes into their own AI to write the bullets of the resume
// summary. Same approach as the skill-section builder: pure string assembly, reference data
// first in XML tags, rules and output format last. The first line of the summary (title, years,
// industries) is deliberately NOT generated; the student writes it.

import type { Bucket } from "../skill-section/parse";
import { renderBank } from "../skill-section/promptBuilder";
import type { Area } from "./parse";

// Variety: an AI given the same prompt converges on the same template. So each time the prompt is
// built, every area is handed a randomly chosen sentence shape and technology angle. Different
// builds therefore steer the AI toward different bullets, while the areas stay the same.
const SHAPES = [
  "open with a strong verb (building, designing, shipping...), then the technologies",
  "open with the outcome or quality the work achieves (fast, secure, maintainable...), then how, with the technologies",
  "open with the main technology or practice, then what it is used to build",
  "open with the kind of system or problem being solved, then the technologies used for it",
  "write it as one sentence joined by a single \"while\" or \"with\" clause, mixing a craft point and the technologies",
];

const ANGLES = [
  "favor the most in-demand technologies in the area",
  "favor the technologies that best show breadth across the area",
  "favor the technologies that best show depth and good engineering practice",
  "favor modern or newer technologies, mentioning older ones only if needed",
  "favor the technologies that work together as one workflow or stack",
];

function pick<T>(list: T[], rng: () => number): T {
  return list[Math.floor(rng() * list.length)];
}

function renderAreas(areas: Area[], buckets: Bucket[], rng: () => number): string {
  const byId = new Map(buckets.map((b) => [b.id, b.name]));
  return areas
    .map((a) => {
      const from = a.buckets.map((id) => `${id} ${byId.get(id) ?? ""}`.trim()).join("; ");
      return `${a.number}. ${a.label} — ${a.bullets} bullet${a.bullets === "1" ? "" : "s"}\n   Covers: ${a.covers}${a.split ? `\n   Bullet labels and focus: ${a.split}` : ""}\n   Draw technologies from: ${from}\n   Sentence shape for this area: ${pick(SHAPES, rng)}\n   Technology angle for this area: ${pick(ANGLES, rng)}`;
    })
    .join("\n");
}

export function buildSummaryPrompt(
  extra: string,
  areas: Area[],
  buckets: Bucket[],
  rng: () => number = Math.random,
): string {
  const info = extra.trim();
  const extraBlock = info
    ? `\n<extra-info>\nThe candidate added this about themselves. Use it to make the bullets more accurate and specific to them. Technologies named here may be used even if they are not in <skills-bank>.\n\n${info}\n</extra-info>\n`
    : "";

  return `You are an expert technical recruiter and resume writer. You are writing the bullet points of the "Summary" section for an experienced-sounding full-stack + AI developer. The bullets describe general capability, not work history.

<skills-bank>
High-level skills the candidate can truthfully claim. Buckets are labeled S01, S02, and so on.

${renderBank(buckets)}
</skills-bank>

<areas>
The summary covers these areas, in this order:

${renderAreas(areas, buckets, rng)}
</areas>
${extraBlock}
<instructions>
Write the summary bullets, one area at a time, in the order of <areas>.

Rules:
1. Start every bullet with its label in bold, followed by a colon. For an area without "Bullet labels and focus", the label is the area name. For an area with them, use those labels exactly, one bullet per label, each bullet staying on its own focus so the bullets in an area do not overlap.
2. Follow the bullet counts in <areas> exactly. Never add, merge or drop bullets. For an area shown as "1-2 bullets", write the first bullet and add the optional second only if the bank gives you enough to say.
3. Each bullet is 2 lines, about 25 to 40 words. It says what the candidate builds or does, then names 3 to 5 specific technologies or practices. Follow the "Sentence shape" and "Technology angle" given for its area.
4. Name only technologies from the buckets listed for that area in <areas>, spelled as written in <skills-bank>${info ? ", plus technologies named in <extra-info>" : ""}. Never invent a technology, and do not add fine-grained detail (hooks, interceptors, individual algorithms). Detail like that belongs in project descriptions.
5. Do not write a headline, job title, years-of-experience statement or industry list. The candidate writes that line themselves.
6. No employers, projects, metrics or percentages. No first-person pronouns. No filler such as "results-driven", "passionate", "proven track record" or "team player". Use "building" or "designing", never "experienced in" or "familiar with".
7. The bullets must not read as a template. No two bullets may open with the same word, use the same sentence structure, or follow the same "verb + technologies" pattern. Vary the verbs, the length (within the word range) and where the technologies appear. Do not reuse a technology list in the same order across bullets. You do not have to mention every technology in a bucket: choose the subset that fits the area's technology angle, and when this prompt is run again, make different choices.
</instructions>

<output-format>
Reply with only the bulleted list, formatted as a normal Markdown list so it renders as real bullets with the label in bold (for example "- **Frontend:** sentence"). Do not put it inside a code block. No headings, no introduction, no closing commentary.
</output-format>`;
}
