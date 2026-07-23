import "./News.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BannerNews from "../../assets/images/views/imagesNews/banner-news.webp";
import { useNavigate } from "react-router-dom";
import buildNewsArray, { filters } from "./newsArray";
import { useTranslation } from "react-i18next";
import BannerView from "../Banner-views/BannerView";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCalendarMinus } from "react-icons/fa6";
import {
  newsContainerVariants,
  newsCardVariants,
} from "../motion/constants/Animations";

function News() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleNews = buildNewsArray(t).filter(
    (n) => activeFilter === "all" || n.type === activeFilter,
  );

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

      <div className="flex gap-6 max-w-[80%] mx-auto pt-12">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`rounded-3xl border min-w-20 px-5 py-3 text-sm md:text-lg transition-all duration-500 ease-out ${
              activeFilter === f.id
                ? "border-dark-blue bg-dark-blue text-white shadow-lg shadow-dark-blue/20"
                : "cursor-pointer border-transparent bg-[#E6E7ED] text-dark-blue hover:scale-105 hover:bg-primary-yellow"
            }`}
          >
            {t(f.labelKey)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={activeFilter}
          variants={newsContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="noticias-content grid gap-20 max-w-[80%] py-12 mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch"
        >
          {visibleNews
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((news) => (
              <motion.div
                key={news.slug}
                variants={newsCardVariants}
                className="flex flex-col"
              >
                <img
                  className="mb-3 aspect-ratio rounded-lg"
                  src={news.img}
                  alt={news.alt}
                  loading="lazy"
                />
                <p className="flex items-center text-base md:text-lg font-impact text-primary-purple mb-2">
                  <FaRegCalendarMinus className="mr-1 w-7 h-7" />

                  {news.type === "news"
                    ? t("news.category")
                    : t("news.filters.articles")}
                </p>
                <p className="mb-4 text-left text-[2.5rem] font-impact text-blue-base leading-9 flex-grow">
                  {news.title}
                </p>
                <hr className="mb-3" />
                <div className="group flex">
                  <button
                    className="group flex items-center gap-2 text-xl md:text-2xl text-primary-purple cursor-pointer w-fit"
                    onClick={() =>
                      navigate("/news/detail", { state: { news } })
                    }
                  >
                    {t("news.read_more")}
                    <FaArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
        </motion.section>
      </AnimatePresence>
    </>
  );
}

export default News;
