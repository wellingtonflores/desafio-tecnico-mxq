import { useState } from "react";
import Input from "../commom/Input";
import { servicosApi } from "../../services/api";
import { useNavigate } from "react-router";
import FormTitle from "../commom/FormTitle";
import FormLink from "../commom/FormLink";
import SubmitButton from "../commom/SubmitButton";
import FormMessage from "../commom/FormMessage";
import FormContainer from "../commom/FormContainer";

export default function FormCadastro() {
  // Estado para armazenar os dados do formulário(nome, email e senha)
  const [dados, setDados] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Estado para exibir mensagens de sucesso ou erro
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  const navigate = useNavigate();

  // Função para lidar com o envio do formulário
  // e registrar o usuário
  async function handleSubmit(e) {
    e.preventDefault(); // Previne o comportamento padrão do form (recarregar a página)
    // Verifica se os campos estão preenchidos
    try {
      await servicosApi.cadastrarUsuario(dados);
      setMensagem("Usuário cadastrado com sucesso!");
      setErro(false);
      setTimeout(() => {
        navigate("/entrar");
      }, 1000);
    } catch (error) {
      setMensagem(error.message || "Erro ao cadastrar usuário");
      setErro(true);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-6 w-full">
        {/* flex flex-col: empilha em coluna */}
        {/* items-center: centraliza horizontalmente */}
        {/* gap-6: espaçamento de 1.5rem (24px) entre itens */}
        {/* w-full: largura 100% do container */}

        <FormTitle>Cadastre-se em nossa plataforma</FormTitle>

        <Input
          type="text"
          placeholder="Nome"
          value={dados.name}
          onChange={(e) => setDados({ ...dados, name: e.target.value })}
        />

        <Input
          type="email"
          placeholder="Email"
          value={dados.email}
          onChange={(e) => setDados({ ...dados, email: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Senha"
          value={dados.password}
          onChange={(e) => setDados({ ...dados, password: e.target.value })}
        />

        <SubmitButton>Cadastrar</SubmitButton>

        <FormLink
          questao="Você já possui conta?"
          linkTexto="Entre aqui"
          href="/entrar"
        />

        <FormMessage texto={mensagem} isError={erro} />
      </div>
    </FormContainer>
  );
}
