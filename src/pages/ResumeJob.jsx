
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Upload,
  BriefcaseBusiness,
  MapPin,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";

function ResumeJob() {
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [role, setRole] = useState("Software Developer");
  const [location, setLocation] = useState("Kolkata");
  const [experience, setExperience] = useState("0–2 years");

  const handleResume = (e) => {
    const file = e.target.files[0];

    if (file) {
      setResume(file);
    }
  };

  const handleAnalyze = () => {
    if (!resume) {
      alert("Please upload your resume first!");
      return;
    }

    const jobData = {
      resumeName: resume.name,
      role,
      location,
      experience,
    };

    localStorage.setItem("jobSelection", JSON.stringify(jobData));

    navigate("/analysis");
  };

  return (
    <div className="page">
      <Navbar />

      <main
        className="container"
        style={{ padding: "40px 0 60px" }}
      >
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/profile")}
          style={{ marginBottom: "25px" }}
        >
          <ArrowLeft size={17} /> Back
        </button>

        <div className="badge">
          Step 2 of 8 · Resume & Job Selection
        </div>

        <h1>Build your career profile</h1>

        <p style={{ color: "#64748b", margin: "12px 0 30px" }}>
          Upload your resume and select the job you want to prepare for.
        </p>

        <div
          className="grid grid-2"
          style={{ alignItems: "start" }}
        >
          {/* Resume Upload */}
          <section className="card">
            <div className="feature-icon">
              <FileText size={25} />
            </div>

            <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
              Your Resume
            </h2>

            <p style={{ color: "#64748b", marginBottom: "22px" }}>
              Upload your resume to get started.
            </p>

            <label
              htmlFor="resume-upload"
              style={{
                display: "grid",
                placeItems: "center",
                gap: "12px",
                padding: "35px 15px",
                border: "2px dashed #93c5fd",
                borderRadius: "14px",
                background: "#f8fbff",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              {resume ? (
                <CheckCircle size={35} color="#16a34a" />
              ) : (
                <Upload size={35} color="#2563eb" />
              )}

              <strong>
                {resume ? "Resume selected!" : "Click to upload resume"}
              </strong>

              <span style={{ color: "#64748b", fontSize: "13px" }}>
                PDF or DOC/DOCX · Select a file from your device
              </span>

              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResume}
                style={{ display: "none" }}
              />
            </label>

            {resume && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "18px",
                  padding: "13px",
                  background: "#f0fdf4",
                  borderRadius: "10px",
                }}
              >
                <FileText color="#16a34a" size={22} />

                <div style={{ minWidth: 0 }}>
                  <strong style={{ display: "block", overflowWrap: "anywhere" }}>
                    {resume.name}
                  </strong>

                  <span style={{ color: "#15803d", fontSize: "13px" }}>
                    Selected successfully
                  </span>
                </div>
              </div>
            )}
          </section>

          {/* Job Selection */}
          <section className="card">
            <div className="feature-icon">
              <BriefcaseBusiness size={25} />
            </div>

            <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
              Target Job
            </h2>

            <p style={{ color: "#64748b", marginBottom: "22px" }}>
              Customize your target job preferences.
            </p>

            <label
              style={{
                display: "grid",
                gap: "9px",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              Preferred Job Role

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  padding: "13px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "9px",
                  background: "white",
                }}
              >
                <option>Software Developer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Data Analyst</option>
                <option>Web Developer</option>
                <option>Software Tester</option>
              </select>
            </label>

            <label
              style={{
                display: "grid",
                gap: "9px",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              <span>
                <MapPin size={16} style={{ verticalAlign: "middle" }} />{" "}
                Preferred Location
              </span>

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter preferred location"
                required
                style={{
                  padding: "13px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "9px",
                  width: "100%",
                }}
              />
            </label>

            <label
              style={{
                display: "grid",
                gap: "9px",
                fontWeight: 600,
              }}
            >
              Experience

              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                style={{
                  padding: "13px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "9px",
                  background: "white",
                }}
              >
                <option>Fresher</option>
                <option>0–2 years</option>
                <option>2–5 years</option>
                <option>5+ years</option>
              </select>
            </label>
          </section>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "25px",
          }}
        >
          <button
            className="btn btn-primary"
            onClick={handleAnalyze}
          >
            Analyze My Profile
            <ArrowRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}

export default ResumeJob;