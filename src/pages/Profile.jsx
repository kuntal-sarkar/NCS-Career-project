
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const emptyProfile = {
  name: "",
  email: "",
  occupation: "",
  education: "",
  experience: "",
  skills: "",
  role: "",
  location: "",
};

function Profile() {
  const navigate = useNavigate();

  // Form will always start blank
  const [form, setForm] = useState({ ...emptyProfile });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save profile for Dashboard and next pages
    localStorage.setItem(
      "candidateProfile",
      JSON.stringify(form)
    );

    navigate("/resume-job");
  };

  const fields = [
    ["name", "Full Name", "Enter your name"],
    ["email", "Email", "Enter your email"],
    ["occupation", "Current Occupation", "e.g. Student"],
    ["education", "Education", "e.g. B.Tech Computer Science"],
    ["experience", "Experience", "e.g. Fresher / 0–2 years"],
    ["skills", "Skills", "e.g. C++, Python, React"],
    ["role", "Preferred Job Role", "e.g. Software Developer"],
    ["location", "Preferred Location", "e.g. Kolkata"],
  ];

  return (
    <div className="page">
      <Navbar />

      <main
        className="container"
        style={{
          padding: "40px 0 60px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 16px",
            boxSizing: "border-box",
          }}
        >
          {/* Back Button */}
          <div style={{ marginBottom: "30px" }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </button>
          </div>

          {/* Centered Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <div
              className="badge"
              style={{
                display: "inline-block",
                marginBottom: "18px",
              }}
            >
              Step 1 of 8 · Candidate Profile
            </div>

            <h1 style={{ margin: 0 }}>
              Let's get to know you
            </h1>

            <p
              style={{
                color: "#64748b",
                margin: "12px 0 0",
                lineHeight: 1.6,
              }}
            >
              Tell us about yourself to personalize your career preparation.
            </p>
          </div>

          {/* Centered Form */}
          <form
            onSubmit={handleSubmit}
            className="card"
            style={{
              width: "100%",
              maxWidth: "750px",
              margin: "0 auto",
              display: "grid",
              gap: "20px",
              boxSizing: "border-box",
            }}
          >
            {fields.map(([name, label, placeholder]) => (
              <label
                key={name}
                style={{
                  display: "grid",
                  gap: "8px",
                  fontWeight: 600,
                  minWidth: 0,
                }}
              >
                {label}

                <input
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  type={name === "email" ? "email" : "text"}
                  style={{
                    width: "100%",
                    minWidth: 0,
                    boxSizing: "border-box",
                    padding: "13px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "9px",
                    fontSize: "16px",
                  }}
                />
              </label>
            ))}

            <button
              className="btn btn-primary"
              type="submit"
            >
              Save & Continue →
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Profile;