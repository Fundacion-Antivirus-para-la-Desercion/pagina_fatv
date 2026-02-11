import React from "react";
import BannerConsultoriasEn from "../assets/images/views/consultorias/student-retention-consulting.webp";
import BannerConsultoriasEs from "../assets/images/views/consultorias/consultoria-en-permanencia-estudiantil.webp";
import BannerConsulting from "../assets/images/views/consultorias/banner-consulting.webp";
import AcompanamientoColegio from "../assets/images/views/consultorias/acompanamiento-estudiante.webp";
import AcompanamientoUdea from "../assets/images/views/consultorias/acompanamiento-u-de-a.webp";
import FraternidadMedellin from "../assets/images/views/consultorias/aliados-fraternidad-medellin.webp";
import AcompanamientoBecarios from "../assets/images/views/consultorias/becarios.webp";
import ReunionSecretriaItagui from "../assets/images/views/consultorias/reunion-secretaria-itagui.webp";
import SocialFest from "../assets/images/views/consultorias/social-fest.webp";
import ReunionFavt from "../assets/images/views/consultorias/reunion-colaboradores-FATV.webp";
import EncuentroGobernacion from "../assets/images/views/consultorias/encuentro-gobernacion-antioquia-2.webp";

import { PiShootingStarFill } from "react-icons/pi";
import { TiHeart } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectFade, Autoplay, EffectCards } from "swiper/modules";
import { useTranslation } from "react-i18next";
import BannerView from "../components/Banner-views/BannerView";
import { Link } from "react-router-dom";

function Consultorias() {
  const { t } = useTranslation();

  const floatSnake = (delay = 0) => ({
    initial: { y: -10 },
    animate: { y: [0, -25, 0] },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
      delay,
    },
  });

  const imagesConsulting = [
    {
      image: AcompanamientoColegio,
      description:
        "Acompañamiento en el proceso de inscripción de Pines Universitarios",
    },
    {
      image: SocialFest,
      description: "Participación en el Social Fest 2026",
    },
    {
      image: ReunionSecretriaItagui,
      description: "Reunión con la Secretaría de Educación de Itagüí",
    },
    {
      image: FraternidadMedellin,
      description:
        "Reunión con el programa de Becarios Fraternidad Medellín y Comfama",
    },
    {
      image: AcompanamientoBecarios,
      description: "Acompañamiento a becarios ver + beca tech",
    },
    {
      image: EncuentroGobernacion,
      description: "Encuentro con la gobernación de Antioquia",
    },
    { image: ReunionFavt, description: "Reunión con colaboradores de FATV" },
    {
      image: AcompanamientoUdea,
      description: "Acompañamiento a estudiantes en Universidad de Antioquia",
    },
  ];

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

  const pillarsData = [
    {
      title: t("consultorias.pillars.titlePillarOne"),
      description: t("consultorias.pillars.descriptionPillarOne"),
    },
    {
      title: t("consultorias.pillars.titlePillarTwo"),
      description: t("consultorias.pillars.descriptionPillarTwo"),
    },
    {
      title: t("consultorias.pillars.titlePillarThree"),
      description: t("consultorias.pillars.descriptionPillarThree"),
    },
  ];

  return (
    <>
      <div className="relative lg:pt-[145px] ">
        <BannerView
          imagesBannerMap={{
            enImage: BannerConsultoriasEn,
            esImage: BannerConsulting,
            keyTitle: "studentRetentionManagement.alt_img_banner",
          }}
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-20 md:pb-32 px-4">
          <h1 className="max-w-4xl text-center text-3xl md:text-6xl font-renogare text-white">
            Consultoría en permanencia estudiantil
          </h1>

          <span className="mt-6 px-6 py-2 md:py-2 bg-dark-blue text-white font-semibold text-center text-sm md:text-2xl rounded-full shadow-xl">
            Fundación Antivirus para la Deserción
          </span>
        </div>
      </div>

      <section className="relative bg-[#F6F6F6] grid grid-cols-1 md:grid-cols-2 md:items-stretch md:gap-16 p-10 md:py-20">
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
          <div className="text-center md:text-left">
            <h2 className="lineSubtitle text-3xl md:text-4xl text-blue-base font-impact">
              {t("consultorias.consulting_title")}
              <span className="text-3xl md:text-4xl font-impact text-primary-yellow">
                {t("consultorias.consulting_title_span")}
              </span>
            </h2>

            <p className="relative text-lg text-blue-base text-center md:text-left mt-10">
              {t("consultorias.description_general")}
            </p>
          </div>

          <section className="relative grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mt-5 mb-5 md:mb-0">
            {consultingData.map((consultingData, index) => (
              <div
                key={index}
                className="relative bg-white p-5 rounded-2xl shadow-lg max-w-md block mx-auto hover:shadow-2xl transition duration-300"
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
        </section>

        <section className="relative">
          <motion.div
            {...floatSnake(0)}
            className="group z-10 absolute -right-10 top-10 w-20 md:w-36"
          >
            <div className="bg-[#f6f6f6cb] p-3 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-2xl transition-all">
              <span
                className="absolute -top-10 left-1/2 -translate-x-1/2 
                   scale-0 group-hover:scale-100 transition-all duration-200
                   bg-dark-blue text-white text-base py-1 px-3 rounded-lg shadow-xl flex items-center justify-center"
              >
                FATV <TiHeart className="inline text-base" />
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-dark-blue"></span>
              </span>
              <div>
                <LuGraduationCap className="p-2 text-4xl md:text-5xl text-primary-yellow bg-yellow-100 rounded-xl" />
              </div>
              <div className="felx flex-col">
                <span className="text-xl md:text-3xl text-dark-blue drop-shadow-2xl font-impact">
                  91%
                </span>
                <h4 className="text-dark-blue font-semibold text-xs">
                  Permanencia
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Carrusel envolviendo solo la imagen */}
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full rounded-3xl"
          >
            {imagesConsulting?.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-full border-[4px] border-solid border-white rounded-3xl shadow-2xl object-cover"
                  src={item.image}
                  alt={`Slide ${index}`}
                />
                <p className="absolute text-sm md:text-base bottom-1 left-0 right-0 w-[98%] mx-auto bg-black bg-opacity-50 text-white p-2 text-center rounded-xl">
                  <PiShootingStarFill className="text-dark-yellow inline mr-2 text-xl " />
                  {t(imagesConsulting[index].description)}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <motion.div
            {...floatSnake(0)}
            className="group z-10 absolute -left-11 bottom-14 w-20 md:w-36"
          >
            <Link
              to="/ContactUs"
              className="bg-[#f6f6f6cb] p-3 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-2xl transition-all"
            >
              {/* --- ESTE ES TU NUEVO "TITLE" ESTILIZADO --- */}
              <span
                className="absolute -top-10 left-1/2 -translate-x-1/2 
                   scale-0 group-hover:scale-100 transition-all duration-200
                   bg-dark-blue text-white text-base py-1 px-3 rounded-lg shadow-xl flex items-center justify-center"
              >
                Click <MdKeyboardArrowRight className="inline text-base" />
                {/* Flechita del tooltip */}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-dark-blue"></span>
              </span>

              <div>
                <IoMdContact className="p-2 text-4xl md:text-5xl text-dark-blue bg-blue-100 rounded-xl" />
              </div>
              <div className="flex flex-col md:items-center md:justify-center">
                <h4 className="text-dark-blue font-semibold text-sm md:text-lg">
                  Ver más
                </h4>
              </div>
            </Link>
          </motion.div>
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
          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
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
      <section className="relative bg-blue-base justify-center items-center text-center  md:mt-10 p-5 md:p-14 bg-[url('/src/assets/images/views/consultorias/estudiantes-en-aula.webp')] bg-cover bg-center overflow-hidden">
        <div className="absolute w-full h-full opacity-70 bg-dark-blue top-0 left-0"></div>

        <div className="relative mt-10">
          <h3 className=" text-4xl md:text-5xl font-impact text-white">
            {t("consultorias.pillars.title")}
            <span className="text-4xl md:text-5xl font-impact text-primary-yellow">
              {t("consultorias.pillars.title_br")}
            </span>
          </h3>
          <p className="text-white text-lg md:text-xl mt-5">
            {t("consultorias.pillars.description")}
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 md:gap-5 mx-auto justify-center items-center">
          {pillarsData.map((pillarsData, index) => (
            <section className="group relative flex flex-col p-10 justify-center rounded-3xl transition-all duration-500 hover:-translate-y-2 bg-[url('/src/assets/images/views/consultorias/card-p.webp')] bg-cover min-w-[300px] max-w-[450px] min-h-[280px]">
              <div key={index}>
                <PiShootingStarFill className="absolute top-0 left-0 text-primary-yellow text-4xl" />

                <h4 className="bg-dark-blue text-white rounded-3xl p-2 text-xl md:text-2xl mb-3">
                  {pillarsData.title}
                </h4>

                <p className="text-base mb-3 text-white text-center p-3">
                  {pillarsData.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

export default Consultorias;
