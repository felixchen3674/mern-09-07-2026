import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";

import SkillSection from "./resume-preparation/skill-section/SkillSection";
import Experience from "./resume-preparation/experience/Experience";
import Summary from "./resume-preparation/summary/Summary";

// One <Route> per page declared in marketing.ts. Routes mirror folders:
// /resume-preparation/skill-section → src/resume-preparation/skill-section/SkillSection.tsx
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/resume-preparation/skill-section" element={<SkillSection />} />

      <Route path="/resume-preparation/summary" element={<Summary />} />

      <Route path="/resume-preparation/experience" element={<Experience />} />

      {/* A typo'd URL would otherwise render a blank page. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
