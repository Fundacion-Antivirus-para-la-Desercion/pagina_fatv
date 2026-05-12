import { VscDeviceCameraVideo } from "react-icons/vsc";
import { BiSolidUserPin } from "react-icons/bi";
import { MdCampaign } from "react-icons/md";
import { LuPalette } from "react-icons/lu";
import CounterNumeric from "../../../components/ContextData/CounterNumer.jsx";
import { useTranslation } from "react-i18next";

const metricsData = [
  {
    icon: VscDeviceCameraVideo,
    count: 550,
    suffix: "+",
    translationKey: "communications.metrics.one",
    variant: "dark",
  },
  {
    icon: MdCampaign,
    count: 80,
    suffix: "+",
    translationKey: "communications.metrics.two",
    variant: "yellow",
  },
  {
    icon: BiSolidUserPin,
    count: 8200 ,
    suffix: "+",
    translationKey: "communications.metrics.three",
    variant: "dark",
  },
  {
    icon: LuPalette,
    count: 1400,
    suffix: "+",
    translationKey: "communications.metrics.four",
    variant: "yellow",
  },
];

const variantStyles = {
  dark: {
    bg: "bg-dark-blue",
    text: "text-white",
    iconColor: "text-primary-yellow",
    numberColor: "text-white",
    underline: "after:bg-primary-yellow",
  },
  yellow: {
    bg: "bg-primary-yellow",
    text: "text-dark-blue",
    iconColor: "",
    numberColor: "text-dark-blue",
    underline: "after:bg-dark-blue",
  },
};

const underlineClasses =
  "relative text-base md:text-lg w-fit mx-auto after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:scale-x-0 after:origin-center after:transition-transform after:duration-500 group-hover:after:scale-x-100";

function getCornerClass(index, total) {
  if (total === 1) return "rounded-xl";
  if (index === 0)
    return "rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl";
  if (index === total - 1)
    return "rounded-bl-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl";
  return "";
}

function MetricCard({
  icon: Icon,
  count,
  suffix,
  translationKey,
  variant,
  className = "",
}) {
  const { t } = useTranslation();
  const styles = variantStyles[variant];

  return (
    <div className={`group ${styles.bg} p-5 ${className}`}>
      <div
        className={`flex flex-col items-center justify-center p-5 ${styles.text} h-full`}
      >
        <Icon className={`text-4xl ${styles.iconColor} mb-5`} />
        <span
          className={`statistic-number text-4xl ${styles.numberColor} font-impact mb-3`}
        >
          <CounterNumeric countNumber={count} />
          {suffix}
        </span>
        <p className={`${underlineClasses} ${styles.underline}`}>
          {t(translationKey)}
        </p>
      </div>
    </div>
  );
}

function Metrics() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-10 text-center w-full mx-auto">
      {metricsData.map((metric, index) => (
        <MetricCard
          key={metric.translationKey}
          {...metric}
          className={getCornerClass(index, metricsData.length)}
        />
      ))}
    </section>
  );
}

export default Metrics;
