import { Link } from "react-router-dom";
import { PAGE_LABELS, findWeekByDaySlug, pageHref, type PageKind } from "../curriculum";

export default function DayNav({ day, current }: { day: string; current: PageKind }) {
  const week = findWeekByDaySlug(day);
  const pages = week?.days.find((d) => d.slug === day)?.pages ?? [];

  return (
    <p className="home-nav">
      <Link to="/">← Week 1 Home</Link>
      {pages.map((page) => (
        <span key={page}>
          {" · "}
          {page === current ? (
            <strong>{PAGE_LABELS[page]}</strong>
          ) : (
            <Link to={pageHref(week!.slug, day, page)}>{PAGE_LABELS[page]}</Link>
          )}
        </span>
      ))}
    </p>
  );
}
