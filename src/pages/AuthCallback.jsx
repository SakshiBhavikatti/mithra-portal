import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // Temporary auth until CAPM backend integration
      localStorage.setItem("isAuthenticated", "true");

      // Later:
      // send code to CAPM backend
      // receive JWT token

      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      Authenticating...
    </div>
  );
}

export default AuthCallback;