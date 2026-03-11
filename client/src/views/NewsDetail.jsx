import { useState, useMemo } from "react";
import Date from "../assets/Icons/date.svg";
import BannerNews from "../assets/images/views/imagesNews/banner-news.webp";
import Back from "../../src/assets/Icons/back.svg";
import OtherNews from "../components/other-news/OtherNews";
import { Link, useLocation } from "react-router-dom";
import buildNewsArray from "../components/News/newsArray";

import { useTranslation } from "react-i18next";
import BannerView from "../components/Banner-views/BannerView";

function NewsDetail() {
  const location = useLocation();
  const initialNews = location.state?.news;
  const { t } = useTranslation();

  // Recompute the news object from the translation-aware factory so
  // the strings update when the language changes. Use the id from the
  // location state (or fall back to the id property on the object).
  const news = useMemo(() => {
    const id = initialNews?.id ?? initialNews?.newsId ?? null;
    if (id === null || id === undefined) return initialNews;
    const arr = buildNewsArray(t);
    // buildNewsArray typically uses numeric indexes as ids in other components
    // but sometimes `news.id` was set to idx. Try numeric and string keys.
    return (
      arr.find((n) => n.id === id || String(n.id) === String(id)) || initialNews
    );
  }, [initialNews, t]);

  if (!news) {
    return <div className="p-10 text-2xl">{t("newsDetail.no_info")}</div>;
  }

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

      <section className="mb-5 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-4 relative p-4 mt-6">
        <div id="content" className="p-4 border border-dark-blue rounded-2xl">
          <p className="flex tracking-[0.3rem] font-light m-2 text-blue-base">
            <img className="mr-1" src={Date} />
            {t("newsDetail.news_label")}
          </p>
          <h1 className="mb-4 text-left text-4xl md:text-5xl text-blue-base  font-impact leading-10">
            {news.newDetailContent.title}
          </h1>
          {news.newDetailContent.content.map((content, index) => {
            if (content.type === "parrafo") {
              return (
                <p
                  key={index}
                  className="text-blue-base text-lg mb-6 mt-5 text-justify"
                >
                  {content.value}
                </p>
              );
            } else if (content.type === "img") {
              return (
                <img
                  key={index}
                  src={content.value}
                  alt=""
                  className="w-[600px] h-[400px] mx-auto object-contain rounded-lg mb-2"
                />
              );
            } else {
              return <a href={content.url}>{content.value}</a>;
            }
          })}
        </div>

        <OtherNews newId={news.id} />

        <section>
          <div className="flex items-center">
            <Link
              to="/News"
              className="group flex items-center text-xl text-primary-purple cursor-pointer font-bold mr-7"
            >
              <img
                className="ml-3 relative transform transition-transform duration-300 group-hover:-translate-x-1 mr-1"
                src={Back}
                alt={t("newsDetail.alt_back")}
              />
              {t("newsDetail.return_to_news")}
            </Link>

            <a
              href={
                "http://www.facebook.com/share.php?u=" + window.location.href
              }
              target="_blank"
              className="group flex items-center text-xl text-primary-purple cursor-pointer font-bold"
            >
              <img
                className="ml-3 transform transition-transform duration-300 group-hover:-translate-x-1 mr-1"
                src="https://www.fundacionantivirusparaladesercion.org/assets/img/icons/share.svg"
              />
              {t("newsDetail.share")}
            </a>
          </div>
        </section>
      </section>
    </>
  );
}

export default NewsDetail;
