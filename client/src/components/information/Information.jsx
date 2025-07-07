import React from "react";
import styles from "./Information.module.css";
import EstudiantesUno from "../../assets/images/views/proVocacion/information/estudiantes-uno.jpeg";
import EstudiantesDos from "../../assets/images/views/proVocacion/information/estudiantes-dos.jpeg";
import EstudiantesTres from "../../assets/images/views/proVocacion/information/estudiantes-tres.jpeg";
import EstudiantesCuantro from "../../assets/images/views/proVocacion/information/estudiantes-cuatro.jpeg";
import EstudiantesCinco from "../../assets/images/views/proVocacion/information/estudiantes-cinco.jpeg";
import Focus from "../../assets/images/views/proVocacion/information/focus.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Information() {
  return (
    <>
      <section className="h-auto shadow-lg mb-5 bg-[#222D56]  text-white">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <section className="grid lg:grid-cols-[4fr_6fr] overflow-hidden">
              <div className="flex flex-col gap-2 py-4 relative bottom-9 lg:max-h-[560px] max-h-[600px] overflow-hidden">
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-28 right-32">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative left-72"></div>
                  <div className="bg-[#F8B732]  h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-40 left-4">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesUno}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-52 right-28">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesTres}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-64 left-4">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCuantro}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCinco}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-72 right-24">
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative bottom-4 left-60"></div>
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center "></div>
                </section>
              </div>

              <div className="flex flex-col h-full  items-center gap-4 p-6 rounded-lg shadow-md">
                <h3
                  className={`mb-1 text-4xl text-[#F8B732] font-bold  ${styles.title}`}
                >
                  DIRIGIDO A :
                </h3>

                <div className="mb-1">
                  <p className="text-lg font-bold text-center mb-2">
                    ¿A quién está dirigido?
                  </p>
                  <p className="text-lg text-center">
                    Jóvenes de secundaria (grados 9°, 10° y 11°) <br /> o
                    próximos a definir su proyecto de vida.
                  </p>
                </div>
                <div className="mb-1">
                  <p className="text-lg font-bold text-center mb-2">
                    ¿En qué momento?
                  </p>
                  <p className="text-lg text-center">
                    Cuando necesitan tomar decisiones sobre su <br />
                    <strong>futuro académico y profesional.</strong>
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-center mb-2">
                    ¿Qué están viviendo?
                  </p>
                  <p className="text-lg text-center">
                    Sentimientos de desorientación, confusión <br /> o
                    inseguridad frente al futuro.
                  </p>
                </div>
                <section className="w-full flex justify-end">
                  <a
                    className="flex px-8 py-2 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center"
                    href=""
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
              <div className="flex flex-col gap-2 py-4 relative bottom-9 lg:max-h-[560px] max-h-[600px] overflow-hidden">
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-28 right-32">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative left-72"></div>
                  <div className="bg-[#F8B732]  h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-40 left-4">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesUno}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-52 right-28">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesTres}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-64 left-4">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCuantro}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCinco}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-72 right-24">
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative bottom-4 left-60"></div>
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center "></div>
                </section>
              </div>

              <div className="flex flex-col h-full  items-center gap-4 p-6 rounded-lg shadow-md">
                <h3
                  className={`mb-1 text-4xl text-[#F8B732] font-semibold  ${styles.title}`}
                >
                  CAPACIDADES INSTALADAS
                </h3>

                <div className="mb-1">
                  <p className="text-lg text-center mb-4">
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
                  <p className="text-base text-center">
                    🧠 Autopercepción: Reconocer quién soy y cómo me veo.
                  </p>

                  <p className="text-base text-center">
                    👁️ Autobservación: Identificar mis emociones y
                    comportamientos.
                  </p>

                  <p className="text-base text-center">
                    ❤️ Autoestima: Valorarme y reconocer mi propio valor.
                  </p>

                  <p className="text-base text-center">
                    🔍 Autoconcepto: Comprender cómo me defino.
                  </p>

                  <p className="text-base text-center">
                    🧭 Autonomía: Tomar decisiones conscientes y responsables.
                  </p>

                  <p className="text-base text-center">
                    💪 Autoconfianza: Creer en mis habilidades y potencial.
                  </p>

                  <p className="text-base text-center">
                    🔥 Automotivación: Impulsarme desde adentro.
                  </p>

                  <p className="text-base text-center">
                    📊 Autoevaluación: Aprender de mis acciones y experiencias.{" "}
                  </p>
                </div>

                <section className="w-full flex justify-end">
                  <a
                    className="flex px-8 py-2 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center"
                    href=""
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
              <div className="flex flex-col gap-2 py-4 relative bottom-9 lg:max-h-[560px] max-h-[600px] overflow-hidden">
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-28 right-32">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative left-72"></div>
                  <div className="bg-[#F8B732]  h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-40 left-4">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesUno}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-52 right-28">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesTres}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-64 left-4">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCuantro}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCinco}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-72 right-24">
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative bottom-4 left-60"></div>
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center "></div>
                </section>
              </div>

              <div className="flex flex-col h-full  items-center gap-4 p-6 rounded-lg shadow-md">
                <h3
                  className={`mb-1 text-4xl text-[#F8B732] font-semibold  ${styles.title}`}
                >
                  INCLUYE
                </h3>

                <div className="mb-1">
                  <p className="text-lg text-center ">
                    Te damos todo lo que necesitas:
                  </p>

                  <p className="text-lg text-center mb-4">
                    Materiales y recursos para aprovechar al máximo cada sesión.
                  </p>

                  <h3
                    className={`mb-1 text-4xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                  >
                    METODOLOGÍA
                  </h3>
                </div>
                <div className="mb-1">
                  <p className="text-lg text-center mb-1">
                    Nos adaptamos a ti:
                  </p>

                  <p className="text-lg text-center mb-1">
                    Presencial o híbrida, según tu contexto.
                  </p>

                  <p className="text-lg text-center mb-1">
                    Enfoque teórico-práctico, para aprender haciendo.
                  </p>

                  <p className="text-lg text-center mb-1">
                    Trabajo individual y grupal, porque aprendemos mejor en
                    equipo.
                  </p>
                </div>

                <section className="w-full flex justify-end">
                  <a
                    className="flex px-8 py-2 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center"
                    href=""
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
              <div className="flex flex-col gap-2 py-4 relative bottom-9 lg:max-h-[560px] max-h-[600px] overflow-hidden">
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-28 right-32">
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative left-72"></div>
                  <div className="bg-[#F8B732]  h-[180px] w-[180px] rotate-45 flex items-center justify-center"></div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-40 left-4">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesUno}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-52 right-28">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesDos}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden ">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesTres}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-64 left-4">
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCuantro}
                      alt=""
                    />
                  </div>
                  <div className="bg-white h-[180px] w-[180px] rotate-45 flex items-center justify-center overflow-hidden">
                    <img
                      className={` ${styles.diamondImage}`}
                      src={EstudiantesCinco}
                      alt=""
                    />
                  </div>
                </section>
                <section className="grid grid-cols-2 items-center justify-center gap-[5.5rem] w-fit relative bottom-72 right-24">
                  <div className="bg-[#F8B732] h-[180px] w-[180px] rotate-45 flex items-center justify-center relative bottom-4 left-60"></div>
                  <div className="bg-[#7C78B3] h-[180px] w-[180px] rotate-45 flex items-center justify-center "></div>
                </section>
              </div>

              <div className="flex flex-col h-full  items-center gap-4 p-6 rounded-lg shadow-md">
                <h3
                  className={`mb-1 text-4xl text-[#F8B732] font-semibold ${styles.title}`}
                >
                  ¿QUÉ INCLUYE EL SERVICIO?
                </h3>

                <div className="mb-1">
                  <p className="text-lg text-center ">
                    5 sesiones grupales y/o individuales
                  </p>

                  <p className="text-lg text-center">
                    1 asesoría sociovocacional individual (a demanda)
                  </p>

                  <p className="text-lg text-center">
                    Herramientas digitales y guías prácticas para cada sesión
                  </p>

                  <p className="text-lg text-center">
                    Actividades experienciales (Una de las sesiones incluye
                    intercambio de experiencias, ya sea en una universidad o con
                    un profesional del área de interés.)
                  </p>

                  <p className="text-lg text-center">
                    Grupo de WhatsApp de apoyo o resolución de dudas
                  </p>

                  <p className="text-lg text-center mb-1">
                    Certificado de participación
                  </p>

                  <section className="flex flex-wrap justify-center">
                    <div>
                      <div>
                        <h3
                          className={`mb-1 text-4xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                        >
                          MEDIOS DE PAGO
                        </h3>
                      </div>
                      <div className="mb-1">
                        <p className="text-lg text-center mb-1">
                          Transferencia bancaria
                        </p>

                        <p className="text-lg text-center mb-1">
                          Tarjeta débito
                        </p>

                        <p className="text-lg text-center mb-1">
                          Tarjeta crédito
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h3
                          className={`mb-1 text-3xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                        >
                          Costo{" "}
                        </h3>
                      </div>
                      <div className="mb-1">
                        <p className="text-lg text-center mb-1">
                          450.000 + IVA
                        </p>

                        <p className="text-lg text-center mb-1">
                          (Total: 535.500)
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                <section className="w-full flex justify-end">
                  <a
                    className="flex px-8 py-2 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center"
                    href=""
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
