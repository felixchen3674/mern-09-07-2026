import { Link } from "react-router-dom";
import { SECTIONS, pageHref } from "./marketing";

// The one index page: every section is a heading, every page under it is a link with a blurb.
// Everything rendered here comes from marketing.ts — this file decides layout only.
export default function Home() {
  return (
    <div className="home-page">
      <h1>Marketing</h1>
      <p className="intro">Resume and job-search guides for the MERN + AI training batch.</p>

      {SECTIONS.map((section) => (
        <section key={section.slug}>
          <h2>{section.title}</h2>
          <p className="muted">{section.blurb}</p>
          <ul>
            {section.pages.map((page) => (
              <li key={page.slug}>
                <Link to={pageHref(section.slug, page.slug)}>{page.title}</Link>
                <br />
                <span className="muted">{page.blurb}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
