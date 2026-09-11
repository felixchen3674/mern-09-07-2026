import DayNav from "../../components/DayNav";

export default function Concepts() {
  return (
    <div className="page concepts-page">
      <title>Day 5 Concepts Reference</title>
      <DayNav day="day5-promises-apis" current="concepts" />

      <h1>Day 5 — Concepts Reference</h1>
      <p className="intro">Try to answer each one yourself, then click to reveal it.</p>

      <section id="tier-1">
        <h2>1. Basic concepts</h2>
        <p className="tier-note">
          Foundational stuff — straight from the lecture and/or comes up constantly in interviews. If
          you're shaky on any of these, that's the priority to fix.
        </p>

        <details>
          <summary>What is a Promise? Why do we need it?</summary>
          <div className="answer">
            <p>
              An object representing a value that isn't available yet but will eventually
              <strong>resolve</strong> (succeed) or <strong>reject</strong> (fail). It's a structured
              way to handle async results instead of the plain callback style that came before it.
            </p>
          </div>
        </details>

        <details>
          <summary>What are <code>.then</code>, <code>.catch</code>, and <code>.finally</code> used for?</summary>
          <div className="answer">
            <p>
              <code>.then</code> runs on success and receives the resolved value. <code>.catch</code>
              runs on failure and receives the rejection reason. <code>.finally</code> always runs
              either way, with no argument — used for cleanup that has to happen regardless of outcome.
              You should be able to read this style even though <code>async</code>/<code>await</code> is
              the pattern you'll actually write.
            </p>
          </div>
        </details>

        <details>
          <summary>Why do we prefer <code>async</code>/<code>await</code> over <code>.then()</code>?</summary>
          <div className="answer">
            <p>
              It reads top-to-bottom like synchronous code instead of a chain of callbacks, and error
              handling collapses into one familiar <code>try</code>/<code>catch</code> block instead of
              a <code>.catch</code> tacked onto the end of a chain. Under the hood it's the same Promise
              mechanism — this is purely about readability.
            </p>
          </div>
        </details>

        <details>
          <summary>What's the difference between <code>fetch</code>'s promise and an ordinary promise, and what does <code>res.json()</code> do?</summary>
          <div className="answer">
            <p>
              A promise you construct yourself resolves with whatever value you pass to
              <code>resolve(...)</code> — that value already <em>is</em> the data.
              <code>fetch</code> is different: it resolves with a <code>Response</code>
              <em>object</em>, not the data itself, so <code>res.json()</code> is a required second,
              separately-awaited step that parses the body as JSON. Calling <code>.json()</code> on a
              plain promise (or forgetting it on a <code>fetch</code>) is a common beginner mistake in
              both directions.
            </p>
          </div>
        </details>

        <details>
          <summary>When do you use each of: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>?</summary>
          <div className="answer">
            <p>
              <code>GET</code> reads data. <code>POST</code> creates a new resource. <code>PUT</code>
              replaces a resource entirely (send the full object). <code>PATCH</code> updates part of a
              resource (send only the changed fields). <code>DELETE</code> removes a resource.
            </p>
          </div>
        </details>

        <details>
          <summary>What does <code>fetch</code> default to, and how do you send a <code>POST</code>?</summary>
          <div className="answer">
            <p>
              <code>fetch(url)</code> with no second argument sends a <code>GET</code>. To send anything
              else — a <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, or <code>DELETE</code> —
              pass a second argument: an options object with at least a <code>method</code>, and usually
              a <code>headers</code> + <code>body</code> for requests that carry data.
            </p>
          </div>
        </details>

        <details>
          <summary>What's the difference between <code>fetch</code> and <code>axios</code>?</summary>
          <div className="answer">
            <p>
              <code>fetch</code> is built into the browser and only rejects on a network failure — a
              4xx/5xx still resolves, and you must manually call <code>.json()</code> to parse the body.
              <code>axios</code> is a third-party library that parses JSON automatically
              (<code>response.data</code>) and rejects on a non-2xx status by default.
            </p>
          </div>
        </details>

        <details>
          <summary>What is the call stack?</summary>
          <div className="answer">
            <p>
              The structure JS uses to track which function is currently running. It's a single stack
              on a single thread — one function executes at a time, and finishing one pops it off so
              the caller below it can resume.
            </p>
          </div>
        </details>

        <details>
          <summary>What is the callback queue?</summary>
          <div className="answer">
            <p>
              A holding area for callbacks (from a timer, a finished network request, a UI event) that
              are ready to run but have to wait until the call stack is empty before the event loop
              moves them onto it.
            </p>
          </div>
        </details>

        <details>
          <summary>What is the event loop, and why do we need it?</summary>
          <div className="answer">
            <p>
              The process that repeatedly checks "is the call stack empty?" and, if so, pulls the next
              item off a queue and pushes it onto the stack. JavaScript has exactly <strong>one</strong>
              thread, so a slow operation (a network request, a timer) can't be allowed to block it —
              async work gets handed off elsewhere (the browser's Web APIs) and its callback only
              rejoins the stack, via this loop, once it's ready and the stack is clear.
            </p>
          </div>
        </details>

        <details>
          <summary>What is "callback hell," and what problem does a Promise solve?</summary>
          <div className="answer">
            <p>
              Before Promises, chaining dependent async steps meant nesting one callback inside the
              next — a rightward-drifting pyramid that gets hard to read and hard to add error handling
              to. Promises (and later <code>async</code>/<code>await</code>) exist specifically to flatten
              that pattern back into something readable — you don't need to know the nested-callback
              syntax itself, just why it was a problem.
            </p>
          </div>
        </details>

        <details>
          <summary>If an API request fails, what are the first 3 things you check in the Network tab?</summary>
          <div className="answer">
            <p>
              The <strong>status code</strong> (what kind of failure — 4xx client-side vs. 5xx
              server-side), the <strong>request payload</strong> (was the right data actually sent —
              right URL, method, headers, body), and the <strong>response body</strong> (most APIs
              return an error message explaining exactly what went wrong).
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
          <summary>How do we handle multiple promises at once, and what's the difference between <code>Promise.all</code> and <code>Promise.allSettled</code>?</summary>
          <div className="answer">
            <p>
              Fire them all first, then wait on the group together instead of awaiting each one in
              sequence (which is slower, since it gives up concurrency). <code>Promise.all</code> needs
              every promise to succeed and <strong>rejects immediately</strong> if any one of them
              rejects — all-or-nothing. <code>Promise.allSettled</code> always resolves once every
              promise has <em>settled</em>, giving you a status ("fulfilled"/"rejected") per item, so
              one failure doesn't hide the results of the others.
            </p>
          </div>
        </details>

        <details>
          <summary>Why would we need <code>Promise.race</code>?</summary>
          <div className="answer">
            <p>
              Whenever you only care about whichever of several promises settles <em>first</em> — the
              classic case is racing a real request against a timer, so a request that hasn't come back
              in, say, 3 seconds gets treated as a timeout/failure instead of hanging indefinitely.
            </p>
          </div>
        </details>

        <details>
          <summary>What's the difference between a 401 and a 403 status code?</summary>
          <div className="answer">
            <p>
              <code>401 Unauthorized</code> means you're not authenticated at all — no valid login/token.
              <code>403 Forbidden</code> means you <em>are</em> authenticated, but you don't have
              permission to access that specific resource.
            </p>
          </div>
        </details>

        <details>
          <summary>What happens if you forget to call <code>clearInterval</code>/<code>clearTimeout</code>?</summary>
          <div className="answer">
            <p>
              An uncleared <code>setInterval</code> keeps firing forever, and keeps its closure (and
              anything it references) alive in memory even after the code that started it is otherwise
              done with — a classic memory leak. Always store the id it returns and clear it once it's
              no longer needed.
            </p>
          </div>
        </details>

        <details>
          <summary>What is a macrotask and a microtask?</summary>
          <div className="answer">
            <p>
              Macrotasks are things like <code>setTimeout</code>, <code>setInterval</code>, and UI
              events — one runs per event-loop turn. Microtasks are Promise callbacks
              (<code>.then</code>/<code>.catch</code>/<code>.finally</code>) and <code>async</code>
              function continuations — the <strong>entire</strong> microtask queue always drains
              completely before the next macrotask is allowed to run. This is 八股文 — pure interview
              recall, know it cold but don't stress over it beyond that.
            </p>
          </div>
        </details>

        <details>
          <summary>What's the difference between <code>JSON.parse</code> and <code>JSON.stringify</code>?</summary>
          <div className="answer">
            <p>
              <code>JSON.stringify(obj)</code> converts a JS object into a JSON string.
              <code>JSON.parse(str)</code> does the reverse — converts a JSON string back into a JS
              object. A <code>fetch</code> body must be a string, which is why request bodies get
              <code>JSON.stringify</code>'d before sending.
            </p>
          </div>
        </details>

        <details>
          <summary>Why can't you call <code>Promise.then</code> or <code>Promise.catch</code> directly, without an actual promise instance?</summary>
          <div className="answer">
            <p>
              <code>.then</code>/<code>.catch</code>/<code>.finally</code> are <strong>instance</strong>
              methods defined on <code>Promise.prototype</code> — they need a specific promise's
              internal state (its resolved value or rejection reason) to run against.
              <code>Promise</code> the class itself has no such state, so calling
              <code>Promise.then</code> directly is calling a method that doesn't exist on it; you first
              need an actual instance (<code>new Promise(...)</code>, a call to an <code>async</code>
              function, or a static helper like <code>Promise.resolve()</code>) to call <code>.then</code>
              on.
            </p>
          </div>
        </details>
      </section>

    </div>
  );
}
