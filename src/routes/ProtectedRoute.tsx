import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = Cookies.get("authToken"); // Get token from cookies

  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
