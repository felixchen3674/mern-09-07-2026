import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Notes() {
  return (
    <div className="page notes-page">
      <title>Day 2 Notes</title>
      <DayNav day="day2-typescript-core" current="notes" />

      <header className="lecture-header">
        <p className="eyebrow">Week 1 · Day 2 · Notes</p>
        <h1>TypeScript Core</h1>
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
          <li>Explain what TypeScript actually is — a compiled superset of JS — and how it compares to plain JavaScript.</li>
          <li>Type variables (primitives, arrays) explicitly, and know when TS can infer the type on its own.</li>
          <li>Type a function's parameters and return value.</li>
          <li>Define an object shape with <code>interface</code>, including an optional (<code>?</code>) property.</li>
          <li>Define an interface with an array property.</li>
          <li>Define a union type (<code>|</code>) for a fixed set of allowed values.</li>
        </ul>
        <p>
          Want more? <a href="/src/day2-typescript-core/concepts.html">View all concepts?</a>
        </p>
      </section>

      <hr className="section-divider" />

      {/* ============================================================ */}
      {/* Section 2 — Full Walkthrough                                  */}
      {/* ============================================================ */}
      <h2 style={{ marginTop: "2.5rem" }}>Section 2 — Full Walkthrough</h2>

      <section id="orientation">
        <h2>1. Orientation</h2>
        <ul>
          <li>JavaScript runs in the <strong>browser</strong> (needs an HTML host page) or standalone in <strong>Node.js</strong> — no browser required.</li>
          <li>TypeScript is a <strong>superset</strong> of JavaScript: every valid JS file is already valid TS.</li>
          <li>TS types are checked at <strong>compile time</strong>, then stripped away — the browser/Node never sees them, only the plain JS underneath.</li>
          <li>Benefit: catches whole categories of bugs before the code ever runs, plus much better autocomplete/tooling.</li>
        </ul>
      </section>

      {/* ============================================================ */}
      <section id="primitives">
        <h2>2. Primitive types &amp; inference</h2>
        <CodeBlock code={`let studentName: string = "Alice";
let studentAge: number = 24;
let isEnrolled: boolean = true;
let graduationDate: Date | null = null;`} language="typescript" />
        <p className="callout">
          Type inference: <code>let something = "something";</code> — no
          annotation needed, TS already knows it's a <code>string</code> just
          from the value. Only annotate when TS can't infer it for you (e.g. an
          empty array, a function parameter).
        </p>
      </section>

      {/* ============================================================ */}
      <section id="arrays-objects-functions">
        <h2>3. Arrays, objects, functions</h2>
        <CodeBlock code={`let scores: number[] = [90, 85, 100];
let hobbies: string[] = ["Coding", "Gaming"];

// inline object type — fine for a one-off, interface below is better once reused
let simpleStudent: { name: string; age: number } = { name: "Bob", age: 25 };

function calculateAverage(a: number, b: number): number {
  return (a + b) / 2;
}`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="four-kings">
        <h2>4. The four special types</h2>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Meaning</th>
              <th>Use it when</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>any</code></td>
              <td>turns type-checking off completely</td>
              <td>~never — it's the escape hatch, avoid it</td>
            </tr>
            <tr>
              <td><code>unknown</code></td>
              <td>could be anything, but must be narrowed before use</td>
              <td>data from outside your program you haven't validated yet</td>
            </tr>
            <tr>
              <td><code>void</code></td>
              <td>function returns nothing meaningful</td>
              <td>side-effect-only functions (logging, mutating, etc.)</td>
            </tr>
            <tr>
              <td><code>never</code></td>
              <td>function never returns normally</td>
              <td>it always throws, or loops forever</td>
            </tr>
          </tbody>
        </table>
        <CodeBlock code={`let randomData: any = "hello";
randomData.push(1); // compiles fine, crashes at runtime — any turned checking off

let safeData: unknown = "hello";
if (typeof safeData === "string") {
  safeData.toUpperCase(); // only allowed once TS knows it's a string
}`} language="typescript" good={[6]} bad={[2]} />
        <CodeBlock code={`function logMessage(msg: string): void {
  console.log("LOG: " + msg);
}

function throwError(msg: string): never {
  throw new Error(msg);
}`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="interfaces">
        <h2>5. Interfaces</h2>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>Prefer <code>interface</code> for object shapes — it's the default.</li>
            <li>Reach for <code>type</code> only once you need a union or intersection — syntax an <code>interface</code> can't express.</li>
          </ul>
        </div>
        <CodeBlock code={`interface StudentProfile {
  id: number;
  name: string;
  hobbies?: string[]; // optional — safe to omit entirely
}

let student1: StudentProfile = { id: 1, name: "Charlie" }; // fine, hobbies omitted`} language="typescript" />
        <p className="callout">
          Non-null assertion (<code>!</code>):
          <code>db.find(s =&gt; s.id === id)!</code> — <code>find</code> returns
          <code>StudentProfile | undefined</code>, and <code>!</code> tells TS
          "trust me, it's there." A wrong <code>!</code> compiles clean and
          crashes at runtime with zero warning — only use it when you're
          certain.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="union">
        <h2>6. Type aliases &amp; union (<code>|</code>)</h2>
        <p>A fixed, closed set of allowed values — nothing else is accepted:</p>
        <CodeBlock code={`type Gender = "Male" | "Female" | "Other";
type HomeworkStatus = "Pending" | "Completed" | "Failed";
type EvaluationResult = "pass" | "fail" | null;

let myGender: Gender = "Male"; // only these three strings are allowed`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="intersection">
        <h2>7. Intersection (<code>&amp;</code>)</h2>
        <p>Combine two shapes — the result must satisfy both:</p>
        <CodeBlock code={`interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeId: string;
  department: string;
}

type StaffMember = Person & Employee; // must have every field from both

let myManager: StaffMember = {
  name: "Alex",
  age: 35,
  employeeId: "EMP-001",
  department: "Marketing",
};`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="enums">
        <h2>8. Enums</h2>
        <p>A name for a fixed set of related constants:</p>
        <CodeBlock code={`enum Role {
  Admin = "ADMIN",
  User = "USER",
  Employee = "EMPLOYEE",
}

let myRole: Role = Role.Admin;`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="generics">
        <h2>9. Generics</h2>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>&lt;T&gt;</code> is a placeholder type — filled in at the call site.</li>
            <li>One function/interface works for many types, without losing type safety the way <code>any</code> would.</li>
          </ul>
        </div>
        <CodeBlock code={`interface Box<T> {
  content: T;
}

let stringBox: Box<string> = { content: "Apple" };
let numberBox: Box<number> = { content: 100 };

// without generics you'd need getFirstString, getFirstNumber, ... one per type
function getFirstItem<T>(items: T[]): T {
  return items[0];
}

let firstNumber = getFirstItem<number>([10, 20, 30]); // T = number
let firstString = getFirstItem<string>(["Apple", "Banana"]); // T = string`} language="typescript" />
        <p className="callout">
          Real-world use: an API always returns the same envelope shape
          (<code>{"{"} status, data {"}"}</code>) but <code>data</code> is different
          per endpoint — that's exactly what
          <code>ApiResponse&lt;T&gt;</code> in the capstone below is for.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="type-assertion">
        <h2>10. Type assertion (<code>as</code>)</h2>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>as Type</code> tells the <em>compiler</em> "trust me, treat this as X" — it changes nothing at runtime.</li>
            <li>That's different from an actual runtime conversion like <code>Number(x)</code>, which really does produce a new value.</li>
            <li>Only assert a type you're actually sure of — same risk as non-null assertion, wrong ones crash silently past compile time.</li>
          </ul>
        </div>
        <CodeBlock code={`const input = document.querySelector("#age") as HTMLInputElement; // assertion — compiler only
const age = Number(input.value); // real runtime conversion — string to number`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="capstone">
        <h2>11. Putting it together: Bootcamp grading system</h2>
        <p>One realistic example using everything above at once:</p>
        <div className="capstone">
          <CodeBlock code={`// enum + union + interface
interface BootcampStudent {
  id: string;
  name: string;
  role: Role;
  status: HomeworkStatus;
}

// array of objects — the "database"
let db: BootcampStudent[] = [
  { id: "S1", name: "David", role: Role.User, status: "Pending" },
];

// generics + intersection — one reusable API envelope shape
interface ErrorHandling {
  success: boolean;
}
type ApiResponse<T> = { data: T } & ErrorHandling;

// function + non-null assertion
function completeHomework(studentId: string): ApiResponse<BootcampStudent> {
  // find() returns BootcampStudent | undefined — ! says "it's definitely there"
  let target = db.find((s) => s.id === studentId)!;
  target.status = "Completed";

  return { success: true, data: target };
}

let result = completeHomework("S1");
console.log(result.data.name + " is now " + result.data.status);
// David is now Completed`} language="typescript" />
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
              <td><code>BootcampStudent</code></td>
              <td>interface, enum (<code>Role</code>), union (<code>HomeworkStatus</code>)</td>
            </tr>
            <tr>
              <td><code>ApiResponse&lt;T&gt;</code></td>
              <td>generics + intersection</td>
            </tr>
            <tr>
              <td><code>completeHomework</code></td>
              <td>typed function, non-null assertion (<code>!</code>)</td>
            </tr>
          </tbody>
        </table>
      </section>



    </div>
  );
}
