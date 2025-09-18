import buildNewsArray from "../News/newsArray.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function OtherNews({ newId }) {
  const navigate = useNavigate(); // <-- Hook para navegar

  const { t } = useTranslation();

  const getRelatedNews = () => {
    const arr = buildNewsArray(t);
    return arr.filter((news) => news.id !== newId).slice(0, 4);
  };

  const relatedNews = getRelatedNews();

  return (
    <div id="sidebar" className="lg:col-start-2">
      <div className="shadow-xl rounded-2xl sticky top-4 border border-[#222D56] p-4">
        <h3 className="news-detail mb-4 text-left text-3xl text-title font-extrabold max-md:text-2xl leading-8">
          {t("otherNews.title")}
        </h3>
        <ul className="p-4">
          {relatedNews.map((news) => (
            <li key={news.id} className="mb-2">
              <a
                className="cursor-pointer"
                onClick={() => {
                  news.id = news.id;
                  navigate("/news/detail", { state: { news } });
                }}
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
                    <h4 className="text-base font-semibold mb-1 leading-5">
                      {news.title}
                    </h4>
                    <a
                      href={news.link}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      {t("otherNews.read_more")}
                    </a>
                  </div>
                </section>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OtherNews;
