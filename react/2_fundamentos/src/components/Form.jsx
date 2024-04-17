import { useSate } from "react";

const Form = () => {
  const [value, setValue] = useSate("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("FORMULÁRIO ENVIADO!!!", value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Preencha o campo"/>
      <button type="submmit">ENVIAR</button>
    </form>
  );
};

export default Form;
