import React, { useState } from "react";
import "boxicons";
import imgFB from "../../../public/img_Foundation/imgF.webp";
import imgF2 from "../../../public/img_Foundation/imgF2.webp";
import imgF3 from "../../../public/img_Foundation/imgF3.webp";
import OurTeam from "../ourTeam/OurTeam";
import { useTranslation } from "react-i18next";

function FoundationATV() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <img
          src={imgFB}
          alt="Banner"
          className="w-full h-[69vh] object-cover object-[0_33%]"
        />
        <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
        <h1 className="absolute inset-0 flex items-center justify-center font-impact text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          {t("foundation.foundationATV.header")}
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

      <div className="aboutUs">
        <div className="aboutUs-content">
          <div className="left-content">
            <p className="title">{t("foundation.foundationATV.title")}</p>
            <h4 className="lineSubtitle font-impact text-[3em] leading-[.92] uppercase">
              {t("foundation.foundationATV.subtitle")}
            </h4>
          </div>
          <div className="right-content">
            <p className="text-xl right-paragraph">
              {t("foundation.foundationATV.description")}
            </p>
          </div>
        </div>
      </div>

      <div className="foundation_team">
        <div className="flex justify-center">
          <div className="w-4/5 mt-10 mb-20 flex flex-wrap items-center content-center text-white">
            <div className="bg-[#232e55] p-12 mb-1 ml-1 w-full lg:w-fit">
              <div className="_title">
                <p>
                  <small className="text-[#7c78b3] text-[0.882em] leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.founders.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact uppercase text-[2.118em] leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.founders.title")}
                </h5>
              </div>
              <div className="lg:columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Carlos
                  <strong className="text-inherit block">
                    Vásquez Restrepo
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Paulina
                  <strong className="text-inherit block">Tamayo Mejía</strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Víctor Manuel
                  <strong className="text-inherit block">
                    Valencia Martínez
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Luis Fernando
                  <strong className="text-inherit block">González Urán</strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Andrea
                  <strong className="text-inherit block">
                    Jaramillo Ramírez
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Laura
                  <strong className="text-inherit block">Calle Escobar</strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  León Felipe
                  <strong className="text-inherit block">
                    Hernández López
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Aida
                  <strong className="text-inherit block">Orduz Quijano</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#232e55] p-12 mb-1 ml-1 w-full lg:w-fit lg:max-w-[710px]">
              <div className="_title">
                <p>
                  <small className="text-[#7c78b3] text-[0.882em] leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.board_directors.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact uppercase text-[2.118em] leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.board_directors.title")}
                </h5>
              </div>
              <div className="lg:columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Carlos Vásquez Restrepo
                  <strong className="text-inherit block">
                    {t(
                      "foundation.foundationATV.board_directors.positions.president"
                    )}
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Luis Fernando Sánchez Hurtado
                  <strong className="text-inherit block">
                    {t(
                      "foundation.foundationATV.board_directors.positions.vicepresident"
                    )}
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  David Santiago Botero Rodríguez
                  <strong className="text-inherit block">
                    {t(
                      "foundation.foundationATV.board_directors.positions.second_representative"
                    )}
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Víctor Manuel Valencia Martínez
                  <strong className="text-inherit block">
                    {t(
                      "foundation.foundationATV.board_directors.positions.subdirector"
                    )}
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Luis Fernando
                  <strong className="text-inherit block">González Urán</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#232e55] p-12 mb-1 ml-1 w-full lg:w-[49%]">
              <div className="_title">
                <p>
                  <small className="text-[#7c78b3] text-[0.882em] leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.fiscal_reviewer.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact uppercase text-[2.118em] leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.fiscal_reviewer.title")}
                </h5>
              </div>
              <div className="columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  Orlando
                  <strong> Gaviria Flórez</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#232e55] p-12 mb-1 ml-1 w-full lg:w-[49%]">
              <div className="_title">
                <p>
                  <small className="text-[#7c78b3] text-[0.882em] leading-[1.533] tracking-[0.3em] uppercase">
                    {t("foundation.foundationATV.accountant.subtitle")}
                  </small>
                </p>
                <h5 className="font-impact uppercase text-[2.118em] leading-[0.917] mb-[10px]">
                  {t("foundation.foundationATV.accountant.title")}
                </h5>
              </div>
              <div className="lg:columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-white text-left mb-[15px] text-[0.882em] break-inside-avoid">
                  María Verónica
                  <strong className="text-inherit block">
                    Ortiz Rodríguez
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="contVideoF flex flex-row ">
          <div className="relative flex mr-6 ">
            <picture style={{ height: "100%" }}>
              <img
                src={imgF2}
                alt="img2"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div className="iconGrande absolute inset-0 flex items-center justify-center">
                <button
                  onClick={openPopup}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <box-icon
                    name="play-circle"
                    color="white"
                    style={{ fontSize: "5rem", width: "5rem", height: "5rem" }}
                  ></box-icon>
                </button>
              </div>
            </picture>
          </div>
          <div
            className="relative w-auto h-1/2 overflow-hidden"
            style={{ height: "100%" }}
          >
            <img
              src={imgF3}
              alt="img3"
              className="w-full h-full img3"
              style={{ clipPath: "inset(0 25% 0 0)", objectFit: "cover" }}
            />
          </div>
          {isOpen && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  position: "relative",
                  maxWidth: "90%",
                  maxHeight: "90%",
                }}
              >
                <button
                  onClick={closePopup}
                  className="buttonF"
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "0%",
                    background: "none",
                    border: "none",
                    fontSize: "24px",
                    color: "white",
                    cursor: "pointer",
                    zIndex: 10000,
                  }}
                >
                  &times;
                </button>
                <iframe
                  title="YouTube Video"
                  src="https://www.youtube.com/embed/gzePCxLy8Ak"
                  style={{ width: "800px", height: "450px", border: "none" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
      <OurTeam />
      <div className="flex justify-center mt-10 mb-10">
        <div className="w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-14 text-justify">
          <div>
            <h5 className="text-left text-4xl font-impact text-[#33526d] mb-4">
              {t(
                "foundation.foundationATV.organization_info.change_theory.title"
              )}
            </h5>
            <p className="text-base text-[#33526d]">
              {t(
                "foundation.foundationATV.organization_info.change_theory.description"
              )}
            </p>
          </div>

          <div>
            <h5 className="text-4xl font-impact text-[#33526d] mb-4">
              {t("foundation.foundationATV.organization_info.values.title")}
            </h5>
            <p className="text-base text-[#33526d]">
              {t(
                "foundation.foundationATV.organization_info.values.description"
              )}
            </p>
          </div>

          <div>
            <h5 className="text-4xl font-impact text-[#33526d] mb-4">
              {t("foundation.foundationATV.organization_info.mission.title")}
            </h5>
            <p className="text-base text-[#33526d]">
              {t(
                "foundation.foundationATV.organization_info.mission.description"
              )}
            </p>
          </div>

          <div>
            <h5 className="text-4xl font-impact text-[#33526d] mb-4">
              {t(
                "foundation.foundationATV.organization_info.target_audience.title"
              )}
            </h5>
            <p className="text-base text-[#33526d]">
              {t(
                "foundation.foundationATV.organization_info.target_audience.description"
              )}
            </p>
          </div>

          <div>
            <h5 className="text-4xl font-impact text-[#33526d] mb-4">
              {t("foundation.foundationATV.organization_info.vision.title")}
            </h5>
            <p className="text-base text-[#33526d]">
              {t(
                "foundation.foundationATV.organization_info.vision.description"
              )}
            </p>
          </div>

          <div>
            <h5 className="text-4xl font-impact text-[#33526d] mb-4">
              {t("foundation.foundationATV.organization_info.priorities.title")}
            </h5>
            <ul className="text-base text-[#33526d] list-disc pl-5">
              <li className="mb-2">
                {t(
                  "foundation.foundationATV.organization_info.priorities.items.consolidate_model"
                )}
              </li>
              <li className="mb-2">
                {t(
                  "foundation.foundationATV.organization_info.priorities.items.explore_interventions"
                )}
              </li>
              <li className="mb-2">
                {t(
                  "foundation.foundationATV.organization_info.priorities.items.involve_actors"
                )}
              </li>
              <li className="mb-2">
                {t(
                  "foundation.foundationATV.organization_info.priorities.items.reduce_dropout"
                )}
              </li>
            </ul>
          </div>

          <div className="lg:relative lg:bottom-32">
            <h5 className="text-4xl font-impact text-[#33526d] mb-4">
              {t("foundation.foundationATV.organization_info.purpose.title")}
            </h5>
            <p className="text-base text-[#33526d]">
              {t(
                "foundation.foundationATV.organization_info.purpose.description"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundationATV;
