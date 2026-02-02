import BannerAtvConnectEn from "../../assets/images/views/atvConnect/academic-tutoring.webp";
import BannerAtvConnectEs from "../../assets/images/views/atvConnect/tutorias-academicas.webp";
import LogoAtvConecta from "../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import BannerView from "../../components/Banner-views/BannerView";
import Graduation from "../../assets/images/views/atvConnect/graduados.png";
import Birrete from "../../assets/images/views/atvConnect/birrete.webp";
import { LuGraduationCap } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";
import { HiBadgeCheck } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";

import { motion } from "framer-motion";
import CounterNumeric from "../../components/ContextData/CounterNumer.jsx";
import { useTranslation } from "react-i18next";
import TestimonialsAtvConnect from "../../views/atv_connect/testimonialsAtvConnect/TestimonialsAtvConnect.jsx";
import BtnAtv from "./btnAtvConnect/BtnAtvConnect.jsx";
import ServicesAtvConnect from "./servicesAtvConnect/ServicesAtvConnect.jsx";
import SchoolSubjectsAtvConnect from "./schoolSubjects/SchoolSubjectsAtvConnect.jsx";

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

  const slideFromRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const slideFromLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const expandableTransition = (delayValue) => ({
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut", delay: delayValue },
    viewport: { once: true },
  });

  return (
    <>
      <BtnAtv />
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerAtvConnectEn,
            esImage: BannerAtvConnectEs,
            keyTitle: "studentRetentionManagement.alt_img_banner",
          }}
        />
      </div>
      <section className="bg-[#F6F6F6] grid grid-col-1 md:grid-cols-2 items-center mb-20 p-5 md:p-10">
        <section className="relative flex flex-col md:flex-row items-center md:items-start">
          <motion.div {...slideFromLeft} className="mb-5">
            <img
              className="hidden md:block max-h-[470px] border-8 border-white rounded-3xl justify-between shadow-2xl"
              src={Birrete}
              alt=""
            />
          </motion.div>

          <motion.div {...floatSnake(0)} className="mb-5">
            {" "}
            <img
              className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-brand-teal-400 p-3 md:mt-6 md:ml-6"
              src={LogoAtvConecta}
              alt="Logo ATVConecta"
            />{" "}
          </motion.div>
          <motion.div
            {...slideFromLeft}
            className="md:absolute md:top-44 md:right-[15%] md:max-h-[420px]"
          >
            <img
              className="releative md:max-h-[420px] border-8 border-white rounded-3xl w-fit mb-5 shadow-2xl"
              src={Graduation}
              alt=""
            />
          </motion.div>
        </section>

        <motion.div {...slideFromRight} className="text-center">
          <h1 className="text-4xl md:text-5xl text-dark-blue font-impact">
            ATVCONECTA
          </h1>

          <p className="text-center text-xl md:text-2xl max-w-[700px] text-blue-base p-3">
            {t("atvConnect.description_one")}
            <span className="text-primary-yellow ">
              {t("atvConnect.description_span")}
            </span>
            {t("atvConnect.description_two")}
          </p>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto m-5 mb-10">
        <section className="flex flex-col items-center md:p-10">
          {" "}
          <span className="text-lg md:text-xl font-impact text-primary-purple">
            {t("atvConnect.span_title")}
          </span>
          <h1 className="text-4xl md:text-5xl font-impact text-blue-base">
            {t("atvConnect.title")}
          </h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 justify-items-center p-5">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <LuGraduationCap className="text-3xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={800} />+
            </span>
            <p className="text-base text-dark-blue">
              {t("atvConnect.figures_impact.figure_one")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <HiBadgeCheck className="text-3xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={85} />%
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
              <CounterNumeric countNumber={700} />+
            </span>
            <p className="text-base text-dark-blue">
              {t("atvConnect.figures_impact.figure_three")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <FaRegHeart className="text-4xl text-dark-blue" />
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
      <section className="bg-dark-blue p-5">
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

      <ServicesAtvConnect />

      <section className="mt-5 text-center p-10">
        <div>
          <span className="text-primary-purple font-impact text-lg md:text-xl">
            {t("atvConnect.steps.span")}
          </span>
          <h5 className="text-dark-blue font-impact text-4xl md:text-5xl">
            {t("atvConnect.steps.title")}
          </h5>
          <h6 className="text-primary-yellow font-impact text-4xl md:text-5xl">
            {t("atvConnect.steps.span_two")}
          </h6>
        </div>
        <div>
          <section className="md:flex md:justify-evenly m-10">
            <motion.div
              {...expandableTransition(0)}
              className="relative flex flex-col items-center mt-5"
            >
              <span className="text-8xl font-impact text-[#F0F1F5]">01</span>
              <p className="absolute bottom-6 text-xl text-dark-blue font-extrabold">
                {t("atvConnect.steps.step_one.title")}
              </p>
              <p className="text-gray-400">
                {t("atvConnect.steps.step_one.description")}
              </p>
            </motion.div>
            <motion.div
              {...expandableTransition(0.4)}
              className="relative flex flex-col items-center mt-5"
            >
              <span className="text-8xl font-impact text-[#F0F1F5]">02</span>
              <p className="absolute bottom-6 text-xl text-dark-blue font-extrabold">
                {t("atvConnect.steps.step_two.title")}
              </p>
              <p className="text-gray-400">
                {t("atvConnect.steps.step_two.description")}
              </p>
            </motion.div>
            <motion.div
              {...expandableTransition(0.8)}
              className="relative flex flex-col items-center mt-5"
            >
              <span className="text-8xl font-impact text-[#F0F1F5]">03</span>
              <p className="absolute bottom-6 text-xl text-dark-blue font-extrabold">
                {t("atvConnect.steps.step_three.title")}
              </p>
              <p className="text-gray-400">
                {t("atvConnect.steps.step_three.description")}
              </p>
            </motion.div>
          </section>
        </div>
      </section>

      <SchoolSubjectsAtvConnect />

      <TestimonialsAtvConnect />
    </>
  );
}

export default AtvConnect;
