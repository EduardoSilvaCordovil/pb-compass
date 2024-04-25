import "./App.css";
import Timer from "./components/Timer";
import Contador from "./components/Contador";
import MeuContexto from "./context/MeuContexto";
import Container from "./components/Container";
import ExemploUse from "./components/ExemploUse";
import CalculoPesado from "./components/CalculoPesado";
import ValorDoContexto from "./components/ValorDoContexto";
import ComponenteFilho from "./components/ComponenteFilho";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import DisplayWindowSize from "./components/DisplayWindowSize";

function App() {
  return (
    <>
      {/*useEffect*/}
      <ExemploUse />
      <Timer />
      {/*useContext*/}
      <MeuContexto>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContexto>
      {/*useReducer*/}
      <Contador />
      {/*Custom hook*/}
      <DisplayWindowSize />
      {/* Slots e child props*/}
      <Container>
        <h1>Título da seção</h1>
        <p>Este é o sutítulo</p>
      </Container>
      {/*sincronizar o estado com props*/}
      <PerfilDeUsuario usuarioId={1} />
      <PerfilDeUsuario usuarioId={2} />
      {/*useMemo e useCalback*/}
      <CalculoPesado />
    </>
  );
}

export default App;
