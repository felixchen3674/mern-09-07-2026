import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Notes() {
  return (
    <div className="page notes-page">
      <title>Day 5 Notes</title>
      <DayNav day="day5-promises-apis" current="notes" />

      <header className="lecture-header">
        <p className="eyebrow">Week 1 · Day 5 · Notes</p>
        <h1>Promises &amp; APIs</h1>
        <p className="subtitle">Executive summary → full walkthrough</p>
      </header>

      {/* ============================================================ */}
      {/* Section 1 — Executive Summary                                 */}
      {/* ============================================================ */}
      <section id="executive-summary" className="exec-summary">
        <h2>Section 1 — Executive Summary</h2>
        <p>
          The essentials — the bare minimum you need to know for today
        </p>
        <ul>
          <li>Have a general idea of how the event loop works</li>
          <li>Use <code>setTimeout</code> and <code>setInterval</code>.</li>
          <li>Explain what a <code>Promise</code> is</li>
          <li>Know <code>.then</code>/<code>.catch</code> exists, but proficiently use <code>async</code>/<code>await</code> to consume a promise.</li>
          <li>Know that Promises exist to solve "callback hell."</li>
          <li>Know how <code>fetch</code> works — defaults to <code>GET</code>, a <code>POST</code> needs a second argument.</li>
          <li>Know the difference between <code>fetch</code>'s promise and an ordinary promise.</li>
          <li>Write an <code>async</code> function using <code>await</code>, with <code>try</code>/<code>catch</code>/<code>finally</code> for errors.</li>
          <li>Name the 5 HTTP methods and the common status codes (<code>200</code>, <code>201</code>, <code>3xx</code>, <code>400</code>, <code>401</code>, <code>404</code>, <code>5xx</code>).</li>
          <li>Know the difference between <code>fetch</code> and <code>axios</code>.</li>
        </ul>
        <p>
          Want more? <a href="/src/day5-promises-apis/concepts.html">View all concepts?</a>
        </p>
      </section>

      <hr className="section-divider" />

      {/* ============================================================ */}
      {/* Section 2 — Full Walkthrough                                  */}
      {/* ============================================================ */}
      <h2 style={{ marginTop: "2.5rem" }}>Section 2 — Full Walkthrough</h2>

      <section id="event-loop">
        <h2>1. The event loop, very briefly</h2>
        <svg viewBox="0 0 640 300" role="img" aria-label="Diagram of the event loop: the call stack hands async work to the Web APIs, which queue a callback once done, and the event loop moves that callback back onto the call stack once it's empty.">
          <defs>
            <marker id="evloop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#444" />
            </marker>
          </defs>

          {/* Call Stack */}
          <rect x="20" y="40" width="140" height="220" rx="8" fill="#eef3ff" stroke="#7ea6e0" strokeWidth="1.5" />
          <text x="90" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1c1c1c">Call Stack</text>
          <rect x="35" y="195" width="110" height="30" rx="4" fill="#fff" stroke="#7ea6e0" />
          <text x="90" y="214" textAnchor="middle" fontSize="10" fill="#444">main()</text>
          <rect x="35" y="155" width="110" height="30" rx="4" fill="#fff" stroke="#7ea6e0" />
          <text x="90" y="174" textAnchor="middle" fontSize="10" fill="#444">doSomething()</text>
          <text x="90" y="245" textAnchor="middle" fontSize="9" fill="#5b6b82">sync code runs here</text>

          {/* Web APIs */}
          <rect x="460" y="20" width="160" height="70" rx="8" fill="#fff7e0" stroke="#e8b400" strokeWidth="1.5" />
          <text x="540" y="50" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1c1c1c">Web APIs</text>
          <text x="540" y="68" textAnchor="middle" fontSize="9" fill="#5b6b82">timers, fetch, DOM events</text>

          {/* Callback Queue */}
          <rect x="460" y="210" width="160" height="60" rx="8" fill="#f3eefc" stroke="#8e5fd6" strokeWidth="1.5" />
          <text x="540" y="232" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1c1c1c">Callback Queue</text>
          <rect x="478" y="244" width="16" height="16" rx="3" fill="#8e5fd6" />
          <rect x="502" y="244" width="16" height="16" rx="3" fill="#8e5fd6" />
          <rect x="526" y="244" width="16" height="16" rx="3" fill="#8e5fd6" />

          {/* 1. Call Stack -> Web APIs */}
          <path d="M160,70 Q320,10 460,55" fill="none" stroke="#444" strokeWidth="1.5" markerEnd="url(#evloop-arrow)" />
          <text x="300" y="28" textAnchor="middle" fontSize="10" fill="#444">1. hands off async call</text>

          {/* 2. Web APIs -> Callback Queue */}
          <path d="M540,90 L540,210" fill="none" stroke="#444" strokeWidth="1.5" markerEnd="url(#evloop-arrow)" />
          <text x="618" y="155" textAnchor="end" fontSize="10" fill="#444">2. done → queued</text>

          {/* 3. Callback Queue -> Call Stack, via the event loop */}
          <path d="M460,245 Q300,300 160,235" fill="none" stroke="#2255cc" strokeWidth="1.5" markerEnd="url(#evloop-arrow)" />
          <circle cx="300" cy="262" r="13" fill="none" stroke="#2255cc" strokeWidth="1.5" />
          <path d="M300,249 A13,13 0 1 1 288,262" fill="none" stroke="#2255cc" strokeWidth="1.5" markerEnd="url(#evloop-arrow)" />
          <text x="300" y="291" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2255cc">3. Event Loop</text>
          <text x="300" y="223" textAnchor="middle" fontSize="9" fill="#2255cc">pushes onto the stack once it's empty</text>
        </svg>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>The <strong>call stack</strong> is where JS tracks which function is currently running — one thread, one stack, one thing at a time.</li>
            <li>The <strong>callback queue</strong> holds callbacks (from <code>setTimeout</code>, a resolved fetch, a click) that are ready to run but are waiting their turn.</li>
            <li>The <strong>event loop</strong> is the process that constantly checks: "is the call stack empty? If so, take the next thing off a queue and push it onto the stack." That's the whole mechanism that lets a single-threaded language handle async work without blocking.</li>
          </ul>
        </div>
        <p className="callout">
          Two videos are worth watching once outside of class if this doesn't click immediately: "What
          the heck is the event loop anyway?" by Philip Roberts (JSConf EU), and "JavaScript Visualized
          — Event Loop, Web APIs, (Micro)task Queue."
        </p>
      </section>

      {/* ============================================================ */}
      <section id="macro-micro">
        <h2>2. Macrotask vs. microtask (memorize this)</h2>
        <div className="concept">
          <p className="concept-label">Concept — this is 八股文, know it cold</p>
          <ul>
            <li><strong>Macrotasks</strong>: <code>setTimeout</code>, <code>setInterval</code>, UI events, full script execution. One macrotask runs per event-loop turn.</li>
            <li><strong>Microtasks</strong>: Promise callbacks (<code>.then</code>/<code>.catch</code>/<code>.finally</code>), <code>async</code>/<code>await</code> continuations. <strong>The entire microtask queue drains completely before the next macrotask runs</strong> — that's the one fact interviewers actually want to hear.</li>
          </ul>
        </div>
        <CodeBlock code={`console.log("1 — sync");

setTimeout(() => console.log("2 — macrotask"), 0);

Promise.resolve().then(() => console.log("3 — microtask"));

console.log("4 — sync");

// output: 1, 4, 3, 2 — sync code first, then ALL microtasks, then the next macrotask`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="timers">
        <h2>3. Timers: setTimeout, setInterval, and clearing them</h2>
        <CodeBlock code={`const timeoutId = setTimeout(() => console.log("once, after 1s"), 1000);
clearTimeout(timeoutId); // cancels it before it ever fires

const intervalId = setInterval(() => console.log("every 1s"), 1000);
clearInterval(intervalId); // stops it from repeating`} language="typescript" />
        <p className="callout">
          <strong>Memory leak alert:</strong> an <code>setInterval</code> you never
          <code>clearInterval</code> keeps running (and keeping its closure alive) forever, even after
          the component or page state that started it is gone — always store the id and clear it.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="promise-basics">
        <h2>4. Promise fundamentals</h2>
        <p>A <code>Promise</code> wraps a value that isn't ready yet — it will eventually <strong>resolve</strong> (success) or <strong>reject</strong> (failure), and never both:</p>
        <CodeBlock code={`const coinFlip = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("heads!");
  } else {
    reject("tails — try again");
  }
});

coinFlip
  .then(result => console.log("resolved:", result))
  .catch(err => console.log("rejected:", err))
  .finally(() => console.log("runs either way"));`} language="typescript" />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>.then</code> runs only on success (<code>resolve</code>); its callback receives the resolved value.</li>
            <li><code>.catch</code> runs only on failure (<code>reject</code>); its callback receives the rejection reason.</li>
            <li><code>.finally</code> always runs, whether the promise resolved or rejected — no argument, used for cleanup (hiding a spinner, closing a connection).</li>
          </ul>
        </div>
        <p className="callout">
          <strong>Don't confuse a plain promise with <code>fetch</code>'s promise.</strong>
          <code>coinFlip</code> above resolves with <code>"heads!"</code> directly — that string
          <em>is</em> the value. <code>fetch</code> is different: it resolves with a
          <code>Response</code> <em>object</em>, and reading the actual data is a second, separate
          async step — <code>res.json()</code>. Calling <code>.json()</code> on a plain promise like
          <code>coinFlip</code> is a real mistake beginners make, and it throws — there's no
          <code>Response</code> there to parse. More on this in section 11.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="callback-hell">
        <h2>5. The old way: nested callbacks (conceptual only)</h2>
        <p>Before Promises, an async request tool looked like this — a callback you pass in, called whenever the response arrives:</p>
        <CodeBlock code={`function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => callback(JSON.parse(xhr.responseText));
  xhr.send();
}`} language="typescript" />
        <p>Chaining three dependent requests with this style — each step needs data from the previous one — nests one callback inside the next:</p>
        <CodeBlock code={`// step 1: get the user, to read their followers_url
// step 2: get their followers, to read the first follower's name
// step 3: get that follower's repos
request("https://api.github.com/users/octocat", user => {
  request(user.followers_url, followers => {
    const firstFollower = followers[0];
    request(firstFollower.repos_url, repos => {
      console.log("first follower's repos:", repos[0].name);
      // one more dependent step would nest even deeper...
    });
  });
});`} language="typescript" />
        <div className="concept">
          <p className="concept-label">Concept — brief mention only</p>
          <ul>
            <li>This rightward-drifting pyramid is <strong>callback hell</strong>: every new dependent step nests one level deeper, making the code harder to read and to error-handle.</li>
            <li>You are not expected to build this pattern yourself today — just recognize it and know it's the reason Promises were added to the language.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      <section id="promise-with-fetch">
        <h2>6. The same pipeline, refactored to Promises + fetch</h2>
        <p><code>fetch</code> already returns a Promise, so the same three-step chain becomes flat <code>.then</code> calls instead of nested callbacks:</p>
        <CodeBlock code={`fetch("https://api.github.com/users/octocat")
  .then(res => res.json())
  .then(user => {
    console.log("1. got user:", user.login);
    return fetch(user.followers_url);
  })
  .then(res => res.json())
  .then(followers => {
    console.log("2. got followers list");
    return fetch(followers[0].repos_url);
  })
  .then(res => res.json())
  .then(repos => console.log("3. first follower's repos:", repos[0].name))
  .catch(err => console.log("something failed:", err));`} language="typescript" />
        <p className="callout">
          <strong>Returning</strong> a promise inside a <code>.then</code> (like <code>return fetch(...)</code>)
          is what lets the chain keep flattening instead of nesting — the next <code>.then</code> waits
          for that returned promise, at the same indentation level.
        </p>
        <p className="callout">
          This is the last <code>.then</code> chain in these notes on purpose —
          <code>async</code>/<code>await</code>, covered next, is the pattern you should actually reach
          for. It's the same mechanism underneath, just far easier to read and to error-handle.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="async-await">
        <h2>7. async/await syntax (the preferred pattern)</h2>
        <p><code>async</code>/<code>await</code> is syntax sugar over Promises — same underlying mechanism, code that reads top-to-bottom like synchronous code:</p>
        <CodeBlock code={`// .then version
function getUser(username) {
  return fetch(\`https://api.github.com/users/\${username}\`)
    .then(res => res.json())
    .then(user => user.login);
}

// async/await version — same behavior, reads like sync code
async function getUser(username) {
  const res = await fetch(\`https://api.github.com/users/\${username}\`);
  const user = await res.json();
  return user.login;
}`} language="typescript" />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>await</code> can only be used inside a function marked <code>async</code> — it pauses that function (not the whole program) until the awaited promise settles.</li>
            <li>An <code>async</code> function always returns a promise itself, even if you <code>return</code> a plain value inside it.</li>
            <li><code>await</code> doesn't turn JS multi-threaded — it's still one call stack; the function just steps aside so other queued work can run while it waits.</li>
          </ul>
        </div>
        <p>Refactoring the earlier three-step <code>.then</code> chain (section 6) into <code>async</code>/<code>await</code>:</p>
        <CodeBlock code={`async function getFirstFollowerRepos(username) {
  const userRes = await fetch(\`https://api.github.com/users/\${username}\`);
  const user = await userRes.json();
  console.log("1. got user:", user.login);

  const followersRes = await fetch(user.followers_url);
  const followers = await followersRes.json();
  console.log("2. got followers list");

  const reposRes = await fetch(followers[0].repos_url);
  const repos = await reposRes.json();
  console.log("3. first follower's repos:", repos[0].name);
}`} language="typescript" />
        <p className="callout">
          No <code>.catch</code> here yet on purpose — <code>async</code>/<code>await</code> handles
          errors with <code>try</code>/<code>catch</code>/<code>finally</code> instead, covered next.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="try-catch-finally">
        <h2>8. Error handling: try/catch/finally</h2>
        <CodeBlock code={`async function getUser(username) {
  try {
    const res = await fetch(\`https://api.github.com/users/\${username}\`);
    if (!res.ok) {
      throw new Error(\`Request failed: \${res.status}\`);
    }
    const user = await res.json();
    return user;
  } catch (err) {
    console.log("something went wrong:", err.message);
    return null;
  } finally {
    console.log("request attempt finished"); // always runs
  }
}`} language="typescript" />
        <p className="callout">
          <code>fetch</code> only rejects on a <strong>network</strong> failure — a 404 or 500 response
          still resolves successfully. Always check <code>res.ok</code> (or <code>res.status</code>)
          yourself and <code>throw</code> if it's not what you expected.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="promise-statics">
        <h2>9. Built-in Promise methods</h2>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Promise.resolve(v)</code></td>
              <td>Wraps an already-known value in an already-resolved promise.</td>
            </tr>
            <tr>
              <td><code>Promise.all([...])</code></td>
              <td>Waits for every promise to resolve — <strong>rejects immediately</strong> if any one of them rejects.</td>
            </tr>
            <tr>
              <td><code>Promise.allSettled([...])</code></td>
              <td>Waits for every promise to <em>settle</em> (resolve or reject) and always resolves, with a status per item — nothing short-circuits.</td>
            </tr>
            <tr>
              <td><code>Promise.race([...])</code></td>
              <td>Settles as soon as the <strong>first</strong> promise settles — win or lose, whichever finishes first.</td>
            </tr>
          </tbody>
        </table>
        <CodeBlock code={`// Promise.all — needs everything to succeed, fails fast on the first rejection
async function loadBoth() {
  try {
    const [usersRes, postsRes] = await Promise.all([fetch("/api/users"), fetch("/api/posts")]);
    console.log("both succeeded");
  } catch {
    console.log("at least one failed");
  }
}

// Promise.allSettled — always resolves, tells you which ones failed
async function loadBothSettled() {
  const results = await Promise.allSettled([fetch("/api/users"), fetch("/api/bad-url")]);
  results.forEach(r => console.log(r.status)); // "fulfilled" or "rejected"
}

// Promise.race — scenario: treat the request as failed if it hasn't replied in 3s
async function loadWithTimeout() {
  const res = await Promise.race([
    fetch("/api/data"),
    new Promise((_, reject) => setTimeout(() => reject("Timeout!"), 3000)),
  ]);
  return res;
}`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="http-crud">
        <h2>10. HTTP CRUD: methods &amp; status codes</h2>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Use it for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>GET</code></td>
              <td>Read data — no body, safe to repeat, safe to cache.</td>
            </tr>
            <tr>
              <td><code>POST</code></td>
              <td>Create a new resource — sends a body, not safe to repeat blindly (can create duplicates).</td>
            </tr>
            <tr>
              <td><code>PUT</code></td>
              <td>Replace a resource entirely — send the full object, safe to repeat.</td>
            </tr>
            <tr>
              <td><code>PATCH</code></td>
              <td>Update part of a resource — send only the changed fields.</td>
            </tr>
            <tr>
              <td><code>DELETE</code></td>
              <td>Remove a resource.</td>
            </tr>
          </tbody>
        </table>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Status code</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>200</code></td>
              <td>OK — request succeeded.</td>
            </tr>
            <tr>
              <td><code>201</code></td>
              <td>Created — a new resource was made (typical <code>POST</code> success).</td>
            </tr>
            <tr>
              <td><code>3xx</code></td>
              <td>Redirect — the resource moved, follow the new location.</td>
            </tr>
            <tr>
              <td><code>400</code></td>
              <td>Bad Request — the request itself is malformed (bad body, missing field).</td>
            </tr>
            <tr>
              <td><code>401</code></td>
              <td>Unauthorized — you're not authenticated (not logged in / no valid token).</td>
            </tr>
            <tr>
              <td><code>404</code></td>
              <td>Not Found — that resource/URL doesn't exist.</td>
            </tr>
            <tr>
              <td><code>5xx</code></td>
              <td>Server Error — the server itself broke; not something wrong with your request.</td>
            </tr>
          </tbody>
        </table>
        <p>Sending a <code>POST</code> with <code>fetch</code>, using <code>async</code>/<code>await</code>:</p>
        <CodeBlock code={`async function createPost(title, body) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  });
  console.log(res.status); // 201 on success
  return res.json();
}`} language="typescript" />
      </section>

      {/* ============================================================ */}
      <section id="fetch-vs-axios">
        <h2>11. fetch vs. axios, and <code>res.json()</code></h2>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>fetch</code> resolves with a <code>Response</code> object, not the data itself — you must call <code>.json()</code> (which is <em>itself</em> async) to read the body as parsed JSON.</li>
            <li><code>axios</code> parses JSON automatically — the data you want is already on <code>response.data</code>, no second <code>await</code> needed.</li>
            <li>You don't need <code>res.json()</code> at all for a response with no body (e.g. some <code>DELETE</code> responses) — calling it on an empty body throws.</li>
          </ul>
        </div>
        <CodeBlock code={`// fetch — two awaits
const res = await fetch("/api/users");
const data = await res.json();

// axios — one await, data is parsed for you already
const response = await axios.get("/api/users");
const data2 = response.data;`} language="typescript" />
        <p>For now, load <code>axios</code> the simple way — a <code>&lt;script&gt;</code> tag, giving you a global <code>axios</code> object (real ESM imports come later):</p>
        <CodeBlock code={`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`} language="xml" />
      </section>

      {/* ============================================================ */}
      <section id="json-methods">
        <h2>12. JSON.parse &amp; JSON.stringify</h2>
        <CodeBlock code={`const obj = { name: "Ana", age: 25 };

const str = JSON.stringify(obj); // '{"name":"Ana","age":25}' — object to string
const back = JSON.parse(str); // { name: "Ana", age: 25 } — string back to object`} language="typescript" />
        <p className="callout">
          A <code>fetch</code> body must be a <strong>string</strong>, never a raw object — that's why
          every JSON request body gets wrapped in <code>JSON.stringify(...)</code> before it's sent.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="capstone">
        <h2>13. Putting it together: async/await GitHub pipeline</h2>
        <p>The full three-step GitHub pipeline (sections 5–6), as one clean <code>async</code> function with real error handling:</p>
        <div className="capstone">
          <CodeBlock code={`async function getFirstFollowerRepos(username) {
  try {
    const userRes = await fetch(\`https://api.github.com/users/\${username}\`);
    if (!userRes.ok) throw new Error(\`user lookup failed: \${userRes.status}\`);
    const user = await userRes.json();
    console.log("1. got user:", user.login);

    const followersRes = await fetch(user.followers_url);
    const followers = await followersRes.json();
    if (followers.length === 0) throw new Error("no followers to look up");
    console.log("2. got followers list");

    const reposRes = await fetch(followers[0].repos_url);
    const repos = await reposRes.json();
    console.log("3. first follower's repos:", repos[0]?.name ?? "(none)");
    return repos;
  } catch (err) {
    console.log("pipeline failed:", err.message);
    return [];
  } finally {
    console.log("pipeline attempt finished");
  }
}`} language="typescript" />
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
              <td>the whole function</td>
              <td><code>async</code>/<code>await</code> instead of nested callbacks or a <code>.then</code> chain</td>
            </tr>
            <tr>
              <td><code>fetch(...)</code> + <code>.json()</code></td>
              <td>fetch returns a Response; <code>.json()</code> is a second async step to read the body</td>
            </tr>
            <tr>
              <td><code>if (!res.ok) throw ...</code></td>
              <td>fetch doesn't reject on 4xx/5xx — you must check <code>res.ok</code> and throw yourself</td>
            </tr>
            <tr>
              <td><code>try</code>/<code>catch</code>/<code>finally</code></td>
              <td>catches any failure from any step in one place; <code>finally</code> always logs, success or not</td>
            </tr>
          </tbody>
        </table>
      </section>



    </div>
  );
}
