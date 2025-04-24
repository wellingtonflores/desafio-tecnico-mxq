import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import RegisterForm from "./components/auth/RegisterForm.jsx";
import LoginForm from "./components/auth/LoginForm.jsx";
import UserList from "./components/user/UserList.jsx";
import ChangePassword from "./components/user/ChangePassword.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cadastro",
        element: <RegisterForm />,
      },
      {
        path: "/entrar",
        element: <LoginForm />,
      },
      {
        path: "/usuarios",
        element: (
          <ProtectedRoute>
            <UserList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/alterar-senha",
        element: (
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
