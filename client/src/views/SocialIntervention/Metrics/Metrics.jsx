import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { LuCompass, LuGraduationCap } from "react-icons/lu";
import { PiHeartStraight, PiPuzzlePieceBold } from "react-icons/pi";
import { RiMedal2Fill } from "react-icons/ri";
import CounterNumeric from "../../../components/ContextData/CounterNumer.jsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { slideFromTop } from "../../../components/motion/constants/Animations.js";

function Metrics() {
  const { t } = useTranslation();

  const metricsData = [
    {
      icon: <HiMiniArrowTrendingUp />,
      label: t("socialIntervention.metrics.metricsData.metric_one.span"),
      value: 91,
      sign: "%",
      description: t(
        "socialIntervention.metrics.metricsData.metric_one.description",
      ),
    },
    {
      icon: <GoPeople />,
      label: t("socialIntervention.metrics.metricsData.metric_two.span"),
      value: 10512,
      sign: "+",
      description: t(
        "socialIntervention.metrics.metricsData.metric_two.description",
      ),
    },
    {
      icon: <LuCompass />,
      label: t("socialIntervention.metrics.metricsData.metric_three.span"),
      sign: "+",
      value: 3834,
      description: t(
        "socialIntervention.metrics.metricsData.metric_three.description",
      ),
    },
    {
      icon: <PiHeartStraight />,
      label: t("socialIntervention.metrics.metricsData.metric_four.span"),
      sign: "%",
      value: 85,
      description: t(
        "socialIntervention.metrics.metricsData.metric_four.description",
      ),
    },
    {
      icon: <LuGraduationCap />,
      label: t("socialIntervention.metrics.metricsData.metric_five.span"),
      sign: "+",
      value: 2885,
      description: t(
        "socialIntervention.metrics.metricsData.metric_five.description",
      ),
    },
    {
      icon: <PiPuzzlePieceBold />,
      label: t("socialIntervention.metrics.metricsData.metric_six.span"),
      sign: "+",
      value: 26,
      description: t(
        "socialIntervention.metrics.metricsData.metric_six.description",
      ),
    },
  ];

  return (
    <section className="relative bg-dark-blue mt-10 p-10">
      <motion.div
        {...slideFromTop({
          transition: { delay: 2 },
          viewport: { amount: 1 },
        })}
        className="will-change-transform"
      >
        <RiMedal2Fill className="absolute hidden lg:block top-0 left-1 text-9xl m-5 text-[#ffffff93] -rotate-0" />
      </motion.div>
      <motion.div
        {...slideFromTop({
          transition: { delay: 2 },
          viewport: { amount: 1 },
        })}
        className="will-change-transform"
      >
        <RiMedal2Fill className="absolute hidden lg:block top-0 right-1 text-9xl m-5 text-[#ffffff93] -rotate-0" />
      </motion.div>

      <div className="flex flex-col text-center mt-10">
        <span className="text-base md:text-lg text-primary-yellow font-impact uppercase text-center mt-4">
          {t("socialIntervention.metrics.span")}
        </span>
        <h2 className="text-4xl md:text-5xl text-white font-impact">
          {t("socialIntervention.metrics.title")}
        </h2>
        <p className="text-lg text-white p-5 mt-8">
          {t("socialIntervention.metrics.description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3 md:p-0 max-w-7xl mx-auto mt-5 md:mt-10">
        {metricsData.map((metric, index) => {
          const isPrefixSign = metric.sign === "+";

          return (
            <div
              key={index}
              className="flex flex-col bg-white p-6 rounded-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="flex justify-between">
                <div className="p-2 text-4xl md:text-4xl text-primary-yellow bg-yellow-100 rounded-xl mb-3">
                  {metric.icon}
                </div>
                <div>
                  <span className="text-dark-blue text-lg">{metric.label}</span>
                </div>
              </div>
              <div className="flex items-baseline font-impact text-3xl md:text-4xl text-dark-blue mt-2">
                {isPrefixSign && <span className="mr-1">{metric.sign}</span>}
                <span className="text-center md:text-left">
                  <CounterNumeric countNumber={metric.value} />
                </span>
                {!isPrefixSign && <span className="ml-1">{metric.sign}</span>}
              </div>

              <p className="text-center md:text-left text-base text-dark-blue mt-3">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Metrics;
