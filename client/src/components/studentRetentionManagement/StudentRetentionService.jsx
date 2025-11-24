import { useTranslation } from "react-i18next";
import Logo from "../../../public/logo.png";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

function StudentRetentionService() {
  const { t } = useTranslation();

  const expandableTransition = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
  };

  const floatSnake = (delay = 0) => ({
    initial: { y: -10 },
    animate: { y: [0, -25, 0] },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
      delay,
    },
  });

  return (
    <>
      <section className="text-center mt-10 md:mt-10">
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

      <section className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-8 mt-16 place-items-center">
        <div className="relative flex flex-col items-center border-4 p-5 border-[#FFBA08] rounded-xl bg-[#FFF8E6] h-[420px] w-[350px]">
          <div className="absolute -top-6 -left-5 ml-2 bg-[#FFBA08] p-3 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-3xl">📚</span>
          </div>
          <span className="text-3xl block text-left font-impact m-5 text-[#FFBA08]">
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
          <p className="text-4xl text-[#222D56] font-impact text-center p-5">
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

        <div className="relative flex flex-col items-center border-4 p-5 border-[#2C9BC7] rounded-xl bg-[#CCEDE8] h-[420px] w-[350px]">
          <div className="absolute -top-6 right-5 ml-2 bg-[#2C9BC7] p-3 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-3xl">💙</span>
          </div>
          <span className="text-3xl block text-left font-impact m-5 text-[#2C9BC7]">
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

        <div className="relative flex flex-col items-center border-4 p-5 border-[#7C76B5] rounded-xl bg-[#D3C3E3] h-[420px] w-[350px]">
          <div className="absolute  -bottom-6 -left-5 ml-2 bg-[#7C76B5] p-3 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-3xl">💰</span>
          </div>
          <span className="text-3xl block text-left font-impact m-5 text-[#7C76B5]">
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

        <div className="relative flex flex-col items-center border-4 p-5 border-[#0B8F84] rounded-xl bg-[#CCEDE8] h-[420px] w-[350px]">
          <div className="absolute -bottom-6 right-5 ml-2 bg-[#0B8F84] p-3 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-3xl">🎯</span>
          </div>
          <span className="text-3xl block text-left font-impact m-5 text-[#0B8F84]">
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

      <motion.div {...expandableTransition}>
        <section className="flex justify-center items-center min-h-screen mt-5 md:mt-8 mb-2 px-3">
          <div className="relative p-[5px] rounded-3xl bg-gradient-to-r from-[#222D56] via-[#0B8F84] to-[#FFBA08] w-full max-w-[1020px] h-auto shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
            <section className="bg-white text-center p-8 md:p-10 w-full h-full rounded-[14px] flex flex-col justify-center">
              <div className="flex justify-center text-4xl md:text-6xl mt-8 md:mt-4">
                <motion.span {...floatSnake(0)} className="mx-2">
                  🎯
                </motion.span>
                <motion.span {...floatSnake(0.3)} className="mx-2">
                  💙
                </motion.span>
                <motion.span {...floatSnake(0.6)} className="mx-2">
                  💰
                </motion.span>
                <motion.span {...floatSnake(0.9)} className="mx-2">
                  📚
                </motion.span>
              </div>
              <h5 className="text-4xl md:text-5xl mt-6 font-impact text-[#FFBA08] px-3 leading-tight">
                {t("studentRetentionManagement.studentRetentionCard.title")}
                <span className="text-[#222D56]">
                  {" "}
                  {t("studentRetentionManagement.studentRetentionCard.span")}
                </span>
              </h5>
              <p className="text-blueBase text-base md:text-xl mt-4 px-3">
                {t(
                  "studentRetentionManagement.studentRetentionCard.description"
                )}{" "}
                <strong className="text-[#28A499]">
                  <br />{" "}
                  {t("studentRetentionManagement.studentRetentionCard.strong")}{" "}
                </strong>
              </p>
              <div className="flex justify-center">
                <Link
                  className="group px-16 py-6 relative overflow-hidden w-full max-w-[310px] h-[70px] md:h-[75px] mt-8 text-white text-xl md:text-2xl font-impact rounded-full shadow-xl bg-gradient-to-r from-[#FFBA08] to-[#0B8F84]  transform hover:scale-105 transition-all duration-500"
                  to="/ContactUs"
                >
                  <span className="relative">
                    {" "}
                    {t(
                      "studentRetentionManagement.studentRetentionCard.btnStartNow"
                    )}
                  </span>
                  <div class="absolute inset-0 bg-[#ffffff3a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </motion.div>
    </>
  );
}
export default StudentRetentionService;
