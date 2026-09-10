import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Concepts() {
  return (
    <div className="page concepts-page">
      <title>Day 4 Concepts Reference</title>
      <DayNav day="day4-js-functions" current="concepts" />

      <h1>Day 4 — Concepts Reference</h1>
      <p className="intro">Try to answer each one yourself, then click to reveal it.</p>

      <section id="tier-1">
        <h2>1. Basic concepts</h2>
        <p className="tier-note">
          Foundational stuff — straight from the lecture and/or comes up constantly in interviews. If
          you're shaky on any of these, that's the priority to fix.
        </p>

        <details>
          <summary>What's the difference between <code>console.log(foo)</code> and <code>console.log(foo())</code>?</summary>
          <div className="answer">
            <p>
              <code>foo</code> logs the function itself (its definition). <code>foo()</code>
              <em>calls</em> it and logs whatever it returns instead.
            </p>
          </div>
        </details>

        <details>
          <summary>What is a callback function?</summary>
          <div className="answer">
            <p>
              A function passed as an argument to another function, which then calls it later on your
              behalf — instead of you calling it directly yourself.
            </p>
          </div>
        </details>

        <details>
          <summary>What does the <code>reduce</code> method do?</summary>
          <div className="answer">
            <p>
              Walks an array once, carrying an accumulator value forward from each call to the next,
              and returns that single final value — e.g. summing numbers or building a frequency map.
            </p>
          </div>
        </details>

        <details>
          <summary>What's the difference between <code>forEach()</code> and <code>map()</code>?</summary>
          <div className="answer">
            <p>
              <code>forEach</code> just runs a callback per item and returns <code>undefined</code> —
              it's for side effects. <code>map</code> returns a brand-new array built from the
              callback's return values, leaving the original untouched.
            </p>
          </div>
        </details>

        <details>
          <summary>What's the difference between <code>func(callback)</code> and <code>func(callback())</code>?</summary>
          <div className="answer">
            <p>
              <code>func(callback)</code> passes the function itself, to be called later by
              <code>func</code>. <code>func(callback())</code> calls <code>callback</code> immediately
              and passes its return value instead — almost never what you want for an actual callback.
            </p>
          </div>
        </details>

        <details>
          <summary>Explain the rest parameter (<code>...args</code>) and how it differs from the spread operator.</summary>
          <div className="answer">
            <p>
              Same <code>...</code> syntax, opposite direction. As a <strong>rest parameter</strong> (in
              a function signature) it collects loose arguments into one array:
              <code>function sum(...nums)</code>. As <strong>spread</strong> it expands an array back
              into separate values: <code>Math.max(...[1, 2, 3])</code>.
            </p>
          </div>
        </details>

        <details>
          <summary>What is a "Higher-Order Function"? Give 3 built-in JavaScript examples.</summary>
          <div className="answer">
            <p>
              A function that takes another function as an argument, returns one, or both. Built-in
              examples: <code>map</code>, <code>filter</code>, and <code>reduce</code> (also
              <code>forEach</code>, <code>find</code>, <code>sort</code> with a compare function).
            </p>
          </div>
        </details>

        <details>
          <summary>Define "closure" in your own words. What is its purpose?</summary>
          <div className="answer">
            <p>
              A function that keeps access to the variables from the scope it was created in, even
              after that outer function has finished running. Its purpose is state that persists
              between calls without being global — most commonly used to create private variables (see
              the counter examples in <code>notes.html</code>).
            </p>
          </div>
        </details>

        <details>
          <summary>Explain the scope chain. How does a function look up a variable that isn't in its own local scope?</summary>
          <div className="answer">
            <p>
              It checks its own local scope first, then walks outward through each enclosing function's
              scope, and finally the global scope — stopping at the first match it finds. Closures work
              because that lookup can still succeed even after the outer function has already returned.
            </p>
          </div>
        </details>

        <details>
          <summary>Write default parameters for a function.</summary>
          <div className="answer">
            <p>A parameter gets its default only when the argument is omitted (or passed as <code>undefined</code>):</p>
            <CodeBlock code={`function greet(name = "friend") {
  return \`Hello, \${name}!\`;
}
greet(); // "Hello, friend!"`} language="typescript" />
          </div>
        </details>

        <details>
          <summary>Write an example of an arrow function using implicit return, explicit return, implicit return of an object, and explicit return of an object.</summary>
          <div className="answer">
            <CodeBlock code={`const square = n => n * n; // implicit return

const squareVerbose = n => {
  return n * n; // explicit return
};

const makePoint = (x, y) => ({ x, y }); // implicit return of an object — needs the parens

const makePointVerbose = (x, y) => {
  return { x, y }; // explicit return of an object — no parens needed
};`} language="typescript" />
          </div>
        </details>

        <details>
          <summary>
            Which of these array methods mutate the original array, and which return a new one?
            <code>map()</code>, <code>filter()</code>, <code>push()</code>, <code>pop()</code>,
            <code>slice()</code>, <code>splice()</code>, <code>sort()</code>
          </summary>
          <div className="answer">
            <p>
              <strong>Mutate:</strong> <code>push()</code>, <code>pop()</code>, <code>splice()</code>,
              <code>sort()</code>. <strong>Return a new array:</strong> <code>map()</code>,
              <code>filter()</code>, <code>slice()</code>. The one-letter difference between
              <code>slice</code> (safe, returns new) and <code>splice</code> (mutates) trips people up
              constantly — worth memorizing on its own.
            </p>
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
          <summary>What is a "private variable," and how does a closure create one?</summary>
          <div className="answer">
            <p>
              A value that outside code has no direct way to read or modify — only functions defined
              inside the same closure can touch it. A counter factory's <code>count</code> variable
              (see <code>notes.html</code>) is the classic example: nothing outside
              <code>makeCounter</code> can reach <code>count</code> except through the
              <code>increment</code>/<code>getValue</code> functions it hands back.
            </p>
          </div>
        </details>

        <details>
          <summary>What is function currying? Write an example.</summary>
          <div className="answer">
            <p>
              Turning a function that takes multiple arguments into a chain of functions that each take
              one argument at a time, returning the next function until all arguments are collected.
            </p>
            <CodeBlock code={`const add = a => b => a + b;
const addFive = add(5); // a is "locked in" via closure
addFive(3); // 8`} language="typescript" />
          </div>
        </details>

        <details>
          <summary>What is an IIFE (Immediately Invoked Function Expression), and what is it for?</summary>
          <div className="answer">
            <p>
              A function that's defined and called in the same statement —
              <code>(function () {"{"} ... {"}"})();</code> — so it runs exactly once immediately. Its
              traditional purpose is creating a private scope that doesn't leak variables into the
              surrounding code, a need mostly replaced today by modules and block-scoped
              <code>let</code>/<code>const</code>.
            </p>
          </div>
        </details>

        <details>
          <summary>What is the runtime (Big-O) of <code>sort()</code>?</summary>
          <div className="answer">
            <p>
              <code>O(n log n)</code> on average — the spec doesn't mandate a specific algorithm, but
              every engine uses something in that class (V8 uses Timsort).
            </p>
          </div>
        </details>

        <details>
          <summary>For methods like <code>structuredClone</code> and <code>crypto.randomUUID</code>, what happens if a very old browser doesn't support them?</summary>
          <div className="answer">
            <p>
              Calling an unsupported method throws a <code>TypeError</code> — there's no silent
              fallback. In practice, you'd feature-detect (<code>if (typeof structuredClone === "function")</code>)
              and fall back to an older approach (e.g. <code>JSON.parse(JSON.stringify(x))</code> for
              cloning) or a small polyfill library for genuinely old-browser support.
            </p>
          </div>
        </details>
      </section>



    </div>
  );
}
