import React from "react";
import BannerConsultoriasEn from "../assets/images/views/consultorias/student-retention-consulting.webp";
import BannerConsultoriasEs from "../assets/images/views/consultorias/consultoria-en-permanencia-estudiantil.webp";
import BannerConsulting from "../assets/images/views/consultorias/banner-consulting.webp";
import SocialFest from "../assets/images/views/consultorias/social-fest.webp";
import AlianzaFraternidad from "../assets/images/views/consultorias/alianza-fraternidad-medellin-fundacion.jpg";
import FraternidadMedellin from "../assets/images/views/consultorias/aliados-fraternidad-medellin.webp";
import UniversidadNorte from "../assets/images/views/consultorias/iniciativa-universidad-norte.webp";
import Reunion from "../assets/images/views/consultorias/reunion.webp";
import Estudiantes from "../assets/images/views/consultorias/estudiantes-colegio.webp";
import Colaboracion from "../assets/images/views/consultorias/colaboracion-institucional.png";
import Inpacto from "../assets/images/views/consultorias/inpacto-mediable.png";
import Innovacion from "../assets/images/views/consultorias/inovacion-educativa.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectFade, Autoplay, EffectCards } from "swiper/modules";
import { useTranslation } from "react-i18next";
import BannerView from "../components/Banner-views/BannerView";
import { Link } from "react-router-dom";

function Consultorias() {
  const { t } = useTranslation();

  const consultingData = [
    {
      item: "1",
      title: t("consultorias.universities"),
      description: t("consultorias.universities_description"),
    },
    {
      item: "2",
      title: t("consultorias.bootcamps"),
      description: t("consultorias.bootcamps_description"),
    },
    {
      item: "3",
      title: t("consultorias.schools"),
      description: t("consultorias.schools_description"),
    },
    {
      item: "4",
      title: t("consultorias.scholarship_programs"),
      description: t("consultorias.scholarship_programs_description"),
    },
  ];

  return (
    <>
      <div className="relative lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerConsultoriasEn,
            esImage: BannerConsulting,
            keyTitle: "studentRetentionManagement.alt_img_banner",
          }}
        />
        <h1 className="absolute z-10 bottom-40 left-1/2 transform -translate-x-1/2 text-center text-2xl md:text-5xl font-impact text-white border-dark-blue mt-5">
          Consultoría en Permanencia Estudiantil
        </h1>
        <span className="absolute z-10 bottom-20 left-1/2 transform -translate-x-1/2 w-fit font-bold text-center text-sm md:text-3xl bg-dark-yellow text-dark-blue p-3 rounded-3xl">
        Fundación Antivirus para la Deserción
        </span>
      </div>

      <section className="relative bg-[#F6F6F6] grid grid-cols-1 md:grid-cols-2 p-10">
        <div
          className="absolute inset-0 z-1"
          style={{
            backgroundImage: `
        linear-gradient(to right, #FFFFFF 1px, transparent 1px),
        linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
      `,
            backgroundSize: "48px 48px, 48px 48px",
          }}
        />
        <section className="relative">
          <div className="">
            <h2 className="lineSubtitle text-4xl md:text-5xl text-blue-base font-impact">
              {t("consultorias.consulting_title")}
              <span className="text-4xl md:text-5xl font-impact text-primary-yellow">
                {t("consultorias.consulting_title_span")}
              </span>
            </h2>

            <p className="relative text-xl text-blue-base text-center md:text-left mt-10">
              {t("consultorias.description_general")}
            </p>
          </div>

          <section className="relative grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {consultingData.map((consultingData, index) => (
              <div
                key={index}
                className="relative bg-white p-5 rounded-2xl shadow-lg max-w-md flex flex-col items-center  md:items-start hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center">
                  <span className="flex items-center justify-center bg-primary-yellow text-white text-lg font-bold p-3 mr-3 rounded-2xl w-10 h-10">
                    {consultingData.item}
                  </span>
                  <h4 className="text-blue-base font-semibold text-xl">
                    {consultingData.title}
                  </h4>
                </div>

                <p className="text-blue-base text-base m-3">
                  {consultingData.description}
                </p>
              </div>
            ))}
          </section>

          <img src="" alt="" />
        </section>
      </section>

      <section className="mt-10 md:mt-20 text-center">
        <div>
          <h2 className="text-4xl md:text-5xl text-blue-base font-impact m-5">
            {t("consultorias.why_choose_us.title")}
            <span className="text-primary-yellow">
              {t("consultorias.why_choose_us.titlle_span")}
            </span>
          </h2>
          <p className="text-blue-base text-base ">
            {t("consultorias.why_choose_us.description")}
          </p>
        </div>

        <section className="grid grid-cols-1 m-2 md:grid-cols-3 p-2 grid-rows-2 gap-10 md:gap-10  md:m-16">
          <div className="group bg-white  min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">💛</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.methodology_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.methodology_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">🎯</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.focus_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.focus_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">👥</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.accompaniment_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.accompaniment_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">🎓</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.experience_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.experience_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">✨</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.solutions_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.solutions_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">💡</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.innovation_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.innovation_description")}
            </p>
          </div>
        </section>
      </section>

      <section className="justify-center items-center text-center mt-10 md:mt-12 mb-10 p-5 md:p-14">
        <div>
          <h3 className="text-4xl md:text-5xl font-impact text-blue-base mt-14">
            {t("consultorias.pillars.title")}
            <span className="text-4xl md:text-5xl font-impact text-primary-yellow">
              {t("consultorias.pillars.title_br")}
            </span>
          </h3>
          <p className="text-blue-base ext-lg md:text-xl  mt-3">
            {t("consultorias.pillars.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 md:gap-5 md:max-w-[80%] mx-auto justify-center items-center">
          <div className="group relative flex flex-col  items-center p-5 rounded-3xl bg-white min-h-[370px] w-full  shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img
              className="w-[130px] md:w-[150px] h-auto"
              src={Colaboracion}
              alt=""
            />

            <div className="border-t-4 border-primary-yellow ">
              <h1 className="text-blue-base text-2xl mt-3 mb-3 font-bold">
                {" "}
                {t("consultorias.pillars.titlePillarOne")}
              </h1>

              <p className="text-base mb-3 text-blue-base text-justify ">
                {t("consultorias.pillars.descriptionPillarOne")}
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col  items-center p-5 rounded-3xl bg-white min-h-[370px] w-full  shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img
              className="w-[130px] md:w-[150px] h-auto"
              src={Inpacto}
              alt=""
            />

            <div className="border-t-4 border-primary-yellow">
              <h1 className="text-blue-base text-2xl mt-3 mb-3 font-bold">
                {" "}
                {t("consultorias.pillars.titlePillarTwo")}
              </h1>

              <p className="text-base mb-3 text-blue-base text-justify ">
                {t("consultorias.pillars.descriptionPillarTwo")}
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col  items-center p-5 rounded-3xl bg-white min-h-[370px] w-full  shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img
              className="w-[130px] md:w-[150px] h-auto"
              src={Innovacion}
              alt=""
            />

            <div className="border-t-4 border-primary-yellow">
              <h1 className="text-blue-base text-2xl mt-3 mb-3  font-bold">
                {" "}
                {t("consultorias.pillars.titlePillarThree")}
              </h1>

              <p className="text-base mb-3 text-blue-base text-justify ">
                {t("consultorias.pillars.descriptionPillarThree")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Consultorias;
