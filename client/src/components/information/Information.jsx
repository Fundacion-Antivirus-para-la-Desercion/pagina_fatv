import React, { useState, useRef } from "react";
import EstudiantesUno from "../../assets/images/views/proVocacion/information/estudiantes-uno.jpeg";
import EstudiantesDos from "../../assets/images/views/proVocacion/information/estudiantes-dos.jpeg";
import EstudiantesTres from "../../assets/images/views/proVocacion/information/estudiantes-tres.jpeg";
import EstudiantesCuatro from "../../assets/images/views/proVocacion/information/estudiantes-cuatro.jpeg";
import EstudiantesCinco from "../../assets/images/views/proVocacion/information/estudiantes-cinco.jpeg";
import EstudiantesSeis from "../../assets/images/views/proVocacion/information/estudiantes-seis.jpeg";
import EstudiantesSiete from "../../assets/images/views/proVocacion/information/estudiantes-siete.jpeg";
import EstudiantesOcho from "../../assets/images/views/proVocacion/information/estudiantes-ocho.jpeg";
import EstudiantesNueve from "../../assets/images/views/proVocacion/information/estudiantes-nueve.jpeg";
import EstudiantesDiez from "../../assets/images/views/proVocacion/information/estudiantes-diez.jpeg";
import EstudiantesOnce from "../../assets/images/views/proVocacion/information/estudiantes-once.jpeg";
import EstudiantesDoce from "../../assets/images/views/proVocacion/information/estudiantes-doce.jpeg";
import EstudiantesTrece from "../../assets/images/views/proVocacion/information/estudiantes-trece.jpeg";
import EstudiantesCatorce from "../../assets/images/views/proVocacion/information/estudiantes-catorce.jpeg";
import Estudiantesquince from "../../assets/images/views/proVocacion/information/estudiantes-quince.jpeg";
import EstudiantesDieciseis from "../../assets/images/views/proVocacion/information/estudiantes-dieciseis.jpg";

import Javicorto from "../../assets/images/views/javi/javi-corto.webp";
import Javi from "../../assets/images/views/javi/javi-senala.webp";
import FocusTransparent from "../../assets/images/views/proVocacion/information/focus.webp";
import { floatSnake } from "../../components/motion/constants/Animations.js";
import { motion, time } from "framer-motion";

import Focus from "../../assets/images/views/proVocacion/information/focus.svg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Mousewheel } from "swiper/modules";

const whatsAppNumber = "573173831481";

function Information() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const swiperRef = useRef(null);

  const slideData = [
    {
      id: 1,
      image: EstudiantesDiez,
      title: t("provocacion.information.cards.one.title"),
      questions: [
        {
          q: t("provocacion.information.cards.one.questionOne"),
          a: t("provocacion.information.cards.one.answerOne"),
        },
        {
          q: t("provocacion.information.cards.one.questionTwo"),
          a: t("provocacion.information.cards.one.answerTwo"),
        },
        {
          q: t("provocacion.information.cards.one.questionThree"),
          a: t("provocacion.information.cards.one.answerThree"),
        },
      ],
    },
    {
      id: 2,
      image: EstudiantesDieciseis,
      title: t("provocacion.information.cards.two.title"),
      description: t("provocacion.information.cards.two.description"),
      titleTwo: t("provocacion.information.cards.two.titleTwo"),
      studentFocus: [
        t("provocacion.information.cards.two.studentFocus.autoperception"),
        t("provocacion.information.cards.two.studentFocus.autobservacion"),
        t("provocacion.information.cards.two.studentFocus.autoestima"),
        t("provocacion.information.cards.two.studentFocus.autoconcepto"),
        t("provocacion.information.cards.two.studentFocus.autonomia"),
        t("provocacion.information.cards.two.studentFocus.autoconfianza"),
        t("provocacion.information.cards.two.studentFocus.automotivacion"),
        t("provocacion.information.cards.two.studentFocus.autoevaluacion"),
      ],
    },
    {
      id: 3,
      image: EstudiantesDos,
      title: t("provocacion.information.cards.three.title"),
      itemsServices: [
        t("provocacion.information.cards.three.listServices.one"),
        t("provocacion.information.cards.three.listServices.two"),
        t("provocacion.information.cards.three.listServices.three"),
        t("provocacion.information.cards.three.listServices.four"),
        t("provocacion.information.cards.three.listServices.five"),
        t("provocacion.information.cards.three.listServices.six"),
        t("provocacion.information.cards.three.listServices.seven"),
      ],
    },
    {
      id: 4,
      image: EstudiantesTres,
      title: t("provocacion.information.cards.four.title"),
      title: t("provocacion.information.cards.four.title_two"),
      itemsServices: [
        t("provocacion.information.cards.four.one"),
        t("provocacion.information.cards.four.two"),
        t("provocacion.information.cards.four.three"),
        t("provocacion.information.cards.four.price"),
        t("provocacion.information.cards.four.final_price"),
      ],
    },
  ];

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
                  <section id="main-content">
                    <section className="grid grid-cols-1 xl:grid-cols-[3fr_7fr] items-center justify-center mb-2 xl:mb-5">
                      <div className="justify-self-center xl:justify-self-end">
                        {/* Imagen */}
                        <img
                          className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
                          src={slide.image}
                          alt=""
                        />
                      </div>

                      {/* Texto */}
                      <div className="flex flex-col justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
                        {slide.title && (
                          <h4 className="text-xl md:text-3xl font-impact text-dark-blue bg-primary-yellow rounded-xl p-2 mb-2">
                            {slide.title}
                          </h4>
                        )}
                        {slide.description && (
                          <p className="text-base md:text-xl mb-2">
                            {slide.description}
                          </p>
                        )}
                        {slide.titleTwo && (
                          <h5 className="text-xl md:text-2xl font-impact text-dark-blue mb-2">
                            {slide.titleTwo}
                          </h5>
                        )}
                        {slide.studentFocus && (
                          <ul className="list-disc pl-5">
                            {slide.studentFocus.map((item, idx) => (
                              <li
                                key={idx}
                                className="mb-1 text-sm md:text-base xl:text-lg"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {slide.itemsServices && (
                          <ul className="list-disc pl-5">
                            {slide.itemsServices.map((item, idx) => (
                              <li
                                key={idx}
                                className="mb-1 text-sm md:text-base xl:text-lg"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {slide.questions && (
                          <div className="mb-4 w-full">
                            {slide.questions.map((qa, idx) => (
                              <div key={idx} className="mb-3">
                                <strong className="block text-base md:text-xl text-dark-blue mb-1">
                                  {qa.q}
                                </strong>
                                <p className="text-sm md:text-base xl:text-lg md:text-left">
                                  {qa.a}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </section>
                    <section>
                      {/* Botón debajo de imagen y texto, dentro de la card */}
                      <div className="w-full flex justify-center items-center">
                        <a
                          className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                          href={`https://wa.me/${whatsAppNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("provocacion.information.i_want_it")}
                          <img src={Focus} alt="icono" className="w-10 h-10" />
                        </a>
                      </div>
                    </section>
                  </section>

                  <section id="navigation">
                    {/* Flechas de navegación custom */}
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

export default Information;
