import FilhoFunction from "./FilhoFuncao";

const PaiFunction = () => {
  const handleChildClick = () => {
    console.log("CLICOU NO BOTÃO DO ELEMENTO FILHO!!!");
  };
  return (
  <div>
    <FilhoFuncao onChildClick={handleChildClick}/>
  </div>
  );
};

export default PaiFunction;
