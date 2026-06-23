import { forwardRef } from "react";

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
  (
    { items = [], header, renderItem, pageSide, className = "", ...props },
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
        style={shadingStyle}
        {...props}
      >
        <div className="h-full overflow-hidden p-4 md:p-8">
          {isCover && header}
          {items.map((content, index) => renderItem(content, index))}
        </div>
      </div>
    );
  }
);
BookPage.displayName = "BookPage";

export default BookPage;
