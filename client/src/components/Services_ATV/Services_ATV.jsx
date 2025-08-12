import { useState, useEffect } from "react";
import "./Services_ATV.css";
import "boxicons";
import WriteEffect from "../writeEffect/WriteEffect";

const ServicesATV = () => {
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
      title: "GESTIONAMOS LA PERMANENCIA",
      subTitle: "En: Programas de Becarios - Bootcamps - Universidades",
      description:
        "Desarrollamos un proceso integral diseñado a partir de líneas y estrategias de intervención especializadas.",
    },
    {
      title: "CONSULTORIA DE PERMANENCIA",
      subTitle: "",
      description:
        "Desde las que se consolida la Fundación como un aliado estratégico para la implementación de acciones enfocadas en garantizar la permanencia educativa.",
    },
    {
      title: "PROVOCACIÓN: ORIENTACIÓN SOCIOVOCACIONAL",
      subTitle: "",
      description:
        "Conscientes de la importancia del proyecto de vida en los jóvenes, la fundación fortalece la toma de decisiones conscientes e informadas, mediante el autoconocimiento, abordaje del mundo formativo y el mundo laboral.",
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
    <section className="services mb-96" id="redirection-services">
      <div className="content-description flex justify-center bg-[#232e55] ">
        <section className="flex justify-center items-center">
          <div className="flex flex-wrap w-full p-24">
            <section className="mb-20">
              <div className="text-xl">
                <p className="flex justify-center items-center font-light text-justify">
                  <box-icon
                    name="folder-open"
                    type="solid"
                    color="#fffafa"
                    style={{ width: "60px", height: "60px" }}
                  />
                  PRESTAMOS LOS SIGUIENTES SERVICIOS
                </p>
              </div>
            </section>

            <section className="flex justify-center w-full">
              {descriptions.map((content, index) => (
                <div
                  key={index}
                  className={`flex items-center  text-left flex-wrap ${
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
                  <p className="text-xl font-bold font-roboto text-left mb-10">
                    {content.subTitle}
                  </p>
                  <p className="text-xl  tracking-tighter  font-roboto text-left">
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
            <section className="flex flex-wrap">
              <div className="contRight contSabemos p-14 text-xl">
                <p>
                  Sabemos cómo ayudarte <br />
                  Conoce nuestros servicios
                </p>
              </div>

              <div className="flex justify-evenly items-center">
                <button className="arrowLeft ml-20" onClick={handleClickPrev}>
                  <box-icon name="left-arrow-alt" color="#6f6d6d"></box-icon>
                </button>
                <button className="arrowRight ml-20" onClick={handleClickNext}>
                  <box-icon name="right-arrow-alt" color="#6f6d6d"></box-icon>
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicesATV;
