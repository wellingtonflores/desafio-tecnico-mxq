// FormContainer.jsx
export default function FormContainer({ children, onSubmit }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={onSubmit}
        className="
              w-[400px] h-[500px] bg-white border border-gray-200 rounded-2xl
              p-6 flex flex-col items-center justify-center
            "
      >
        {children}
      </form>
    </div>
  );
  //Tailwind CSS classes div:
  {
    /* flex: display flex */
  }
  {
    /* items-center: alinha eixo cruzado (vertical) ao centro */
  }
  {
    /* justify-center: alinha eixo principal (horizontal) ao centro */
  }
  {
    /* min-h-screen: altura mínima = 100vh */
  }
  {
    /* bg-gray-50: cor de fundo cinza muito clara */
  }

  //Tailwind CSS classes form:
  {
    /*
              w-[400px]: largura fixa de 400px
              h-[500px]: altura fixa de 500px
              bg-white: fundo branco
              border: adiciona borda de 1px padrão
              border-gray-200: cor da borda cinza clara
              rounded-2xl: cantos bem arredondados (border-radius)
              p-6: padding interno de 1.5rem (24px)
              flex flex-col: display flex em coluna
              items-center: centraliza horizontalmente os filhos
              justify-center: centraliza verticalmente os filhos
            */
  }
}
