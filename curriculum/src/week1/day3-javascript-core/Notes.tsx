import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Notes() {
  return (
    <div className="page notes-page">
      <title>Day 3 Notes</title>
      <DayNav day="day3-javascript-core" current="notes" />

      <header className="lecture-header">
        <p className="eyebrow">Week 1 · Day 3 · Notes</p>
        <h1>JavaScript Core</h1>
        <p className="subtitle">Executive summary → full walkthrough</p>
      </header>

      {/* ============================================================ */}
      {/* Section 1 — Executive Summary                                 */}
      {/* ============================================================ */}
      <section id="executive-summary" className="exec-summary">
        <h2>Section 1 — Executive Summary</h2>
        <p>
          The essentials — the bare minimum you need to know for today, not a
          highlights reel of the lecture:
        </p>
        <ul>
          <li>Explain primitive (pass-by-value) vs. reference (pass-by-reference) semantics, including what happens when an object/array is passed into a function.</li>
          <li>Build a mixed-type array and read a property from a nested object.</li>
          <li>Shallow-copy an array and an object with spread, and confirm the original is untouched.</li>
          <li>Write an <code>if</code>/<code>else if</code>/<code>else</code> chain and a ternary expression.</li>
          <li>Write a <code>for</code> loop, including the <code>for...of</code> variant, over an array.</li>
          <li>Build a string with <code>+</code> concatenation and with a template literal.</li>
          <li>Destructure properties out of an object.</li>
          <li>Know the difference between <code>==</code> and <code>===</code>, and use <code>===</code> by default.</li>
          <li>Explain <code>let</code> vs. <code>const</code> — reassigning the binding vs. mutating what it points to.</li>
          <li>Use the core string methods: <code>toUpperCase</code>/<code>toLowerCase</code>, <code>charAt</code>, <code>split</code>, <code>substring</code>.</li>
        </ul>
        <p>
          Want more? <a href="/src/day3-javascript-core/concepts.html">View all concepts?</a>
        </p>
      </section>

      <hr className="section-divider" />

      {/* ============================================================ */}
      {/* Section 2 — Full Walkthrough                                  */}
      {/* ============================================================ */}
      <h2 style={{ marginTop: "2.5rem" }}>Section 2 — Full Walkthrough</h2>

      <section id="primitives-references">
        <h2>1. Primitives vs. references (core!)</h2>
        <CodeBlock code={`let a = 10;
let b = a;        // copies the VALUE
b = 20;
console.log(a, b);   // 10 20 — fully independent

let arr1 = [1, 2, 3];
let arr2 = arr1;     // copies the REFERENCE — same array in memory
arr2.push(4);
console.log(arr1);       // [1, 2, 3, 4] — arr1 changed too!

function mutate(obj) {
  obj.name = "changed"; // mutates the SAME object the caller passed in
}
let person = { name: "Ada" };
mutate(person);
console.log(person.name); // "changed"`} language="typescript" />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>Primitives (<code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, <code>bigint</code>) are copied <strong>by value</strong> — each variable owns an independent copy.</li>
            <li>Objects and arrays are copied <strong>by reference</strong> — the variable holds a pointer to the same data, so both variables see any mutation.</li>
            <li>This is exactly why passing an object/array into a function lets that function mutate the caller's data, while passing a primitive never does.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      <section id="basics">
        <h2>2. Arrays, objects, and functions — the basics</h2>
        <CodeBlock code={`// array — create with [], access by index (0-based)
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"

// object — create with {}, access with dot or bracket notation
const user = { name: "Ada", age: 36 };
console.log(user.name);    // "Ada" — dot notation
console.log(user["age"]); // 36 — bracket notation, key as a string

// nested object — chain the same access one level deeper
const company = { name: "Acme", address: { city: "Boston" } };
console.log(company.address.city); // "Boston"

// function — the \`function\` keyword, parameters, and a return value
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3)); // 5`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="equality">
        <h2>3. Equality comparison</h2>
        <CodeBlock code={`console.log(1 == "1");   // true  — coerces "1" to 1 first
console.log(1 === "1");  // false — different types, no coercion

console.log([] == []);   // false — two DIFFERENT array objects in memory
console.log({} == {});   // false — same reason

let refA = [1, 2];
let refB = refA;         // same reference, different variable name
console.log(refA === refB); // true — literally the same object`} language="typescript" />
        <p className="callout">
          Objects and arrays only ever equal <em>themselves</em> — comparison checks reference
          identity, never structure. Two arrays with identical contents are still two different boxes
          in memory, so they're never <code>==</code> or <code>===</code> to each other.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="copies">
        <h2>4. Shallow vs. deep copy</h2>
        <CodeBlock code={`const original = { title: "Draft", meta: { views: 10 } };

// shallow copy — only the TOP level is copied
const shallow = { ...original };
shallow.title = "Draft v2";        // fine — independent string
shallow.meta.views = 999;             // NOT fine — meta is still the SAME nested object
console.log(original.meta.views); // 999 — leaked through

// spread also OVERRIDES left-to-right — later keys win
const merged = { ...original, title: "Overridden" };
console.log(merged.title); // "Overridden"

// deep copy — walks the WHOLE structure, nothing is shared
const deep = structuredClone(original);
deep.meta.views = 1;
console.log(original.meta.views); // still 999, untouched`} language="typescript" />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>Spread (<code>{"{"}...obj{"}"}</code>/<code>[...arr]</code>) and <code>Object.assign</code> copy exactly <strong>one level</strong> deep — any nested object/array inside is still the same shared reference.</li>
            <li><code>structuredClone(x)</code> is the modern, built-in deep clone — it walks the whole structure and handles <code>Date</code>, <code>Map</code>, <code>Set</code>, nested objects/arrays correctly. It still can't clone functions.</li>
            <li>The older fallback, <code>JSON.parse(JSON.stringify(x))</code>, also deep-clones — but silently drops functions and <code>undefined</code> values, and turns <code>Date</code> objects into plain strings.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      <section id="scope">
        <h2>5. Scope, <code>var</code>/<code>let</code>/<code>const</code>, hoisting</h2>
        <CodeBlock code={`console.log(typeof hoistedVar); // "undefined" — var is hoisted AND initialized to undefined
var hoistedVar = 1;

console.log(typeof hoistedLet); // ReferenceError — hoisted but NOT initialized (temporal dead zone)
let hoistedLet = 1;`} language="typescript" />
        <CodeBlock code={`const person = { name: "Ada" };
person.name = "Grace"; // fine — mutating the object, not reassigning the binding
person = {};             // ✗ error — Assignment to constant variable`} language="typescript" good={[2]} bad={[3]} />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>var</code> is <strong>function-scoped</strong>, hoisted to the top of its function and initialized as <code>undefined</code> — reading it early just gives <code>undefined</code>, no error.</li>
            <li><code>let</code>/<code>const</code> are <strong>block-scoped</strong>, hoisted but left uninitialized — reading either before its declaration line throws (the "temporal dead zone").</li>
            <li><code>const</code> blocks reassigning the <em>binding</em>, not mutating the object/array it points to.</li>
            <li>Global <code>var</code>s (and function declarations) attach to the <code>window</code> object; global <code>let</code>/<code>const</code> do not — that's part of why leaving things on <code>window</code> is a known memory-leak risk (nothing ever lets them get garbage-collected).</li>
          </ul>
        </div>
        <p className="callout">
          Memory model, briefly: primitives live on the <strong>stack</strong> (fixed size, fast to
          copy). Objects/arrays live on the <strong>heap</strong> (variable size); the variable itself
          just holds a reference (pointer) to that heap location — which is the actual reason copying a
          reference doesn't copy the underlying data.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="conditionals">
        <h2>6. Control flow: conditionals</h2>
        <CodeBlock code={`if (age >= 18) {
  // ...
} else if (age >= 13) {
  // ...
} else {
  // ...
}

const label = isActive ? "Active" : "Inactive"; // ternary

const name = userName ?? "Guest"; // only falls back on null/undefined
const count = userCount || 10;  // falls back on ANY falsy value`} language="typescript" />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>??</code> (nullish coalescing) only replaces <code>null</code>/<code>undefined</code>.</li>
            <li><code>||</code> replaces <em>any</em> falsy value — including a real <code>0</code>, <code>""</code>, or <code>false</code> you actually wanted to keep. That's the classic bug <code>??</code> was added to fix.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      <section id="loops">
        <h2>7. Control flow: loops</h2>
        <CodeBlock code={`for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // skip just this iteration
  if (i === 4) break;    // stop the loop entirely
  console.log(i);
}

// for...of — a variation for iterating an array's VALUES directly, no index needed
const nums = [10, 20, 30];
for (const n of nums) {
  console.log(n); // 10, then 20, then 30
}

let tries = 0;
while (tries < 3) {
  tries++;
}`} language="typescript" />
        <CodeBlock code={`switch (day) {
  case "Sat":
  case "Sun":
    console.log("weekend");
    break;
  case "Mon":
    console.log("start of week");
    break;
  default:
    console.log("midweek");
}

// the classic switch bug — a missing break falls through into the next case
switch (grade) {
  case 1:
    result = "needs improvement"; // ✗ no break — also runs case 2 below
  case 2:
    result = "satisfactory";
    break; // ✓ stops here — only this case runs
}`} language="typescript" good={[18, 19]} bad={[16]} />
      </section>

      {/* ============================================================ */}
      <section id="error-handling">
        <h2>8. Error handling</h2>
        <CodeBlock code={`try {
  throw new Error("something broke");
} catch (err) {
  console.log(err.message); // "something broke"
} finally {
  console.log("always runs"); // runs whether try succeeded or threw
}`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="operators">
        <h2>9. Operators reference</h2>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Operators</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arithmetic</td>
              <td><code>+ - * / % += -= *= /=</code></td>
            </tr>
            <tr>
              <td>Comparison</td>
              <td><code>== != === !== &gt; &lt; &gt;= &lt;=</code></td>
            </tr>
            <tr>
              <td>Logical</td>
              <td><code>&amp;&amp; || !</code></td>
            </tr>
            <tr>
              <td>Unary</td>
              <td><code>typeof + ++ --</code></td>
            </tr>
          </tbody>
        </table>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><strong>Short-circuit evaluation:</strong> <code>&amp;&amp;</code> returns its first falsy operand (or the last one if none are falsy); <code>||</code> returns its first truthy operand. That's why <code>isLoggedIn &amp;&amp; showProfile()</code> only calls <code>showProfile()</code> when <code>isLoggedIn</code> is truthy — it's not just for booleans.</li>
            <li><strong>Type coercion:</strong> <code>1 + "1"</code> → <code>"11"</code> (a string is present, so <code>+</code> concatenates); <code>1 + 1</code> → <code>2</code> (both numbers, so <code>+</code> adds).</li>
          </ul>
        </div>
        <p className="callout">
          Falsy values — everything else is truthy (including <code>"0"</code>, <code>"false"</code>,
          <code>[]</code>, and <code>{"{"}{"}"}</code>): <code>false</code>, <code>0</code>, <code>-0</code>,
          <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="strings">
        <h2>10. String operators &amp; methods</h2>
        <CodeBlock code={`const first = "Ada";
const greetingA = "Hello, " + first + "!"; // concatenation
const greetingB = \`Hello, \${first}!\`;    // template literal — cleaner, multi-line safe

first.length;          // 3
first.charAt(0);       // "A"
first.substring(1, 3);  // "da"`} language="typescript" />
        <p className="callout">
          Handy <code>console.log</code> tricks: <code>console.log("label:", value)</code> prints
          several values with commas between them; <code>console.table(arrayOfObjects)</code> renders
          a real table; <code>console.group()</code>/<code>console.groupEnd()</code> nests related logs.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="destructuring">
        <h2>11. Destructuring</h2>
        <CodeBlock code={`const [first, second] = [10, 20]; // array — by position

const person = { name: "Ada", age: 36 };
const { name, age } = person;         // object — by property name
const { name: fullName } = person;    // rename while destructuring`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="optional-chaining">
        <h2>12. Optional chaining</h2>
        <CodeBlock code={`const city = user?.address?.city;              // undefined instead of throwing if address is missing
const cityOrDefault = user?.address?.city ?? "Unknown"; // combine with ?? for a default`} language="typescript" />
        <p className="callout">
          <code>?.</code> short-circuits to <code>undefined</code> the moment anything in the chain is
          <code>null</code>/<code>undefined</code>, instead of throwing — pairs naturally with
          <code>??</code> to supply a fallback in the same expression.
        </p>
      </section>



    </div>
  );
}
