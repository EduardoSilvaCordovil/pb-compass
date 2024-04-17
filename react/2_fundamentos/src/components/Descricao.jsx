const Descricao = (props) => {
  return (
    <div>
      <p>Seu nome é: {props.name}</p>
      <p>E você tem: {props.idade} de idade.</p>
    </div>
  );
};

export default Descricao;
