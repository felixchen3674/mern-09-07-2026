import DayNav from "../../components/DayNav";

export default function Concepts() {
  return (
    <div className="page concepts-page">
      <title>Day 3 Concepts Reference</title>
      <DayNav day="day3-javascript-core" current="concepts" />

      <h1>Day 3 — Concepts Reference</h1>
      <p className="intro">Try to answer each one yourself, then click to reveal it.</p>

      <section id="tier-1">
        <h2>1. Basic concepts</h2>
        <p className="tier-note">
          Foundational stuff — straight from the lecture and/or comes up constantly in interviews. If
          you're shaky on any of these, that's the priority to fix.
        </p>

        <details>
          <summary>
            What are the 7 primitive data types in JavaScript, and how are they stored in memory
            compared to objects?
          </summary>
          <div className="answer">
            <p>
              <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>,
              <code>undefined</code>, <code>symbol</code>, and <code>bigint</code>. Primitives are
              stored directly on the stack as their actual value; objects (including arrays and
              functions) live on the heap, and a variable only holds a reference (pointer) to that
              heap location.
            </p>
          </div>
        </details>

        <details>
          <summary>
            Explain the difference between "pass by value" and "pass by reference," with examples.
          </summary>
          <div className="answer">
            <p>
              Pass by value copies the actual data — <code>let b = a</code> on a primitive copies its
              value, so changing <code>b</code> never touches <code>a</code>. Pass by reference copies
              a pointer to the same underlying object — <code>let arr2 = arr1</code> makes both
              variables point at the same array, so mutating one mutates both.
            </p>
          </div>
        </details>

        <details>
          <summary>Can you modify the properties of an object declared with <code>const</code>? Why or why not?</summary>
          <div className="answer">
            <p>
              Yes — <code>const</code> only locks the variable binding from being reassigned to a
              different object; it says nothing about the object's own contents, so its properties can
              still be changed freely.
            </p>
          </div>
        </details>

        <details>
          <summary>How does "shallow copy" differ from "deep copy"?</summary>
          <div className="answer">
            <p>
              A shallow copy (spread, <code>Object.assign</code>) only copies the top level — any
              nested object/array inside is still the same shared reference as the original. A deep
              copy walks the entire structure and makes every nested level independent too.
            </p>
          </div>
        </details>

        <details>
          <summary>
            Explain the spread operator (<code>...</code>) and how it behaves when merging objects
            with conflicting keys.
          </summary>
          <div className="answer">
            <p>
              <code>...</code> expands an array/object's own properties into a new one, copying one
              level deep. When merging two objects that share a key, whichever spread comes later wins
              — <code>{"{"} ...a, ...b {"}"}</code> lets <code>b</code>'s value overwrite <code>a</code>'s.
            </p>
          </div>
        </details>

        <details>
          <summary>
            What is destructuring, for arrays and objects — and how do you rename a variable while
            destructuring?
          </summary>
          <div className="answer">
            <p>
              Pulling values out of an array (by position) or an object (by property name) into their
              own variables in one step — e.g. <code>const [a, b] = arr;</code> or
              <code>const {"{"} name, age {"}"} = obj;</code>. To rename while destructuring an object, write
              <code>const {"{"} name: fullName {"}"} = obj;</code>.
            </p>
          </div>
        </details>

        <details>
          <summary>What are template literals / string interpolation?</summary>
          <div className="answer">
            <p>
              Backtick-delimited strings (<code>`...`</code>) that embed expressions directly with
              <code>${"{"}...{"}"}</code> instead of <code>+</code> concatenation, and preserve real line
              breaks — e.g. <code>`Hello, ${"{"}name{"}"}!`</code>.
            </p>
          </div>
        </details>

        <details>
          <summary>Why does <code>[] == []</code> and <code>{"{"}{"}"} == {"{"}{"}"}</code> return <code>false</code>?</summary>
          <div className="answer">
            <p>
              Because comparing objects/arrays checks <em>reference</em> identity, not contents — two
              array/object literals create two separate objects in memory, so they're never equal to
              each other even with identical contents.
            </p>
          </div>
        </details>

        <details>
          <summary>Ways to perform deep cloning?</summary>
          <div className="answer">
            <p>
              <code>structuredClone(obj)</code> — built-in, handles most types including
              <code>Date</code>/<code>Map</code>/<code>Set</code>. Or the older
              <code>JSON.parse(JSON.stringify(obj))</code> fallback, which works for plain data but has
              real limitations (see next question).
            </p>
          </div>
        </details>

        <details>
          <summary>What are the limitations of using <code>JSON.parse(JSON.stringify(obj))</code> for deep cloning?</summary>
          <div className="answer">
            <p>
              It silently drops functions and <code>undefined</code> values, turns <code>Date</code>
              objects into plain strings (they don't come back as <code>Date</code>), and can't handle
              circular references or <code>Map</code>/<code>Set</code> at all.
            </p>
          </div>
        </details>

        <details>
          <summary>
            Explain the difference between global scope, function scope, and block scope.
          </summary>
          <div className="answer">
            <p>
              Global scope is visible everywhere. Function scope is visible only inside the function
              it's declared in — what <code>var</code> respects. Block scope is visible only inside
              the nearest <code>{"{"}{"}"}</code> — what <code>let</code>/<code>const</code> respect. E.g. a
              <code>let</code> declared inside an <code>if</code> block doesn't exist outside it, but a
              <code>var</code> declared the same way leaks into the whole function.
            </p>
          </div>
        </details>

        <details>
          <summary><code>let</code> vs <code>const</code> vs <code>var</code>?</summary>
          <div className="answer">
            <p>
              <code>var</code> is function-scoped and hoisted as <code>undefined</code>.
              <code>let</code>/<code>const</code> are block-scoped and hoisted but sit in the temporal
              dead zone until their declaration line runs. <code>const</code> additionally can't be
              reassigned (though its contents can still be mutated). Default to <code>const</code>,
              use <code>let</code> only when you need to reassign, and avoid <code>var</code>.
            </p>
          </div>
        </details>

        <details>
          <summary>What is type coercion?</summary>
          <div className="answer">
            <p>
              JavaScript automatically converting a value from one type to another so an operation can
              proceed — e.g. <code>1 + "1"</code> becomes <code>"11"</code> because the number is
              coerced to a string, while <code>1 + 1</code> stays <code>2</code> since both are already
              numbers. It's why <code>==</code> can produce surprising results and <code>===</code> is
              usually safer.
            </p>
          </div>
        </details>

        <details>
          <summary>What is hoisting?</summary>
          <div className="answer">
            <p>
              JavaScript moves variable and function <em>declarations</em> to the top of their scope
              before running any code. <code>var</code> and function declarations are hoisted with
              their value/definition intact; <code>let</code>/<code>const</code> are hoisted but left
              uninitialized (the temporal dead zone) until their actual line runs.
            </p>
          </div>
        </details>

        <details>
          <summary>What is "short-circuit evaluation" in logical operators (<code>&amp;&amp;</code> and <code>||</code>)?</summary>
          <div className="answer">
            <p>
              <code>&amp;&amp;</code> evaluates left to right and stops at the first falsy value (or
              the last value if none are falsy); <code>||</code> stops at the first truthy value. Used
              for more than booleans — <code>isLoggedIn &amp;&amp; showProfile()</code> only calls
              <code>showProfile()</code> when <code>isLoggedIn</code> is truthy.
            </p>
          </div>
        </details>

        <details>
          <summary>
            Explain the difference between the logical OR operator (<code>||</code>) and the nullish
            coalescing operator (<code>??</code>).
          </summary>
          <div className="answer">
            <p>
              <code>||</code> replaces any falsy value (<code>0</code>, <code>""</code>,
              <code>false</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>) with the
              fallback. <code>??</code> only replaces <code>null</code>/<code>undefined</code>, leaving
              other falsy-but-intentional values like <code>0</code> or <code>""</code> alone.
            </p>
          </div>
        </details>

        <details>
          <summary>What is "falsy" in JavaScript? List all the falsy values.</summary>
          <div className="answer">
            <p>
              A value that becomes <code>false</code> when coerced to boolean. Exactly seven exist:
              <code>false</code>, <code>0</code>, <code>-0</code>, <code>""</code>, <code>null</code>,
              <code>undefined</code>, and <code>NaN</code> — everything else, including
              <code>"0"</code> and <code>[]</code>, is truthy.
            </p>
          </div>
        </details>

        <details>
          <summary>Difference between <code>1 + "1"</code> vs. <code>1 + 1</code>?</summary>
          <div className="answer">
            <p>
              <code>1 + "1"</code> produces the string <code>"11"</code> because <code>+</code>
              concatenates when either side is a string; <code>1 + 1</code> produces the number
              <code>2</code> because both sides are numbers.
            </p>
          </div>
        </details>

        <details>
          <summary>What is the purpose of the <code>finally</code> block in a <code>try...catch...finally</code> statement?</summary>
          <div className="answer">
            <p>
              Code inside <code>finally</code> always runs, whether <code>try</code> succeeded or
              <code>catch</code> caught an error — the right place for cleanup that must happen either
              way (closing a connection, hiding a spinner, etc.).
            </p>
          </div>
        </details>

        <details>
          <summary>
            Difference between <code>==</code> and <code>===</code>? When is it acceptable to use
            <code>==</code>?
          </summary>
          <div className="answer">
            <p>
              <code>==</code> coerces both sides to a common type before comparing; <code>===</code>
              requires the same type and value, no coercion. <code>==</code> is rarely needed — about
              the only commonly accepted use is <code>x == null</code>, which deliberately catches both
              <code>null</code> and <code>undefined</code> in one check.
            </p>
          </div>
        </details>

        <details>
          <summary>How do you convert a string into a number, and vice versa?</summary>
          <div className="answer">
            <p>
              String → number: <code>Number(str)</code> or <code>parseInt(str)</code>/<code>parseFloat(str)</code>.
              Number → string: <code>String(num)</code>, or template-literal interpolation like
              <code>`${"{"}num{"}"}`</code>.
            </p>
          </div>
        </details>

        <details>
          <summary>When using a <code>switch</code> statement, what happens if you forget the <code>break</code> keyword?</summary>
          <div className="answer">
            <p>
              Execution falls through into the next case's code and runs it too, regardless of whether
              that case's value actually matched — the classic <code>switch</code> bug.
            </p>
          </div>
        </details>

        <details>
          <summary>What is optional chaining? Demonstrate how to use it.</summary>
          <div className="answer">
            <p>
              <code>?.</code> safely reads a property that might not exist — the expression
              short-circuits to <code>undefined</code> the instant anything in the chain is
              <code>null</code>/<code>undefined</code>, instead of throwing. E.g.
              <code>user?.address?.city</code> is <code>undefined</code> if <code>user</code> or
              <code>address</code> is missing, rather than crashing.
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
          <summary>What is the "temporal dead zone"?</summary>
          <div className="answer">
            <p>
              The window between when a <code>let</code>/<code>const</code> variable is hoisted and
              when its declaration line actually runs — the variable exists but accessing it throws a
              <code>ReferenceError</code> rather than returning <code>undefined</code>.
            </p>
          </div>
        </details>

        <details>
          <summary>
            Explain how JavaScript allocates memory. What goes into the "stack" and what goes into the
            "heap"?
          </summary>
          <div className="answer">
            <p>
              The stack holds primitives and function call frames — fixed-size, fast, automatically
              cleaned up when a function returns. The heap holds objects/arrays/functions —
              variable-size, and a stack variable pointing at one just holds a reference into the heap,
              not the data itself.
            </p>
          </div>
        </details>

        <details>
          <summary>How could the global/window object potentially cause memory leaks in JavaScript?</summary>
          <div className="answer">
            <p>
              Anything attached to <code>window</code> (a global <code>var</code>, a global function,
              an accidental undeclared assignment) stays reachable for the entire life of the page, so
              the garbage collector can never reclaim it — enough of these and memory usage just grows
              for as long as the tab stays open.
            </p>
          </div>
        </details>
      </section>

    </div>
  );
}
