import "./ContextData.css";
import { useTranslation } from "react-i18next";
import CounterNumeric from "./CounterNumer.jsx";
import {
  ACOMPANAR_IMG as AcompanarImage,
  ORIENTACION_IMG as OrientacionImage,
  GRUPO_IMG as GrupoImage,
  TUTORIA_IMG as TutoriaImage,
  TUTOR_IMG as TutorImage,
  PSICOLOGIA_IMG as PsicologiaImage,
  ESTUDIO_IMG as EstudioImage,
  TALLER_IMG as TallerImage,
  COMPUTER_IMG as ComputerImage,
  JAVI_ABAJO_IMG as JaviAbajo,
} from "../../assets/cloudinaryImages";

const ContextData = () => {
  const { t } = useTranslation();
  return (
    <section className="context-data-container bg-dark-blue">
      <div className="md:grid md:grid-cols-1 bg-primary-yellow relative items-center mb-10 md:mb-32 p-2">
        <img className="hidden md:block md:w-40 xl:w-64 h-auto ml-2 absolute top-0" src={JaviAbajo} alt={t("home.contextData.alt_javi")} loading="lazy" />
        <h1 className="col-start-2 md:col-start-1 p-2 context-data-title uppercase font-impact text-2xl md:text-3xl lg:text-5xl text-dark-blue text-center">
          {t("home.contextData.title")}
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-primary-yellow p-2 mb-3"
              src={AcompanarImage}
              alt={t("home.contextData.statistic1.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={26512} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold ">
              {t("home.contextData.statistic1.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-dark-blue p-2 object-cover mb-3"
              src={OrientacionImage}
              alt={t("home.contextData.statistic2.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number2 text-3xl md:text-5xl font-impact mb-3 p-1">
              <CounterNumeric countNumber={23356} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold">
              {t("home.contextData.statistic2.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-primary-purple p-2 object-cover mb-3"
              src={GrupoImage}
              alt={t("home.contextData.statistic3.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number3 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={1122} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold">
              {t("home.contextData.statistic3.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-primary-yellow p-2 object-cover mb-3"
              src={TutoriaImage}
              alt={t("home.contextData.statistic4.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={7211} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold">
              {t("home.contextData.statistic4.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-dark-blue p-2 object-cover mb-3"
              src={TutorImage}
              alt={t("home.contextData.statistic5.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number2 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={441} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold">
              {t("home.contextData.statistic5.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-primary-purple p-2 object-cover mb-3"
              src={PsicologiaImage}
              alt={t("home.contextData.statistic6.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number3 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={613} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold">
              {t("home.contextData.statistic6.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-primary-yellow p-2 object-cover mb-3"
              src={TallerImage}
              alt={t("home.contextData.statistic7.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={2087} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold">
              {t("home.contextData.statistic7.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-dark-blue p-2 object-cover mb-3"
              src={ComputerImage}
              alt={t("home.contextData.statistic8.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number2 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={227} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold">
              {t("home.contextData.statistic8.description")}
            </p>
          </div>
          <div className="bg-white statistic p-7 rounded-lg border-none shadow-lg hover:shadow-xl duration-300">
            <img
              className="m-auto w-24 rounded-full bg-primary-purple p-2 object-cover mb-3"
              src={EstudioImage}
              alt={t("home.contextData.statistic9.alt_image")}
              loading="lazy"
            />
            <p className="statistic-number3 text-3xl md:text-5xl font-impact mb-3">
              <CounterNumeric countNumber={184} />
            </p>
            <p className="text-blue-base text-lg text-center font-bold">
              {t("home.contextData.statistic9.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextData;
