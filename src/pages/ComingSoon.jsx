
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LockKeyhole, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Navbar />

      <main
        className="container"
        style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 16px",
          boxSizing: "border-box",
        }}
      >
        <section
          className="card"
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "clamp(28px, 5vw, 48px)",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "76px",
              height: "76px",
              margin: "0 auto 24px",
              borderRadius: "22px",
              background: "#eff6ff",
              color: "#2563eb",
              display: "grid",
              placeItems: "center",
            }}
          >
            <LockKeyhole size={36} />
          </div>

          <div
            className="badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              marginBottom: "18px",
            }}
          >
            <Sparkles size={15} />
            Coming Soon
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 38px)",
              color: "#172554",
              margin: "0 0 16px",
            }}
          >
            Sign In / Login
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.7,
              margin: "0 0 28px",
            }}
          >
            We're working on this feature!
            <br />
            Sign In / Login is currently under development.
            <br />
            Stay tuned for updates.
          </p>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/")}
            style={{
              minHeight: "52px",
              padding: "14px 24px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <ArrowLeft size={19} />
            Back to Home
          </button>
        </section>
      </main>
    </div>
  );
}

export default ComingSoon;