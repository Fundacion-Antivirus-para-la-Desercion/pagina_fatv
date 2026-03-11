import React, { useState } from "react";
import "./News.css";
import BannerNews from "../../assets/images/views/imagesNews/banner-news.webp";
import Date from "../../../src/assets/Icons/date.svg";
import Arrow from "../../../src/assets/Icons/arrow.svg";
import { useNavigate } from "react-router-dom";
import buildNewsArray from "./newsArray";
import { useTranslation } from "react-i18next";
import BannerView from "../Banner-views/BannerView";

function News() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            image: BannerNews,
            keyAlt: "studentRetentionManagement.alt_img_banner",
            keyH1: "studentRetentionManagement.title",
          }}
        />
      </div>

      <section className="noticias-content grid gap-12 p-8 md:p-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {buildNewsArray(t).map((news, idx) => (
          <div key={idx}>
            <img className="mb-3 aspect-ratio" src={news.img} alt={news.alt} />
            <p className="flex tracking-[0.3rem] font-light text-blue-base">
              <img className="mr-1" src={Date} />
              {t("news.category")}
            </p>
            <p className="mb-4 text-left text-[2.5rem] font-impact text-blue-base max-md:text-3xl leading-9">
              {news.title}
            </p>
            <hr className="mb-3" />
            <a
              className="group flex items-center text-2xl text-primary-purple cursor-pointer"
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
