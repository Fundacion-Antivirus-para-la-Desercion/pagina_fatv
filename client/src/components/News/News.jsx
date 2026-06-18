import React, { useState } from "react";
import "./News.css";
import BannerNews from "../../assets/images/views/imagesNews/banner-news.webp";
import Date from "../../../src/assets/Icons/date.svg";
import { useNavigate } from "react-router-dom";
import buildNewsArray from "./newsArray";
import { useTranslation } from "react-i18next";
import BannerView from "../Banner-views/BannerView";
import { FaArrowRight } from "react-icons/fa";

function News() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            image: BannerNews,
            keyAlt: "news.banner.alt",
            keyH1: "news.banner.h1",
          }}
        />
      </div>

      <section className="noticias-content grid gap-12 p-8 md:p-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {buildNewsArray(t).map((news) => (
          <div key={news.slug} className="flex flex-col">
            <img className="mb-3 aspect-ratio" src={news.img} alt={news.alt} />
            <p className="flex text-base md:text-lg font-impact text-primary-purple mb-2">
              <img className="mr-1" src={Date} />
              {t("news.category")}
            </p>
            <p className="mb-4 text-left text-[2.5rem] font-impact text-blue-base max-md:text-3xl leading-9 flex-grow">
              {news.title}
            </p>
            <hr className="mb-3" />
            <div className="groupflex">
              <button
                className="group flex items-center gap-2 text-xl md:text-2xl text-primary-purple cursor-pointer w-fit"
                onClick={() => navigate("/news/detail", { state: { news } })}
              >
                {t("news.read_more")}
                <FaArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default News;
