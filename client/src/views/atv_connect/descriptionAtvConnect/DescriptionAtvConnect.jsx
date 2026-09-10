import {
  ESTUDIANTE_UNO_IMG as EstudianteUno,
  ESTUDIANTE_DOS_IMG as EstudianteDos,
  LOGO_ATV_CONECTA_IMG as LogoAtvConecta,
} from "../../../assets/cloudinaryImages";
import { floatSnake } from "../../../components/motion/constants/Animations.js";
import { DotsPattern } from "../../../assets/images/svg/Svg.jsx";
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
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 px-8 py-16 md:px-16 md:py-12 lg:px-24 lg:py-24">
      <motion.div {...slideFromLeft} className="mb-5 lg:mb-0">
        <div className="relative w-full h-[280px] md:h-[450px] lg:h-[500px]">
          {/* Blob naranja - esquina superior izquierda */}
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary-yellow z-0 opacity-80" />

          {/* Blob azul claro - esquina superior derecha */}
          <div className="absolute top-6 right-10 w-24 h-16 rounded-2xl bg-blue-200 z-0" />

          {/* Dots pattern - zona inferior izquierda */}
          <DotsPattern classNames="absolute bottom-0 left-0 z-0 opacity-60" />

          {/* Foto 1 — grande, arriba-izquierda */}
          <img
            src={EstudianteUno}
            alt="Estudiante con certificado ATV Conecta"
            className="absolute top-0 left-0 w-[62%] h-[70%] object-cover rounded-2xl shadow-md z-10"
            loading="lazy"
          />

          {/* Foto 2 — superpuesta, abajo-derecha */}
          <img
            src={EstudianteDos}
            alt="Estudiante con certificado ATV Conecta"
            className="absolute bottom-0 right-0 w-[58%] h-[68%] object-cover rounded-2xl shadow-lg z-20"
            loading="lazy"
          />

          {/* Logo circular flotante - arriba-derecha */}
          <motion.div
            {...floatSnake()}
            className="absolute top-0 right-0 z-30 w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-teal-400 flex items-center justify-center p-3 shadow-lg"
          >
            <img
              src={LogoAtvConecta}
              alt="Logo ATV Conecta"
              className="w-full"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div {...slideFromRight}>
        <section className="text-center">
          {/* Bloque de texto */}
          <div className="text-center xl:text-left mb-10">
            <span className="inline-block mb-5 text-white text-sm tracking-nm bg-brand-teal-400 rounded-3xl py-2 px-4">
              ATVCONECTA
            </span>
            <h2 className="text-blue-base text-3xl md:text-5xl xl:text-6xl font-impact mb-5">
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
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-brand-teal-300 opacity-65 z-0" />
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
