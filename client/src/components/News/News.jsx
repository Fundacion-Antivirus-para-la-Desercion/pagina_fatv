import React, { useState } from "react";
import "./News.css";
import imgBannerATV from "../../../public/img_DataAnalytics/banner-DataAnalytics.webp";
import Date from "../../../src/assets/Icons/date.svg";
import Arrow from "../../../src/assets/Icons/arrow.svg";
import { useNavigate } from "react-router-dom";
import buildNewsArray from "./newsArray";

import { useTranslation } from "react-i18next";

function News() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [socialMedia] = useState([
    {
      href: "https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d",
      name: "facebook-circle",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.instagram.com/somosantivirus/",
      name: "instagram-alt",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w",
      name: "youtube",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.tiktok.com/@somosantivirus",
      name: "tiktok",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.linkedin.com/company/antivirus-desercion/",
      name: "linkedin-square",
      type: "logo",
      color: "#ffffff",
    },
  ]);

  return (
    <>
      <div className="lg:pt-[145px]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full h-60 sm:h-80 md:h-96">
            <img
              src={imgBannerATV}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
            <h1 className="absolute inset-0 flex items-center justify-center uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-banner">
              {t("news.title")}
            </h1>
            <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon"
                >
                  <box-icon
                    name={social.name}
                    type={social.type}
                    color={social.color}
                  ></box-icon>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="noticias-content grid gap-12 p-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {buildNewsArray(t).map((news, idx) => (
          <div key={idx}>
            <img className="mb-3 aspect-ratio" src={news.img} alt={news.alt} />
            <p className="flex tracking-[0.3rem] font-light text-[#33526d]">
              <img className="mr-1" src={Date} />
              {t("news.category")}
            </p>
            <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
              {news.title}
            </p>
            <hr className="mb-3" />
            <a
              className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer"
              onClick={() => {
                news.id = idx;
                navigate("/news/detail", { state: { news } });
              }}
            >
              {t("news.read_more")}
              <img
                className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
                src={Arrow}
                alt={t("news.see_more_alt")}
              />
            </a>
          </div>
        ))}
      </section>
    </>
  );
}

export default News;
