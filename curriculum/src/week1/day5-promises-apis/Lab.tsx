import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Lab() {
  return (
    <div className="page lab-page">
      <title>Day 5 Lab</title>
      <DayNav day="day5-promises-apis" current="lab" />

      <h1>Day 5 — Lab</h1>

      <div className="task">
        <span className="task-num">1</span>
        <div className="task-body">
          <p>Todo publisher — create, read back, and update one resource.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const baseUrl = "https://jsonplaceholder.typicode.com/todos";`} language="typescript" />
          <ul className="task-list">
            <li>Write an <code>async</code> function that <code>POST</code>s a new todo (a JSON-stringified body), wrapped in <code>try</code>/<code>catch</code>/<code>finally</code>.</li>
            <li>Log the response's status code, then <code>await res.json()</code> to read the created todo back.</li>
            <li><code>PUT</code> that same todo with <code>completed</code> flipped to <code>true</code>, and log its new status code.</li>
            <li>If any step's response isn't <code>res.ok</code>, <code>throw</code> so your <code>catch</code> actually runs.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`createRes.status // 201
updateRes.status // 200`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>Comment thread — read a list, add one, remove one.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const baseUrl = "https://jsonplaceholder.typicode.com";`} language="typescript" />
          <ul className="task-list">
            <li>Write an <code>async</code> function that <code>GET</code>s <code>/posts/1/comments</code> and logs how many comments came back.</li>
            <li><code>POST</code> a new comment to <code>/comments</code> with a JSON-stringified body, and log both its status code and the <code>id</code> it comes back with.</li>
            <li><code>DELETE</code> <code>/comments/1</code> and log its status code.</li>
            <li>Wrap each request in <code>try</code>/<code>catch</code>/<code>finally</code>, and <code>throw</code> when a response isn't <code>res.ok</code>.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`comments.length  // 5
createRes.status // 201
deleteRes.status // 200`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>Login workflow — async/await with no network at all.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

const users: User[] = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];`} language="typescript" />
          <ul className="task-list">
            <li>Write <code>encodePassword(password)</code> — a plain function that reverses the string and adds <code>"encoded"</code> to the end. Then write <code>decodePassword(encoded)</code> to turn it back.</li>
            <li>Write <code>delay(ms)</code> — returns a <code>new Promise</code> that resolves inside a <code>setTimeout</code>.</li>
            <li>Write <code>getUserByEmail(email)</code> — an <code>async</code> function that <code>await</code>s <code>delay(300)</code> to fake a slow lookup, then returns the matching user or <code>throw</code>s <code>new Error("User not found")</code>.</li>
            <li>Write <code>verifyPassword(password, encoded)</code> — also <code>async</code>, but with no promise inside it at all. <code>throw new Error("Invalid password")</code> when they don't match.</li>
            <li>Write <code>login(email, password)</code> — <code>async</code>, <code>await</code>ing your two functions in order, then returning <code>{"{"} name, username, email, token {"}"}</code>. Generate the token however you like.</li>
            <li>Catch the failures in <code>login</code> and return the error message instead of letting it throw.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`encodePassword("password1")        // "1drowssapencoded"
decodePassword("1drowssapencoded") // "password1"

await login("leanne.graham@email.com", "password1")
// { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "..." }

await login("nobody@email.com", "password1")      // "User not found"
await login("leanne.graham@email.com", "nope")    // "Invalid password"`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>One bad URL out of three.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/does-not-exist",
];`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write a helper that fetches one URL and <code>throw</code>s when the response isn't <code>res.ok</code>.</li>
            <li>Run all three through <code>Promise.all</code> and watch the whole thing reject because of one bad URL.</li>
            <li>Run the same three through <code>Promise.allSettled</code>, then log which fulfilled and which rejected.</li>
            <li>Write one comment: which would you use for a dashboard where one dead panel shouldn't blank the page?</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`results.map(r => r.status) // ["fulfilled", "fulfilled", "rejected"]`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">5</span>
        <div className="task-body">
          <p>Timeouts, and the order things actually run in.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>timeout(ms)</code> — a promise that <code>reject</code>s with an error after <code>ms</code>.</li>
            <li><code>Promise.race</code> a real fetch against <code>timeout(2000)</code> — it should win. Then race the same fetch against <code>timeout(1)</code> — the timeout should win.</li>
            <li>Predict the output order of the starter's four lines <em>before</em> running it, then run it.</li>
            <li>Write one comment explaining why <code>"3"</code> beats <code>"2"</code> even though the timeout was set to <code>0</code>.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`1, 4, 3, 2
// race with 2000ms → the user object
// race with 1ms    → your timeout error`} language="typescript" />
        </div>
      </div>



    </div>
  );
}
