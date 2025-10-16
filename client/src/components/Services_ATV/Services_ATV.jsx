import { useState, useEffect } from "react";
import "./Services_ATV.css";
import "boxicons";
import WriteEffect from "../writeEffect/WriteEffect";
import { useTranslation } from "react-i18next";
import Focus from "../../assets/images/views/proVocacion/information/focus-blanco.webp";
import JaviSonrie from "../../assets/images/views/proVocacion/information/javi-sonrie.png";
import Graduados from "../../assets/images/views/proVocacion/information/graduados.webp";
import Aliados from "../../assets/images/views/proVocacion/information/aliados.webp";
import LogoAtvConecta from "../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import { Link } from "react-router-dom";

//import { permanencia } from "../../../public/services_imgs/permanencia.png";

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
      <section className="relative text-blueBase p-5 py-10 md:py-16 bg-[#222d56ea]">
        <img
          className="h-[600px] w-auto absolute bottom-0 left-0 hidden md:block"
          src={JaviSonrie}
          alt="Javi muñeco animado sonríe"
        />
        <div className="flex flex-col items-center">
          <section>
            <div>
              <h1 className="font-impact text-center text-2xl md:text-5xl mb-10 md:mb-10 text-white">
                {t("home.servicesATV.title")}
              </h1>
            </div>
          </section>

          <section className="container flex flex-wrap gap-10 md:gap-5 justify-center items-stretch">
            <div className="relative bg-white p-4 border-4 border-white rounded-xl shadow-2xl max-w-[300px] mb-5">
              <section className="mb-5 md:mb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 bg-[#FFBA08] rounded-full"
                    src={Graduados}
                    alt={t("home.servicesATV.image_alt_text", {
                      index: startIndex + 1,
                    })}
                  />
                </div>
              </section>
              <section>
                <div className="">
                  <h3 className="mb-5 md:mb-10 text-blueBase text-lg text-center font-bold">
                    {t("home.servicesATV.services.permanence_title")}
                  </h3>
                  <p className="mb-2 md:mb-5 text-justify">
                    {t("home.servicesATV.services.permanence_subtitle")}
                  </p>
                  <p className="mb-5 md:mb-8">
                    {t("home.servicesATV.services.permanence_description")}
                  </p>
                </div>
              </section>
              <section>
                <div className="">
                  <button className="block m-auto w-fit bg-[#FFBA08] text-white p-4 px-8 rounded-xl text-lg absolute bottom-[-30px] left-0 right-0 duration-300 hover:-translate-y-1">
                    {t("home.servicesATV.services.more_info")}
                  </button>
                </div>
              </section>
            </div>

            <div className="relative bg-white p-4 border-4 border-white rounded-xl shadow-2xl max-w-[300px] mb-5">
              <section className="mb-5 md:mb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 bg-[#222D56] rounded-full"
                    src={Aliados}
                    alt={t("home.servicesATV.image_alt_text", {
                      index: startIndex + 1,
                    })}
                  />
                </div>
              </section>
              <section>
                <div className="">
                  <h3 className="mb-5 md:mb-10 text-blueBase text-lg text-center font-bold">
                    {t(
                      "home.servicesATV.services.persistence_consulting_title"
                    )}
                  </h3>
                  <p className="mb-5 md:mb-8 text-justify">
                    {t(
                      "home.servicesATV.services.persistence_consulting_description"
                    )}
                  </p>
                </div>
              </section>
              <section>
                <div className="">
                  <button className="block m-auto w-fit bg-[#FFBA08] text-white p-4 px-8 rounded-xl text-lg absolute bottom-[-30px] left-0 right-0 duration-300 hover:-translate-y-1">
                    {t("home.servicesATV.services.more_info")}
                  </button>
                </div>
              </section>
            </div>

            <div className="relative bg-white p-4 border-4 border-white rounded-xl shadow-2xl max-w-[300px] mb-5">
              <section className="mb-5 md:mb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 bg-[#7C76B5] rounded-full"
                    src={Focus}
                    alt={t("home.servicesATV.image_alt_text", {
                      index: startIndex + 1,
                    })}
                  />
                </div>
              </section>
              <section>
                <div className="">
                  <h3 className="mb-5 md:mb-10 text-blueBase text-lg text-center font-bold">
                    {t(
                      "home.servicesATV.services.socio_vocational_guidance_title"
                    )}
                  </h3>
                  <p className="mb-5 md:mb-8 text-justify">
                    {t(
                      "home.servicesATV.services.socio_vocational_guidance_description"
                    )}
                  </p>
                </div>
              </section>
              <section>
                <div className="">
                  <Link
                    className="block m-auto w-fit bg-[#FFBA08] text-white p-4 px-8 rounded-xl text-lg absolute bottom-[-30px] left-0 right-0 duration-300 hover:-translate-y-1"
                    to="/provocacion"
                  >
                    {t("home.servicesATV.services.more_info")}
                  </Link>
                </div>
              </section>
            </div>

            <div className="relative bg-white p-4 border-4 border-white rounded-xl shadow-2xl max-w-[300px] mb-5">
              <section className="mb-5 md:mb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 bg-[#FFBA08] rounded-full"
                    src={LogoAtvConecta}
                    alt={t("home.servicesATV.image_alt_text", {
                      index: startIndex + 1,
                    })}
                  />
                </div>
              </section>
              <section>
                <div className="">
                  <h3 className="mb-5 md:mb-10 text-blueBase text-lg text-center font-bold">
                    {t("home.servicesATV.services.atvconnect_title")}
                  </h3>
                  <p className="mb-5 md:mb-8 text-justify">
                    {t("home.servicesATV.services.atvconnect_description")}
                  </p>
                </div>
              </section>
              <section>
                <div className="">
                  <button className="block m-auto w-fit bg-[#FFBA08] text-white p-4 px-8 rounded-xl text-lg absolute bottom-[-30px] left-0 right-0 duration-300 hover:-translate-y-1">
                    {t("home.servicesATV.services.more_info")}
                  </button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>

      {/*<div className="flex justify-center m-10">
        <h1 className="text-3xl md:text-5xl text-title font-impact">NUESTROS SERVICIOS</h1>
      </div>
      <section
        className="grid grid-cols-1 lg:grid-cols-2 mb-32 lg:mb-96 text-white"
        id="redirection-services"
      >
        <div className="content-description flex justify-center bg-[#232e55] ">
          <section className="flex justify-center items-center">
            <div className="flex flex-wrap w-full p-4 lg:p-24">
              <section className="mb-10 lg:mb-20">
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

        <div className="Imgs flex flex-wrap">
          <section
            className="flex gap-16 items-end justify-center"
            style={{ width: "100%", height: "100%" }}
          >
            {imgs.map((logo, index) => (
              <div
                key={index}
                className={`w-full h-full ${
                  index === startIndex ? "" : "hidden"
                }`}
              >
                <section
                  className="relative"
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <img
                    className="hover:grayscale transition duration-700"
                    src={logo}
                    alt={`Logo ${index}`}
                    style={{ width: "100%", height: "90%", objectFit: "cover" }}
                  />
                  <span className="absolute top-4 left-4 text-white text-7xl font-bold">
                    {index + 1}
                  </span>
                </section>
              </div>
            ))}
          </section>
          <section className=" w-full">
            <div className="contArrows">
              <section className="flex flex-wrap ">
                <div className="contRight contSabemos p-4 lg:p-14 text-xl bg-[#232e55]">
                  <p>
                    {t("home.servicesATV.help_text")} <br />
                    {t("home.servicesATV.services_text")}
                  </p>
                </div>

                <div className="flex justify-evenly items-center">
                  <button className="arrowLeft ml-20" onClick={handleClickPrev}>
                    <box-icon name="left-arrow-alt" color="#6f6d6d"></box-icon>
                  </button>
                  <button
                    className="arrowRight ml-20"
                    onClick={handleClickNext}
                  >
                    <box-icon name="right-arrow-alt" color="#6f6d6d"></box-icon>
                  </button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>*/}
    </>
  );
};

export default ServicesATV;
