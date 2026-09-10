import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Practice() {
  return (
    <div className="page practice-page">
      <title>Day 3 Practice</title>
      <DayNav day="day3-javascript-core" current="practice" />

      <h1>Day 3 — Practice</h1>
      <p className="intro">
        Everything on this page is required, including the Advanced section at the end — get all of it
        solid and bring it to the 6pm lab.
      </p>
      <p className="callout">
        Work through these during the gap between lecture and lab. Use <code>notes.html</code> as your
        reference if you get stuck on syntax.
      </p>

      <div className="task">
        <span className="task-num">1</span>
        <div className="task-body">
          <p>Be able to build a mixed-type array and read a nested object property.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`mixedArray           // write an array of mixed types: a string, number, and boolean
user.address.city    // write a nested object, then read one level deep`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>Be able to show primitive vs. reference copy behavior.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`let a = 10, b = a;        // change b — confirm a is untouched
let arr1 = [1,2,3], arr2 = arr1;  // change arr2 — confirm arr1 changed too`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>Be able to shallow-copy an array and an object.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`originalArray → copy with [...]   // change the copy, confirm original untouched
originalObj → copy with {...}     // change the copy, confirm original untouched`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>Be able to write an if/else if/else chain.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const scores = [95, 82, 40];`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`grade(score)   // return "A" for 90+, "B" for 70-89, "C" below 70`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">5</span>
        <div className="task-body">
          <p>Be able to write a for loop over an array.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const numbers = [4, 8, 15, 16, 23, 42];
const people = [{ name: "Ada" }, { name: "Grace" }, { name: "Linus" }];`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`numbers   // use a classic for loop (with i) to log each number doubled
people    // use a for...of loop to log each person's name`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">6</span>
        <div className="task-body">
          <p>Be able to build a string two ways — concatenation and template literal.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const name = "Ada";
const age = 36;`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`// build "Ada is 36 years old" using string concatenation (+)
// build the same sentence again using a template literal`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">7</span>
        <div className="task-body">
          <p>Be able to destructure properties out of an object.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const user = { name: "Ada", age: 36, role: "Engineer" };`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`// destructure name and age into their own variables`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">8</span>
        <div className="task-body">
          <p>Be able to write a ternary expression.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const age = 20;`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`// write a ternary: status is "Adult" if age is 18+, else "Minor"`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">9</span>
        <div className="task-body">
          <p>Be able to predict <code>==</code> vs. <code>===</code> with coercion.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`1 == "1"    // predict true/false, then check — why?
1 === "1"   // predict true/false, then check — why?
[] == []    // predict true/false, then check — why?`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">10</span>
        <div className="task-body">
          <p>Be able to explain <code>let</code> vs. <code>const</code> — reassignment vs. mutation.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const person = { name: "Ada" };`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`person.name = "Grace"   // try it — fine, mutates the object, not the binding
person = {}             // predict — this throws. Why does one work and not the other?`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">11</span>
        <div className="task-body">
          <p>Be able to use core string methods (toUpperCase/toLowerCase, charAt, split, substring).</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const msg = "Hello, World!";`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`msg.toUpperCase()      // shout the whole string
msg.charAt(0)          // grab just the first character
msg.split(", ")        // split on the comma into an array
msg.substring(7, 12)   // pull out "World"`} language="typescript" />
        </div>
      </div>

      <p className="section-label">Put it all together</p>
      <p className="section-note">
        Two scenarios, each combining several of the tools above into one realistic problem — this is
        the real test of whether it clicked.
      </p>

      <div className="task challenge">
        <span className="task-num">12</span>
        <div className="task-body">
          <p>Class roster — process every student below.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const roster = [
  { name: "Ada", score: 92 },
  { name: "Grace", score: 67 },
  { name: "Linus", score: 45 },
];`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Loop over <code>roster</code>, destructuring <code>name</code> and <code>score</code> from each student.</li>
            <li>Ternary: <code>score &gt;= 60</code> → <code>"Pass"</code>, else <code>"Fail"</code>.</li>
            <li>Log one template-literal line per student, e.g. <code>"Ada: 92 (Pass)"</code>.</li>
            <li>Shallow-copy <code>roster</code>, push one more student onto <em>only</em> the copy, and confirm <code>roster.length</code> didn't change.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`"Ada: 92 (Pass)"
"Grace: 67 (Pass)"
"Linus: 45 (Fail)"
roster.length      // 3
rosterCopy.length  // 4`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">13</span>
        <div className="task-body">
          <p>Shopping cart — total up the order below.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const cart = [
  { item: "Keyboard", price: 45, qty: 2 },
  { item: "Mouse", price: 20, qty: 1 },
  { item: "Monitor", price: 150, qty: 1 },
];`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Loop over <code>cart</code>, destructuring <code>item</code>, <code>price</code>, <code>qty</code> from each entry.</li>
            <li>Log one line per item, e.g. <code>"Keyboard x2 = $90"</code>.</li>
            <li>Accumulate a running <code>total</code> across every item.</li>
            <li>Ternary: <code>total &gt; 100</code> → <code>"Free shipping"</code>, else <code>"Add more for free shipping"</code>.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`"Keyboard x2 = $90"
"Mouse x1 = $20"
"Monitor x1 = $150"
total   // 260
"Free shipping"`} language="typescript" />
        </div>
      </div>

      <p className="section-label">Advanced</p>
      <p className="section-note">
        Covered in lecture but not drilled above — optional chaining, <code>switch</code>, and deep
        cloning. The second problem in a pair is meant to be harder than the first.
      </p>

      <div className="task advanced">
        <span className="task-num">14</span>
        <div className="task-body">
          <p>Be able to safely access a nested property that might not exist.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const user = { name: "Ada" };  // no address property`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`user?.address?.city              // safely read it — address is missing, so this returns undefined instead of throwing
user?.address?.city ?? "Unknown" // add a fallback with ??, in case it's undefined`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">15</span>
        <div className="task-body">
          <p>Harder: be able to write a <code>switch</code>, including intentional fallthrough.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const day = "Sat";
const grade = 1;`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`classifyDay(day)    // write a switch: "Sat"/"Sun" → "weekend", "Mon" → "start of week", else "midweek"
gradeSwitch(grade)  // write a switch where case 1 falls through into case 2 on purpose (no break)`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">16</span>
        <div className="task-body">
          <p>Harder: be able to deep-clone a nested object and contrast it with a shallow copy.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const original = { title: "Draft", meta: { views: 10 } };`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`structuredClone(original)   // deep-clone it, then mutate the clone's meta.views — original stays untouched
{ ...original }             // shallow-copy it instead, then mutate meta.views — original DOES change`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">17</span>
        <div className="task-body">
          <p>Put it all together — advanced version.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const config = {
  env: "prod",
  server: { port: 8080 },
};  // no "database" key`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Use optional chaining to read <code>config.database?.host</code> safely, falling back to <code>"localhost"</code> with <code>??</code>.</li>
            <li>Write a <code>switch</code> on <code>config.env</code>: <code>"prod"</code> → <code>"production settings"</code>, <code>"dev"</code> → <code>"development settings"</code>, default → <code>"unknown environment"</code>.</li>
            <li>Deep-clone <code>config</code> with <code>structuredClone</code>, change the clone's <code>server.port</code>, and confirm the original's <code>server.port</code> didn't change.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`dbHost                     // "localhost"
envLabel                   // "production settings"
config.server.port         // 8080 — untouched
clonedConfig.server.port   // whatever you changed it to`} language="typescript" />
        </div>
      </div>



    </div>
  );
}
