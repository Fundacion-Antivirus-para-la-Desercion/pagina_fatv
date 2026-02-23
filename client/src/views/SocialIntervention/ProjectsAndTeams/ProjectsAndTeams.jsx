import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSchool } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { PiMedal } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import data from "./data";

function ProjectsAndTeams() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);

  const icons = {
    LuGraduationCap: <LuGraduationCap />,
    FaSchool: <FaSchool />,
    IoMdCode: <IoMdCode />,
    PiMedal: <PiMedal />,
  };

  const activeProject = data[activeIndex];

  return (
    <>
      <section className="mt-10">
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

          <div
            key={activeIndex}
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
          </div>
        </section>
      </section>
    </>
  );
}

export default ProjectsAndTeams;
