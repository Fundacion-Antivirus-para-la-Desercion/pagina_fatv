import React from "react";
import { useTranslation } from "react-i18next";
import BannerApoyoAcademicoEn from "../../public/services_imgs/banner-services.jpg";
import BannerApoyoAcademicoEs from "../../public/services_imgs/banner-services.jpg";
import imgServices2 from "../../public/services_imgs/services-img2.jpg";
import emocional3 from "../../public/img_viewQHav/sociopedagogical-image-3.webp";
import BannerView from "../components/Banner-views/BannerView";

function ApoyoAcademico() {
  const { t } = useTranslation();

  return (
    <div className="lg:pt-[145px]">
      <BannerView
        imagesBannerMap={{
          enImage: BannerApoyoAcademicoEn,
          esImage: BannerApoyoAcademicoEs,
          keyTitle: "",
        }}
      />

      <div className="mx-8 my-12 sm:mx-8 sm:my-16 md:mx-12 md:my-20 lg:mx-28 lg:my-20 max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-7">
            <h1 className="tracking-nm text-blue-base">
              {t("apoyoAcademico.section1.subtitle1")}
            </h1>
            <h1 className="lineSubtitle  text-blue-base font-impact text-[3em] leading-[.92] uppercase sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2">
              {t("apoyoAcademico.section1.subtitle2")}
            </h1>
            <h1 className="text-blue-base font-impact text-2xl mb-10">
              {t("apoyoAcademico.section1.subtitle3")}
            </h1>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-blue-base font-impact text-xl">
                  {t("apoyoAcademico.section1.tutoring.title")}
                </h2>
                <p className="text-dark-blue text-lg">
                  {t("apoyoAcademico.section1.tutoring.description")}
                </p>
              </div>

              <div>
                <h2 className="text-blue-base font-impact text-xl">
                  {t("apoyoAcademico.section1.levelUp.title")}
                </h2>
                <p className="text-dark-blue text-lg">
                  {t("apoyoAcademico.section1.levelUp.description")}
                </p>
              </div>

              <div>
                <h2 className="text-blue-base font-impact text-xl">
                  {t("apoyoAcademico.section1.studyGroups.title")}
                </h2>
                <p className="text-dark-blue text-lg">
                  {t("apoyoAcademico.section1.studyGroups.description")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mb-4 h-fit">
            <img
              src={emocional3}
              alt="emocional 1"
              className="w-full h-auto object-cover"
            />
            <div className="lg:absolute bottom-0 left-0-0 bg-dark-blue px-16 py-12">
              <b className="text-xl text-white ">
                {t("apoyoAcademico.imageSection1.title")}
              </b>
              <p className="text-white text-xl">
                {t("apoyoAcademico.imageSection1.description")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row relative">
          <div className="w-full md:w-1/2 relative ">
            <img
              className="w-full h-auto object-cover"
              src={imgServices2}
              alt="emocional 2"
            />
            <div className="lg:absolute bottom-0 left-0-0 bg-dark-blue px-16 py-12">
              <b className="text-xl text-white ">
                {t("apoyoAcademico.imageSection2.title")}
              </b>
              <p className="text-white text-xl">
                {t("apoyoAcademico.imageSection2.description")}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApoyoAcademico;
