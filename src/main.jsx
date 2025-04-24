import { StrictMode } from "react"; // Ativa verificações adicionais no modo de desenvolvimento
import { createRoot } from "react-dom/client"; // Cria a raiz para renderizar o React no DOM
import { createBrowserRouter, RouterProvider } from "react-router"; // Ferramentas para configurar rotas no React Router
import "./index.css"; // Importa os estilos globais
import App from "./App.jsx"; // Componente principal da aplicação
import RegisterForm from "./components/auth/RegisterForm.jsx"; // Tela de cadastro
import LoginForm from "./components/auth/LoginForm.jsx"; // Tela de login
import UserList from "./components/user/UserList.jsx"; // Tela de listagem de usuários
import ChangePassword from "./components/user/ChangePassword.jsx"; // Tela de alteração de senha
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx"; // Componente para proteger rotas

// Configuração das rotas da aplicação
let router = createBrowserRouter([
  {
    path: "/", // Rota raiz
    element: <App />, // Componente principal que envolve todas as rotas
    children: [
      {
        path: "/cadastro", // Rota para a tela de cadastro
        element: <RegisterForm />, // Renderiza o formulário de cadastro
      },
      {
        path: "/entrar", // Rota para a tela de login
        element: <LoginForm />, // Renderiza o formulário de login
      },
      {
        path: "/usuarios", // Rota para a listagem de usuários
        element: (
          <ProtectedRoute>
            <UserList /> {/* Protege a rota e renderiza a lista de usuários */}
          </ProtectedRoute>
        ),
      },
      {
        path: "/alterar-senha", // Rota para a tela de alteração de senha
        element: (
          <ProtectedRoute>
            <ChangePassword /> {/* Protege a rota e renderiza o formulário de alteração de senha */}
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

// Renderiza a aplicação no elemento com id "root" no DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provedor de rotas para gerenciar a navegação */}
  </StrictMode>
);