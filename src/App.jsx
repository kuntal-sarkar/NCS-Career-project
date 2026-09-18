
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Profile from "./pages/profile";
import ResumeJob from "./pages/ResumeJob";
import Analysis from "./pages/Analysis";
import InterviewSetup from "./pages/InterviewSetup";
import MockInterview from "./pages/MockInterview";
import Feedback from "./pages/Feedback";
import Dashboard from "./pages/Dashboard";
import ComingSoon from "./pages/ComingSoon";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume-job" element={<ResumeJob />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/interview-setup" element={<InterviewSetup />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<ComingSoon />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;