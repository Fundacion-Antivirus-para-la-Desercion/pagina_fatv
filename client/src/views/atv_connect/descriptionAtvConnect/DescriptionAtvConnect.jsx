import {
  ESTUDIANTE_UNO_IMG as EstudianteUno,
  ESTUDIANTE_DOS_IMG as EstudianteDos,
  LOGO_ATV_CONECTA_IMG as LogoAtvConecta,
} from "../../../assets/cloudinaryImages";
import { floatSnake } from "../../../components/motion/constants/Animations.js";
import { GoPeople } from "react-icons/go";
import { LuLink } from "react-icons/lu";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function DescriptionAtvConnect() {
  const { t } = useTranslation();

  const goals = [
    {
      icon: GoPeople,
      title: "Acompañamos",
      description: "tu proceso",
      iconBg: "bg-brand-teal-300",
    },
    {
      icon: LuLink,
      title: "Conectamos",
      description: "con tutores",
      iconBg: "bg-primary-purple",
    },
    {
      icon: HiOutlineRocketLaunch,
      title: "Impulsamos",
      description: "tu transformación",
      iconBg: "bg-brand-blue-100",
    },
    {
      icon: TbTargetArrow,
      title: "Alcanzas",
      description: "tus metas",
      iconBg: "bg-primary-yellow",
    },
  ];

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
              className="min-w-20 w-20 md:w-28 rounded-full bg-brand-teal-400 p-3 mt-5 md:mt-6 xl:ml-6 block mx-auto"
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
          <div className="text-center xl:text-left mb-10">
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
            <p className="text-lg md:text-xl text-blue-base">
              {t("atvConnect.description_one")}
              <span className="text-brand-teal-400">
                {t("atvConnect.description_span")}
              </span>
              {t("atvConnect.description_two")}
            </p>
          </div>

          <div className="relative mt-8">
            {/* Línea punteada — solo en desktop, a la altura del centro de los círculos (top-8 = 2rem = la mitad de h-16) */}
            <div className="hidden md:block absolute top-8 left-12 right-12 border-t-2 border-dashed border-brand-teal-300 opacity-65 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {goals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <div
                    key={goal.title}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${goal.iconBg} text-white flex items-center justify-center`}
                    >
                      <Icon size={32} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-blue-base text-sm md:text-base">
                        {goal.title}
                      </p>
                      <p className="text-xs md:text-sm text-blue-base opacity-70">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  );
}

export default DescriptionAtvConnect;
