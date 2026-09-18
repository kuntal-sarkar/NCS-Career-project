
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  LayoutDashboard,
  RotateCcw,
  MessageSquare,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export default function Feedback() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);

  // Always start Feedback page from the top.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    try {
      const savedAnswers = JSON.parse(
        localStorage.getItem("interviewAnswers") || "[]"
      );

      setAnswers(Array.isArray(savedAnswers) ? savedAnswers : []);
    } catch (error) {
      console.error("Unable to load interview answers:", error);
      setAnswers([]);
    }
  }, []);

  const score = 78;

  const feedbackPoints = [
    {
      title: "Communication",
      description:
        "Your answers show a good understanding. Try to explain your points more clearly and confidently.",
    },
    {
      title: "Technical Knowledge",
      description:
        "You have a basic understanding of the topics. Practice explaining concepts with practical examples.",
    },
    {
      title: "Answer Structure",
      description:
        "Try using a clear structure: explain the situation, your approach, and the result.",
    },
  ];

  const getQuestion = (item, index) => {
    if (typeof item === "string") {
      return `Question ${index + 1}`;
    }

    return item?.question || `Question ${index + 1}`;
  };

  const getAnswer = (item) => {
    if (typeof item === "string") {
      return item.trim();
    }

    const answer = item?.answer ?? item?.response ?? "";

    return typeof answer === "string" ? answer.trim() : "";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f8ff",
        padding: "24px 20px 60px",
        color: "#172554",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
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
            onClick={() => navigate("/mock-interview")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              border: "1px solid #dbeafe",
              borderRadius: "12px",
              background: "#ffffff",
              color: "#1d4ed8",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(30, 64, 175, 0.08)",
            }}
          >
            <ArrowLeft size={18} />
            Back to Interview
          </button>
        </div>

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              margin: "0 auto 18px",
              borderRadius: "20px",
              background: "#dbeafe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563eb",
            }}
          >
            <TrendingUp size={32} />
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              margin: "0 0 12px",
              fontWeight: "800",
              color: "#172554",
            }}
          >
            Interview Feedback
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            Review your performance and find ways to improve.
          </p>
        </div>

        {/* Score Card */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "32px 20px",
            textAlign: "center",
            marginBottom: "24px",
            boxShadow: "0 8px 25px rgba(15, 23, 42, 0.04)",
          }}
        >
          <p
            style={{
              color: "#64748b",
              fontWeight: "600",
              margin: "0 0 14px",
            }}
          >
            Your Demo Performance Score
          </p>

          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#2563eb",
              lineHeight: 1.2,
            }}
          >
            {score}
            <span
              style={{
                fontSize: "24px",
                color: "#94a3b8",
              }}
            >
              /100
            </span>
          </div>

          <div
            style={{
              maxWidth: "420px",
              height: "10px",
              borderRadius: "20px",
              background: "#e2e8f0",
              margin: "22px auto 14px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${score}%`,
                height: "100%",
                background: "linear-gradient(90deg, #3b82f6, #2563eb)",
                borderRadius: "20px",
              }}
            />
          </div>

          <p
            style={{
              margin: 0,
              color: "#475569",
              fontSize: "14px",
            }}
          >
            This is a sample score for the current prototype.
          </p>
        </div>

        {/* Feedback Section */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "28px",
            marginBottom: "24px",
            boxShadow: "0 8px 25px rgba(15, 23, 42, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              margin: "0 0 22px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CheckCircle color="#2563eb" size={24} />
            Performance Feedback
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(220px, 100%), 1fr)",
              gap: "16px",
            }}
          >
            {feedbackPoints.map((point, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    margin: "0 0 10px",
                    color: "#1e40af",
                  }}
                >
                  {point.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Answers Section */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "28px",
            marginBottom: "30px",
            boxShadow: "0 8px 25px rgba(15, 23, 42, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              margin: "0 0 22px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <MessageSquare color="#2563eb" size={24} />
            Your Interview Answers
          </h2>

          {answers.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {answers.map((item, index) => {
                const question = getQuestion(item, index);
                const answer = getAnswer(item);

                return (
                  <div
                    key={index}
                    style={{
                      padding: "18px",
                      borderRadius: "14px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 10px",
                        fontSize: "15px",
                        color: "#1e40af",
                      }}
                    >
                      Q{index + 1}. {question}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: answer ? "#475569" : "#dc2626",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {answer || "Didn't provide any answer."}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "30px 15px",
                background: "#f8fafc",
                borderRadius: "16px",
                color: "#64748b",
                border: "1px dashed #cbd5e1",
              }}
            >
              <MessageSquare
                size={32}
                style={{
                  marginBottom: "12px",
                  color: "#94a3b8",
                }}
              />

              <h3
                style={{
                  margin: "0 0 8px",
                  color: "#334155",
                  fontSize: "17px",
                }}
              >
                No interview questions found
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Start a mock interview to see your questions and
                answers here.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Buttons */}
        <div
          className="feedback-actions"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => navigate("/interview-setup")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "9px",
              padding: "14px 22px",
              border: "none",
              borderRadius: "12px",
              background: "#2563eb",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              minWidth: "190px",
            }}
          >
            <RotateCcw size={18} />
            Practice Again
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "9px",
              padding: "14px 22px",
              border: "1px solid #bfdbfe",
              borderRadius: "12px",
              background: "#ffffff",
              color: "#1d4ed8",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              minWidth: "190px",
            }}
          >
            <LayoutDashboard size={18} />
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}