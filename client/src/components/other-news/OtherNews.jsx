import { useMemo } from "react";
import buildNewsArray from "../News/newsArray.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function OtherNews({ newSlug }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const relatedNews = useMemo(() => {
    const arr = buildNewsArray(t);
    const currentIdx = arr.findIndex((n) => n.slug === newSlug);
    const after = arr.filter((_, i) => i > currentIdx).slice(0, 4);
    if (after.length < 4) {
      const before = arr
        .filter((_, i) => i < currentIdx)
        .slice(0, 4 - after.length);
      return [...after, ...before];
    }
    return after;
  }, [newSlug, t]);

  return (
    <div className="lg:col-start-2">
      <div className="shadow-xl rounded-2xl sticky top-4 border border-dark-blue p-4">
        <h3 className="news-detail mb-4 text-center md:text-left text-3xl  font-impact text-blue-base max-md:text-2xl leading-8">
          {t("otherNews.title")}
        </h3>
        <ul className="p-4">
          {relatedNews.map((news) => (
            <li key={news.slug} className="mb-2">
              <button
                className="w-full text-left cursor-pointer"
                onClick={() => navigate("/news/detail", { state: { news } })}
              >
                <section className="grid grid-cols-[4fr_6fr] gap-4 items-center">
                  <div>
                    <img
                      src={news.img}
                      alt={news.title}
                      className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-blue-base text-base font-bold mb-1 leading-5">
                      {news.title}
                    </h4>
                    <span className="text-blue-600 hover:text-blue-800 text-sm">
                      {t("otherNews.read_more")}
                    </span>
                  </div>
                </section>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OtherNews;
