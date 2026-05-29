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
    translationKey: "atvConnect.figures_impact.figure_one",
  },
  {
    id: "figure-two",
    icon: HiBadgeCheck,
    suffix: "%",
    value: 85,
    translationKey: "atvConnect.figures_impact.figure_two",
  },
  {
    id: "figure-three",
    icon: LuBookOpen,
    prefix: "+",
    value: 700,
    translationKey: "atvConnect.figures_impact.figure_three",
  },
  {
    id: "figure-four",
    icon: FaRegHeart,
    suffix: "%",
    value: 98,
    translationKey: "atvConnect.figures_impact.figure_four",
  },
];

function FiguresAtvConnect() {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto m-5 mb-10">
      <section className="flex flex-col items-center md:p-10">
        <span className="text-base md:text-lg font-impact text-primary-purple">
          {t("atvConnect.span_title")}
        </span>
        <h2 className="text-4xl md:text-5xl font-impact text-blue-base">
          {t("atvConnect.title")}
        </h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 justify-items-center p-5">
        {figuresData.map((figure) => {
          const Icon = figure.icon;

          return (
            <div key={figure.id} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
                <Icon className="text-3xl text-dark-blue" />
              </div>
              <span className="statistic-number inline-flex items-baseline text-dark-blue text-3xl md:text-4xl font-impact">
                {figure.prefix && <span className="mr-1">{figure.prefix}</span>}
                <CounterNumeric countNumber={figure.value} />
                {figure.suffix && <span className="ml-1">{figure.suffix}</span>}
              </span>
              <p className="text-base text-dark-blue text-center">
                {t(figure.translationKey)}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default FiguresAtvConnect;
