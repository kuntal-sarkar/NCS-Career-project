
import {
  BrainCircuit,
  FileSearch,
  Target,
  Mic,
  Languages,
  ShieldCheck,
  ArrowRight,
  LayoutDashboard,
  Sparkles,
  CheckCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: BrainCircuit,
      title: "AI Mock Interview",
      text: "Practice realistic interview questions and improve your answers.",
    },
    {
      icon: FileSearch,
      title: "Resume–Job Fit",
      text: "Understand how well your profile matches your target role.",
    },
    {
      icon: Target,
      title: "Skill Gap Analysis",
      text: "Identify the skills you need to improve for your target job.",
    },
    {
      icon: Mic,
      title: "Voice Practice",
      text: "Build confidence by practicing your answers with voice mode.",
    },
    {
      icon: Languages,
      title: "Multilingual",
      text: "Practice and learn in English, Hindi, or Bengali.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy First",
      text: "Designed with privacy and security in mind.",
    },
  ];

  const scrollToFeatures = () => {
    document
      .querySelector(".features-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <Navbar />

      <main style={{ margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <section
          className="hero"
          style={{
            position: "relative",
            overflow: "hidden",
            margin: 0,
            padding: "0",
          }}
        >
          <div
            className="container hero-content"
            style={{
              paddingTop: "16px",
              paddingBottom: "50px",
              alignItems: "center",
              gap: "40px",
              marginTop: 0,
              boxSizing: "border-box",
            }}
          >
            {/* Hero Text */}
            <div
              className="hero-text"
              style={{
                flex: "1 1 450px",
                minWidth: 0,
              }}
            >
              <div
                className="badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "22px",
                }}
              >
                <Sparkles size={16} />
                AI-Powered Career Preparation
              </div>

              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 58px)",
                  lineHeight: 1.12,
                  letterSpacing: "-1.5px",
                  margin: "0 0 22px",
                  color: "#172554",
                }}
              >
                Prepare smarter.
                <br />
                <span style={{ color: "#2563eb" }}>
                  Interview better.
                </span>
              </h1>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  maxWidth: "520px",
                  margin: "0 0 28px",
                }}
              >
                NCS Career Coach helps job seekers prepare for interviews,
                understand their skills, and become more job-ready.
              </p>

              {/* Action Buttons */}
              <div
                className="hero-buttons"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <button
                  type="button"
                  className="btn btn-primary hero-btn"
                  onClick={() => navigate("/profile")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "9px",
                  }}
                >
                  Start Free Assessment
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  className="btn btn-secondary hero-btn"
                  onClick={scrollToFeatures}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Explore Features
                </button>

                <button
                  type="button"
                  className="btn btn-secondary hero-btn"
                  onClick={() => navigate("/dashboard")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </button>
              </div>

              {/* Trust Points */}
              <div
                className="trust-row"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "18px",
                  marginTop: "28px",
                  color: "#475569",
                  fontSize: "14px",
                }}
              >
                <span>
                  <CheckCircle
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "5px",
                      color: "#2563eb",
                    }}
                  />
                  Free to start
                </span>

                <span>
                  <CheckCircle
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "5px",
                      color: "#2563eb",
                    }}
                  />
                  Mobile friendly
                </span>

                <span>
                  <CheckCircle
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "5px",
                      color: "#2563eb",
                    }}
                  />
                  Multilingual
                </span>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div
              className="hero-card"
              style={{
                flex: "1 1 400px",
                width: "100%",
                maxWidth: "480px",
                minWidth: 0,
              }}
            >
              <div
                className="dashboard-preview"
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbeafe",
                  borderRadius: "24px",
                  padding: "clamp(22px, 4vw, 32px)",
                  boxShadow: "0 20px 55px rgba(37, 99, 235, 0.12)",
                }}
              >
                {/* Preview Header */}
                <div
                  className="preview-top"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "18px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        color: "#64748b",
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      Career Readiness
                    </span>

                    <strong
                      style={{
                        fontSize: "34px",
                        color: "#172554",
                      }}
                    >
                      76%
                    </strong>
                  </div>

                  <div
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "18px",
                      background: "#eff6ff",
                      display: "grid",
                      placeItems: "center",
                      color: "#2563eb",
                    }}
                  >
                    <BrainCircuit size={30} />
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  className="progress-track"
                  style={{
                    width: "100%",
                    height: "10px",
                    background: "#e2e8f0",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginBottom: "26px",
                  }}
                >
                  <div
                    className="progress-fill"
                    style={{
                      width: "76%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, #60a5fa, #2563eb)",
                      borderRadius: "20px",
                    }}
                  />
                </div>

                {/* Skill Preview */}
                <div
                  className="preview-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "12px",
                  }}
                >
                  {[
                    { label: "Technical", score: 81 },
                    { label: "Communication", score: 74 },
                    { label: "Confidence", score: 69 },
                    { label: "Problem Solving", score: 78 },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "14px",
                        padding: "16px",
                        minWidth: 0,
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          color: "#64748b",
                          fontSize: "13px",
                          marginBottom: "8px",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {item.label}
                      </span>

                      <strong
                        style={{
                          fontSize: "25px",
                          color: "#172554",
                        }}
                      >
                        {item.score}
                      </strong>

                      <span
                        style={{
                          color: "#94a3b8",
                          fontSize: "12px",
                        }}
                      >
                        /100
                      </span>
                    </div>
                  ))}
                </div>

                {/* AI Recommendation */}
                <div
                  className="preview-message"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "13px",
                    marginTop: "22px",
                    padding: "18px",
                    background: "#eff6ff",
                    border: "1px solid #dbeafe",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "38px",
                      height: "38px",
                      borderRadius: "12px",
                      background: "#dbeafe",
                      display: "grid",
                      placeItems: "center",
                      color: "#2563eb",
                    }}
                  >
                    <BrainCircuit size={21} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <strong
                      style={{
                        display: "block",
                        color: "#1e40af",
                        marginBottom: "6px",
                        fontSize: "14px",
                      }}
                    >
                      AI Recommendation
                    </strong>

                    <p
                      style={{
                        margin: 0,
                        color: "#475569",
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      Practice communication and React fundamentals.
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "11px",
                    textAlign: "center",
                    margin: "16px 0 0",
                  }}
                >
                  Sample dashboard preview
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="features-section"
          style={{
            padding: "60px 0",
            background: "#ffffff",
          }}
        >
          <div className="container">
            {/* Section Heading */}
            <div
              className="section-heading"
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto 42px",
              }}
            >
              <div
                className="badge"
                style={{
                  display: "inline-flex",
                  marginBottom: "16px",
                }}
              >
                Everything you need
              </div>

              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 36px)",
                  lineHeight: 1.25,
                  color: "#172554",
                  margin: "0 0 16px",
                }}
              >
                Your personal career preparation assistant
              </h2>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                From resume analysis to mock interviews, prepare for your
                next opportunity in one place.
              </p>
            </div>

            {/* Feature Cards */}
            <div
              className="grid grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    className="card feature-card"
                    key={feature.title}
                    style={{
                      padding: "26px",
                      borderRadius: "20px",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 6px 22px rgba(15, 23, 42, 0.04)",
                      transition:
                        "transform 0.2s ease, box-shadow 0.2s ease",
                      minWidth: 0,
                    }}
                  >
                    <div
                      className="feature-icon"
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "16px",
                        background: "#eff6ff",
                        display: "grid",
                        placeItems: "center",
                        color: "#2563eb",
                        marginBottom: "20px",
                      }}
                    >
                      <Icon size={25} />
                    </div>

                    <h3
                      style={{
                        fontSize: "18px",
                        color: "#172554",
                        margin: "0 0 10px",
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "14px",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div
              style={{
                textAlign: "center",
                marginTop: "45px",
              }}
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/profile")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Start Your Assessment
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;