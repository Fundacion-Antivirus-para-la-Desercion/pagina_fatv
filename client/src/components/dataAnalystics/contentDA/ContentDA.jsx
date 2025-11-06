import "./ContentDA.css";
import { useTranslation } from "react-i18next";

function ContentDA() {
  const { t } = useTranslation();
  return (
    <div className="content">
      <div className="content-info">
        <p className="title">{t("dataAnalytics.contentDA.title")}</p>
        <h4 className="lineSubtitle font-impact text-[3em] leading-[.92] uppercase">
          {t("dataAnalytics.contentDA.subtitle")}
        </h4>
        <p className="paragraph">{t("dataAnalytics.contentDA.paragraph1")}</p>
        <p className="paragraph">{t("dataAnalytics.contentDA.paragraph2")}</p>
      </div>
      <div className="content-image">
        <img
          src="/img_DataAnalytics/data-analytics-image.webp"
          alt={t("dataAnalytics.ContentDA.alt_image")}
        />
      </div>
    </div>
  );
}

export default ContentDA;
