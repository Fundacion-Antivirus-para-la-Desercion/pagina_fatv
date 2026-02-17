import { LuGraduationCap } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";
import { HiBadgeCheck } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import CounterNumeric from "../../../components/ContextData/CounterNumer.jsx";
import { useTranslation } from "react-i18next";

function FiguresAtvConnect() {
  const { t } = useTranslation();

  const figuresData = [
    {
      icon: <LuGraduationCap className="text-3xl text-dark-blue" />,
      number: <CounterNumeric countNumber={800} />,
      sign: "+",
      text: t("atvConnect.figures_impact.figure_one"),
    },
    {
      icon: <HiBadgeCheck className="text-3xl text-dark-blue" />,
      number: <CounterNumeric countNumber={85} />,
      sign: "%",
      text: t("atvConnect.figures_impact.figure_two"),
    },

    {
      icon: <LuBookOpen className="text-3xl text-dark-blue" />,
      number: <CounterNumeric countNumber={700} />,
      sign: "+",
      text: t("atvConnect.figures_impact.figure_three"),
    },
    {
      icon: <FaRegHeart className="text-3xl text-dark-blue" />,
      number: <CounterNumeric countNumber={98} />,
      sign: "%",
      text: t("atvConnect.figures_impact.figure_four"),
    },
  ];

  return (
    <>
      <section className="max-w-4xl mx-auto m-5 mb-10">
        <section className="flex flex-col items-center md:p-10">
          {" "}
          <span className="text-lg md:text-xl font-impact text-primary-purple">
            {t("atvConnect.span_title")}
          </span>
          <h1 className="text-4xl md:text-5xl font-impact text-blue-base">
            {t("atvConnect.title")}
          </h1>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 justify-items-center p-5">
          {figuresData.map((figure, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
                {figure.icon}
              </div>
              <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
                {figure.number}
                {figure.sign}
              </span>
              <p className="text-base text-dark-blue">{figure.text}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export default FiguresAtvConnect;
