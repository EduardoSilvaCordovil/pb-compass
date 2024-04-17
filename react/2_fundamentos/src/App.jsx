import "./App.css";

import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";
import UseInfoForm from "./components/UseInfoForm";
import Button from "./components/Button";
import PaiFunction from "./components/PaiFunction";
import RenderCodicional from "./components/RenderCodicional";

function App() {
  return (
    <>
      {/*Criação de componente*/}
      <Welcome />
      {/*Expressão do JSX*/}
      <BomDia/>
      {/*Componente dentro de componente*/}
      <Pai/>
      {/*Props*/}
      <Descricao name = "Eliana" idade={30}/>
      {/*Desestruturação de props*/}
      <Cachorro name="" raca=""/>
      {/*useState hook*/}
      <Counter/>
      {/*múltiplos estados*/}
      <UseInfoForm/>
      {/*Eventos*/}
      <Button/>
      {/*Passando funções de manipulação de eventos como props*/}
      <PaiFunction/>
      {/*Eventos de form*/}
      <Form/>
      {/*Renderização condicional*/}
      <RenderCodicional user="EDUARDO"/>
    </>
  );
}

export default App;
