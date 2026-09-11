import DayNav from "../../../components/DayNav";
import "./demo";

export default function Lecture() {
  const handleClick = () => {
    // 1000000
    for (let i = 0; i < 100; i++) {
      
    }
  }

  return (
    <div className="page lecture-page">
      <title>Day 5 — Lecture Canvas</title>
      <DayNav day="day5-promises-apis" current="lecture" />
      <h1>Day 5 — Lecture Canvas</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={()=>console.log("hello")}>Log</button>
    </div>
  );
}
