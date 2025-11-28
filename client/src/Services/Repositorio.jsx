import React from "react";
import { useTranslation } from "react-i18next";
import BannerRepositorioEn from "../../public/services_imgs/banner-services.jpg";
import BannerRepositorioEs from "../../public/services_imgs/banner-services.jpg";
import foto3 from "../../public/services_imgs/foto4.jpg";
import foto4 from "../../public/services_imgs/foto3.jpg";
import BannerView from "../components/Banner-views/BannerView";

function Repositorio() {
  const { t } = useTranslation();
  return (
    <div className="lg:pt-[145px]">
      <BannerView
        imagesBannerMap={{
          enImage: BannerRepositorioEn,
          esImage: BannerRepositorioEs,
          keyTitle: "",
        }}
      />

      <div className="mx-8 my-12 sm:mx-8 sm:my-16 md:mx-12 md:my-20 lg:mx-28 lg:my-20 max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-7">
            <h1 className="text-xl text-blueBase mb-8 truncate">
              https://www.youtube.com/@AntivirusparalaDesercion/videos
            </h1>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-blueBase text-xl">
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
