import { useState, useRef } from "react";
import "boxicons";
import imgFB from "../../../public/img_Foundation/imgF.webp";
import FotoVideo from "../../../public/img_Foundation/foto-video.jpg";
import Foundation1 from "../../../public/img_Foundation/foundation-1.jpg";
import Foundation2 from "../../../public/img_Foundation/foundation-2.jpg";
import BannerFoundation from "../../assets/images/views/foundation/banner-foundation.webp";
import TeoriaCambio from "../../assets/images/views/foundation/entrega-pc.webp";
import Valores from "../../assets/images/views/foundation/valores.webp";
import Mision from "../../assets/images/views/foundation/pase-a-la-u.webp";
import Publico from "../../assets/images/views/foundation/estudiantes-colegio.webp";
import Vision from "../../assets/images/views/foundation/estudiantes-universitarios.webp";
import Proposito from "../../assets/images/views/foundation/foundation-estudiantes.webp";
import { Sun, SunBlue } from "../../assets/images/svg/Svg";

import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import BannerView from "../Banner-views/BannerView";

function FoundationATV() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  // Create refs for sections we want to animate
  const aboutSectionRef = useRef(null);
  const videoSectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const visionRef = useRef(null);
  const purposeRef = useRef(null);
  const prioritiesRef = useRef(null);

  // Set up inView detection for each section
  const isAboutInView = useInView(aboutSectionRef, { once: true, amount: 0.3 });
  const isVideoInView = useInView(videoSectionRef, { once: true, amount: 0.4 });
  const isCardsInView = useInView(cardsContainerRef, {
    once: true,
    amount: 0.1,
  });
  const isPrioritiesInView = useInView(prioritiesRef, {
    once: true,
    amount: 0.3,
  });

  // Card container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // List item variants for staggered animations
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const slideFromRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.7 },
  };
  const slideFromLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.7 },
  };

  const expandableTransition = {
    initial: { opacity: 0, scale: 0.5 }, // Comienza pequeña y escondida
    whileInView: { opacity: 1, scale: 1 }, // Se expande y aparece
    transition: { duration: 0.8, ease: "easeOut" }, // Suavidad
    viewport: { once: true }, // Solo se anima una vez al verla
  };

  return (
    <div className="relative w-full">
      <BannerView
        imagesBannerMap={{
          image: BannerFoundation,
          keyAlt: "foundation.banner.alt",
          keyH1: "foundation.banner.h1",
        }}
      />

      <div className="aboutUs">
        <div className="aboutUs-content">
          <div className="left-content">
            <p className="title">{t("foundation.foundationATV.title")}</p>
            <h4 className="lineSubtitle font-impact text-4xl md:text-5xl leading-[.92] uppercase">
              {t("foundation.foundationATV.subtitle")}
            </h4>
          </div>
          <div className="right-content">
            <p className="text-xl right-paragraph">
              {t("foundation.foundationATV.description")}
            </p>
          </div>
        </div>
      </div>

      <section
        ref={videoSectionRef}
        className="md:grid md:grid-cols-[25%_50%_25%] p-5 md:items-stretch"
      >
        <motion.div
          className="hidden md:block relative left-10"
          initial={{ opacity: 0, x: -30 }}
          animate={
            isVideoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img className="w-full object-cover" src={Foundation1} alt="" />
        </motion.div>
        <motion.div
          className="relative z-10 flex justify-center items-center hover:cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isVideoInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8 }}
        >
          <img
            className={
              isPlaying
                ? `hidden`
                : `absolute inset-0 w-full h-full object-cover shadow-2xl`
            }
            src={FotoVideo}
            alt=""
          />
          {isPlaying ? null : (
            <button
              id="play-button"
              onClick={handlePlayClick}
              className={
                isPlaying
                  ? `hidden`
                  : `absolute inset-0 flex justify-center items-center w-full h-full`
              }
            >
              <box-icon
                name="play-circle"
                color="#ffffff"
                style={{
                  fontSize: "5rem",
                  width: "5rem",
                  height: "5rem",
                  position: "absolute",
                  cursor: "pointer",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  margin: "auto",
                }}
              ></box-icon>
            </button>
          )}

          <iframe
            id="foundation-video"
            className="shadow-2xl min-h-[400px]"
            width="100%"
            height="100%"
            src={
              isPlaying
                ? "https://www.youtube.com/embed/XhpGyJ02Guc?autoplay=1&mute=0&rel=0"
                : "https://www.youtube.com/embed/XhpGyJ02Guc"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={isVideoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {" "}
          <img
            className="w-full object-cover relative right-10"
            src={Foundation2}
            alt=""
          />
        </motion.div>
      </section>

      <section className="relative mb-14">
        <motion.div {...slideFromLeft}>
          <Sun classNames="hidden md:block" />
          <section className="m-5 grid grid-cols-1 md:grid-cols-[20%_40%] gap-2 items-center justify-center">
            <div className="bg-[#CCEDE8] rounded-full">
              <img
                className="rounded-full w-[400px] h-auto p-5 object-cover"
                src={TeoriaCambio}
                alt="Foto"
              />
            </div>
            <div className="p-6 rounded-lg border bg-[#CCEDE8] border-gray-200 shadow-xl">
              <h5 className="text-left text-4xl font-impact text-blue-base mb-4">
                {t(
                  "foundation.foundationATV.organization_info.change_theory.title"
                )}
              </h5>
              <p className="text-base p-1 text-blue-base text-justify">
                {t(
                  "foundation.foundationATV.organization_info.change_theory.description"
                )}
              </p>
            </div>
          </section>
          <SunBlue classNames="hidden md:block right-0" />
        </motion.div>

        <motion.div {...slideFromRight}>
          <section className="m-5 grid grid-cols-1 md:grid-cols-[40%_20%] gap-2 items-center justify-center">
            <div className="rounded-lg border bg-[#D3C3E3] border-gray-200 p-6 shadow-xl">
              <h5 className="text-4xl font-impact text-blue-base mb-4">
                {t("foundation.foundationATV.organization_info.values.title")}
              </h5>
              <p className="text-base text-blue-base text-justify">
                {t(
                  "foundation.foundationATV.organization_info.values.description"
                )}
              </p>
            </div>
            <div className="relative bg-[#D3C3E3] rounded-full">
              <img
                className="rounded-full w-[400px] h-auto p-5 object-cover"
                src={Valores}
                alt="Foto"
              />
            </div>
          </section>
          <Sun classNames="hidden md:block" />
        </motion.div>

        <motion.div {...slideFromLeft}>
          <section className="m-5 grid grid-cols-1 md:grid-cols-[20%_40%] gap-2 items-center justify-center">
            <div className="bg-primary-yellow rounded-full">
              <img
                className="rounded-full w-[400px] h-auto p-5 object-cover"
                src={Mision}
                alt="Foto"
              />
            </div>
            <div className="rounded-lg bg-primary-yellow border border-gray-200 p-6 shadow-xl">
              <h5 className="text-4xl font-impact text-blue-base mb-4">
                {t("foundation.foundationATV.organization_info.mission.title")}
              </h5>
              <p className="text-base text-blue-base text-justify">
                {t(
                  "foundation.foundationATV.organization_info.mission.description"
                )}
              </p>
            </div>
          </section>
          <SunBlue classNames="hidden md:block right-0" />
        </motion.div>

        <motion.div {...slideFromRight}>
          <section className="m-5 grid grid-cols-1 md:grid-cols-[40%_20%] gap-2 items-center justify-center">
            <div className="rounded-lg bg-[#CCEDE8] border border-gray-200 p-6 shadow-xl">
              <h5 className="text-4xl font-impact text-blue-base mb-4">
                {t(
                  "foundation.foundationATV.organization_info.target_audience.title"
                )}
              </h5>
              <p className="text-base text-blue-base text-justify">
                {t(
                  "foundation.foundationATV.organization_info.target_audience.description"
                )}
              </p>
            </div>
            <div className="bg-[#CCEDE8] rounded-full">
              <img
                className="rounded-full w-[400px] h-auto p-5 object-cover"
                src={Publico}
                alt="Foto"
              />
            </div>
          </section>
          <Sun classNames="hidden md:block" />
        </motion.div>

        <motion.div {...slideFromLeft}>
          <section className="m-5 grid grid-cols-1 md:grid-cols-[20%_50%] gap-2 items-center justify-center">
            <div className="bg-[#D3C3E3] rounded-full">
              <img
                className="rounded-full w-[400px] h-auto p-5 object-cover"
                src={Vision}
                alt="Foto"
              />
            </div>
            <div className="rounded-lg border border-gray-200 bg-[#D3C3E3] p-8 shadow-xl">
              <h5 className="text-4xl font-impact text-blue-base mb-4">
                {t("foundation.foundationATV.organization_info.vision.title")}
              </h5>
              <p className="text-base text-blue-base text-justify">
                {t(
                  "foundation.foundationATV.organization_info.vision.description"
                )}
              </p>
            </div>
          </section>
          <SunBlue classNames="hidden md:block right-0" />
        </motion.div>

        <motion.div {...slideFromRight}>
          <section className="m-5 grid grid-cols-1 md:grid-cols-[50%_20%] gap-2 items-center justify-center">
            <div className="rounded-lg border border-gray-200 bg-primary-yellow p-8 shadow-xl">
              <h5 className="text-4xl font-impact text-blue-base mb-4">
                {t("foundation.foundationATV.organization_info.purpose.title")}
              </h5>
              <p className="text-base text-blue-base text-justify">
                {t(
                  "foundation.foundationATV.organization_info.purpose.description"
                )}
              </p>
            </div>

            <div className="bg-primary-yellow rounded-full">
              <img
                className="rounded-full w-[400px] h-auto p-5 object-cover"
                src={Proposito}
                alt="Foto"
              />
            </div>
          </section>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 m-5 gap-10 md:grid md:grid-cols-4 md:gap-5 md:mb-28 md:mt-28 md:m-10 items-stretch">
        <h5 className="col-span-1 md:col-span-4 text-4xl font-impact text-center text-blue-base mb-8">
          {t("foundation.foundationATV.organization_info.priorities.title")}
        </h5>
        <motion.div {...expandableTransition}>
          <div className="relative flex flex-wrap justify-center items-center rounded-xl bg-dark-blue p-6 hover:-translate-y-2 transition-transform duration-300 h-full">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-yellow text-dark-blue font-bold w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md">
              1
            </span>
            <p className="text-base text-justify mt-9 text-white">
              {t(
                "foundation.foundationATV.organization_info.priorities.items.consolidate_model"
              )}
            </p>
          </div>
        </motion.div>

        <motion.div {...expandableTransition}>
          <div className="relative flex flex-wrap justify-center items-center rounded-xl bg-dark-blue p-6 hover:-translate-y-2 transition-transform duration-300 h-full">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-yellow text-dark-blue font-bold w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md">
              2
            </span>
            <p className="text-base text-justify mt-9 text-white">
              {t(
                "foundation.foundationATV.organization_info.priorities.items.explore_interventions"
              )}
            </p>
          </div>
        </motion.div>

        <motion.div {...expandableTransition}>
          <div className="relative flex flex-wrap justify-center items-center rounded-xl bg-dark-blue p-6 hover:-translate-y-2 transition-transform duration-300 h-full">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-yellow text-dark-blue font-bold w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md">
              3
            </span>
            <p className="text-base text-justify mt-9 text-white">
              {t(
                "foundation.foundationATV.organization_info.priorities.items.involve_actors"
              )}
            </p>
          </div>
        </motion.div>

        <motion.div {...expandableTransition}>
          <div className="relative flex flex-wrap justify-center items-center rounded-xl bg-dark-blue p-6 hover:-translate-y-2 transition-transform duration-300 h-full">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-yellow text-dark-blue font-bold w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md">
              4
            </span>
            <p className="text-base text-justify mt-9 text-white">
              {t(
                "foundation.foundationATV.organization_info.priorities.items.reduce_dropout"
              )}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default FoundationATV;
