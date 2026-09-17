import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MISION_IMG as Mision,
  VISION_IMG as Vision,
  VALORES_IMG as Valores,
  TEORIA_CAMBIO_IMG as TeoriaCambio,
  PUBLICO_IMG as Publico,
  PROPOSITO_IMG as Proposito,
} from "../../../assets/cloudinaryImages";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdEye } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { HiOutlineGlobe } from "react-icons/hi";

const IMG_SHAPE = "60% 20% 60% 30% / 30% 30% 40% 70%";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
};

const identityItems = [
  {
    image: Mision,
    imgAlt: "foundation.foundationIdentity.alt_mision",
    icon: TbTargetArrow,
    iconBg: "bg-primary-yellow text-dark-blue",
    titleKey: "foundation.foundationIdentity.mission.title",
    descKey: "foundation.foundationIdentity.mission.description",
    accentColor: "yellow",
  },
  {
    image: Vision,
    imgAlt: "foundation.foundationIdentity.alt_vision",
    icon: IoMdEye,
    iconBg: "bg-dark-blue text-white",
    titleKey: "foundation.foundationIdentity.vision.title",
    descKey: "foundation.foundationIdentity.vision.description",
    accentColor: "blue",
  },
  {
    image: Valores,
    imgAlt: "foundation.foundationIdentity.alt_vision.alt_values",
    icon: FaHandHoldingHeart,
    iconBg: "bg-brand-purple-50 text-brand-purple-400",
    titleKey: "foundation.foundationIdentity.values.title",
    descKey: "foundation.foundationIdentity.values.description",
    accentColor: "yellow",
  },
  {
    image: TeoriaCambio,
    imgAlt: "foundation.foundationIdentity.alt_change_theory",
    icon: LuSprout,
    iconBg: "bg-brand-teal-50 text-brand-teal-400",
    titleKey: "foundation.foundationIdentity.change_theory.title",
    descKey: "foundation.foundationIdentity.change_theory.description",
    accentColor: "blue",
  },
  {
    image: Publico,
    imgAlt: "foundation.foundationIdentity.alt_target_audience",
    icon: LiaGraduationCapSolid,
    iconBg: "bg-primary-yellow/20 text-primary-yellow",
    titleKey: "foundation.foundationIdentity.target_audience.title",
    descKey: "foundation.foundationIdentity.target_audience.description",
    accentColor: "yellow",
  },
  {
    image: Proposito,
    imgAlt: "foundation.foundationIdentity.alt_purpose",
    icon: HiOutlineGlobe,
    iconBg: "bg-primary-ice text-brand-blue-300",
    titleKey: "foundation.foundationIdentity.purpose.title",
    descKey: "foundation.foundationIdentity.purpose.description",
    accentColor: "blue",
  },
];

function FoundationIdentity() {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-12 md:px-20">
      <div className="text-center mb-16 flex flex-col items-center gap-3">
        <span className="px-4 py-1 rounded-full text-sm font-semibold tracking-widest bg-primary-yellow/25 text-dark-blue">
          FUNDACIÓN ATV
        </span>
        <h1 className="text-3xl md:text-5xl font-impact text-blue-base tracking-wide leading-tight">
          {t("foundation.foundationIdentity.title")}
        </h1>
        <div className="h-1 w-32 rounded-full bg-primary-yellow" />
        <p className="text-base md:text-xl text-blue-base max-w-2xl leading-relaxed">
          {t("foundation.foundationIdentity.description")}
        </p>
      </div>

      <motion.section
        className="grid grid-cols-1 xl:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {identityItems.map((item) => {
          const isYellow = item.accentColor === "yellow";

          return (
            <motion.div
              key={item.titleKey}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col md:flex-row rounded-3xl bg-white shadow-xl overflow-hidden md:h-[350px]"
            >
              <div
                className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full z-0 ${
                  isYellow ? "bg-primary-yellow/25" : "bg-blue-100"
                }`}
              />
              <div
                className={`absolute -top-10 -right-10 w-28 h-28 rounded-full z-0 ${
                  isYellow ? "bg-blue-100" : "bg-primary-yellow/25"
                }`}
              />
              <div
                className="w-full h-48 md:h-full md:w-[42%] mx-auto max-w-[200px] md:max-w-[500px] shrink-0 overflow-hidden relative z-10"
                style={{ borderRadius: IMG_SHAPE }}
              >
                <img
                  src={item.image}
                  alt={item.imgAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center gap-3 p-5 md:p-7 flex-1 min-w-0 relative z-10">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <div className={`p-2 rounded-full shrink-0 ${item.iconBg}`}>
                    <item.icon className="text-3xl" />
                  </div>
                  <h2 className="text-xl md:text-3xl font-impact uppercase text-blue-base tracking-wide">
                    {t(item.titleKey)}
                  </h2>
                  <div className="flex flex-col gap-[3px] ml-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`w-4 h-[3px] rounded-full -rotate-[30deg] ${
                          isYellow ? "bg-primary-yellow" : "bg-dark-blue/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-blue-base text-base leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.section>
    </section>
  );
}

export default FoundationIdentity;
