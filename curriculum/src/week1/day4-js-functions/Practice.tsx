import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Practice() {
  return (
    <div className="page practice-page">
      <title>Day 4 Practice</title>
      <DayNav day="day4-js-functions" current="practice" />

      <h1>Day 4 — Practice</h1>
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
          <p>Be able to write a typed function declaration.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`add(a, b)               // declare it with typed params and a typed return (numbers)
isEven(n)               // declare it with a typed param and a boolean return
toCelsius(fahrenheit)   // declare it with a typed param and return (numbers)`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>Be able to write a typed arrow function with an explicit <code>return</code>.</p>
          <span className="tag-syntax">Syntax shape</span>
          <CodeBlock code={`const fn = (a: number): number => {
  return ...; // braces + return keyword — not the one-line shorthand
};`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`multiply(a, b)          // write it as a typed arrow function with an explicit return
isPositive(n)           // same — typed param, boolean return
toFahrenheit(celsius)   // same — typed param and return`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>Be able to tell a function reference apart from calling it.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`sayHi                        // [Function: sayHi] — never ran
sayHi()                      // logs "Hi!", returns "Done"
["A","B"].forEach(sayHi)     // "Hi!" logged twice — passed as a reference
["A","B"].forEach(sayHi())   // "Hi!" logged ONCE, immediately — the classic mistake`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>Be able to use a default parameter.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`greet(name = "friend")                  // write it so the default only applies when name is omitted
power(base, exponent = 2)               // write it so exponent defaults to 2 when omitted
formatPrice(amount, currency = "USD")   // write it so currency defaults to "USD" when omitted`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">5</span>
        <div className="task-body">
          <p>Be able to write a function that takes and calls a callback.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`repeat(n, callback)                           // call callback n times, passing the current count each time
executeTransaction(amt, onSuccess, onError)   // call onSuccess or onError depending on whether amt is positive
myEach(array, callback)                       // call callback once per item, passing (item, index)`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">6</span>
        <div className="task-body">
          <p>Be able to use forEach with the element and its index.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const scores = [72, 88, 95, 60];`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`scores.forEach((s, i) => ...)   // log "index: value" for every score
scores.forEach((s, i) => ...)   // keep a running total as you go`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">7</span>
        <div className="task-body">
          <p>Be able to use map to transform an array.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`scores.map(...)        // add 5 bonus points to every score
celsiusList.map(...)   // convert every value to Fahrenheit
names.map(...)         // build a greeting string per name`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">8</span>
        <div className="task-body">
          <p>Be able to use filter to keep only matching items.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`scores.filter(...)   // keep only the passing scores (>= 70)
words.filter(...)    // keep only words longer than 4 letters
nums.filter(...)     // keep only the even numbers`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">9</span>
        <div className="task-body">
          <p>Be able to use find and includes.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`scores.find(...)      // find the first failing score (< 70)
users.find(...)       // find the user with a matching id
scores.includes(95)   // check whether 95 is in the array`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">10</span>
        <div className="task-body">
          <p>Be able to use push/pop/sort/join.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`todos.push(...); todos.pop();   // add a new item, then remove the last one
[...scores].sort(...).join(", ")   // sort ascending, then join into a string
[...users].sort(...)               // sort users by score, highest first`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">11</span>
        <div className="task-body">
          <p>Be able to clean up and inspect text (trim/toLowerCase/split/includes).</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`normalizeName("  john DOE  ")   // trim it, then uppercase it
countWords(sentence)            // use split to count the words
containsWord(sentence, word)    // case-insensitive check`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">12</span>
        <div className="task-body">
          <p>Be able to extract pieces of a string (charAt/substring/toUpperCase).</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`firstAndLast("hello")        // combine the first and last character
extractDomain(email)         // pull out everything after "@"
shoutWord(sentence, 4, 9)    // uppercase one slice of the sentence`} language="typescript" />
        </div>
      </div>

      <p className="section-label">Put it all together</p>
      <p className="section-note">
        Two scenarios, each combining several of today's tools into one realistic problem — this is
        the real test of whether it clicked.
      </p>

      <div className="task challenge">
        <span className="task-num">13</span>
        <div className="task-body">
          <p>Grade processor.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const grades: number[] = [55, 91, 78, 60, 88, 40];`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>passingGrades(grades: number[], passMark: number = 60): number[]</code> — use <code>filter</code> to return only the grades that meet the pass mark. Don't hardcode 60 inside the function; it should come from the default parameter.</li>
            <li>Use <code>map</code> to build a parallel array labeling every grade <code>"pass"</code> or <code>"fail"</code>.</li>
            <li>Use <code>find</code> to get the first failing grade, and <code>includes</code> to check whether a <code>100</code> exists in the original array.</li>
            <li>Sort a copy of <code>grades</code> ascending and <code>join</code> it into a single printable string.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`passingGrades(grades)   // [91, 78, 60, 88] — order preserved from the original`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">14</span>
        <div className="task-body">
          <p>Word inspector.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const sentence = "  The Quick Brown Fox Jumps Over The Lazy Dog  ";`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>toWords(text: string): string[]</code> — trim it, lowercase it, and split it into an array of words.</li>
            <li>Use <code>forEach</code> to log every word next to its index.</li>
            <li>Use <code>find</code> to get the first word longer than 4 letters.</li>
            <li>Write your own function that takes the words array and a callback, and runs that callback once per word — reuse it to log each word's length.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`toWords(sentence)   // ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]`} language="typescript" />
        </div>
      </div>

      <p className="section-label">Advanced</p>
      <p className="section-note">
        Arrow implicit return, closures, and <code>reduce</code> — not covered on any other day, so take
        the time to actually get these solid now. The second problem in a pair is meant to be harder
        than the first.
      </p>

      <div className="task advanced">
        <span className="task-num">15</span>
        <div className="task-body">
          <p>Be able to write an arrow function with an implicit return.</p>
          <span className="tag-syntax">Syntax shape</span>
          <CodeBlock code={`const fn = (a: number): number => a * a;  // no braces, no return keyword`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`square(n)       // write it as a one-line arrow with an implicit return (no braces, no return keyword)
isEven(n)       // same style — implicit return, boolean result
makePoint(x, y) // implicitly return an object — wrap the { } in ( )`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">16</span>
        <div className="task-body">
          <p>Be able to build private state with a closure.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`const counterA = makeCounter();
const counterB = makeCounter();
counterA.increment();
counterA.increment();
counterB.increment();
counterA.getValue()   // 2
counterB.getValue()   // 1 — counterA and counterB never share state`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">17</span>
        <div className="task-body">
          <p>Harder: be able to gate a function's calls with a closure.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`function sayHello() {
  console.log("Hello!");
}`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`const limitedHello = createLimitedCallFunction(sayHello, 2);
limitedHello();   // "Hello!"
limitedHello();   // "Hello!"
limitedHello();   // nothing — limit already reached`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">18</span>
        <div className="task-body">
          <p>Be able to use reduce for more than a sum.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const nums = [4, 8, 15, 16, 23, 42];
const words = ["a", "b", "a", "c", "b", "a"];`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`nums.reduce((acc, n) => ..., 0)     // total = 108
words.reduce((acc, w) => ..., {})   // freq = { a: 3, b: 2, c: 1 }`} language="typescript" />
        </div>
      </div>

      <div className="task advanced">
        <span className="task-num">19</span>
        <div className="task-body">
          <p>Harder: be able to use reduce to group into an object.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const users = [
  { name: "Ana", role: "admin" },
  { name: "Sam", role: "editor" },
  { name: "Lee", role: "admin" },
];`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`groupByRole(users)
// {
//   admin: [{ name: "Ana", role: "admin" }, { name: "Lee", role: "admin" }],
//   editor: [{ name: "Sam", role: "editor" }]
// }`} language="typescript" />
        </div>
      </div>



    </div>
  );
}
