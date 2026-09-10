import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Lab() {
  return (
    <div className="page lab-page">
      <title>Day 3 Lab</title>
      <DayNav day="day3-javascript-core" current="lab" />

      <h1>Day 3 — Lab</h1>

      <div className="task challenge">
        <span className="task-num">1</span>
        <div className="task-body">
          <p>Gym check-ins — rank every member below.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock
            code={`const members = [
  { name: "Ada", visits: 18 },
  { name: "Grace", visits: 9 },
  { name: "Linus", visits: 3 },
];`}
            language="typescript"
          />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>
              Loop over <code>members</code>, destructuring <code>name</code>{" "}
              and <code>visits</code> from each one.
            </li>
            <li>
              Ternary: <code>visits &gt;= 10</code> → <code>"Gold"</code>, else{" "}
              <code>"Standard"</code>.
            </li>
            <li>
              Log one template-literal line per member, e.g.{" "}
              <code>"Ada: 18 visits (Gold)"</code>.
            </li>
            <li>
              Shallow-copy <code>members</code>, push one more member onto{" "}
              <em>only</em> the copy, and confirm <code>members.length</code>{" "}
              didn't change.
            </li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock
            code={`"Ada: 18 visits (Gold)"
"Grace: 9 visits (Standard)"
"Linus: 3 visits (Standard)"
members.length     // 3
membersCopy.length // 4`}
            language="typescript"
          />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>Coffee order — total up the tab.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock
            code={`const order = [
  { drink: "Latte", price: 4.5, qty: 2 },
  { drink: "Espresso", price: 2.5, qty: 1 },
  { drink: "Cold Brew", price: 5, qty: 3 },
];`}
            language="typescript"
          />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>
              Loop over <code>order</code>, destructuring <code>drink</code>,{" "}
              <code>price</code>, <code>qty</code> from each entry.
            </li>
            <li>
              Log one line per drink, e.g. <code>"Latte x2 = $9"</code>.
            </li>
            <li>
              Accumulate a running <code>total</code> across every entry.
            </li>
            <li>
              Ternary: <code>total &gt; 20</code> →{" "}
              <code>"Loyalty point earned"</code>, else{" "}
              <code>"No point yet"</code>.
            </li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock
            code={`"Latte x2 = $9"
"Espresso x1 = $2.5"
"Cold Brew x3 = $15"
total // 26.5
"Loyalty point earned"`}
            language="typescript"
          />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>Sensor sweep — stop early, skip the dead readings.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock
            code={`const readings = [12, 40, 0, 55, 91, 7];`}
            language="typescript"
          />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>
              Loop with a <code>for</code> loop. <code>continue</code> past any
              reading of <code>0</code>.
            </li>
            <li>
              <code>break</code> out entirely the moment you hit a reading above{" "}
              <code>90</code>.
            </li>
            <li>Collect the readings you kept into an array and log it.</li>
            <li>
              Predict, then check: <code>readings[2] == false</code> vs{" "}
              <code>readings[2] === false</code>. Write a comment explaining why
              they differ.
            </li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock
            code={`kept // [12, 40, 55] — 0 skipped, everything from 91 on dropped`}
            language="typescript"
          />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>User profile — missing keys and real copies.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock
            code={`const profile = {
  username: "ada",
  plan: "pro",
  settings: { theme: "dark", fontSize: 14 },
}; // note: there is no "contact" key`}
            language="typescript"
          />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>
              Use optional chaining to read <code>profile.contact?.email</code>{" "}
              safely, falling back to <code>"no email on file"</code> with{" "}
              <code>??</code>.
            </li>
            <li>
              Write a <code>switch</code> on <code>profile.plan</code>:{" "}
              <code>"pro"</code> → <code>"Pro plan"</code>, <code>"free"</code>{" "}
              → <code>"Free plan"</code>, default → <code>"Unknown plan"</code>.
            </li>
            <li>
              Deep-clone <code>profile</code> with <code>structuredClone</code>,
              change the clone's <code>settings.theme</code>, and confirm the
              original's theme did <em>not</em> change.
            </li>
            <li>
              Now shallow-copy with{" "}
              <code>
                {"{"} ...profile {"}"}
              </code>
              , change <em>that</em> copy's <code>settings.theme</code>, and
              show the original <em>did</em> change. Explain the difference in
              one comment.
            </li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock
            code={`email                     // "no email on file"
planLabel                 // "Pro plan"
profile.settings.theme    // "dark" — after the structuredClone edit
profile.settings.theme    // changed — after the spread-copy edit`}
            language="typescript"
          />
        </div>
      </div>
      <h2>Part 2 — Problem solving</h2>

      <div className="task challenge">
        <span className="task-num">5</span>
        <div className="task-body">
          <p>Longest winning streak.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock
            code={`const results = ["W", "W", "L", "W", "W", "W", "L", "W"];`}
            language="typescript"
          />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>
              Write <code>longestWinStreak(results)</code> — takes an array of{" "}
              <code>"W"</code>/<code>"L"</code> strings, returns how many wins
              came in a row at the longest point.
            </li>
            <li>
              One pass through the array. You need two counters: the streak you
              are in right now, and the best streak you have seen so far.
            </li>
            <li>
              A loss resets one of those counters and leaves the other alone —
              work out which.
            </li>
            <li>
              An array with no wins, and an empty array, both return{" "}
              <code>0</code>.
            </li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock
            code={`longestWinStreak(results)            // 3
longestWinStreak(["L", "L", "L"])    // 0
longestWinStreak(["W"])              // 1
longestWinStreak([])                 // 0`}
            language="typescript"
          />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">6</span>
        <div className="task-body">
          <p>Two prices that fit the budget.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock
            code={`const prices = [12, 40, 7, 25, 33, 18];`}
            language="typescript"
          />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>
              Write <code>findPair(prices, budget)</code> — returns the first
              two prices that add up to exactly <code>budget</code>, as an
              array, or <code>null</code> when no two do.
            </li>
            <li>
              A loop inside a loop. Never pair a price with itself, and never
              check the same two prices twice — the inner loop's starting index
              is what controls that.
            </li>
            <li>
              Stop as soon as you find the pair. A plain <code>break</code> only
              leaves the inner loop; getting out of both takes something more.
            </li>
            <li>
              Write <code>countAffordablePairs(prices, budget)</code> — how many
              different pairs come to <code>budget</code> or less. Same pairing
              rules, but this one has to see every pair.
            </li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock
            code={`findPair(prices, 45)             // [12, 33]
findPair(prices, 100)            // null
countAffordablePairs(prices, 45) // 8
countAffordablePairs(prices, 19) // 1`}
            language="typescript"
          />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">7</span>
        <div className="task-body">
          <p>Which word shows up most.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock
            code={`const commits = "Fix Deploy fix Test deploy FIX build";`}
            language="typescript"
          />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>
              Write <code>countWords(text)</code> — splits the text on spaces
              and returns an object whose keys are the words and whose values
              are how many times each one appeared. Case doesn't count:{" "}
              <code>"Fix"</code> and <code>"FIX"</code> are the same word.
            </li>
            <li>
              Use bracket notation to build it up. The first time you meet a
              word there is no key for it yet, so reading that key gives{" "}
              <code>undefined</code> — decide what to do about that before you
              add <code>1</code> to it.
            </li>
            <li>
              Write <code>mostCommon(text)</code> — returns the single word with
              the highest count. Track the leader as you go rather than looking
              for it at the end.
            </li>
            <li>
              Two words tied for the lead: decide what yours returns, and say so
              in a comment.
            </li>
            <li>
              Asking the tally for a word that never appeared should read as{" "}
              <code>0</code>, not <code>undefined</code>.
            </li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock
            code={`countWords(commits) // { fix: 3, deploy: 2, test: 1, build: 1 }
mostCommon(commits) // "fix"`}
            language="typescript"
          />
        </div>
      </div>
    </div>
  );
}
