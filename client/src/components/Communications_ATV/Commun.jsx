import React from "react";
import { useTranslation } from "react-i18next";
import "./Commun.css";
import imgBannerATV from "../../../public/img_DataAnalytics/banner-DataAnalytics.webp";
import CommunicationsTeam from "../../../public/img_Communications/communicationsTeam.webp";

function Commun() {
  const { t } = useTranslation();

  return (
    <div id="communications">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full">
          <img
            src={imgBannerATV}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
          <h1 className="absolute inset-0 flex items-center justify-center uppercase font-impact text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-banner">
            {t("communications_ATV.commun.title_banner")}
          </h1>
          <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">
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

      <div className="data_analytics">
        <div className="data_analytics--cnt">
          <div className="data_analytics--content">
            <div className="data_analytics--text">
              <p className="title">{t("communications_ATV.commun.our_model")}</p>
              <h4 className="lineSubtitle subtitle font-impact">{t("communications_ATV.commun.subtitle")}</h4>

              <p className="text-justify">
                {t("communications_ATV.commun.paragraph_1")}
                <br />
                <br />
                {t("communications_ATV.commun.paragraph_2")}
                <br />
                <br />
                {t("communications_ATV.commun.paragraph_3")}
                <br />
                <br />
                {t("communications_ATV.commun.paragraph_4")}
              </p>
            </div>
            <div className="data_analytics--image">
              <picture>
                <img src={CommunicationsTeam} alt={t("communications_ATV.commun.alt_image")} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commun;
