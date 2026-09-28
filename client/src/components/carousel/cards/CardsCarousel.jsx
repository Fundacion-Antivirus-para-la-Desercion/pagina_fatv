import { useState } from "react";
import PropTypes from "prop-types";

import {
  JAVI_CORTO_IMG as Javicorto,
  FOCUS_TRANSPARENT_IMG as FocusTransparent,
} from "../../../assets/cloudinaryImages";
import {
  floatSnake,
  cardContainerVariants,
  cardItemReveal,
} from "../../motion/constants/Animations.js";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const navButtonClass =
  "flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#EBF1F9] text-[#0E1A45] transition-colors duration-200 hover:bg-[#FEBE11]";

// Los títulos llegan en mayúsculas desde i18n: se muestran en sentence-case con CSS
// y se parten en dos tonos (blanco / amarillo) sin alterar el texto traducido.
function SlideTitle({ text }) {
  const words = text.split(" ");
  const cut = Math.max(1, Math.floor(words.length / 2));

  return (
    <motion.h3
      variants={cardItemReveal}
      className="font-bold lowercase text-[26px] leading-[30px] xl:text-[30px] xl:leading-[34px] 2xl:text-[37px] 2xl:leading-[38px]"
    >
      <span className="block text-white first-letter:uppercase">
        {words.slice(0, cut).join(" ")}
      </span>
      <span className="block text-[#FEC623]">{words.slice(cut).join(" ")}</span>
    </motion.h3>
  );
}

SlideTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

function CardsCarousel({ slides = [], aside = null }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  if (slides.length === 0) return null;

  const activeSlide = slides[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-10 md:py-12">
      <div
        id="slide-content"
        className="mx-auto grid w-[92%] max-w-[1400px] grid-cols-1 overflow-hidden rounded-[18px] border border-[#EDEFF6] bg-[#FCFDFE] text-[#1B2A5C] shadow-[0_10px_30px_-12px_rgba(7,60,114,0.18)] xl:min-h-[272px] xl:grid-cols-[34.28%_1fr_19.1%]"
      >
        {/* Panel izquierdo: Javi + foco + título del slide */}
        <div className="relative min-h-[260px] overflow-hidden bg-[#073C72] xl:min-h-0">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,73.5 C18,102 50,102 100,71.7 L100,100 L0,100 Z" fill="#FEC623" />
          </svg>

          <motion.img
            {...floatSnake({ initial: { y: 0 }, animate: { y: [0, -6, 0] } })}
            className="absolute left-[6.7%] top-[17.3%] w-[14%]"
            src={FocusTransparent}
            alt=""
            loading="lazy"
          />
          {/* El PNG de Javi trae margen transparente arriba: se posiciona por top para alinear la cabeza */}
          <img
            className="absolute left-[1%] top-[22%] h-[72%] w-auto xl:left-[5%] xl:top-[13%] xl:h-[80%] 2xl:left-[6.7%] 2xl:top-[7%] 2xl:h-[86.7%]"
            src={Javicorto}
            alt="Javi señalando"
            loading="lazy"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              variants={cardContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative z-10 pb-6 pl-[51%] pr-[4%] pt-8 xl:pb-0 xl:pt-[36px]"
            >
              <SlideTitle text={activeSlide.title} />
              {activeSlide.description && (
                <motion.p
                  variants={cardItemReveal}
                  className="mt-[10px] text-[13px] leading-[18px] text-white xl:text-[14px] xl:leading-[20px]"
                >
                  {activeSlide.description}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contenido del slide */}
        <div className="px-6 py-6 xl:py-0 xl:pl-[42px] xl:pr-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              variants={cardContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              {activeSlide.content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sidebar: contenido fijo + navegación */}
        <aside className="flex flex-col bg-[#F5F9FC] px-4 pt-4 xl:pl-[12px] xl:pr-[14px] xl:pt-[7px]">
          {aside}

          <nav className="mt-auto flex h-[42px] items-center justify-center gap-[13px]">
            <button
              onClick={handlePrev}
              className={navButtonClass}
              aria-label={t("newsDetail.cardCarousel.tbn_previous")}
            >
              <FaChevronLeft size={10} />
            </button>
            <span className="select-none text-[11px] text-[#304882]">
              {activeIndex + 1} / {slides.length}
            </span>
            <button
              onClick={handleNext}
              className={navButtonClass}
              aria-label={t("newsDetail.cardCarousel.tbn_next")}
            >
              <FaChevronRight size={10} />
            </button>
          </nav>
        </aside>
      </div>
    </section>
  );
}

CardsCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      content: PropTypes.node.isRequired,
    }),
  ),
  aside: PropTypes.node,
};

export default CardsCarousel;
