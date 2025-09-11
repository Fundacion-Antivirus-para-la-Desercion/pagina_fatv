import React from "react";
import { useTranslation } from "react-i18next";
import imgBanner from "../../public/img_viewQHav/slider-servicios.webp";
import services from "../../public/services_imgs/services-image-3.jpg";
import { FaLocationDot } from "react-icons/fa6";

function Consultorias() {
  const { t } = useTranslation();

  return (
    <div className="lg:pt-[145px]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-60 sm:h-80 md:h-96">
          <img
            src={imgBanner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
            {t("consultorias.title")}
          </h1>
          <div className="absolute bottom-4 left-20 flex space-x-2 sm:space-x-4">
            <a
              href="https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="box-icon"
            >
              <box-icon
                name="facebook-circle"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </a>
            <a
              href="https://www.instagram.com/somosantivirus/"
              target="_blank"
              rel="noopener noreferrer"
              className="box-icon"
            >
              <box-icon
                name="instagram-alt"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </a>
            <a
              href="https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w"
              target="_blank"
              rel="noopener noreferrer"
              className="box-icon"
            >
              <box-icon name="youtube" type="logo" color="#ffffff"></box-icon>
            </a>
            <a
              href="https://www.tiktok.com/@somosantivirus"
              target="_blank"
              rel="noopener noreferrer"
              className="box-icon"
            >
              <box-icon name="tiktok" type="logo" color="#ffffff"></box-icon>
            </a>
            <a
              href="https://www.linkedin.com/company/antivirus-desercion/"
              target="_blank"
              rel="noopener noreferrer"
              className="box-icon"
            >
              <box-icon
                name="linkedin-square"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20 flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="w-full lg:w-450 max-md:p-6 max-lg:p-6 max-sm:text-center">
          <p className="tracking-nm text-cc">
            {t("consultorias.services_title")}
          </p>
          <h1 className="font-anton text-cc text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2">
            {t("consultorias.main_consulting_title")}
          </h1>
          <ul className="text-cc list-disc text-xl mb-10">
            <li>{t("consultorias.universities")}</li>
            <li>{t("consultorias.bootcamps")}</li>
            <li>{t("consultorias.schools")}</li>
            <li>{t("consultorias.scholarship_programs")}</li>
          </ul>
          <p className="text-cc text-xl">{t("consultorias.description")}</p>
        </div>
        <div className="relative">
          <img src={services} className="w-full lg:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Consultorias;
