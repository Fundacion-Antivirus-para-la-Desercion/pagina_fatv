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
import AcademicoImage from "../../assets/images/views/home/academico.webp";
import ComputerImage from "../../assets/images/views/home/computer.webp";

const ContextData = () => {
  const { t } = useTranslation();
  return (
    <div className="context-data-container">
      <h1 className="mb-32 context-data-title text-3xl lg:text-5xl text-white font-extrabold text-center">
        <span className="bg-[#f6a623] text-[#222d56] px-2">
          {t("home.contextData.title_part1")}
        </span>{" "}
        {t("home.contextData.title_part2")}
      </h1>
      <div className="context-data-statistics">
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={AcompanarImage}
            alt={t("home.contextData.statistic1.alt_image")}
          />
          <h2 className="statistic-number">
            <CounterNumeric countNumber={11400} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic1.description")}
          </p>
        </div>
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={OrientacionImage}
            alt={t("home.contextData.statistic2.alt_image")}
          />
          <h2 className="statistic-number2">
            <CounterNumeric countNumber={19641} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic2.description")}
          </p>
        </div>
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={GrupoImage}
            alt={t("home.contextData.statistic3.alt_image")}
          />
          <h2 className="statistic-number3">
            <CounterNumeric countNumber={715} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic3.description")}
          </p>
        </div>
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={TutoriaImage}
            alt={t("home.contextData.statistic4.alt_image")}
          />
          <h2 className="statistic-number">
            <CounterNumeric countNumber={4605} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic4.description")}
          </p>
        </div>
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={TutorImage}
            alt={t("home.contextData.statistic5.alt_image")}
          />
          <h2 className="statistic-number2">
            <CounterNumeric countNumber={441} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic5.description")}
          </p>
        </div>
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={PsicologiaImage}
            alt={t("home.contextData.statistic6.alt_image")}
          />
          <h2 className="statistic-number3">
            <CounterNumeric countNumber={565} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic6.description")}
          </p>
        </div>
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={AcademicoImage}
            alt={t("home.contextData.statistic7.alt_image")}
          />
          <h2 className="statistic-number">
            <CounterNumeric countNumber={3560} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic7.description")}
          </p>
        </div>
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={ComputerImage}
            alt={t("home.contextData.statistic8.alt_image")}
          />
          <h2 className="statistic-number2">
            <CounterNumeric countNumber={221} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic8.description")}
          </p>
        </div>
        <div className="statistic">
          <img
            className="m-auto d-block w-20"
            src={EstudioImage}
            alt={t("home.contextData.statistic9.alt_image")}
          />
          <h2 className="statistic-number3">
            <CounterNumeric countNumber={129} />
          </h2>
          <p className="statistic-description text-center">
            {t("home.contextData.statistic9.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContextData;