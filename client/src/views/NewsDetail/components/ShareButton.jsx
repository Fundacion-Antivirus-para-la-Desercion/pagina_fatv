import PropTypes from "prop-types";

/**
 * Componente de botón para compartir en redes sociales (Facebook).
 * Construye una URL shareable con contexto de la noticia actual.
 * @param {string} label - Texto del enlace de compartir.
 * @param {Object} news - Objeto de noticia con slug, title, img, etc.
 * @returns {JSX.Element} Componente de botón de compartir.
 */
const ShareButton = ({ label, news }) => {
  const shareUrl = news?.slug
    ? `${window.location.origin}/news/detail?slug=${news.slug}`
    : window.location.href;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <a
      href={facebookShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center text-xl text-primary-purple cursor-pointer font-bold"
    >
      <img
        className="ml-3 transform transition-transform duration-300 group-hover:-translate-x-1 mr-1"
        src="https://www.fundacionantivirusparaladesercion.org/assets/img/icons/share.svg"
        alt="share"
      />
      {label}
    </a>
  );
};

ShareButton.propTypes = {
  label: PropTypes.string,
  news: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
  }),
};

export default ShareButton;
