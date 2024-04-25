import React from "react";

const BotaoEstilizado = () => {

  const estiloDoBotao = {
    backgroundColor: "#333",
    color: "#FFF",
    padding: "15px 32px",
    cursor: "pointer",
  };
  
  return <button style={estiloDoBotao}>CLIQUE AQUI</button>;
};

export default BotaoEstilizado;

