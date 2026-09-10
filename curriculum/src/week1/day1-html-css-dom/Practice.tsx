import DayNav from "../../components/DayNav";

export default function Practice() {
  return (
    <div className="page practice-page">
      <title>Day 1 Practice</title>
      <DayNav day="day1-html-css-dom" current="practice" />

      <h1>Day 1 — Practice</h1>
      <p className="intro">
        No starter files, no exact expected output, no test cases — each sketch below just shows
        roughly what to aim for. Build these from scratch in your own HTML/CSS file(s), one running
        page you build up task by task. Come to the 6pm lab ready to open your file and explain or
        modify it live.
      </p>
      <p className="callout">
        Work through these during the gap between lecture and lab. Use <code>notes.html</code> as your
        reference if you get stuck on syntax — don't use AI to generate the answer.
      </p>

      <div className="task">
        <span className="task-num">1</span>
        <div className="task-body">
          <p>
            Build a small profile card: image, name/role, short bio. Use at least one semantic tag for
            the container, give the image real <code>alt</code> text, and give the card visible
            <code>padding</code> so the content isn't flush against its edges.
          </p>
        </div>
        <svg className="sketch task-sketch" width="220" height="120" viewBox="0 0 220 120">
          <rect x="1" y="1" width="218" height="118" rx="8" />
          <circle cx="34" cy="34" r="18" />
          <rect className="fill-line" x="64" y="24" width="70" height="9" rx="4" />
          <rect className="fill-line" x="64" y="40" width="45" height="7" rx="3.5" />
          <rect className="fill-line" x="16" y="66" width="188" height="7" rx="3.5" />
          <rect className="fill-line" x="16" y="80" width="188" height="7" rx="3.5" />
          <rect className="fill-line" x="16" y="94" width="120" height="7" rx="3.5" />
        </svg>
      </div>

      <div className="task">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>
            Add a form with this shape: 2 labeled inputs, a checkbox, a submit button. Every input
            needs a matching <code>&lt;label&gt;</code>, don't close self-closing tags, and give the
            form a visible <code>border</code>.
          </p>
        </div>
        <svg className="sketch task-sketch" width="220" height="150" viewBox="0 0 220 150">
          <rect x="1" y="1" width="218" height="148" rx="8" />
          <rect className="fill-line" x="16" y="16" width="50" height="7" rx="3.5" />
          <rect x="16" y="28" width="188" height="20" rx="4" />
          <rect className="fill-line" x="16" y="60" width="50" height="7" rx="3.5" />
          <rect x="16" y="72" width="188" height="20" rx="4" />
          <rect x="16" y="106" width="14" height="14" rx="3" />
          <rect className="fill-line" x="36" y="109" width="80" height="7" rx="3.5" />
          <rect className="accent" x="16" y="128" width="64" height="16" rx="8" />
        </svg>
      </div>

      <div className="task">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>
            Add a list of at least 4 items somewhere on the page — skills, hobbies, nav links, your
            choice — and make at least one item contain its own nested sub-list (one level deep).
          </p>
        </div>
        <svg className="sketch task-sketch" width="200" height="130" viewBox="0 0 200 130">
          <rect x="1" y="1" width="198" height="128" rx="8" />
          <circle className="accent" cx="22" cy="20" r="3.5" />
          <rect className="fill-line" x="34" y="16" width="140" height="8" rx="4" />
          <circle className="accent" cx="22" cy="42" r="3.5" />
          <rect className="fill-line" x="34" y="38" width="150" height="8" rx="4" />
          <circle className="accent" cx="46" cy="62" r="3" style={{ fill: "#b9cdf0" }} />
          <rect className="fill-line" x="56" y="58" width="100" height="7" rx="3.5" style={{ fill: "#dbe6f7" }} />
          <circle className="accent" cx="46" cy="82" r="3" style={{ fill: "#b9cdf0" }} />
          <rect className="fill-line" x="56" y="78" width="80" height="7" rx="3.5" style={{ fill: "#dbe6f7" }} />
          <circle className="accent" cx="22" cy="106" r="3.5" />
          <rect className="fill-line" x="34" y="102" width="110" height="8" rx="4" />
        </svg>
      </div>

      <div className="task">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>
            Add a table with a header row and at least 2 data rows — e.g. name/role, like the
            reference table in the notes.
          </p>
        </div>
        <svg className="sketch task-sketch" width="200" height="100" viewBox="0 0 200 100">
          <rect x="1" y="1" width="198" height="98" rx="6" />
          <rect className="accent" x="1" y="1" width="198" height="26" rx="6" />
          <rect className="fill-line" style={{ fill: "#fff" }} x="14" y="10" width="60" height="8" rx="4" />
          <rect className="fill-line" style={{ fill: "#fff" }} x="110" y="10" width="60" height="8" rx="4" />
          <line x1="1" y1="53" x2="199" y2="53" stroke="#7ea6e0" strokeWidth="1" />
          <rect className="fill-line" x="14" y="37" width="60" height="8" rx="4" />
          <rect className="fill-line" x="110" y="37" width="60" height="8" rx="4" />
          <rect className="fill-line" x="14" y="64" width="60" height="8" rx="4" />
          <rect className="fill-line" x="110" y="64" width="60" height="8" rx="4" />
        </svg>
      </div>

      <div className="task">
        <span className="task-num">5</span>
        <div className="task-body">
          <p>
            Build a toolbar with flexbox: 3–4 items, evenly spaced, all vertically centered no matter
            their height.
          </p>
          <p className="bonus">
            Bonus: rebuild the same toolbar with <code>display: grid</code> — compare the CSS for the
            same visual result.
          </p>
        </div>
        <svg className="sketch task-sketch" width="220" height="70" viewBox="0 0 220 70">
          <rect x="1" y="1" width="218" height="68" rx="8" />
          <rect className="accent" x="16" y="24" width="32" height="22" rx="4" />
          <rect className="accent" x="94" y="18" width="32" height="34" rx="4" />
          <rect className="accent" x="172" y="28" width="32" height="14" rx="4" />
        </svg>
      </div>

      <div className="task">
        <span className="task-num">6</span>
        <div className="task-body">
          <p>
            Add a media query so something visibly changes below a 600px viewport width. Test it by
            resizing the window or using DevTools' device toolbar.
          </p>
        </div>
        <svg className="sketch task-sketch" width="220" height="100" viewBox="0 0 220 100">
          <rect x="1" y="10" width="120" height="80" rx="6" />
          <text x="8" y="98" fontSize="8">≥ 600px</text>
          <rect className="accent" x="12" y="22" width="30" height="18" rx="3" />
          <rect className="accent" x="48" y="22" width="30" height="18" rx="3" />
          <rect className="accent" x="84" y="22" width="30" height="18" rx="3" />
          <text x="140" y="55" fontSize="14">→</text>
          <rect x="160" y="1" width="58" height="98" rx="6" />
          <text x="160" y="107" fontSize="8">&lt; 600px</text>
          <rect className="accent" x="170" y="12" width="38" height="16" rx="3" />
          <rect className="accent" x="170" y="34" width="38" height="16" rx="3" />
          <rect className="accent" x="170" y="56" width="38" height="16" rx="3" />
        </svg>
      </div>

      <div className="task">
        <span className="task-num">7</span>
        <div className="task-body">
          <p>
            In the DevTools console, use <code>document.querySelector</code> and
            <code>document.getElementById</code> to select two elements you built above, and
            <code>console.log</code> each one.
          </p>
        </div>
      </div>

    </div>
  );
}
