import "./NotFound.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <section
      id="not-found"
      className="grid justify-center items-center h-screen bg-cover text-center"
    >
      <div>
        <h1 id="errorNumber" className="font-bold block m-auto text-dark-blue">
          404
        </h1>
        <p className="text-5xl font-impact text-center text-dark-blue">
          {t("notFound.title")}
        </p>
        <p className="mt-1 text-2xl text-gray-500 font-medium text-center">
          <br />
          {t("notFound.message")}
        </p>
        <Link to="/">
          <button
            id="volver-inicio"
            className="group relative overflow-hidden w-full max-w-[200px] text-lg md:text-xl mt-5 p-3 border-2 rounded-3xl text-dark-blue font-bold shadow-2xl shadow-[#222D56] transform hover:scale-105 transition-all duration-500"
          >
            {t("notFound.button")}
            <div className="absolute inset-0 bg-[#222d562f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
