import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import BookPage from "./BookPage";

/**
 * Lector mobile de noticias optimizado para touchscreen.
 * Proporciona navegación por swipe/drag horizontal con transiciones suaves.
 * @param {Array} pages - Array de páginas, cada una es un array de items
 * @param {number} totalPages - Número total de páginas
 * @param {ReactNode} coverHeader - Encabezado para la portada
 * @param {Function} renderItem - Función para renderizar cada item del contenido
 * @returns {JSX.Element} Lector mobile
 */
const MobileNewsReader = ({ pages, totalPages, coverHeader, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const goToPage = useCallback((newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setDirection(newPage > currentPage ? 1 : -1);
      setCurrentPage(newPage);
    }
  }, [currentPage, totalPages]);

  const goNext = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const goPrev = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; // px
    const swipe = info.offset.x;

    if (swipe < -swipeThreshold) {
      // Swipe left → next page
      goNext();
    } else if (swipe > swipeThreshold) {
      // Swipe right → prev page
      goPrev();
    }
  };

  // Variantes de animación para slide horizontal
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-2xl overflow-hidden">
      {/* Contenedor de página con drag y animación */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <BookPage
              items={pages[currentPage]}
              header={currentPage === 0 ? coverHeader : undefined}
              renderItem={renderItem}
              pageSide="left"
              className="h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles: botones + indicador de página */}
      <div className="relative z-30 mt-4 flex items-center justify-center gap-3 pointer-events-auto pb-4 px-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={isFirstPage}
          className="rounded-full border border-blue-base px-4 py-2 text-sm font-semibold text-blue-base transition disabled:cursor-not-allowed disabled:opacity-40 active:scale-95"
          aria-label="Página anterior"
        >
          Anterior
        </button>

        <span className="min-w-24 text-center text-sm font-semibold text-blue-base">
          {currentPage + 1} / {totalPages}
        </span>

        <button
          type="button"
          onClick={goNext}
          disabled={isLastPage}
          className="rounded-full border border-blue-base px-4 py-2 text-sm font-semibold text-blue-base transition disabled:cursor-not-allowed disabled:opacity-40 active:scale-95"
          aria-label="Página siguiente"
        >
          Siguiente
        </button>
      </div>

      {/* Indicador visual de drag */}
      <div className="px-4 pb-2 text-center text-xs text-gray-400">
        Desliza para navegar
      </div>
    </div>
  );
};

MobileNewsReader.propTypes = {
  pages: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  coverHeader: PropTypes.node,
  renderItem: PropTypes.func.isRequired,
};

export default MobileNewsReader;
