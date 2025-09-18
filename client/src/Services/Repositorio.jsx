import React from "react";
import { useTranslation } from "react-i18next";
import imgBanner from "../../public/services_imgs/banner-services.jpg";
import foto3 from "../../public/services_imgs/foto4.jpg";
import foto4 from "../../public/services_imgs/foto3.jpg";

function Repositorio() {
  const { t } = useTranslation();
  return (
    <div className="lg:pt-[145px]">
      <div className="relative w-full h-72 sm:h-80 md:h-96">
        <img
          src={imgBanner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
          {t("repositorio.title")}
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
            <h1 className="font-anton text-xl text-cc mb-8 truncate">
              https://www.youtube.com/@AntivirusparalaDesercion/videos
            </h1>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-anton text-cc text-xl">
                  {t("repositorio.youtube_channel.title")}{" "}
                </h2>
                <p className="text-blue-links text-lg">
                  {t("repositorio.youtube_channel.description")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img
              src={foto3}
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
              src={foto4}
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

export default Repositorio;
