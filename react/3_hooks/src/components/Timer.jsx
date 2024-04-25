import { useState, useEffect } from "react";

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    const intrvalId = setInterval(() => {
      setSegundos((prevSegundos) => segundos + 1);
    }, 1000);
    return () => clearInterval(intrvalId);
  }, []);
  return <div>Timer: {segundos} segundos</div>;
};

export default Timer;
