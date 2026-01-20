import React from "react";
import BannerAtvConnectEn from "../../assets/images/views/atvConnect/academic-tutoring.webp";
import BannerAtvConnectEs from "../../assets/images/views/atvConnect/tutorias-academicas.webp";
import LogoAtvConecta from "../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import BannerView from "../../components/Banner-views/BannerView";
import Figura from "../../assets/images/views/atvConnect/figura.png";
import { LuGraduationCap } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { LuBookOpen } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaMedal } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { DoodleLine } from "../../assets/images/svg/Svg";
import { motion } from "framer-motion";
import CounterNumeric from "../../components/ContextData/CounterNumer.jsx";
import { useTranslation } from "react-i18next";

function AtvConnect() {
  const { t } = useTranslation();

  const floatSnake = (delay = 0) => ({
    initial: { y: -10 },
    animate: { y: [0, -25, 0] },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
      delay,
    },
  });

  return (
    <>
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerAtvConnectEn,
            esImage: BannerAtvConnectEs,
            keyTitle: "studentRetentionManagement.alt_img_banner",
          }}
        />
      </div>
      <section className="relative bg-primary-purple flex justify-center items-center flex-col p-5 md:p-10">
        <img className="absolute left-0 top-0 w-40" src={Figura} alt="" />
        <img
          className="w-28 h-auto md:w-36 md:h-auto"
          src={LogoAtvConecta}
          alt="Logo ATVConecta"
        />
        <p className="text-center text-xl md:text-2xl max-w-[700px] text-white p-3">
          {t("atvConnect.description_one")}
          <span className="text-primary-yellow ">
            {t("atvConnect.description_span")}
          </span>
          {t("atvConnect.description_two")}
        </p>
        <img
          className="absolute right-0 bottom-0 w-24 rotate-180"
          src={Figura}
          alt=""
        />
        <div className="absolute right-0 bottom-0"></div>
      </section>

      <section className="max-w-4xl mx-auto m-10">
        <section className="flex flex-col items-center p-10">
          {" "}
          <span className="text-base font-impact text-primary-purple">
            {t("atvConnect.span_title")}
          </span>
          <h1 className="text-3xl md:text-5xl font-impact text-blue-base">
            {t("atvConnect.title")}
          </h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 justify-items-center p-5">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <LuGraduationCap className="text-3xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={2500} />+
            </span>
            <p className="text-base text-dark-blue">
              {t("atvConnect.figures_impact.figure_one")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <GoPeople className="text-3xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={150} />+
            </span>
            <p className="text-base text-dark-blue">
              {t("atvConnect.figures_impact.figure_two")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <LuBookOpen className="text-3xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={15000} />+
            </span>
            <p className="text-base text-dark-blue">
              {t("atvConnect.figures_impact.figure_three")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <CiHeart className="text-4xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={98} />%
            </span>
            <p className="text-base text-dark-blue">
              {t("atvConnect.figures_impact.figure_four")}
            </p>
          </div>
        </section>
      </section>
      <section className="bg-dark-blue p-5 mb-5">
        <ol className="md:flex justify-center list-none text-white text-justify text-lg md:text-base">
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_one")}
          </li>
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_two")}
          </li>
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_three")}
          </li>
        </ol>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 container text-center p-5 md:gap-10">
        <div className="relative items-center justify-center flex flex-col">
          <span className="text-base font-impact text-primary-purple">
            {t("atvConnect.services.span")}
          </span>
          <h2 className="text-3xl md:text-5xl font-impact text-blue-base">
            {t("atvConnect.services.title_one")} <br />
            <span className="text-primary-yellow">
              {t("atvConnect.services.title_two")}
            </span>
          </h2>

          <div className="relative w-full h-auto">
            <FaMedal className="sticky top-0 bottom-0 right-0 left-0 block mx-auto text-9xl m-5 text-gray-200 " />
          </div>
        </div>

        <div className="relative">
          <motion.div {...floatSnake(0)} className="absolute top-0 right-0">
            <BsRocketTakeoff className="hidden md:block mx-auto text-9xl m-5 text-gray-200 rotate-12" />
            <div className="hidden md:block relative top-[10px] left-[-170px] w-full h-full bg-opacity-10 -rotate-45">
              <DoodleLine />
            </div>
          </motion.div>
          <section className="">
            <section className="group/icon flex flex-wrap md:flex-nowrap items-start justify-evenly max-w-[450px] m-3 p-5 border-2 rounded-2xl border-gray-200 shadow-md">
              <div className="flex items-center m-2 justify-center rounded-xl p-3 bg-dark-blue group-hover/icon:bg-primary-yellow transition-colors">
                <LuBookOpen className="text-2xl rounded-lg text-white group-hover/icon:text-dark-blue transition-colors" />{" "}
              </div>
              <div className="flex flex-col m-2 text-left text-blue-base">
                <h4 className="text-lg md:text-xl font-bold">
                  {t("atvConnect.services.item_tutoring.title")}
                </h4>
                <p className="text-sm md:text-base">
                  {t("atvConnect.services.item_tutoring.description")}
                </p>
              </div>
            </section>
            <section className="group/icon flex flex-wrap md:flex-nowrap items-start justify-evenly max-w-[450px] m-3 p-5 border-2 rounded-2xl border-gray-200 shadow-md">
              <div className="flex items-center m-2 justify-center rounded-xl p-3 bg-dark-blue group-hover/icon:bg-primary-yellow transition-colors">
                <FaArrowTrendUp className="text-2xl rounded-lg text-white group-hover/icon:text-dark-blue transition-colors" />{" "}
              </div>
              <div className="flex flex-col m-2 text-left text-blue-base">
                <h4 className="text-lg md:text-xl font-bold">
                  {t("atvConnect.services.item_progress.title")}
                </h4>
                <p className="text-sm md:text-base">
                  {t("atvConnect.services.item_progress.description")}
                </p>
              </div>
            </section>
            <section className="group/icon flex flex-wrap md:flex-nowrap items-start justify-evenly max-w-[450px] m-3 p-5 border-2 rounded-2xl border-gray-200 shadow-md">
              <div className="flex items-center m-2 justify-center rounded-xl p-3 bg-dark-blue group-hover/icon:bg-primary-yellow transition-colors">
                <IoMdTime className="text-2xl rounded-lg text-white group-hover/icon:text-dark-blue transition-colors" />{" "}
              </div>
              <div className="flex flex-col m-2 text-left text-blue-base">
                <h4 className="text-lg md:text-xl font-bold">
                  {t("atvConnect.services.item_hours.title")}
                </h4>
                <p className="text-sm md:text-base">
                  {t("atvConnect.services.item_hours.description")}
                </p>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}

export default AtvConnect;
