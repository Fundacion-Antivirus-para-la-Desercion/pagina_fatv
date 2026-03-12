import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Arrow from "../../../src/assets/Icons/arrow.svg";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="text-blue-base m-8 md:p-12 lg:p-20">
      <div className="flex flex-col items-end md:flex-row md:flex-wrap md:justify-between lg:gap-x-10">
        <div className="w-full md:w-[calc(50%-50px)] mb-5 md:mb-0">
          <p className="text-sm tracking-nm uppercase text-center md:text-left mt-4">
            {t("home.aboutUs.title")}
          </p>
          <h1 className="lineSubtitle text-center md:text-start font-impact text-4xl md:text-5xl leading-[.92] uppercase mb-8 md:mb-1">
            {t("home.aboutUs.subtitle")}
          </h1>
          <p className="text-lg text-justify max-w-2xl mt-4">
            {t("home.aboutUs.paragraph1")}
          </p>
        </div>
        <div className="w-full text-center mt-4 text-base sm:px-0 md:w-2/5 md:text-start md:mt-0">
          <p className="text-center md:text-start text-xl">
            {t("home.aboutUs.paragraph2_start")}
            <strong className="text-blue-base">
              {t("home.aboutUs.paragraph2_strong")}
            </strong>
          </p>
          <Link
            className="group flex mt-5 md:mt-2 justify-center md:justify-start font-bold items-center text-base text-primary-purple cursor-pointer"
            to="/fundacion"
          >
            {t("home.aboutUs.button")}
            <img
              className="w-[15px] align-middle ml-[5px] relative transform transition-transform duration-300 group-hover:translate-x-1"
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
