import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Contador from "./components/Contador";
import TextInput from "./components/TextInput";
import Exercicios from "./components/Exercicios";
import { TemaProvider } from "./contexts/TemaContexts";
import BarraFerramentas from "./components/BarraFerramentas";
import ContadorIntervalo from "./components/ContadorIntervalo";
import ExibirPostagens from "./components/ExibirPostagens";

function App() {
  return (
    <>
      <h1>React com TypeScript</h1>
      <Greeting name="Eduardo" />
      <Counter />
      <TextInput />
      <ContadorIntervalo />
      <Exercicios />
      <Contador />
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>
      <ExibirPostagens />
    </>
  );
}
export default App;
