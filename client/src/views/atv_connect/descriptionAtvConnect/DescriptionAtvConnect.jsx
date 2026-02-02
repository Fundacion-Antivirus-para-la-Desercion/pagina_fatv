import Graduation from "../../../assets/images/views/atvConnect/graduados.png";
import Birrete from "../../../assets/images/views/atvConnect/birrete.webp";
import LogoAtvConecta from "../../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function DescriptionAtvConnect() {
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
    </>
  );
}

export default DescriptionAtvConnect;
