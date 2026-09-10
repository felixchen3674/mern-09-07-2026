import { Link } from "react-router-dom";
import {
  GENERAL_NOTES,
  PAGE_LABELS,
  WEEKS,
  pageHref,
  type Day,
  type Week,
} from "./curriculum";

function DayRow({ week, day }: { week: Week; day: Day }) {
  return (
    <li>
      <strong>
        Day {day.number} — {day.title}
      </strong>
      <br />
      {day.pages.length > 0 ? (
        day.pages.map((page, i) => (
          <span key={page}>
            {i > 0 && " · "}
            <Link to={pageHref(week.slug, day.slug, page)}>
              {PAGE_LABELS[page]}
            </Link>
          </span>
        ))
      ) : (
        <span className="not-built">Not yet built</span>
      )}
    </li>
  );
}

export default function Home() {
  return (
    <div className="page home-page">
      <title>Week 1 — JS/TS Foundations</title>
      <h1>Week 1: Web Dev Fundamentals (JS/TS Core)</h1>
      {WEEKS.map((week) => (
        <ul key={week.slug}>
          {week.days.map((day) => (
            <DayRow key={day.slug} week={week} day={day} />
          ))}
        </ul>
      ))}

      <section>
        <h2>General Notes</h2>
        <ul>
          {GENERAL_NOTES.map((note) => (
            <li key={note.slug}>
              <strong>
                <Link to={`/general/${note.slug}`}>{note.title}</Link>
              </strong>
              <br />
              <span className="not-built">{note.blurb}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
