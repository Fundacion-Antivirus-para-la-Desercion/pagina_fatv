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
import { motion } from "framer-motion";

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
      image: EstudiantesDieciseis,
      title: t("provocacion.information.directed_to"),
      paragraphs: [
        t("provocacion.information.who_is_it_for"),
        t("provocacion.information.young_people_description"),
        t("provocacion.information.students_description"),
        t("provocacion.information.when_moment"),
        t("provocacion.information.decision_time"),
        t("provocacion.information.academic_future"),
        t("provocacion.information.what_are_they_living"),
        t("provocacion.information.feelings_description"),
      ],
    },
    {
      image: EstudiantesDiez,
      title: t("provocacion.information.installed_capacities"),
      paragraphs: [
        t("provocacion.information.skills_promotion"),
        t("provocacion.information.focus_on_autos"),
        t("provocacion.information.self_perception"),
        t("provocacion.information.self_observation"),
        t("provocacion.information.self_esteem"),
        t("provocacion.information.self_concept"),
        t("provocacion.information.autonomy"),
        t("provocacion.information.self_confidence"),
        t("provocacion.information.self_motivation"),
        t("provocacion.information.self_evaluation"),
      ],
    },
    {
      image: EstudiantesCinco,
      title: t("provocacion.information.what_includes_service"),
      titleTwo: t("provocacion.information.payment_methods"),
      titleThree: t("provocacion.information.cost"),
      paragraphs: [
        t("provocacion.information.five_sessions"),
        t("provocacion.information.one_counseling"),
        t("provocacion.information.digital_tools"),
        t("provocacion.information.experiential_activities"),
        t("provocacion.information.experience_exchange"),
        t("provocacion.information.whatsapp_support"),
        t("provocacion.information.participation_certificate"),
        t("provocacion.information.bank_transfer"),
        t("provocacion.information.debit_card"),
        t("provocacion.information.credit_card"),
        t("provocacion.information.base_price"),
        t("provocacion.information.final_price"),
      ],
    },
  ];

  return (
    <>
      <section className="bg-[#FFEBB8]">
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
          style={{ height: "1100px" }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <section className="w-[90%] md:w-[65%] lg:w-[70%] mx-auto my-5 pt-10">
                <div className="relative flex flex-col xl:flex-row bg-white p-6 md:p-10 text-blue-base rounded-[40px] text-center items-center min-h-[800px]">
                  {/* Contenido de texto */}
                  <img
                    className="w-[500px] rounded-xl"
                    src={slide.image}
                    alt=""
                  />

                  <div className="flex flex-col items-center justify-center gap-4 flex-1 px-3 md:px-6 lg:px-10 mt-6 xl:mt-0">
                    <h4 className="text-xl md:text-3xl font-impact text-primary-yellow mb-2">
                      {slide.title}
                    </h4>

                    <div className="mb-4 w-full">
                      {/* Para las dos primeras cards, solo lista los párrafos */}
                      {index !== 2 ? (
                        slide.paragraphs.map((paragraph, idx) => (
                          <p
                            key={idx}
                            className="text-sm md:text-base xl:text-lg font-extrabold text-center mb-3"
                          >
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <>
                          {/* Servicios incluidos */}
                          <div className="mb-4">
                            {slide.paragraphs.slice(0, 7).map((paragraph, idx) => (
                              <p
                                key={idx}
                                className="text-sm md:text-base xl:text-lg font-extrabold text-center mb-3"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                          {/* Métodos de pago y Costos en columnas en desktop, stack en móvil */}
                          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full text-center">
                            <div className="flex-1 flex flex-col items-center">
                              {slide.titleTwo && (
                                <h4 className="text-xl md:text-3xl font-impact text-primary-yellow mb-2 text-center md:text-left">
                                  {slide.titleTwo}
                                </h4>
                              )}
                              {slide.paragraphs.slice(7, 10).map((paragraph, idx) => (
                                <p
                                  key={idx}
                                  className="text-sm md:text-base xl:text-lg font-extrabold text-center md:text-left mb-3"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                              {slide.titleThree && (
                                <h4 className="text-xl md:text-3xl font-impact text-primary-yellow mb-2 text-center md:text-left">
                                  {slide.titleThree}
                                </h4>
                              )}
                              {slide.paragraphs.slice(10).map((paragraph, idx) => (
                                <p
                                  key={idx}
                                  className="text-sm md:text-base xl:text-lg font-extrabold text-center md:text-left mb-3"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                      <div className="w-full flex justify-center items-center mt-6">
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
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Javi + Foco */}
        <div className="flex justify-center flex-shrink-0">
          <div className="relative">
            <motion.div
              {...floatSnake(0)}
              className="absolute top-10 md:top-16 -left-5"
            >
              <img className="h-16 md:h-24" src={FocusTransparent} alt="" />
            </motion.div>
            <img
              className="w-[150px] md:w-[280px] xl:w-[270px]"
              src={Javicorto}
              alt="Javi señalando"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Information;
