# Desafio Técnico Wellington

Este é um projeto desenvolvido como parte de um desafio técnico. Ele consiste em uma aplicação web para cadastro, login, listagem de usuários e alteração de senha, utilizando React, React Router, Tailwind CSS e integração com uma API.

---

## Configuração e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Gerenciador de pacotes (npm ou yarn)

### Passos para executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/wellingtonflores/desafio-tecnico-mxq
   cd desafio-tecnico-mxq

2. Instale as dependências:
   npm install

3. Inicie o servidor de desenvolvimento:
    npm run dev

4. Acesse a aplicação no navegador em http://localhost:5173.

---

## Processo de Desenvolvimento

### Abordagem Geral

1. **Planejamento**:
   - Analisei os requisitos do desafio e dividi as tarefas em etapas menores, seguindo a ordem de complexidade sugerida.
   - Decidi utilizar React com React Router para gerenciar as rotas e Tailwind CSS para estilização, visando agilidade no desenvolvimento.

2. **Implementação**:
   - Comecei pela criação da estrutura básica do projeto utilizando o Vite, que oferece um ambiente rápido para desenvolvimento.
   - Desenvolvi os componentes reutilizáveis para formulários e mensagens, garantindo consistência visual e facilidade de manutenção.
   - Implementei as funcionalidades principais (cadastro, login, listagem de usuários e alteração de senha) de forma incremental, testando cada etapa antes de avançar.

3. **Dificuldades e Soluções**:
   - **Autenticação JWT**: Inicialmente, tive dúvidas sobre como armazenar e utilizar o token JWT. Após pesquisa, optei por armazená-lo no `localStorage` e utilizá-lo nos headers das requisições protegidas.
   - **Proteção de Rotas**: Pesquisei sobre o uso de `React Router` para implementar rotas protegidas e criei o componente `ProtectedRoute` para encapsular essa lógica.
   - **Estilização**: Para garantir um design responsivo e consistente, utilizei Tailwind CSS, que facilitou a aplicação de estilos diretamente nos componentes.

4. **Pesquisa e Referências**:
   - Documentação oficial do [React](https://reactjs.org/) e [React Router](https://reactrouter.com/).
   - Exemplos de uso do Tailwind CSS na [documentação oficial](https://tailwindcss.com/).
   - Artigos e tutoriais sobre autenticação JWT e proteção de rotas em React.

5. **Tempo Estimado**:
   - Planejamento e configuração inicial: 2 hora.
   - Desenvolvimento das telas e componentes: 48 horas.
   - Integração com a API e testes: 3 horas.
   - Documentação e ajustes finais: 2 horas.

---

## Estrutura do Projeto

### Visão Geral
O projeto está organizado em dois diretórios principais: `components` e `services`. Essa estrutura promove a separação de responsabilidades e modularidade, facilitando a manutenção e escalabilidade do código.

### 1. `services`
Este diretório contém a lógica relacionada à API e serviços. Ele é responsável por gerenciar todas as interações com APIs externas ou sistemas backend, como busca de dados, envio de requisições e tratamento de respostas.

### 2. `components`
Este diretório está subdividido em três subdiretórios: `auth`, `common` e `user`.

#### a. `auth`
- Contém componentes relacionados à autenticação e autorização.
- Inclui funcionalidades para login, registro de usuários e proteção de rotas, garantindo que apenas usuários autenticados possam acessar determinadas partes do sistema.

#### b. `common`
- Contém componentes reutilizáveis que podem ser compartilhados em diferentes partes da aplicação.
- Promove a reutilização de código e consistência na interface e experiência do usuário.

#### c. `user`
- Contém componentes relacionados às operações específicas do usuário dentro do sistema.
- Essas operações estão disponíveis apenas para usuários logados e incluem funcionalidades de alterar a senha e listar todos os usuarios do sistema.

Essa estrutura garante uma separação clara entre componentes reutilizáveis, lógica de autenticação e funcionalidades específicas do usuário, enquanto mantém a lógica de API centralizada no diretório `services`.

---

## Funcionalidades Implementadas

- **Cadastro de Usuário**: Tela de registro que consome o endpoint `POST /register`.
- **Login**: Tela de login que consome o endpoint `POST /login` e armazena o token JWT no `localStorage`.
- **Listagem de Usuários**: Tela protegida que consome o endpoint `GET /all-users` utilizando o token JWT.
- **Alteração de Senha**: Tela para alteração de senha que consome o endpoint `POST /change-password`.
- **Proteção de Rotas**: Implementação de rotas protegidas utilizando o componente `ProtectedRoute`.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **React Router**: Gerenciamento de rotas.
- **Tailwind CSS**: Estilização da aplicação.
- **Axios**: Comunicação com a API.
- **Vite**: Ferramenta para desenvolvimento e build do projeto.
- **ESLint**: Ferramenta para análise de código.

---

## Decisões de Implementação

1. **Componentização**: 
   - Componentes reutilizáveis foram criados para formulários (`FormContainer`, `Input`, `SubmitButton`, `FormTitle`, `FormLink`) e mensagens (`FormMessage`), garantindo consistência e facilidade de manutenção.
   
2. **Gerenciamento de Autenticação**:
   - O token JWT é armazenado no `localStorage` para persistência entre sessões.
   - Rotas protegidas foram implementadas utilizando o componente `ProtectedRoute`.

3. **Estilização**:
   - O Tailwind CSS foi escolhido para acelerar o desenvolvimento e garantir um design responsivo.

4. **Comunicação com a API**:
   - A biblioteca Axios foi utilizada para simplificar as requisições HTTP.
   - Um serviço centralizado (`src/services/api.jsx`) foi criado para gerenciar as chamadas à API.

---

Deploy
O projeto está configurado para deploy na Vercel. O arquivo vercel.json contém as configurações necessárias para redirecionar todas as rotas para o index.html.