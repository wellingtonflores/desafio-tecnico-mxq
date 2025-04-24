import { Link } from "react-router-dom";

export default function FormLink({ questao, linkTexto, href }) {
  return (
    <p className="text-center">
      {questao}{" "}
      <Link
        to={href}
        className="text-sky-500 hover:text-sky-600 transition-colors"
      >
        {linkTexto}
      </Link>
    </p>
  );
}
