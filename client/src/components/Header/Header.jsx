import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../Header/Header.css";
import { useTranslation } from "react-i18next";
import { FaHandSparkles } from "react-icons/fa";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [nav, setNav] = useState(false);
  const [queHacemos, setQueHacemos] = useState(false);
  const [servicios, setServicios] = useState(false);
  const [idioma, setIdioma] = useState(false);
  const [students, setStudents] = useState(false);
  const [popupPosition, setPopupPosition] = useState("9rem");
  const [popupPositionStudents, setPopupPositionStudents] = useState("17rem");
  const { t, i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || i18n.language || "es";

  const handleNav = () => {
    setNav(!nav);
    closePopups();
  };

  const handlePopupStudents = () => {
    setStudents(!students);
    setIdioma(false);
    setQueHacemos(false);
  };

  const handleMouseEnter = () => {
    setStudents(true);
  };

  const handleMouseLeave = () => {
    setStudents(false);
  };

  const handleClikPopupQH = () => {
    setQueHacemos(!queHacemos);
    setServicios(false);
    setIdioma(false);
    setStudents(false);
  };

  const handleClikPopupServices = () => {
    setServicios(!servicios);
    setQueHacemos(false);
    setIdioma(false);
    setStudents(false);
  };

  const handleClikPopupIdioma = () => {
    setIdioma(!idioma);
    setQueHacemos(false);
    setServicios(false);
    setStudents(false);
  };

  const closePopups = () => {
    setQueHacemos(false);
    setServicios(false);
    setIdioma(false);
    setStudents(false);
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const isScrollingUp = currentScroll < lastScrollTop;

      if (isScrollingUp || currentScroll <= 0) {
        setIsHidden(false);
        setPopupPosition("9rem");
        setPopupPositionStudents("17rem");
      } else {
        setIsHidden(true);
        setPopupPosition("0");
        setPopupPositionStudents("7rem");
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
        onMouseLeave={handleMouseLeave}
        className={`hidden z-50 lg:flex justify-between items-center py-3 px-16 max-md:py-2 bg-white fixed w-full transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="Links-left flex gap-1 items-center">
          <Link
            to="/"
            onClick={handleNav}
            className="text-lg text-blue-base font-extrabold uppercase transition duration-400 ease-in-out max-xl:text-sm object-contain"
          >
            {t("header.home")}
          </Link>
          <span className="text-dark-blue mx-1">|</span>
          <Link
            to="/Fundacion"
            onClick={handleNav}
            className="text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm"
          >
            {t("header.foundation")}
          </Link>
          <span className="text-blue-base mx-1">|</span>
          <button
            onClick={handleClikPopupQH}
            className="flex items-center text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm"
          >
            {t("header.what_we_do")}

            <svg
              className="ml-1 text-blue-300 w-3 h-3"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>

            <span className="text-blue-base mx-1">|</span>
          </button>
          <button
            onClick={handleClikPopupServices}
            className="flex items-center text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm"
          >
            {t("header.services")}

            <svg
              className="ml-1 text-blue-300 w-3 h-3"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </button>
        </div>

        <div className="logo">
          <Link to="/" onClick={() => closePopups()}>
            <img
              className="h-28 object-contain max-xl:h-24 max-lg:h-14"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="Links-right flex gap-3 items-center">
          <Link
            to="/News"
            onClick={handleNav}
            className="text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm"
          >
            {t("header.news")}
          </Link>
          <span className="text-blue-base mx-1">|</span>
          <Link
            to="/ContactUs"
            onClick={handleNav}
            className="text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm"
          >
            {t("header.contact_us")}
          </Link>
          <span className="text-blue-base mx-1">|</span>
          <button
            onClick={handleClikPopupIdioma}
            className="flex items-center justify-center text-lg text-blue-base font-extrabold uppercase leading-none transition duration-400 ease-in-out"
          >
            {t("header.language")}
            <svg
              className="ml-1 text-blue-300 w-3 h-3"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </button>

          <button
            onClick={() =>
              window.open("https://forms.gle/cepdWwfdcpFdcVNj8", "_blank")
            }
            className="flex items-center justify-center py-3 px-4 bg-primary-purple rounded-3xl text-white font-bold hover:bg-orange-500 transition duration-700 transform hover:scale-105 max-xl:py-2"
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
        </div>
      </header>

      {queHacemos && (
        <div
          className="hidden lg:block fixed left-0 right-0 bg-dark-blue text-white  z-50 popup-animation text-3xl"
          style={{ top: popupPosition }}
        >
          <ul className="flex items-center justify-center gap-20 p-10">
            <Link
              to="/dataAnalyctis"
              onClick={handleNav}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {t("header.sub_header.data_analytics")}
            </Link>
            <Link
              to="/intervencion/fortalecimiento-academico"
              onClick={handleNav}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {t("header.sub_header.socio_emotional_intervention")}
            </Link>
            <Link
              to="/comunicaciones"
              onClick={handleNav}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {t("header.sub_header.communications")}
            </Link>
          </ul>
        </div>
      )}

      {servicios && (
        <div
          className="hidden lg:block fixed left-0 items-center right-0 bg-dark-blue text-white  z-50 popup-animation text-3xl"
          style={{ top: popupPosition }}
        >
          <ul className="flex items-center justify-center gap-20 p-10">
            {/* <li
              onMouseEnter={handleMouseEnter}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {t("header.sub_header.for_students")}
            </li> */}
            <Link
              to={"/gestion-de-la-permanencia"}
              onClick={handleNav}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {t("header.sub_header.permanence")}
            </Link>
            <Link
              to="/consultorias"
              onClick={handleNav}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {t("header.sub_header.consulting")}
            </Link>
            <Link
              to="/provocacion"
              onClick={handleNav}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {t("header.sub_header.pro_vocation")}
            </Link>
          </ul>
        </div>
      )}

      {students && (
        <div
          className="hidden lg:block fixed left-0 top-0 items-center right-0  bg-primary-purple text-white z-50 popup-animation text-lg"
          style={{ top: popupPositionStudents }}
        >
          <ul className="flex items-center justify-center gap-12 p-10 ">
            <Link
              to="/ApoyoAcademico"
              onClick={handleNav}
              className=" hover:opacity-55 hover:text-dark-blue cursor-pointer"
            >
              <span className="font-bold">01.</span>{" "}
              {t("header.sub_header.academic_support")}
            </Link>
            {/* <Link
              to="http://ww25.boe.antivirusparaladesercion.com/?subid1=20240613-1351-4868-a8d0-442c08b62acd"
              onClick={handleNav}
              className=" hover:opacity-55 hover:text-dark-blue cursor-pointer"
            >
              <span className="font-bold">02. </span>{" "}
              {t("header.sub_header.boe")}
            </Link>*/}
            <Link
              to="/AcompañamientoOrientacion"
              onClick={handleNav}
              className=" hover:opacity-55 hover:text-dark-blue cursor-pointer"
            >
              <span className="font-bold">02. </span>
              {t("header.sub_header.accompaniment_and_guidance")}
            </Link>
            <Link
              to="/Repositorio"
              onClick={handleNav}
              className=" hover:opacity-55 hover:text-dark-blue cursor-pointer"
            >
              <span className="font-bold">03. </span>{" "}
              {t("header.sub_header.repository")}
            </Link>
          </ul>
        </div>
      )}

      {idioma && (
        <div
          className="hidden lg:block fixed left-0 items-center right-0 bg-dark-blue text-white  z-50 popup-animation text-3xl"
          style={{ top: popupPosition }}
        >
          <ul className="flex items-center justify-center gap-20 p-10">
            <li
              onClick={() => {
                i18n.changeLanguage("en");
                localStorage.setItem("i18nextLng", "en");
                handleNav();
              }}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {t("header.options_english")}
            </li>
            <li
              onClick={() => {
                i18n.changeLanguage("es");
                localStorage.setItem("i18nextLng", "es");
                handleNav();
              }}
              className="font-impact border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
            >
              {" "}
              {t("header.options_spanish")}{" "}
            </li>
          </ul>
        </div>
      )}

      <div
        id="responsive-menu"
        className={`flex justify-between bg-white items-center px-6 py-2 lg:hidden`}
      >
        <div className="logo-responsive-menu">
          <Link to="/" onClick={() => closePopups()}>
            <img
              className="h-28 object-contain max-sm:h-16"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <button onClick={handleNav} className=" block lg:hidden">
          {nav ? (
            <AiOutlineClose size={40} />
          ) : (
            <AiOutlineMenu className="hover:cursor-pointer" size={30} />
          )}
        </button>
      </div>

      <div
        onClick={handleNav}
        class={`
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
        <div className="header-navbar-responsive flex justify-between items-center">
          <AiOutlineClose
            onClick={handleNav}
            size={30}
            className="hover:cursor-pointer absolute right-0 pr-2 text-blue-600"
          />
        </div>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
          <Link to="/" onClick={handleNav}>
            {t("header.home")}
          </Link>
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
          <Link to="/Fundacion" onClick={handleNav}>
            {t("header.foundation")}
          </Link>
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
          <Link onClick={handleClikPopupQH} className="flex items-center">
            {t("header.what_we_do")}{" "}
            <svg
              className="ml-1 text-blue-300 w-3 h-3"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </Link>

          {queHacemos && (
            <ul className="pl-4">
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                <Link to="/dataAnalyctis" onClick={handleNav}>
                  {t("header.sub_header.data_analytics")}
                </Link>
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                <Link
                  to="/intervencion/fortalecimiento-academico"
                  onClick={handleNav}
                >
                  {t("header.sub_header.socio_emotional_intervention")}
                </Link>
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                <Link
                  to="/comunicaciones"
                  onClick={handleNav}
                  className="border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
                >
                  {t("header.sub_header.communications")}
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
          <Link onClick={handleClikPopupServices} className="flex items-center">
            {t("header.services")}{" "}
            <svg
              className="ml-1 text-blue-300 w-3 h-3"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </Link>

          {servicios && (
            <ul className="pl-4">
              <li
                onMouseEnter={handleMouseEnter}
                className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out"
              >
                {t("header.sub_header.for_students")}

                {students && (
                  <ul className="pl-4">
                    <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                      <Link
                        to="/ApoyoAcademico"
                        onClick={handleNav}
                        className=" hover:opacity-55 hover:text-dark-blue cursor-pointer"
                      >
                        <span className="font-bold">01.</span>{" "}
                        {t("header.sub_header.academic_support")}
                      </Link>
                    </li>
                    {/*<li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                      <Link
                        to="http://ww25.boe.antivirusparaladesercion.com/?subid1=20240613-1351-4868-a8d0-442c08b62acd"
                        onClick={handleNav}
                        className=" hover:opacity-55 hover:text-dark-blue cursor-pointer"
                      >
                        <span className="font-bold">02. </span>{" "}
                        {t("header.sub_header.boe")}
                      </Link>
                    </li> */}
                    <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                      <Link
                        to="/AcompañamientoOrientacion"
                        onClick={handleNav}
                        className=" hover:opacity-55 hover:text-dark-blue cursor-pointer"
                      >
                        <span className="font-bold">02. </span>
                        {t("header.sub_header.accompaniment_and_guidance")}
                      </Link>
                    </li>
                    <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                      <Link
                        to="/Repositorio"
                        onClick={handleNav}
                        className=" hover:opacity-55 hover:text-dark-blue cursor-pointer"
                      >
                        <span className="font-bold">03. </span>{" "}
                        {t("header.sub_header.repository")}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                <Link
                  to="/consultorias"
                  onClick={handleNav}
                  className="border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
                >
                  {t("header.sub_header.consulting")}
                </Link>
              </li>
              <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
                <Link
                  to="/provocacion"
                  onClick={handleNav}
                  className="border-b-4 hover:opacity-55 hover:text-purple-300 cursor-pointer"
                >
                  {t("header.sub_header.pro_vocation")}
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
          <Link to="/News" onClick={handleNav}>
            {t("header.news")}
          </Link>
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
          <Link to="/ContactUs" onClick={handleNav}>
            {t("header.contact_us")}
          </Link>
        </li>

        <li className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out">
          <Link onClick={handleClikPopupIdioma} className="flex items-center">
            {t("header.language")}{" "}
            <svg
              className="ml-1 text-blue-300 w-3 h-3"
              viewBox="0 0 5 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </Link>

          {idioma && (
            <ul className="pl-4">
              <li
                onClick={() => {
                  i18n.changeLanguage("en");
                  localStorage.setItem("i18nextLng", "en");
                  handleNav();
                }}
                className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out"
              >
                {t("header.options_english")}
              </li>
              <li
                onClick={() => {
                  i18n.changeLanguage("es");
                  localStorage.setItem("i18nextLng", "es");
                  handleNav();
                }}
                className="p-2 text-dark-blue font-extrabold uppercase leading-none transition duration-400 ease-in-out"
              >
                {t("header.options_spanish")}
              </li>
            </ul>
          )}
        </li>
        <button
          onClick={() =>
            window.open("https://forms.gle/cepdWwfdcpFdcVNj8", "_blank")
          }
          className="flex items-center justify-center py-3 px-4 bg-primary-purple rounded-3xl text-white font-bold hover:bg-orange-500 transition duration-700 transform hover:scale-105 max-xl:py-2"
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
      </ul>
    </>
  );
}

export default Header;
