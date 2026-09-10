import NoteNav from "../components/NoteNav";

// [action, mac binding, windows/linux binding] — every shortcut on this page gives both
// platforms, per the curriculum-notes-style rule.
type Row = [string, string, string];

function ShortcutTable({ rows }: { rows: Row[] }) {
  return (
    <table className="ref-table">
      <thead>
        <tr>
          <th>Action</th>
          <th>Mac</th>
          <th>Windows / Linux</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([action, mac, win]) => (
          <tr key={action}>
            <td>{action}</td>
            <td>
              <code>{mac}</code>
            </td>
            <td>
              <code>{win}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const SELECTING: Row[] = [
  ["Select one whole word", "Double-click the word", "Double-click the word"],
  ["Batch select words / select multiple of the same words", "Cmd+D", "Ctrl+D"],
];

const BY_WORD: Row[] = [
  ["Move the cursor one word left / right", "Opt+← / Opt+→", "Ctrl+← / Ctrl+→"],
  ["Delete the whole word before the cursor", "Opt+Delete", "Ctrl+Backspace"],
];

const LINES: Row[] = [
  [
    "Duplicate the current line up / down",
    "Shift+Opt+↑ / Shift+Opt+↓",
    "Shift+Alt+↑ / Shift+Alt+↓",
  ],
  [
    "Move the current line up / down",
    "Opt+↑ / Opt+↓",
    "Alt+↑ / Alt+↓",
  ],
];

const COMMENTING: Row[] = [
  ["Comment / uncomment the current line", "Cmd+/", "Ctrl+/"],
  ["Comment / uncomment every selected line", "Select the lines, then Cmd+/", "Select the lines, then Ctrl+/"],
];

const FORMAT: Row[] = [
  ["Auto-format the whole file", "Shift+Opt+F", "Shift+Alt+F"],
];

const DEVTOOLS: Row[] = [
  ["Open DevTools", "Cmd+Opt+I or Cmd+Opt+J", "Ctrl+Shift+I or Ctrl+Shift+J (or F12)"],
  [
    "Inspect a specific element (element picker)",
    "Cmd+Shift+C",
    "Ctrl+Shift+C",
  ],
];

const UNDO: Row[] = [
  ["Undo", "Cmd+Z", "Ctrl+Z"],
  ["Redo (undo the undo)", "Cmd+Shift+Z", "Ctrl+Shift+Z"],
];

const BROWSER_TABS: Row[] = [
  ["Open a new tab", "Cmd+T", "Ctrl+T"],
  ["Close the current tab", "Cmd+W", "Ctrl+W"],
  ["Reopen the tab you just closed", "Cmd+Shift+T", "Ctrl+Shift+T"],
  ["Go to the next tab", "Ctrl+Tab", "Ctrl+Tab"],
  ["Go to the previous tab", "Ctrl+Shift+Tab", "Ctrl+Shift+Tab"],
  ["Jump straight to tab 1-8", "Cmd+1 … Cmd+8", "Ctrl+1 … Ctrl+8"],
];

const BROWSER_NAV: Row[] = [
  ["Go back to the previous page", "Cmd+←", "Alt+←"],
  ["Go forward again", "Cmd+→", "Alt+→"],
  ["Reload the page", "Cmd+R", "Ctrl+R"],
  ["Reload ignoring the cache (hard reload)", "Cmd+Shift+R", "Ctrl+Shift+R"],
];

const SWITCHING: Row[] = [
  ["Switch to another app", "Cmd+Tab", "Alt+Tab"],
  [
    "Switch between windows of the same app",
    "Cmd+` (backtick)",
    "Alt+Tab (each window is listed separately)",
  ],
];

const AUTOCOMPLETE: Row[] = [
  ["Accept the highlighted suggestion", "Tab or Enter", "Tab or Enter"],
  ["Move through the suggestion list", "↑ / ↓", "↑ / ↓"],
  ["Dismiss the suggestion list", "Escape", "Escape"],
];

export default function IdeShortcuts() {
  return (
    <div className="page notes-page">
      <title>Common Developer IDE Shortcuts</title>
      <NoteNav title="IDE Shortcuts" />
      <header className="lecture-header">
        <p className="eyebrow">General Notes</p>
        <h1>Common Developer IDE Shortcuts</h1>
        <p className="subtitle">
          The handful worth building into muscle memory first
        </p>
      </header>

      <p className="intro">
        Reaching for the mouse is the slow path — make these automatic and
        everything else speeds up.
      </p>

      <div className="callout">
        <p>
          These are the out-of-the-box defaults, and they work in nearly every
          editor — VS Code, WebStorm, Sublime, Cursor.
        </p>
      </div>

      <h2>Batch Selecting & Edit</h2>

      <ShortcutTable rows={SELECTING} />

      <div className="concept">
        <p className="concept-label">Concept</p>
        <ul>
          <li>
            Double-click a word, then press <code>Cmd+D</code> (Mac) /{" "}
            <code>Ctrl+D</code> (Windows). Each press adds the <em>next</em>{" "}
            matching word to the selection and gives it its own cursor.
          </li>
          <li>
            Keep pressing until every copy you want is selected, then type once
            — every cursor types the same thing. That's a batch edit.
          </li>
          <li>
            A match you don't want stops you: only press <code>D</code> as many
            times as you need, rather than selecting all of them and fixing it
            afterwards.
          </li>
        </ul>
      </div>

      <h2>Moving and deleting by word</h2>

      <ShortcutTable rows={BY_WORD} />

      <div className="callout">
        <p>
          Deleting a long variable name with one keystroke beats holding
          Backspace and watching it chew through the characters.
        </p>
      </div>

      <h2>Duplicating and moving a line</h2>

      <ShortcutTable rows={LINES} />

      <div className="callout">
        <p>
          Moving works on a selection too — highlight several lines and the whole
          block travels together, so you never have to cut and paste to reorder
          code.
        </p>
      </div>

      <h2>Commenting lines out</h2>
      <p>
        Select as many lines as you like and one keystroke comments all of them — this is how you
        park a block of code, or turn text you pasted from somewhere into a comment.
      </p>
      <ShortcutTable rows={COMMENTING} />

      <h2>Auto-formatting</h2>

      <ShortcutTable rows={FORMAT} />

      <div className="callout">
        <p>
          Better still, turn on Format On Save in your editor's settings so the
          file formats itself every time you save.
        </p>
      </div>

      <h2>Undo and redo</h2>
      <ShortcutTable rows={UNDO} />

      <h2>Accepting an autocomplete suggestion</h2>

      <ShortcutTable rows={AUTOCOMPLETE} />

      <div className="callout">
        <p>
          The most common time-waster to unlearn: the suggestion list already
          has the right name highlighted, and you type the whole thing out
          anyway.
        </p>
      </div>

      <h2>Outside the editor: browser and window</h2>
      <p>
        None of these belong to your editor — they are the browser and the
        operating system. You will use them all day while testing a page, so
        they are worth the same muscle memory.
      </p>

      <h3>Tabs</h3>

      <ShortcutTable rows={BROWSER_TABS} />

      <div className="callout">
        <p>
          <code>Cmd+Shift+T</code> / <code>Ctrl+Shift+T</code> is the one people
          are surprised by — it walks back through recently closed tabs, so
          closing the wrong one costs you a keystroke rather than the URL.
        </p>
      </div>

      <h3>Moving through pages</h3>

      <ShortcutTable rows={BROWSER_NAV} />

      <div className="callout">
        <p>
          The hard reload matters while you are building: a normal reload can
          hand you the cached copy of a stylesheet or script you just edited.
        </p>
      </div>

      <h3>Switching apps and windows</h3>

      <ShortcutTable rows={SWITCHING} />

      <div className="callout">
        <p>
          Hold the <code>Cmd</code> (or <code>Alt</code>) key down after the
          first press and tap <code>Tab</code> repeatedly to move further along
          the list before releasing — that is how you land somewhere other than
          the app you were last in.
        </p>
      </div>

      <h2>Opening Chrome DevTools</h2>

      <ShortcutTable rows={DEVTOOLS} />

      <div className="callout">
        <p>
          Right-click anything on the page and choose Inspect to do the same
          thing — it opens DevTools already focused on the element you clicked.
        </p>
      </div>
    </div>
  );
}
