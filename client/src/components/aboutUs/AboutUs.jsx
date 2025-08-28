import "./AboutUs.css";
import { Link } from "react-router-dom";
import Arrow from "../../../src/assets/Icons/arrow.svg";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs-content">
        <div className="left-content">
          <p className="title">acerca de nosotros</p>
          <h4 className="subtitle">
            Buscamos disminuir los niveles de deserción estudiantil en Colombia
          </h4>
          <p className="paragraph">
            Siendo esta nuestra manera de aportar al logro de un país con más
            educación y consecuentemente con más desarrollo.
          </p>
        </div>
        <div className="right-content">
          <p className="right-paragraph">
            Identificar estudiantes con vulnerabilidades y acompañarlos
            integralmente, a{" "}
            <strong className="right-content-strong">
              través de un ecosistema de estrategias
            </strong>
          </p>
          <Link
            className="group flex font-bold items-center text-base text-[#7c78b3] cursor-pointer"
            to="/fundacion"
          >
            Conoce más aquí
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
