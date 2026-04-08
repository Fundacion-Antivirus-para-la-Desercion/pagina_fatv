import { useState } from "react";
import { useTranslation } from "react-i18next";
import data from "./data.js";
import { motion, AnimatePresence } from "framer-motion";
import { expandableTransition } from "../../../components/motion/constants/Animations.js";

function Portfolio() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section className="p-5 md:p-10 lg:p-14 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-start">
      <div className="text-center md:text-left">
        <span className="text-xl text-primary-yellow font-impact">
          PORTAFOLIO
        </span>
        <h5 className="text-3xl md:text-5xl text-blue-base font-impact">
          NUESTRAS PIEZAS
        </h5>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-end mt-10 gap-3 md:gap-5">
        {data.map((portfolio, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex bg-[#E6E7ED] items-center rounded-3xl p-3 group hover:scale-105 transition-transform duration-500 cursor-pointer hover:bg-primary-yellow text-dark-blue ${activeIndex === index ? "bg-primary-yellow" : ""}`}
          >
            <span className="text-sm md:text-lg">{t(portfolio.title)}</span>
          </button>
        ))}
      </div>

      {activeIndex === 0 ? (
        <section className="col-span-2 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-5 mb-5">
          {data
            .filter((item) => item.image)
            .map((item) => (
              <motion.div {...expandableTransition(0)}
                key={item.id}
                className={`relative overflow-hidden rounded-2xl shadow-2xl group ${
                  item.colSpan === 2 ? "md:col-span-2" : "col-span-1"
                } ${
                  item.rowSpan === 2 ? "md:row-span-2" : "row-span-1"
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
                <span className="absolute top-4 left-4 z-20 text-white text-sm md:text-base font-bold bg-blue-base/70 rounded-3xl px-4 py-2 whitespace-nowrap">
                  {t(item.title)}
                </span>
              </motion.div>
            ))}
        </section>
      ) : (
        activeProject.image && (
          <div className="flex items-center justify-center mt-2 md:mt-10 mb-5">
            <motion.div {...expandableTransition(0)} className="relative inline-block">
              <img
                src={activeProject.image}
                alt=""
                className="max-w-full h-auto rounded-2xl shadow-2xl object-contain"
              />
              <span className="absolute top-4 left-4 z-20 text-white text-sm md:text-base font-bold bg-blue-base/70 rounded-3xl px-4 py-2 whitespace-nowrap">
                {t(activeProject.title)}
              </span>
            </motion.div>
          </div>
        )
      )}
    </section>
  );
}

export default Portfolio;
