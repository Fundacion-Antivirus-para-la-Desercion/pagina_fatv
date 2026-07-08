import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Sun, SunBlue } from "../../../assets/images/svg/Svg";

const SLIDE_LEFT = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.7 },
};

const SLIDE_RIGHT = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.7 },
};

const OrganizationInfoSection = ({
  image,
  imgAlt,
  bgColor,
  titleKey,
  descKey,
  reverse = false,
  wide = false,
  showDecorator = true,
  showTopDecorator = false,
}) => {
  const { t } = useTranslation();

  const getGridCols = () => {
    if (reverse) {
      return wide ? "md:grid-cols-[50%_20%]" : "md:grid-cols-[40%_20%]";
    }
    return wide ? "md:grid-cols-[20%_50%]" : "md:grid-cols-[20%_40%]";
  };

  const getPadding = () => {
    return wide ? "p-8" : "p-6";
  };

  const gridCols = getGridCols();
  const padding = getPadding();

  const imageEl = (
    <div className={`${bgColor} rounded-full max-w-[400px] block mx-auto`}>
      <img
        className="rounded-full w-full h-auto p-5 object-cover"
        src={image}
        alt={imgAlt}
      />
    </div>
  );

  const textEl = (
    <div className={`rounded-lg border border-gray-200 ${bgColor} ${padding} shadow-xl`}>
      <h5 className="text-4xl font-impact text-blue-base mb-4">{t(titleKey)}</h5>
      <p className="text-base md:text-lg text-blue-base text-justify">{t(descKey)}</p>
    </div>
  );

  return (
    <motion.div {...(reverse ? SLIDE_RIGHT : SLIDE_LEFT)}>
      {showTopDecorator && <Sun classNames="hidden xl:block top-16 left-24" />}
      <section className={`m-5 grid grid-cols-1 ${gridCols} gap-2 items-center justify-center`}>
        {reverse ? textEl : imageEl}
        {reverse ? imageEl : textEl}
      </section>
      {showDecorator && (
        reverse
          ? <Sun classNames="hidden xl:block left-24" />
          : <SunBlue classNames="hidden xl:block right-24" />
      )}
    </motion.div>
  );
}

OrganizationInfoSection.propTypes = {
  image: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  titleKey: PropTypes.string.isRequired,
  descKey: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  wide: PropTypes.bool,
  showDecorator: PropTypes.bool,
  showTopDecorator: PropTypes.bool,
};

export default OrganizationInfoSection;
