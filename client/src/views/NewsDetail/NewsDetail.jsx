import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PageFlip } from "page-flip";
import BannerNews from "../../assets/images/views/imagesNews/banner-news.webp";
import OtherNews from "../../components/other-news/OtherNews";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BannerView from "../../components/Banner-views/BannerView";
import useNews from "./hooks/useNews";
import useBookDimensions from "./hooks/useBookDimensions";
import { useMetaTags } from "../../hooks/useMetaTags";
import BookCoverHeader from "./components/BookCoverHeader";
import BackButton from "./components/BackButton";
import ShareButton from "./components/ShareButton";
import NewsContentRenderer from "./components/NewsContentRenderer";
import BookPage from "./components/BookPage";
import MobileNewsReader from "./components/MobileNewsReader";
import createPages from "./utils/createPages.js";

/**
 * Componente de detalle de noticias.
 * Este componente muestra el detalle de una noticia específica, incluyendo su contenido y un botón de regreso a la página de noticias.
 * @returns {JSX.Element} Componente de detalle de noticias.
 */
const NewsDetail = () => {
  const DEBUG_NEWS_DETAIL =
    import.meta.env.DEV && import.meta.env.VITE_DEBUG_NEWS_DETAIL === "true";
  const location = useLocation();
  const initialNews = useMemo(() => {
    if (location.state?.news) return location.state.news;
    const slug = new URLSearchParams(location.search).get("slug");
    return slug ? { slug } : undefined;
  }, [location.state?.news, location.search]);
  const { t } = useTranslation();
  const contentRef = useRef(null);
  const pageFlipRef = useRef(null);
  const pageFlipHostRef = useRef(null);
  const pageSourceRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookReady, setIsBookReady] = useState(false);

  const news = useNews(initialNews, t);

  useMetaTags({
    title: news?.newDetailContent?.title || "Antivirus para la Deserción",
    description:
      news?.newDetailContent?.content?.[0]?.value?.substring(0, 160) ||
      "Noticias sobre deserción universitaria",
    image: news?.img || "",
    url: `${typeof window !== "undefined" ? window.location.origin : ""}/news/detail?slug=${news?.slug || ""}`,
  });

  const bookDimensions = useBookDimensions(contentRef);
  useEffect(() => {
    if (!news?.slug) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [news?.slug]);

  const pages = useMemo(
    () => {
      const content = news?.newDetailContent?.content ?? [];
      return createPages(content, {
        pageWidth: bookDimensions.width,
        usableHeight: bookDimensions.usableHeight,
        firstPageUsableHeight: bookDimensions.firstPageUsableHeight,
        safetyMargin: bookDimensions.safetyMargin,
        debug: DEBUG_NEWS_DETAIL,
      });
    },
    [
      news?.newDetailContent?.content,
      bookDimensions.width,
      bookDimensions.usableHeight,
      bookDimensions.firstPageUsableHeight,
      bookDimensions.safetyMargin,
      DEBUG_NEWS_DETAIL,
    ]
  );
  const totalPages = pages.length;
  const contentPageCount = pages.filter((p) => p.length > 0).length;
  const isPortraitMode = bookDimensions.isPortrait;
  const lastNavigablePage = isPortraitMode
    ? Math.max(0, totalPages - 1)
    : Math.max(0, totalPages - 2);
  const clampedCurrentPage = Math.min(currentPage, lastNavigablePage);

  const destroyPageFlip = useCallback(() => {
    if (!pageFlipRef.current) return;
    pageFlipRef.current.destroy();
    pageFlipRef.current = null;
  }, []);

  const pageFlipSettings = useMemo(
    () => ({
      width: bookDimensions.width,
      height: bookDimensions.height,
      size: "fixed",
      drawShadow: true,
      flippingTime: 700,
      usePortrait: isPortraitMode,
      startZIndex: 0,
      autoSize: true,
      maxShadowOpacity: 0.45,
      showCover: false,
      mobileScrollSupport: false,
      clickEventForward: true,
      useMouseEvents: !isPortraitMode,
      swipeDistance: isPortraitMode ? 90 : 30,
      showPageCorners: !isPortraitMode,
      disableFlipByClick: isPortraitMode,
    }),
    [bookDimensions.width, bookDimensions.height, isPortraitMode]
  );

  const handleFlip = useCallback((event) => {
    const pageIndex = Number(event?.data);
    if (Number.isFinite(pageIndex)) {
      setCurrentPage(Math.max(0, pageIndex));
    }
  }, []);

  useEffect(() => {
    if (isPortraitMode) {
      // En mobile, no inicializar PageFlip — usar MobileNewsReader en su lugar
      setIsBookReady(false);
      return;
    }

    const host = pageFlipHostRef.current;
    const pageSource = pageSourceRef.current;

    if (
      !host ||
      !pageSource ||
      bookDimensions.width <= 0 ||
      bookDimensions.height <= 0
    ) {
      setIsBookReady(false);
      return;
    }

    const pageNodes = Array.from(pageSource.children)
      .map((node) => node.cloneNode(true))
      .filter((node) => node instanceof HTMLElement);

    if (pageNodes.length === 0) {
      setIsBookReady(false);
      return;
    }

    destroyPageFlip();
    setIsBookReady(false);

    const pageFlip = new PageFlip(host, pageFlipSettings);
    pageFlip.loadFromHTML(pageNodes);
    pageFlipRef.current = pageFlip;
    pageFlip.on("flip", handleFlip);
    setCurrentPage(0);
    setIsBookReady(true);

    return () => {
      if (pageFlipRef.current === pageFlip) {
        destroyPageFlip();
      } else {
        pageFlip.destroy();
      }
      setIsBookReady(false);
    };
  }, [
    news?.slug,
    pages,
    bookDimensions.width,
    bookDimensions.height,
    pageFlipSettings,
    handleFlip,
    destroyPageFlip,
    isPortraitMode,
  ]);

  useEffect(() => () => destroyPageFlip(), [destroyPageFlip]);

  const handlePrevPage = () => {
    pageFlipRef.current?.flipPrev();
  };

  const handleNextPage = () => {
    pageFlipRef.current?.flipNext();
  };

  const contentSpreads = Math.ceil(contentPageCount / 2);
  const currentSpread = Math.floor(clampedCurrentPage / 2) + 1;
  const paginationLabel = `${currentSpread} / ${contentSpreads}`;

  useEffect(() => {
    setCurrentPage(0);
  }, [news?.slug, totalPages, isPortraitMode]);

  useEffect(() => {
    if (!DEBUG_NEWS_DETAIL || !news) return;

    console.groupCollapsed("[NewsDetail] page distribution");
    console.log("dimensions:", bookDimensions);
    console.log(
      "pages:",
      pages.map((page, index) => ({
        page: index + 1,
        items: page.length,
        paragraphs: page.filter((item) => item.type === "parrafo").length,
        images: page.filter((item) => item.type === "img").length,
      }))
    );
    console.groupEnd();
  }, [DEBUG_NEWS_DETAIL, news, bookDimensions, pages]);

  if (!news) {
    return <div className="p-10 text-2xl">{t("newsDetail.no_info")}</div>;
  }

  const coverHeader = (
    <BookCoverHeader
      title={news.newDetailContent.title}
      newsLabel={t("newsDetail.news_label")}
    />
  );

  const renderItem = (content, index) => (
    <NewsContentRenderer
      key={`${content?.type ?? "item"}-${index}`}
      content={content}
      index={index}
    />
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
          style={{
            filter: "drop-shadow(8px 8px 24px rgba(34,45,86,0.20))",
            ...(isPortraitMode && bookDimensions.height > 0
              ? { height: bookDimensions.height }
              : {}),
          }}
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
            <>
              {isPortraitMode ? (
                // Mobile: usar Framer Motion reader
                <MobileNewsReader
                  key={news.slug}
                  pages={pages}
                  totalPages={contentPageCount}
                  coverHeader={coverHeader}
                  renderItem={renderItem}
                />
              ) : (
                // Desktop: usar PageFlip
                <>
                  <div key={news.slug} ref={pageFlipHostRef} className="mx-auto" />
                  <div
                    ref={pageSourceRef}
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 opacity-0"
                  >
                    <BookPage
                      id="cover-page"
                      key={0}
                      items={pages[0]}
                      header={coverHeader}
                      renderItem={renderItem}
                      pageSide="left"
                    />

                    {pages.slice(1).map((pageItems, i) => (
                      <BookPage
                        key={i + 1}
                        items={pageItems}
                        renderItem={renderItem}
                        pageSide={(i + 1) % 2 === 0 ? "left" : "right"}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
          {!isPortraitMode && (
            <div className="absolute bottom-4 left-0 right-0 z-30 flex flex-col items-center gap-2 pointer-events-auto">
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevPage}
                  disabled={clampedCurrentPage <= 0 || !isBookReady}
                  className="rounded-full border border-blue-base px-4 py-2 text-sm font-semibold text-blue-base transition disabled:cursor-not-allowed disabled:opacity-40 active:scale-95"
                >
                  Anterior
                </button>

                <span className="min-w-24 text-center text-sm font-semibold text-blue-base">
                  {paginationLabel}
                </span>

                <button
                  type="button"
                  onClick={handleNextPage}
                  disabled={clampedCurrentPage >= lastNavigablePage || !isBookReady}
                  className="rounded-full border border-blue-base px-4 py-2 text-sm font-semibold text-blue-base transition disabled:cursor-not-allowed disabled:opacity-40 active:scale-95"
                >
                  Siguiente
                </button>
              </div>

              <span className="text-center text-xs text-gray-400">
                Desliza para navegar
              </span>
            </div>
          )}
        </div>

        <OtherNews className="relative" newSlug={news.slug} />

        <section className="relative">
          <div className="flex items-center">
            <BackButton
              label={t("newsDetail.return_to_news")}
              alt={t("newsDetail.alt_back")}
            />

            <ShareButton label={t("newsDetail.share")} news={news} />
          </div>
        </section>
      </section>
    </>
  );
};

export default NewsDetail;
