
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Profile from "./pages/profile";
import ResumeJob from "./pages/ResumeJob";
import Analysis from "./pages/Analysis";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume-job" element={<ResumeJob />} />
        <Route path="/analysis" element={<Analysis />} />

        <Route
          path="/interview-setup"
          element={<h1>Interview Setup - Coming Soon</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;