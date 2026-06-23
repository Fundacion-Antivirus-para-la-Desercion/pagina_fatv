import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import BannerNews from "../../assets/images/views/imagesNews/banner-news.webp";
import OtherNews from "../../components/other-news/OtherNews";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BannerView from "../../components/Banner-views/BannerView";
import useNews from "./hooks/useNews";
import useBookDimensions from "./hooks/useBookDimensions";
import BookCoverHeader from "./components/BookCoverHeader";
import BackButton from "./components/BackButton";
import ShareButton from "./components/ShareButton";
import NewsContentRenderer from "./components/NewsContentRenderer";
import BookPage from "./components/BookPage";
import createPages from "./utils/createPages.js";

/**
 * Componente de detalle de noticias.
 * Este componente muestra el detalle de una noticia específica, incluyendo su contenido y un botón de regreso a la página de noticias.
 * @returns {JSX.Element} Componente de detalle de noticias.
 */
const NewsDetail = () => {
  const ITEMS_PER_PAGE = 2;
  const location = useLocation();
  const initialNews = location.state?.news;
  const { t } = useTranslation();
  const contentRef = useRef(null);
  const bookRef = useRef(null);

  const news = useNews(initialNews, t);

  const bookDimensions = useBookDimensions(contentRef);

  useEffect(() => {
    if (!news?.slug) return;
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [news?.slug]);

  if (!news) {
    return <div className="p-10 text-2xl">{t("newsDetail.no_info")}</div>;
  }

  const pages = createPages(news.newDetailContent.content, ITEMS_PER_PAGE);

  const coverHeader = (
    <BookCoverHeader
      title={news.newDetailContent.title}
      newsLabel={t("newsDetail.news_label")}
    />
  );

  const renderItem = (content, index) => (
    <NewsContentRenderer content={content} index={index} />
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
          className="relative rounded-2xl"
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
          {bookDimensions.width > 0 && (
            <HTMLFlipBook
              key={news.slug}
              ref={bookRef}
              width={bookDimensions.width}
              height={bookDimensions.height}
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
              className="flip-book mx-auto "
            >
              <BookPage
                id="cover-page"
                key={0}
                items={pages[0]}
                header={coverHeader}
                renderItem={renderItem}
                className="p-12"
              />

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
            <BackButton
              label={t("newsDetail.return_to_news")}
              alt={t("newsDetail.alt_back")}
            />

            <ShareButton label={t("newsDetail.share")} />
          </div>
        </section>
      </section>
    </>
  );
};

export default NewsDetail;
