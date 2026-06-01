import "./ContentDA.css";
import { useTranslation } from "react-i18next";

function ContentDA() {
  const { t } = useTranslation();
  return (
    <div className="content">
      <div className="content-info">
        <span className="text-base md:text-lg text-primary-purple font-impact uppercase text-center md:text-left mt-4">
          {" "}
          {t("dataAnalytics.contentDA.title")}
        </span>
        <h1 className="lineSubtitle text-blue-base font-impact text-4xl md:text-5xl leading-[.92] uppercase">
          {t("dataAnalytics.contentDA.subtitle")}
        </h1>
        <p className="text-blue-base text-base md:text-lg paragraph">
          {t("dataAnalytics.contentDA.paragraph1")}
        </p>
        <p className="text-blue-base text-base md:text-lg paragraph">
          {t("dataAnalytics.contentDA.paragraph2")}
        </p>
      </div>
      <div className="content-image">
        <img
          src=""
          alt={t("")}
        />
      </div>
    </div>
  );
}

export default ContentDA;
