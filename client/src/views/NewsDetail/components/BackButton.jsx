import { Link } from "react-router-dom";
import Back from "../../../assets/Icons/back.svg";
import PropTypes from "prop-types";

/**
 * Componente de botón de regreso a la página de noticias.
 * Este componente muestra un enlace de regreso a la página de noticias con un ícono de flecha hacia atrás.
 * @param {string} label - Texto del enlace de regreso.
 * @param {string} alt - Texto alternativo para la imagen de regreso.
 * @returns {JSX.Element} Componente de botón de regreso.
 */
const BackButton = ({ label, alt }) => {
  return (
    <Link
      to="/News"
      className="group flex items-center text-xl text-primary-purple cursor-pointer font-bold mr-7"
    >
      <img
        className="ml-3 relative transform transition-transform duration-300 group-hover:-translate-x-1 mr-1"
        src={Back}
        alt={alt}
        loading="lazy"
      />
      {label}
    </Link>
  );
};

BackButton.propTypes = {
  label: PropTypes.string,
  alt: PropTypes.string,
};

export default BackButton;
