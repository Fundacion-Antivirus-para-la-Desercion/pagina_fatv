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
        <h1 id="errorNumber" className="font-bold block m-auto">
          404
        </h1>
        <p className="text-4xl font-semibold text-center">
          {t("NotFound.title")}
        </p>
        <p className="mt-1 text-2xl text-gray-500 font-medium text-center">
          <br />
          {t("NotFound.message")}
        </p>
        <Link to="/">
          <button
            id="volver-inicio"
            className="text-md mt-3 p-3 rounded-3xl border-2"
          >
            {t("NotFound.button")}
          </button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
