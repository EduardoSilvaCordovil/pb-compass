import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("CLICOU!");
  };
  return <button onClick={handleClick}>CLICK ME!</button>;
};

export default Button;
