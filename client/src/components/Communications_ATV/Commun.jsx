import React from "react";
import { useTranslation } from "react-i18next";
import CommunicationsTeam from "../../../public/img_Communications/communicationsTeam.webp";

function Commun() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="communications"
        className="container mx-auto flex flex-col items-center gap-12 px-8 py-16 lg:flex-row lg:gap-24"
      >
        <div className="w-full lg:w-2/5">
          <div>
            <p className="text-sm tracking-nm uppercase text-left text-blue-base">
              {t("communications_ATV.commun.our_model")}
            </p>
            <h1 className="lineSubtitle text-4xl md:text-5xl mb-4 block w-full leading-[1.08] tracking-[-1px] text-blue-base font-impact sm:tracking-[-2px]">
              {t("communications_ATV.commun.subtitle")}
            </h1>
          </div>
          <div>
            <p className="text-justify text-base md:text-lg leading-relaxed text-blue-base">
              {t("communications_ATV.commun.paragraph_1")}
              <br />
              <br />
              {t("communications_ATV.commun.paragraph_2")}
              <br />
              <br />
              {t("communications_ATV.commun.paragraph_3")}
              <br />
              <br />
              {t("communications_ATV.commun.paragraph_4")}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={CommunicationsTeam}
            alt={t("communications_ATV.commun.subtitle")}
            className="mx-auto w-full max-w-[700px] rounded-3xl border-[4px] border-solid border-white shadow-2xl"
          />
        </div>
      </section>
    </>
  );
}

export default Commun;
