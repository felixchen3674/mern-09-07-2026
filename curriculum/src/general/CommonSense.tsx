import { Link } from "react-router-dom";
import NoteNav from "../components/NoteNav";
import CodeBlock from "../components/CodeBlock";

// Two short snippets side by side, for comparisons where the whole point is the shape of the
// code (indentation, line breaks) rather than what it does.
function Compare({
  bad,
  good,
  language = "tsx",
}: {
  bad: string;
  good: string;
  language?: string;
}) {
  return (
    <div className="code-compare">
      <div>
        <p className="compare-label compare-bad">✗ Hard to read</p>
        <CodeBlock code={bad} language={language} />
      </div>
      <div>
        <p className="compare-label compare-good">✓ Readable</p>
        <CodeBlock code={good} language={language} />
      </div>
    </div>
  );
}

export default function CommonSense() {
  return (
    <div className="page notes-page">
      <title>Developer Common Sense</title>
      <NoteNav title="Developer Common Sense" />
      <header className="lecture-header">
        <p className="eyebrow">General Notes</p>
        <h1>Developer Common Sense</h1>
        <p className="subtitle">None of this is hard — it's the habits that make everything else faster</p>
      </header>

      <p className="intro">
        Every habit below is something the editor or the browser is already trying to tell you.
      </p>

      {/* ---------------------------------------------------------------- */}
      <h2>1. A red line means stop</h2>
      <p>The file is already broken. Fix it before you type another character.</p>

      <h3>The variable doesn't exist</h3>
      <p>Almost always a typo. The editor even guesses the right name for you.</p>
      <CodeBlock
        language="typescript"
        bad={[3]}
        code={`const total = 10;

console.log(toal); // Cannot find name 'toal'. Did you mean 'total'?`}
      />

      <h3>A bracket or brace isn't closed</h3>
      <p>The error usually points at the line <em>after</em> the real problem — count your braces.</p>
      <CodeBlock
        language="typescript"
        bad={[3]}
        code={`function greet(name: string) {
  console.log("hi", name);
// '}' expected. — the function was never closed`}
      />

      <h3>TypeScript says the type is wrong</h3>
      <p>Not a suggestion. The code will not compile.</p>
      <CodeBlock
        language="typescript"
        bad={[3]}
        code={`const ages: number[] = [];

ages.push("32"); // Argument of type 'string' is not assignable to parameter of type 'number'`}
      />

      <h3>A faint dotted underline is still a problem</h3>
      <p>Three little dots or a dimmed word is a warning — unused, unreachable, or misused.</p>
      <CodeBlock
        language="typescript"
        bad={[1]}
        code={`const draftTitle = "Untitled"; // 'draftTitle' is declared but its value is never read`}
      />

      <div className="callout">
        <p>
          Hover the squiggle and read the message. It already says what's wrong — nobody is asking
          you to figure it out alone.
        </p>
      </div>

      {/* ---------------------------------------------------------------- */}
      <h2>2. Log it, label it, then go look at it</h2>
      <p>Stop guessing what a value holds. Print it and check.</p>

      <h3>Always label the log</h3>
      <p>Five bare logs in a console are five mysteries.</p>
      <CodeBlock
        language="typescript"
        good={[3]}
        bad={[2]}
        code={`const todos = [{ id: 1, title: "Ship it" }];
console.log(todos);          // which one is this? no idea
console.log("todos", todos); // labelled — findable in the console`}
      />

      <h3>Then actually open the console</h3>
      <p>
        A <code>console.log</code> you never read did nothing. Open DevTools with{" "}
        <code>Cmd+Opt+J</code> (Mac) / <code>Ctrl+Shift+J</code> (Windows) — see the{" "}
        <Link to="/ide-shortcuts">shortcuts note</Link>.
      </p>

      {/* ---------------------------------------------------------------- */}
      <h2>3. Text pasted from a chat is not code</h2>
      <p>A problem description dropped into a <code>.ts</code> file breaks the whole file.</p>
      <CodeBlock
        language="typescript"
        bad={[1]}
        code={`Write a function that returns the sum of an array. // red lines everywhere — this is English`}
      />
      <CodeBlock
        language="typescript"
        good={[1]}
        code={`// Write a function that returns the sum of an array.
function sum(nums: number[]) {
  return nums.reduce((acc, n) => acc + n, 0);
}`}
      />

      <div className="callout">
        <p>
          Select every pasted line and hit <code>Cmd+/</code> (Mac) / <code>Ctrl+/</code> (Windows)
          to comment all of them at once.
        </p>
      </div>

      <h3>Pasted code often has the capitalization mangled</h3>
      <p>Keywords are lowercase. A capital letter makes them ordinary words.</p>
      <CodeBlock
        language="typescript"
        bad={[1, 2]}
        good={[4, 5]}
        code={`Const total = 0;   // 'Const' is not a keyword
Function foo() {}  // 'Function' is not a keyword

const total = 0;
function foo() {}`}
      />

      {/* ---------------------------------------------------------------- */}
      <h2>4. Indent as you type, then format the file</h2>
      <p>Do both. Indent while writing so you can read it now; format so it's clean when you stop.</p>

      <Compare
        language="typescript"
        bad={`if (score > 90) {
console.log("A");
} else {
console.log("B");
}`}
        good={`if (score > 90) {
  console.log("A");
} else {
  console.log("B");
}`}
      />

      <Compare
        bad={`function Card() {
return (
<div>
<h2>Title</h2>
<p>Body</p>
</div>
);
}`}
        good={`function Card() {
  return (
    <div>
      <h2>Title</h2>
      <p>Body</p>
    </div>
  );
}`}
      />

      <div className="callout">
        <p>
          Format the whole file with <code>Shift+Opt+F</code> (Mac) / <code>Shift+Alt+F</code>{" "}
          (Windows) — and turn on Format On Save so it happens by itself.
        </p>
      </div>

      {/* ---------------------------------------------------------------- */}
      <h2>5. One thing per line</h2>
      <p>Cramming statements or tags onto a single line hides bugs. Press Enter.</p>

      <h3>Nested JSX tags each get their own line</h3>
      <Compare
        bad={`function Card() {
  return <div><h2>Title</h2><p>Body</p><button>Buy</button></div>;
}`}
        good={`function Card() {
  return (
    <div>
      <h2>Title</h2>
      <p>Body</p>
      <button>Buy</button>
    </div>
  );
}`}
      />

      <h3>A function body is not a one-liner</h3>
      <Compare
        language="typescript"
        bad={`function getTotal(items: Item[]) { let total = 0; for (const item of items) { total += item.price; } return total; }`}
        good={`function getTotal(items: Item[]) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}`}
      />

      {/* ---------------------------------------------------------------- */}
      <h2>6. Take the autocomplete</h2>
      <p>
        When the suggestion list has the name you want, press <code>Tab</code> or{" "}
        <code>Enter</code>. Typing it out by hand is slower and misspells things.
      </p>
      <CodeBlock
        language="typescript"
        code={`const filteredTodos = todos.filter((todo) => !todo.done);

// type "fil" -> the list offers filteredTodos -> press Tab
console.log("filteredTodos", filteredTodos);`}
      />

      {/* ---------------------------------------------------------------- */}
      <h2>7. Know your way around the terminal</h2>
      <p>Your dev server holds a terminal open, so you need a second one for everything else.</p>
      <CodeBlock
        language="bash"
        code={`npm run dev     # this terminal is now busy running the server
                # Ctrl+C stops it and gives the prompt back

npm install axios   # run this in a SECOND terminal, not by killing the server`}
      />

      <div className="concept">
        <p className="concept-label">Concept</p>
        <ul>
          <li>
            Open a terminal with <code>Ctrl+`</code>, and a second one with{" "}
            <code>Ctrl+Shift+`</code> — same keys on Mac and Windows.
          </li>
          <li>
            <code>Ctrl+C</code> stops whatever is running. On a Mac it is <code>Ctrl</code>, not{" "}
            <code>Cmd</code> — this is the one place the Mac rule doesn't apply.
          </li>
          <li>
            A terminal showing no prompt isn't frozen; it's running something. Read it before you
            close the window.
          </li>
        </ul>
      </div>
    </div>
  );
}
