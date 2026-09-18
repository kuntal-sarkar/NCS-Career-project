
import { useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Lightbulb, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

function Analysis() {
  const navigate = useNavigate();

  // Resume aur job selection ka data
  const selection = JSON.parse(
    localStorage.getItem("jobSelection") || "{}"
  );

  // Demo analysis data
  const matchedSkills = [
    "C++",
    "Problem Solving",
    "Communication",
  ];

  const missingSkills = [
    "React",
    "Node.js",
    "SQL",
  ];

  const suggestions = [
    "React ke fundamentals aur components practice karo.",
    "Node.js se basic backend APIs banana seekho.",
    "SQL queries aur database concepts revise karo.",
  ];

  return (
    <div className="page">
      <Navbar />

      <main className="container">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/resume-job")}
        >
          <ArrowLeft size={18} /> Back
        </button>

        <section className="card" style={{ marginTop: "24px" }}>
          <h1>Job-Fit Analysis</h1>
          <p>
            Your resume analysis for the selected job role.
          </p>

          <div className="grid grid-2">
            <div>
              <p><strong>Target Role</strong></p>
              <h3>{selection.role || "Software Developer"}</h3>
            </div>

            <div>
              <p><strong>Location</strong></p>
              <h3>{selection.location || "Not specified"}</h3>
            </div>
          </div>

          <p>
            <strong>Resume:</strong>{" "}
            {selection.resumeName || "Demo Resume"}
          </p>
        </section>

        <section
          className="card"
          style={{ marginTop: "24px", textAlign: "center" }}
        >
          <h2>Job Match Score</h2>

          <div
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "#2563eb",
              margin: "16px 0",
            }}
          >
            75%
          </div>

          <p>
            Your profile shows a demo match with the selected role.
          </p>
        </section>

        <div
          className="grid grid-2"
          style={{ marginTop: "24px" }}
        >
          <section className="card">
            <h2>
              <CheckCircle
                size={22}
                color="green"
                style={{ verticalAlign: "middle" }}
              />{" "}
              Matched Skills
            </h2>

            {matchedSkills.map((skill) => (
              <p key={skill}>✓ {skill}</p>
            ))}
          </section>

          <section className="card">
            <h2>
              <XCircle
                size={22}
                color="crimson"
                style={{ verticalAlign: "middle" }}
              />{" "}
              Skills to Improve
            </h2>

            {missingSkills.map((skill) => (
              <p key={skill}>• {skill}</p>
            ))}
          </section>
        </div>

        <section
          className="card"
          style={{ marginTop: "24px" }}
        >
          <h2>
            <Lightbulb
              size={22}
              style={{ verticalAlign: "middle" }}
            />{" "}
            Improvement Suggestions
          </h2>

          {suggestions.map((suggestion, index) => (
            <p key={index}>
              {index + 1}. {suggestion}
            </p>
          ))}
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "24px",
          }}
        >
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/resume-job")}
          >
            <ArrowLeft size={18} /> Edit Job Details
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/interview-setup")}
          >
            Continue to Interview{" "}
            <ArrowRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Analysis;