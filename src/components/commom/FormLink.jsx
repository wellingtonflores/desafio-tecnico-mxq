export default function FormLink({ questao, linkTexto, href }) {
  return (
    <p className="text-center">
      {questao}{" "}
      <a
        href={href}
        className="text-sky-500 hover:text-sky-600 transition-colors"
      >
        {linkTexto}
      </a>
    </p>
  );
}
