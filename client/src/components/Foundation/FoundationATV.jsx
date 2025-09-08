import React, { useState } from "react";
import "boxicons";
import imgFB from "../../../public/img_Foundation/imgF.webp";
import imgF2 from "../../../public/img_Foundation/imgF2.webp";
import imgF3 from "../../../public/img_Foundation/imgF3.webp";
import OurTeam from "../ourTeam/OurTeam";

function FoundationATV() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <img
          src={imgFB}
          alt="Banner"
          className="w-full h-[69vh] object-cover object-[0_33%]"
        />
        <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
          lo que hacemos
        </h1>
        <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">
          <a
            href="https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon
              name="facebook-circle"
              type="logo"
              color="#ffffff"
            ></box-icon>
          </a>
          <a
            href="https://www.instagram.com/somosantivirus/"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon
              name="instagram-alt"
              type="logo"
              color="#ffffff"
            ></box-icon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon name="youtube" type="logo" color="#ffffff"></box-icon>
          </a>
          <a
            href="https://www.tiktok.com/@somosantivirus"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon name="tiktok" type="logo" color="#ffffff"></box-icon>
          </a>
          <a
            href="https://www.linkedin.com/company/antivirus-desercion/"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#ffffff"
            ></box-icon>
          </a>
        </div>
      </div>

      <div className="aboutUs">
        <div className="aboutUs-content">
          <div className="left-content">
            <p className="title">¿Quiénes Somos?</p>
            <h4 className="subtitle">
              Somos una organización sin ánimo de lucro que
            </h4>
          </div>
          <div className="right-content">
            <p className="right-paragraph">
              Busca disminuir los niveles de deserción estudiantil en Colombia,
              mejorar los niveles de permanencia y de graduación, siendo esta
              nuestra manera de aportar al logro de un país con más educación y
              consecuentemente con más desarrollo.
            </p>
          </div>
        </div>
      </div>

      <div className="foundation_team">
        <div className="flex justify-center">
          <div className="w-4/5 mt-10 mb-20 flex flex-wrap items-center content-center text-white">
            <div className="bg-[#232e55] p-12 mb-1 ml-1 w-full lg:w-fit">
              <div className="_title">
                <p>
                  <small className="text-[#7c78b3] text-[0.882em] leading-[1.533] tracking-[0.3em] uppercase">
                    NUESTROS
                  </small>
                </p>
                <h5 className="uppercase text-[2.118em] leading-[0.917] tracking-[-0.06em] font-bold mb-[10px]">
                  FUNDADORES
                </h5>
              </div>
              <div className="lg:columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Carlos
                  <strong className="text-inherit block">
                    Vásquez Restrepo
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Paulina
                  <strong className="text-inherit block">Tamayo Mejía</strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Víctor Manuel
                  <strong className="text-inherit block">
                    Valencia Martínez
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Luis Fernando
                  <strong className="text-inherit block">González Urán</strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Andrea
                  <strong className="text-inherit block">
                    Jaramillo Ramírez
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Laura
                  <strong className="text-inherit block">Calle Escobar</strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  León Felipe
                  <strong className="text-inherit block">
                    Hernández López
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Aida
                  <strong className="text-inherit block">Orduz Quijano</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#232e55] p-12 mb-1 ml-1 w-full lg:w-fit lg:max-w-[710px]">
              <div className="_title">
                <p>
                  <small className="text-[#7c78b3] text-[0.882em] leading-[1.533] tracking-[0.3em] uppercase">
                    NUESTRA
                  </small>
                </p>
                <h5 className="uppercase text-[2.118em] leading-[0.917] tracking-[-0.06em] font-bold mb-[10px]">
                  JUNTA DIRECTIVA
                </h5>
              </div>
              <div className="lg:columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Carlos Vásquez Restrepo
                  <strong className="text-inherit block">
                    Presidente Y Representante Legal Titular
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Luis Fernando Sánchez Hurtado
                  <strong className="text-inherit block">
                    Vicepresidente / Director y Primer Representante Legal
                    Suplente
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  David Santiago Botero Rodríguez
                  <strong className="text-inherit block">
                    Segundo Representante Legal Suplente / Coordinador Legal
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Víctor Manuel Valencia Martínez
                  <strong className="text-inherit block">
                    Subdirector / Tercer Representante Legal Suplente
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Luis Fernando
                  <strong className="text-inherit block">González Urán</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#232e55] p-12 mb-1 ml-1 w-full lg:w-[49%]">
              <div className="_title">
                <p>
                  <small className="text-[#7c78b3] text-[0.882em] leading-[1.533] tracking-[0.3em] uppercase">
                    NUESTRO
                  </small>
                </p>
                <h5 className="uppercase text-[2.118em] leading-[0.917] tracking-[-0.06em] font-bold mb-[10px]">
                  REVISOR FISCAL
                </h5>
              </div>
              <div className="columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Orlando
                  <strong>Gaviria Flórez</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#232e55] p-12 mb-1 ml-1 w-full lg:w-[49%]">
              <div className="_title">
                <p>
                  <small className="text-[#7c78b3] text-[0.882em] leading-[1.533] tracking-[0.3em] uppercase">
                    NUESTRA
                  </small>
                </p>
                <h5 className="uppercase text-[2.118em] leading-[0.917] tracking-[-0.06em] font-bold mb-[10px]">
                  CONTADORA
                </h5>
              </div>
              <div className="lg:columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  María Verónica
                  <strong className="text-inherit block">
                    Ortiz Rodríguez
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="contVideoF flex flex-row ">
          <div className="relative flex mr-6 ">
            <picture style={{ height: "100%" }}>
              <img
                src={imgF2}
                alt="img2"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div className="iconGrande absolute inset-0 flex items-center justify-center">
                <button
                  onClick={openPopup}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <box-icon
                    name="play-circle"
                    color="white"
                    style={{ fontSize: "5rem", width: "5rem", height: "5rem" }}
                  ></box-icon>
                </button>
              </div>
            </picture>
          </div>
          <div
            className="relative w-auto h-1/2 overflow-hidden"
            style={{ height: "100%" }}
          >
            <img
              src={imgF3}
              alt="img3"
              className="w-full h-full img3"
              style={{ clipPath: "inset(0 25% 0 0)", objectFit: "cover" }}
            />
          </div>
          {isOpen && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  position: "relative",
                  maxWidth: "90%",
                  maxHeight: "90%",
                }}
              >
                <button
                  onClick={closePopup}
                  className="buttonF"
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "0%",
                    background: "none",
                    border: "none",
                    fontSize: "24px",
                    color: "white",
                    cursor: "pointer",
                    zIndex: 10000,
                  }}
                >
                  &times;
                </button>
                <iframe
                  title="YouTube Video"
                  src="https://www.youtube.com/embed/gzePCxLy8Ak"
                  style={{ width: "800px", height: "450px", border: "none" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
      <OurTeam />
      <div className="flex justify-center mt-10 mb-10">
        <div className="w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-14 text-justify">
          <div>
            <h5 className="font-oswald tracking-tighter text-left text-4xl font-bold text-[#33526d] mb-4">
              TEORÍA DEL CAMBIO
            </h5>
            <p className="font-oswald text-base text-[#33526d]">
              Identificar estudiantes con vulnerabilidades y acompañarlos
              integralmente, a través de un ecosistema de estrategias centrado
              en lo académico, económico y socioemocional para la permanencia.
            </p>
          </div>

          <div>
            <h5 className="font-oswald tracking-tighter text-4xl font-bold text-[#33526d] mb-4">
              VALORES
            </h5>
            <p className="font-oswald text-base text-[#33526d]">
              En la Fundación Antivirus para la Deserción hacemos nuestro
              trabajo de forma colaborativa, con pasión, integridad, autonomía,
              empatía, compromiso y compañerismo. Somos solidarios e innovadores
              y tenemos una gran vocación de servicio.
            </p>
          </div>

          <div>
            <h5 className="font-oswald tracking-tighter text-4xl font-bold text-[#33526d] mb-4">
              MISIÓN
            </h5>
            <p className="font-oswald text-base text-[#33526d]">
              Aumentar las tasas de graduación de estudiantes de carreras y
              programas en áreas de tecnología, a través de estrategias de
              promoción de la permanencia y prevención de la deserción.
            </p>
          </div>

          <div>
            <h5 className="font-oswald tracking-tighter text-4xl font-bold text-[#33526d] mb-4">
              PÚBLICO OBJETIVO
            </h5>
            <p className="font-oswald text-base text-[#33526d]">
              Trabajamos con estudiantes de carreras y programas TI de Educación
              Media y Postsecundaria. Enfocamos nuestra intervención en
              estudiantes vulnerables a la deserción.
            </p>
          </div>

          <div>
            <h5 className="font-oswald tracking-tighter text-4xl font-bold text-[#33526d] mb-4">
              VISIÓN
            </h5>
            <p className="font-oswald text-base text-[#33526d]">
              En 5 años vamos a tener presencia a nivel nacional, en las 10
              mejores universidades del país, donde habremos disminuido la tasa
              de deserción en 10 puntos porcentuales (del 50 al 40%). Además,
              vamos a estar replicando un modelo que es referente, cuyo éxito se
              puede medir cualitativa y cuantitativamente.
            </p>
          </div>

          <div>
            <h5 className="font-oswald tracking-tighter text-4xl font-bold text-[#33526d] mb-4">
              PRIORIDADES
            </h5>
            <ul className="font-oswald text-base text-[#33526d] list-disc pl-5">
              <li className="mb-2">
                Consolidar un modelo con procesos de identificación de
                vulnerabilidades, intervención e indicadores de resultados.
              </li>
              <li className="mb-2">
                Explorar modelos de intervención desde los colegios para aportar
                a reducir la deserción en educación superior.
              </li>
              <li className="mb-2">
                Conocer e involucrar a otros actores en el trabajo por la
                permanencia (Rectores, Decanos, MEN, Empresas, entre otros).
              </li>
              <li className="mb-2">
                Ayudar a reducir la deserción en otras universidades y programas
                para afinar nuestro modelo y generar ingresos que aporten a la
                sostenibilidad de la Fundación Antivirus.
              </li>
            </ul>
          </div>

          <div className="lg:relative lg:bottom-32">
            <h5 className="font-oswald tracking-tighter text-4xl font-bold text-[#33526d] mb-4">
              PROPÓSITO
            </h5>
            <p className="font-oswald text-base text-[#33526d]">
              Construir un país próspero, pacífico, armonioso, tecnológico y
              competitivo, en el cual todos los jóvenes tienen acceso a la
              educación y son buenos seres humanos, con metas y empoderados de
              sus vidas. Gracias a esto, lograremos superar la pobreza y nos
              convertiremos en un referente de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundationATV;
