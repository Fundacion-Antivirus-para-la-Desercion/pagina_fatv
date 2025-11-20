import { useTranslation } from "react-i18next";
import Logo from "../../../public/logo.png";
import { motion, useInView } from "framer-motion";

function StudentRetentionService() {
  const { t } = useTranslation();

  return (
    <>
      <section className="text-center mt-10 md:mt-0">
        <div className="flex items-center justify-center my-6">
          <span className="block w-16 h-[3px] bg-[#FFBA08] mr-4"></span>
          <h2 className="text-[#32526E] font-bold text-sm tracking-[0.3rem]">
            {t(
              "studentRetentionManagement.studentRetentionService.ourServices"
            )}
          </h2>
          <span className="block w-16 h-[3px] bg-[#FFBA08] ml-4"></span>
        </div>
        <h4 className="text-3xl md:text-5xl text-blueBase font-impact">
          {t("studentRetentionManagement.studentRetentionService.title")} <br />
          <span className="text-[#FFBA08]">
            {t("studentRetentionManagement.studentRetentionService.titleSpan")}
          </span>
        </h4>
        <p className="mt-3 text-lg text-[#222D56]">
          {t("studentRetentionManagement.studentRetentionService.description")}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-8 mt-10 place-items-center">
        <div className="flex flex-col items-center border-4 p-5 border-[#FFBA08] rounded-xl bg-[#FFF8E6] h-[420px] w-[350px]">
          <span className="text-2xl block text-left font-impact m-5 text-[#FFBA08]">
            {t("studentRetentionManagement.services.academic.title")}
          </span>
          <p className="text-base mb-3 text-blueBase text-justify">
            {t("studentRetentionManagement.services.academic.description")}
          </p>
          <ul className="">
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.academic.itemOne")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.academic.itemTwo")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.academic.itemThree")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.academic.itemFour")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.academic.itemFive")}
            </li>
          </ul>
        </div>

        <div className="hidden md:block row-span-2 rounded-full flex-col items-center justify-center border-[6px] p-5 border-[#FFBA08] h-[350px] w-[350px] border-5">
          <span className="flex justify-center text-6xl align-middle ">🎓</span>

          <p className="text-3xl text-[#222D56] font-impact text-center p-5">
            {t(
              "studentRetentionManagement.studentRetentionService.centralTitle"
            )}{" "}
            <span className="text-[#FFBA08]">
              <br />{" "}
              {t(
                "studentRetentionManagement.studentRetentionService.centralTitleSpan"
              )}{" "}
            </span>
          </p>
          <p className="text-lg text-center p-2">
            {t(
              "studentRetentionManagement.studentRetentionService.centralParagraph"
            )}
          </p>
        </div>

        <div className="flex flex-col items-center border-4 p-5 border-[#2C9BC7] rounded-xl bg-[#CCEDE8] h-[420px] w-[350px]">
          <span className="text-2xl block text-left font-impact m-5 text-[#2C9BC7]">
            {t("studentRetentionManagement.services.socioEmotional.title")}
          </span>
          <p className="text-base mb-3 text-blueBase text-justify">
            {t(
              "studentRetentionManagement.services.socioEmotional.description"
            )}
          </p>
          <ul className="">
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioEmotional.itemOne")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioEmotional.itemTwo")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t(
                "studentRetentionManagement.services.socioEmotional.itemThree"
              )}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioEmotional.itemFour")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioEmotional.itemFive")}
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center border-4 p-5 border-[#7C76B5] rounded-xl bg-[#D3C3E3] h-[420px] w-[350px]">
          <span className="text-2xl block text-left font-impact m-5 text-[#7C76B5]">
            {t("studentRetentionManagement.services.socioEconomic.title")}
          </span>
          <p className="text-base mb-3 text-blueBase text-justify">
            {t("studentRetentionManagement.services.socioEconomic.description")}
          </p>
          <ul className="">
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioEconomic.itemOne")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioEconomic.itemTwo")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioEconomic.itemThree")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioEconomic.itemFour")}
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center border-4 p-5 border-[#0B8F84] rounded-xl bg-[#CCEDE8] h-[420px] w-[350px]">
          <span className="text-2xl block text-left font-impact m-5 text-[#0B8F84]">
            {t("studentRetentionManagement.services.socioVocational.title")}
          </span>
          <p className="text-base mb-3 text-blueBase text-justify">
            {t(
              "studentRetentionManagement.services.socioVocational.description"
            )}
          </p>
          <ul className="">
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioVocational.itemOne")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t("studentRetentionManagement.services.socioVocational.itemTwo")}
            </li>
            <li className="bg-white p-2 m-2 text-sm font-bold text-blueBase rounded-lg w-[260px]">
              {t(
                "studentRetentionManagement.services.socioVocational.itemThree"
              )}
            </li>
          </ul>
        </div>
      </section>

      <section className="flex justify-center mt-5 items-center min-h-screen">
        <div className="relative p-[5px] m-5 rounded-2xl bg-gradient-to-r from-[#222D56] via-[#0B8F84] to-[#FFBA08] w-[1000px] h-[450px] shadow-2xl">
          <section className="bg-white text-center p-10 w-full h-full rounded-[14px] flex flex-col justify-center">
            <div className="mb-5 mt-5">
              <span className="text-5xl align-middle">🎯</span>
              <span className="text-5xl align-middle">💙</span>
              <span className="text-5xl align-middle">💰</span>
              <span className="text-5xl align-middle">📚</span>
            </div>
            <div>
              <h5 className="text-3xl md:text-5xl m-5 md:mt-10 font-impact text-[#FFBA08]">
                TU PERMANENCIA{" "}
                <span className="text-[#222D56]">ES NUESTRAPRIORIDAD</span>
              </h5>
              <p className="text-blueBase text-lg max-w-2xl mx-auto">
                Un ecosistema completo diseñado para acompañarte en cada paso de
                tu camino universitario.{" "}
                <strong className="text-[#28A499]">
                  Juntos construimos tu éxito
                </strong>
                .
              </p>
            </div>
            <div>
              {" "}
              <button className="px-8 py-3 mt-8 text-white text-xl font-impact border-2 rounded-3xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg  bg-gradient-to-r from-[#FFBA08] to-[#0B8F84]">
                ¡COMIENZA AHORA!
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export default StudentRetentionService;
