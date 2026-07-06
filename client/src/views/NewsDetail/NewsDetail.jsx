import { useEffect, useMemo, useRef } from "react";
import BannerNews from "../../assets/images/views/imagesNews/banner-news.webp";
import OtherNews from "../../components/other-news/OtherNews";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BannerView from "../../components/Banner-views/BannerView";
import useNews from "./hooks/useNews";
import useBookDimensions from "./hooks/useBookDimensions";
import { useMetaTags } from "../../hooks/useMetaTags";
import BackButton from "./components/BackButton";
import ShareButton from "./components/ShareButton";
import BookCarousel from "./components/BookCarousel";

/**
 * Componente de detalle de noticias.
 * Muestra el contenido de una noticia con efecto de "pasar hoja" (BookCarousel,
 * basado en Framer Motion) y un botón de regreso al listado.
 * @returns {JSX.Element} Componente de detalle de noticias.
 */
const NewsDetail = () => {
  const location = useLocation();
  const initialNews = useMemo(() => {
    if (location.state?.news) return location.state.news;
    const slug = new URLSearchParams(location.search).get("slug");
    return slug ? { slug } : undefined;
  }, [location.state?.news, location.search]);
  const { t } = useTranslation();
  const contentRef = useRef(null);

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

  if (!news) {
    return <div className="p-10 text-2xl">{t("newsDetail.no_info")}</div>;
  }

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

      <section className="relative bg-[#F6F6F6] mb-5 grid grid-cols-1 xl:grid-cols-[8fr_2fr] 2xl:grid-cols-[7fr_3fr] gap-4 p-4 mt-6">
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

        {/* #content es el contenedor del libro */}
        <div
          id="content"
          ref={contentRef}
          className="relative rounded-2xl min-w-0"
          style={{
            filter: "drop-shadow(8px 8px 24px rgba(34,45,86,0.20))",
          }}
        >
          {/* Grid overlay sobre las páginas — pointer-events-none para no bloquear el flip */}
          <div
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
            <BookCarousel
              key={news.slug}
              content={news.newDetailContent.content ?? []}
              title={news.newDetailContent.title}
              newsLabel={t("newsDetail.news_label")}
              dimensions={bookDimensions}
            />
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
