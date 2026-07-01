import PropTypes from "prop-types";

const renderWithBold = (text) => {
  const parts = text.split(/(<bold>.*?<\/bold>)/gs);
  return parts.map((part, i) => {
    const match = part.match(/^<bold>(.*?)<\/bold>$/s);
    return match ? <strong key={i} className="font-extrabold text-black">{match[1]}</strong> : part;
  });
};

const NewsContentRenderer = ({ content, index }) => {
  switch (content.type) {
    case "parrafo":
      return (
        <div key={index} className="mb-4">
          <p className="text-blue-base text-base md:text-lg text-wrap text-justify leading-relaxed">
            {renderWithBold(content.value)}
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
