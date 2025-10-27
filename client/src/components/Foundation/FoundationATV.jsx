import  { useState, useRef } from "react";
import "boxicons";
import imgFB from "../../../public/img_Foundation/imgF.webp";
import FotoVideo from "../../../public/img_Foundation/foto-video.jpg";
import Foundation1 from "../../../public/img_Foundation/foundation-1.jpg";
import Foundation2 from "../../../public/img_Foundation/foundation-2.jpg";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

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
  const isCardsInView = useInView(cardsContainerRef, { once: true, amount: 0.2 });
  const isPrioritiesInView = useInView(prioritiesRef, { once: true, amount: 0.3 });
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  // Card container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  
  // List item variants for staggered animations
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };


  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <img
          src={imgFB}
          alt="Banner"
          className="w-full h-[69vh] object-cover object-[0_33%]"
        />
        <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
        <h1 className="absolute inset-0 flex items-center justify-center font-impact text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          {t("foundation.foundationATV.header")}
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

      <div className="aboutUs">
        <div className="aboutUs-content">
          <div className="left-content">
            <p className="title">{t("foundation.foundationATV.title")}</p>
            <h4 className="lineSubtitle font-impact text-[3em] leading-[.92] uppercase">
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
        className="md:grid md:grid-cols-[25%_50%_25%] p-5 items-stretch"
      >
        <motion.div
          className="hidden md:block relative left-10"
          initial={{ opacity: 0, x: -30 }}
          animate={isVideoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img className="w-full object-cover" src={Foundation1} alt="" />
        </motion.div>
        <motion.div
          className="relative z-10 flex justify-center items-center hover:cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVideoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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
            className="shadow-2xl"
            width="100%"
            height="100%"
            src={
              isPlaying
                ? "https://www.youtube.com/embed/XhpGyJ02Guc?autoplay=1&mute=0"
                : "https://www.youtube.com/embed/XhpGyJ02Guc"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

      <div className="flex justify-center mt-28 mb-10">
        <motion.div
          ref={cardsContainerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
          className="w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-14 text-justify"
        >
          <motion.div variants={fadeInUp}>
            <div className="rounded-lg border border-gray-200 p-6 shadow-xl">
              <h5 className="text-left text-4xl font-impact text-[#33526d] mb-4">
                {t(
                  "foundation.foundationATV.organization_info.change_theory.title"
                )}
              </h5>
              <p className="text-base text-[#33526d]">
                {t(
                  "foundation.foundationATV.organization_info.change_theory.description"
                )}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="rounded-lg border border-gray-200 p-6 shadow-xl">
              <h5 className="text-4xl font-impact text-[#33526d] mb-4">
                {t("foundation.foundationATV.organization_info.values.title")}
              </h5>
              <p className="text-base text-[#33526d]">
                {t(
                  "foundation.foundationATV.organization_info.values.description"
                )}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="rounded-lg border border-gray-200 p-6 shadow-xl">
              <h5 className="text-4xl font-impact text-[#33526d] mb-4">
                {t("foundation.foundationATV.organization_info.mission.title")}
              </h5>
              <p className="text-base text-[#33526d]">
                {t(
                  "foundation.foundationATV.organization_info.mission.description"
                )}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="rounded-lg border border-gray-200 p-6 shadow-xl">
              <h5 className="text-4xl font-impact text-[#33526d] mb-4">
                {t(
                  "foundation.foundationATV.organization_info.target_audience.title"
                )}
              </h5>
              <p className="text-base text-[#33526d]">
                {t(
                  "foundation.foundationATV.organization_info.target_audience.description"
                )}
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={visionRef}
            variants={fadeInUp}
            className="rounded-lg border border-gray-200 bg-[#32526E] p-8 shadow-xl col-span-full"
          >
            <h5 className="text-4xl font-impact text-white mb-4">
              {t("foundation.foundationATV.organization_info.vision.title")}
            </h5>
            <p className="text-base text-white">
              {t(
                "foundation.foundationATV.organization_info.vision.description"
              )}
            </p>
          </motion.div>

          <motion.div
            ref={purposeRef}
            variants={fadeInUp}
            className="rounded-lg border border-gray-200 p-8 shadow-xl col-span-full"
          >
            <h5 className="text-4xl font-impact text-[#33526d] mb-4">
              {t("foundation.foundationATV.organization_info.purpose.title")}
            </h5>
            <p className="text-base text-[#33526d]">
              {t(
                "foundation.foundationATV.organization_info.purpose.description"
              )}
            </p>
          </motion.div>

          <motion.div
            ref={prioritiesRef}
            initial="hidden"
            animate={isPrioritiesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="rounded-lg border border-gray-200 p-6 shadow-xl col-span-full"
          >
            <h5 className="text-4xl font-impact text-[#33526d] mb-8">
              {t("foundation.foundationATV.organization_info.priorities.title")}
            </h5>
            <ul className="text-base text-[#33526d] pl-5 list-none font-sans">
              <motion.li variants={listItemVariants} className="flex items-center mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFBA08] text-[#32526E] font-bold flex items-center justify-center text-base mr-4">
                  1
                </span>
                {t(
                  "foundation.foundationATV.organization_info.priorities.items.consolidate_model"
                )}
              </motion.li>
              <motion.li variants={listItemVariants} className="flex items-center mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFBA08] text-[#32526E] font-bold flex items-center justify-center text-base mr-4">
                  2
                </span>
                {t(
                  "foundation.foundationATV.organization_info.priorities.items.explore_interventions"
                )}
              </motion.li>
              <motion.li variants={listItemVariants} className="flex items-center mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFBA08] text-[#32526E] font-bold flex items-center justify-center text-base mr-4">
                  3
                </span>
                {t(
                  "foundation.foundationATV.organization_info.priorities.items.involve_actors"
                )}
              </motion.li>
              <motion.li variants={listItemVariants} className="flex items-center mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFBA08] text-[#32526E] font-bold flex items-center justify-center text-base mr-4">
                  4
                </span>
                {t(
                  "foundation.foundationATV.organization_info.priorities.items.reduce_dropout"
                )}
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default FoundationATV;
