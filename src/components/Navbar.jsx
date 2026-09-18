import { BriefcaseBusiness } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">

        <div className="brand">
          <div className="brand-icon">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <strong>NCS Career Coach</strong>
            <span>Powered for your career</span>
          </div>
        </div>

        <div className="nav-actions">
          <select defaultValue="English">
            <option>English</option>
            <option>Hindi</option>
            <option>Bengali</option>
          </select>

          <button className="btn btn-primary">
            Sign In
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;