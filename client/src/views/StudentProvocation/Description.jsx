import { ESTUDIANTES_PROVOCACION_IMG as Estudiantes } from "../../assets/cloudinaryImages";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../components/motion/constants/Animations.js";
import { TiHeart } from "react-icons/ti";
import { FaRegCompass } from "react-icons/fa6";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";

function Description() {
  const { t } = useTranslation();

  const guidanceAreas = [
    {
      id: 1,
      icon: FaRegCompass,
      title: t("provocacion.description.guidanceAreas.one"),
    },
    {
      id: 2,
      icon: PiGraduationCap,
      title: t("provocacion.description.guidanceAreas.two"),
    },
    {
      id: 3,
      icon: MdOutlineWorkOutline,
      title: t("provocacion.description.guidanceAreas.three"),
    },
  ];
  return (
    <section className="relative bg-primary-yellow/5 flex flex-col md:flex-row flex-wrap items-center justify-center gap-0 px-8 py-16 md:px-16 md:py-12">
      <motion.div
        {...slideFromLeft}
        className="text-center lg:text-left max-w-3xl"
      >
        <span className="inline-block mb-5 text-dark-blue text-xs md:text-sm tracking-nm bg-primary-yellow rounded-3xl py-2 px-4">
          {t("provocacion.description.span")}
        </span>
        <h2 className="text-blue-base text-3xl md:text-5xl lg:text-6xl font-impact mb-5">
          {t("provocacion.description.title_initial")}
          <span className="text-primary-yellow">
            {t("provocacion.description.span_title")}
          </span>
        </h2>
        <p className="text-blue-base text-base md:text-xl tracking-tighter text-justify max-w-prose">
          {t("provocacion.description.paragraph_description")}
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
          {guidanceAreas.map((area) => (
            <div
              key={area.id}
              className="flex flex-col items-center justify-center group"
            >
              <div className="p-5 bg-white rounded-3xl mb-2 shadow-lg transition-all duration-300 group-hover:translate-y-[-8px] group-hover:bg-primary-yellow">
                <area.icon className="text-dark-blue text-3xl" />
              </div>
              <h4 className="text-dark-blue font-semibold text-lg">
                {area.title}
              </h4>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        {...slideFromRight({ transition: { delay: 0 } })}
        className="relative group mt-10 md:mt-0 w-fit"
      >
        <img
          src={Estudiantes}
          alt={t("provocacion.description.alt")}
          className="relative w-auto max-w-[350px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px] h-[400px] md:h-[600px] object-cover rounded-3xl bg-white p-2 mx-auto rotate-3 shadow-lg transition-transform duration-500 hover:rotate-0"
          loading="lazy"
        />
        <span
          className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200
                              bg-dark-blue text-white text-sm md:text-lg py-1 px-3 rounded-lg shadow-xl flex items-center gap-1 whitespace-nowrap"
        >
          PROVocación <TiHeart />
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-dark-blue" />
        </span>
      </motion.div>
    </section>
  );
}

export default Description;
