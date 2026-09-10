import DayNav from "../../components/DayNav";

export default function Concepts() {
  return (
    <div className="page concepts-page">
      <title>Day 2 Concepts Reference</title>
      <DayNav day="day2-typescript-core" current="concepts" />

      <h1>Day 2 — Concepts Reference</h1>
      <p className="intro">Try to answer each one yourself, then click to reveal it.</p>

      <section id="tier-1">
        <h2>1. Basic concepts</h2>
        <p className="tier-note">
          Foundational stuff — straight from the lecture and/or comes up constantly in interviews. If
          you're shaky on any of these, that's the priority to fix.
        </p>

        <details>
          <summary>What is TypeScript, and how does it relate to JavaScript?</summary>
          <div className="answer">
            <p>
              A superset of JavaScript that adds types. Every valid JS file is already valid TS, and
              the types are stripped away at compile time — the browser/Node only ever runs plain JS.
            </p>
          </div>
        </details>

        <details>
          <summary>
            If TS code produces the same values as the equivalent JS at runtime, what's actually the
            benefit — and which should a company prefer?
          </summary>
          <div className="answer">
            <p>
              TypeScript — it catches whole categories of bugs before the code ever runs (wrong
              argument types, typos in property names, forgotten null checks) and gives much better
              editor autocomplete. That payoff grows with team and codebase size, which is also why a
              tiny one-off script might still just reach for plain JS.
            </p>
          </div>
        </details>

        <details>
          <summary>
            Can Chrome run a <code>.ts</code> file directly, or does TypeScript run in the browser?
          </summary>
          <div className="answer">
            <p>
              No — browsers only understand JavaScript. A <code>.ts</code> file has to be compiled to
              plain <code>.js</code> first (by <code>tsc</code>, or by a bundler like Vite during dev);
              the browser never sees TypeScript or its types at all.
            </p>
          </div>
        </details>

        <details>
          <summary>When should you use <code>interface</code> vs <code>type</code>?</summary>
          <div className="answer">
            <p>
              Default to <code>interface</code> for object shapes. Reach for <code>type</code> once you
              need a union or an intersection — syntax <code>interface</code> can't express.
            </p>
          </div>
        </details>

        <details>
          <summary>What does a <code>?</code> after a property name mean in an interface?</summary>
          <div className="answer">
            <p>
              That property is optional — an object can satisfy the interface with or without it, and
              TS won't complain if it's missing.
            </p>
          </div>
        </details>

        <details>
          <summary>What is a union type (<code>|</code>)?</summary>
          <div className="answer">
            <p>
              A type that's one of a fixed set of options, e.g.
              <code>type Status = "pending" | "shipped" | "delivered"</code> — only those exact values
              are allowed, nothing else.
            </p>
          </div>
        </details>

        <details>
          <summary>What is an intersection type (<code>&amp;</code>)?</summary>
          <div className="answer">
            <p>
              Combines two shapes into one — the result must satisfy every field from both, e.g.
              <code>Person &amp; Employee</code> requires all of <code>Person</code>'s fields
              <em>and</em> all of <code>Employee</code>'s.
            </p>
          </div>
        </details>

        <details>
          <summary>What is a generic type parameter, like the <code>T</code> in <code>Box&lt;T&gt;</code>?</summary>
          <div className="answer">
            <p>
              A placeholder type filled in at the call site, so one function or interface works for
              many types without losing type safety the way <code>any</code> would.
            </p>
          </div>
        </details>

        <details>
          <summary>What is an enum?</summary>
          <div className="answer">
            <p>
              A name for a fixed set of related constants, e.g.
              <code>enum Role {"{"} Admin = "ADMIN", User = "USER" {"}"}</code>, referenced as
              <code>Role.Admin</code>.
            </p>
          </div>
        </details>

        <details>
          <summary>What does <code>void</code> mean as a return type?</summary>
          <div className="answer">
            <p>The function doesn't return a meaningful value — it only runs for its side effects.</p>
          </div>
        </details>
      </section>

      <section id="tier-2">
        <h2>2. Advanced concepts</h2>
        <p className="tier-note">
          Less commonly asked, and some go beyond what today's lecture covered — mostly "gotcha"
          interview trivia and things that sharpen how you code without being asked often.
        </p>

        <details>
          <summary>What's the difference between <code>any</code> and <code>unknown</code>?</summary>
          <div className="answer">
            <p>
              <code>any</code> turns type-checking off completely — you can call anything on it with no
              error, even if it'll crash at runtime. <code>unknown</code> also means "could be
              anything," but forces you to narrow it (e.g. with <code>typeof</code>) before you're
              allowed to use it.
            </p>
          </div>
        </details>

        <details>
          <summary>
            What does <code>never</code> mean as a return type, and how is it different from
            <code>void</code>?
          </summary>
          <div className="answer">
            <p>
              <code>void</code> means the function returns, just with nothing meaningful.
              <code>never</code> means the function never returns normally at all — it always throws or
              loops forever.
            </p>
          </div>
        </details>

        <details>
          <summary>What is non-null assertion (<code>!</code>), and why is it risky?</summary>
          <div className="answer">
            <p>
              It tells TS "trust me, this value isn't <code>null</code>/<code>undefined</code>," e.g.
              <code>db.find(...)!</code>. It's risky because a wrong assertion still compiles clean and
              crashes at runtime with no warning at all.
            </p>
          </div>
        </details>

        <details>
          <summary>
            What is type assertion (<code>as</code>), and how is it different from an actual runtime
            conversion?
          </summary>
          <div className="answer">
            <p>
              <code>as Type</code> only changes what the <em>compiler</em> believes about a value's
              type — nothing happens at runtime. A real conversion like <code>Number(x)</code> actually
              produces a new, different value.
            </p>
          </div>
        </details>

        <details>
          <summary>Why type an API response's data with a generic instead of a fixed type?</summary>
          <div className="answer">
            <p>
              Every endpoint shares the same envelope shape (e.g. <code>{"{"} success, data {"}"}</code>) but
              <code>data</code> differs per endpoint — a generic
              <code>ApiResponse&lt;T&gt;</code> reuses one type for all of them instead of writing a
              near-identical interface per endpoint.
            </p>
          </div>
        </details>
      </section>

    </div>
  );
}
