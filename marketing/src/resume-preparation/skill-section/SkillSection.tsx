import { useMemo, useState } from "react";
import ChoiceCards from "../../components/ChoiceCards";
import Nav from "../../components/Nav";
import { copyText } from "../../components/copyText";
import { BUCKETS, LAYOUTS } from "./data";
import { NAME_MODES, buildPrompt, type NameMode } from "./promptBuilder";

export default function SkillSection() {
  // The layout marked "(default)" in 08-builder-layouts.md is pre-selected (Classic Stack).
  const [layoutNumber, setLayoutNumber] = useState((LAYOUTS.find((l) => l.isDefault) ?? LAYOUTS[0])?.number ?? 1);
  const layout = LAYOUTS.find((l) => l.number === layoutNumber) ?? LAYOUTS[0];

  const [nameMode, setNameMode] = useState<NameMode>("exact");

  const [extraSkills, setExtraSkills] = useState("");

  const [generated, setGenerated] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  // What the prompt would be right now. The text only becomes visible when the student clicks
  // Generate; this lets us warn them if they change a setting afterwards.
  const current = useMemo(
    () => (layout ? buildPrompt({ nameMode, extraSkills }, BUCKETS, layout) : ""),
    [layout, nameMode, extraSkills],
  );
  const stale = generated !== null && generated !== current;

  function generate() {
    setGenerated(current);
    setCopyState("idle");
    // Let the output render, then bring it into view.
    requestAnimationFrame(() =>
      document.getElementById("prompt-output")?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  async function copy() {
    if (generated === null) return;
    setCopyState((await copyText(generated)) ? "copied" : "failed");
  }

  return (
    <div className="page skill-page">
      <Nav section="resume-preparation" current="skill-section" />
      <h1>Skill Section Builder</h1>
      <h2>Step 1 · Pick a layout</h2>
      <div className="layout-grid" role="radiogroup" aria-label="Skill section layout">
        {LAYOUTS.map((l) => (
          <label key={l.number} className={`layout-card${l.number === layoutNumber ? " selected" : ""}`}>
            <input
              type="radio"
              name="layout"
              value={l.number}
              checked={l.number === layoutNumber}
              onChange={() => setLayoutNumber(l.number)}
            />
            <span className="layout-title">
              {l.name}
              {l.isDefault && <span className="badge">Default</span>}
            </span>
            <span className="layout-desc">{l.description}</span>
            <ul className="layout-cats">
              {l.categories.map((c) => (
                <li key={c.name}>{c.name}</li>
              ))}
            </ul>
          </label>
        ))}
      </div>

      <h2>Step 2 · Adjust</h2>

      <ChoiceCards
        legend="Category names"
        name="nameMode"
        value={nameMode}
        onChange={setNameMode}
        options={(Object.keys(NAME_MODES) as NameMode[]).map((m) => ({
          value: m,
          title: NAME_MODES[m].label,
          hint: NAME_MODES[m].hint,
        }))}
      />

      <h2>Step 3 · Additional skills (optional)</h2>
      <div className="field">
        <label htmlFor="extra-skills">Skills that are not in the bank</label>
        <textarea
          id="extra-skills"
          rows={3}
          value={extraSkills}
          onChange={(e) => setExtraSkills(e.target.value)}
          placeholder="For example: Java, Python, C#"
        />
      </div>

      <h2>Step 4 · Generate your prompt</h2>
      <button type="button" className="btn primary" onClick={generate}>
        {generated === null ? "Generate prompt" : "Regenerate prompt"}
      </button>

      {generated !== null && (
        <section id="prompt-output" className="prompt-output">
          <div className="prompt-bar">
            <h3>Your prompt</h3>
            <button type="button" className="btn" onClick={copy}>
              {copyState === "copied" ? "Copied ✓" : "Copy prompt"}
            </button>
          </div>

          {stale && (
            <p className="notice">
              You changed a setting after generating. Click <strong>Regenerate prompt</strong> to update it.
            </p>
          )}
          {copyState === "failed" && (
            <p className="notice">Copy didn't work in this browser. Click inside the box, press Ctrl/Cmd+A, then copy.</p>
          )}

          <textarea className="prompt-text" readOnly value={generated} rows={18} aria-label="Generated prompt" />

          <p className="muted">
            Next: open your own AI chat, paste this in, and send it. It replies with your skills section and a short
            list of skills to be ready to explain.
          </p>
        </section>
      )}

      <h2>The skills bank</h2>
      <p className="muted">
        The prompt draws only from this list: the high-level skills that belong in a skills section. The finer detail
        (hooks, interceptors, and so on) goes in your project descriptions instead.
      </p>
      <details className="bank">
        <summary>Show all {BUCKETS.length} buckets</summary>
        {BUCKETS.map((b) => (
          <div key={b.id} className="bucket">
            <strong>
              {b.id} · {b.name}
            </strong>
            <p>{b.keywords}</p>
          </div>
        ))}
      </details>
    </div>
  );
}
