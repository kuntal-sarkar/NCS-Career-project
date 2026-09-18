
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Mic,
  MessageSquare,
  Video,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";

function InterviewSetup() {
  const navigate = useNavigate();

  // Saved settings ko load karo; pehli baar defaults use honge.
  const [interviewType, setInterviewType] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("interviewSetup") || "null"
      );
      return saved?.interviewType || "Technical";
    } catch {
      return "Technical";
    }
  });

  const [difficulty, setDifficulty] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("interviewSetup") || "null"
      );
      return saved?.difficulty || "Beginner";
    } catch {
      return "Beginner";
    }
  });

  const [duration, setDuration] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("interviewSetup") || "null"
      );
      return saved?.duration || "10";
    } catch {
      return "10";
    }
  });

  const [interviewMode, setInterviewMode] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("interviewSetup") || "null"
      );
      return saved?.interviewMode || "voice";
    } catch {
      return "voice";
    }
  });

  // Har setting change hone par automatically save karo.
  useEffect(() => {
    const setup = {
      interviewType,
      difficulty,
      duration,
      interviewMode,
    };

    localStorage.setItem("interviewSetup", JSON.stringify(setup));
  }, [interviewType, difficulty, duration, interviewMode]);

  // Page open hote hi top par scroll karo.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStart = () => {
    const setup = {
      interviewType,
      difficulty,
      duration,
      interviewMode,
    };

    localStorage.setItem("interviewSetup", JSON.stringify(setup));

    // Har nayi interview ki shuruaat fresh answers se ho.
    localStorage.removeItem("interviewAnswers");

    navigate("/mock-interview");
  };

  const optionStyle = (selected) => ({
    width: "100%",
    minHeight: "58px",
    padding: "14px 18px",
    borderRadius: "12px",
    border: selected
      ? "2px solid #2563eb"
      : "1px solid #dbe3ef",
    background: selected ? "#eff6ff" : "#ffffff",
    color: selected ? "#1d4ed8" : "#334155",
    fontWeight: 600,
    fontSize: "15px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
  });

  const sectionStyle = {
    marginTop: "28px",
  };

  const sectionTitleStyle = {
    fontSize: "17px",
    fontWeight: 700,
    color: "#172554",
    marginBottom: "12px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "12px",
  };

  const modeStyle = (selected) => ({
    width: "100%",
    minHeight: "170px",
    padding: "24px 18px",
    borderRadius: "16px",
    border: selected
      ? "2px solid #2563eb"
      : "1px solid #dbe3ef",
    background: selected ? "#eff6ff" : "#ffffff",
    color: "#1e293b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    textAlign: "center",
    cursor: "pointer",
    boxSizing: "border-box",
  });

  return (
    <div className="page">
      <Navbar />

      <main
        className="container"
        style={{
          padding: "24px 16px 60px",
          boxSizing: "border-box",
        }}
      >
        {/* Back Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "24px",
          }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/analysis")}
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
            Back to Analysis
          </button>
        </div>

        {/* Page Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <div
            className="badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              marginBottom: "14px",
            }}
          >
            <Sparkles size={15} />
            Step 4 · Interview Preparation
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              margin: "0 0 12px",
              color: "#172554",
            }}
          >
            Interview Setup
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Customize your mock interview before you begin.
          </p>
        </div>

        {/* Main Setup Card */}
        <section
          className="card"
          style={{
            maxWidth: "900px",
            width: "100%",
            margin: "0 auto",
            padding: "clamp(20px, 4vw, 36px)",
            boxSizing: "border-box",
          }}
        >
          {/* Interview Type */}
          <div>
            <h2 style={sectionTitleStyle}>
              01. Interview Type
            </h2>

            <div style={gridStyle}>
              {["Technical", "HR", "Mixed"].map((type) => {
                const selected = interviewType === type;

                return (
                  <button
                    key={type}
                    type="button"
                    aria-pressed={selected}
                    style={optionStyle(selected)}
                    onClick={() => setInterviewType(type)}
                  >
                    {selected && <CheckCircle size={18} />}
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>
              02. Difficulty Level
            </h2>

            <div style={gridStyle}>
              {["Beginner", "Intermediate", "Advanced"].map(
                (level) => {
                  const selected = difficulty === level;

                  return (
                    <button
                      key={level}
                      type="button"
                      aria-pressed={selected}
                      style={optionStyle(selected)}
                      onClick={() => setDifficulty(level)}
                    >
                      {selected && <CheckCircle size={18} />}
                      {level}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Duration */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>
              03. Interview Duration
            </h2>

            <div style={gridStyle}>
              {["10", "15", "20"].map((minutes) => {
                const selected = duration === minutes;

                return (
                  <button
                    key={minutes}
                    type="button"
                    aria-pressed={selected}
                    style={optionStyle(selected)}
                    onClick={() => setDuration(minutes)}
                  >
                    <Clock size={17} />
                    {minutes} Minutes
                    {selected && <CheckCircle size={17} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interview Mode */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>
              04. Choose Interview Mode
            </h2>

            <p
              style={{
                color: "#64748b",
                margin: "-4px 0 16px",
                lineHeight: 1.6,
              }}
            >
              Select how you want to attend your mock interview.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "16px",
              }}
            >
              {/* Voice Mode */}
              <button
                type="button"
                aria-pressed={interviewMode === "voice"}
                style={modeStyle(interviewMode === "voice")}
                onClick={() => setInterviewMode("voice")}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "15px",
                    background:
                      interviewMode === "voice"
                        ? "#dbeafe"
                        : "#f1f5f9",
                    display: "grid",
                    placeItems: "center",
                    color: "#2563eb",
                  }}
                >
                  <Mic size={28} />
                </div>

                <strong style={{ fontSize: "17px" }}>
                  Voice Interview
                </strong>

                <span
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  Speak your answers using a microphone.
                </span>

                {interviewMode === "voice" && (
                  <span
                    style={{
                      color: "#2563eb",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    ✓ Selected
                  </span>
                )}
              </button>

              {/* Text Mode */}
              <button
                type="button"
                aria-pressed={interviewMode === "text"}
                style={modeStyle(interviewMode === "text")}
                onClick={() => setInterviewMode("text")}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "15px",
                    background:
                      interviewMode === "text"
                        ? "#dbeafe"
                        : "#f1f5f9",
                    display: "grid",
                    placeItems: "center",
                    color: "#2563eb",
                  }}
                >
                  <MessageSquare size={28} />
                </div>

                <strong style={{ fontSize: "17px" }}>
                  Text Interview
                </strong>

                <span
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  Type your answers in a text box.
                </span>

                {interviewMode === "text" && (
                  <span
                    style={{
                      color: "#2563eb",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    ✓ Selected
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Summary */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "22px",
              marginTop: "30px",
            }}
          >
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                margin: "0 0 18px",
                color: "#172554",
                fontSize: "18px",
              }}
            >
              <Video size={21} color="#2563eb" />
              Your Interview Summary
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "14px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  Interview Type
                </p>
                <strong>{interviewType}</strong>
              </div>

              <div>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  Difficulty
                </p>
                <strong>{difficulty}</strong>
              </div>

              <div>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  Duration
                </p>
                <strong>{duration} minutes</strong>
              </div>

              <div>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  Interview Mode
                </p>
                <strong>
                  {interviewMode === "voice" ? "Voice" : "Text"}
                </strong>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "100%",
              marginTop: "24px",
              minHeight: "54px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "16px",
            }}
            onClick={handleStart}
          >
            Start Mock Interview
            <ArrowRight size={19} />
          </button>
        </section>
      </main>
    </div>
  );
}

export default InterviewSetup;