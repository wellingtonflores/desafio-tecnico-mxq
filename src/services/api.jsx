import axios from "axios";

// Configuração da API
const api = axios.create({
  baseURL: "https://login-api.mxqservices.com.br/users",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export const servicosApi = {
  async cadastrarUsuario(dados) {
    try {
      const response = await api.post("/register", dados);

      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      throw error.response.data;
    }
  },

  async entrarUsuario(credencias) {
    try {
      const response = await api.post("/login", credencias);
      return response.data;
    } catch (error) {
      console.error("Erro ao entrar:", error);
      throw error.response.data;
    }
  },

  async fetchUsuarios() {
    try {
      const response = await api.get("/all-users");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      throw error.response.data;
    }
  },

  async mudarSenha(oldPassword, newPassword) {
    try {
      const response = await api.patch("/change-password", {
        oldPassword,
        newPassword,
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao mudar senha:", error);
      throw error.response.data;
    }
  },
};
