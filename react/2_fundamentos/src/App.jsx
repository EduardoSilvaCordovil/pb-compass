import "./App.css";

import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";
import UseInfoForm from "./components/UseInfoForm";
import Button from "./components/Button";
import PaiFunction from "./components/PaiFunction";
import RenderCodicional from "./components/RenderCodicional";
import BotaoEstilizado from "./components/BotaoEstilizado";
import BotaoAzul from "./components/BotaoAzul";
import Exercises from "./components/Exercises";

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
      {/*Expressão ternária*/}
      <LoggedIn LoggedIn={false}/>
      <LoggedIn LoggedIn={true}/>
      {/*Render nulo*/}
      <Warning waring="Temos um warning"/>
      {/*Listas chaves*/}
      <NumberList numbers={(1, 2, 3, 4, 5)}/>
      {/*Estilos por atributo*/}
      <BotaoEstilizado/>
      {/*Estilos globais*/}
      <BotaoAzul/>
      {/*Exercícios*/}
      <Exercises/>
    </>
  );
}

export default App;
