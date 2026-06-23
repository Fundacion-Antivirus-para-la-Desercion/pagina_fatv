import PropTypes from "prop-types";
import { FaRegCalendarMinus } from "react-icons/fa6";

/**
 * Encabezado de la portada del libro de noticias.
 * @param {string} title Título principal de la noticia.
 * @param {string} newsLabel Etiqueta superior (ej. "Noticias").
 * @returns {JSX.Element}
 */
const BookCoverHeader = ({ title, newsLabel }) => {
  return (
    <div className="mb-4">
      <div className="flex mb-2 text-primary-purple">
        <FaRegCalendarMinus className="mr-1 w-6 h-6" />
        <span className="font-impact text-lg">{newsLabel}</span>
      </div>
      <h2 className="text-2xl md:text-5xl font-impact leading-tight text-blue-base mb-3">
        {title}
      </h2>
      <div
        className="h-[2px] rounded-full mb-4"
        style={{ background: "linear-gradient(to right, #222D56, #7C76B5)" }}
      />
    </div>
  );
};

BookCoverHeader.propTypes = {
  title: PropTypes.string,
  newsLabel: PropTypes.string,
};

export default BookCoverHeader;
