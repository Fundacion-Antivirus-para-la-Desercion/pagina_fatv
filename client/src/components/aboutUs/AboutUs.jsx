import LocalizedLink from "../routing/LocalizedLink";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="text-blue-base m-8 md:p-12 lg:p-20">
      <div className="grid grid-cols-1 xl:grid-cols-[55%_45%] items-center gap-5 md:justify-between lg:gap-x-12">
        <div className="mb-5">
          <span className="text-base md:text-lg text-primary-purple font-impact uppercase text-center md:text-left mt-4">
            {t("home.aboutUs.title")}
          </span>
          <h2 className="lineSubtitle text-center md:text-start font-impact text-3xl md:text-5xl leading-[.92] uppercase mb-8 md:mb-1">
            {t("home.aboutUs.subtitle")}
          </h2>
          <p className="text-lg md:text-xl text-justify max-w-2xl mt-4">
            {t("home.aboutUs.paragraph1")}
          </p>
        </div>
        <div className="">
          <p className="text-lg md:text-xl text-justify md:text-start">
            {t("home.aboutUs.paragraph2_start")}
            <strong className="text-blue-base">
              {t("home.aboutUs.paragraph2_strong")}
            </strong>
          </p>
          <LocalizedLink
            className="text-base md:text-lg group flex mt-5 md:mt-2 justify-center md:justify-start font-bold items-center text-primary-purple cursor-pointer"
            routeKey="foundation"
          >
            {t("home.aboutUs.button")}
            <FaArrowRight
              className="ml-[5px] relative transform transition-transform duration-300 group-hover:translate-x-1"
              size={20}
              aria-label={t("home.aboutUs.alt_arrow")}
            />
          </LocalizedLink>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
