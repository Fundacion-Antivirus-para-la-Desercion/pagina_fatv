import BannerAtvConnectEn from "../../assets/images/views/atvConnect/academic-tutoring.webp";
import BannerAtvConnectEs from "../../assets/images/views/atvConnect/tutorias-academicas.webp";
import LogoAtvConecta from "../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import BannerView from "../../components/Banner-views/BannerView";
import Graduation from "../../assets/images/views/atvConnect/graduados.png";
import Birrete from "../../assets/images/views/atvConnect/birrete.webp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TestimonialsAtvConnect from "../../views/atv_connect/testimonialsAtvConnect/TestimonialsAtvConnect.jsx";
import BtnAtv from "./btnAtvConnect/BtnAtvConnect.jsx";
import ServicesAtvConnect from "./servicesAtvConnect/ServicesAtvConnect.jsx";
import SchoolSubjectsAtvConnect from "./schoolSubjects/SchoolSubjectsAtvConnect.jsx";
import StepsAtvConnect from "./stepsAtvConnect/StepsAtvConnect.jsx";
import FiguresAtvConnect from "./figuresAtvConnect/FiguresAtvConnect.jsx";

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

      <FiguresAtvConnect />

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

      <StepsAtvConnect />

      <SchoolSubjectsAtvConnect />

      <TestimonialsAtvConnect />
    </>
  );
}

export default AtvConnect;
