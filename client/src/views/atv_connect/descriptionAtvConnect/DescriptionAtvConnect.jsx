import {
  ESTUDIANTE_UNO_IMG as EstudianteUno,
  ESTUDIANTE_DOS_IMG as EstudianteDos,
  LOGO_ATV_CONECTA_IMG as LogoAtvConecta,
} from "../../../assets/cloudinaryImages";
import { floatSnake } from "../../../components/motion/constants/Animations.js";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function DescriptionAtvConnect() {
  const { t } = useTranslation();

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
    <section className="grid grid-col-1 lg:grid-cols-2 items-center mb-20 p-2 lg:p-5">
      <motion.div {...slideFromLeft} className="mb-5">
        <section className="relative xl:left-[10%] grid grid-col-1 lg:grid-cols-[4fr_1fr_4fr]">
          <div className="hidden lg:block">
            <img
              className=" md:max-h-[390px] border-8 border-white rounded-3xl justify-between shadow-2xl"
              src={EstudianteUno}
              alt=""
              loading="lazy"
            />
          </div>

          <motion.div {...floatSnake()} className="mb-5 relative">
            {" "}
            <img
              className="min-w-20 w-20 md:w-36 rounded-full bg-brand-teal-400 p-3 mt-5 md:mt-6 xl:ml-6 block mx-auto"
              src={LogoAtvConecta}
              alt="Logo ATVConecta"
              loading="lazy"
            />{" "}
          </motion.div>

          <div className="xl:relative xl:top-44 xl:right-[50%]">
            <img
              src={EstudianteDos}
              alt="Student receiving academic guidance"
              className="relative w-fit h-auto max-h-none sm:max-h-[370px] object-cover border-8 border-white rounded-3xl shadow-2xl mx-auto"
              loading="lazy"
            />
          </div>
        </section>
      </motion.div>

      <motion.div
        {...slideFromRight}
        className="text-center max-w-[700px] block mx-auto"
      >
        <section>
          <div className="text-center xl:text-left">
            <span className="inline-block mb-5 text-white text-sm tracking-nm bg-brand-teal-400 rounded-3xl py-2 px-4">
              ATVCONECTA
            </span>{" "}
            <h2 className=" text-blue-base text-3xl md:text-6xl font-impact mb-5">
              {t("atvConnect.h2")}
              <br />
              <span className="text-brand-teal-400">
                {t("atvConnect.br_h2")}
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-blue-base">
              {t("atvConnect.description_one")}
              <span className="text-brand-teal-400">
                {t("atvConnect.description_span")}
              </span>
              {t("atvConnect.description_two")}
            </p>
          </div>
        </section>
      </motion.div>
    </section>
  );
}

export default DescriptionAtvConnect;
