import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    heigth: window.innerHeight,
    with: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        heigth: window.innerHeight,
        with: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
