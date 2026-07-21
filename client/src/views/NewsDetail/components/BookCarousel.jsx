import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import BookPage from "./BookPage";
import BookCoverHeader from "./BookCoverHeader";
import BookFooter from "./BookFooter";
import NewsContentRenderer from "./NewsContentRenderer";
import MeasureLayer from "./MeasureLayer";
import PageLeaf from "./PageLeaf";
import usePaginatedContent from "../hooks/usePaginatedContent";
import { useTranslation } from "react-i18next";

/**
 * Libro de noticias con efecto de "pasar hoja" hecho con Framer Motion + CSS 3D.
 *
 * Reemplaza a la librería page-flip (StPageFlip). Unifica mobile y desktop en un
 * único árbol: la diferencia es solo `isTwoPage`. Por eso ya no se "oculta el
 * libro" al rotar la pantalla: en un resize solo se re-pagina y se clampa la
 * página actual, sin destruir/recrear ninguna instancia imperativa.
 *
 * Desktop: hoja real de doble cara que gira sobre el lomo (ver {@link PageLeaf}).
 * Mobile: giro de una página sobre la bisagra izquierda.
 *
 * Clave del diseño: la animación es una capa visual sobre nuestros `BookPage`
 * responsive; la paginación por medición del DOM queda intacta.
 */

const SWIPE_THRESHOLD = 50; // px de arrastre para cambiar de página en mobile

// Variantes del giro mobile: la página entra/sale rotando sobre el lomo izquierdo.
const mobileVariants = {
  enter: (dir) => ({ rotateY: dir >= 0 ? 92 : -92, opacity: 0 }),
  center: { rotateY: 0, opacity: 1 },
  exit: (dir) => ({ rotateY: dir >= 0 ? -92 : 92, opacity: 0 }),
};

const BookCarousel = ({ content, title, newsLabel, date, dimensions }) => {
  const { t, i18n } = useTranslation();
  const { width, height, isPortrait, isTwoPage } = dimensions;

  const formattedDate = useMemo(() => {
    if (!date) return null;
    return new Intl.DateTimeFormat(
      i18n.language?.startsWith("en") ? "en-US" : "es-ES",
      { day: "numeric", month: "long", year: "numeric" },
    ).format(new Date(`${date}T00:00:00`));
  }, [date, i18n.language]);

  const renderItem = useCallback(
    (item, i) => (
      <NewsContentRenderer
        key={`${item?.type ?? "item"}-${i}`}
        content={item}
        index={i}
      />
    ),
    [],
  );

  const coverHeader = useMemo(
    () => <BookCoverHeader title={title} newsLabel={newsLabel} />,
    [title, newsLabel],
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
  // Giro desktop en curso: { direction: 1|-1, target } o null.
  const [flip, setFlip] = useState(null);
  // Dirección del último cambio en mobile (para las variantes).
  const [direction, setDirection] = useState(0);

  const current = Math.min(index, total - 1);
  const isFlipping = flip !== null;

  // Al re-paginar (resize / idioma) el total puede achicarse: clampar, no resetear.
  useEffect(() => {
    setIndex((prev) => Math.min(prev, total - 1));
  }, [total]);

  const renderPage = useCallback(
    (absIndex, side, header) => (
      <BookPage
        items={pages[absIndex] || []}
        header={header}
        renderItem={renderItem}
        pageSide={side}
        style={{ width, height }}
      />
    ),
    [pages, renderItem, width, height],
  );

  const goTo = useCallback(
    (target) => {
      const next = Math.min(Math.max(target, 0), total - 1);
      if (next === current || isFlipping) return;
      const dir = next > current ? 1 : -1;
      if (isTwoPage) {
        setFlip({ direction: dir, target: next });
      } else {
        setDirection(dir);
        setIndex(next);
      }
    },
    [total, current, isFlipping, isTwoPage],
  );

  const finishFlip = useCallback(() => {
    setFlip((prev) => {
      if (prev) setIndex(prev.target);
      return null;
    });
  }, []);

  const handleDragEnd = useCallback(
    (_event, info) => {
      if (info.offset.x < -SWIPE_THRESHOLD) goTo(current + 1);
      else if (info.offset.x > SWIPE_THRESHOLD) goTo(current - 1);
    },
    [current, goTo],
  );

  const btnClass =
    "border border-blue-base px-4 py-2 text-sm font-semibold text-blue-base transition disabled:cursor-not-allowed disabled:opacity-40 active:scale-95";

  // --- Render del área del libro ---
  let book;
  if (isTwoPage) {
    // Superficies durante el giro (modelo de libro físico, ver PageLeaf).
    let bgLeft = null;
    let bgRight = null;
    let leafFront = null;
    let leafBack = null;
    if (isFlipping) {
      const s = current;
      if (flip.direction === 1) {
        bgLeft = renderPage(s * 2, "left");
        bgRight = renderPage(s * 2 + 3, "right");
        leafFront = renderPage(s * 2 + 1, "right");
        leafBack = renderPage(s * 2 + 2, "left");
      } else {
        bgLeft = renderPage(s * 2 - 2, "left");
        bgRight = renderPage(s * 2 + 1, "right");
        leafFront = renderPage(s * 2, "left");
        leafBack = renderPage(s * 2 - 1, "right");
      }
    }

    book = (
      <div
        className="relative mx-auto"
        style={{ width: width * 2, height, perspective: 2400 }}
      >
        {isFlipping ? (
          <>
            <div
              style={{ position: "absolute", top: 0, left: 0, width, height }}
            >
              {bgLeft}
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: width,
                width,
                height,
              }}
            >
              {bgRight}
            </div>
            <PageLeaf
              direction={flip.direction}
              width={width}
              height={height}
              front={leafFront}
              back={leafBack}
              onComplete={finishFlip}
            />
          </>
        ) : (
          <div
            className="grid grid-cols-2"
            style={{ width: width * 2, height }}
          >
            {renderPage(current * 2, "left")}
            {renderPage(current * 2 + 1, "right")}
          </div>
        )}
      </div>
    );
  } else {
    // Mobile: una página que gira sobre la bisagra izquierda.
    book = (
      <div
        className="relative mx-auto"
        style={{ width, height, perspective: 1600 }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={mobileVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{ transformOrigin: "left center" }}
          >
            {renderPage(
              current,
              "left",
              current === 0 ? coverHeader : undefined,
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div id="book-carousel" className="relative flex flex-col items-center">
      {isTwoPage && (
        <div
          className="bg-white px-9 pt-8 pb-2 mx-auto rounded-t-2xl"
          style={{ width: width * 2 }}
        >
          <BookCoverHeader title={title} newsLabel={newsLabel} />
        </div>
      )}

      {book}

      {formattedDate && (
        <div
          className="bg-white px-9 pb-5 pt-3 mx-auto rounded-b-2xl"
          style={{ width: isTwoPage ? width * 2 : width }}
        >
          <BookFooter formattedDate={formattedDate} />
        </div>
      )}

      <div className="relative z-30 mt-4 flex items-center justify-center gap-3 pb-4">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current <= 0 || isFlipping}
          className={btnClass}
          aria-label={t("newsDetail.cardCarousel.tbn_previous")}
        >
          {t("newsDetail.cardCarousel.tbn_previous")}
        </button>

        <span className="min-w-24 text-center text-sm font-semibold text-blue-base">
          {current + 1} / {total}
        </span>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={current >= total - 1 || isFlipping}
          className={btnClass}
          aria-label={t("newsDetail.cardCarousel.tbn_next")}
        >
          {t("newsDetail.cardCarousel.tbn_next")}
        </button>
      </div>

      <span className="text-center text-sm text-gray-400">
        {t("newsDetail.cardCarousel.message")}
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
  date: PropTypes.string,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    isPortrait: PropTypes.bool,
    isTwoPage: PropTypes.bool,
  }).isRequired,
};

export default BookCarousel;
