import { forwardRef } from "react";
import PropTypes from "prop-types";

/**
 * Renderiza una página del libro con contenido dinámico.
 * Puede ser la portada (con encabezado) o una página interna (solo contenido).
 * @param {Array} items - Contenido de la página (array de objetos)
 * @param {Function} renderItem - Función para renderizar cada ítem del contenido
 * @param {ReactNode} header - Encabezado opcional (solo para portada)
 * @param {Object} props - Props adicionales para el contenedor de la página
 * @param {React.Ref} ref - Ref para el contenedor de la página (para HTMLFlipBook)
 * @returns {JSX.Element} Componente de página del libro
 */
const BookPage = forwardRef(
  ({ items = [], header, renderItem, className = "", ...props }, ref) => {
    const isCover = Boolean(header);
    return (
      <div
        ref={ref}
        className={`bg-white h-full ${isCover ? "border-r-2 border-r-gray-200" : "border-l-2 border-l-gray-200 shadow-inner"} ${className}`.trim()}
        {...props}
      >
        <div className="h-full overflow-hidden">
          {isCover && header}
          {items.map((content, index) => renderItem(content, index))}
        </div>
      </div>
    );
  }
);
BookPage.displayName = "BookPage";
BookPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  header: PropTypes.node,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default BookPage;
