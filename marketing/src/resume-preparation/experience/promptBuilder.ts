// Builds the prompt a student pastes into their own AI to write the project description and
// bullets for ONE job. Same approach as the other builders: pure string assembly, reference data
// first in XML tags, rules and output format last. The company/title/dates line is not generated.

import type { Bucket } from "../skill-section/parse";
import type { Area } from "../summary/parse";

/** One bucket per line, with conceptual-only (†) entries removed: they were not built with. */
export function renderKeywords(buckets: Bucket[]): string {
  return buckets
    .map((b) => {
      const kept = b.keywords.split(", ").filter((k) => !k.trim().endsWith("†"));
      return `${b.id} · ${b.name}: ${kept.join(", ")}`;
    })
    .join("\n");
}

function renderAreas(areas: Area[]): string {
  return areas
    .map((a) => `${a.number}. ${a.label}: ${a.bullets} bullet${a.bullets === "1" ? "" : "s"}. Covers ${a.covers}. Keywords from: ${a.buckets.join(", ")}`)
    .join("\n");
}

export function buildExperiencePrompt(description: string, areas: Area[], buckets: Bucket[]): string {
  return `You are an expert technical recruiter and resume writer. You are writing the project description and the bullet points for ONE job on the resume of a full-stack developer, using only what the candidate tells you in <job-description>.

<job-description>
${description.trim()}
</job-description>

<keyword-bank>
Granular technical keywords the candidate may know, grouped in buckets (B01, B02, and so on). Use them to make a bullet more specific, but only where they naturally belong to the work in <job-description>.

${renderKeywords(buckets)}
</keyword-bank>

<bullet-plan>
Write 10 to 12 bullets in total, spread across these areas. Weight them by what <job-description> supports. If an area has no support, skip it and give its bullets to the areas that do.

${renderAreas(areas)}
</bullet-plan>

<instructions>
Write two things: a project description, then the bullets.

Project description rules:
1. 3 to 4 lines of plain language. Say what the company does, what the project solves, and who uses it, so that anyone can understand it after one read.
2. No buzzwords (such as "cutting-edge", "innovative", "robust", "scalable solution", "leverage", "synergy") and no technology names. Use only facts from <job-description>; do not invent company details.

Bullet rules:
3. Every bullet follows this shape: a strong past-tense verb, what was built or done, 3 to 6 specific technologies or techniques, and the business result. Each bullet is about 25 to 35 words. Use past tense in every bullet, and start each bullet with a different verb.
4. Base every bullet on work the candidate described. Never invent work, projects, features or responsibilities. If <job-description> is too thin to support 10 bullets, write fewer and say what to add in the check list.
5. Keywords: add specific, granular keywords from <keyword-bank> that naturally fit the described work, since recruiter search and applicant tracking systems match on exact terms. Spell them as in the bank. Use each technology in at most 3 bullets so the bullets cover a wide range of keywords.
6. Metrics: put a number in only 1 or 2 bullets in total, never more. Use a number the candidate gave you. If they gave none, write a clear placeholder such as [X%] or [N users] for them to fill in or delete. Never invent a number.
7. Business impact in all the other bullets: state the concrete consequence in words, with no numbers. Say what became faster, safer, simpler, cheaper or possible, and for whom (for example "so clinic staff could confirm appointments without calling the front desk"). Avoid vague endings such as "improving efficiency", "enhancing performance" or "driving business value".
8. Time period: if <job-description> gives the dates of the job, use only technologies and practices that were in real professional use during those dates. Leave out anything that did not exist yet or was not yet mainstream, even if it appears in <keyword-bank>.
9. Order the bullets from the most impressive and most senior-sounding to the least. No first-person pronouns. No filler such as "responsible for", "worked on" or "helped with".
</instructions>

<output-format>
Reply with only the following, formatted as normal Markdown so it renders and can be pasted into a document. Do not put anything in a code block.

First, the project description as one plain paragraph, with no heading or label.
Then the bullets as a normal bulleted list with no bold labels.
Then a bold line "Check these" followed by a short bulleted list of every keyword you added that the candidate did not mention in <job-description>, so they can delete any they cannot speak to in an interview. Also list here any placeholder you used and anything that would let you write more bullets.
</output-format>`;
}
