import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineDocumentText, HiArrowRightCircle } from "react-icons/hi2";
import { BsFiletypePdf } from "react-icons/bs";
import javi from "../../../assets/images/views/javi/javi-corto.webp";
import { pdfDocuments, pdfTabs } from "./data.js";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

function PdfCards() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  const filteredDocs =
    activeTab === "all"
      ? pdfDocuments
      : pdfDocuments.filter((doc) => doc.category === activeTab);

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h3 className="text-2xl md:text-5xl font-impact text-blue-base text-center mb-8">
          {t("ethicsTransparency.pdf.title")}
        </h3>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {pdfTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-3xl border px-5 py-3 text-sm md:text-lg transition-all duration-300 ease-out ${
                activeTab === tab.id
                  ? "border-dark-blue bg-dark-blue text-white shadow-lg shadow-dark-blue/20"
                  : "cursor-pointer border-transparent bg-[#E6E7ED] text-dark-blue hover:scale-105 hover:bg-primary-yellow"
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {filteredDocs.map((doc) => (
              <motion.a
                key={doc.id}
                href={doc.file || "#"}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-base block min-h-[140px]"
              >
                {/* Normal state — slides out upward */}
                <div className="flex items-start gap-4 transition-all duration-500 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
                  <div className="flex-shrink-0 rounded-xl bg-[#E6E7ED] p-3 text-blue-base">
                    <HiOutlineDocumentText size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-base/60">
                      {t(doc.categoryLabelKey)} · {doc.year}
                    </span>
                    <h4 className="mt-1 text-base md:text-lg font-bold text-dark-blue leading-snug">
                      {t(doc.titleKey)}
                    </h4>
                  </div>
                </div>

                {/* Arrow at bottom — hides on hover */}
                <HiArrowRightCircle className="absolute bottom-5 right-6 text-primary-yellow text-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-0" />

                {/* Hover state — slides in from below */}
                <div className="absolute inset-0 flex items-end justify-between px-6 pb-1 translate-y-4 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-blue-base font-bold text-xl pb-5">
                    {t("ethicsTransparency.pdf.view")}
                  </span>
                  <div className="relative flex items-end">
                    {/* Documento flotando donde Javi señala */}
                    <BsFiletypePdf
                      size={36}
                      className="absolute top-2 -left-5 text-blue-base transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6"
                    />
                    <img
                      src={javi}
                      alt="Javi"
                      className="h-24 w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default PdfCards;
