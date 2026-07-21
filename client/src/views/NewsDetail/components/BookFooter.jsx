import PropTypes from "prop-types";

/**
 * Pie del libro de noticias: cierra la portada mostrando la fecha de
 * publicación, análogo a BookCoverHeader (que la abre).
 * @param {string} formattedDate Fecha ya formateada para el idioma activo.
 * @returns {JSX.Element|null}
 */
const BookFooter = ({ formattedDate }) => {
  if (!formattedDate) return null;

  return (
    <div className="flex items-center">
      <div className="flex-1 h-8 rounded-full bg-blue-base flex items-center justify-end gap-2 pr-6">
        <span className="h-px w-6 bg-white/70" />
        <span className="text-sm font-semibold text-white whitespace-nowrap">
          {formattedDate}
        </span>
      </div>
      <span className="h-px w-8 bg-gray-400 ml-2" />
    </div>
  );
};

BookFooter.propTypes = {
  formattedDate: PropTypes.string,
};

export default BookFooter;
