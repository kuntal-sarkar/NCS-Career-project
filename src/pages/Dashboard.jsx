
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    FileText,
    BriefcaseBusiness,
    Mic,
    MessageSquare,
    UserRound,
    GraduationCap,
    Code2,
    MapPin,
    Mail,
    ArrowRight,
    Pencil,
    LayoutDashboard,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    const navigate = useNavigate();

    // Dashboard open hote hi page ko top par le jao
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    // Safely read saved data from localStorage
    const readStorage = (key, fallback) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch {
            return fallback;
        }
    };

    const candidateProfile = readStorage("candidateProfile", {});
    const jobSelection = readStorage("jobSelection", {});
    const interviewSetup = readStorage("interviewSetup", {});
    const answers = readStorage("interviewAnswers", []);

    const answeredCount = Array.isArray(answers)
        ? answers.filter(
            (answer) =>
                typeof answer === "string" && answer.trim()
        ).length
        : 0;

    const profileFields = [
        {
            icon: UserRound,
            title: "Full Name",
            value: candidateProfile.name,
        },
        {
            icon: Mail,
            title: "Email",
            value: candidateProfile.email,
        },
        {
            icon: GraduationCap,
            title: "Education",
            value: candidateProfile.education,
        },
        {
            icon: BriefcaseBusiness,
            title: "Current Occupation",
            value: candidateProfile.occupation,
        },
        {
            icon: Code2,
            title: "Skills",
            value: candidateProfile.skills,
        },
        {
            icon: BriefcaseBusiness,
            title: "Experience",
            value: candidateProfile.experience,
        },
        {
            icon: MapPin,
            title: "Preferred Location",
            value: candidateProfile.location,
        },
        {
            icon: BriefcaseBusiness,
            title: "Preferred Job Role",
            value: candidateProfile.role,
        },
    ];

    const careerCards = [
        {
            icon: BriefcaseBusiness,
            title: "Selected Job Role",
            value: jobSelection.role || "Not selected yet",
            detail: jobSelection.location || "Location not added",
        },
        {
            icon: FileText,
            title: "Resume",
            value: jobSelection.resumeName || "No resume selected",
            detail: "Selected resume",
        },
        {
            icon: Mic,
            title: "Interview Setup",
            value: interviewSetup.interviewType || "Not configured",
            detail: interviewSetup.interviewMode
                ? `${interviewSetup.interviewMode} mode`
                : "Mode not selected",
        },
        {
            icon: MessageSquare,
            title: "Interview Progress",
            value: `${answeredCount} / 5 answers completed`,
            detail: "Based on your saved text interview answers",
        },
    ];

    const cardStyle = {
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "22px",
        minWidth: 0,
        boxSizing: "border-box",
        boxShadow: "0 5px 18px rgba(15, 23, 42, 0.03)",
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
        gap: "16px",
    };

    const iconStyle = {
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        background: "#eff6ff",
        color: "#2563eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    };

    return (
        <div className="page">
            <Navbar />

            <main
                className="container"
                style={{
                    padding: "32px 0 60px",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        width: "100%",
                        margin: "0 auto",
                        padding: "0 16px",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Back Button */}
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
                            onClick={() => navigate("/")}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                padding: "12px 18px",
                                background: "#ffffff",
                                border: "1px solid #bfdbfe",
                                borderRadius: "12px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <ArrowLeft size={18} />
                            Back to Home
                        </button>
                    </div>

                    {/* Dashboard Header */}
                    <section
                        style={{
                            background:
                                "linear-gradient(135deg, #eff6ff 0%, #ffffff 75%)",
                            border: "1px solid #dbeafe",
                            borderRadius: "20px",
                            padding: "30px",
                            marginBottom: "28px",
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "18px",
                            }}
                        >
                            <div style={iconStyle}>
                                <LayoutDashboard size={24} />
                            </div>

                            <span
                                style={{
                                    color: "#2563eb",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                }}
                            >
                                YOUR CAREER OVERVIEW
                            </span>
                        </div>

                        <h1
                            style={{
                                fontSize: "clamp(28px, 4vw, 38px)",
                                margin: "0 0 10px",
                                color: "#0f172a",
                            }}
                        >
                            Your Dashboard
                        </h1>

                        <p
                            style={{
                                color: "#64748b",
                                margin: 0,
                                lineHeight: 1.7,
                                maxWidth: "650px",
                            }}
                        >
                            Keep track of your profile, job preferences,
                            and interview preparation progress in one place.
                        </p>
                    </section>

                    {/* Candidate Profile */}
                    <section style={{ marginBottom: "36px" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "14px",
                                flexWrap: "wrap",
                                marginBottom: "18px",
                            }}
                        >
                            <div>
                                <h2
                                    style={{
                                        margin: "0 0 6px",
                                        fontSize: "24px",
                                    }}
                                >
                                    Candidate Profile
                                </h2>

                                <p
                                    style={{
                                        color: "#64748b",
                                        margin: 0,
                                    }}
                                >
                                    Your personal and professional details
                                </p>
                            </div>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate("/profile")}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                }}
                            >
                                <Pencil size={16} />
                                Edit Profile
                            </button>
                        </div>

                        <div style={gridStyle}>
                            {profileFields.map((field) => {
                                const Icon = field.icon;

                                return (
                                    <div
                                        key={field.title}
                                        style={cardStyle}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "14px",
                                            }}
                                        >
                                            <div style={iconStyle}>
                                                <Icon size={22} />
                                            </div>

                                            <div style={{ minWidth: 0, flex: 1 }}>
                                                <h3
                                                    style={{
                                                        fontSize: "15px",
                                                        color: "#64748b",
                                                        margin: "2px 0 8px",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {field.title}
                                                </h3>

                                                <p
                                                    style={{
                                                        margin: 0,
                                                        color: "#0f172a",
                                                        fontSize: "16px",
                                                        fontWeight: 600,
                                                        lineHeight: 1.5,
                                                        overflowWrap: "anywhere",
                                                    }}
                                                >
                                                    {field.value || "Not added yet"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Career Preparation */}
                    <section style={{ marginBottom: "32px" }}>
                        <div style={{ marginBottom: "18px" }}>
                            <h2
                                style={{
                                    margin: "0 0 6px",
                                    fontSize: "24px",
                                }}
                            >
                                Career Preparation
                            </h2>

                            <p
                                style={{
                                    color: "#64748b",
                                    margin: 0,
                                }}
                            >
                                Your resume, job selection, and interview status
                            </p>
                        </div>

                        <div style={gridStyle}>
                            {careerCards.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        style={cardStyle}
                                    >
                                        <div style={iconStyle}>
                                            <Icon size={24} />
                                        </div>

                                        <h3
                                            style={{
                                                margin: "18px 0 8px",
                                                fontSize: "18px",
                                                color: "#0f172a",
                                            }}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            style={{
                                                margin: 0,
                                                fontSize: "16px",
                                                fontWeight: 600,
                                                color: "#1e293b",
                                                lineHeight: 1.5,
                                                overflowWrap: "anywhere",
                                            }}
                                        >
                                            {item.value}
                                        </p>

                                        <p
                                            style={{
                                                margin: "8px 0 0",
                                                color: "#64748b",
                                                fontSize: "14px",
                                                lineHeight: 1.5,
                                                overflowWrap: "anywhere",
                                            }}
                                        >
                                            {item.detail}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Bottom Actions */}
                    <section
                        style={{
                            ...cardStyle,
                            background: "#f8fafc",
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    margin: "0 0 8px",
                                    fontSize: "22px",
                                }}
                            >
                                Ready to keep going?
                            </h2>

                            <p
                                style={{
                                    margin: 0,
                                    color: "#64748b",
                                    lineHeight: 1.6,
                                }}
                            >
                                Continue practicing or review your interview feedback.
                            </p>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                flexWrap: "wrap",
                            }}
                        >
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => navigate("/interview-setup")}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                    minHeight: "48px",
                                }}
                            >
                                Continue Interview Preparation
                                <ArrowRight size={18} />
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate("/feedback")}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                    minHeight: "48px",
                                }}
                            >
                                View Feedback
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}