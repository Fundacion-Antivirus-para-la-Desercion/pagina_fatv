import React from "react";
import emocinal1 from "../../public/img_viewQHav/sociopedagogical-image-1.jpg";
import emocinal2 from "../../public/img_viewQHav/sociopedagogical-image-2.webp";
import emocional3 from "../../public/img_viewQHav/sociopedagogical-image-3.webp";
import BannerQhfaEn from "../assets/images/views/socialIntervention/social-intervention.webp";
import BannerQhfaEs from "../assets/images/views/socialIntervention/intervencion-social.webp";

import BannerView from "../components/Banner-views/BannerView";
import { useTranslation } from "react-i18next";

function QHFA() {
  const { t } = useTranslation();

  return (
    <>
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerQhfaEn,
            esImage: BannerQhfaEs,
            keyTitle: "",
          }}
        />

        <div className="mx-8 my-12 sm:mx-8 sm:my-16 md:mx-12 md:my-20 lg:mx-28 lg:my-20 max-w-screen-xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-7">
              <h1 className="tracking-nm text-blue-base">
                {t("qhfa.our_model")}
              </h1>
              <h2 className="lineSubtitle text-blue-base font-impact text-4xl md:text leading-[.92] uppercase sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2">
                {t("qhfa.socio_emotional_intervention")}
              </h2>
              <p className="mt-8 text-blue-base text-justify">
                {t("qhfa.intervention_description")}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={emocinal1}
                alt={t("qhfa.alt_text.emotional_1")}
                className="w-full h-auto object-cover mt-5 md:mt-0"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row relative">
            <div className="w-full md:w-1/2 relative">
              <a
                href="https://www.youtube.com/watch?v=UWKf7hj-H5I"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative">
                  <img
                    className="w-full h-auto object-cover mt-5 md:mt-0"
                    src={emocinal2}
                    alt={t("qhfa.alt_text.emotional_2")}
                  />
                  <div className="absolute inset-0 text-blue-base opacity-80"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <svg
                      width="117"
                      height="117"
                      viewBox="0 0 117 117"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.7771 116.26C25.6877 116.291 -0.185737 89.7148 0.669532 55.4153C1.39809 26.1588 25.504 0.0889276 58.7138 0.00023303C90.9352 -0.0884615 116.783 25.1515 116.999 58.8681C117.195 90.0125 90.3777 116.234 58.7771 116.26ZM15.7223 58.5766C16.2228 82.7332 35.5835 101.714 59.2966 101.308C82.8704 100.903 102.389 81.2254 102.035 58.2155C101.661 33.7738 81.9771 14.5335 57.8142 14.9959C34.3354 15.4458 15.2408 35.2183 15.7223 58.5703V58.5766Z"
                        fill="white"
                      />
                      <path
                        d="M43.8957 58.1205C43.8957 52.1209 43.845 46.1214 43.9083 40.1218C43.9717 34.4454 47.9313 32.209 52.8031 35.1359C62.3695 40.8757 71.9105 46.6536 81.4008 52.5074C86.3867 55.5864 86.4627 60.5089 81.5528 63.5879C72.0182 69.5684 62.4328 75.4729 52.7905 81.2888C47.9503 84.2094 43.9653 81.8336 43.9083 76.1191C43.845 70.1196 43.8957 64.12 43.8957 58.1205Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full md:w-1/2 md:pl-7">
              <h3 className="text-blue-base font-impact text-4xl md:text-4xl lg:text-5xl my-8">
                {t("qhfa.academic_strengthening")}
              </h3>
              <p className="text-blue-base text-justify">
                {t("qhfa.academic_description")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row relative ">
            <div className="w-full md:w-1/2 md:pr-7">
              <h4 className="text-blue-base font-impact text-4xl md:text-4xl lg:text-5xl my-8">
                {t("qhfa.psycho_emotional_support")}
              </h4>
              <p className="text-blue-base text-xl">{t("qhfa.support_intro")}</p>
              <ul className="mt-5">
                <li className="list-disc text-blue-base">
                  {t("qhfa.support_list.mental_health")}
                </li>
                <li className="list-disc text-blue-base">
                  {t("qhfa.support_list.vocational_guidance")}
                </li>
                <li className="list-disc text-blue-base">
                  {t("qhfa.support_list.strengthen_skills")}
                </li>
                <li className="list-disc text-blue-base">
                  {t("qhfa.support_list.organize_workshops")}
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <img
                className="w-full h-auto object-cover mt-5 md:mt-0"
                src={emocional3}
                alt={t("qhfa.alt_text.emotional_3")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QHFA;
