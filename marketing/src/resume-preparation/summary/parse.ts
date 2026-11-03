// Pure parser for 09-summary-bullets.md (project root). Shape it looks for:
//   "### 1 · Label"  then  "Bullets: 1-2"  "Buckets: S01, S02"  "Covers: …"  and optionally  "Split: Label = focus; Label = focus"
import { expandRanges } from "../skill-section/parse";

export type Area = { number: number; label: string; bullets: string; buckets: string[]; covers: string; split: string };

export function parseAreas(md: string): Area[] {
  const areas: Area[] = [];
  for (const block of md.split(/^### /m).slice(1)) {
    const lines = block.split("\n");
    const head = lines[0].match(/^(\d+) · (.+)$/);
    if (!head) continue;
    const field = (key: string) =>
      lines.slice(1).find((l) => l.startsWith(`${key}:`))?.slice(key.length + 1).trim() ?? "";
    areas.push({
      number: Number(head[1]),
      label: head[2].trim(),
      bullets: field("Bullets"),
      buckets: expandRanges(field("Buckets")).split(",").map((b) => b.trim()).filter(Boolean),
      covers: field("Covers"),
      split: field("Split"),
    });
  }
  return areas;
}
