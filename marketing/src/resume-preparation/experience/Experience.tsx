import { useMemo, useState } from "react";
import Nav from "../../components/Nav";
import { copyText } from "../../components/copyText";
import { AREAS, KEYWORD_BUCKETS } from "./data";
import { buildExperiencePrompt } from "./promptBuilder";
import { REVIEW_PROMPT } from "./reviewPrompt";

const PLACEHOLDER = `Describe one job in your own words. For example:
- What the company does and what the project solves
- The dates of the job, for example 2019 – 2022
- Your role and what you built
- The tools and technologies you used
- Any results or numbers you remember`;

export default function Experience() {
  const [description, setDescription] = useState("");
  const [generated, setGenerated] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [reviewCopyState, setReviewCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const current = useMemo(() => buildExperiencePrompt(description, AREAS, KEYWORD_BUCKETS), [description]);
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

  async function copyReview() {
    setReviewCopyState((await copyText(REVIEW_PROMPT)) ? "copied" : "failed");
  }

  return (
    <div className="page skill-page">
      <Nav section="resume-preparation" current="experience" />
      <h1>Experience Builder</h1>

      <h2>Step 1 · Describe your job</h2>
      <div className="field">
        <label htmlFor="job">Job details</label>
        <textarea
          id="job"
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={PLACEHOLDER}
        />
      </div>

      <h2>Step 2 · Generate your prompt</h2>
      <button type="button" className="btn primary" onClick={generate} disabled={description.trim() === ""}>
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
              You changed the job details after generating. Click <strong>Regenerate prompt</strong> to update it.
            </p>
          )}
          {copyState === "failed" && (
            <p className="notice">Copy didn't work in this browser. Click inside the box, press Ctrl/Cmd+A, then copy.</p>
          )}

          <textarea className="prompt-text" readOnly value={generated} rows={18} aria-label="Generated prompt" />
        </section>
      )}

      <h2>Step 3 · Review the result</h2>
      <section className="prompt-output">
        <div className="prompt-bar">
          <h3>Review prompt</h3>
          <button type="button" className="btn" onClick={copyReview}>
            {reviewCopyState === "copied" ? "Copied ✓" : "Copy prompt"}
          </button>
        </div>
        {reviewCopyState === "failed" && (
          <p className="notice">Copy didn't work in this browser. Click inside the box, press Ctrl/Cmd+A, then copy.</p>
        )}
        <textarea className="prompt-text" readOnly value={REVIEW_PROMPT} rows={8} aria-label="Review prompt" />
      </section>
    </div>
  );
}
