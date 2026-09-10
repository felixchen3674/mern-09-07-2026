import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Lab() {
  return (
    <div className="page lab-page">
      <title>Day 2 Lab</title>
      <DayNav day="day2-typescript-core" current="lab" />

      <h1>Day 2 — Lab</h1>

      <div className="task challenge">
        <span className="task-num">1</span>
        <div className="task-body">
          <p>Playlist — total up the runtime.</p>
          <span className="tag-starter">Starter</span>
          <CodeBlock code={`const sampleTrack = {
  id: 1,
  title: "Blue Skies",
  artist: "The Wanderers",
  durationSec: 214,
  featuring: "Mia Chen",
};`} language="typescript" />
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Based on <code>sampleTrack</code>'s shape, define an <code>interface Track</code> — <code>featuring</code> should be optional (most tracks don't have a guest).</li>
            <li>Create an array of 3 <code>Track</code> objects typed as <code>Track[]</code> — give one a <code>featuring</code>, leave it off the others.</li>
            <li>Write <code>getTotalDuration(tracks)</code> — takes an array of <code>Track</code>, returns a number: the sum of every <code>durationSec</code>.</li>
            <li>Write <code>getCredit(track)</code> — takes one <code>Track</code>, returns a string: <code>"Blue Skies — The Wanderers"</code>, plus <code>" feat. Mia Chen"</code> only when there's a guest.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`getTotalDuration(tracks) // the playlist's total seconds
getCredit(tracks[0])     // "Blue Skies — The Wanderers feat. Mia Chen"
getCredit(tracks[1])     // "Some Title — Some Artist" — no feat. part`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>Support desk — count by priority.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Define a union <code>type Priority</code> that can only be <code>"low"</code>, <code>"medium"</code>, or <code>"urgent"</code>.</li>
            <li>Define an <code>interface Ticket</code> with: <code>id</code> (number), <code>subject</code> (string), <code>priority</code> (<code>Priority</code>), <code>tags</code> (array of strings), and an optional <code>assignee</code> (string).</li>
            <li>Create an array of 4 <code>Ticket</code> objects typed as <code>Ticket[]</code> — leave <code>assignee</code> off at least two.</li>
            <li>Write <code>countByPriority(tickets, priority)</code> — takes an array of <code>Ticket</code> and one <code>Priority</code>, returns a number.</li>
            <li>Write <code>describePriority(priority)</code> — takes a <code>Priority</code>, returns a string: a different message per case.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`countByPriority(tickets, "urgent") // however many urgent ones you made
describePriority("urgent")         // your message for urgent
describePriority("nope")           // TS should refuse to compile this line`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>Filtering the ticket queue. Keep using task 2's <code>Ticket[]</code>.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>getUnassigned(tickets)</code> — takes an array of <code>Ticket</code>, returns an array of <code>Ticket</code>: only the ones with no <code>assignee</code>.</li>
            <li>Write <code>getByTag(tickets, tag)</code> — takes an array of <code>Ticket</code> and a string, returns an array of <code>Ticket</code>.</li>
            <li>Write <code>getSubjects(tickets)</code> — takes an array of <code>Ticket</code>, returns an array of strings: just the subject lines.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`getUnassigned(tickets) // the tickets you left an assignee off of
getSubjects(tickets)   // ["Printer jammed", "Cannot log in", ...]`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>One typed summary object.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Define an <code>interface QueueReport</code> with three number fields: <code>total</code>, <code>urgent</code>, <code>unassigned</code>.</li>
            <li>Write <code>buildReport(tickets)</code> — takes an array of <code>Ticket</code>, returns a <code>QueueReport</code>. Reuse the functions from tasks 2 and 3 rather than rewriting the counting.</li>
            <li>Log the report.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`buildReport(tickets) // { total: 4, urgent: 1, unassigned: 2 }`} language="typescript" />
        </div>
      </div>



    </div>
  );
}
