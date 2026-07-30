import PropTypes from "prop-types";
import { FaShareFromSquare } from "react-icons/fa6";

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
      <FaShareFromSquare className="ml-3 transform transition-transform duration-300 group-hover:-translate-x-1 mr-1" />
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
