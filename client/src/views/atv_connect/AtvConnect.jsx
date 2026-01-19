import React from "react";
import BannerAtvConnectEn from "../../assets/images/views/atvConnect/academic-tutoring.webp";
import BannerAtvConnectEs from "../../assets/images/views/atvConnect/tutorias-academicas.webp";
import LogoAtvConecta from "../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import BannerView from "../../components/Banner-views/BannerView";
import { LuGraduationCap } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import CounterNumeric from "../../components/ContextData/CounterNumer.jsx";
import { useTranslation } from "react-i18next";

function AtvConnect() {
  const { t } = useTranslation();

  return (
    <>
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerAtvConnectEn,
            esImage: BannerAtvConnectEs,
            keyTitle: "studentRetentionManagement.alt_img_banner",
          }}
        />
      </div>
      <section className="bg-primary-purple flex justify-center items-center flex-col p-5 md:p-10">
        <img
          className="w-28 h-auto md:w-36 md:h-auto"
          src={LogoAtvConecta}
          alt="Logo ATVConecta"
        />
        <p className="text-center text-xl md:text-2xl max-w-[700px] text-white p-3">
          {t("atvConnect.description_one")}
          <span className="text-primary-yellow ">
            {t("atvConnect.description_span")}
          </span>
          {t("atvConnect.description_two")}
        </p>
      </section>

      <section className="max-w-4xl mx-auto m-10">
        <section className="flex flex-col items-center p-10">
          {" "}
          <span className="text-base font-impact text-primary-purple">
            {t("atvConnect.span_title")}
          </span>
          <h1 className="text-3xl md:text-5xl font-impact text-blue-base">
            {t("atvConnect.title")}
          </h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 justify-items-center p-5">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <LuGraduationCap className="text-3xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={2500} />+
            </span>
            <p className="text-base text-dark-blue">{t("atvConnect.figures_impact.figure_one")}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <GoPeople className="text-3xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={150} />+
            </span>
            <p className="text-base text-dark-blue">{t("atvConnect.figures_impact.figure_two")}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <IoBookOutline className="text-3xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={15000} />+
            </span>
            <p className="text-base text-dark-blue">{t("atvConnect.figures_impact.figure_three")}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#E5E7ED] rounded-2xl m-3 hover:scale-110 duration-300">
              <CiHeart className="text-4xl text-dark-blue" />
            </div>
            <span className="statistic-number text-dark-blue text-3xl md:text-4xl font-impact">
              <CounterNumeric countNumber={98} />%
            </span>
            <p className="text-base text-dark-blue">{t("atvConnect.figures_impact.figure_four")}</p>
          </div>
        </section>
      </section>
      <section className="bg-dark-blue p-5 mb-5">
        <ol className="md:flex justify-center list-none text-white text-justify text-lg md:text-base">
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_one")}
          </li>
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_two")}
          </li>
          <li className="m-5 md:m-0 md:mr-8">
            {t("atvConnect.list.item_three")}
          </li>
        </ol>
      </section>
    </>
  );
}

export default AtvConnect;
