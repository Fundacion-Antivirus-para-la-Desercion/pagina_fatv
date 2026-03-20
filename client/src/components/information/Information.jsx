import React from "react";
import styles from "./Information.module.css";
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

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Mousewheel } from "swiper/modules";
import { Navigation } from "swiper/modules";

const whatsAppNumber = "573173831481";

function Information() {
  const { t } = useTranslation();

  const slideData = [
    {
      id: 1,
      image: EstudiantesDiez,
      title: t("provocacion.information.cards.one.title"),
      questions: [
        {
          q: t("provocacion.information.cards.one.questionOne"),
          a: t("provocacion.information.cards.one.answernOne"),
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
      questions: [
        {
          q: t("provocacion.information.cards.two.questionOne"),
          a: t("provocacion.information.cards.two.answerOne"),
        },
        {
          q: t("provocacion.information.cards.two.questionTwo"),
          a: t("provocacion.information.cards.two.answerTwo"),
        },
      ],
    },
    {
      id: 3,
      image: EstudiantesDos,
      title: t("information.cards.three.title"),
      questions: [
        {
          q: "Título de pregunta 1",
          a: "Texto de respuesta de prueba para la pregunta 1 de la tercera card.",
        },
        {
          q: "Título de pregunta 2",
          a: "Texto de respuesta de prueba para la pregunta 2 de la segunda card.",
        },
      ],
    },
  ];

  return (
    <>
      <section className="bg-[#FFEBB8]">
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
              className="w-[180px] md:w-[250px] xl:w-[260px]"
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
          modules={[EffectCreative, Mousewheel]}
          className="mySwiper"
          style={{ height: "700px" }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <section className="w-[80%] md:w-[65%] lg:w-[60%] mx-auto">
                <div className="relative flex flex-col bg-white p-6 md:p-10 text-blue-base rounded-[40px] text-center md:text-left items-center min-h-[550px] border-t-[10px] border-primary-yellow">
                  <div className="flex flex-col xl:flex-row w-full items-center mb-5">
                    {/* Imagen */}
                    <img
                      className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
                      src={slide.image}
                      alt=""
                    />
                    {/* Texto */}
                    <div className="flex flex-col items-center md:items-start justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
                      {slide.title && (
                        <h4 className="text-xl md:text-4xl font-impact text-primary-yellow mb-2">
                          {slide.title}
                        </h4>
                      )}
                      <div className="mb-4 w-full mx-5">
                        {slide.questions &&
                          slide.questions.map((qa, idx) => (
                            <div key={idx} className="mb-3">
                              <strong className="block text-base md:text-xl text-dark-blue mb-1">
                                {qa.q}
                              </strong>
                              <p className="text-sm md:text-base xl:text-lg text-center md:text-left">
                                {qa.a}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
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
