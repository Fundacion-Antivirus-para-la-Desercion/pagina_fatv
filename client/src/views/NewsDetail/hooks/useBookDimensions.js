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
    height: 0,
    usableHeight: 0,
    firstPageUsableHeight: 0,
    pagePaddingY: 0,
    coverHeaderHeight: 0,
    safetyMargin: 16,
    isPortrait: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (!contentRef.current) return;
      const containerWidth = contentRef.current.offsetWidth;
      const isPortrait = containerWidth < 700;
      const pageWidth = isPortrait
        ? containerWidth
        : Math.floor(containerWidth / 2);
      const pageHeight = Math.max(950, Math.min(980, Math.round(pageWidth * 1.35)));
      const pagePaddingY = containerWidth >= 768 ? 64 : 32;
      const coverHeaderHeight = Math.max(
        200,
        Math.min(240, Math.round(pageHeight * 0.24))
      );
      const safetyMargin = 10;
      const usableHeight = Math.max(200, pageHeight - pagePaddingY - safetyMargin);
      const firstPageUsableHeight = Math.max(
        150,
        usableHeight - coverHeaderHeight
      );

      setBookDimensions({
        width: pageWidth,
        height: pageHeight,
        usableHeight,
        firstPageUsableHeight,
        pagePaddingY,
        coverHeaderHeight,
        safetyMargin,
        isPortrait,
      });
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (contentRef.current) resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, [contentRef]);

  return bookDimensions;
};

export default useBookDimensions;
