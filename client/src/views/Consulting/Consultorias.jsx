import React from "react";
import BannerConsulting from "../../assets/images/views/consultorias/banner-consulting.webp";
import BannerView from "../../components/Banner-views/BannerView";
import { PiShootingStarFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import Description from "./Description/Description.jsx";
import { motion } from "framer-motion";
import "./consultoria.css";
import card from "../../assets/images/views/consultorias/card-p.webp";

function Consultorias() {
  const { t } = useTranslation();

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

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const slideFromLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  return (
    <>
      <div className="relative lg:pt-[145px] ">
        <BannerView
        imagesBannerMap={{
          image: BannerConsulting,
          keyAlt: "studentRetentionManagement.alt_img_banner",
          keyH1: "studentRetentionManagement.title",
        }}
      />
      </div>

      <Description />

      <section className="mt-10 md:mt-20">
        <div className="text-center">
          <motion.div {...slideFromLeft}>
            <h2 className="text-4xl md:text-5xl text-blue-base font-impact m-5">
              {t("consultorias.whyChooseUs.title")}
              <br />
              <span className="text-primary-yellow">
                {t("consultorias.whyChooseUs.titlle_span")}
              </span>
            </h2>
          </motion.div>
          <p className="text-blue-base text-lg mt-10">
            {t("consultorias.whyChooseUs.description")}
          </p>
        </div>

        <section className="grid grid-cols-1 m-2 md:grid-cols-3 p-5 md:p-10 grid-rows-2 gap-8 md:gap-5  md:m-5">
          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">💛</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.whyChooseUs.cards.methodology_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.whyChooseUs.cards.methodology_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">🎯</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.whyChooseUs.cards.focus_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.whyChooseUs.cards.focus_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">👥</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.whyChooseUs.cards.accompaniment_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.whyChooseUs.cards.accompaniment_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">🎓</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.whyChooseUs.cards.experience_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.whyChooseUs.cards.experience_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">✨</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.whyChooseUs.cards.solutions_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.whyChooseUs.cards.solutions_description")}
            </p>
          </div>

          <div className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:bg-primary-yellow transition duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-full">
                <span className="text-2xl">💡</span>
              </div>

              <h2 className="group-hover:text-white ext-lg md:text-xl  font-extrabold text-blue-base mt-1">
                {t("consultorias.whyChooseUs.cards.innovation_title")}
              </h2>
            </div>

            <p className="text-base text-blue-base text-justify group-hover:text-white">
              {t("consultorias.whyChooseUs.cards.innovation_description")}
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
              {t("consultorias.pillars.title_span")}
            </span>
          </h3>
          <p className="text-white text-lg md:text-xl mt-5">
            {t("consultorias.pillars.description")}
          </p>
        </div>

        <motion.div {...slideFromTop}>
          <div className="relative flex flex-wrap mt-10 gap-8 md:gap-5 mx-auto justify-center items-center">
            {pillarsData.map((pillarsData, index) => (
              <section className="group relative flex flex-col p-10 justify-center rounded-3xl transition-all duration-500 hover:-translate-y-2 min-w-[300px] max-w-[450px] min-h-[280px]">
                <img
                  src={card}
                  alt="Card background"
                  className="absolute inset-0 w-full h-full rounded-3xl"
                />
                <PiShootingStarFill className="absolute top-0 left-0 text-primary-yellow text-4xl" />
                <div key={index} className="relative">
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
        </motion.div>
      </section>
    </>
  );
}

export default Consultorias;
