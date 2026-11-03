import { useMemo, useState } from "react";
import Nav from "../../components/Nav";
import { copyText } from "../../components/copyText";
import { AREAS, BUCKETS } from "./data";
import { buildSummaryPrompt } from "./promptBuilder";

export default function Summary() {
  const [extra, setExtra] = useState("");
  const [generated, setGenerated] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const current = useMemo(() => buildSummaryPrompt(extra, AREAS, BUCKETS), [extra]);
  const stale = generated !== null && generated !== current;

  function generate() {
    setGenerated(current);
    setCopyState("idle");
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
      <Nav section="resume-preparation" current="summary" />
      <h1>Summary Builder</h1>
      <h2>What the AI will write</h2>
      <p className="muted">One or two bullets per area. The first line is yours to write.</p>
      <p className="example">
        <strong>Example first line:</strong> Full-Stack Software Engineer with X+ years of experience designing and
        delivering scalable web applications across retail, finance, insurance, and healthcare.
      </p>
      <ul className="layout-cats">
        {AREAS.map((a) => (
          <li key={a.number}>
            <strong>{a.label}</strong> ({a.bullets} {a.bullets === "1" ? "bullet" : "bullets"})
          </li>
        ))}
      </ul>

      <h2>Step 1 · Anything extra? (optional)</h2>
      <div className="field">
        <label htmlFor="extra">Additional information</label>
        <textarea
          id="extra"
          rows={5}
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          placeholder="Optional. For example: tools you have used at work, your target role, or a job description to tailor for."
        />
        <p className="hint">Leave it empty and the AI uses only the standard skills from the course.</p>
      </div>

      <h2>Step 2 · Generate your prompt</h2>
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
              You changed the extra information after generating. Click <strong>Regenerate prompt</strong> to update it.
            </p>
          )}
          {copyState === "failed" && (
            <p className="notice">Copy didn't work in this browser. Click inside the box, press Ctrl/Cmd+A, then copy.</p>
          )}

          <textarea className="prompt-text" readOnly value={generated} rows={18} aria-label="Generated prompt" />

          <p className="muted">
            Next: open your own AI chat, paste this in, and send it. Then add your own first line above the bullets.
          </p>
        </section>
      )}
    </div>
  );
}
