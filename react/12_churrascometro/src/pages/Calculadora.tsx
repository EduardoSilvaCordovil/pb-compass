import bgImage from "../assets/bg-1.jpg"
import CalculadoraChurrasco from "../components/CalculadoraChurrasco";

const Calculadora = () => {
  return (
    <div className="page-container" style={{backgroundImage: `url(${bgImage})`}} >
      <h1>Calculadora de Churrasco</h1>
      <CalculadoraChurrasco />
    </div>
  );
};

export default Calculadora;
