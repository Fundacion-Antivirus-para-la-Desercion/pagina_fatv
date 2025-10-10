import { useState, useEffect } from "react";
import "./Services_ATV.css";
import "boxicons";
import WriteEffect from "../writeEffect/WriteEffect";
import { useTranslation } from "react-i18next";

const ServicesATV = () => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const [animateTitle, setAnimateTitle] = useState(true); // Nuevo estado

  useEffect(() => {
    setAnimateTitle(true); // Reinicia la animación al cambiar de servicio
    // O podrías usar un setTimeout para un pequeño delay si es necesario
  }, [startIndex]);

  const imgs = [
    "/img_services/services1.webp",
    "/img_services/services2.webp",
    "/img_services/services3.webp",
  ];

  const descriptions = [
    {
      title: t("home.servicesATV.services.permanence_title"),
      subTitle: t("home.servicesATV.services.permanence_subtitle"),
      description: t("home.servicesATV.services.permanence_description"),
    },
    {
      title: t("home.servicesATV.services.persistence_consulting_title"),
      subTitle: "",
      description: t(
        "home.servicesATV.services.persistence_consulting_description"
      ),
    },
    {
      title: t("home.servicesATV.services.socio_vocational_guidance_title"),
      subTitle: "",
      description: t(
        "home.servicesATV.services.socio_vocational_guidance_description"
      ),
    },
  ];

  const handleClickPrev = () => {
    setAnimateTitle(false);
    setTimeout(() => {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
      );
      setAnimateTitle(true);
    }, 10);
  };

  const handleClickNext = () => {
    setAnimateTitle(false);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % imgs.length);
      setAnimateTitle(true);
    }, 10);
  };

  return (
    <>
      <div className="flex justify-center grap m-10">
        <h1 className="text-3xl md:text-5xl text-title font-impact">
          NUESTROS SERVICIOS
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-6 p-10 bg-[#7C78B3]">
        <div className="rounded-md bg-white p-5">
          <h1 className="m-3 text-title font-impact">GESTIONAMOS LA PERMANENCIA</h1>
          <button className="px-4 py-2 bg-[#222D56] text-white border-2 rounded-xl font-bold text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-sm text-center">
            Más
          </button>{" "}
        </div>
        <div className=" rounded-md bg-white p-5">
          <h1 className="m-3 text-title font-impact">CONSULTORIA DE PERMANENCIA</h1>
          <button className="px-4 py-2 bg-[#222D56] text-white border-2 rounded-xl font-bold text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-sm text-center">
            Más
          </button>{" "}
        </div>
        <div className="rounded-md bg-white p-5">
          <h1 className="m-3 text-title font-impact">
            PROVOCACIÓN: ORIENTACIÓN SOCIOVOCACIONAL
          </h1>
          <button className="px-4 py-2 bg-[#222D56] text-white border-2 rounded-xl font-bold text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-sm text-center">
            Más
          </button>
        </div>
        <div className=" rounded-md bg-white p-5">
          <h1 className="m-3 text-title font-impact">GESTIONAMOS LA PERMANENCIA</h1>
          <button className="px-4 py-2 bg-[#222D56] text-white border-2 rounded-xl font-bold text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-sm text-center">
            Más
          </button>{" "}
        </div>
      </section>

      {/* <section
        className="grid grid-cols-1 sm:grid-cols-2 mb-32 sm:mb-96 text-white"
        id="redirection-services"
      >
        <div className="content-description flex justify-center bg-[#232e55] ">
          <section className="flex justify-center items-center">
            <div className="flex flex-wrap w-full p-4 sm:p-24">
              <section className="mb-10 sm:mb-20">
                <div className="text-xl">
                  <p className="flex justify-center items-center font-light text-left">
                    <box-icon
                      name="folder-open"
                      type="solid"
                      color="#fffafa"
                      style={{ width: "60px", height: "60px" }}
                    />
                    {t("home.servicesATV.following_services")}
                  </p>
                </div>
              </section>

              <section className="flex justify-center w-full">
                {descriptions.map((content, index) => (
                  <div
                    key={index}
                    className={`flex items-center text-left flex-wrap ${
                      index === startIndex ? "" : "hidden"
                    }`}
                  >
                    <div className="w-full">
                      <WriteEffect
                        key={content.title}
                        texto={content.title}
                        velocidad={100}
                        shouldAnimate={animateTitle}
                      />
                    </div>
                    <p className="text-xl font-bold text-ju mb-10">
                      {content.subTitle}
                    </p>
                    <p className="text-xl tracking-tighter text-left">
                      {content.description}
                    </p>
                  </div>
                ))}
              </section>
            </div>
          </section>
        </div>

       
      </section>*/}
    </>
  );
};

export default ServicesATV;
