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
  // Estado para armazenar as credenciais do usuário
  const [credenciais, setCredenciais] = useState({
    email: "",
    password: "",
  });

  // Estado para armazenar a mensagem de sucesso ou erro
  // e o estado de erro
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  const navigate = useNavigate();

  // Função para lidar com o envio do formulário
  // e realizar o login do usuário
  async function handleSubmit(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    // Verifica se os campos estão preenchidos
    try {
      // Chama a API para entrar com as credenciais do usuário
      const resposta = await servicosApi.entrarUsuario(credenciais);

      // Armazena o token e o nome do usuário no localStorage
      localStorage.setItem("token", resposta.token);
      localStorage.setItem("userName", resposta.user.name);
      
      // Exibe mensagem de sucesso e redireciona para a página inicial
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
