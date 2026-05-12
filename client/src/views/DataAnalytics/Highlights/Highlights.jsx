import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AiOutlineLaptop } from "react-icons/ai";
import { MdQueryStats } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GoTable } from "react-icons/go";
import { expandableTransition } from "../../../components/motion/constants/Animations.js";
import { highlightCards } from "./data.js";

const iconMap = {
  database: <AiOutlineLaptop />,
  chart: <MdQueryStats />,
  check: <IoCheckmarkCircleOutline />,
  grid: <GoTable />,
};

const variantStyles = {
  yellow: {
    iconBox: "bg-primary-yellow/12 text-primary-yellow",
    badge: "bg-primary-yellow/12 text-primary-yellow",
    metric: "text-primary-yellow",
    metricLabel: "text-white/40",
  },
  blue: {
    iconBox: "bg-[#5DB0FF]/12 text-[#5DB0FF]",
    badge: "bg-[#5DB0FF]/12 text-[#5DB0FF]",
    metric: "text-[#5DB0FF]",
    metricLabel: "text-white/40",
  },
};

function Highlights() {
  const { t } = useTranslation();

  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-dark-blue py-16 md:py-24"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255, 196, 61, 0.25) 1.2px, transparent 1.2px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <span className="inline-flex items-center  font-impact rounded-full border border-primary-yellow/20 bg-primary-yellow/10 px-5 py-2 text-sm md:text-base text-primary-yellow">
              ✦ {t("dataAnalytics.highlights.badge")}
            </span>

            <h2 className="mt-5 font-impact text-4xl md:text-5xl leading-[0.95]">
              <span className="text-white">
                {t("dataAnalytics.highlights.title")}{" "}
              </span>
              <span className="text-primary-yellow">
                {t("dataAnalytics.highlights.titleHighlight")}
              </span>
            </h2>
          </div>

          <p className="max-w-xl pt-2 text-lg md:text-xl leading-relaxed text-white/45 lg:justify-self-end">
            {t("dataAnalytics.highlights.description")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {highlightCards.map((card, index) => (
            <motion.div
              key={card.id}
              {...expandableTransition({
                transition: { delay: 0.3 + index * 0.12 },
              })}
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl text-3xl ${variantStyles[card.variant].iconBox}`}
                  >
                    {iconMap[card.icon]}
                  </div>

                  <div className="text-right leading-none">
                    <p
                      className={`font-impact text-2xl md:text-3xl ${variantStyles[card.variant].metric}`}
                    >
                      {t(card.metricKey)}
                    </p>
                    <p
                      className={`mt-2 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] ${variantStyles[card.variant].metricLabel}`}
                    >
                      {t(card.metricLabelKey)}
                    </p>
                  </div>
                </div>

                <span
                  className={`mt-6 inline-flex rounded-lg px-3 py-1.5 text-xs md:text-base font-bold uppercase tracking-[0.24em] ${variantStyles[card.variant].badge}`}
                >
                  {t(card.codeKey)}
                </span>

                <h3 className="mt-6 max-w-[26rem] font-impact text-base md:text-xl leading-tight text-white">
                  {t(card.titleKey)}
                </h3>

                <p className="mt-4 max-w-[38rem] text-base md:text-lg leading-relaxed text-white/65">
                  {t(card.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
