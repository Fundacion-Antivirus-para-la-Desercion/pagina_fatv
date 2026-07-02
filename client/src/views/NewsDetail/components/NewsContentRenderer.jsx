import PropTypes from "prop-types";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const renderWithBold = (text) => {
  const parts = text.split(/(<bold>.*?<\/bold>)/gs);
  return parts.map((part, i) => {
    const match = part.match(/^<bold>(.*?)<\/bold>$/s);
    return match ? (
      <strong key={i} className="font-extrabold text-black">
        {match[1]}
      </strong>
    ) : (
      part
    );
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
    case "parrafo-quote":
      return (
        <div key={index} className="mb-4">
          <FaQuoteLeft className="text-primary-yellow text-lg md:text-2xl mb-1" />
          <p className="text-blue-base text-[13px] md:text-base font-renogare text-wrap text-justify leading-relaxed mb-4">
            {renderWithBold(content.value)}

            <FaQuoteRight className="absolute text-primary-yellow text-lg md:text-2xl inline ml-2 align-middle" />
          </p>
          {content.author && (
            <p className="text-right text-sm md:text-lg font-renogare text-dark-blue mb-5">
              {content.author}
            </p>
          )}
        </div>
      );
    case "img":
      return (
        <figure key={index} className="mb-4">
          <img
            src={content.value}
            alt=""
            className="max-h-[410px] mx-auto object-contain rounded-xl"
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
    type: PropTypes.oneOf(["parrafo", "parrafo-quote", "img", "link"]),
    value: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default NewsContentRenderer;
