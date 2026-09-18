
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function FloatingBackButton({
  to = "/",
  label = "Back",
}) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className="floating-back-button"
    >
      <ArrowLeft size={18} />
      {label}
    </button>
  );
}