import React from "react";
import { useTranslation } from "react-i18next";
import BannerAcompanamientoEn from "../../public/services_imgs/banner-services.jpg";
import foto1 from "../../public/services_imgs/foto1.jpg";
import foto2 from "../../public/services_imgs/foto2-0000.jpg";
import BannerView from "../components/Banner-views/BannerView";

function AcompañamientoOrientacion() {
  const { t } = useTranslation();

  return (
    <div className="lg:pt-[145px]">
       <BannerView
          imagesBannerMap={{
            enImage: BannerAcompanamientoEn,
            esImage: BannerAcompanamientoEn,
            keyTitle: "",
          }}
        />

      <div className="mx-8 my-12 sm:mx-8 sm:my-16 md:mx-12 md:my-20 lg:mx-28 lg:my-20 max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-7">
            <h1 className="lineSubtitle text-blue-base font-impact text-[3em] leading-[.92] uppercase sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2 mb-5">
              {t("acompañamientoOrientacion.main_title")}
            </h1>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-blue-base font-impact text-xl mb-2">
                  {t("acompañamientoOrientacion.socio_pedagogical.title")}
                </h2>
                <p className="text-dark-blue text-lg">
                  {t("acompañamientoOrientacion.socio_pedagogical.description")}
                </p>
              </div>

              <div>
                <h2 className="text-blue-base font-impact text-xl mb-2">
                  {t("acompañamientoOrientacion.plan_padrino.title")}
                </h2>
                <p className="text-dark-blue text-lg">
                  {t("acompañamientoOrientacion.plan_padrino.description")}
                </p>
              </div>

              <div>
                <h2 className="text-blue-base font-impact text-xl mb-2">
                  {t("acompañamientoOrientacion.occupational_support.title")}
                </h2>
                <p className="text-dark-blue text-lg">
                  {t(
                    "acompañamientoOrientacion.occupational_support.description"
                  )}
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
            {/* <div className='absolute bottom-0 left-0-0 bg-dark-blue px-16 py-12'>
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

            {/* <div className='absolute bottom-0 left-0-0 bg-dark-blue px-16 py-12'>
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
