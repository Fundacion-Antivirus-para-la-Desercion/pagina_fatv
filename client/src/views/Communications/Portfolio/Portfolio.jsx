import { useState } from "react";
import { useTranslation } from "react-i18next";
import data from "./data.js";

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
    <section className="p-5 md:p-10 lg:p-14">
      <div className="text-center md:text-left">
        {" "}
        <span className="text-xl text-primary-yellow font-impact">
          PORTAFOLIO
        </span>
        <h5 className="text-3xl md:text-5xl text-blue-base font-impact">
          NUESTRAS PIEZAS
        </h5>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center mt-10 gap-3 md:gap-5">
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
    </section>
  );
}

export default Portfolio;
