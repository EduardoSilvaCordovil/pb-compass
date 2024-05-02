import { useReducer } from "react";
import { countReducer } from "../reducers/counterReducer";

const Contador = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </div>
  );
};

export default Contador;
