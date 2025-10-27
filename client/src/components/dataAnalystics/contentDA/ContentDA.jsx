import "./ContentDA.css";
import { useTranslation } from "react-i18next";

function ContentDA() {
  const { t } = useTranslation();
  return (
    <div className="content">
      <div className="content-info">
        <p className="title">{t("ContentDA.content.title")}</p>
        <h4 className="lineSubtitle font-impact text-[3em] leading-[.92] uppercase tracking-[-0.06em]">
          {t("ContentDA.content.subtitle")}
        </h4>
        <p className="paragraph">{t("ContentDA.content.paragraph1")}</p>
        <p className="paragraph">{t("ContentDA.content.paragraph2")}</p>
      </div>
      <div className="content-image">
        <img
          src="/img_DataAnalytics/data-analytics-image.webp"
          alt={t("ContentDA.content.alt_image")}
        />
      </div>
    </div>
  );
}

export default ContentDA;
