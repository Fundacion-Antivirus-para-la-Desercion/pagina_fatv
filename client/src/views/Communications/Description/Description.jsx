import { useEffect, useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { BiRightArrow } from "react-icons/bi";
import { MdArrowDownward } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const showreelTitle = t("communications.description.ancla_one");

  useEffect(() => {
    if (!isShowreelOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsShowreelOpen(false);
      }
    };

    const { overflow } = document.body.style;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isShowreelOpen]);

  return (
    <section className="mx-auto mb-10">
      {isShowreelOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={() => setIsShowreelOpen(false)}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setIsShowreelOpen(false)}
            className="absolute right-4 top-4 z-10 text-white transition-colors duration-300 hover:text-primary-yellow"
            aria-label={showreelTitle}
          >
            <IoCloseCircle className="h-10 w-10" />
          </button>

          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="communications-showreel-title"
          >
            <h3 id="communications-showreel-title" className="sr-only">
              {showreelTitle}
            </h3>

            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/tBe6eG0tanE?autoplay=1&rel=0"
                title={showreelTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 md:p-10 lg:p-12 items-center">
        <div className="p-5 md:p-10 text-center md:text-left">
          <div className="flex items-center mb-2 md:mb-4 justify-center md:justify-start">
            {" "}
            <HiSparkles className="text-primary-yellow text-lg mr-3" />
            <span className="text-primary-purple text-sm md:text-lg font-impact">
              {t("communications.description.spam")}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-impact text-blue-base mb-5 md:mb-8">
            {t("communications.description.title")}{" "}
            <span className="text-primary-yellow">
              {t("communications.description.spam_title")}
            </span>
          </h2>
          <p className="text-base md:text-lg text-blue-base max-w-xl mb-10">
            {t("communications.description.description_general")}
          </p>

          <div className="flex gap-2 sm:gap-5 items-center">
            <div className="group flex-1 sm:flex-none flex items-center justify-center sm:justify-start bg-primary-yellow rounded-3xl px-3 py-3 md:px-5 md:py-3 hover:bg-dark-blue transition-colors duration-300">
              <BiRightArrow className="text-dark-blue text-base sm:text-lg mr-1 transition-colors duration-300 group-hover:text-white" />

              <button
                type="button"
                className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-dark-blue transition-colors duration-300 group-hover:text-white whitespace-nowrap"
                onClick={() => setIsShowreelOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isShowreelOpen}
              >
                {t("communications.description.ancla_one")}
              </button>
            </div>

            <div className="group flex-1 sm:flex-none flex items-center justify-center sm:justify-start">
              <a
                className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-dark-blue transition-colors duration-300 group-hover:text-primary-purple whitespace-nowrap"
                href="#portfolio"
              >
                {t("communications.description.ancla_two")}
              </a>

              <MdArrowDownward className="text-dark-blue text-base sm:text-lg ml-1 transition-colors duration-300 group-hover:text-primary-purple" />
            </div>
          </div>
        </div>
        <div className="bg-dark-blue rounded-2xl p-5 md:p-14 max-w-2xl w-full h-fit">
          {" "}
          {/* Texto */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-xl md:text-3xl font-extrabold text-white mb-5 md:mb-8">
              {t("communications.description.cardPrincipal.title")}
            </h3>

            <p className="text-[#ffffffb7] text-sm sm:text-base leading-relaxed sm:text-justify mb-10">
              {t("communications.description.cardPrincipal.description")}
            </p>
          </div>
          {/* Valores */}
          <div className="mt-5 sm:mt-6">
            <ul className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
              <li className="flex flex-col items-center gap-1">
                <span className="text-primary-yellow text-sm sm:text-base md:text-xl lg:text-2xl font-impact">
                  {t("communications.description.cardPrincipal.spams.one")}
                </span>
                <span className="text-[#ffffffb7] text-xs sm:text-sm md:text-base leading-snug">
                  {t(
                    "communications.description.cardPrincipal.spams.one_description",
                  )}
                </span>
              </li>

              <li className="flex flex-col items-center gap-1">
                <span className="text-primary-yellow text-sm sm:text-base md:text-xl lg:text-2xl font-impact">
                  {t("communications.description.cardPrincipal.spams.two")}
                </span>
                <span className="text-[#ffffffb7] text-xs sm:text-sm md:text-base leading-snug">
                  {t(
                    "communications.description.cardPrincipal.spams.two_description",
                  )}
                </span>
              </li>

              <li className="flex flex-col items-center gap-1">
                <span className="text-primary-yellow text-sm sm:text-base md:text-xl lg:text-2xl font-impact">
                  {t("communications.description.cardPrincipal.spams.three")}
                </span>
                <span className="text-[#ffffffb7] text-xs sm:text-sm md:text-base leading-snug">
                  {t(
                    "communications.description.cardPrincipal.spams.three_description",
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Description;
