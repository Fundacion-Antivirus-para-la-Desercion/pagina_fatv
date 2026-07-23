import { useState, useRef } from "react";
import "boxicons";
import FotoVideo from "../../../../public/img_Foundation/foto-video.jpg";
import Foundation1 from "../../../../public/img_Foundation/foundation-1.jpg";
import Foundation2 from "../../../../public/img_Foundation/foundation-2.jpg";
import BannerFoundation from "../../../assets/images/views/foundation/banner-foundation.webp";
import TeoriaCambio from "../../../assets/images/views/foundation/entrega-pc.webp";
import Valores from "../../../assets/images/views/foundation/valores.webp";
import Mision from "../../../assets/images/views/foundation/pase-a-la-u.webp";
import Publico from "../../../assets/images/views/foundation/estudiantes-colegio.webp";
import Vision from "../../../assets/images/views/foundation/estudiantes-universitarios.webp";
import Proposito from "../../../assets/images/views/foundation/foundation-estudiantes.webp";

import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import BannerView from "../../../components/Banner-views/BannerView";
import OrganizationInfoSection from "./OrganizationInfoSection";

const INFO_SECTIONS = [
  {
    image: TeoriaCambio,
    imgAlt: "Teoría de cambio",
    bgColor: "bg-[#CCEDE8]",
    titleKey: "foundation.foundationATV.organization_info.change_theory.title",
    descKey: "foundation.foundationATV.organization_info.change_theory.description",
    reverse: false,
    showTopDecorator: true,
  },
  {
    image: Valores,
    imgAlt: "Valores",
    bgColor: "bg-[#D3C3E3]",
    titleKey: "foundation.foundationATV.organization_info.values.title",
    descKey: "foundation.foundationATV.organization_info.values.description",
    reverse: true,
  },
  {
    image: Mision,
    imgAlt: "Misión",
    bgColor: "bg-primary-yellow",
    titleKey: "foundation.foundationATV.organization_info.mission.title",
    descKey: "foundation.foundationATV.organization_info.mission.description",
    reverse: false,
  },
  {
    image: Publico,
    imgAlt: "Público objetivo",
    bgColor: "bg-[#CCEDE8]",
    titleKey: "foundation.foundationATV.organization_info.target_audience.title",
    descKey: "foundation.foundationATV.organization_info.target_audience.description",
    reverse: true,
  },
  {
    image: Vision,
    imgAlt: "Visión",
    bgColor: "bg-[#D3C3E3]",
    titleKey: "foundation.foundationATV.organization_info.vision.title",
    descKey: "foundation.foundationATV.organization_info.vision.description",
    reverse: false,
    wide: true,
  },
  {
    image: Proposito,
    imgAlt: "Propósito",
    bgColor: "bg-primary-yellow",
    titleKey: "foundation.foundationATV.organization_info.purpose.title",
    descKey: "foundation.foundationATV.organization_info.purpose.description",
    reverse: true,
    wide: true,
    showDecorator: false,
  },
];

const PRIORITY_KEYS = [
  "consolidate_model",
  "explore_interventions",
  "involve_actors",
  "reduce_dropout",
];

const expandableTransition = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

function FoundationATV() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSectionRef = useRef(null);
  const isVideoInView = useInView(videoSectionRef, { once: true, amount: 0.4 });

  return (
    <div className="relative w-full">
      <BannerView
        imagesBannerMap={{
          image: BannerFoundation,
          keyAlt: "foundation.banner.alt",
          keyH1: "foundation.banner.h1",
        }}
      />

      <div className="text-blue-base m-8 md:m-12 md:p-16">
        <div className="flex flex-col gap-5 items-end md:flex-row md:flex-wrap md:justify-between">
          <div className="w-full md:w-[calc(60%-70px)]">
            <p className="text-base md:text-lg text-primary-purple uppercase font-impact text-center md:text-left mt-4">
              {t("foundation.foundationATV.title")}
            </p>
            <h4 className="lineSubtitle font-impact text-4xl md:text-5xl leading-[.92] uppercase">
              {t("foundation.foundationATV.subtitle")}
            </h4>
          </div>
          <div className="w-full text-center mt-4 text-base sm:px-0 md:w-2/5 md:text-start md:mt-0">
            <p className="text-lg md:text-xl text-justify">
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
          animate={isVideoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img className="w-full object-cover" src={Foundation1} alt="" loading="lazy" />
        </motion.div>
        <motion.div
          className="relative z-10 flex justify-center items-center hover:cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVideoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className={isPlaying ? "hidden" : "absolute inset-0 w-full h-full object-cover shadow-2xl"}
            src={FotoVideo}
            alt=""
            loading="lazy"
          />
          {!isPlaying && (
            <button
              id="play-button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex justify-center items-center w-full h-full"
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
              />
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
          />
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={isVideoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img className="w-full object-cover relative right-10" src={Foundation2} alt="" loading="lazy" />
        </motion.div>
      </section>

      <section className="relative mb-14">
        {INFO_SECTIONS.map((section) => (
          <OrganizationInfoSection key={section.titleKey} {...section} />
        ))}
      </section>

      <section className="grid grid-cols-1 m-5 gap-10 md:grid md:grid-cols-4 md:gap-5 md:mb-28 md:mt-28 md:m-10 items-stretch">
        <h5 className="col-span-1 md:col-span-4 text-3xl md:text-5xl font-impact text-center text-blue-base mb-8">
          {t("foundation.foundationATV.organization_info.priorities.title")}
        </h5>
        {PRIORITY_KEYS.map((key, i) => (
          <motion.div key={key} {...expandableTransition}>
            <div className="relative flex flex-wrap justify-center items-center rounded-xl bg-dark-blue p-6 hover:-translate-y-2 transition-transform duration-300 h-full">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-yellow text-dark-blue font-bold w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md">
                {i + 1}
              </span>
              <p className="text-base md:text-lg text-justify mt-9 text-white">
                {t(`foundation.foundationATV.organization_info.priorities.items.${key}`)}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default FoundationATV;
