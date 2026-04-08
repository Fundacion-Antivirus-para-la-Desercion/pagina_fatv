import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PiMedal } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import Javi from "../../assets/images/views/javi/javi-guina-el-ojo.svg";

const Teams = ({ activeProject }) => {
  const { t } = useTranslation();

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

  return (
    <section>
      <div className="flex items-center justify-center mt-12 md:mt-10 gap-2 m-5 md:m-0">
        <motion.div {...floatSnake()}>
          <img
            className="h-20 md:h-28 drop-shadow-[0px_0px_6px_rgba(255,186,8,1)]"
            src={Javi}
            alt="Javi Guinando"
          />
        </motion.div>
        <h6 className="text-3xl md:text-5xl m-5 text-blue-base text-center font-impact">
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
  );
};

export default Teams;
