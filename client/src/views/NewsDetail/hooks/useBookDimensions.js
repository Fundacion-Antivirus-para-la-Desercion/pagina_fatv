import { useState, useEffect } from "react";

/**
 * Hook para calcular las dimensiones del libro de noticias basado en el ancho del contenedor.
 * - Ancho de página: la mitad del ancho del contenedor (si es mayor a 600px) o el ancho completo (si es menor a 600px)
 * - Alto de página: mínimo 560px, o 1.55 veces el ancho de página
 * @param {React.RefObject} contentRef Ref del contenedor del libro
 * @returns {{ width: number, height: number }} Un objeto con las dimensiones del libro: { width, height }
 */
const useBookDimensions = (contentRef) => {
  const [bookDimensions, setBookDimensions] = useState({
    width: 0,
    height: 950,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (!contentRef.current) return;
      const containerWidth = contentRef.current.offsetWidth;
      const isPortrait = containerWidth < 600;
      const pageWidth = isPortrait
        ? containerWidth
        : Math.floor(containerWidth / 2);
      const pageHeight = Math.max(950, Math.round(pageWidth * 1.55));
      setBookDimensions({ width: pageWidth, height: pageHeight });
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (contentRef.current) resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, [contentRef]);

  return bookDimensions;
};

export default useBookDimensions;
