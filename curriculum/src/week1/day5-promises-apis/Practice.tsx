import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Practice() {
  return (
    <div className="page practice-page">
      <title>Day 5 Practice</title>
      <DayNav day="day5-promises-apis" current="practice" />

      <h1>Day 5 — Practice</h1>
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
          <p>Be able to construct a <code>Promise</code> from scratch.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`new Promise((resolve, reject) => ...)   // flip a coin with Math.random() inside — resolve on heads, reject on tails`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>Be able to consume a promise with <code>async</code>/<code>await</code> and <code>try</code>/<code>catch</code>/<code>finally</code>.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`await coinFlipPromise()   // wrap it in try/catch/finally, logging the result either way`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>Be able to rewrite a <code>.then</code>/<code>.catch</code> chain as <code>async</code>/<code>await</code>.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`function getData(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
}`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`getData(url)   // rewrite this function using async/await + try/catch instead of .then/.catch`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>Be able to use <code>fetch</code> for a GET and a POST request.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`fetch(url)                                             // GET — no second argument needed
fetch(url, { method: "POST", body: JSON.stringify(...) }) // send a POST — pass method + body as the second argument`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">5</span>
        <div className="task-body">
          <p>Be able to tell <code>fetch</code>'s promise apart from an ordinary promise.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`const plain = new Promise(resolve => resolve({ hi: "there" }));
plain.then(v => v)                    // the value is already there — no .json() needed
fetch(url).then(res => res.json())    // a Response object — .json() is a required second step`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">6</span>
        <div className="task-body">
          <p>Be able to compare <code>fetch</code> and <code>axios</code> for the same request.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`} language="xml" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`const res = await fetch(url); const data = await res.json();   // two awaits
const response = await axios.get(url); const data2 = response.data;   // one await, already parsed`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">7</span>
        <div className="task-body">
          <p>Be able to use <code>setTimeout</code> and <code>setInterval</code>.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`setTimeout(() => ..., 1000)    // schedule something to run once after a delay
setInterval(() => ..., 1000)   // schedule something to run repeatedly — clear it once you're done`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">8</span>
        <div className="task-body">
          <p>Be able to predict execution order around the event loop.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`// predict the logged order before you run it — why isn't it 1, 2, 3?`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">9</span>
        <div className="task-body">
          <p>Be able to send GET/POST/PUT-or-PATCH/DELETE requests and log each status code.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`fetch(url)                                 // GET — log res.status
fetch(url, { method: "POST", ... })        // send it, then log res.status (expect 201)
fetch(url, { method: "DELETE" })           // send it, then log res.status`} language="typescript" />
        </div>
      </div>

      <p className="section-label">Put it all together</p>
      <p className="section-note">
        Two scenarios, each combining several of today's tools into one realistic problem — this is
        the real test of whether it clicked.
      </p>

      <div className="task challenge">
        <span className="task-num">10</span>
        <div className="task-body">
          <p>Post publisher — create, fetch, and update one resource.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const baseUrl = "https://jsonplaceholder.typicode.com/posts";`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write an <code>async</code> function that <code>POST</code>s a new post (a JSON-stringified body), wrapped in <code>try</code>/<code>catch</code>/<code>finally</code>.</li>
            <li>Log the response's status code, then <code>await res.json()</code> to read the created post back.</li>
            <li><code>PATCH</code> that same post with one changed field, and log its new status code.</li>
            <li>If any step's response isn't <code>res.ok</code>, <code>throw</code> so your <code>catch</code> actually runs.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`createRes.status   // 201
updateRes.status   // 200`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">11</span>
        <div className="task-body">
          <p>Delayed fetch — combine a Promise-wrapped timer with a real request.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>delay(ms)</code> — a function returning a <code>new Promise</code> that <code>resolve</code>s inside a <code>setTimeout</code> after <code>ms</code> milliseconds.</li>
            <li>Write an <code>async</code> function that <code>await</code>s <code>delay(1000)</code>, then <code>fetch</code>es a URL of your choice.</li>
            <li>Wrap the fetch in <code>try</code>/<code>catch</code>, and log how long the whole thing took using <code>Date.now()</code> before and after.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`// the fetch's result logs roughly 1000ms+ after the function was called`} language="typescript" />
        </div>
      </div>

      <p className="section-label">Advanced</p>
      <p className="section-note">
        Macrotask/microtask ordering and <code>Promise.all</code>/<code>allSettled</code>/<code>race</code>
        — covered in lecture but not drilled above. The second problem in a pair is meant to be harder
        than the first.
      </p>

      <div className="task advanced">
        <span className="task-num">12</span>
        <div className="task-body">
          <p>Harder: be able to predict macrotask vs. microtask ordering.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`// predict the order — why does the Promise callback log before the timeout?`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">13</span>
        <div className="task-body">
          <p>Be able to use <code>Promise.all</code> and <code>Promise.allSettled</code> across several requests.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`Promise.all([fetch(url1), fetch(url2), fetch(url3)])            // run all 3 — one bad URL should reject the whole thing
Promise.allSettled([fetch(url1), fetch(url2), fetch(url3)])      // same 3 requests — nothing short-circuits this time`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">14</span>
        <div className="task-body">
          <p>Harder: be able to use <code>Promise.race</code> to implement a timeout.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`Promise.race([fetch(url), timeoutPromise])   // race them — treat the request as failed if it hasn't settled in 3s`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">15</span>
        <div className="task-body">
          <p>Put it all together — advanced version.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/does-not-exist",
];`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Use <code>Promise.allSettled</code> on all three URLs, and log which ones fulfilled vs. rejected.</li>
            <li>Separately, race the first URL against a 2-second timeout promise using <code>Promise.race</code>.</li>
            <li>Repeat the first URL's request with <code>axios</code> instead of <code>fetch</code>, and compare how you read the data back.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`results.map(r => r.status)   // ["fulfilled", "fulfilled", "rejected"]`} language="typescript" />
        </div>
      </div>



    </div>
  );
}
