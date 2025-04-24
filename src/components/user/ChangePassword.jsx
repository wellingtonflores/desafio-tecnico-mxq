import Input from "../commom/Input";
import SubmitButton from "../commom/SubmitButton";
import FormMessage from "../commom/FormMessage";
import { servicosApi } from "/src/services/api";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function ChangePassword() {
  const userName = localStorage.getItem("userName");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const resposta = await servicosApi.mudarSenha(senhaAtual, novaSenha);
      localStorage.setItem("token", resposta.token);
      setMensagem("Senha alterada com sucesso!");
      setErro(false);
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        navigate("/entrar");
      }, 1000);
    } catch (error) {
      console.error("Erro ao alterar a senha:", error);
      setMensagem(error.message || "Erro ao alterar a senha");
      setErro(true);
    }
  }
  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-2xl my-5">
      <h2 className="text-2xl font-bold mb-4">Alterar Senha de {userName}</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="senhaAtual"
            className="block text-sm font-medium text-gray-700"
          >
            Senha Atual
          </label>
          <Input
            type="password"
            id="senhaAtual"
            value={senhaAtual}
            onChange={(e) => {
              setSenhaAtual(e.target.value);
              setMensagem("");
            }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="novaSenha"
            className="block text-sm font-medium text-gray-700"
          >
            Nova Senha
          </label>
          <Input
            type="password"
            id="novaSenha"
            value={novaSenha}
            onChange={(e) => {
              setNovaSenha(e.target.value);
              setMensagem("");
            }}
            required
          />
        </div>
        <SubmitButton>Alterar Senha</SubmitButton>
        <FormMessage texto={mensagem} isError={erro} />
      </form>
    </div>
  );
}
