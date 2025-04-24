import { Outlet, NavLink, useLocation, useNavigate } from "react-router"; // Importa ferramentas de roteamento
import { useEffect } from "react"; // Hook para lidar com efeitos colaterais

export default function App() {
  // Verifica se o usuário está autenticado ao verificar se o token existe no localStorage
  const isAuth = Boolean(localStorage.getItem("token"));
  const userName = localStorage.getItem("userName"); // Obtém o nome do usuário autenticado
  const location = useLocation(); // Hook para acessar a localização atual da rota
  const navigate = useNavigate(); // Hook para redirecionar o usuário para outra rota

  // Define as rotas em que a navbar não deve ser exibida ou que não devem ser acessadas por usuários autenticados
  const authPaths = ["/cadastro", "/entrar"];
  const hideNav = authPaths.includes(location.pathname); // Verifica se a rota atual está na lista de rotas restritas

  // Redireciona o usuário autenticado para a página inicial se ele tentar acessar as rotas de login ou cadastro
  useEffect(() => {
    if (isAuth && authPaths.includes(location.pathname)) {
      navigate("/", { replace: true }); // Redireciona para a página inicial
    }
  }, [isAuth, location.pathname, navigate]); // Dependências do efeito: reexecuta quando essas variáveis mudam

  // Função para deslogar o usuário
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token de autenticação
    localStorage.removeItem("userName"); // Remove o nome do usuário
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Exibe a navbar somente se a rota atual não estiver na lista de rotas restritas */}
      {!hideNav && (
        <nav className="bg-white shadow p-4 flex justify-center gap-6">
          {isAuth ? (
            <>
              {/* Links para usuários autenticados */}
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
              {/* Links para usuários não autenticados */}
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
        {/* Exibe uma mensagem de boas-vindas na página inicial */}
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
          <Outlet /> // Renderiza o conteúdo da rota atual
        )}
      </main>
    </div>
  );
}