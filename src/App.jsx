import { Outlet, NavLink, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export default function App() {
  // Verifica se o usuário está autenticado (ex: token no localStorage)
  const isAuth = Boolean(localStorage.getItem("token"));
  const userName = localStorage.getItem("userName");
  const location = useLocation();
  const navigate = useNavigate();

  // Rotas em que não queremos mostrar a navbar ou permitir acesso quando já logado
  const authPaths = ["/cadastro", "/entrar"];
  const hideNav = authPaths.includes(location.pathname);

  // Se já estiver logado e tentar acessar cadastro/entrar, redireciona para a home
  useEffect(() => {
    if (isAuth && authPaths.includes(location.pathname)) {
      navigate("/", { replace: true });
    }
  }, [isAuth, location.pathname, navigate]);

  // Função para deslogar
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!hideNav && (
        <nav className="bg-white shadow p-4 flex justify-center gap-6">
          {isAuth ? (
            <>
              <NavLink
                to="/usuarios"
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-sky-600" : "text-sky-500"
                  } hover:text-sky-600`
                }
              >
                Ver todos os usuários
              </NavLink>
              <NavLink
                to="/alterar-senha"
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-sky-600" : "text-sky-500"
                  } hover:text-sky-600`
                }
              >
                Alterar senha
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-lg font-medium text-sky-500 hover:text-sky-600"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/entrar"
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-sky-600" : "text-sky-500"
                  } hover:text-sky-600`
                }
              >
                Entrar
              </NavLink>
              <NavLink
                to="/cadastro"
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-sky-600" : "text-sky-500"
                  } hover:text-sky-600`
                }
              >
                Cadastrar
              </NavLink>
            </>
          )}
        </nav>
      )}
      <main className="flex-1 flex items-center justify-center">
        {location.pathname === "/" ? (
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-2">
              {isAuth
                ? `Bem-vindo ao nosso sistema, ${userName}!`
                : "Bem-vindo ao Sistema!"}
            </h1>
            <p className="text-gray-700">
              {isAuth
                ? "Agora você pode explora-lo pelo menu acima."
                : "Por favor, selecione uma opção no menu para continuar."}
            </p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
