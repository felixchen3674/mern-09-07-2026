// The single source of truth for what exists in this site.
//
// Home.tsx (the index) and Nav (the per-page nav bar) both read this file, and App.tsx holds
// one <Route> per page. Adding a page is two edits in the same turn:
//   1. add it to its section's `pages` here;
//   2. add the import and <Route> in App.tsx.
// A page declared here with no route is a dead link; a route not declared here is unreachable.

export type Page = {
  /** URL segment and folder name, e.g. "skill-section". */
  slug: string;
  title: string;
  /** One line shown on Home under the page's title. */
  blurb: string;
};

export type Section = {
  /** URL segment and folder name under src/, e.g. "resume-preparation". */
  slug: string;
  title: string;
  blurb: string;
  pages: Page[];
};

export const SECTIONS: Section[] = [
  {
    slug: "resume-preparation",
    title: "Resume Preparation",
    blurb: "Everything you need to turn the training into a resume that gets interviews.",
    pages: [
      {
        slug: "skill-section",
        title: "Skill Section Builder",
        blurb:
          "Pick a layout and get a ready-made prompt to paste into your own AI. It writes your skills section.",
      },
      {
        slug: "summary",
        title: "Summary Builder",
        blurb:
          "Get a ready-made prompt that writes the bullet points of your resume summary. You write the first line yourself.",
      },
      {
        slug: "experience",
        title: "Experience Builder",
        blurb:
          "Describe one job and get a ready-made prompt that writes its project description and 10 to 12 keyword-rich bullets.",
      },
    ],
  },
];

/** The URL for one page, e.g. "/resume-preparation/skill-section". */
export function pageHref(section: string, page: string): string {
  return `/${section}/${page}`;
}

export function findSection(slug: string): Section | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}
