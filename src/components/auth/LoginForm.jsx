import { useState } from "react";
import { servicosApi } from "../../services/api";
import Input from "../commom/Input";
import { useNavigate } from "react-router";
import FormTitle from "../commom/FormTitle";
import SubmitButton from "../commom/SubmitButton";
import FormMessage from "../commom/FormMessage";
import FormLink from "../commom/FormLink";
import FormContainer from "../commom/FormContainer";

export default function FormEntrar() {
  const [credenciais, setCredenciais] = useState({
    email: "",
    password: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resposta = await servicosApi.entrarUsuario(credenciais);
      localStorage.setItem("token", resposta.token);
      localStorage.setItem("userName", resposta.user.name);
      setMensagem("Login realizado com sucesso!");
      setErro(false);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Erro ao entrar:", error);
      setMensagem(error.message || "Erro ao entrar");
      setErro(true);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-10 w-full">
        {/* flex flex-col: empilha em coluna */}
        {/* items-center: centraliza horizontalmente */}
        {/* gap-6: espaçamento de 1.5rem (24px) entre itens */}
        {/* w-full: largura 100% do container */}

        <FormTitle>Entre em nossa plataforma</FormTitle>

        <Input
          type="email"
          placeholder="Email"
          value={credenciais.email}
          onChange={(e) =>
            setCredenciais({ ...credenciais, email: e.target.value })
          }
        />

        <Input
          type="password"
          placeholder="Senha"
          value={credenciais.password}
          onChange={(e) =>
            setCredenciais({ ...credenciais, password: e.target.value })
          }
        />

        <SubmitButton>Entrar</SubmitButton>
        <FormLink
          questao="Você não possui cadastro?"
          href="/cadastro"
          linkTexto="Cadastre-se aqui"
        ></FormLink>

        <FormMessage texto={mensagem} isError={erro} />
      </div>
    </FormContainer>
  );
}
