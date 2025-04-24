import { servicosApi } from "../../services/api";
import { useEffect, useState } from "react";

export default function UserList() {
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const resposta = await servicosApi.fetchUsuarios();
        setUsuarios(resposta.users);
      } catch (err) {
        setErro("Erro ao carregar usuários.");
      }
    }

    fetchUsuarios();
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-2xl my-5">
      <h2 className="text-2xl font-bold mb-4">Lista de Usuários</h2>

      {erro && <p className="text-red-500 mb-4">{erro}</p>}

      <ul className="space-y-2">
        {usuarios.map((usuario) => (
          <li
            key={usuario.id}
            className="border border-gray-200 p-4 rounded-lg shadow-sm"
          >
            <p>
              <strong>Nome:</strong> {usuario.name}
            </p>
            <p>
              <strong>Email:</strong> {usuario.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
