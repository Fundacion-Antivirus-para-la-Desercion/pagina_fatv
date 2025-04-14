import "./ContextData.css";
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

const ContextData = () => (
  <div className="context-data-container">
    <h1 className="mb-32 context-data-title text-5xl text-white font-extrabold text-center">
      Nuestro aporte en Colombia
    </h1>
    <div className="context-data-statistics">
      <div className="statistic">
        <img
          className="m-auto d-block w-20"
          src={AcompanarImage}
          alt="Acompañamiento"
        />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={11400} />
        </h2>
        <p className="statistic-description text-center">
          Estudiantes acompañados por la Fundación
        </p>
      </div>
      <div className="statistic">
        <img
          className="m-auto d-block w-20"
          src={OrientacionImage}
          alt="Orientación"
        />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={19641} />
        </h2>
        <p className="statistic-description text-center">
          Asesorías de orientación sociopedagógica y sociovocacional (ASP Y ASV)
        </p>
      </div>
      <div className="statistic">
        <img
          className="m-auto d-block w-20"
          src={GrupoImage}
          alt="Grupo de estudio"
        />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={715} />
        </h2>
        <p className="statistic-description text-center">Talleres grupales</p>
      </div>
      <div className="statistic">
        <img className="m-auto d-block w-20" src={TutoriaImage} alt="Tutoria" />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={4605} />
        </h2>
        <p className="statistic-description text-center">Tutorías académicas</p>
      </div>
      <div className="statistic">
        <img className="m-auto d-block w-20" src={TutorImage} alt="Tutor" />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={441} />
        </h2>
        <p className="statistic-description text-center">
          Tutores voluntarios vinculados
        </p>
      </div>
      <div className="statistic">
        <img
          className="m-auto d-block w-20"
          src={PsicologiaImage}
          alt="Orientación Psicológica"
        />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={565} />
        </h2>
        <p className="statistic-description text-center">
          Espacios de orientación Psicológica
        </p>
      </div>
      <div className="statistic">
        <img
          className="m-auto d-block w-20"
          src={AcademicoImage}
          alt="Taller"
        />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={3560} />
        </h2>
        <p className="statistic-description text-center">
          Talleres de Nivélate
        </p>
      </div>
      <div className="statistic">
        <img
          className="m-auto d-block w-20"
          src={ComputerImage}
          alt="computador"
        />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={221} />
        </h2>
        <p className="statistic-description text-center">
          Estudiantes que reciben computador en préstamo o donación
        </p>
      </div>
      <div className="statistic">
        <img
          className="m-auto d-block w-20"
          src={EstudioImage}
          alt="Gripos de estudio"
        />
        <h2 className="statistic-number">
          <CounterNumeric countNumber={129} />
        </h2>
        <p className="statistic-description text-center">Grupos de estudio</p>
      </div>
    </div>
  </div>
);

export default ContextData;
