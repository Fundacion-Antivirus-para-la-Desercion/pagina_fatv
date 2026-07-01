import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import BookPage from "./BookPage";
import BookCoverHeader from "./BookCoverHeader";
import NewsContentRenderer from "./NewsContentRenderer";
import MeasureLayer from "./MeasureLayer";
import usePaginatedContent from "../hooks/usePaginatedContent";

/**
 * Libro de noticias con efecto de "pasar hoja" hecho con Framer Motion + CSS 3D.
 *
 * Reemplaza a la librería page-flip (StPageFlip) y unifica mobile y desktop en un
 * único árbol de componentes: la diferencia es solo `isTwoPage` (una página vs.
 * spread de dos), no un cambio de componente. Por eso ya no se "oculta el libro"
 * al rotar la pantalla: en un resize solo se re-pagina y se clampa la página
 * actual, sin destruir ni recrear ninguna instancia imperativa.
 */

const SWIPE_THRESHOLD = 50; // px de arrastre para cambiar de página

// Giro sutil sobre el eje Y que simula el paso de hoja sin necesidad de una
// hoja doble real. La dirección define desde/hacia qué lado gira.
const flipVariants = {
  enter: (dir) => ({ rotateY: dir >= 0 ? 35 : -35, opacity: 0 }),
  center: { rotateY: 0, opacity: 1 },
  exit: (dir) => ({ rotateY: dir >= 0 ? -35 : 35, opacity: 0 }),
};

const BookCarousel = ({ content, title, newsLabel, dimensions }) => {
  const { width, height, isPortrait, isTwoPage } = dimensions;

  const renderItem = useCallback(
    (item, i) => (
      <NewsContentRenderer
        key={`${item?.type ?? "item"}-${i}`}
        content={item}
        index={i}
      />
    ),
    []
  );

  const coverHeader = useMemo(
    () => <BookCoverHeader title={title} newsLabel={newsLabel} />,
    [title, newsLabel]
  );

  const { pages, measureRef, splitterRef } = usePaginatedContent({
    content,
    pageWidth: width,
    pageHeight: height,
    isPortrait,
    isTwoPage,
  });

  const total = isTwoPage
    ? Math.max(1, Math.ceil(pages.length / 2))
    : Math.max(1, pages.length);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const current = Math.min(index, total - 1);

  // Al re-paginar (resize / cambio de idioma) el total puede reducirse:
  // clampar la página actual en vez de resetear a 0.
  useEffect(() => {
    setIndex((prev) => Math.min(prev, total - 1));
  }, [total]);

  const goTo = useCallback(
    (target) => {
      const next = Math.min(Math.max(target, 0), total - 1);
      setDirection(next >= current ? 1 : -1);
      setIndex(next);
    },
    [total, current]
  );

  const handleDragEnd = useCallback(
    (_event, info) => {
      if (info.offset.x < -SWIPE_THRESHOLD) goTo(current + 1);
      else if (info.offset.x > SWIPE_THRESHOLD) goTo(current - 1);
    },
    [current, goTo]
  );

  // Páginas visibles del spread/página actual.
  const visiblePages = isTwoPage
    ? [pages[current * 2] || [], pages[current * 2 + 1] || []]
    : [pages[current] || []];

  // El header de portada va dentro de la primera página en portrait; en desktop
  // es una barra superior fija sobre el spread.
  const headerForPage = (absoluteIndex) =>
    !isTwoPage && absoluteIndex === 0 ? coverHeader : undefined;

  const btnClass =
    "border border-blue-base px-4 py-2 text-sm font-semibold text-blue-base transition disabled:cursor-not-allowed disabled:opacity-40 active:scale-95";

  return (
    <div className="relative flex flex-col items-center">
      {isTwoPage && (
        <div
          className="bg-white px-9 pt-8 pb-2 mx-auto rounded-t-2xl"
          style={{ width: width * 2 }}
        >
          <BookCoverHeader title={title} newsLabel={newsLabel} />
        </div>
      )}

      <div
        className="relative mx-auto"
        style={{ perspective: 2000, width: isTwoPage ? width * 2 : width }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={flipVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: isTwoPage ? "center center" : "left center",
            }}
            className="grid cursor-grab active:cursor-grabbing"
            aria-live="polite"
          >
            <div
              className={isTwoPage ? "grid grid-cols-2" : ""}
              style={{ width: isTwoPage ? width * 2 : width, height }}
            >
              {visiblePages.map((pageItems, i) => {
                const absoluteIndex = isTwoPage ? current * 2 + i : current;
                return (
                  <BookPage
                    key={absoluteIndex}
                    items={pageItems}
                    header={headerForPage(absoluteIndex)}
                    renderItem={renderItem}
                    pageSide={isTwoPage && i === 1 ? "right" : "left"}
                    style={{ width, height }}
                  />
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-30 mt-4 flex items-center justify-center gap-3 pb-4">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current <= 0}
          className={btnClass}
          aria-label="Página anterior"
        >
          Anterior
        </button>

        <span className="min-w-24 text-center text-sm font-semibold text-blue-base">
          {current + 1} / {total}
        </span>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={current >= total - 1}
          className={btnClass}
          aria-label="Página siguiente"
        >
          Siguiente
        </button>
      </div>

      <span className="text-center text-xs text-gray-400">
        Desliza para navegar
      </span>

      <MeasureLayer
        content={content}
        renderItem={renderItem}
        pageWidth={width}
        isPortrait={isPortrait}
        coverHeader={coverHeader}
        measureRef={measureRef}
        splitterRef={splitterRef}
      />
    </div>
  );
};

BookCarousel.propTypes = {
  content: PropTypes.array.isRequired,
  title: PropTypes.string,
  newsLabel: PropTypes.string,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    isPortrait: PropTypes.bool,
    isTwoPage: PropTypes.bool,
  }).isRequired,
};

export default BookCarousel;
