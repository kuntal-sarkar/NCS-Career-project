
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Profile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    occupation: "",
    education: "",
    experience: "",
    skills: "",
    role: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("candidateProfile", JSON.stringify(form));
    navigate("/resume-job");
  };

  return (
    <div className="page">
      <Navbar />

      <main className="container" style={{ padding: "50px 0" }}>

        {/* Back Button */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/")}
          style={{ marginBottom: "25px" }}
        >
          ← Back to Home
        </button>

        <div className="badge">
          Step 1 of 8 · Candidate Profile
        </div>

        <h1>Let's get to know you</h1>

        <p style={{ color: "#64748b", margin: "12px 0 30px" }}>
          Tell us about yourself to personalize your career preparation.
        </p>

        <form
          onSubmit={handleSubmit}
          className="card"
          style={{
            maxWidth: "750px",
            display: "grid",
            gap: "20px",
          }}
        >
          {[
            ["name", "Full Name", "Enter your name"],
            ["email", "Email", "Enter your email"],
            ["occupation", "Current Occupation", "e.g. Student"],
            ["education", "Education", "e.g. B.Tech Computer Science"],
            ["experience", "Experience", "e.g. Fresher / 0–2 years"],
            ["skills", "Skills", "e.g. C++, Python, React"],
            ["role", "Preferred Job Role", "e.g. Software Developer"],
            ["location", "Preferred Location", "e.g. Kolkata"],
          ].map(([name, label, placeholder]) => (
            <label
              key={name}
              style={{
                display: "grid",
                gap: "8px",
                fontWeight: 600,
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
                  padding: "13px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "9px",
                  width: "100%",
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
      </main>
    </div>
  );
}

export default Profile;