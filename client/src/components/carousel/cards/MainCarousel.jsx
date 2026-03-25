import { useState, useRef } from "react";

import Javicorto from "../../../assets/images/views/javi/javi-corto.webp";
import FocusTransparent from "../../../assets/images/views/proVocacion/information/focus.webp";
import { floatSnake } from "../../../components/motion/constants/Animations.js";
import { motion } from "framer-motion";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Mousewheel } from "swiper/modules";

function MainCarousel({
    slideData = [<div>No hay contenido</div>, <div>No hay contenido</div>, <div>No hay contenido</div>],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const swiperRef = useRef(null);

  return (
    <>
      <section className="bg-[#06407A] py-10 md:py-16 lg:py-20">
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
        <Swiper
          effect={"creative"}
          grabCursor={true}
          speed={500}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          direction={"vertical"}
          creativeEffect={{
            prev: {
              translate: [0, 0, -1],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          onSlideChange={(swiper) => {
            setPrevIndex(activeIndex);
            setActiveIndex(swiper.activeIndex);
            setIsTransitioning(true);
          }}
          onSlideChangeTransitionEnd={() => {
            setIsTransitioning(false);
            setPrevIndex(null);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          allowTouchMove={false}
          touchStartPreventDefault={false}
          modules={[EffectCreative, Mousewheel]}
          className="mySwiper h-[1000px] md:h-[1100px] xl:h-[700px]"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide
              key={index}
              style={{
                visibility:
                  index === activeIndex ||
                  (isTransitioning && index === prevIndex)
                    ? "visible"
                    : "hidden",
              }}
            >
              <section className="w-[80%] md:w-[65%] lg:w-[80%] mx-auto">
                <div
                  id="slide-content"
                  className="h-fit max-w-[1200px] mx-auto relative bg-white p-6 md:p-10 text-blue-base rounded-[40px] md:text-left border-t-[10px] border-primary-yellow"
                >
                  <section id="main-content">{slide}</section>

                  {/* Flechas de navegación custom */}
                  <section id="navigation">
                    <div className="w-full flex justify-center items-center gap-6 mt-4">
                      <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={activeIndex === 0}
                        className="p-3 rounded-full bg-[#222D56] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#06407A] transition-all duration-200 hover:scale-110"
                        aria-label="Anterior"
                      >
                        <FaChevronLeft size={16} />
                      </button>
                      <span className="text-[#222D56] font-bold text-sm select-none">
                        {index + 1} / {slideData.length}
                      </span>
                      <button
                        onClick={() => swiperRef.current?.slideNext()}
                        disabled={activeIndex === slideData.length - 1}
                        className="p-3 rounded-full bg-[#222D56] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#06407A] transition-all duration-200 hover:scale-110"
                        aria-label="Siguiente"
                      >
                        <FaChevronRight size={16} />
                      </button>
                    </div>
                  </section>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default MainCarousel;
