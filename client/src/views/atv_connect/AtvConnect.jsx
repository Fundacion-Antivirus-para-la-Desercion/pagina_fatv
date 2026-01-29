import { useEffect, useMemo, useState } from "react";
import BannerAtvConnectEn from "../../assets/images/views/atvConnect/academic-tutoring.webp";
import BannerAtvConnectEs from "../../assets/images/views/atvConnect/tutorias-academicas.webp";
import LogoAtvConecta from "../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import BannerView from "../../components/Banner-views/BannerView";
import Javi from "../../assets/images/views/javi/Javi-4.png";
import Graduation from "../../assets/images/views/atvConnect/graduados.png";
import Birrete from "../../assets/images/views/atvConnect/birrete.webp";
import { LuGraduationCap } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { LuBookOpen } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { motion } from "framer-motion";
import CounterNumeric from "../../components/ContextData/CounterNumer.jsx";
import { useTranslation } from "react-i18next";
import TestimonialsAtvConnect from "../../views/atv_connect/testimonialsAtvConnect/TestimonialsAtvConnect.jsx";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import BtnAtv from "./btnAtvConnect/BtnAtvConnect.jsx";
import ServicesAtvConnect from "./servicesAtvConnect/ServicesAtvConnect.jsx";

function AtvConnect() {
  const [init, setInit] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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

  const particlesLoaded = (container) => {
    console.log("particles conatiner");
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false, // <--- ESTO ES LO MÁS IMPORTANTE
        zIndex: 0, // Asegura un z-index bajo si es necesario
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const expandableTransition = (delayValue) => ({
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut", delay: delayValue },
    viewport: { once: true },
  });

  const subjects = [
    {
      subject: t("atvConnect.subjects.subject_list.calculus"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.physics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.chemistry"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.programming"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.statistics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.algebra"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.accounting"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.economics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.english"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.biology"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.mathematics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.data_bases"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.algorithms"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.thermodynamics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.circuits"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.finance"),
    },
  ];

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

      <section className="m-5 text-center p-10">
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

      <section className="grid grid-cols-1 md:grid-cols-[30%,70%] bg-dark-blue p-5 md:p-10 md:pt-20 md:pb-[184px] relative mb-10">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full z-0 bg-dark-blue"
        />
        <div className="m-10 md:m-2 relative text-center md:text-left">
          <span className="text-lg text-primary-purple font-impact">
            {t("atvConnect.subjects.span")}{" "}
          </span>
          <h6 className="text-4xl md:text-5xl text-white font-impact">
            {t("atvConnect.subjects.title")}
          </h6>
        </div>

        <div className="flex flex-wrap items-center relative">
          <section className="flex flex-wrap justify-center items-center text-white p-3 gap-4">
            {subjects.map((subjects, index) => (
              <span
                key={index}
                className="rounded-3xl border border-white border-opacity-35 text-base py-2 px-5 cursor-pointer"
              >
                {subjects.subject}
              </span>
            ))}
          </section>
        </div>

        <div className="relative">
          <img
            className="block mx-auto md:absolute md:top-[-90px] max-w-[190px] md:max-w-[200px]"
            src={Javi}
            alt=""
          />
        </div>
      </section>

      <TestimonialsAtvConnect />
    </>
  );
}

export default AtvConnect;
