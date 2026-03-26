import { HiSparkles } from "react-icons/hi2";
import { BiRightArrow } from "react-icons/bi";
import { MdArrowDownward } from "react-icons/md";

import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-10 md:flex-row p-5 md:p-10 lg:p-12 items-center">
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
            <div className="group flex-1 sm:flex-none flex items-center justify-center sm:justify-start bg-primary-yellow rounded-3xl px-3 py-2 md:px-5 md:py-3 hover:bg-dark-blue transition-colors duration-300">
              <BiRightArrow className="text-dark-blue text-base sm:text-lg mr-1 transition-colors duration-300 group-hover:text-white" />

              <a
                className="text-xs sm:text-base md:text-lg lg:text-xl font-extrabold text-dark-blue transition-colors duration-300 group-hover:text-white whitespace-nowrap"
                href=""
              >
                {t("communications.description.ancla_one")}
              </a>
            </div>

            <div className="group flex-1 sm:flex-none flex items-center justify-center sm:justify-start">
              <a
                className="text-xs sm:text-base md:text-lg lg:text-xl font-extrabold text-dark-blue transition-colors duration-300 group-hover:text-primary-purple whitespace-nowrap"
                href=""
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
          <div>
            <h3 className="text-lg sm:text-xl md:text-3xl font-extrabold text-white mb-3 md:mb-4">
              {t("communications.description.cardPrincipal.title")}
            </h3>

            <p className="text-[#ffffffb7] text-sm sm:text-base leading-relaxed text-left sm:text-justify mb-10">
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
