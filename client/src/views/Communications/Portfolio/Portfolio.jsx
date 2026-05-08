import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import data from "./data.js";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdEye } from "react-icons/io";
import { IoSearchCircle, IoCloseCircle } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Portfolio() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState({ images: [], index: null });

  const cardVariants = {
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

  const childVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
  };

  const activeProject = data[activeIndex];

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox({ images: [], index: null });
  const prevImage = () =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index - 1 + lb.images.length) % lb.images.length,
    }));
  const nextImage = () =>
    setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.images.length }));

  useEffect(() => {
    if (lightbox.index === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox.index]);

  return (
    <section
      id="portfolio"
      className="p-5 md:p-10 lg:p-14 grid grid-cols-1 md:grid-cols-[4fr_6fr] auto-rows-mins gap-5 md:gap-10 items-start"
    >
      <div className="text-center md:text-left">
        <span className="text-xl text-primary-yellow font-impact">
          {t("communications.portfolio.span")}
        </span>
        <h5 className="text-3xl md:text-5xl text-blue-base font-impact">
          {t("communications.portfolio.title")}
        </h5>
      </div>

      <div className="col-span-full md:col-span-1 flex flex-row flex-wrap items-center justify-center mt-10 gap-3 md:gap-5">
        {data.map((portfolio, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex bg-[#E6E7ED] items-center rounded-3xl p-3 group hover:scale-105 transition-transform duration-500 cursor-pointer hover:bg-primary-yellow text-dark-blue ${activeIndex === index ? "bg-primary-yellow" : ""}`}
          >
            <span className="text-sm md:text-lg min-w-14">
              {t(portfolio.title)}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeIndex === 0 ? (
          <motion.section
            id="all-portfolio"
            key="grid"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            className="col-span-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] md:auto-rows-[250px] gap-5 mb-5"
          >
              {data
                .filter((item) => item.image)
                .map((item) => (
                <motion.div
                  variants={childVariants}
                  key={item.id}
                  className={`relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer ${
                    item.colSpan === 2 ? "md:col-span-2" : "col-span-1"
                  } ${item.rowSpan === 2 ? "md:row-span-2" : "row-span-1"}`}
                  onClick={() => setActiveIndex(item.id)}
                >
                  <img
                    src={item.image}
                    alt={t(item.title)}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <span className="absolute top-4 left-4 z-20 text-white text-sm md:text-base font-bold bg-blue-base/60 rounded-3xl px-4 py-2 whitespace-nowrap">
                    {t(item.title)}
                  </span>
                  <div className="absolute inset-0 bg-dark-blue bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                    <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <IoMdEye className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.section>
        ) : (
          activeProject.images?.length > 0 && (
            <motion.section
              id="portfolio-details"
              key={activeIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] md:auto-rows-[250px] gap-5 mb-5"
            >
              {activeProject.images.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={childVariants}
                  className={`relative rounded-2xl group cursor-pointer overflow-hidden shadow-2xl ${
                    item.colSpan === 2 ? "md:col-span-2" : "col-span-1"
                  } ${
                    item.rowSpan === 2 ? "md:row-span-2" : "row-span-1"
                  }`}
                  onClick={() =>
                    openLightbox(
                      activeProject.images.map((i) => i.src),
                      idx,
                    )
                  }
                >
                  <img
                    src={item.src}
                    alt={`${t(activeProject.title)} ${idx + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {idx === 0 && (
                    <span className="absolute top-4 left-4 z-20 text-white text-sm md:text-base font-bold bg-blue-base/60 rounded-3xl px-4 py-2 whitespace-nowrap">
                      {t(activeProject.title)}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-dark-blue bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                    <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <IoSearchCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.section>
          )
        )}
      </AnimatePresence>

      {/* Lightbox */}
      {lightbox.index !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative">
            {/* Prev */}
            <button
              className="hidden md:block absolute -left-12 bottom-1/2 text-white hover:text-primary-yellow transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Anterior"
            >
              <IoChevronBack className="w-10 h-10" />
            </button>
            {/* Image */}
            <img
              src={lightbox.images[lightbox.index]}
              alt={`Imagen ${lightbox.index + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Next */}
            <button
              className="hidden md:block absolute -right-12 bottom-1/2 text-white hover:text-primary-yellow transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Siguiente"
            >
              <IoChevronForward className="w-10 h-10" />
            </button>
          </div>

          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white hover:text-primary-yellow transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <IoCloseCircle className="w-10 h-10" />
          </button>

          {/* Counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {lightbox.index + 1} / {lightbox.images.length}
          </span>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
