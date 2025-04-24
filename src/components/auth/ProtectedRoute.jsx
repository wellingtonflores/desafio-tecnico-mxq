import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const isAuth = Boolean(localStorage.getItem("token"));

  return isAuth ? children : <Navigate to="/entrar" replace />;
}
