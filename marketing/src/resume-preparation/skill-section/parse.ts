// Pure parsers for the two markdown files that are the source of truth for the skill-section
// builder: 07-technical-skills-bank.md and 08-builder-layouts.md (both at the project root).
// Nothing here touches the DOM or Vite, so it can be run straight from a Node script.
//
// Edit the markdown, not this file, to change what the builder offers — as long as the shapes
// these parsers look for are kept:
//   07:  "### S07 · Bucket name"  followed (after blank lines) by ONE comma-separated line.
//   08:  "### 4 · Layout name" (add " (default)" to pre-select it), an *italic description*, then a | Category | Buckets | table.
//        A "## Quick picker" table maps roles → layout numbers. The first "## " heading after
//        the layouts ends the layout section.

export type Bucket = { id: string; name: string; keywords: string };
export type Category = { name: string; feeds: string };
export type Layout = {
  number: number;
  name: string;
  /** True for the layout pre-selected on the page: its heading ends in "(default)". */
  isDefault: boolean;
  description: string;
  categories: Category[];
  goodFor: string[];
};

/** Every "### Sxx · Name" heading plus the one keyword line under it. */
export function parseBuckets(md: string): Bucket[] {
  const lines = md.split("\n");
  const buckets: Bucket[] = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^### ([A-Z]\d{2}) · (.+)$/);
    if (!m) continue;
    let j = i + 1;
    while (j < lines.length && lines[j].trim() === "") j++;
    buckets.push({ id: m[1], name: m[2].trim(), keywords: (lines[j] ?? "").trim() });
  }
  return buckets;
}

/** "S12–S15" → "S12, S13, S14, S15", so the AI never has to interpret a range. */
export function expandRanges(text: string): string {
  return text.replace(/\b([A-Z])(\d{2})[–-]\1?(\d{2})\b/g, (_all, letter: string, a: string, b: string) => {
    const ids: string[] = [];
    for (let n = Number(a); n <= Number(b); n++) ids.push(`${letter}${String(n).padStart(2, "0")}`);
    return ids.join(", ");
  });
}

function tableCells(line: string): string[] {
  return line
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());
}

/** "Quick picker" table → layout number → the roles/situations it suits. */
function parsePicker(md: string): Map<number, string[]> {
  const goodFor = new Map<number, string[]>();
  const at = md.indexOf("## Quick picker");
  if (at === -1) return goodFor;
  for (const line of md.slice(at).split("\n")) {
    if (!line.startsWith("|")) continue;
    const [role, nums] = tableCells(line);
    if (!nums || /^-+$/.test(role) || role.startsWith("Target role")) continue;
    for (const part of nums.split(",")) {
      const n = parseInt(part, 10);
      if (!Number.isNaN(n)) goodFor.set(n, [...(goodFor.get(n) ?? []), role]);
    }
  }
  return goodFor;
}

export function parseLayouts(md: string): Layout[] {
  const first = md.search(/^### \d+ · /m);
  if (first === -1) return [];
  let body = md.slice(first);
  const end = body.search(/^## /m);
  if (end !== -1) body = body.slice(0, end);
  const goodFor = parsePicker(md);

  const layouts: Layout[] = [];
  for (const block of body.split(/^### /m).slice(1)) {
    const lines = block.split("\n");
    const head = lines[0].match(/^(\d+) · (.+)$/);
    if (!head) continue;

    const description = lines.slice(1).find((l) => /^\*[^*].*\*$/.test(l.trim())) ?? "";
    const categories: Category[] = [];

    for (const line of lines.slice(1)) {
      const t = line.trim();
      if (!t.startsWith("|")) continue;
      const [name, feeds] = tableCells(t);
      if (!feeds || /^-+$/.test(name) || name === "Category") continue;
      categories.push({ name, feeds: expandRanges(feeds) });
    }

    const number = Number(head[1]);
    layouts.push({
      number,
      name: head[2].replace(/\s*\(default\)\s*$/i, "").trim(),
      isDefault: /\(default\)\s*$/i.test(head[2]),
      description: description.replace(/\*/g, "").trim(),
      categories,
      goodFor: goodFor.get(number) ?? [],
    });
  }
  return layouts;
}
