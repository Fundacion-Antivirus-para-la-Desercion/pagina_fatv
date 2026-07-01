import { useState, useEffect } from "react";

/**
 * Hook para calcular las dimensiones del libro de noticias según el ancho del contenedor.
 * - Umbral: contenedor < 700px → modo una-página (portrait); >= 700px → spread de dos páginas.
 * - Ancho de página: ancho completo del contenedor en portrait, la mitad en desktop.
 * - Alto de página: entre 820 y 900px en desktop; al menos 1000px en portrait.
 * El re-cálculo se dispara con un ResizeObserver sobre el contenedor.
 * @param {React.RefObject} contentRef Ref del contenedor del libro
 * @returns {{ width: number, height: number, isPortrait: boolean, isTwoPage: boolean }}
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
    isTwoPage: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (!contentRef.current) return;
      const containerWidth = contentRef.current.offsetWidth;
      const isPortrait = containerWidth < 700;
      const pageWidth = isPortrait
        ? containerWidth
        : Math.floor(containerWidth / 2);
      const pageHeight = Math.max(isPortrait ? 1000 : 820, Math.min(900, Math.round(pageWidth * 1.25)));
      const pagePaddingY = containerWidth >= 768 ? 64 : 32;
      const coverHeaderHeight = Math.max(
        200,
        Math.min(240, Math.round(pageHeight * 0.24))
      );
      const safetyMargin = 10;
      const usableHeight = Math.max(200, pageHeight - pagePaddingY - safetyMargin);
      const firstPageUsableHeight = isPortrait
        ? Math.max(150, usableHeight - coverHeaderHeight)
        : usableHeight;

      setBookDimensions({
        width: pageWidth,
        height: pageHeight,
        usableHeight,
        firstPageUsableHeight,
        pagePaddingY,
        coverHeaderHeight,
        safetyMargin,
        isPortrait,
        isTwoPage: !isPortrait,
        isMobile: isPortrait,
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
