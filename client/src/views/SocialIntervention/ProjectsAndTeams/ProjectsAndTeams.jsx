import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSchool } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { PiMedal } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";
import Javi from "../../../assets/images/views/javi/javi-guina-el-ojo.svg";

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
      <section className="pt-10 md:pt-14 bg-[#f6f6f6]">
        <div className="text-center">
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

        <section className="p-3 md:p-0">
          <div className="flex-col md:flex-row flex items-center justify-center mt-10 gap-1 md:gap-5">
            {data.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="flex bg-[#E6E7ED] items-center mb-4 rounded-2xl p-3 group hover:scale-105 transition-transform duration-500 cursor-pointer hover:bg-dark-blue"
              >
                <span className="text-2xl mr-2 text-dark-blue group-hover:text-white">
                  {icons[project.icon]}
                </span>
                <span className="text-lg text-dark-blue group-hover:text-white ">
                  {t(project.name)}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-8 max-w-3xl mx-auto bg-dark-blue rounded-2xl shadow-lg p-10 m-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl text-white bg-[#f6f6f61e] rounded-2xl p-5">
                  {icons[activeProject.card.icon]}
                </span>
                <h3 className="text-4xl font-impact text-white">
                  {t(activeProject.card.title)}
                </h3>
              </div>
              <p className="text-white text-lg leading-relaxed text-center md:text-left m-5">
                {t(activeProject.card.description)}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {activeProject.card.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#f6f6f61e] rounded-2xl p-5 items-center justify-center flex flex-col"
                  >
                    <p className="text-2xl md:text-4xl font-bold text-white font-impact">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-white">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        <section className="text-center">
          <h4 className="text-3xl md:text-4xl text-dark-blue font-impact">
            
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {activeProject.cardAllies &&
              activeProject.cardAllies.map((ally, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2  bg-white p-5 rounded-2xl shadow-2xl"
                >
                  <img
                    src={ally.logo}
                    alt={t(ally.name)}
                    className="h-20 object-contain"
                  />
                </div>
              ))}
          </div>
        </section>

        <div className="flex items-center justify-center mt-10">
          <motion.div {...floatSnake()}>
            <img className="h-24" src={Javi} alt="Javi Guinando" />
          </motion.div>
          <h6 className="text-3xl md:text-5xl text-dark-blue text-center font-impact m-10">
            {t("socialIntervention.projectsAndTeams.leaders.title")}
          </h6>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 p-4 md:p-16 items-start">
          <div className="flex flex-col">
            {activeProject.cardProjectLeader &&
              activeProject.cardProjectLeader.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-t-[8px] border-primary-yellow w-full max-w-lg mx-auto"
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

                    <div className="flex flex-col w-full gap-3 mt-8 pt-6 border-t border-gray-100">
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center justify-center md:justify-start gap-3 text-dark-blue hover:text-primary-yellow transition-colors group"
                      >
                        <HiOutlineMail className="text-xl group-hover:scale-110 transition-transform" />
                        <span className="text-sm md:text-base break-all font-semibold">
                          {leader.email}
                        </span>
                      </a>
                      <a
                        href={`https://www.linkedin.com/in/${leader.userLinkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center md:justify-start gap-3 text-dark-blue hover:text-primary-yellow transition-colors group"
                      >
                        <IoLogoLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                        <span className="text-sm md:text-base font-semibold">
                          LinkedIn
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="bg-[#E6E7ED] grid grid-cols-1 md:grid-cols-2 gap-6 h-fit p-16 rounded-3xl shadow-lg">
            {activeProject.cardAreaLead &&
              activeProject.cardAreaLead.map((leader, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white rounded-2xl shadow-lg border-t-[7px] border-dark-blue hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center md:items-start gap-4">
                    <img
                      src={leader.photo}
                      alt={t(leader.alt)}
                      className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-2 border-gray-100 shadow-sm"
                    />
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-extrabold text-dark-blue leading-tight">
                        {t(leader.name)}
                      </h4>
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
        </section>
      </section>
    </>
  );
}

export default ProjectsAndTeams;
