import { useContext } from "react";
import { MeuContexto } from "../context/MeuContexto";

const ComponenteFilho = () => {
  const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
        <p>{ mensagem }</p>
      <button onClick={() => setMensagem("NOVA MENSAGEM")} >Alterar mensagem</button>
    </div>
  )
};

export default ComponenteFilho;
