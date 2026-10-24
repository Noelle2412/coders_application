import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/hooks";

/** Route wrapper that redirects unauthenticated users to the sign-in page. */

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign_in" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
