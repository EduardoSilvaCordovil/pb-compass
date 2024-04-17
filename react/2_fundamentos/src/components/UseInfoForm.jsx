import { useState } from "react";

const UseInfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmmit = (event) => {
    event.preventDefault();
    console.log(name, email);
  };
  return (
    <form onSubmit={handleSubmmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o seu nome"/>
        {name}
      <button type="submit">Enviar</button>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o seu e-mail"/>
        {name}
      <button type="submit">Enviar</button>
    </form>);
};

export default UseInfoForm;
