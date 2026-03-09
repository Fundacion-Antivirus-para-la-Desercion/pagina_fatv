import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSchool } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { PiMedal } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";
import { TiHeart } from "react-icons/ti";
import Javi from "../../../assets/images/views/javi/javi-guina-el-ojo.svg";
import JaviEsquina from "../../../assets/images/views/javi/javi-esquina-derecha.webp";

import { motion, AnimatePresence } from "framer-motion";
import data from "./data";
import { getPosition } from "@tsparticles/engine";

function ProjectsAndTeams() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);

  const icons = {
    LuGraduationCap: <LuGraduationCap />,
    FaSchool: <FaSchool />,
    IoMdCode: <IoMdCode />,
    PiMedal: <PiMedal />,
    HiOutlineMail: <HiOutlineMail />,
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.96, y: -20 },
  };

  const floatSnake = (delay = 0) => ({
    initial: { y: -5 },
    animate: { y: [0, -20, 0] },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
      delay,
    },
  });

  const activeProject = data[activeIndex];

  return (
    <>
      <section className="relative pt-10 md:pt-14">
        <img
          className="absolute h-[200px] md:h-[340px] mx-auto right-0 top-52 md:-top-16 z-0"
          src={JaviEsquina}
          alt=""
        />

        <div className="hidden lg:block">
          <motion.div
            {...floatSnake(0)}
            className="absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full top-10 left-5"
          ></motion.div>

          <motion.div
            {...floatSnake(0)}
            className="absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full top-44 left-44"
          ></motion.div>
        </div>
        <div className="relative text-center">
          <span className="text-lg text-primary-yellow font-impact">
            {t("socialIntervention.projectsAndTeams.span")}
          </span>
          <h2 className="text-4xl md:text-5xl text-dark-blue font-impact">
            {t("socialIntervention.projectsAndTeams.title")}
          </h2>
          <p className="text-lg text-blue-base p-5 mt-5 text-center max-w-3xl mx-auto">
            {t("socialIntervention.projectsAndTeams.description")}
          </p>
        </div>

        <section className="p-3">
          <div className="flex-col md:flex-row flex items-center justify-center mt-10 gap-3 md:gap-5">
            {data.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex bg-[#E6E7ED] items-center rounded-2xl p-3 group hover:scale-105 transition-transform duration-500 cursor-pointer hover:bg-dark-blue text-dark-blue hover:text-white ${activeIndex === index ? "bg-dark-blue text-white" : ""}`}
              >
                <span className="text-2xl mr-2 ">{icons[project.icon]}</span>
                <span className="text-lg  ">{t(project.name)}</span>
              </button>
            ))}
          </div>
          {/* Card projects */}

          <section className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-2 md:mt-10 gap-5 mb-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative mt-8 max-w-3xl mx-auto bg-dark-blue rounded-3xl shadow-lg z-10 p-8"
              >
                <div
                  className="absolute inset-0 z-1 rounded-3xl"
                  style={{
                    backgroundImage: `
        linear-gradient(to right, #2F3863 1px, transparent 1px),
        linear-gradient(to bottom, #2F3863 1px, transparent 1px)
      `,
                    backgroundSize: "48px 48px, 48px 48px",
                  }}
                />
                <div className="relative flex items-center gap-3 mb-5">
                  <span className="text-4xl text-white bg-[#f6f6f650] rounded-2xl p-5">
                    {icons[activeProject.card.icon]}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-impact text-white">
                    {t(activeProject.card.title)}
                  </h3>
                </div>
                <p className="relative text-white text-lg leading-relaxed text-center md:text-left mt-10">
                  {t(activeProject.card.description)}
                </p>
                <div className="relative mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                  {activeProject.card.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center rounded-2xl bg-[#f6f6f650] p-5 sm:p-6 border-2 border-white/10 hover:border-white/50 transition-colors duration-300"
                    >
                      <p className="text-3xl sm:text-4xl text-white font-impact leading-none">
                        {stat.value}
                      </p>

                      <p className="mt-2 text-sm text-white/80 max-w-[140px]">
                        {t(stat.label)}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Card allies */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center"
              >
                <h4 className="text-3xl md:text-4xl text-dark-blue font-impact"></h4>
                <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
                  {activeProject.cardAllies &&
                    activeProject.cardAllies.map((ally, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2  bg-white p-5 rounded-2xl shadow-2xl  z-10 hover:scale-105 transition-all duration-500 hover:border-t-primary-yellow hover:border-t-[7px]"
                      >
                        <img
                          src={ally.logo}
                          alt={t(ally.name)}
                          className="h-16 md:h-20 object-contain"
                        />
                      </div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
            <motion.div
              {...floatSnake(0)}
              className="hidden md:block absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full -bottom-5 left-5"
            ></motion.div>

            <motion.div
              {...floatSnake(0)}
              className="hidden md:block absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full -bottom-24 left-5"
            ></motion.div>
          </section>
        </section>
        {activeProject.cardProjectLeader &&
          activeProject.cardProjectLeader.length > 0 && (
            <section>
              <div className="flex items-center justify-center mt-12 md:mt-10 gap-2 m-5 md:m-0">
                <motion.div {...floatSnake()}>
                  <img
                    className="h-20 md:h-28 drop-shadow-[0px_0px_6px_rgba(255,186,8,1)]"
                    src={Javi}
                    alt="Javi Guinando"
                  />
                </motion.div>
                <h6 className="text-3xl md:text-5xl m-5 text-dark-blue text-center font-impact">
                  {t("socialIntervention.projectsAndTeams.leaders.title")}
                </h6>
              </div>

              {/* Card leaders */}
              <section className="relative grid grid-cols-1 xl:grid-cols-[3fr_7fr] gap-4 lg:gap-8 p-4 lg:p-12 items-center mb-10">
                <div className="z-10 flex flex-col">
                  {activeProject.cardProjectLeader &&
                    activeProject.cardProjectLeader.map((leader, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-t-[8px] border-primary-yellow w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-300"
                      >
                        <p className="text-sm md:text-lg font-bold text-primary-yellow uppercase tracking-wider mb-4 text-center md:text-left">
                          {t(leader.position)}
                        </p>

                        <div className="relative w-fit mx-auto mb-6">
                          <img
                            src={leader.photo}
                            alt={t(leader.alt)}
                            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-primary-yellow shadow-md"
                          />
                          <div className="absolute bottom-2 right-2 bg-primary-yellow p-2 rounded-full shadow-lg">
                            <PiMedal className="text-2xl md:text-3xl text-dark-blue" />
                          </div>
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <span className="text-2xl md:text-3xl text-dark-blue font-extrabold leading-tight">
                            {leader.name}
                          </span>
                          <p className="text-lg text-primary-yellow font-medium mt-1">
                            {t(leader.department)}
                          </p>
                          <p className="text-base text-blue-base mt-4">
                            {t(leader.description)}
                          </p>

                          <div className="flex flex-col md:flex-row md:flex-wrap gap-3 mt-8 pt-6 border-t border-gray-100">
                            <a
                              href={`mailto:${leader.email}`}
                              className="flex items-center justify-center md:justify-start gap-1 text-dark-blue hover:text-primary-yellow transition-colors group"
                            >
                              <HiOutlineMail className="text-2xl group-hover:scale-110 transition-transform" />
                              <span className="text-sm md:text-base break-all font-semibold">
                                Email
                              </span>
                            </a>
                            <a
                              href={`https://www.linkedin.com/in/${leader.userLinkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center md:justify-start gap-1 text-dark-blue hover:text-primary-yellow transition-colors group"
                            >
                              <IoLogoLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                              <span className="text-sm md:text-base font-semibold">
                                LinkedIn
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div
                  className={`mt-16 lg:mt-0 relative z-10 bg-dark-blue grid gap-4 md:gap-6 h-fit px-5 py-6 rounded-3xl shadow-lg min-w-0 ${
                    activeProject.cardAreaLead?.length === 1
                      ? "grid-cols-1 place-items-center"
                      : "grid-cols-1 xl:grid-cols-2"
                  }`}
                >
                  <div
                    className="absolute inset-0 z-1 rounded-3xl mt-2"
                    style={{
                      backgroundImage: `
        linear-gradient(to right, #2F3863 1px, transparent 1px),
        linear-gradient(to bottom, #2F3863 1px, transparent 1px)
      `,
                      backgroundSize: "48px 48px, 48px 48px",
                    }}
                  />
                  {activeProject.spanAreaLeaders && (
                    <span className="absolute -top-10 md:-top-12 left-1 text-xl md:text-3xl text-dark-blue font-impact bg-primary-yellow p-2 -rotate-1 md:-rotate-2 rounded-xl">
                      {t(
                        activeProject.spanAreaLeaders.find(
                          (spanAreaLeaders) => spanAreaLeaders.span,
                        ).span,
                      )}
                    </span>
                  )}
                  {activeProject.cardAreaLead &&
                    activeProject.cardAreaLead.map((leader, index) => (
                      <div
                        key={index}
                        className="relative flex flex-col p-6 bg-white rounded-2xl shadow-lg border-t-[7px] border-primary-yellow  hover:scale-105 transition-transform duration-300 max-w-md w-full mx-auto min-w-0"
                      >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                          <img
                            src={leader.photo}
                            alt={t(leader.alt)}
                            className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-2 border-gray-100 shadow-sm"
                          />
                          <div className="text-center md:text-left break-words">
                            <span className="text-xl font-extrabold text-dark-blue leading-tight">
                              {t(leader.name)}
                            </span>
                            <p className="text-base font-bold text-primary-yellow mt-1">
                              {t(leader.areaLeader)}
                            </p>
                            <p className="text-base text-blue-base mt-3 opacity-90">
                              {t(leader.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <motion.div
                  {...floatSnake(0)}
                  className="absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full top-0 right-5"
                ></motion.div>
                <motion.div
                  {...floatSnake(0)}
                  className="absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full top-20 right-5"
                ></motion.div>
                <motion.div
                  {...floatSnake(0)}
                  className="absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full -bottom-5 left-16"
                ></motion.div>

                <motion.div
                  {...floatSnake(0)}
                  className="absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full -bottom-16 left-5"
                ></motion.div>
              </section>
            </section>
          )}
      </section>
    </>
  );
}

export default ProjectsAndTeams;
