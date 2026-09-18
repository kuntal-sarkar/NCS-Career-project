import {
  BrainCircuit,
  FileSearch,
  Target,
  Mic,
  Languages,
  ShieldCheck,
  ArrowRight,
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

  return (
    <div className="page">
      <Navbar />

      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <div className="badge">
                AI-Powered Career Preparation
              </div>

              <h1>
                Prepare smarter.
                <br />
                <span>Interview better.</span>
              </h1>

              <p>
                NCS Career Coach helps job seekers prepare for interviews,
                understand their skills, and become more job-ready.
              </p>

              <div className="hero-buttons">
                <button
                  className="btn btn-primary hero-btn"
                  onClick={() => navigate("/profile")}
                >
                  Start Free Assessment
                  <ArrowRight size={18} />
                </button>

                <button className="btn btn-secondary hero-btn">
                  Explore Features
                </button>
              </div>

              <div className="trust-row">
                <span>✓ Free to start</span>
                <span>✓ Mobile friendly</span>
                <span>✓ Multilingual</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="dashboard-preview">
                <div className="preview-top">
                  <span>Career Readiness</span>
                  <strong>76%</strong>
                </div>

                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>

                <div className="preview-grid">
                  <div>
                    <span>Technical</span>
                    <strong>81</strong>
                  </div>

                  <div>
                    <span>Communication</span>
                    <strong>74</strong>
                  </div>

                  <div>
                    <span>Confidence</span>
                    <strong>69</strong>
                  </div>

                  <div>
                    <span>Problem Solving</span>
                    <strong>78</strong>
                  </div>
                </div>

                <div className="preview-message">
                  <BrainCircuit size={20} />

                  <div>
                    <strong>AI Recommendation</strong>
                    <p>
                      Practice communication and React fundamentals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <div className="section-heading">
              <div className="badge">Everything you need</div>

              <h2>Your personal career preparation assistant</h2>

              <p>
                From resume analysis to mock interviews, prepare for your
                next opportunity in one place.
              </p>
            </div>

            <div className="grid grid-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="card feature-card" key={feature.title}>
                    <div className="feature-icon">
                      <Icon size={24} />
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;