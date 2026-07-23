import { LuHistory } from "react-icons/lu";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import CounterNumeric from "../../../components/ContextData/CounterNumer.jsx";
import { motion } from "framer-motion";
import { expandableTransition } from "../../../components/motion/constants/Animations.js";
import { useTranslation } from "react-i18next";

function Metrics() {
  const { t } = useTranslation();
  const techMetrics = [
    {
      id: "01",
      icon: <LuHistory />,
      sign: "+",
      value: 3,
      title: t("dataAnalytics.metrics.one"),
    },
    {
      id: "02",
      icon: <HiOutlinePresentationChartBar />,
      sign: "+",
      value: 90,
      title: t("dataAnalytics.metrics.two"),
    },
    {
      id: "03",
      icon: <BsDatabaseCheck />,
      sign: "+",
      value: 500,
      title: t("dataAnalytics.metrics.three"),
    },
    {
      id: "04",
      icon: <FaRegStar />,
      value: 4.9,
      sign: "/5.0",
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
      iconColor: "text-dark-blue",
      numberColor: "text-dark-blue",
      underline: "after:bg-dark-blue",
    },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8 p-3 md:p-0 max-w-7xl mx-auto mt-5 md:mt-10 md:mb-16">
        {techMetrics.map((metric, index) => {
          const isDark = index % 2 === 0; // Alterna entre dark y yellow
          const styles = isDark ? variantStyles.dark : variantStyles.yellow;
          const isPrefixSign = metric.sign === "+";

          return (
            <motion.div
              {...expandableTransition({
                transition: { delay: index * 0.2 },
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
                  className={`inline-flex items-baseline text-4xl md:text-5xl ${styles.numberColor} font-impact`}
                >
                  {isPrefixSign && <span className="mr-1">{metric.sign}</span>}
                  <CounterNumeric countNumber={metric.value} />
                  {!isPrefixSign && <span className="ml-1">{metric.sign}</span>}
                </span>
                <p className={`text-sm md:text-base ${styles.text} mt-2`}>
                  {metric.title}
                </p>
              </div>
            </motion.div>
          );
        })}
      </section>
  );
}

export default Metrics;
