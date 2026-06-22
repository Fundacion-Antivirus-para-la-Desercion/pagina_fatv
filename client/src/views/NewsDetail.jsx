import { useMemo, useEffect, useRef, forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Date from "../assets/Icons/date.svg";
import BannerNews from "../assets/images/views/imagesNews/banner-news.webp";
import Back from "../../src/assets/Icons/back.svg";
import OtherNews from "../components/other-news/OtherNews";
import { Link, useLocation } from "react-router-dom";
import buildNewsArray from "../components/News/newsArray";
import { useTranslation } from "react-i18next";
import BannerView from "../components/Banner-views/BannerView";

const ITEMS_PER_PAGE = 2;

/* react-pageflip requiere que cada página use forwardRef */
const BookPage = forwardRef(({ items, renderItem }, ref) => (
  <div
    ref={ref}
    className="bg-white h-full"
    style={{
      borderLeft: "3px solid rgba(34,45,86,0.12)",
      boxShadow: "inset -4px 0 12px rgba(34,45,86,0.06)",
      overflow: "hidden",
    }}
  >
    <div className="p-6 h-full" style={{ overflow: "hidden" }}>
      {items.map((content, index) => renderItem(content, index))}
    </div>
  </div>
));
BookPage.displayName = "BookPage";

function NewsDetail() {
  const location = useLocation();
  const initialNews = location.state?.news;
  const { t } = useTranslation();
  const bookRef = useRef(null);
  const wrapperRef = useRef(null);
  const [bookDims, setBookDims] = useState({ width: 420, height: 580 });

  const news = useMemo(() => {
    const slug = initialNews?.slug ?? null;
    if (!slug) return initialNews;
    const arr = buildNewsArray(t);
    return arr.find((n) => n.slug === slug) || initialNews;
  }, [initialNews, t]);

  /* Calcula dimensiones del libro según el ancho del contenedor */
  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const containerW = wrapperRef.current.offsetWidth;
      const isPortrait = containerW < 600;
      const pageW = isPortrait ? Math.min(containerW - 16, 380) : Math.min(Math.floor(containerW / 2) - 12, 480);
      const pageH = Math.max(560, Math.round(pageW * 1.55));
      setBookDims({ width: pageW, height: pageH });
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  if (!news) {
    return <div className="p-10 text-2xl">{t("newsDetail.no_info")}</div>;
  }

  const items = news.newDetailContent.content;

  /* Divide SIEMPRE en páginas — noticias cortas = 1 página, largas = varias */
  const pages = [];
  for (let i = 0; i < items.length; i += ITEMS_PER_PAGE) {
    pages.push(items.slice(i, i + ITEMS_PER_PAGE));
  }

  const isPortraitMode = bookDims.width < 400;

  const renderItem = (content, index) => {
    if (content.type === "parrafo") {
      return (
        <div key={index} className="mb-5">
          <p className="text-blue-base text-base text-justify leading-relaxed">
            {content.value}
          </p>
        </div>
      );
    } else if (content.type === "img") {
      return (
        <figure key={index} className="mb-5">
          <img
            src={content.value}
            alt=""
            className="w-full max-h-32 mx-auto object-cover rounded-xl"
          />
        </figure>
      );
    } else {
      return (
        <a
          key={index}
          href={content.url}
          className="block mb-5 text-primary-purple underline text-base"
        >
          {content.value}
        </a>
      );
    }
  };

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

      <section className="relative bg-[#F6F6F6] mb-5 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-4 p-4 mt-6">
        <div
          className="absolute inset-0 z-1"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FFFFFF 1px, transparent 1px),
              linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div id="content" className="relative p-4 border border-dark-blue rounded-2xl">
          <p className="flex text-base md:text-lg font-impact m-2 text-primary-purple">
            <img className="mr-1" src={Date} />
            {t("newsDetail.news_label")}
          </p>
          <h1 className="mb-4 text-left text-4xl md:text-5xl text-blue-base font-impact leading-10">
            {news.newDetailContent.title}
          </h1>

          <div className="flex flex-col items-center" ref={wrapperRef}>
              {/* Libro */}
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(8px 8px 24px rgba(34,45,86,0.22))",
                }}
              >
                {bookDims.width > 0 && (
                  <HTMLFlipBook
                    ref={bookRef}
                    width={bookDims.width}
                    height={bookDims.height}
                    size="fixed"
                    minWidth={200}
                    maxWidth={500}
                    minHeight={400}
                    maxHeight={800}
                    drawShadow={true}
                    flippingTime={700}
                    usePortrait={isPortraitMode}
                    startZIndex={0}
                    autoSize={false}
                    maxShadowOpacity={0.6}
                    showCover={false}
                    mobileScrollSupport={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                    style={{ margin: "0 auto" }}
                    className="flip-book"
                  >
                    {pages.map((pageItems, i) => (
                      <BookPage
                        key={i}
                        items={pageItems}
                        renderItem={renderItem}
                      />
                    ))}
                  </HTMLFlipBook>
                )}
              </div>
            </div>
        </div>

        <OtherNews className="relative" newSlug={news.slug} />

        <section className="relative">
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
              href={"http://www.facebook.com/share.php?u=" + window.location.href}
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
