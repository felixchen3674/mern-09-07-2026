import areasMd from "../../../09-summary-bullets.md?raw";
import { parseAreas } from "./parse";

export { BUCKETS } from "../skill-section/data";
export const AREAS = parseAreas(areasMd);
