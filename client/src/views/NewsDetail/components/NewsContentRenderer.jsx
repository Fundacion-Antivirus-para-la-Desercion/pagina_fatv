import PropTypes from "prop-types";

/**
 * Renderiza el contenido de la noticia según su tipo (párrafo, imagen o enlace).
 * @param {Array} param0.content Array de objetos de contenido de la noticia [{ type: "parrafo" | "img" | "link", value: string, url?: string }]
 * @param {number} param0.index Índice del contenido en el array
 * @returns {JSX.Element|null} Elemento JSX correspondiente al contenido de la noticia
 */
const NewsContentRenderer = ({ content, index }) => {
  switch (content.type) {
    case "parrafo":
      return (
        <div key={index} className="mb-4">
          <p className="text-blue-base text-base md:text-lg text-wrap text-justify leading-relaxed">
            {content.value}
          </p>
        </div>
      );
    case "img":
      return (
        <figure key={index} className="mb-4">
          <img
            src={content.value}
            alt=""
            className="max-h-[480px] mx-auto object-contain rounded-xl"
          />
        </figure>
      );
    case "link":
      return (
        <a
          key={index}
          href={content.url}
          className="block mb-4 text-primary-purple underline text-sm"
        >
          {content.value}
        </a>
      );
    default:
      return null;
  }
};

NewsContentRenderer.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default NewsContentRenderer;
