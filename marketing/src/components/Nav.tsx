import { Link } from "react-router-dom";
import { findSection, pageHref } from "../marketing";

// The one nav bar for every page: sticky at the top. Links come from marketing.ts, never from
// the calling page, so a page that isn't declared there can't be linked to.
//
//   <Nav section="resume-preparation" current="skill-section" />   a page and its siblings
//   <Nav />                                                         the home page (nothing to go back to)
type Props = { section?: string; current?: string };

export default function Nav({ section, current }: Props) {
  const found = section ? findSection(section) : undefined;
  if (!found) return null;

  return (
    <nav className="site-nav">
      <Link to="/">Home</Link>
      <span className="site-nav-sep">/</span>
      <span>{found.title}</span>
      <span className="site-nav-sep">›</span>
      {found.pages.map((page, i) => (
        <span key={page.slug}>
          {i > 0 && " · "}
          {page.slug === current ? (
            <strong>{page.title}</strong>
          ) : (
            <Link to={pageHref(found.slug, page.slug)}>{page.title}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
