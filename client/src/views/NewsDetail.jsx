import { useMemo, useEffect, useRef, forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import BannerNews from "../assets/images/views/imagesNews/banner-news.webp";
import Back from "../../src/assets/Icons/back.svg";
import OtherNews from "../components/other-news/OtherNews";
import { Link, useLocation } from "react-router-dom";
import buildNewsArray from "../components/News/newsArray";
import { useTranslation } from "react-i18next";
import BannerView from "../components/Banner-views/BannerView";
import { FaRegCalendarMinus } from "react-icons/fa6";


const ITEMS_PER_PAGE = 2;

/* Primera página: lleva el encabezado (fecha + título) + primeros ítems */
const BookCoverPage = forwardRef(({ items, header, renderItem }, ref) => (
  <div
    ref={ref}
    className="bg-white h-full p-1 md:p-2"
    style={{
      borderRight: "2px solid rgba(34,45,86,0.10)",
      overflow: "hidden",
    }}
  >
    <div className="p-6 h-full" style={{ overflow: "hidden" }}>
      {header}
      {items.map((content, index) => renderItem(content, index))}
    </div>
  </div>
));
BookCoverPage.displayName = "BookCoverPage";

/* Páginas interiores */
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
  const contentRef = useRef(null);
  const [bookDims, setBookDims] = useState({ width: 0, height: 580 });

  const news = useMemo(() => {
    const slug = initialNews?.slug ?? null;
    if (!slug) return initialNews;
    const arr = buildNewsArray(t);
    return arr.find((n) => n.slug === slug) || initialNews;
  }, [initialNews, t]);

  /* Dimensiones basadas en #content */
  useEffect(() => {
    const update = () => {
      if (!contentRef.current) return;
      const containerW = contentRef.current.offsetWidth;
      const isPortrait = containerW < 600;
      const pageW = isPortrait ? containerW : Math.floor(containerW / 2);
      const pageH = Math.max(560, Math.round(pageW * 1.55));
      setBookDims({ width: pageW, height: pageH });
    };
    update();
    const ro = new ResizeObserver(update);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  /* Scroll al inicio de #content cada vez que cambia la noticia */
  useEffect(() => {
    if (!news?.slug) return;
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [news?.slug]);

  if (!news) {
    return <div className="p-10 text-2xl">{t("newsDetail.no_info")}</div>;
  }

  const items = news.newDetailContent.content;

  /* Divide en páginas */
  const pages = [];
  for (let i = 0; i < items.length; i += ITEMS_PER_PAGE) {
    pages.push(items.slice(i, i + ITEMS_PER_PAGE));
  }
  /* Mínimo 2 páginas para mostrar el libro abierto */
  if (pages.length < 2) pages.push([]);
  /* Número par de páginas → efecto flip estándar en todas las noticias */
  if (pages.length % 2 !== 0) pages.push([]);

  const renderItem = (content, index) => {
    if (content.type === "parrafo") {
      return (
        <div key={index} className="mb-4">
          <p className="text-blue-base text-base md:text-lg text-justify leading-relaxed">
            {content.value}
          </p>
        </div>
      );
    } else if (content.type === "img") {
      return (
        <figure key={index} className="mb-4">
          <img
            src={content.value}
            alt=""
            className="w-[90%] max-h-[600px] mx-auto object-cover rounded-xl"
          />
        </figure>
      );
    } else {
      return (
        <a
          key={index}
          href={content.url}
          className="block mb-4 text-primary-purple underline text-sm"
        >
          {content.value}
        </a>
      );
    }
  };

  const coverHeader = (
    <div className="mb-4">
      <div className="flex  mb-2 text-primary-purple">
        <FaRegCalendarMinus className="mr-1 w-6 h-6" />
        <span className="font-impact text-lg">{t("newsDetail.news_label")}</span>
      </div>
      <h2 className="text-2xl md:text-5xl font-impact leading-tight text-blue-base mb-3">
        {news.newDetailContent.title}
      </h2>
      <div
        className="h-[2px] rounded-full mb-4"
        style={{ background: "linear-gradient(to right, #222D56, #7C76B5)" }}
      />
    </div>
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

      <section className="relative bg-[#F6F6F6] mb-5 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-4 p-4 mt-6">
        <div
          id="grid-overlay"
          className="absolute inset-0 z-1"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FFFFFF 1px, transparent 1px),
              linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* #content es ahora el contenedor del libro */}
        <div
          id="content"
          ref={contentRef}
          className="relative rounded-2xl overflow-hidden"
          style={{ filter: "drop-shadow(8px 8px 24px rgba(34,45,86,0.20))" }}
        >
          {/* Grid overlay sobre las páginas del libro — pointer-events-none para no bloquear el flip */}
          <div
            id="grid-overlay"
            className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(34,45,86,0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(34,45,86,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          {bookDims.width > 0 && (
            <HTMLFlipBook
              key={news.slug}
              ref={bookRef}
              width={bookDims.width}
              height={bookDims.height}
              size="fixed"
              drawShadow={true}
              flippingTime={700}
              usePortrait={false}
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
              {/* Primera página: encabezado + primeros ítems */}
              <BookCoverPage
                key={0}
                items={pages[0] ?? []}
                header={coverHeader}
                renderItem={renderItem}
              />
              {/* Páginas restantes */}
              {pages.slice(1).map((pageItems, i) => (
                <BookPage
                  key={i + 1}
                  items={pageItems}
                  renderItem={renderItem}
                />
              ))}
            </HTMLFlipBook>
          )}
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
