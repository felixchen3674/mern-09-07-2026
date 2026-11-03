// The skills bank and the layouts are read straight from the two markdown files at the project
// root (Vite's `?raw` import), so those files stay the one place to edit. Parsing happens once,
// at module load.
//
// The bank is the HIGH-LEVEL list (07), not the full keyword bank (05): the skills section only
// holds general, recruiter-searchable skills. The detail in 05 belongs in project descriptions.
import bankMd from "../../../07-technical-skills-bank.md?raw";
import layoutsMd from "../../../08-builder-layouts.md?raw";
import { parseBuckets, parseLayouts } from "./parse";

export const BUCKETS = parseBuckets(bankMd);
export const LAYOUTS = parseLayouts(layoutsMd);
