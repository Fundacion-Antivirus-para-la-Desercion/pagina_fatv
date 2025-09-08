import { useState, useEffect } from "react";

const WriteEffect = ({ texto, velocidad = 100, shouldAnimate }) => {
  const [textoMostrado, setTextoMostrado] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (shouldAnimate && indice < texto.length) {
      const timer = setTimeout(() => {
        setTextoMostrado((prevTexto) => prevTexto + texto[indice]);
        setIndice((prevIndice) => prevIndice + 1);
      }, velocidad);
      return () => clearTimeout(timer);
    } else if (!shouldAnimate) {
      setTextoMostrado(""); // Reinicia el texto si no debe animar
      setIndice(0);
    }
  }, [texto, indice, velocidad, shouldAnimate]);

  return (
    <h1 className="service-title font-extrabold text-2xl lg:text-5xl leading-none font-oswald tracking-tighter mb-8">
      {textoMostrado}
    </h1>
  );
};

export default WriteEffect;
