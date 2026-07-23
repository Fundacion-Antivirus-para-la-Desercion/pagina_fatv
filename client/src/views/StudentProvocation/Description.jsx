import Collage from "../../assets/images/views/proVocacion/collage-provocacion.webp";
import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();
  return (
    <section className="p-5 flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-5">
      <div>
        <h1 className="lineSubtitle mt-5 md:mt-0 mb-5 text-4xl text-blue-base leading-tight font-impact md:text-5xl">
          {t("provocacion.title_initial")}
        </h1>
        <p className="text-blue-base text-base md:text-xl tracking-tighter text-justify max-w-prose mx-auto">
          {t("provocacion.description")}
        </p>
      </div>
      <div>
        <img
          src={Collage}
          alt="Acompañamiento"
          className="w-auto max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[400px] md:h-[550px] object-cover rounded-3xl p-4 mx-auto shadow-lg transition-transform duration-500 hover:rotate-3"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Description;
