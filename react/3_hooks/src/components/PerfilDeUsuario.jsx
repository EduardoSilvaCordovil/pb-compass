import { useState, useEffect } from "react";

const PerfilDeUsuario = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const buscarUsuario = async () => {
      const resposta = await etch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`
      );
      const dadosDoUsuario = await resposta.json();
      setUsuario(dadosDoUsuario);
    };

    if (usuarioId) {
      buscarUsuario();
    }
  }, [usuarioId]);

  return (
    <div>
      {usuario ? (
        <div>
          <h1>{usuario.name}</h1>
          <p>{usuario.email}</p>
        </div>
      ) : (
        <p>Carregando perfil do usuário...</p>
      )}
    </div>
  );
};

export default PerfilDeUsuario;
