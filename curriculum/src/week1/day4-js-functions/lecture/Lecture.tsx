import DayNav from "../../../components/DayNav";
// import "./demo";

export default function Lecture() {
  return (
    <div className="page lecture-page">
      <title>Day 4 — Lecture Canvas</title>
      <DayNav day="day4-js-functions" current="lecture" />
      <h1>Day 4 — Lecture Canvas</h1>
      <input onChange={()=>{
        console.log("triggered");
        
      }}/>
    </div>
  );
}
