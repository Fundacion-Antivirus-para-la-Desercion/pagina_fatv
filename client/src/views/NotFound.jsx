import "./NotFound.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Javi from "../assets/images/views/javi/javi-senala.webp";

function NotFound() {
  const { t } = useTranslation();
  return (
    <section
      id="not-found"
      className="flex justify-center items-center h-screen bg-cover px-6"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="text-center">
          <h1
            id="errorNumber"
            className="text-9xl md:text-[12rem] font-bold block m-auto text-dark-blue"
          >
            404
          </h1>
          <p className="text-3xl md:text-6xl font-impact text-center text-dark-blue">
            {t("notFound.title")}
          </p>
          <p className="text-lg md:text-2xl mb-5 text-gray-500 font-medium text-center">
            <br />
            {t("notFound.message")}
          </p>
          <Link to="/">
            <button
              id="volver-inicio"
              className="group relative overflow-hidden w-full max-w-[200px] text-base md:text-xl p-3 border-2 rounded-3xl text-dark-blue font-bold shadow-2xl shadow-[#222D56] transform hover:scale-105 transition-all duration-500"
            >
              {t("notFound.button")}
              <div className="absolute inset-0 bg-[#222d562f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </Link>
        </div>

        <img
          src={Javi}
          alt="Javi señalando el error 404"
          className="w-32 md:w-56 lg:w-64"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default NotFound;
