// For now simple fake auth.

// Later CIS token validation comes here.

import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   const isAuthenticated =
//     localStorage.getItem("isAuthenticated") === "true";

//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// }

// export default ProtectedRoute;

function ProtectedRoute({ children }) {
  return children;
}

export default ProtectedRoute;