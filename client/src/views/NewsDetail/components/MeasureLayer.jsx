import PropTypes from "prop-types";

/**
 * Capa oculta que replica exactamente el contenido de una página para poder
 * medir su altura real. La usa {@link usePaginatedContent} para paginar.
 * Debe renderizarse dentro del árbol (aria-hidden, fuera de pantalla).
 */
const MeasureLayer = ({
  content,
  renderItem,
  pageWidth,
  isPortrait,
  coverHeader,
  measureRef,
  splitterRef,
}) => (
  <div
    ref={measureRef}
    aria-hidden
    className="pointer-events-none"
    style={{
      position: "absolute",
      top: 0,
      left: -99999,
      width: pageWidth,
      visibility: "hidden",
    }}
  >
    {/* Mismo padding que BookPage para que las alturas medidas coincidan. */}
    <div data-measure-inner className="py-16 px-9 md:py-8 md:px-9">
      {isPortrait && coverHeader ? (
        <div data-measure-cover>{coverHeader}</div>
      ) : null}
      {content.map((item, i) => (
        <div data-measure-index={i} key={`measure-${item?.type ?? "item"}-${i}`}>
          {renderItem(item, i)}
        </div>
      ))}
    </div>

    {/* Splitter: mismo estilo tipográfico que un párrafo, ancho del área útil. */}
    <div
      ref={splitterRef}
      data-splitter
      className="mb-4"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: Math.max(0, pageWidth - 72),
        visibility: "hidden",
      }}
    >
      <p
        data-splitter-p
        className="text-blue-base text-base md:text-lg text-wrap text-justify leading-relaxed"
      />
    </div>
  </div>
);

MeasureLayer.propTypes = {
  content: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  pageWidth: PropTypes.number.isRequired,
  isPortrait: PropTypes.bool,
  coverHeader: PropTypes.node,
  measureRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  splitterRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};

export default MeasureLayer;
