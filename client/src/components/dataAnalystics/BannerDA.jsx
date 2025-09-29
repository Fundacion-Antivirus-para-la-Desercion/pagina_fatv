import "./BannerDA.css";
import image from "/img_DataAnalytics/banner-DataAnalytics.webp";
import { useTranslation } from "react-i18next";

function BannerDA() {
  const { t } = useTranslation();
  return (
    <div className="relative w-full">
      <img
        src={image}
        alt={t("dataAnalytics.banner.alt_banner")}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
      <h1 className="absolute inset-0 flex items-center justify-center text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-banner">
        {t("dataAnalytics.banner.title")}
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
          <box-icon name="instagram-alt" type="logo" color="#ffffff"></box-icon>
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
  );
}

export default BannerDA;
