import { LuGraduationCap, LuBookOpen } from "react-icons/lu";
import { HiBadgeCheck } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import CounterNumeric from "../../../components/ContextData/CounterNumer.jsx";
import { useTranslation } from "react-i18next";

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
    value: 85,
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
    value: 700,
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
    value: 98,
    valueColor: "text-brand-teal-400",
    translationKey: "atvConnect.figures_impact.figure_four",
    iconColor: "text-brand-teal-400",
    iconBg: "bg-brand-teal-50",
    accentBg: "bg-brand-teal-400",
    lineColor: "bg-brand-teal-400",
  },
];

function FiguresAtvConnect() {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-base/5 py-16">
      <section className="flex flex-col items-center pt-8 px-4 md:p-10 mb-10">
        <span className="text-base md:text-lg font-impact text-brand-teal-400 mb-2 md:mb-4 text-center">
          {t("atvConnect.span_title")}
        </span>
        <h2 className="text-3xl md:text-5xl font-impact text-blue-base text-center">
          {t("atvConnect.title")}
        </h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-6 md:gap-8 px-5 pb-8 md:pb-10">
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
                <p className="text-sm text-dark-blue mt-1 leading-tight">
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
