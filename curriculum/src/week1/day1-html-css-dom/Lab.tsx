import DayNav from "../../components/DayNav";
import labSpec from "./lab-1.png";
import "./day1-lab.css";

export default function Lab() {
  return (
    <div className="page lab-page day1-lab">
      <title>Day 1 Lab — Study Portal</title>
      <DayNav day="day1-html-css-dom" current="lab" />
      <div className="image-container">
        <img src={labSpec} alt="Day 1 lab spec — the Study Portal page to rebuild" />
      </div>
    </div>
  );
}
