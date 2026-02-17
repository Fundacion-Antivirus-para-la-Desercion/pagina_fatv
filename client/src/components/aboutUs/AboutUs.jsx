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
          <h1 className="lineSubtitle text-center md:text-start font-impact text-4xl md:text-5xl leading-[.92] uppercase">
            {t("home.aboutUs.subtitle")}
          </h1>
          <p className="text-sm md:text-base text-justify mt-4">
            {t("home.aboutUs.paragraph1")}
          </p>
        </div>
        <div className="right-content">
          <p className="text-center md:text-start text-xl">
            {t("home.aboutUs.paragraph2_start")}
            <strong className="right-content-strong">
              {t("home.aboutUs.paragraph2_strong")}
            </strong>
          </p>
          <Link
            className="group flex mt-5 md:mt-2 justify-center md:justify-start font-bold items-center text-base text-primary-purple cursor-pointer"
            to="/fundacion"
          >
            {t("home.aboutUs.button")}
            <img
              className="ml-5 relative transform transition-transform duration-300 group-hover:translate-x-1"
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
