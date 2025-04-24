export default function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="w-full rounded-xl bg-sky-500 text-white px-4 py-3
                   hover:bg-sky-600 transition-colors"
    >
      {children}
    </button>
  );
  {
    /* w-full: botão ocupa 100% da largura disponível */
  }
  {
    /* rounded-xl: cantos arredondados (border-radius médio) */
  }
  {
    /* bg-sky-500: cor de fundo "sky" tom 500 */
  }
  {
    /* text-white: texto branco */
  }
  {
    /* px-4: padding horizontal de 1rem (16px) */
  }
  {
    /* py-3: padding vertical de 0.75rem (12px) */
  }
  {
    /* hover:bg-sky-600: muda a cor de fundo para sky-600 ao passar o mouse */
  }
  {
    /* transition-colors: anima transições de cor suavemente */
  }
}
