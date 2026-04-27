import { useState } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { IoCodeSlash } from "react-icons/io5";
import { techStackTools, techTabs } from "./data.js";

const iconMap = {
  powerbi: <Icon icon="logos:microsoft-power-bi" />,
  python: <Icon icon="logos:python" />,
  react: <Icon icon="logos:react" />,
  typescript: <Icon icon="skill-icons:typescript" />,
  supabase: <Icon icon="devicon:supabase" />,
  sql: <Icon icon="tdesign:data-filled" color="#6A5E9E" />,
  tailwind: <Icon icon="fluent-emoji-flat:artist-palette" />,
  excel: <Icon icon="streamline-plump-color:graph-bar-increase-flat" />,
  figma: <Icon icon="logos:figma" />,
  git: <Icon icon="devicon:git" />,
  automation: <Icon icon="arcticons:microsoft-power-automate" />,
  github: <Icon icon="mdi:github" />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
};

function TechStack() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  const filteredTools =
    activeTab === "all"
      ? techStackTools
      : techStackTools.filter((tool) => tool.category === activeTab);

  return (
    <section id="tech-stack" className="bg-[#F6F6F6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-3xl bg-[#E6E7ED] px-5 py-2 text-sm md:text-base text-blue-base">
            <IoCodeSlash className="text-base" />
            {t("dataAnalytics.stack.badge")}
          </span>

          <h2 className="mt-5 font-impact text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="text-blue-base">
              {t("dataAnalytics.stack.title")}{" "}
            </span>
            <span className="text-primary-yellow">
              {t("dataAnalytics.stack.titleHighlight")}
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14">
          {techTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-3xl border px-5 py-3 text-sm md:text-lg transition-all duration-500 ease-out ${
                activeTab === tab.id
                  ? "border-dark-blue bg-dark-blue text-white shadow-lg shadow-dark-blue/20"
                  : "cursor-pointer border-transparent bg-[#E6E7ED] text-dark-blue hover:scale-105 hover:bg-primary-yellow"
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6"
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={cardVariants}
                className="group relative min-h-[180px] cursor-pointer rounded-3xl border-2 border-white bg-white px-6 py-7 text-center shadow-md transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="absolute right-5 top-4 text-xs font-semibold text-slate-200">
                  {tool.version}
                </span>

                <div className="flex h-full flex-col items-center justify-center">
                  <div className="mb-5 text-4xl transition-transform duration-500 ease-out group-hover:scale-110">
                    {iconMap[tool.icon]}
                  </div>

                  <h3 className="text-lg md:text-xl font-extrabold text-dark-blue">
                    {tool.name}
                  </h3>

                  <p className="mt-3 text-xs  md:text-sm font-semibold uppercase tracking-[0.24em] text-blue-base/70">
                    {t(tool.categoryLabelKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.section>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TechStack;
