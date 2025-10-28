import { Navigate } from "react-router-dom";
import ROUTES from "@/lib/routes";

// Example: Replace with your real auth logic
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export default function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to={ROUTES.LOGIN} replace />;
}
