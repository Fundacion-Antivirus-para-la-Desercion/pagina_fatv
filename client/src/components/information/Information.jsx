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

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const whatsAppNumber = "573173831481";

function Information() {
  const { t } = useTranslation();

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
                  {t("provocacion.information.directed_to")}
                </h3>

                <div className="mb-1">
                  <p className="text-lg font-bold text-center mb-2">
                    {t("provocacion.information.who_is_it_for")}
                  </p>
                  <p className="text-lg text-center w-3/4 mx-auto">
                    <strong>
                      {t("provocacion.information.young_people_description")}
                    </strong>{" "}
                    {t("provocacion.information.students_description")}
                  </p>
                </div>

                <div className="mb-1">
                  <p className="text-lg font-bold text-center mb-2">
                    {t("provocacion.information.when_moment")}
                  </p>
                  <p className="text-lg text-center">
                    {t("provocacion.information.decision_time")}
                    <strong>
                      {" "}
                      {t("provocacion.information.academic_future")}
                    </strong>
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-center mb-2">
                    {t("provocacion.information.what_are_they_living")}
                  </p>
                  <p className="text-lg text-center">
                    <strong>
                      {t("provocacion.information.feelings_description")}
                    </strong>
                  </p>
                </div>

                <section className="w-full flex justify-end items-end">
                  <a
                    className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("provocacion.information.i_want_it")}
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
                  {t("provocacion.information.installed_capacities")}
                </h3>

                <div className="mb-1">
                  <p className="text-lg font-semibold text-center mb-4 w-3/4 mx-auto">
                    {t("provocacion.information.skills_promotion")}
                  </p>
                  <h3
                    className={`mb-1 text-4xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                  >
                    {t("provocacion.information.focus_on_autos")}
                  </h3>
                </div>
                <div className="mb-1">
                  <p className="text-base font-semibold text-center">
                    {t("provocacion.information.self_perception")}
                  </p>

                  <p className="text-base font-semibold text-center">
                    {t("provocacion.information.self_observation")}
                  </p>

                  <p className="text-base font-semibold text-center">
                    {t("provocacion.provocacion.information.self_esteem")}
                  </p>

                  <p className="text-base font-semibold text-center">
                    {t("provocacion.information.self_concept")}
                  </p>

                  <p className="text-base font-semibold text-center">
                    {t("provocacion.information.autonomy")}
                  </p>

                  <p className="text-base font-semibold text-center">
                    {t("provocacion.information.self_confidence")}
                  </p>

                  <p className="text-base font-semibold text-center">
                    {t("provocacion.information.self_motivation")}
                  </p>

                  <p className="text-base font-semibold text-center">
                    {t("provocacion.information.self_evaluation")}
                  </p>
                </div>

                <section className="w-full flex justify-end">
                  <a
                    className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("provocacion.information.i_want_it")}
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
                  {t("provocacion.information.what_includes_service")}
                </h3>

                <div className="mb-1">
                  <p className="text-base text-center ">
                    <strong>
                      {t("provocacion.information.five_sessions")}
                    </strong>
                  </p>

                  <p className="text-base text-center">
                    <strong>
                      {t("provocacion.information.one_counseling")}
                    </strong>
                  </p>

                  <p className="text-base text-center">
                    {t("provocacion.information.digital_tools")}
                  </p>

                  <p className="text-base text-center w-3/4 mx-auto">
                    <strong>
                      {t("provocacion.information.experiential_activities")}
                    </strong>{" "}
                    {t("provocacion.information.experience_exchange")}
                  </p>

                  <p className="text-base text-center">
                    {t("provocacion.information.whatsapp_support")}
                  </p>

                  <p className="text-base text-center mb-1">
                    <strong>
                      {t("provocacion.information.participation_certificate")}
                    </strong>
                  </p>

                  <section className="flex  justify-center gap-10  mt-4">
                    <div>
                      <div>
                        <h3
                          className={`mb-1 text-3xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                        >
                          {t("provocacion.information.payment_methods")}
                        </h3>
                      </div>
                      <div className="mb-1">
                        <p className="text-lg font-bold text-center mb-1">
                          {t("provocacion.information.bank_transfer")}
                        </p>

                        <p className="text-lg font-bold  text-center mb-1">
                          {t("provocacion.information.debit_card")}
                        </p>

                        <p className="text-lg font-bold  text-center mb-1">
                          {t("provocacion.information.credit_card")}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h3
                          className={`mb-1 text-3xl text-[#F8B732] font-semibold text-center  ${styles.title}`}
                        >
                          {t("provocacion.information.cost")}
                        </h3>
                      </div>
                      <div className="mb-1">
                        <p className="text-lg font-bold  text-center mb-1">
                          {t("provocacion.information.base_price")}
                        </p>

                        <p className="text-lg font-bold  text-center mb-1">
                          {t("provocacion.information.final_price")}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                <section className="w-full flex justify-end">
                  <a
                    className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("provocacion.information.i_want_it")}
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
