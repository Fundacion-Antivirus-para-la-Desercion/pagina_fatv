import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSchool } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { PiMedal } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";
import data from "./data";

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

        <section>
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
              className="mt-8 max-w-5xl mx-auto bg-dark-blue rounded-2xl shadow-lg p-10 m-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl text-white bg-[#f6f6f61e] rounded-2xl p-5">
                  {icons[activeProject.card.icon]}
                </span>
                <h3 className="text-4xl font-impact text-white">
                  {t(activeProject.card.title)}
                </h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                {t(activeProject.card.description)}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {activeProject.card.stats.map((stat, i) => (
                  <div key={i} className="bg-[#f6f6f61e] rounded-2xl p-5">
                    <p className="text-4xl font-bold text-white font-impact">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        <section className="text-center">
          <h4 className="text-4xl text-dark-blue font-impact">
            INSTITUCIONES ALIADAS
          </h4>
          <div className="flex items-center justify-center gap-5 mt-5">
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

        <section className="flex flex-col flex-wrap md:flex-row p-5 mt-10">
          {activeProject.cardLeader &&
            activeProject.cardLeader.map((leader, index) => (
              <div className="flex flex-col md:flex-row md:text-left m-5 gap-5 bg-white rounded-2xl shadow-2xl p-5 max-w-3xl mx-auto border-t-[7px] border-primary-yellow">
                <div className="relative flex flex-col items-center md:flex-grow">
                  <img
                    key={index}
                    src={leader.photo}
                    alt={t(leader.name)}
                    className="w-52 md:w-64 object-cover mb-5 md:mb-0 rounded-full border-4 border-primary-yellow"
                  />

                  <PiMedal className="absolute text-4xl text-dark-blue bottom-0 md:right-5  bg-primary-yellow rounded-full p-1" />
                </div>
                <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-2xl text-dark-blue font-extrabold">
                    {leader.name}
                  </span>
                  <p className="text-lg text-dark-blue">{leader.department}</p>
                  <p className="text-base text-blue-base mt-3">
                    {leader.description}
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
                    <div className="flex items-center gap-2 text-dark-blue hover:text-primary-yellow transition-colors">
                      <HiOutlineMail className="text-lg" />
                      <a href={`mailto:${leader.email}`} className="text-base">
                        {leader.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-dark-blue hover:text-primary-yellow transition-colors">
                      <IoLogoLinkedin className="text-lg inline-block" />
                      <a
                        href={`https://www.linkedin.com/in/${leader.userLinkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base flex items-center gap-1"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </section>
    </>
  );
}

export default ProjectsAndTeams;
