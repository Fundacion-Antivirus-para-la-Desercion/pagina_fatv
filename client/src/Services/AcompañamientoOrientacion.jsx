import React from "react";
import imgBanner from "../../public/services_imgs/banner-services.jpg";
import foto1 from "../../public/services_imgs/foto1.jpg";
import foto2 from "../../public/services_imgs/foto2-0000.jpg";

function AcompañamientoOrientacion() {
  return (
    <div className="relative top-[145px]">
      <div className="relative w-full h-60 sm:h-80 md:h-96">
        <img
          src={imgBanner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
          Servicios
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
            <h1 className="font-anton text-2xl text-cc mb-8">
              ACOMPAÑAMIENTO Y ORIENTACIÓN:
            </h1>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-anton text-cc text-xl">
                  Asesorías Socio-pedagógicas
                </h2>
                <p className="text-blue-links text-lg">
                  Las asesorías socio-educativas son espacios de encuentro,
                  escucha y apoyo a los estudiantes en estado de vulnerabilidad.
                </p>
              </div>

              <div>
                <h2 className="font-anton text-cc text-xl">Plan Padrino</h2>
                <p className="text-blue-links text-lg">
                  Es una estrategia que busca establecer un contacto entre los
                  estudiantes que recién ingresan y sus compañeros de semestres
                  superiores y egresados, con el objetivo de que estos los
                  acompañen de acuerdo a su experiencia recorrida en la
                  universidad.
                </p>
              </div>

              <div>
                <h2 className="font-anton text-cc text-xl">
                  Acompañamiento Ocupacional
                </h2>
                <p className="text-blue-links text-lg">
                  Son encuentros entre los estudiantes nuevos con egresados de
                  Ingeniería de Sistemas con el propósito de conversar sobre
                  temas relacionados con el mundo laboral.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img
              src={foto1}
              alt="emocional 1"
              className="w-full h-auto object-cover"
            />
            {/* 
          <div className='absolute bottom-0 left-0-0 bg-blue-links px-16 py-12'>
            <b className='text-xl text-white '>Evento becados Itaguí</b>
            <p className='text-white text-xl'>Una alianza creada para a compañarte</p>
          </div> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row relative">
          <div className="w-full md:w-1/2 relative ">
            <img
              className="w-full h-auto object-cover"
              src={foto2}
              alt="emocional 2"
            />

            {/* <div className='absolute bottom-0 left-0-0 bg-blue-links px-16 py-12'>
            <b className='text-xl text-white '>Colegios Itaguí</b>
            <p className='text-white text-xl'>Charlas pedagógicas sobre el acompañamiento</p>
          </div> */}

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcompañamientoOrientacion;
