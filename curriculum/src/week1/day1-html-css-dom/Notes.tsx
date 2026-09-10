import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Notes() {
  return (
    <div className="page notes-page">
      <title>Day 1 Notes</title>
      <DayNav day="day1-html-css-dom" current="notes" />



      <header className="lecture-header">
        <p className="eyebrow">Week 1 · Day 1 · Notes</p>
        <h1>HTML &amp; CSS &amp; the DOM</h1>
        <p className="subtitle">Executive summary → full walkthrough</p>
      </header>

      {/* ============================================================ */}
      {/* Section 1 — Executive Summary                                 */}
      {/* ============================================================ */}
      <section id="executive-summary" className="exec-summary">
        <h2>Section 1 — Executive Summary</h2>
        <p>
          The essentials — the bare minimum you need to know for today, not a
          highlights reel of the lecture. If you can't do one of these yet, that's
          what you go back and redo before calling today done:
        </p>
        <ul>
          <li>
            Write correct opening and closing tags, and know which elements are
            self-closing. Never write <code>&lt;input&gt;&lt;/input&gt;</code>.
          </li>
          <li>
            Pass attributes correctly: <code>id</code>, <code>class</code>,
            <code>data-*</code>.
          </li>
          <li>
            Know and correctly use the most common elements:
            <code>div</code>, <code>span</code>, <code>input</code>,
            <code>button</code>, <code>form</code>,
            <code>ul</code>/<code>li</code>, <code>table</code>, <code>img</code>.
          </li>
          <li>Select elements in CSS using id, class, and element selectors.</li>
          <li>
            Explain and apply the box model: margin, border, padding, content.
          </li>
          <li>Build a layout using flexbox.</li>
          <li>Explain the purpose of a media query for responsive design.</li>
          <li>
            Use <code>querySelector</code> and <code>getElementById</code> to
            select DOM elements from JavaScript.
          </li>
        </ul>
        <p>
          Want more?
          <a href="/src/day1-html-css-dom/concepts.html">View all concepts?</a>
        </p>
      </section>

      <hr className="section-divider" />

      {/* ============================================================ */}
      {/* Section 2 — Full Walkthrough (identical to the lecture canvas) */}
      {/* ============================================================ */}
      <h2 style={{ marginTop: "2.5rem" }}>Section 2 — Full Walkthrough</h2>

      <section id="orientation">
        <h2>1. Orientation</h2>
        <ul>
          <li>
            <strong>HTML</strong> = structure/content, <strong>CSS</strong> =
            presentation, <strong>JavaScript</strong> = behavior (starts Day 2+).
          </li>
          <li>
            Open Chrome DevTools: right-click → <em>Inspect</em>, or
            <code>Cmd+Opt+I</code> (Mac) / <code>Ctrl+Shift+I</code> (Windows) —
            <code>F12</code> works on both.
          </li>
        </ul>
      </section>

      {/* ============================================================ */}
      <section id="html-elements">
        <h2>2. HTML Elements</h2>

        <h3>2.1 Document skeleton</h3>
        <CodeBlock code={`<span class="tok-tag"><!doctype html></span>
<span class="tok-tag"><html></span>
  <span class="tok-tag"><head></span>...<span class="tok-tag"></head></span>   <span class="tok-comment"><!-- metadata, not rendered --></span>
  <span class="tok-tag"><body></span>...<span class="tok-tag"></body></span>   <span class="tok-comment"><!-- everything visible --></span>
<span class="tok-tag"></html></span>`} language="typescript" />

        <h3>2.2 Tag syntax rules</h3>
        <CodeBlock code={`<span class="line-good"><span class="tok-tag"><div></span>correct<span class="tok-tag"></div></span></span>
<span class="line-bad"><span class="tok-tag"><div></span>wrong<span class="tok-tag"><div/></span>        <span class="tok-comment"><!-- that's self-closing syntax, not a closing tag --></span></span>

<span class="line-good"><span class="tok-tag"><input /></span>               <span class="tok-comment"><!-- correct — self-closing, no children --></span></span>
<span class="line-bad"><span class="tok-tag"><input></input></span>        <span class="tok-comment"><!-- wrong — input can't take a closing tag at all --></span></span>`} language="typescript" />
        <p className="callout">
          Editor draws a red squiggly line under a tag? Stop and read it before
          typing on.
        </p>

        <h3>2.3 Common elements &amp; semantic containers</h3>
        <p>
          Prefer a semantic tag over a generic box when one fits the content's
          role:
        </p>

        <h4>Most common</h4>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Type</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="generic-row">
              <td><code>&lt;div&gt;</code></td>
              <td><span className="badge badge-generic">Generic</span></td>
              <td>block box, no meaning — the default wrapper</td>
            </tr>
            <tr className="generic-row">
              <td><code>&lt;span&gt;</code></td>
              <td><span className="badge badge-generic">Generic</span></td>
              <td>inline box, no meaning — wraps part of a line</td>
            </tr>
            <tr>
              <td><code>&lt;p&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>a paragraph of text</td>
            </tr>
            <tr>
              <td><code>&lt;a href="…"&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>a link to another page, file, or section</td>
            </tr>
            <tr>
              <td><code>&lt;img src="…" alt="…"&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>an image — <code>alt</code> is required</td>
            </tr>
            <tr>
              <td><code>&lt;h1&gt;–&lt;h6&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>headings, in order — one <code>&lt;h1&gt;</code> per page</td>
            </tr>
            <tr>
              <td><code>&lt;ul&gt; &lt;ol&gt; &lt;li&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>a bulleted or numbered list, and its items</td>
            </tr>
            <tr>
              <td><code>&lt;table&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>
                tabular data — with <code>&lt;thead&gt;</code>,
                <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>,
                <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>
              </td>
            </tr>
            <tr>
              <td><code>&lt;form&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>a group of fields submitted together</td>
            </tr>
            <tr>
              <td><code>&lt;label for="…"&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>the caption for a field — clicking it focuses that field</td>
            </tr>
            <tr>
              <td><code>&lt;input&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>
                a form field — self-closing, never
                <code>&lt;input&gt;&lt;/input&gt;</code>
              </td>
            </tr>
            <tr>
              <td><code>&lt;button&gt;</code></td>
              <td><span className="badge badge-semantic">Semantic</span></td>
              <td>a clickable action (not a styled <code>&lt;div&gt;</code>!)</td>
            </tr>
          </tbody>
        </table>

        <h4>Other semantic elements</h4>
        <p>
          Page-structure landmarks — they render like a <code>&lt;div&gt;</code>,
          but they say what the box <em>is</em>:
        </p>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;header&gt;</code></td>
              <td>intro / top-of-section content</td>
            </tr>
            <tr>
              <td><code>&lt;nav&gt;</code></td>
              <td>navigation links</td>
            </tr>
            <tr>
              <td><code>&lt;main&gt;</code></td>
              <td>the primary content of the page (one per page)</td>
            </tr>
            <tr>
              <td><code>&lt;section&gt;</code></td>
              <td>a thematic grouping with its own heading</td>
            </tr>
            <tr>
              <td><code>&lt;article&gt;</code></td>
              <td>self-contained, independently distributable content</td>
            </tr>
            <tr>
              <td><code>&lt;aside&gt;</code></td>
              <td>tangential content (sidebar, pull-quote)</td>
            </tr>
            <tr>
              <td><code>&lt;footer&gt;</code></td>
              <td>closing content for a section/page</td>
            </tr>
          </tbody>
        </table>
        <p className="callout">
          Semantic tags are what screen readers and search engines use to
          understand your page — a div soup is invisible to both.
        </p>

        <h3>2.4 Text &amp; inline elements</h3>
        <p>
          Inline emphasis: <code>&lt;strong&gt;</code> (importance),
          <code>&lt;em&gt;</code> (stress), <code>&lt;br&gt;</code> (a line
          break).
        </p>
        <p className="callout">
          <code>alt</code> is not optional — it's the text a screen reader speaks.
        </p>
        <div className="code-demo-pair">
          <CodeBlock code={`<span class="tok-tag"><ul></span>
  <span class="tok-tag"><li></span>First item<span class="tok-tag"></li></span>
  <span class="tok-tag"><li></span>Second item<span class="tok-tag"></li></span>
<span class="tok-tag"></ul></span>`} language="typescript" />
          <ul>
            <li>First item</li>
            <li>Second item</li>
          </ul>
        </div>
        <div className="code-demo-pair">
          <CodeBlock code={`<span class="tok-tag"><table></span>
  <span class="tok-tag"><thead></span>
    <span class="tok-tag"><tr><th></span>Name<span class="tok-tag"></th><th></span>Role<span class="tok-tag"></th></tr></span>
  <span class="tok-tag"></thead></span>
  <span class="tok-tag"><tbody></span>
    <span class="tok-tag"><tr><td></span>Ada<span class="tok-tag"></td><td></span>Engineer<span class="tok-tag"></td></tr></span>
  <span class="tok-tag"></tbody></span>
<span class="tok-tag"></table></span>`} language="typescript" />
          <table className="ref-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ada</td>
                <td>Engineer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2.5 Attributes</h3>
        <p>
          <code>tag attribute="value"</code> — <code>id</code> unique,
          <code>class</code> reusable, <code>data-*</code> your own custom data:
        </p>
        <CodeBlock code={`<span class="tok-tag"><div</span>
  <span class="tok-attr">id</span>=<span class="tok-string">"user-card"</span>
  <span class="tok-attr">class</span>=<span class="tok-string">"card highlighted"</span>
  <span class="tok-attr">data-testid</span>=<span class="tok-string">"user-card"</span>
  <span class="tok-attr">data-user-id</span>=<span class="tok-string">"42"</span>
<span class="tok-tag">></span>
  ...
<span class="tok-tag"></div></span>`} language="typescript" />
        <div id="demo-attrs" className="demo-box" data-note="I am a data attribute">
          <p>
            Inspect me — I have an <code>id</code>, a <code>class</code>, and a
            <code>data-note</code>.
          </p>
        </div>

        <h3>2.6 Forms</h3>
        <p className="callout">
          <code>&lt;input&gt;</code> is self-closing —
          <code>&lt;input /&gt;</code> or plain <code>&lt;input&gt;</code>,
          <strong>never</strong> <code>&lt;input&gt;&lt;/input&gt;</code>.
        </p>
        <div className="code-demo-pair">
          <form className="demo-form">
            <label htmlFor="demo-name">Name</label>
            <input id="demo-name"
              name="name"
              type="text"
              placeholder="Ada Lovelace" />

            <label htmlFor="demo-role">Role</label>
            <select id="demo-role" name="role">
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>

            <label><input type="checkbox" name="agree" /> I understand the box
              model</label>

            <button type="submit">Submit</button>
            <small>click → refreshes the page</small>
          </form>
          <CodeBlock code={`<span class="tok-tag"><form></span>
  <span class="tok-tag"><label</span> <span class="tok-attr">for</span>=<span class="tok-string">"name"</span><span class="tok-tag">></span>Name<span class="tok-tag"></label></span>
  <span class="tok-tag"><input</span> <span class="tok-attr">id</span>=<span class="tok-string">"name"</span> <span class="tok-attr">name</span>=<span class="tok-string">"name"</span> <span class="tok-attr">type</span>=<span class="tok-string">"text"</span> <span class="tok-tag">/></span>

  <span class="tok-tag"><label</span> <span class="tok-attr">for</span>=<span class="tok-string">"role"</span><span class="tok-tag">></span>Role<span class="tok-tag"></label></span>
  <span class="tok-tag"><select</span> <span class="tok-attr">id</span>=<span class="tok-string">"role"</span> <span class="tok-attr">name</span>=<span class="tok-string">"role"</span><span class="tok-tag">></span>
    <span class="tok-tag"><option</span> <span class="tok-attr">value</span>=<span class="tok-string">"student"</span><span class="tok-tag">></span>Student<span class="tok-tag"></option></span>
    <span class="tok-tag"><option</span> <span class="tok-attr">value</span>=<span class="tok-string">"instructor"</span><span class="tok-tag">></span>Instructor<span class="tok-tag"></option></span>
  <span class="tok-tag"></select></span>

  <span class="tok-tag"><label></span>
    <span class="tok-tag"><input</span> <span class="tok-attr">type</span>=<span class="tok-string">"checkbox"</span> <span class="tok-attr">name</span>=<span class="tok-string">"agree"</span> <span class="tok-tag">/></span> I agree
  <span class="tok-tag"></label></span>

  <span class="tok-tag"><button</span> <span class="tok-attr">type</span>=<span class="tok-string">"submit"</span><span class="tok-tag">></span>Submit<span class="tok-tag"></button></span> <span class="tok-comment"><!-- click refreshes the page --></span>
<span class="tok-tag"></form></span>`} language="typescript" />
        </div>
        <p className="callout">
          A form's default behavior on submit is to reload the page (a GET to the
          current URL). In JS you'll almost always call
          <code>event.preventDefault()</code> inside a <code>submit</code>
          handler to stop that refresh.
        </p>
      </section>

      {/* ============================================================ */}
      <section id="css-core">
        <h2>3. CSS Core</h2>

        <h3>3.1 Selectors &amp; specificity</h3>
        <p>Four selector families, in <strong>increasing</strong> specificity:</p>
        <CodeBlock code={`<span class="tok-tag">element</span>     { }   <span class="tok-comment">/* p, div, button          — specificity 0-0-1 */</span>
<span class="tok-tag">.class</span>      { }   <span class="tok-comment">/* .demo-box               — specificity 0-1-0 */</span>
<span class="tok-tag">#id</span>         { }   <span class="tok-comment">/* #demo-attrs             — specificity 1-0-0 */</span>
<span class="tok-tag">el.class</span>    { }   <span class="tok-comment">/* combos add together     — 0-1-1              */</span>`} language="typescript" />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>
              More specific selector wins — regardless of order in the file.
            </li>
            <li>Tie? Last rule declared wins.</li>
            <li><code>!important</code> beats everything — avoid it.</li>
          </ul>
        </div>
        <div className="specificity-demo">
          <p className="spec-target">
            This paragraph has both a class and an id rule fighting over its color
            — inspect it and check the Styles panel to see which one won and why.
          </p>
        </div>

        <h3>3.2 The box model</h3>
        <p>
          Every element is a rectangle made of four layers, outside in:
          <strong>margin</strong> (space outside the border, transparent) →
          <strong>border</strong> → <strong>padding</strong> (space inside the
          border) → <strong>content</strong>.
        </p>
        <div className="box-model-demo">
          <div className="bm-margin">
            margin
            <div className="bm-border">
              border
              <div className="bm-padding">
                padding
                <div className="bm-content">content</div>
              </div>
            </div>
          </div>
        </div>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>
              <code>content-box</code> (default) — <code>width</code> = content
              only; padding/border add on top.
            </li>
            <li>
              <code>border-box</code> — <code>width</code> includes padding +
              border, so it never grows past what you set.
            </li>
            <li>
              Most stylesheets set
              <code>* {"{"} box-sizing: border-box; {"}"}</code> globally.
            </li>
          </ul>
        </div>

        <h3>3.3 display: block vs. inline vs. inline-block</h3>
        <div className="display-demo">
          <div className="display-row">
            <span className="tag-label">block</span>
            <div className="demo-block">
              I take the full line and respect width/height.
            </div>
          </div>
          <div className="display-row">
            <span className="tag-label">inline</span>
            <span className="demo-inline">I sit in the text flow</span><span className="demo-inline">and ignore width/height.</span>
          </div>
          <div className="display-row">
            <span className="tag-label">inline-block</span>
            <span className="demo-inline-block">flows like inline</span><span className="demo-inline-block">but respects width/height.</span>
          </div>
        </div>

        <h3>3.4 Flexbox (one axis)</h3>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>display: flex</code> lays children out along ONE axis.</li>
            <li>
              <code>justify-content</code> = main axis, <code>align-items</code> =
              cross axis.
            </li>
          </ul>
        </div>
        <div className="flex-demo">
          <div className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
        </div>

        <h3>3.5 Grid (two axes at once)</h3>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>Flex = one axis (a row OR a column).</li>
            <li>
              Grid = two axes at once (rows AND columns) — better for a full-page
              or card-grid layout.
            </li>
            <li>
              Surface level for today: just know it exists. "Grid = 2D, flex =
              1D."
            </li>
          </ul>
        </div>
        <div className="grid-demo">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
        </div>

        <h3>3.6 Other everyday CSS properties</h3>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li><code>font-size</code> — text size</li>
            <li><code>color</code> — text color</li>
            <li><code>background-color</code> — fill</li>
            <li>
              <code>border</code> — shorthand: width + style + color, e.g.
              <code>1px solid black</code>
            </li>
            <li><code>border-radius</code> — rounds the corners</li>
          </ul>
        </div>
        <div className="quick-css-demo">
          font-size, color, background-color, border, and border-radius — all
          five, on one box.
        </div>

        <h3>3.7 Responsive design</h3>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>
              A <strong>media query</strong> applies different CSS rules based on
              the viewport (usually its width).
            </li>
            <li>
              Resize this window, or open DevTools' device toolbar (<code>Cmd+Shift+M</code>
              Mac / <code>Ctrl+Shift+M</code>
              Windows), to flip the box below at the 600px breakpoint — no JS
              involved:
            </li>
          </ul>
        </div>
        <CodeBlock code={`<span class="tok-tag">.narrow-only</span> { <span class="tok-attr">display</span>: <span class="tok-string">none</span>; }

<span class="tok-keyword">@media</span> (max-width: <span class="tok-num">600px</span>) {
  <span class="tok-tag">.wide-only</span>   { <span class="tok-attr">display</span>: <span class="tok-string">none</span>; }
  <span class="tok-tag">.narrow-only</span> { <span class="tok-attr">display</span>: <span class="tok-string">block</span>; }
}`} language="typescript" />
        <div className="responsive-demo">
          <p className="wide-only">
            Viewport ≥ 600px — showing the wide-layout text.
          </p>
          <p className="narrow-only">
            Viewport &lt; 600px — showing the narrow-layout text.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      <section id="dom">
        <h2>4. The Document Object Model (DOM)</h2>
        <p>
          The DOM is the browser's live, in-memory tree built <em>from</em>
          your HTML — not the HTML file itself. It can differ from your source
          (browsers auto-correct malformed HTML; JS can change it after load).
          View it in DevTools' Elements panel.
        </p>
        <ul>
          <li><strong>parent</strong> — the node directly containing this one</li>
          <li><strong>child</strong> — a node directly contained by this one</li>
          <li><strong>sibling</strong> — a node with the same parent</li>
          <li>
            <strong>ancestor</strong> / <strong>descendant</strong> — any level
            up/down the tree, not just direct
          </li>
        </ul>
        <div className="callout">
          <p>
            <strong>Live exercise:</strong> in the Elements panel, find this
            section's <code>&lt;ul&gt;</code>. Its parent is this
            <code>&lt;section id="dom"&gt;</code>. Its children are the four
            <code>&lt;li&gt;</code> elements. Those four <code>&lt;li&gt;</code>s
            are siblings of each other.
          </p>
        </div>

        <h3>4.1 Sneak peek: touching the DOM in JavaScript (Day 2+)</h3>
        <p>
          Surface level only, nothing here runs today — just know these exist:
        </p>
        <CodeBlock code={`<span class="tok-comment">// SELECT an element</span>
document.<span class="tok-attr">querySelector</span>(<span class="tok-string">".card"</span>);        <span class="tok-comment">// first match, any CSS selector</span>
document.<span class="tok-attr">querySelectorAll</span>(<span class="tok-string">"li"</span>);        <span class="tok-comment">// ALL matches, as a list</span>
document.<span class="tok-attr">getElementById</span>(<span class="tok-string">"demo-attrs"</span>);  <span class="tok-comment">// older API, id only, still common</span>

<span class="tok-comment">// LISTEN for events</span>
button.<span class="tok-attr">addEventListener</span>(<span class="tok-string">"click"</span>, () => {
  <span class="tok-comment">// runs every time this button is clicked</span>
});

<span class="tok-comment">// CRUD an element</span>
<span class="tok-keyword">const</span> item = document.<span class="tok-attr">createElement</span>(<span class="tok-string">"li"</span>); <span class="tok-comment">// Create</span>
item.<span class="tok-attr">textContent</span> = <span class="tok-string">"new item"</span>;              <span class="tok-comment">// Update (set its text)</span>
list.<span class="tok-attr">appendChild</span>(item);                     <span class="tok-comment">// insert it into the page</span>
item.<span class="tok-attr">textContent</span>;                           <span class="tok-comment">// Read</span>
item.<span class="tok-attr">remove</span>();                              <span class="tok-comment">// Delete</span>`} language="typescript" />
        <div className="callout">
          <p>
            <strong>Avoid <code>innerHTML</code>.</strong> It parses whatever
            string you give it as raw HTML — if that string ever contains user
            input, you've just handed an attacker a way to inject their own
            <code>&lt;script&gt;</code> tags (an XSS attack). Prefer
            <code>textContent</code> for text, or build elements with
            <code>createElement</code>. No need for the details today — just
            remember "avoid <code>innerHTML</code>" going forward.
          </p>
        </div>
      </section>

    </div>
  );
}
