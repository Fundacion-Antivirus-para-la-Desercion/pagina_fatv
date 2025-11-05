import React from "react";
import { useTranslation } from "react-i18next";
import imgBanner from "../../public/services_imgs/banner-services.jpg";
import imgServices2 from "../../public/services_imgs/services-img2.jpg";
import emocional3 from "../../public/img_viewQHav/sociopedagogical-image-3.webp";

function ApoyoAcademico() {
  const { t } = useTranslation();

  return (
    <div className="lg:pt-[145px]">
      <div className="relative w-full h-60 sm:h-80 md:h-96">
        <img
          src={imgBanner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
        <h1 className="absolute inset-0 flex items-center justify-center font-impact uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-banner">
          {t("apoyoAcademico.title")}
        </h1>
        <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">
          <a
            href="https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon
              name="facebook-circle"
              type="logo"
              color="#ffffff"
            ></box-icon>
          </a>
          <a
            href="https://www.instagram.com/somosantivirus/"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon
              name="instagram-alt"
              type="logo"
              color="#ffffff"
            ></box-icon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon name="youtube" type="logo" color="#ffffff"></box-icon>
          </a>
          <a
            href="https://www.tiktok.com/@somosantivirus"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon name="tiktok" type="logo" color="#ffffff"></box-icon>
          </a>
          <a
            href="https://www.linkedin.com/company/antivirus-desercion/"
            target="_blank"
            rel="noopener noreferrer"
            className="box-icon"
          >
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#ffffff"
            ></box-icon>
          </a>
        </div>
      </div>

      <div className="mx-8 my-12 sm:mx-8 sm:my-16 md:mx-12 md:my-20 lg:mx-28 lg:my-20 max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-7">
            <h1 className="tracking-nm text-blueBase">
              {t("apoyoAcademico.section1.subtitle1")}
            </h1>
            <h1 className="lineSubtitle  text-blueBase font-impact text-[3em] leading-[.92] uppercase sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2">
              {t("apoyoAcademico.section1.subtitle2")}
            </h1>
            <h1 className="text-blueBase font-impact text-2xl mb-10">
              {t("apoyoAcademico.section1.subtitle3")}
            </h1>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-blueBase font-impact text-xl">
                  {t("apoyoAcademico.section1.tutoring.title")}
                </h2>
                <p className="text-blue-links text-lg">
                  {t("apoyoAcademico.section1.tutoring.description")}
                </p>
              </div>

              <div>
                <h2 className="text-blueBase font-impact text-xl">
                  {t("apoyoAcademico.section1.levelUp.title")}
                </h2>
                <p className="text-blue-links text-lg">
                  {t("apoyoAcademico.section1.levelUp.description")}
                </p>
              </div>

              <div>
                <h2 className="text-blueBase font-impact text-xl">
                  {t("apoyoAcademico.section1.studyGroups.title")}
                </h2>
                <p className="text-blue-links text-lg">
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
            <div className="lg:absolute bottom-0 left-0-0 bg-blue-links px-16 py-12">
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
            <div className="lg:absolute bottom-0 left-0-0 bg-blue-links px-16 py-12">
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
