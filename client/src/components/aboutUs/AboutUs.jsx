import "./AboutUs.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Arrow from "../../../src/assets/Icons/arrow.svg";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="aboutUs">
      <div className="aboutUs-content">
        <div className="left-content">
          <p className="title">{t("home.aboutUs.title")}</p>
          <h4 className="lineSubtitle subtitle font-impact text-[3em] leading-[.92] uppercase">
            {t("home.aboutUs.subtitle")}
          </h4>
          <p className="paragraph">{t("home.aboutUs.paragraph1")}</p>
        </div>
        <div className="right-content">
          <p className="right-paragraph text-xl">
            {t("home.aboutUs.paragraph2_start")}
            <strong className="right-content-strong">
              {t("home.aboutUs.paragraph2_strong")}
            </strong>
          </p>
          <Link
            className="group flex font-bold items-center text-base text-[#7c78b3] cursor-pointer"
            to="/fundacion"
          >
            {t("home.aboutUs.button")}
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt={t("home.aboutUs.alt_arrow")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
