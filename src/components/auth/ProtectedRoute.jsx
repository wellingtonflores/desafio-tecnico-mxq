import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  // Verifica se o usuário está autenticado ao verificar se o token existe no localStorage
  const isAuth = Boolean(localStorage.getItem("token"));

  // Se o usuário estiver autenticado, renderiza os componentes filhos (children)
  // Caso contrário, redireciona para a página de login (rota "/entrar")
  return isAuth ? children : <Navigate to="/entrar" replace />;
}
