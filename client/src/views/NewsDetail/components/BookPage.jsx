import { forwardRef } from "react";
import PropTypes from "prop-types";

/**
 * Renderiza una página del libro con contenido dinámico.
 * Puede ser la portada (con encabezado) o una página interna (solo contenido).
 * @param {Array} items - Contenido de la página (array de objetos)
 * @param {Function} renderItem - Función para renderizar cada ítem del contenido
 * @param {ReactNode} header - Encabezado opcional (solo para portada)
 * @param {Object} props - Props adicionales para el contenedor de la página
 * @param {React.Ref} ref - Ref opcional para el contenedor de la página
 * @returns {JSX.Element} Componente de página del libro
 */
const BookPage = forwardRef(
  (
    { items = [], header, renderItem, pageSide, className = "", style, ...props },
    ref
  ) => {
    const isCover = Boolean(header);
    const shadingStyle = !isCover
      ? pageSide === "left"
        ? {
            backgroundImage:
              "linear-gradient(to right, rgba(34,45,86,0.07) 0%, rgba(34,45,86,0.03) 4%, #ffffff 12%, #ffffff 100%)",
          }
        : {
            backgroundImage:
              "linear-gradient(to left, rgba(34,45,86,0.07) 0%, rgba(34,45,86,0.03) 4%, #ffffff 12%, #ffffff 100%)",
          }
      : {};

    return (
      <div
        ref={ref}
        className={`bg-white h-full ${className}`.trim()}
        style={{ ...shadingStyle, ...style }}
        {...props}
      >
        <div className="h-full py-16 px-9 md:py-8 md:px-9">
          {isCover && header}
          {items.map((content, index) => renderItem(content, index))}
        </div>
      </div>
    );
  }
);
BookPage.displayName = "BookPage";
BookPage.propTypes = {
  items: PropTypes.array,
  header: PropTypes.node,
  renderItem: PropTypes.func,
  pageSide: PropTypes.oneOf(["left", "right"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default BookPage;
