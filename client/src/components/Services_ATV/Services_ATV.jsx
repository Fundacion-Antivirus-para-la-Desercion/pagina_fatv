import "./Services_ATV.css";
import "boxicons";
import { useTranslation } from "react-i18next";
import Focus from "../../assets/images/views/proVocacion/information/focus-blanco.webp";
import Graduados from "../../assets/images/views/proVocacion/information/graduados.webp";
import Aliados from "../../assets/images/views/proVocacion/information/aliados.webp";
import LogoAtvConecta from "../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import { Link } from "react-router-dom";

const ServicesATV = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="services" className="relative text-blueBase p-5 py-10 md:py-16 bg-[#222d56ea]">
        <div className="flex flex-col items-center">
          <section>
            <div>
              <h1 className="font-impact text-center text-2xl md:text-5xl mb-10 md:mb-10 text-white">
                {t("home.servicesATV.title")}
              </h1>
            </div>
          </section>

          <section className="container flex flex-wrap gap-10 md:gap-5 justify-center  items-stretch">
            <div className="relative bg-white p-4 border-4 border-white rounded-xl shadow-2xl max-w-[300px] mb-5">
              <section className="mb-5 md:mb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 bg-[#FFBA08] rounded-full"
                    src={Graduados}
                    alt={t("home.servicesATV.image_alt_text")}
                  />
                </div>
              </section>
              <section>
                <div className="">
                  <h3 className="mb-5 md:mb-10 text-blueBase text-lg text-center font-bold">
                    {t("home.servicesATV.services.permanence_title")}
                  </h3>
                  <p className="mb-5 md:mb-8 text-justify">
                    {t("home.servicesATV.services.permanence_description")}
                  </p>
                </div>
              </section>
              <section>
                <div className="">
                  <button className="block m-auto w-fit bg-[#FFBA08] text-white p-4 px-8 rounded-xl text-lg absolute bottom-[-30px] left-0 right-0 duration-300 hover:-translate-y-1">
                    {t("home.servicesATV.services.more_info")}
                  </button>
                </div>
              </section>
            </div>

            <div className="relative bg-white p-4 border-4 border-white rounded-xl shadow-2xl max-w-[300px] mb-5">
              <section className="mb-5 md:mb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 bg-[#222D56] rounded-full"
                    src={Aliados}
                    alt={t("home.servicesATV.image_alt_text")}
                  />
                </div>
              </section>
              <section>
                <div className="">
                  <h3 className="mb-5 md:mb-10 text-blueBase text-lg text-center font-bold">
                    {t(
                      "home.servicesATV.services.persistence_consulting_title"
                    )}
                  </h3>
                  <p className="mb-5 md:mb-8 text-justify">
                    {t(
                      "home.servicesATV.services.persistence_consulting_description"
                    )}
                  </p>
                </div>
              </section>
              <section>
                <div className="">
                  <button className="block m-auto w-fit bg-[#FFBA08] text-white p-4 px-8 rounded-xl text-lg absolute bottom-[-30px] left-0 right-0 duration-300 hover:-translate-y-1">
                    {t("home.servicesATV.services.more_info")}
                  </button>
                </div>
              </section>
            </div>

            <div className="relative bg-white p-4 border-4 border-white rounded-xl shadow-2xl max-w-[300px] mb-5">
              <section className="mb-5 md:mb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 bg-[#7C76B5] rounded-full"
                    src={Focus}
                    alt={t("home.servicesATV.image_alt_text")}
                  />
                </div>
              </section>
              <section>
                <div className="">
                  <h3 className="mb-5 md:mb-10 text-blueBase text-lg text-center font-bold">
                    {t(
                      "home.servicesATV.services.socio_vocational_guidance_title"
                    )}
                  </h3>
                  <p className="mb-5 md:mb-8 text-justify">
                    {t(
                      "home.servicesATV.services.socio_vocational_guidance_description"
                    )}
                  </p>
                </div>
              </section>
              <section>
                <div className="">
                  <Link
                    className="block m-auto w-fit bg-[#FFBA08] text-white p-4 px-8 rounded-xl text-lg absolute bottom-[-30px] left-0 right-0 duration-300 hover:-translate-y-1"
                    to="/provocacion"
                  >
                    {t("home.servicesATV.services.more_info")}
                  </Link>
                </div>
              </section>
            </div>

            <div className="relative bg-white p-4 border-4 border-white rounded-xl shadow-2xl max-w-[300px] mb-5">
              <section className="mb-5 md:mb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 bg-[#FFBA08] rounded-full"
                    src={LogoAtvConecta}
                    alt={t("home.servicesATV.image_alt_text")}
                  />
                </div>
              </section>
              <section>
                <div className="">
                  <h3 className="mb-5 md:mb-10 text-blueBase text-lg text-center font-bold">
                    {t("home.servicesATV.services.atvconnect_title")}
                    <br />
                    {t("home.servicesATV.services.atvconnect_title_two")}
                  </h3>

                  <p className="mb-5 md:mb-8 text-justify">
                    {t("home.servicesATV.services.atvconnect_description")}
                  </p>
                </div>
              </section>
              <section>
                <div className="">
                  <button className="block m-auto w-fit bg-[#FFBA08] text-white p-4 px-8 rounded-xl text-lg absolute bottom-[-30px] left-0 right-0 duration-300 hover:-translate-y-1">
                    {t("home.servicesATV.services.more_info")}
                  </button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ServicesATV;
