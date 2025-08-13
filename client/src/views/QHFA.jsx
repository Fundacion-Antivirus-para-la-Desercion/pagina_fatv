import React from "react";
import imgBanner from "../../public/img_viewQHav/slider-servicios.webp";
import emocinal1 from "../../public/img_viewQHav/sociopedagogical-image-1.jpg";
import emocinal2 from "../../public/img_viewQHav/sociopedagogical-image-2.webp";
import emocional3 from "../../public/img_viewQHav/sociopedagogical-image-3.webp";

function QHFA() {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:pt-[145px]">
        <div className="relative w-full">
          <img
            src={imgBanner}
            alt="Banner"
            className="w-full h-full object-cover"
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

        <div className="mx-8 my-12 sm:mx-8 sm:my-16 md:mx-12 md:my-20 lg:mx-28 lg:my-20 max-w-screen-xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-7">
              <h1 className="tracking-nm text-blue-links">NUESTRO MODELO</h1>
              <h1 className="font-anton text-blue-links text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2">
                INTERVENCION SOCIO-EMOCIONAL
              </h1>
              <p className="text-blue-links">
                Es el campo de acción de la fundación que pretende identificar y
                comprender las particularidades del contexto sociocultural y
                socioemocional de los estudiantes, para influir, transformar e
                impactar significativamente en sus condiciones y su proceso
                formativo, a través de herramientas y alternativas de
                acompañamiento socio pedagógico. El equipo social está compuesto
                por trabajadores sociales y psicólogos encargados de diseñar y
                ejecutar estrategias de fortalecimiento académico, apoyo
                psicoemocional y sociopedagógico. Esta área cuenta con las
                siguientes líneas de Intervención social:
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={emocinal1}
                alt="emocional 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row relative">
            <div className="w-full md:w-1/2 relative">
              <a
                href="https://www.youtube.com/watch?v=UWKf7hj-H5I"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative">
                  <img
                    className="w-full h-auto object-cover"
                    src={emocinal2}
                    alt="emocional 2"
                  />
                  <div className="absolute inset-0 bg-blue-links opacity-80"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <svg
                      width="117"
                      height="117"
                      viewBox="0 0 117 117"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.7771 116.26C25.6877 116.291 -0.185737 89.7148 0.669532 55.4153C1.39809 26.1588 25.504 0.0889276 58.7138 0.00023303C90.9352 -0.0884615 116.783 25.1515 116.999 58.8681C117.195 90.0125 90.3777 116.234 58.7771 116.26ZM15.7223 58.5766C16.2228 82.7332 35.5835 101.714 59.2966 101.308C82.8704 100.903 102.389 81.2254 102.035 58.2155C101.661 33.7738 81.9771 14.5335 57.8142 14.9959C34.3354 15.4458 15.2408 35.2183 15.7223 58.5703V58.5766Z"
                        fill="white"
                      />
                      <path
                        d="M43.8957 58.1205C43.8957 52.1209 43.845 46.1214 43.9083 40.1218C43.9717 34.4454 47.9313 32.209 52.8031 35.1359C62.3695 40.8757 71.9105 46.6536 81.4008 52.5074C86.3867 55.5864 86.4627 60.5089 81.5528 63.5879C72.0182 69.5684 62.4328 75.4729 52.7905 81.2888C47.9503 84.2094 43.9653 81.8336 43.9083 76.1191C43.845 70.1196 43.8957 64.12 43.8957 58.1205Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full md:w-1/2 pl-7">
              <h1 className="font-anton text-blue-links text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-8">
                FORTALECIMIENTO ACADEMICO:
              </h1>
              <p className="text-blue-links">
                Búsqueda de tutores y mentores dispuestos recibir un módico
                estipendio por hora y ofrecer otra hora voluntaria. En este
                sentido, una vez encontrados los tutores, esta área es
                responsable de crear las citas para la tutoría uno a uno y
                talleres temáticos para un repaso complementario de clases y
                grupos de estudio.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row relative ">
            <div className="w-full md:w-1/2 pr-7">
              <h1 className="font-anton text-blue-links text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-8">
                Acompañamiento psicoemocional y sociopedagógico:
              </h1>
              <p>Esta área está encargada de:</p>
              <ul>
                <li className="list-disc text-blue-links">
                  Supervisar, orientar y atender a los estudiantes con problemas
                  en su estado mental y salud emocional.
                </li>
                <li className="list-disc text-blue-links">
                  Dar orientación a situaciones vocacionales o familiares,
                </li>
                <li className="list-disc text-blue-links">
                  Ayudar a fortalecer las habilidades socioemocionales y la
                  autoestima de los estudiantes.
                </li>
                <li className="list-disc text-blue-links">
                  Organizar talleres, encuentros y grupos focales para
                  fortalecer las habilidades socioemocionales y vocacionales.
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <img
                className="w-full h-auto object-cover"
                src={emocional3}
                alt="emocional 3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QHFA;
