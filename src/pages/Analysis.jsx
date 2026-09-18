
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  FileText,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";

function Analysis() {
  const navigate = useNavigate();

  // Scroll to the top whenever this page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Safely read saved job selection
  const getSelection = () => {
    try {
      return JSON.parse(localStorage.getItem("jobSelection") || "{}");
    } catch {
      return {};
    }
  };

  const selection = getSelection();

  // Demo analysis data
  const matchScore = 75;

  const matchedSkills = ["C++", "Problem Solving", "Communication"];
  const missingSkills = ["React", "Node.js", "SQL"];

  const suggestions = [
    {
      title: "Strengthen React fundamentals",
      description:
        "React ke fundamentals aur components practice karo.",
    },
    {
      title: "Learn backend development",
      description:
        "Node.js se basic backend APIs banana seekho.",
    },
    {
      title: "Revise database concepts",
      description:
        "SQL queries aur database concepts revise karo.",
    },
  ];

  return (
    <div className="page">
      <Navbar />

      <main
        className="container"
        style={{
          padding: "24px 0 60px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            padding: "0 16px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {/* Back Button - normal layout, left aligned */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/resume-job")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                border: "1px solid #bfdbfe",
                borderRadius: "12px",
                whiteSpace: "nowrap",
              }}
            >
              <ArrowLeft size={18} />
              Back to Resume & Job
            </button>
          </div>

          {/* Page Heading */}
          <div style={{ marginBottom: "28px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#dbeafe",
                color: "#1d4ed8",
                borderRadius: "30px",
                padding: "8px 14px",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              <Sparkles size={16} />
              Career Insights
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 38px)",
                lineHeight: 1.2,
                margin: "0 0 12px",
                color: "#0f172a",
              }}
            >
              Job-Fit Analysis
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Understand your skill match and prepare for your target role.
            </p>
          </div>

          {/* Selected Job Summary */}
          <section
            className="card"
            style={{
              marginBottom: "24px",
              padding: "26px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "22px",
              }}
            >
              <div className="feature-icon" style={{ flexShrink: 0 }}>
                <BriefcaseBusiness size={25} />
              </div>

              <div>
                <h2 style={{ margin: 0, fontSize: "22px" }}>
                  Your Target Job
                </h2>
                <p style={{ margin: "5px 0 0", color: "#64748b" }}>
                  Your selected career preferences
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  icon: BriefcaseBusiness,
                  label: "Target Role",
                  value: selection.role || "Software Developer",
                },
                {
                  icon: MapPin,
                  label: "Preferred Location",
                  value: selection.location || "Not specified",
                },
                {
                  icon: FileText,
                  label: "Resume",
                  value: selection.resumeName || "Demo Resume",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "18px",
                      minWidth: 0,
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "#64748b",
                        fontSize: "14px",
                      }}
                    >
                      <Icon
                        size={16}
                        style={{
                          verticalAlign: "middle",
                          marginRight: "6px",
                        }}
                      />
                      {item.label}
                    </p>

                    <h3
                      style={{
                        margin: 0,
                        fontSize: "18px",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Match Score */}
          <section
            className="card"
            style={{
              marginBottom: "24px",
              padding: "32px 24px",
              textAlign: "center",
              background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 65%)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#1d4ed8",
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "18px",
              }}
            >
              <Target size={19} />
              JOB MATCH SCORE
            </div>

            <div
              style={{
                width: "170px",
                height: "170px",
                maxWidth: "100%",
                borderRadius: "50%",
                background: `conic-gradient(#2563eb ${matchScore * 3.6}deg, #dbeafe 0deg)`,
                display: "grid",
                placeItems: "center",
                margin: "0 auto 22px",
              }}
            >
              <div
                style={{
                  width: "138px",
                  height: "138px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "42px",
                    lineHeight: 1.1,
                    fontWeight: 800,
                    color: "#2563eb",
                  }}
                >
                  {matchScore}%
                </span>
                <span
                  style={{
                    color: "#64748b",
                    fontSize: "12px",
                    marginTop: "5px",
                  }}
                >
                  Demo score
                </span>
              </div>
            </div>

            <h2 style={{ fontSize: "22px", margin: "0 0 10px" }}>
              Your Career Match
            </h2>

            <p
              style={{
                color: "#64748b",
                maxWidth: "550px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Your profile shows a demo match with the selected role.
              Review the skills below to plan your preparation.
            </p>
          </section>

          {/* Skills Overview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "24px",
              marginBottom: "24px",
            }}
          >
            {/* Matched Skills */}
            <section
              className="card"
              style={{
                padding: "26px",
                borderTop: "4px solid #16a34a",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >
                <CheckCircle size={25} color="#16a34a" />
                <h2 style={{ margin: 0, fontSize: "21px" }}>
                  Matched Skills
                </h2>
              </div>

              <p
                style={{
                  color: "#64748b",
                  margin: "0 0 22px",
                  fontSize: "14px",
                }}
              >
                Skills listed as matching in this demo
              </p>

              <div style={{ display: "grid", gap: "12px" }}>
                {matchedSkills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "#f0fdf4",
                      color: "#166534",
                      fontWeight: 500,
                    }}
                  >
                    <CheckCircle size={18} />
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills to Improve */}
            <section
              className="card"
              style={{
                padding: "26px",
                borderTop: "4px solid #f97316",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >
                <TrendingUp size={25} color="#ea580c" />
                <h2 style={{ margin: 0, fontSize: "21px" }}>
                  Skills to Improve
                </h2>
              </div>

              <p
                style={{
                  color: "#64748b",
                  margin: "0 0 22px",
                  fontSize: "14px",
                }}
              >
                Topics suggested for further practice
              </p>

              <div style={{ display: "grid", gap: "12px" }}>
                {missingSkills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "#fff7ed",
                      color: "#9a3412",
                      fontWeight: 500,
                    }}
                  >
                    <XCircle size={18} />
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Improvement Suggestions */}
          <section
            className="card"
            style={{
              padding: "26px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <div
                className="feature-icon"
                style={{
                  width: "42px",
                  height: "42px",
                  flexShrink: 0,
                }}
              >
                <Lightbulb size={23} />
              </div>

              <h2 style={{ margin: 0, fontSize: "22px" }}>
                Improvement Suggestions
              </h2>
            </div>

            <p
              style={{
                color: "#64748b",
                margin: "0 0 24px",
              }}
            >
              A few suggested areas to focus on next.
            </p>

            <div style={{ display: "grid", gap: "16px" }}>
              {suggestions.map((suggestion, index) => (
                <div
                  key={suggestion.title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "18px",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    background: "#ffffff",
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      minWidth: "34px",
                      borderRadius: "10px",
                      background: "#dbeafe",
                      color: "#1d4ed8",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: "2px 0 7px",
                        fontSize: "17px",
                      }}
                    >
                      {suggestion.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#64748b",
                        lineHeight: 1.6,
                      }}
                    >
                      {suggestion.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              paddingTop: "8px",
            }}
          >
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/resume-job")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <ArrowLeft size={18} />
              Edit Job Details
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/interview-setup")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Continue to Interview
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analysis;