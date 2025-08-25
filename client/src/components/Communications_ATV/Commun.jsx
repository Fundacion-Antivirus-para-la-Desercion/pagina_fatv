import React from "react";
import "./Commun.css";
import imgBannerATV from "../../../public/img_DataAnalytics/banner-DataAnalytics.webp";
import ImgComunications from "../../../public/img_Communications/comunications_1.webp";

function Commun() {
  return (
    <div id="communications">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full">
          <img
            src={imgBannerATV}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
          <h1 className="absolute inset-0 flex items-center justify-center uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
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
      </div>

      <div className="data_analytics">
        <div className="data_analytics--cnt">
          <div className="data_analytics--content">
            <div className="data_analytics--text">
              <p className="">NUESTRO MODELO</p>
              <h4 className="subtitle">COMUNICACIONES</h4>

              <p className="text-justify">
                Esta área está conformada por comunicadores sociales y
                diseñadores gráficos.
                <br />
                <br />
                Este equipo crea y promueve acciones comunicativas, ajustadas a
                la caracterización y construidas a través de las necesidades y
                segmentación de los estudiantes.
                <br />
                <br />
                Esta área se encarga de difundir información y elaborar
                contenidos audiovisuales y utilizar medios tecnológicos,
                plataformas y otros recursos de interacción e información.
                <br />
                <br />
                El área de Comunicación y Marketing también se encarga del
                marketing digital y marketing por correo electrónico a las
                partes interesadas del proyecto, como directores, profesores,
                estudiantes, empresas interesadas en los servicios prestados por
                FATV.
              </p>
            </div>
            <div className="data_analytics--image">
              <picture>
                <img
                  src={ImgComunications}
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commun;
