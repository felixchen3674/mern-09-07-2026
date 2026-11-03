import keywordsMd from "../../../05-master-keyword-bank.md?raw";
import areasMd from "../../../10-experience-bullets.md?raw";
import { parseBuckets } from "../skill-section/parse";
import { parseAreas } from "../summary/parse";

export const AREAS = parseAreas(areasMd);
/** The granular keyword bank (B01–B28). Conceptual-only (†) items are dropped in the prompt builder. */
export const KEYWORD_BUCKETS = parseBuckets(keywordsMd);
