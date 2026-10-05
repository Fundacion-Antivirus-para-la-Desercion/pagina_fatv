import {
  ESTUDIANTE_UNO_IMG as EstudianteUno,
  ESTUDIANTE_DOS_IMG as EstudianteDos,
  LOGO_ATV_CONECTA_IMG as LogoAtvConecta,
} from "../../../assets/cloudinaryImages";
import { floatSnake } from "@/constants/animations.js";
import { DotsPattern } from "./Decorations.jsx";
import { GoPeople } from "react-icons/go";
import { LuLink } from "react-icons/lu";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const goals = [
  {
    icon: GoPeople,
    titleKey: "atvConnect.description.goals.one.title",
    descriptionKey: "atvConnect.description.goals.one.description",
    iconBg: "bg-brand-teal-300",
  },
  {
    icon: LuLink,
    titleKey: "atvConnect.description.goals.two.title",
    descriptionKey: "atvConnect.description.goals.two.description",
    iconBg: "bg-primary-purple",
  },
  {
    icon: HiOutlineRocketLaunch,
    titleKey: "atvConnect.description.goals.three.title",
    descriptionKey: "atvConnect.description.goals.three.description",
    iconBg: "bg-brand-blue-100",
  },
  {
    icon: TbTargetArrow,
    titleKey: "atvConnect.description.goals.four.title",
    descriptionKey: "atvConnect.description.goals.four.description",
    iconBg: "bg-primary-yellow",
  },
];

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
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 px-8 py-16 md:px-16 md:py-12 lg:px-24 lg:py-20">
      <motion.div {...slideFromLeft} className="mb-5 lg:mb-0">
        <div className="relative w-full h-[280px] sm:h-[450px] lg:h-[500px]">
          <DotsPattern classNames="absolute top-0 right-40 z-0 opacity-60" />

          {/* Blob naranja - esquina superior izquierda */}
          <div className="absolute top-6 md:top-24 -left-5 md:-left-5 w-16 h-28 rounded-3xl bg-primary-yellow z-0 opacity-80" />

          {/* Blob azul claro - esquina superior derecha */}
          <div className="absolute top-20 md:top-20 left-24 md:right-48 w-36 md:w-72 h-48 md:h-80 rounded-3xl bg-blue-100 z-0" />

          {/* Dots pattern - zona inferior izquierda */}
          <DotsPattern classNames="absolute bottom-0 left-0 z-0 opacity-60" />

          {/* Foto 1 — grande, arriba-izquierda */}
          <img
            src={EstudianteUno}
            alt="atvConnect.description.alt_img_one"
            className="absolute top-0 left-0 w-[62%] h-[70%] object-cover rounded-2xl shadow-md z-10"
            loading="lazy"
          />

          {/* Foto 2 — superpuesta, abajo-derecha */}
          <img
            src={EstudianteDos}
            alt={t("atvConnect.description.alt_img_two")}
            className="absolute -bottom-2 right-0 w-[58%] h-[68%] object-cover rounded-2xl shadow-lg z-20"
            loading="lazy"
          />

          {/* Logo circular flotante - arriba-derecha */}
          <motion.div
            {...floatSnake()}
            className="hidden md:flex absolute top-0 right-5 md:right-10 z-30 w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-teal-400 items-center justify-center p-3 shadow-lg"
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
              {t("atvConnect.description.h2")}
              <br />
              <span className="text-brand-teal-400">
                {t("atvConnect.description.br_h2")}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-blue-base">
              {t("atvConnect.description.paragraph")}
              <span className="text-brand-teal-400">
                {t("atvConnect.description.span")}
              </span>
            </p>
          </div>

          <div className="relative mt-8">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-brand-teal-300 opacity-65 z-0" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {goals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <div
                    key={goal.titleKey}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${goal.iconBg} text-white flex items-center justify-center transition-transform duration-300 hover:scale-105 `}
                    >
                      <Icon size={32} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-blue-base text-sm md:text-base">
                        {t(goal.titleKey)}
                      </p>
                      <p className="text-xs md:text-sm text-blue-base opacity-70">
                        {t(goal.descriptionKey)}
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
