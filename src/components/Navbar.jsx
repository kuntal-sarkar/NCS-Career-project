
import { BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Brand */}
        <div
          className="brand"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <div className="brand-icon">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <strong>NCS Career Coach</strong>
            <span>Powered for your career</span>
          </div>
        </div>

        {/* Navbar Actions */}
        <div className="nav-actions">
          <select defaultValue="English" aria-label="Select language">
            <option>English</option>
            <option>Hindi</option>
            <option>Bengali</option>
            <option>Marathi</option>
            <option>Tamil</option>
          </select>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Sign In / Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;