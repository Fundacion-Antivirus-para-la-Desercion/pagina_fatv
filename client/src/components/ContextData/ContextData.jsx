import "./ContextData.css";
import { useTranslation } from "react-i18next";
import CounterNumeric from "./CounterNumer.jsx";
import AcompanarImage from "../../assets/images/views/home/acompanar.webp";
import OrientacionImage from "../../assets/images/views/home/orientacion.webp";
import GrupoImage from "../../assets/images/views/home/grupo.webp";
import TutoriaImage from "../../assets/images/views/home/tutoria-academica.webp";
import TutorImage from "../../assets/images/views/home/tutor.webp";
import PsicologiaImage from "../../assets/images/views/home/psicologia.webp";
import EstudioImage from "../../assets/images/views/home/grupo-estudio.webp";
import TallerImage from "../../assets/images/views/home/academico.webp";
import ComputerImage from "../../assets/images/views/home/computer.webp";
import JaviAbajo from "../../assets/images/views/home/javi-abajo.webp";

const ContextData = () => {
  const { t } = useTranslation();
  return (
    <section className="context-data-container bg-[#222D56]">
      <div className="md:grid md:grid-cols-1 bg-[#f8b732] relative items-center mb-10 md:mb-32 p-2">
        <img className="hidden md:block md:w-40 xl:w-64 h-auto ml-2 absolute top-0" src={JaviAbajo} alt="Javi feliz" />
        <h1 className="col-start-2 md:col-start-1 p-2 context-data-title uppercase font-impact text-xl md:text-3xl lg:text-5xl text-[#222D56] text-center">
          {t("home.contextData.title")}
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#f8b732] p-2 mb-3"
              src={AcompanarImage}
              alt={t("home.contextData.statistic1.alt_image")}
            />
            <p className="statistic-number text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={11400} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold ">
              {t("home.contextData.statistic1.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#222D56] p-2 object-cover mb-3"
              src={OrientacionImage}
              alt={t("home.contextData.statistic2.alt_image")}
            />
            <p className="statistic-number2 text-3xl md:text-5xl font-impact mb-3 p-1">
              <CounterNumeric countNumber={19641} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold">
              {t("home.contextData.statistic2.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#7C78B3] p-2 object-cover mb-3"
              src={GrupoImage}
              alt={t("home.contextData.statistic3.alt_image")}
            />
            <p className="statistic-number3 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={715} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold">
              {t("home.contextData.statistic3.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#f8b732] p-2 object-cover mb-3"
              src={TutoriaImage}
              alt={t("home.contextData.statistic4.alt_image")}
            />
            <p className="statistic-number text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={4605} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold">
              {t("home.contextData.statistic4.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#222D56] p-2 object-cover mb-3"
              src={TutorImage}
              alt={t("home.contextData.statistic5.alt_image")}
            />
            <p className="statistic-number2 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={441} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold">
              {t("home.contextData.statistic5.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#7C78B3] p-2 object-cover mb-3"
              src={PsicologiaImage}
              alt={t("home.contextData.statistic6.alt_image")}
            />
            <p className="statistic-number3 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={565} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold">
              {t("home.contextData.statistic6.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#f8b732] p-2 object-cover mb-3"
              src={TallerImage}
              alt={t("home.contextData.statistic7.alt_image")}
            />
            <p className="statistic-number text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={3560} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold">
              {t("home.contextData.statistic7.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#222D56] p-2 object-cover mb-3"
              src={ComputerImage}
              alt={t("home.contextData.statistic8.alt_image")}
            />
            <p className="statistic-number2 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={221} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold">
              {t("home.contextData.statistic8.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-[#7C78B3] p-2 object-cover mb-3"
              src={EstudioImage}
              alt={t("home.contextData.statistic9.alt_image")}
            />
            <p className="statistic-number3 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={129} />
            </p>
            <p className="text-blueBase text-lg text-center font-bold">
              {t("home.contextData.statistic9.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextData;
