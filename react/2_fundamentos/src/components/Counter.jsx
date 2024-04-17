import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>CLICK HERE</button>
    </div>
  );
};

export default Counter;
