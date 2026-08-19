import LocalizedLink from "../routing/LocalizedLink";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../Header/Header.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRoute } from "../../routes/useRoute";
import { FaHandSparkles, FaHandHoldingHeart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { RiServiceLine } from "react-icons/ri";
import { MdSupportAgent, MdEmail, MdTranslate } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

const LANGUAGES = [
  { code: "en", labelKey: "header.options_english" },
  { code: "es", labelKey: "header.options_spanish" },
];

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [nav, setNav] = useState(false);
  const [openPopup, setOpenPopup] = useState(null); // "qh" | "services" | "idioma" | null
  const [popupTop, setPopupTop] = useState(0);
  const headerRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathForLang } = useRoute();

  const closePopups = () => {
    setOpenPopup(null);
  };

  const handleNav = () => {
    setNav(!nav);
    closePopups();
  };

  const togglePopup = (key) => {
    setOpenPopup((current) => (current === key ? null : key));
  };

  // Cambiar de idioma es navegar: la URL es la fuente de verdad y LangLayout
  // se encarga de avisarle a i18next. Así el usuario queda en la MISMA página,
  // no en la home.
  const handleChangeLanguage = (langCode) => {
    navigate(pathForLang(langCode));
    setNav(false);
    closePopups();
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setPopupTop(headerRef.current.getBoundingClientRect().height);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const isScrollingUp = currentScroll < lastScrollTop;

      if (isScrollingUp || currentScroll <= 0) {
        setIsHidden(false);
        setPopupTop(headerRef.current?.getBoundingClientRect().height ?? 0);
      } else {
        setIsHidden(true);
        setPopupTop(0);
      }
      lastScrollTop = currentScroll;
    };

    const handleResize = () => {
      closePopups();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`hidden z-50 lg:flex justify-between items-center py-3 px-16 max-md:py-2 bg-white fixed w-full transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="Links-left flex gap-1 items-center">
          <LocalizedLink
            routeKey="home"
            onClick={handleNav}
            className="text-lg text-blue-base font-extrabold uppercase transition duration-400 ease-in-out max-xl:text-sm object-contain hover:text-primary-purple"
          >
            {t("header.home")}
          </LocalizedLink>
          <span className="text-dark-blue mx-1">|</span>
          <LocalizedLink
            routeKey="foundation"
            onClick={handleNav}
            className="text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm hover:text-primary-purple"
          >
            {t("header.foundation")}
          </LocalizedLink>
          <span className="text-blue-base mx-1">|</span>
          <button
            type="button"
            onClick={() => togglePopup("qh")}
            aria-expanded={openPopup === "qh"}
            aria-controls="desktop-what-we-do-menu"
            className="group flex items-center text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm hover:text-primary-purple"
          >
            {t("header.what_we_do")}

            <svg
              className="ml-1 fill-blue-base  w-3 h-3 group-hover:fill-primary-purple transition duration-400 ease-in-out"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>

            <span className="text-blue-base mx-1">|</span>
          </button>
          <button
            type="button"
            onClick={() => togglePopup("services")}
            aria-expanded={openPopup === "services"}
            aria-controls="desktop-services-menu"
            className="group flex items-center text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm hover:text-primary-purple"
          >
            {t("header.services")}

            <svg
              className="ml-1 fill-blue-base -300 w-3 h-3 group-hover:fill-primary-purple transition duration-400 ease-in-out"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </button>
        </div>

        <div className="logo">
          <LocalizedLink routeKey="home" onClick={() => closePopups()}>
            <img
              className="h-28 object-contain max-xl:h-24 max-lg:h-14"
              src="/logo.png"
              alt="Logo Fundación Antivirus para la Deserción"
            />
          </LocalizedLink>
        </div>

        <div className="Links-right flex gap-3 items-center">
          <LocalizedLink
            routeKey="news"
            onClick={handleNav}
            className="text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm  hover:text-primary-purple"
          >
            {t("header.news")}
          </LocalizedLink>
          <span className="text-blue-base mx-1">|</span>
          <LocalizedLink
            routeKey="contact"
            onClick={handleNav}
            className="text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm  hover:text-primary-purple"
          >
            {t("header.contact_us")}
          </LocalizedLink>
          <span className="text-blue-base mx-1">|</span>
          <button
            type="button"
            onClick={() => togglePopup("idioma")}
            aria-expanded={openPopup === "idioma"}
            aria-controls="desktop-language-menu"
            className="group flex items-center justify-center text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple"
          >
            {t("header.language")}
            <svg
              className="ml-1 fill-blue-base -300 w-3 h-3 group-hover:fill-primary-purple transition duration-400 ease-in-out"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </button>

          <button
            type="button"
            onClick={() =>
              window.open("https://forms.gle/cepdWwfdcpFdcVNj8", "_blank")
            }
            aria-label={t("header.button_volunteer")}
            className="flex items-center justify-center py-3 px-4 bg-primary-purple rounded-3xl text-white font-bold hover:bg-dark-yellow transition duration-700 transform hover:scale-105 max-xl:py-2"
          >
            <div className="flex items-center">
              {t("header.button_volunteer")}
              <FaHandSparkles
                size={20}
                name="gift"
                color="#ffffff"
              ></FaHandSparkles>
            </div>
          </button>
        </div>
      </header>

      {openPopup === "qh" && (
        <div
          id="desktop-what-we-do-menu"
          className="hidden lg:block fixed left-0 right-0 bg-dark-blue text-white  z-50 popup-animation text-3xl"
          style={{ top: `${popupTop}px` }}
        >
          <ul className="flex items-center justify-center gap-16 p-10">
            <li>
              <LocalizedLink
                routeKey="dataAnalytics"
                onClick={handleNav}
                className="font-impact hover:text-primary-purple cursor-pointer"
              >
                {t("header.sub_header.data_analytics")}
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink
                routeKey="socialIntervention"
                onClick={handleNav}
                className="font-impact hover:text-primary-purple cursor-pointer"
              >
                {t("header.sub_header.socio_emotional_intervention")}
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink
                routeKey="communications"
                onClick={handleNav}
                className="font-impact hover:text-primary-purple cursor-pointer"
              >
                {t("header.sub_header.communications")}
              </LocalizedLink>
            </li>
          </ul>
        </div>
      )}

      {openPopup === "services" && (
        <div
          id="desktop-services-menu"
          className="hidden lg:block fixed left-0 items-center right-0 bg-dark-blue text-white  z-50 popup-animation text-3xl"
          style={{ top: `${popupTop}px` }}
        >
          <ul className="flex items-center justify-center gap-16 p-10">
            <li>
              <LocalizedLink
                routeKey="retention"
                onClick={handleNav}
                className="font-impact hover:text-primary-purple cursor-pointer"
              >
                {t("header.sub_header.permanence")}
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink
                routeKey="consulting"
                onClick={handleNav}
                className="font-impact hover:text-primary-purple cursor-pointer"
              >
                {t("header.sub_header.consulting")}
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink
                routeKey="provocacion"
                onClick={handleNav}
                className="font-impact hover:text-primary-purple cursor-pointer"
              >
                {t("header.sub_header.pro_vocation")}
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink
                routeKey="atvConnect"
                onClick={handleNav}
                className="font-impact hover:text-primary-purple cursor-pointer"
              >
                {t("header.sub_header.atv_connect")}
              </LocalizedLink>
            </li>
          </ul>
        </div>
      )}

      {openPopup === "idioma" && (
        <div
          id="desktop-language-menu"
          className="hidden lg:block fixed left-0 items-center right-0 bg-dark-blue text-white  z-50 popup-animation text-3xl"
          style={{ top: `${popupTop}px` }}
        >
          <ul className="flex items-center justify-center gap-16 p-10">
            {LANGUAGES.map((lang) => (
              <li
                key={lang.code}
                role="button"
                tabIndex={0}
                onClick={() => handleChangeLanguage(lang.code)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleChangeLanguage(lang.code);
                  }
                }}
                aria-label={t(lang.labelKey)}
                className="font-impact hover:text-primary-purple cursor-pointer"
              >
                {t(lang.labelKey)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/*RESPONSIVE MENU}*/}
      <div
        id="responsive-menu"
        className={`flex justify-between bg-white items-center px-6 py-2 lg:hidden`}
      >
        <div className="logo-responsive-menu">
          <LocalizedLink routeKey="home" onClick={() => closePopups()}>
            <img
              className="h-28 object-contain max-sm:h-16"
              src="/logo.png"
              alt="Logo Fundación Antivirus para la Deserción"
            />
          </LocalizedLink>
        </div>

        <button
          type="button"
          onClick={handleNav}
          aria-label={nav ? t("header.close_menu") : t("header.open_menu")}
          aria-expanded={nav}
          className=" block lg:hidden"
        >
          {nav ? (
            <AiOutlineClose size={40} />
          ) : (
            <AiOutlineMenu className="hover:cursor-pointer" size={30} />
          )}
        </button>
      </div>

      <div
        onClick={handleNav}
        className={`
          ${
            nav
              ? "fixed inset-0 h-screen p-0 bg-[rgba(0,0,0,0.4117647059)] backdrop-blur-[4px] transition-all duration-400 ease-in-out z-30"
              : "hidden"
          }
            lg:hidden
        `}
      ></div>

      <ul
        className={
          nav
            ? "fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 p-7 overflow-auto"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
        style={{ zIndex: 30 }}
      >
        <li className="list-none">
          <div className="header-navbar-responsive flex justify-between items-center">
            <button
              type="button"
              onClick={handleNav}
              aria-label={t("header.close_menu")}
              className="absolute right-0 pr-2 text-blue-base"
            >
              <AiOutlineClose size={30} className="hover:cursor-pointer" />
            </button>
          </div>
        </li>

        <li className="flex items-center gap-1 p-2 text-dark-blue font-extrabold uppercase transition duration-400 ease-in-out hover:text-primary-purple">
          <TiHome className="flex-shrink-0 relative -top-[3px]" size={20} />
          <LocalizedLink routeKey="home" onClick={handleNav} className="leading-none">
            {t("header.home")}
          </LocalizedLink>
        </li>

        <li className="flex items-center gap-1 p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
          <FaHandHoldingHeart
            className="flex-shrink-0 relative -top-[3px]"
            size={20}
          />
          <LocalizedLink routeKey="foundation" onClick={handleNav} className="leading-none">
            {t("header.foundation")}
          </LocalizedLink>
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
          <div className="flex items-center gap-1">
            <RiServiceLine
              className="flex-shrink-0 relative -top-[3px]"
              size={20}
            />
            <button type="button" onClick={() => togglePopup("qh")} className="group flex items-center">
              {t("header.what_we_do")}{" "}
              <svg
                className="ml-1 text-blue-base group-hover:fill-primary-purple w-3 h-3"
                viewBox="0 0 5 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
              </svg>
            </button>
          </div>

          {openPopup === "qh" && (
            <ul className="pl-4">
              <li className="p-2 text-dark-blue font-extrabold mt-4 uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
                <LocalizedLink routeKey="dataAnalytics" onClick={handleNav}>
                  {t("header.sub_header.data_analytics")}
                </LocalizedLink>
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
                <LocalizedLink routeKey="socialIntervention" onClick={handleNav}>
                  {t("header.sub_header.socio_emotional_intervention")}
                </LocalizedLink>
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
                <LocalizedLink
                  routeKey="communications"
                  onClick={handleNav}
                  className=" hover:opacity-55 hover:text-primary-purple cursor-pointer"
                >
                  {t("header.sub_header.communications")}
                </LocalizedLink>
              </li>
            </ul>
          )}
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
          <div className="flex items-center gap-1">
            <MdSupportAgent
              className="flex-shrink-0 relative -top-[3px]"
              size={20}
            />
            <button
              type="button"
              onClick={() => togglePopup("services")}
              className="group flex items-center"
            >
              {t("header.services")}{" "}
              <svg
                className="ml-1 text-blue-base group-hover:fill-primary-purple w-3 h-3"
                viewBox="0 0 5 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
              </svg>
            </button>
          </div>

          {openPopup === "services" && (
            <ul className="pl-4">
              <li className="p-2 text-dark-blue font-extrabold mt-4 uppercase leading-none transition duration-400 ease-in-out">
                <LocalizedLink
                  routeKey="retention"
                  onClick={handleNav}
                  className="hover:text-primary-purple cursor-pointer"
                >
                  {t("header.sub_header.permanence")}
                </LocalizedLink>
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
                <LocalizedLink
                  routeKey="consulting"
                  onClick={handleNav}
                  className="hover:text-primary-purple cursor-pointer"
                >
                  {t("header.sub_header.consulting")}
                </LocalizedLink>
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
                <LocalizedLink
                  routeKey="provocacion"
                  onClick={handleNav}
                  className=" hover:text-primary-purple cursor-pointer"
                >
                  {t("header.sub_header.pro_vocation")}
                </LocalizedLink>
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
                <LocalizedLink
                  routeKey="atvConnect"
                  onClick={handleNav}
                  className="hover:text-primary-purple cursor-pointer"
                >
                  {t("header.sub_header.atv_connect")}
                </LocalizedLink>
              </li>
            </ul>
          )}
        </li>

        <li className="flex items-center gap-1 p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
          <IoNewspaperOutline
            className="flex-shrink-0 relative -top-[3px]"
            size={20}
          />
          <LocalizedLink routeKey="news" onClick={handleNav}>
            {t("header.news")}
          </LocalizedLink>
        </li>

        <li className="flex items-center gap-1 p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
          <MdEmail className="flex-shrink-0 relative -top-[3px]" size={20} />
          <LocalizedLink routeKey="contact" onClick={handleNav}>
            {t("header.contact_us")}
          </LocalizedLink>
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple">
          <div className="flex items-center gap-1">
            <MdTranslate
              className="flex-shrink-0 relative -top-[3px]"
              size={20}
            />
            <button type="button" onClick={() => togglePopup("idioma")} className="group flex items-center">
              {t("header.language")}{" "}
              <svg
                className="ml-1 text-blue-base group-hover:fill-primary-purple w-3 h-3"
                viewBox="0 0 5 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
              </svg>
            </button>
          </div>

          {openPopup === "idioma" && (
            <ul className="pl-4">
              {LANGUAGES.map((lang, index) => (
                <li
                  key={lang.code}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleChangeLanguage(lang.code)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleChangeLanguage(lang.code);
                    }
                  }}
                  aria-label={t(lang.labelKey)}
                  className={`p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out hover:text-primary-purple cursor-pointer${
                    index === 0 ? " mt-4" : ""
                  }`}
                >
                  {t(lang.labelKey)}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="list-none">
          <button
            type="button"
            onClick={() =>
              window.open("https://forms.gle/cepdWwfdcpFdcVNj8", "_blank")
            }
            aria-label={t("header.button_volunteer")}
            className="flex items-center justify-center py-3 px-4 bg-primary-purple rounded-3xl text-white font-bold hover:bg-dark-yellow transition duration-700 transform hover:scale-105 max-xl:py-2"
          >
            <div className="flex items-center">
              {t("header.button_volunteer")}
              <FaHandSparkles
                size={20}
                name="gift"
                color="#eae9e9"
              ></FaHandSparkles>
            </div>
          </button>
        </li>
      </ul>
    </>
  );
}

export default Header;
