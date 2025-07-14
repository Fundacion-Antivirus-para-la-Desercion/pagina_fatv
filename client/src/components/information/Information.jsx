import React from "react";
import styles from "./Information.module.css";
import EstudiantesUno from "../../assets/images/views/proVocacion/information/estudiantes-uno.jpeg";
import EstudiantesDos from "../../assets/images/views/proVocacion/information/estudiantes-dos.jpeg";
import EstudiantesTres from "../../assets/images/views/proVocacion/information/estudiantes-tres.jpeg";
import EstudiantesCuantro from "../../assets/images/views/proVocacion/information/estudiantes-cuatro.jpeg";
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

import Focus from "../../assets/images/views/proVocacion/information/focus.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const whatsAppNumber = "573173831481";

function Information() {
  return (
    <>
      <section className="h-auto shadow-lg mb-5 bg-[#222D56]  text-white">
        <Swiper
          spaceBetween={30}
          navigation={{ clickable: true }}
          modules={[Navigation]}
          className="mySwiper h-full"
          loop={true}
        >
          <SwiperSlide>
            <section className="grid lg:grid-cols-[5fr_7fr] overflow-hidden">
              <div className="flex flex-col gap-2 py-4 relative bottom-9 lg:max-h-[560px] max-h-[700px]">
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-24 right-20">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative left-72"></div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-36 left-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesUno}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732]  h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-48 right-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDieciseis}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesTres}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-60 left-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCuantro}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCinco}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-[280px] right-14">
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative bottom-2 left-64"></div>
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>
              </div>

              <div className="flex flex-col h-full items-center justify-between gap-4 p-6 rounded-lg">
                <h3
                  className={`mb-1 text-4xl text-[#F8B732] font-bold ${styles.title}`}
                >
                  DIRIGIDO A :
                </h3>

                <div className="mb-1">
                  <p className="text-lg font-bold text-center mb-2">
                    ¿A quién está dirigido?
                  </p>
                  <p className="text-lg text-center w-3/4 mx-auto">
                    <strong>
                      Jóvenes que están próximos a tomar decisiones importantes
                      sobre su vida,
                    </strong>{" "}
                    especialmente en relación con su proyecto de vida.
                    Estudiantes de últimos años escolares, egresados del
                    bachillerato o jóvenes en transición.
                  </p>
                </div>

                <div className="mb-1">
                  <p className="text-lg font-bold text-center mb-2">
                    ¿En qué momento?
                  </p>
                  <p className="text-lg text-center">
                    Cuando necesitan tomar decisiones sobre su
                    <strong> futuro académico y profesional.</strong>
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-center mb-2">
                    ¿Qué están viviendo?
                  </p>
                  <p className="text-lg text-center">
                    <strong>
                      Sentimientos de desorientación, confusión o inseguridad
                      frente al futuro.
                    </strong>
                  </p>
                </div>

                <section className="w-full flex justify-end items-end">
                  <a
                    className="flex px-8 py-2 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lo quiero
                    <img src={Focus} alt="icono" className="w-10 h-10" />
                  </a>
                </section>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="grid lg:grid-cols-[4fr_6fr] overflow-hidden">
              <div className="flex flex-col gap-2 py-4 relative bottom-9 lg:max-h-[560px] max-h-[700px]">
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-24 right-20">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative left-72"></div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-36 left-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesNueve}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732]  h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesOcho}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-48 right-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDieciseis}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesSiete}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-60 left-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesSeis}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDiez}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-[280px] right-14">
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative bottom-2 left-64"></div>
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>
              </div>

              <div className="flex flex-col h-full  items-center justify-between gap-4 p-6 rounded-lg">
                <h3
                  className={`mb-1 text-4xl text-[#F8B732] font-semibold  ${styles.title}`}
                >
                  CAPACIDADES INSTALADAS
                </h3>

                <div className="mb-1">
                  <p className="text-lg font-semibold text-center mb-4 w-3/4 mx-auto">
                    Promovemos el desarrollo de habilidades personales y
                    emocionales que permiten a los jóvenes conocerse, valorarse
                    y proyectarse.
                  </p>
                  <h3
                    className={`mb-1 text-4xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                  >
                    ENFOQUE EN LOS AUTOS
                  </h3>
                </div>
                <div className="mb-1">
                  <p className="text-base font-semibold text-center">
                    🧠 Autopercepción: Reconocer quién soy y cómo me veo.
                  </p>

                  <p className="text-base font-semibold text-center">
                    👁️ Autobservación: Identificar mis emociones y
                    comportamientos.
                  </p>

                  <p className="text-base font-semibold text-center">
                    ❤️ Autoestima: Valorarme y reconocer mi propio valor.
                  </p>

                  <p className="text-base font-semibold text-center">
                    🔍 Autoconcepto: Comprender cómo me defino.
                  </p>

                  <p className="text-base font-semibold text-center">
                    🧭 Autonomía: Tomar decisiones conscientes y responsables.
                  </p>

                  <p className="text-base font-semibold text-center">
                    💪 Autoconfianza: Creer en mis habilidades y potencial.
                  </p>

                  <p className="text-base font-semibold text-center">
                    🔥 Automotivación: Impulsarme desde adentro.
                  </p>

                  <p className="text-base font-semibold text-center">
                    📊 Autoevaluación: Aprender de mis acciones y experiencias.{" "}
                  </p>
                </div>

                <section className="w-full flex justify-end">
                  <a
                    className="flex px-8 py-2 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lo quiero
                    <img src={Focus} alt="icono" className="w-10 h-10" />
                  </a>
                </section>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="grid lg:grid-cols-[4fr_6fr] overflow-hidden">
              <div className="flex flex-col gap-2 py-4 relative bottom-9 lg:max-h-[560px] max-h-[700px]">
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-24 right-20">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative left-72"></div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-36 left-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDoce}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732]  h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesOnce}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-48 right-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDieciseis}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={Estudiantesquince}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-60 left-16">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={`object-[center_top] ${styles.diamondImage}`}
                      src={EstudiantesCatorce}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesTrece}
                      alt=""
                    />
                  </div>
                </section>

                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-[280px] right-14">
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative bottom-2 left-64"></div>
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>
              </div>

              <div className="flex flex-col h-full  items-center justify-between gap-4 p-6 rounded-lg">
                <h3
                  className={`mb-1 text-4xl text-[#F8B732] font-semibold ${styles.title}`}
                >
                  ¿QUÉ INCLUYE EL SERVICIO?
                </h3>

                <div className="mb-1">
                  <p className="text-lg text-center ">
                    <strong> - 5 sesiones grupales y/o individuales</strong>
                  </p>

                  <p className="text-lg text-center">
                    <strong>
                      - 1 asesoría sociovocacional individual (a demanda)
                    </strong>
                  </p>

                  <p className="text-lg text-center">
                    - Herramientas digitales y guías prácticas para cada sesión
                  </p>

                  <p className="text-lg text-center w-3/4 mx-auto">
                    <strong> - Actividades experienciales</strong> (Una de las
                    sesiones incluye intercambio de experiencias, ya sea en una
                    universidad o con un profesional del área de interés.)
                  </p>

                  <p className="text-lg text-center">
                    - Grupo de WhatsApp de apoyo o resolución de dudas
                  </p>

                  <p className="text-lg text-center mb-1">
                    <strong>- Certificado de participación</strong>
                  </p>

                  <section className="flex  justify-center gap-10  mt-4">
                    <div>
                      <div>
                        <h3
                          className={`mb-1 text-3xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                        >
                          MEDIOS DE PAGO
                        </h3>
                      </div>
                      <div className="mb-1">
                        <p className="text-lg font-bold text-center mb-1">
                          - Transferencia bancaria
                        </p>

                        <p className="text-lg font-bold  text-center mb-1">
                          - Tarjeta débito
                        </p>

                        <p className="text-lg font-bold  text-center mb-1">
                          - Tarjeta crédito
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h3
                          className={`mb-1 text-3xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                        >
                          COSTO
                        </h3>
                      </div>
                      <div className="mb-1">
                        <p className="text-lg font-bold  text-center mb-1">
                          450.000 + IVA
                        </p>

                        <p className="text-lg font-bold  text-center mb-1">
                          535.500
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                <section className="w-full flex justify-end">
                  <a
                    className="flex px-8 py-2 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out
               hover:-translate-y-1 hover:shadow-lg"
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lo quiero
                    <img src={Focus} alt="icono" className="w-10 h-10" />
                  </a>
                </section>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Information;
