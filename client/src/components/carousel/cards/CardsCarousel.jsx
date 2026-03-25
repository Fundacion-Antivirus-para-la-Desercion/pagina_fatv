import { useState, useRef } from "react";

import Javicorto from "../../../assets/images/views/javi/javi-corto.webp";
import FocusTransparent from "../../../assets/images/views/proVocacion/information/focus.webp";
import { floatSnake, cardContainerVariants } from "../../motion/constants/Animations.js";
import { motion, AnimatePresence } from "framer-motion";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CardsCarousel({
    slideData = [<div>No hay contenido</div>, <div>No hay contenido</div>, <div>No hay contenido</div>],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? slideData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= slideData.length - 1 ? 0 : prev + 1));
  };

  // Detecta scroll del mouse para cambiar de slide
  const handleWheel = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0) {
      handleNext();
    } else if (e.deltaY < 0) {
      handlePrev();
    }

    // Espera 600ms antes de permitir otro cambio
    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  };

  return (
    <>
      <section className="bg-[#06407A] py-10 md:py-16 lg:py-20" onWheel={handleWheel}>
        {/* Javi + Foco */}
        <div className="flex justify-center flex-shrink-0">
          <div className="relative bottom-0">
            <motion.div
              {...floatSnake(0)}
              className="absolute top-10 md:top-16 -left-5"
            >
              <img className="h-16 md:h-24" src={FocusTransparent} alt="" />
            </motion.div>
            <img
              className="w-[180px] md:w-[240px] xl:w-[250px]"
              src={Javicorto}
              alt="Javi señalando"
            />
          </div>
        </div>

        <section className="w-[80%] md:w-[65%] lg:w-[80%] mx-auto">
          <div
            id="slide-content"
            className="min-h-[1050px] xl:min-h-[690px] max-w-[1200px] mx-auto relative bg-white p-6 md:p-10 text-blue-base rounded-[40px] md:text-left border-t-[10px] border-primary-yellow"
          >
            <section id="main-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={cardContainerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {slideData[activeIndex]}
                </motion.div>
              </AnimatePresence>
            </section>

            {/* Flechas de navegación */}
            <section id="navigation" className="absolute bottom-10 left-0 right-0">
              <div className="w-full flex justify-center items-center gap-6 mt-4">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-[#222D56] text-white hover:bg-[#06407A] transition-all duration-200 hover:scale-110"
                  aria-label="Anterior"
                >
                  <FaChevronLeft size={16} />
                </button>
                <span className="text-[#222D56] font-bold text-sm select-none">
                  {activeIndex + 1} / {slideData.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-[#222D56] text-white hover:bg-[#06407A] transition-all duration-200 hover:scale-110"
                  aria-label="Siguiente"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default CardsCarousel;
