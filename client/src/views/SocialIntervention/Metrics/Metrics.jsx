import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { LuCompass } from "react-icons/lu";
import { PiHeartStraight } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { RiMedal2Fill } from "react-icons/ri";
import CounterNumeric from "../../../components/ContextData/CounterNumer.jsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Metrics() {
  const { t } = useTranslation();

  const metricsData = [
    {
      icon: <HiMiniArrowTrendingUp />,
      span: t("socialIntervention.metrics.metricsData.metrict_one.span"),
      value: <CounterNumeric countNumber={91} />,
      sign: "%",
      description: t(
        "socialIntervention.metrics.metricsData.metrict_one.description",
      ),
    },
    {
      icon: <GoPeople />,
      span: t("socialIntervention.metrics.metricsData.metrict_two.span"),
      value: <CounterNumeric countNumber={10512} />,
      sign: "+",
      description: t(
        "socialIntervention.metrics.metricsData.metrict_two.description",
      ),
    },
    {
      icon: <LuCompass />,
      span: t("socialIntervention.metrics.metricsData.metrict_three.span"),
      value: <CounterNumeric countNumber={3834} />,
      sign: "+",
      description: t(
        "socialIntervention.metrics.metricsData.metrict_three.description",
      ),
    },
    {
      icon: <PiHeartStraight />,
      span: t("socialIntervention.metrics.metricsData.metrict_four.span"),
      value: <CounterNumeric countNumber={85} />,
      sign: "%",
      description: t(
        "socialIntervention.metrics.metricsData.metrict_four.description",
      ),
    },
    {
      icon: <LuGraduationCap />,
      span: t("socialIntervention.metrics.metricsData.metrict_five.span"),
      value: <CounterNumeric countNumber={2885} />,
      sign: "+",
      description: t(
        "socialIntervention.metrics.metricsData.metrict_five.description",
      ),
    },
    {
      icon: <PiPuzzlePieceBold />,
      span: t("socialIntervention.metrics.metricsData.metrict_six.span"),
      value: <CounterNumeric countNumber={26} />,
      sign: "+",
      description: t(
        "socialIntervention.metrics.metricsData.metrict_six.description",
      ),
    },
  ];

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  return (
    <>
      <section className="relative bg-dark-blue mt-10 p-10">
        <motion.div {...slideFromTop} className="will-change-transform">
          <RiMedal2Fill className="absolute hidden md:block top-0 left-1 text-9xl m-5 text-[#ffffff93] -rotate-0" />
        </motion.div>
        <motion.div {...slideFromTop} className="will-change-transform">
          <RiMedal2Fill className="absolute hidden md:block top-0 right-1 text-9xl m-5 text-[#ffffff93] -rotate-0" />
        </motion.div>

        <div className="flex flex-col text-center mt-10">
          <span className="text-primary-yellow font-impact">
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
          {metricsData.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-6 rounded-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="flex justify-between">
                <div className="p-2 text-4xl md:text-4xl text-primary-yellow bg-yellow-100 rounded-xl mb-3">
                  {metric.icon}
                </div>
                <div>
                  {" "}
                  <span className="text-dark-blue text-lg">{metric.span}</span>
                </div>
              </div>
              <div className="flex items-baseline font-impact">
                <figure className="text-3xl md:text-4xl text-center md:text-left text-dark-blue mt-2">
                  {metric.value}
                </figure>
                <span className="text-primary-yellow text-3xl md:text-4xl ml-1">
                  {" "}
                  {metric.sign}
                </span>
              </div>

              <p className="text-center md:text-left text-base text-dark-blue mt-3">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Metrics;
