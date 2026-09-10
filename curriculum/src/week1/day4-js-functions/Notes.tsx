import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Notes() {
  return (
    <div className="page notes-page">
      <title>Day 4 Notes</title>
      <DayNav day="day4-js-functions" current="notes" />

      <header className="lecture-header">
        <p className="eyebrow">Week 1 · Day 4 · Notes</p>
        <h1>JS Functions</h1>
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
          <li>Write a function as a declaration and as an arrow function with an explicit <code>return</code>, both typed, and explain the difference between <code>foo</code> (the function itself) and <code>foo()</code> (calling it).</li>
          <li>Use a default parameter in a function signature.</li>
          <li>Write a function that takes a callback and calls it — explain what a higher-order function and a callback are.</li>
          <li>Use <code>forEach</code>, <code>map</code>, <code>filter</code>, <code>find</code>, and <code>includes</code> confidently.</li>
          <li>Use <code>push</code>, <code>pop</code>, <code>sort</code>, and <code>join</code> on an array.</li>
          <li>Use the core string methods: <code>trim</code>, <code>toLowerCase</code>/<code>toUpperCase</code>, <code>split</code>, <code>includes</code>, <code>charAt</code>, <code>substring</code>.</li>
        </ul>
        <p>
          Want more? <a href="/src/day4-js-functions/concepts.html">View all concepts?</a>
        </p>
      </section>

      <hr className="section-divider" />

      {/* ============================================================ */}
      {/* Section 2 — Full Walkthrough                                  */}
      {/* ============================================================ */}
      <h2 style={{ marginTop: "2.5rem" }}>Section 2 — Full Walkthrough</h2>

      <section id="function-syntax">
        <h2>1. Function syntax: <code>foo</code> vs <code>foo()</code></h2>
        <p>Three ways to write the same function:</p>
        <CodeBlock code={`// 1. function declaration — hoisted, can be called before it's defined
function add(a, b) {
  return a + b;
}

// 2. function expression — a function stored in a variable
const subtract = function (a, b) {
  return a - b;
};

// 3. arrow function — shorter syntax, see section 3 for the return styles
const multiply = (a, b) => a * b;`} language="typescript" />
        <p className="callout">
          <code>add</code> is the function itself — a value you can log, pass
          around, or store. <code>add()</code> <em>calls</em> it and gives you
          its return value instead.
        </p>
        <CodeBlock code={`console.log(add); // [Function: add] — the function's own definition
console.log(add(2, 3)); // 5 — the result of calling it`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="parameters">
        <h2>2. Parameters: default &amp; rest</h2>
        <CodeBlock code={`// default parameter — used only if the argument is omitted (or undefined)
function greet(name = "friend") {
  return \`Hello, \${name}!\`;
}
greet(); // "Hello, friend!"
greet("Sam"); // "Hello, Sam!"

// rest parameter — collects every remaining argument into a real array
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4); // 10`} language="typescript" />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>...</code> is <strong>rest</strong> when it's collecting: in a parameter list, it gathers loose arguments into one array.</li>
            <li><code>...</code> is <strong>spread</strong> when it's expanding: <code>Math.max(...[1, 2, 3])</code> unpacks an array back into separate arguments.</li>
            <li>Same syntax, opposite direction — rest packs values in, spread lays them back out.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      <section id="arrow-functions">
        <h2>3. Arrow function return styles</h2>
        <CodeBlock code={`// implicit return — one expression, no braces, no \`return\` keyword
const square = n => n * n;

// explicit return — braces mean you must write \`return\` yourself
const squareVerbose = n => {
  return n * n;
};

// implicit return of an object — wrap it in parens so \`{ }\` isn't read as a function body
const makePoint = (x, y) => ({ x, y });

// explicit return of an object — no parens needed once you use \`return\`
const makePointVerbose = (x, y) => {
  return { x, y };
};`} language="typescript" />
        <p className="callout">
          Forgetting the parens around an implicitly-returned object is the
          classic mistake: <code>n =&gt; {"{"} n {"}"}</code> is read as a function
          <em>body</em> containing the statement <code>n;</code>, not an object —
          it returns <code>undefined</code>.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="hof-callbacks">
        <h2>4. Higher-order functions &amp; callbacks</h2>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>A <strong>higher-order function</strong> is any function that takes another function as an argument, returns one, or both.</li>
            <li>A <strong>callback</strong> is the function you hand over — it gets called <em>later</em>, by the higher-order function, not by you directly.</li>
            <li><code>map</code>, <code>filter</code>, <code>reduce</code>, and <code>forEach</code> are all built-in HOFs — the function you pass them is the callback.</li>
          </ul>
        </div>
        <CodeBlock code={`// a HOF you write yourself
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i); // repeat calls the callback — you don't call it yourself
  }
}
repeat(3, i => console.log("tick", i));`} language="typescript" />
        <p className="callout">
          <code>repeat(callback)</code> passes the function itself — it runs
          later, when <code>repeat</code> decides to. <code>repeat(callback())</code>
          would call it <em>immediately</em> and pass its return value instead —
          almost never what you want for a callback.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="closures-scope">
        <h2>5. Closure &amp; the scope chain</h2>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>A <strong>closure</strong> is a function that "remembers" the variables from the scope it was created in, even after that outer function has already finished running.</li>
            <li>The <strong>scope chain</strong> is how a function looks up a variable it doesn't have locally: it checks its own scope first, then walks outward through each enclosing function's scope, and finally the global scope.</li>
            <li>Closures are what make the scope chain useful for more than lookup — they let an inner function keep a private reference to outer variables long-term.</li>
          </ul>
        </div>
        <CodeBlock code={`function outer() {
  let secret = "I persist";

  function inner() {
    console.log(secret); // found via the scope chain, not inner's own scope
  }
  return inner;
}

const fn = outer(); // outer() has already returned...
fn(); // ...but fn still remembers \`secret\` — that's the closure`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="private-variables">
        <h2>6. Private variables: Counter I &amp; II</h2>
        <p>Closures are the classic way JS fakes a "private" variable — nothing outside the closure can reach it directly:</p>
        <CodeBlock code={`// Counter I — one shared private variable, two functions that can touch it
function makeCounter() {
  let count = 0; // private — no outside code can read or set this directly

  return {
    increment: () => ++count,
    getValue: () => count,
  };
}

const counterA = makeCounter();
counterA.increment();
counterA.increment();
counterA.getValue(); // 2 — count itself is never exposed`} language="typescript" />
        <CodeBlock code={`// Counter II — reuse the same factory to reset, decrement, and stay independent per instance
function makeCounter(start = 0) {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = start),
    getValue: () => count,
  };
}

const counterB = makeCounter(10);
const counterC = makeCounter(); // a totally separate closure — its own private \`count\`
counterB.decrement();
counterC.increment();
counterB.getValue(); // 9
counterC.getValue(); // 1 — counterB and counterC never share state`} language="typescript" />
        <p className="callout">
          <strong>Reuse functionality:</strong> <code>makeCounter</code> is a
          factory — call it as many times as you want and each call builds a
          brand-new, independent closure. That's the whole payoff over writing
          one counter by hand: the same function reuses the pattern for every
          instance.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="prototypes">
        <h2>7. Prototypes &amp; built-in methods</h2>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>Every array/string/object in JS has a <strong>prototype</strong> — a shared object holding the built-in methods for that type.</li>
            <li>That's why <code>[1, 2, 3].map(...)</code> works on any array: <code>map</code> lives once on <code>Array.prototype</code>, not copied onto every array.</li>
            <li>You don't need to write your own prototypes today — just know this is <em>why</em> every array and string already comes with a full toolbox of methods, which is what the rest of this page is about.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      <section id="array-iteration">
        <h2>8. Array iteration: forEach, map, filter, find, includes, join</h2>
        <CodeBlock code={`const scores = [72, 88, 95, 60];

scores.forEach(s => console.log(s)); // just runs a callback per item, returns undefined

const curved = scores.map(s => s + 5); // [77, 93, 100, 65] — new array, same length

const passing = scores.filter(s => s >= 70); // [72, 88, 95] — new array, only matches

const firstFailing = scores.find(s => s < 70); // 60 — first match, or undefined

scores.includes(95); // true — does the array contain this value?

scores.join(", "); // "72, 88, 95, 60" — array to string, with a separator`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="reduce">
        <h2>9. <code>reduce</code>: sums, objects, frequency maps</h2>
        <p className="callout">
          <code>reduce</code> walks the array once, carrying an
          <strong>accumulator</strong> forward from each call to the next —
          it's the one array method general enough to rebuild
          <code>map</code> or <code>filter</code> yourself if you had to.
        </p>
        <CodeBlock code={`// sum of numbers
const total = [10, 20, 30].reduce((acc, n) => acc + n, 0);
// total = 60

// sum of a field across an array of objects
const cart = [{ price: 10 }, { price: 25 }, { price: 5 }];
const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
// cartTotal = 40

// frequency map — count how often each value shows up
const words = ["a", "b", "a", "c", "b", "a"];
const freq = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
// freq = { a: 3, b: 2, c: 1 }`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="array-mutation">
        <h2>10. Mutating vs. non-mutating array methods</h2>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Mutates the original?</th>
              <th>Methods</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Yes — mutates</strong></td>
              <td><code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>reverse</code>, <code>sort</code>, <code>splice</code></td>
            </tr>
            <tr>
              <td><strong>No — returns a new array</strong></td>
              <td><code>slice</code>, <code>map</code>, <code>filter</code>, <code>flat</code>, <code>concat</code></td>
            </tr>
          </tbody>
        </table>
        <CodeBlock code={`const nums = [3, 1, 2];

nums.push(4); // [3, 1, 2, 4] — nums itself changed
nums.pop(); // removes & returns 4, nums back to [3, 1, 2]
nums.unshift(0); // [0, 3, 1, 2] — adds to the front
nums.shift(); // removes & returns 0, nums back to [3, 1, 2]
nums.reverse(); // [2, 1, 3] — reversed in place

const nested = [1, [2, 3], [4, [5]]];
nested.flat(); // [1, 2, 3, 4, [5]] — one level deep by default
nested.flat(Infinity); // [1, 2, 3, 4, 5] — fully flattened`} language="typescript" />

        <h3>Sort: numbers vs. objects</h3>
        <p className="callout">
          <code>sort()</code> with no callback converts everything to a
          <strong>string</strong> first — <code>[10, 2, 1].sort()</code> gives
          <code>[1, 10, 2]</code>, not numeric order. Always pass a compare
          function for numbers.
        </p>
        <CodeBlock code={`const nums2 = [10, 2, 33, 1];
nums2.sort((a, b) => a - b); // [1, 2, 10, 33] — ascending
nums2.sort((a, b) => b - a); // [33, 10, 2, 1] — descending

const students = [
  { name: "Sam", score: 72 },
  { name: "Ana", score: 95 },
];
students.sort((a, b) => b.score - a.score); // Ana first — highest score first`} language="typescript" />

        <h3>Slice: pagination</h3>
        <CodeBlock code={`function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize); // doesn't touch the original array
}

const allUsers = ["A", "B", "C", "D", "E"];
paginate(allUsers, 1, 2); // ["A", "B"] — page 1
paginate(allUsers, 2, 2); // ["C", "D"] — page 2`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="strings">
        <h2>11. String methods</h2>
        <CodeBlock code={`const msg = "  Hello, World!  ";

msg.trim(); // "Hello, World!" — strips leading/trailing whitespace
msg.toLowerCase(); // "  hello, world!  "
msg.toUpperCase(); // "  HELLO, WORLD!  "
msg.includes("World"); // true

const clean = "Hello, World!";
clean.charAt(0); // "H" — the character at that index
clean.slice(7, 12); // "World" — supports negative indices, e.g. slice(-6)
clean.substring(7, 12); // "World" — like slice, but clamps negatives to 0
clean.split(", "); // ["Hello", "World!"] — string to array`} language="typescript" />
        <p className="callout">
          <code>slice</code> works the same way on strings <em>and</em> arrays —
          same signature, same negative-index behavior. Learn it once.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="capstone">
        <h2>12. Putting it together: reusable grade tracker</h2>
        <p>Closures for private state + a factory for reuse + array HOFs to work across many instances:</p>
        <div className="capstone">
          <CodeBlock code={`// factory + closure — every call makes its own private \`grades\` array
function makeGradeTracker(studentName) {
  let grades = []; // private — nothing outside this closure can reach it directly

  return {
    name: studentName,
    addGrade: grade => grades.push(grade),
    getAverage: () =>
      grades.length === 0
        ? 0
        : grades.reduce((sum, g) => sum + g, 0) / grades.length,
  };
}

// reuse: the same factory builds a whole roster, each with its own private state
const roster = ["Ana", "Sam", "Lee"].map(makeGradeTracker);

roster[0].addGrade(95);
roster[0].addGrade(88);
roster[1].addGrade(60);

// HOFs across the roster — filter, map, sort all built on the same tracker objects
const passing = roster.filter(student => student.getAverage() >= 70);
const summary = roster
  .map(student => (\`\${student.name}: \${student.getAverage()}\`))
  .join(" | ");
// "Ana: 91.5 | Sam: 60 | Lee: 0"`} language="typescript" />
        </div>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Piece</th>
              <th>What it's using</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>makeGradeTracker</code></td>
              <td>closure + private variable (<code>grades</code>), factory function for reuse</td>
            </tr>
            <tr>
              <td><code>getAverage</code></td>
              <td>arrow function with a ternary, <code>reduce</code> for the sum</td>
            </tr>
            <tr>
              <td><code>roster</code></td>
              <td><code>map</code> to build many independent closures at once</td>
            </tr>
            <tr>
              <td><code>passing</code> / <code>summary</code></td>
              <td>higher-order functions: <code>filter</code>, <code>map</code>, <code>join</code> chained together</td>
            </tr>
          </tbody>
        </table>
      </section>



    </div>
  );
}
