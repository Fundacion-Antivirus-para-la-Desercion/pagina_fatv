import { LuGraduationCap, LuBookOpen } from "react-icons/lu";
import { HiBadgeCheck } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { PiChalkboardTeacher } from "react-icons/pi";
import CounterNumeric from "@/components/CounterNumeric/CounterNumeric.jsx";
import { useTranslation } from "react-i18next";
import { DotsPattern } from "../../../assets/images/svg/Svg.jsx";
import { motion } from "framer-motion";
import { floatSnake } from "@/constants/animations.js";

const figuresData = [
  {
    id: "figure-one",
    icon: LuGraduationCap,
    prefix: "+",
    value: 800,
    valueColor: "text-dark-blue",
    translationKey: "atvConnect.figures_impact.figure_one",
    iconColor: "text-dark-blue",
    iconBg: "bg-dark-blue/10",
    accentBg: "bg-dark-blue",
    lineColor: "bg-dark-blue",
  },
  {
    id: "figure-two",
    icon: HiBadgeCheck,
    suffix: "%",
    value: 91,
    valueColor: "text-brand-teal-400",
    translationKey: "atvConnect.figures_impact.figure_two",
    iconColor: "text-brand-teal-400",
    iconBg: "bg-brand-teal-50",
    accentBg: "bg-brand-teal-400",
    lineColor: "bg-brand-teal-400",
  },
  {
    id: "figure-three",
    icon: LuBookOpen,
    prefix: "+",
    value: 8355,
    valueColor: "text-dark-blue",
    translationKey: "atvConnect.figures_impact.figure_three",
    iconColor: "text-dark-blue",
    iconBg: "bg-dark-blue/10",
    accentBg: "bg-dark-blue",
    lineColor: "bg-dark-blue",
  },
  {
    id: "figure-four",
    icon: FaRegHeart,
    suffix: "%",
    value: 4.88 ,
    valueColor: "text-brand-teal-400",
    translationKey: "atvConnect.figures_impact.figure_four",
    iconColor: "text-brand-teal-400",
    iconBg: "bg-brand-teal-50",
    accentBg: "bg-brand-teal-400",
    lineColor: "bg-brand-teal-400",
  },
   {
    id: "figure-five",
    icon: PiChalkboardTeacher,
    prefix: "+",
    value: 599,
    valueColor: "text-dark-blue",
    translationKey: "atvConnect.figures_impact.figure_five",
    iconColor: "text-dark-blue",
    iconBg: "bg-dark-blue/10",
    accentBg: "bg-dark-blue",
    lineColor: "bg-dark-blue",
  },
];

function FiguresAtvConnect() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-blue-base/5 py-16">
      <section className="flex flex-col items-center pt-8 px-4 md:p-10 mb-10">
        <span className="text-base md:text-lg font-impact text-brand-teal-400 mb-2 md:mb-4 text-center">
          {t("atvConnect.figures_impact.span_title")}
        </span>
        <h2 className="text-3xl md:text-5xl font-impact text-blue-base text-center">
          {t("atvConnect.figures_impact.title")}
        </h2>
      </section>
      <motion.div {...floatSnake(0)}>
        <DotsPattern classNames="absolute hidden md:block size-24 -top-24 left-16" />
      </motion.div>
      <motion.div {...floatSnake(0)}>
        <DotsPattern classNames="absolute hidden md:block size-24 -top-24 right-16" />
      </motion.div>
      <section className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full px-5 md:px-10 lg:px-16 pb-8 md:pb-10 gap-6 md:gap-5">
        {figuresData.map((figure) => {
          const Icon = figure.icon;
          return (
            <div
              key={figure.id}
              className={`relative flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-3 md:gap-4 bg-white rounded-2xl px-4 py-5 md:px-5 md:py-4 w-full overflow-hidden hover:translate-y-[-8px] transition-transform duration-300 shadow min-h-36`}
            >
              <div
                className={`flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full ${figure.iconBg}`}
              >
                <Icon className={`text-2xl md:text-3xl ${figure.iconColor}`} />
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className={`statistic-number inline-flex items-baseline justify-center md:justify-start ${figure.valueColor} text-3xl md:text-4xl font-impact leading-none`}
                >
                  {figure.prefix && (
                    <span className="mr-0.5">{figure.prefix}</span>
                  )}
                  <CounterNumeric countNumber={figure.value} />
                  {figure.suffix && (
                    <span className="ml-0.5">{figure.suffix}</span>
                  )}
                </span>
                <p className="text-base text-dark-blue mt-1 leading-tight">
                  {t(figure.translationKey)}
                </p>
              </div>
              {/* Línea indicadora inferior adaptada */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full ${figure.lineColor}`}
              ></div>{" "}
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default FiguresAtvConnect;
