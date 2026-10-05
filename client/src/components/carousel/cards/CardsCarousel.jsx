import { useRef, useState } from "react";
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

// Envuelve lo que cambia al pasar de slide.
// Cuando `slideId` cambia, React ve un elemento nuevo (por la `key`) y
// AnimatePresence primero anima la salida del anterior y después la entrada
// del nuevo (`mode="wait"`). Los hijos con `variants={cardItemReveal}` se
// animan uno tras otro gracias a `cardContainerVariants`.
function AnimatedSlide({ slideId, className, children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideId}
        variants={cardContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

AnimatedSlide.propTypes = {
  slideId: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Los títulos llegan en MAYÚSCULAS desde i18n. Con CSS se pasan a minúscula
// (`lowercase` + `first-letter:uppercase`) y se parten a la mitad: la primera
// mitad de palabras en blanco y la segunda en amarillo.
function SlideTitle({ text, singleLine = false }) {
  const words = text.split(" ");
  const cut = Math.max(1, Math.floor(words.length / 2));

  return (
    <motion.h3
      variants={cardItemReveal}
      className="font-bold text-[26px] leading-[30px] xl:text-[30px] xl:leading-[34px] 2xl:text-[37px] 2xl:leading-[38px]"
    >
      <span className={`${singleLine ? "" : "block"} text-white`}>
        {words.slice(0, cut).join(" ")}{singleLine ? " " : ""}
      </span>
      <span className={`${singleLine ? "" : "block"} text-primary-yellow`}>
        {words.slice(cut).join(" ")}
      </span>
    </motion.h3>
  );
}

SlideTitle.propTypes = {
  text: PropTypes.string.isRequired,
  singleLine: PropTypes.bool,
};

// Fondo del panel izquierdo: curva amarilla, foco flotando y Javi.
function JaviBackground() {
  return (
    <>
      <motion.img
        {...floatSnake({ initial: { y: 0 }, animate: { y: [0, -6, 0] } })}
        className="absolute h-14 md:h-20 -left-3 md:-left-5"
        src={FocusTransparent}
        alt=""
        loading="lazy"
      />
      <img
        className="max-h-[160px] md:max-h-[250px]"
        src={Javicorto}
        alt="Javi señalando"
        loading="lazy"
      />
    </>
  );
}

// Botones ‹ › y el contador "1 / 3" debajo de la card.
function CarouselNav({ position, total, onPrevious, onNext }) {
  const { t } = useTranslation();

  return (
    <nav className="mt-4 flex items-center justify-center gap-[13px]">
      <button
        onClick={onPrevious}
        className={navButtonClass}
        aria-label={t("newsDetail.cardCarousel.tbn_previous")}
      >
        <FaChevronLeft size={16} />
      </button>
      <span className="select-none text-[11px] text-dark-blue">
        {position} / {total}
      </span>
      <button
        onClick={onNext}
        className={navButtonClass}
        aria-label={t("newsDetail.cardCarousel.tbn_next")}
      >
        <FaChevronRight size={16} />
      </button>
    </nav>
  );
}

CarouselNav.propTypes = {
  position: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

// Carrusel de 3 columnas. Solo guarda qué slide está activo (`activeIndex`);
// todo lo que se ve sale de `slides[activeIndex]` y de `aside`.
function CardsCarousel({ slides = [], aside = null }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  if (slides.length === 0) return null;

  const activeSlide = slides[activeIndex];
  const lastIndex = slides.length - 1;

  // En mobile el slide nuevo puede quedar debajo del scroll actual: subimos al inicio
  // del carrusel. Solo se llama desde los botones, nunca al cambiar de slide solo.
  const scrollToCarouselOnMobile = () => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Al llegar a un extremo da la vuelta: del primero se pasa al último y viceversa.
  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? lastIndex : current - 1));
    scrollToCarouselOnMobile();
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === lastIndex ? 0 : current + 1));
    scrollToCarouselOnMobile();
  };

  return (
    <section ref={sectionRef} className="bg-white py-10 md:py-12">
      {/* 3 columnas en xl: título (34.28%) | contenido (resto) | aside (19.1%) */}
      <div
        id="slide-content"
        className="mx-auto grid w-[92%] max-w-[1500px] grid-cols-1 xl:grid-cols-[34.28%_1fr_19.1%] overflow-hidden rounded-3xl bg-[#FCFDFE] text-dark-blue shadow-[0_10px_30px_-12px_rgba(7,60,114,0.18)] xl:min-h-[300px]"
      >
        {/* 1. Panel izquierdo: Javi + título del slide */}
        <div className="grid grid-cols-2 relative min-h-[270px] bg-brand-blue-300 px-3">
          <div className="absolute bottom-0 right-0 z-10 ">
            <JaviBackground />
          </div>
          <AnimatedSlide
            slideId={activeSlide.id}
            className="relative z-10 pb-6 pt-8 xl:pb-0 xl:pt-[36px]"
          >
            <SlideTitle text={activeSlide.title} singleLine={activeSlide.singleLine} />
            {activeSlide.description && (
              <motion.p
                variants={cardItemReveal}
                className="mt-[10px] text-sm md:text-base lg:text-lg leading-[18px] text-white xl:leading-[20px]"
              >
                {activeSlide.description}
              </motion.p>
            )}
          </AnimatedSlide>

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,73.5 C18,102 50,102 100,71.7 L100,100 L0,100 Z"
              fill="#FFBA08"
            />
          </svg>
        </div>

        {/* 2. Contenido del slide */}
        <div className="px-6 py-6 xl:py-0 xl:pl-[42px] xl:pr-4">
          <AnimatedSlide slideId={activeSlide.id} className="h-full">
            {activeSlide.content}
          </AnimatedSlide>
        </div>

        {/* 3. Aside: no cambia entre slides */}
        <aside className="flex flex-col bg-white px-4 pt-4 xl:pl-[12px] xl:pr-[14px] xl:pt-[7px]">
          {aside}
        </aside>
      </div>

      <CarouselNav
        position={activeIndex + 1}
        total={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </section>
  );
}

CardsCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      singleLine: PropTypes.bool,
      content: PropTypes.node.isRequired,
    }),
  ),
  aside: PropTypes.node,
};

export default CardsCarousel;
