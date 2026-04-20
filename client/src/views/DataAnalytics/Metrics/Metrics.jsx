import { FiDatabase } from "react-icons/fi";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import CounterNumeric from "../../../components/ContextData/CounterNumer.jsx";
import { motion } from "framer-motion";
import { slideFromTopForMetrics } from "../../../components/motion/constants/Animations.js";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

function Metrics() {
  const techMetrics = [
    {
      id: "01",
      icon: <FiDatabase />,
      value: "9",
      sign: "+",
      title: t("dataAnalytics.metrics.one"),
    },
    {
      id: "02",
      icon: <RiBarChartGroupedLine />,
      value: "50",
      sign: "+",
      title: t("dataAnalytics.metrics.two"),
    },
    {
      id: "03",
      icon: <FiGlobe />,
      value: "3",
      sign: "+",
      title: t("dataAnalytics.metrics.three"),
    },
    {
      id: "04",
      icon: <IoCodeSlash />,
      value: "10",
      sign: "k",
      title: t("dataAnalytics.metrics.four"),
    },
  ];

  const variantStyles = {
    dark: {
      text: "text-blue-base",
      iconColor: "text-primary-yellow",
      numberColor: "text-primary-yellow",
      underline: "after:bg-primary-yellow",
    },
    yellow: {
      text: "text-dark-blue",
      iconColor: "",
      numberColor: "text-dark-blue",
      underline: "after:bg-dark-blue",
    },
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 p-3 md:p-0 max-w-7xl mx-auto mt-5 md:mt-10 md:mb-16">
        {techMetrics.map((metric, index) => {
          const isDark = index % 2 === 0; // Alterna entre dark y yellow
          const styles = isDark ? variantStyles.dark : variantStyles.yellow;

          return (
            <motion.div
              {...slideFromTopForMetrics({
                transition: { delay: index * 0.3 },
              })}
              key={index}
              className={`flex flex-col items-center text-center p-5 m-2 bg-white rounded-2xl border-[1px] border-brand-blue-50 shadow-md transform hover:scale-105 transition-all duration-500`}
            >
              <div className="flex justify-end w-full">
                <p className="text-sm md:text-base lg:text-lg text-gray-400 font-extrabold">
                  {metric.id}
                </p>
              </div>
              <div
                className={`p-4 text-3xl ${styles.iconColor} bg-brand-blue-50/40 rounded-2xl mb-4`}
              >
                {metric.icon}
              </div>
              <div>
                <span
                  className={`text-4xl md:text-5xl ${styles.numberColor} font-impact`}
                >
                  <CounterNumeric countNumber={metric.value} />
                  {metric.sign}
                </span>
                <p className={`text-sm md:text-base ${styles.text} mt-2`}>
                  {metric.title}
                </p>
              </div>
            </motion.div>
          );
        })}
      </section>
    </>
  );
}

export default Metrics;
