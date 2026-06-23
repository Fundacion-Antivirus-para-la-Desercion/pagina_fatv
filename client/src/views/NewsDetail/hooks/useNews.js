import { useMemo } from "react";
import buildNewsArray from "../../../components/News/newsArray";

/**
 * Hook para obtener la noticia actual basada en la noticia inicial y la traducción.
 * - Si la noticia inicial tiene un slug, busca la noticia correspondiente en el array de noticias traducidas
 * - Si no tiene slug, devuelve la noticia inicial
 * @param {{ slug?: string }} initialNews La noticia inicial
 * @param {Function} t Función de traducción
 * @returns {{ slug?: string }} La noticia actual
 */
const useNews = (initialNews, t) => {
  const news = useMemo(() => {
    const slug = initialNews?.slug;

    if (!slug) return initialNews;

    const newsList = buildNewsArray(t);

    return newsList.find((news) => news.slug === slug) || initialNews;
  }, [initialNews, t]);

  return news;
};

export default useNews;
