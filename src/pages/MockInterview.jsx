
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Mic,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import Navbar from "../components/Navbar";

const QUESTIONS = [
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "Explain a project you have worked on.",
  "Why should we hire you for this role?",
  "Where do you see yourself in five years?",
];

function MockInterview() {
  const navigate = useNavigate();

  const questionSectionRef = useRef(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState(() =>
    QUESTIONS.map((question) => ({
      question,
      answer: "",
    }))
  );

  const setup = (() => {
    try {
      return JSON.parse(
        localStorage.getItem("interviewSetup") || "{}"
      );
    } catch {
      return {};
    }
  })();

  // On initial page load, go directly to the question area.
  useEffect(() => {
    localStorage.removeItem("interviewAnswers");

    const timer = requestAnimationFrame(() => {
      if (questionSectionRef.current) {
        const top =
          questionSectionRef.current.getBoundingClientRect().top +
          window.scrollY -
          20;

        window.scrollTo({
          top: Math.max(0, top),
          behavior: "instant",
        });
      }
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  const scrollToQuestion = () => {
    if (questionSectionRef.current) {
      const top =
        questionSectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        20;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    }
  };

  const currentAnswer =
    answers[currentQuestion]?.answer || "";

  const progress =
    ((currentQuestion + 1) / QUESTIONS.length) * 100;

  const saveCurrentAnswer = (value) => {
    setAnswers((previous) =>
      previous.map((item, index) =>
        index === currentQuestion
          ? {
              question: QUESTIONS[currentQuestion],
              answer: value,
            }
          : item
      )
    );
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
      scrollToQuestion();
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      scrollToQuestion();
    }
  };

  const handleFinish = () => {
    const finalAnswers = QUESTIONS.map(
      (question, index) => ({
        question,
        answer: answers[index]?.answer?.trim() || "",
      })
    );

    localStorage.setItem(
      "interviewAnswers",
      JSON.stringify(finalAnswers)
    );

    navigate("/feedback");
  };

  // Voice mode: Coming Soon
  if (setup.interviewMode === "voice") {
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
          <div style={{ marginBottom: "24px" }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/interview-setup")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <ArrowLeft size={18} />
              Back to Setup
            </button>
          </div>

          <section
            className="card"
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              padding: "clamp(28px, 5vw, 50px) 24px",
              textAlign: "center",
              background:
                "linear-gradient(135deg, #eff6ff, #ffffff)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#dbeafe",
                color: "#2563eb",
                display: "grid",
                placeItems: "center",
                margin: "0 auto 24px",
              }}
            >
              <Mic size={42} />
            </div>

            <span className="badge">VOICE INTERVIEW</span>

            <h1 style={{ marginTop: "20px" }}>
              Voice Interview
            </h1>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.7,
                maxWidth: "520px",
                margin: "14px auto",
              }}
            >
              Voice-based mock interviews are currently
              under development. Soon, you will be able
              to answer questions using your microphone.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#fff",
                border: "1px solid #dbeafe",
                borderRadius: "12px",
                padding: "14px 20px",
                marginTop: "14px",
                color: "#1d4ed8",
                fontWeight: 600,
              }}
            >
              <Mic size={20} />
              Coming Soon
            </div>

            <div style={{ marginTop: "28px" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/interview-setup")}
              >
                Back to Interview Options
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

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
        <div style={{ marginBottom: "24px" }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/interview-setup")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ArrowLeft size={18} />
            Back to Setup
          </button>
        </div>

        {/* Main Interview Card */}
        <section
          className="card"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "clamp(20px, 4vw, 38px)",
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span className="badge">MOCK INTERVIEW</span>

              <h1
                style={{
                  margin: "16px 0 8px",
                  fontSize: "clamp(26px, 4vw, 34px)",
                }}
              >
                Practice & Improve
              </h1>

              <p style={{ color: "#64748b", margin: 0 }}>
                Take your time and give your best answer.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f1f5f9",
                color: "#334155",
                padding: "10px 14px",
                borderRadius: "12px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              <Clock size={18} />
              Question {currentQuestion + 1} / {QUESTIONS.length}
            </div>
          </div>

          {/* Interview Details */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "22px",
            }}
          >
            {[
              setup.interviewType || "Technical",
              setup.difficulty || "Beginner",
              `${setup.duration || "10"} minutes`,
            ].map((item, index) => (
              <span
                key={`${item}-${index}`}
                style={{
                  background: "#eff6ff",
                  color: "#1d4ed8",
                  border: "1px solid #dbeafe",
                  borderRadius: "20px",
                  padding: "7px 13px",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Progress + Question area */}
          <div
            ref={questionSectionRef}
            style={{
              scrollMarginTop: "20px",
              marginTop: "30px",
            }}
          >
            {/* Progress */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#64748b",
                }}
              >
                <span>Interview Progress</span>

                <strong style={{ color: "#2563eb" }}>
                  {Math.round(progress)}%
                </strong>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "10px",
                  background: "#e2e8f0",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #2563eb, #60a5fa)",
                    borderRadius: "20px",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div
              style={{
                marginTop: "30px",
                padding: "clamp(20px, 3vw, 30px)",
                background:
                  "linear-gradient(135deg, #eff6ff, #f8fbff)",
                border: "1px solid #dbeafe",
                borderRadius: "18px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#2563eb",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.5px",
                  marginBottom: "14px",
                }}
              >
                <MessageSquare size={18} />
                QUESTION {currentQuestion + 1}
              </div>

              <h2
                style={{
                  fontSize: "clamp(21px, 3vw, 28px)",
                  lineHeight: 1.5,
                  margin: 0,
                  color: "#172554",
                }}
              >
                {QUESTIONS[currentQuestion]}
              </h2>
            </div>
          </div>

          {/* Answer Box */}
          <div style={{ marginTop: "30px" }}>
            <label
              htmlFor="answer"
              style={{
                display: "block",
                fontSize: "17px",
                fontWeight: 700,
                marginBottom: "12px",
                color: "#1e293b",
              }}
            >
              Your Answer
            </label>

            <textarea
              id="answer"
              value={currentAnswer}
              onChange={(event) =>
                saveCurrentAnswer(event.target.value)
              }
              placeholder="Start typing your answer here..."
              rows={8}
              style={{
                display: "block",
                width: "100%",
                minHeight: "220px",
                boxSizing: "border-box",
                padding: "20px 22px",
                border: "1px solid #cbd5e1",
                borderRadius: "14px",
                background: "#ffffff",
                color: "#0f172a",
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "inherit",
                resize: "vertical",
                outline: "none",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                marginTop: "12px",
                color: "#64748b",
                fontSize: "13px",
                lineHeight: 1.5,
              }}
            >
              <Lightbulb
                size={17}
                color="#2563eb"
                style={{ flexShrink: 0 }}
              />
              <span>
                Tip: Explain your answer clearly and use
                examples wherever possible.
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "30px",
              paddingTop: "24px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <button
              type="button"
              className="btn btn-secondary"
              disabled={currentQuestion === 0}
              onClick={handlePrevious}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor:
                  currentQuestion === 0
                    ? "not-allowed"
                    : "pointer",
                opacity: currentQuestion === 0 ? 0.6 : 1,
              }}
            >
              <ArrowLeft size={18} />
              Previous
            </button>

            {currentQuestion < QUESTIONS.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Next Question
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleFinish}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Finish Interview
                <CheckCircle size={18} />
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MockInterview;