import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projectsData } from "./data";

function ProjectsAndTeams() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

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
            {projectsData.map((project, index) => (
              <button
                key={index}
                className="flex bg-[#E6E7ED] items-center mb-4 rounded-2xl p-3 group hover:scale-105 transition-transform duration-500 cursor-pointer hover:bg-dark-blue"
              >
                <span className="text-2xl mr-2 text-dark-blue group-hover:text-white">
                  {project.icon}
                </span>
                <span className="text-lg text-dark-blue group-hover:text-white ">
                  {project.name}
                </span>
              </button>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default ProjectsAndTeams;
