// For now simple fake auth.

// Later CIS token validation comes here.

import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default ProtectedRoute;