import { useState, useRef } from "react";
import "boxicons";
import {
  BANNER_FOUNDATION_IMG as BannerFoundation,
  FOTO_VIDEO as FotoVideo,
  FOTO_IZQUIERDA as Foundation1,
  FOTO_DERECHA as Foundation2,
} from "../../../assets/cloudinaryImages";

import FoundationIdentity from "./FoundationIdentity";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import BannerView from "@/components/BannerView/BannerView.jsx";

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
          animate={
            isVideoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            className="w-full object-cover"
            src={Foundation1}
            alt=""
            loading="lazy"
          />
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
                ? "hidden"
                : "absolute inset-0 w-full h-full object-cover shadow-2xl"
            }
            src={FotoVideo}
            alt=""
            loading="lazy"
          />
          {!isPlaying && (
            <button
              id="play-button"
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={t("foundation.foundationATV.play_video")}
              title={t("foundation.foundationATV.play_video")}
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
          <img
            className="w-full object-cover relative right-10"
            src={Foundation2}
            alt=""
            loading="lazy"
          />
        </motion.div>
      </section>

      <FoundationIdentity />
    </div>
  );
}

export default FoundationATV;
