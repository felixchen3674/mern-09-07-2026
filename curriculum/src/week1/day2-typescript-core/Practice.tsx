import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Practice() {
  return (
    <div className="page practice-page">
      <title>Day 2 Practice</title>
      <DayNav day="day2-typescript-core" current="practice" />

      <h1>Day 2 — Practice</h1>
      <p className="intro">
        Everything on this page is required, including the two challenges at the end — bring it to the
        6pm lab.
      </p>
      <p className="callout">
        Work through these during the gap between lecture and lab. Use <code>notes.html</code> as your
        reference if you get stuck on syntax.
      </p>

      <div className="task">
        <span className="task-num">1</span>
        <div className="task-body">
          <p>Be able to declare explicitly-typed variables, and recognize when TS infers a type on its own.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`name, age, isActive, scores // declare these with explicit types (string, number, boolean, number[])
someValue // declare with no annotation — hover to confirm what TS inferred`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>Be able to type a function's parameters and return value.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`function add(a, b) {
  return a + b;
}
function formatName(first, last) {
  return first + " " + last;
}`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`add(a, b) // add param types and a return type — both are numbers
formatName(first, last) // add param types and a return type — both are strings`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>Be able to define an interface with an optional property.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`interface UserProfile { ... } // define it: id (number), name (string), optional email (string)
student1 // create an object satisfying it, without email`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>Be able to define an interface with an array property.</p>
          <span className="tag-starter">Starter — pick one, or invent your own</span>
          <CodeBlock code={`interface Playlist { name: string; songs: string[]; }
interface Classroom { teacher: string; studentIds: number[]; }`} language="typescript" />
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`interface Playlist { ... } // 1. define it — pick one above, or write your own
playlist.songs // 2. create an object satisfying it, read the array back`} language="typescript" />
        </div>
      </div>

      <div className="task">
        <span className="task-num">5</span>
        <div className="task-body">
          <p>Be able to define a union type and use it in a function.</p>
          <span className="tag-examples">Examples</span>
          <CodeBlock code={`type OrderStatus = ... // 1. define it: a status is "pending", "shipped", or "delivered"
describeStatus(status) // 2. write a function that returns a different message per case`} language="typescript" />
        </div>
      </div>

      <p className="section-label">Put it all together</p>
      <p className="section-note">
        Two scenarios, each combining several of today's tools into one realistic problem — this is
        the real test of whether it clicked.
      </p>

      <div className="task challenge">
        <span className="task-num">6</span>
        <div className="task-body">
          <p>Product catalog — total up the store.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const sampleProduct = {
  id: 1,
  name: "Wireless Mouse",
  price: 25,
  tags: ["electronics", "sale"],
  discount: 5,
};`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Based on <code>sampleProduct</code>'s shape, define an <code>interface Product</code> yourself — <code>discount</code> should be optional (not every product has one).</li>
            <li>Create an array of 2–3 <code>Product</code> objects, typed as <code>Product[]</code> — give at least one a <code>discount</code>, leave it off another.</li>
            <li>Write <code>getTotalPrice(products: Product[]): number</code> — sum <code>price</code>, subtracting <code>discount</code> when a product has one.</li>
            <li>Call it and log the result.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`getTotalPrice(products) // the store's total, discounts applied`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">7</span>
        <div className="task-body">
          <p>User directory — count by role.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Define a union <code>type Role</code> that can only be <code>"admin"</code>, <code>"editor"</code>, or <code>"viewer"</code>.</li>
            <li>Define an <code>interface UserProfile</code> with: <code>username</code> (string), <code>role</code> (type <code>Role</code>), <code>permissions</code> (an array of strings), and an optional <code>bio</code> (string).</li>
            <li>Create an array of 3+ <code>UserProfile</code> objects, typed as <code>UserProfile[]</code>.</li>
            <li>Write <code>countByRole(users: UserProfile[], role: Role): number</code> — returns how many users have that role.</li>
            <li>Call it for one role and log the result.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`countByRole(users, "admin") // however many admins are in your array`} language="typescript" />
        </div>
      </div>



    </div>
  );
}
