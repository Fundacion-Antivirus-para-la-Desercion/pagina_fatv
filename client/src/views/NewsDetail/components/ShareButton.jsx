import PropTypes from "prop-types";

/**
 * Componente de botón para compartir en redes sociales.
 * Este componente muestra un enlace para compartir la página actual en Facebook.
 * @param {string} label - Texto del enlace de compartir.
 * @returns {JSX.Element} Componente de botón de compartir.
 */
const ShareButton = ({ label }) => {
  return (
    <a
      href={"http://www.facebook.com/share.php?u=" + window.location.href}
      target="_blank"
      className="group flex items-center text-xl text-primary-purple cursor-pointer font-bold"
    >
      <img
        className="ml-3 transform transition-transform duration-300 group-hover:-translate-x-1 mr-1"
        src="https://www.fundacionantivirusparaladesercion.org/assets/img/icons/share.svg"
      />
      {label}
    </a>
  );
};

ShareButton.propTypes = {
  label: PropTypes.string,
};

export default ShareButton;
