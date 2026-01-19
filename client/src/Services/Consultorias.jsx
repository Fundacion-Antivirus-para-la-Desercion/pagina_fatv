import React from "react";
import BannerConsultoriasEn from "../assets/images/views/consultorias/student-retention-consulting.webp";
import BannerConsultoriasEs from "../assets/images/views/consultorias/consultoria-en-permanencia-estudiantil.webp";
import SocialFest from "../assets/images/views/consultorias/social-fest.webp";
import AlianzaFraternidad from "../assets/images/views/consultorias/alianza-fraternidad-medellin-fundacion.jpg";
import FraternidadMedellin from "../assets/images/views/consultorias/aliados-fraternidad-medellin.webp";
import UniversidadNorte from "../assets/images/views/consultorias/iniciativa-universidad-norte.webp";
import Reunion from "../assets/images/views/consultorias/reunion.webp";
import Colaboracion from "../assets/images/views/consultorias/colaboracion-institucional.png";
import Inpacto from "../assets/images/views/consultorias/inpacto-mediable.png";
import Innovacion from "../assets/images/views/consultorias/inovacion-educativa.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectFade, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import BannerView from "../components/Banner-views/BannerView";
import { Link } from "react-router-dom";


function Consultorias() {
  const { t } = useTranslation();

  return (
    <>
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerConsultoriasEn,
            esImage: BannerConsultoriasEs,
            keyTitle: "studentRetentionManagement.alt_img_banner",
          }}
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-[60%_40%] mt-10 items-stretch">
        <div className="min-h-[300px] md:min-h-[600px]">
          <Swiper
            effect={"fade"}
            grabCursor={true}
            EffectFade={{
              shadow: false,
            }}
            modules={[EffectFade, Autoplay]}
            className="mySwiper h-full"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="h-full">
              <img
                src={SocialFest}
                alt={t("")}
                className="w-full h-full md:object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img
                src={Reunion}
                alt={t("")}
                className="w-full h-full md:object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img
                src={FraternidadMedellin}
                alt={t("")}
                className="w-full h-full md:object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img
                src={AlianzaFraternidad}
                alt={t("")}
                className="w-full h-full md:object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img
                src={UniversidadNorte}
                alt={t("")}
                className="w-full h-full md:object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-dark-blue flex flex-col justify-center mt-10 md:mt-0 items-center p-5">
          <h1 className="lineSubtitle text-white font-impact text-4xl md:text-4xl lg:text-4xl mb-2 mt-2">
            {t("consultorias.consulting_title")}
            <span className="text-primary-yellow">
              {" "}
              {t("consultorias.consulting_title_span")}
            </span>
          </h1>

          <ul className="text-white list-disc text-xl  mb-10 mt-8 ml-5">
            <li className="mt-2 text-lg font-bold">
              {t("consultorias.universities")}
            </li>
            <p className="text-sm mt-2">
              {t("consultorias.universities_description")}
            </p>
            <li className="mt-2 text-lg font-bold">
              {t("consultorias.bootcamps")}
            </li>
            <p className="text-sm mt-2">
              {t("consultorias.bootcamps_description")}
            </p>

            <li className="mt-2 text-lg font-bold">
              {t("consultorias.schools")}
            </li>
            <p className="text-sm mt-2">
              {t("consultorias.schools_description")}
            </p>

            <li className="mt-2 text-lg font-bold">
              {t("consultorias.scholarship_programs")}
            </li>
            <p className="text-sm mt-2">
              {t("consultorias.scholarship_programs_description")}
            </p>
          </ul>
          <p className="text-white text-base md:text-base text-justify">
            {t("consultorias.description_general")}
          </p>
        </div>
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
          <div class="group bg-white  min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div class="flex items-start space-x-4 mb-4">
              <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">💛</span>
              </div>

              <h2 class="group-hover:text-white text-xl font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.methodology_title")}
              </h2>
            </div>

            <p class="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.methodology_description")}
            </p>
          </div>

          <div class="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div class="flex items-start space-x-4 mb-4">
              <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span class="text-2xl">🎯</span>
              </div>

              <h2 class="group-hover:text-white text-xl font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.focus_title")}
              </h2>
            </div>

            <p class="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.focus_description")}
            </p>
          </div>

          <div class="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div class="flex items-start space-x-4 mb-4">
              <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">👥</span>
              </div>

              <h2 class="group-hover:text-white text-xl font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.accompaniment_title")}
              </h2>
            </div>

            <p class="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.accompaniment_description")}
            </p>
          </div>

          <div class="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div class="flex items-start space-x-4 mb-4">
              <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">🎓</span>
              </div>

              <h2 class="group-hover:text-white text-xl font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.experience_title")}
              </h2>
            </div>

            <p class="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.experience_description")}
            </p>
          </div>

          <div class="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div class="flex items-start space-x-4 mb-4">
              <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">✨</span>
              </div>

              <h2 class="group-hover:text-white text-xl font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.solutions_title")}
              </h2>
            </div>

            <p class="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.cards.solutions_description")}
            </p>
          </div>

          <div class="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div class="flex items-start space-x-4 mb-4">
              <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span class="text-2xl">💡</span>
              </div>

              <h2 class="group-hover:text-white text-xl font-extrabold text-blue-base mt-1">
                {t("consultorias.cards.innovation_title")}
              </h2>
            </div>

            <p class="text-base text-blue-base text-justify group-hover:text-white">
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
          <p className="text-blue-base text-lg mt-3">
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
