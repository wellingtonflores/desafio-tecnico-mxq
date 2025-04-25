import axios from "axios"; // Importa a biblioteca Axios para realizar requisições HTTP

// Configuração da API
const api = axios.create({
  baseURL: "https://login-api.mxqservices.com.br/users", // URL base da API
  headers: {
    "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
  },
});

// Interceptador de requisições para adicionar o token JWT automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Obtém o token do localStorage
  if (token) {
    config.headers["x-auth-token"] = token; // Adiciona o token no header da requisição
  }
  return config; // Retorna a configuração atualizada
});

// Objeto que encapsula os serviços da API
export const servicosApi = {
  // Serviço para cadastrar um novo usuário
  async cadastrarUsuario(dados) {
    try {
      const response = await api.post("/register", dados); // Envia os dados para o endpoint de registro
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error); // Loga o erro no console
      throw error.response.data; // Lança o erro para ser tratado no componente
    }
  },

  // Serviço para autenticar um usuário
  async entrarUsuario(credencias) {
    try {
      const response = await api.post("/login", credencias); // Envia as credenciais para o endpoint de login
      return response.data; // Retorna os dados da resposta (ex.: token JWT)
    } catch (error) {
      console.error("Erro ao entrar:", error); 
      throw error.response.data; 
    }
  },

  // Serviço para buscar a lista de usuários cadastrados
  async fetchUsuarios() {
    try {
      const response = await api.get("/all-users"); // Faz uma requisição GET para o endpoint de listagem de usuários
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error("Erro ao buscar usuários:", error); 
      throw error.response.data; 
    }
  },

  // Serviço para alterar a senha do usuário autenticado
  async mudarSenha(oldPassword, newPassword) {
    try {
      const response = await api.patch("/change-password", {
        oldPassword, // Senha antiga
        newPassword, // Nova senha
      });
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error("Erro ao mudar senha:", error); 
      throw error.response.data; 
    }
  },
};