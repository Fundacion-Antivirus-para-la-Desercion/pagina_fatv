import { useTranslation } from "react-i18next";
import Javi from "../assets/images/views/javi/javi-feliz.svg";
import JaviGuinandoOjo from "../assets/images/views/javi/javi-guina-el-ojo.svg";
import BannerRetentionEn from "../assets/images/views/studentretentionManagement/banner-student-retetion-managment.webp";
import BannerRetentionEs from "../assets/images/views/studentretentionManagement/banner-gestion-de-la-permanencia.webp";
import Grupo from "../assets/images/views/studentretentionManagement/manos.webp";
import Graduado from "../assets/images/views/studentretentionManagement/graduado.webp";
import { motion, useInView } from "framer-motion";
import CounterNumeric from "../components/ContextData/CounterNumer.jsx";
import styles from "./StudentRetentionManagement.module.css";
import StudentRetentionService from "../components/studentRetentionManagement/StudentRetentionService.jsx";
import useImageByLanguage from "../hooks/useImageByLanguage.js";
import BannerView from "../components/Banner-views/BannerView.jsx";
import BannerRetentionEn1 from "../assets/images/views/studentretentionManagement/Bannersitioweb_3.jpg.jpeg";

function StudentRetentionManagement() {
  const { t } = useTranslation();

  const expandableTransition = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.9, ease: "easeOut" },
    viewport: { once: true },
  };

  const slideFromLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const slideFromRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
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

  const whatsAppNumber = "573173831481";

  return (
    <section className="lg:pt-[145px]">
      <BannerView
        imagesBannerMap={{
          enImage: BannerRetentionEn,
          esImage: BannerRetentionEn1,
          keyTitle: "studentRetentionManagement.alt_img_banner",
        }}
      />

      <section className="grid grid-cols-1 lg:grid-cols-2 container text-center mx-auto md:my-10">
        <div>
          <h1 className="lineSubtitle m-5 mt-8 md:m-2 md:mt-16 text-4xl text-blue-base md:text-5xl font-impact">
            {t("studentRetentionManagement.title")}
          </h1>

          <div className="flex flex-col items-center lg:items-end md:mr-20">
            <motion.div {...slideFromLeft}>
              {" "}
              <p className="m-5 w-[350px] text-lg text-blue-base md:w-[420px] p-5 bg-gradient-to-r from-[#FFEBB8] border-l-4 border-primary-yellow transform hover:scale-105 transition-all duration-500">
                {t("studentRetentionManagement.objectiveOne.text_one")}{" "}
                <span className="text-primary-yellow font-bold">
                  {t("studentRetentionManagement.objectiveOne.span")}
                </span>{" "}
                {t("studentRetentionManagement.objectiveOne.text_two")}
              </p>
            </motion.div>
            <motion.div {...slideFromLeft}>
              <p className="m-5 w-[350px] text-lg text-blue-base md:w-[420px] p-5 bg-gradient-to-r from-[#E8FCFB] border-l-4 border-[#28A499] transform hover:scale-105 transition-all duration-500">
                {t("studentRetentionManagement.objectiveTwo.text_one")}{" "}
                <span className="text-[#28A499] font-bold">
                  {t("studentRetentionManagement.objectiveTwo.span")}
                </span>{" "}
                {t("studentRetentionManagement.objectiveTwo.text_two")}
              </p>
            </motion.div>
            <motion.div {...slideFromLeft}>
              <p className="m-5 w-[350px] text-lg text-blue-base md:w-[420px] p-5 bg-gradient-to-r from-[#D3C3E3] border-l-4 border-[#7C76B5] transform hover:scale-105 transition-all duration-500">
                {t("studentRetentionManagement.objectiveThree.text_one")}{" "}
                <span className="text-[#7C76B5] font-bold">
                  {t("studentRetentionManagement.objectiveThree.span")}
                </span>{" "}
                {t("studentRetentionManagement.objectiveThree.text_two")}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-dark-blue rounded-3xl m-3 p-8 text-center max-w-[540px] lg:mx-[700]">
          <motion.div
            {...floatSnake(0)}
            className="self-start relative ml-auto -top-10 w-[55px] h-[55px] rounded-full bg-[#ffffff13]  z-[2]"
          ></motion.div>
          <motion.div {...floatSnake(0)}>
            {" "}
            <img
              className="w-[150px] h-auto mb-4"
              src={Javi}
              alt={t("studentRetentionManagement.cardJavi.alt_img_javi")}
            />
          </motion.div>
          <p className="text-white text-2xl font-impact">
            {t("studentRetentionManagement.cardJavi.title_part_one")} <br />{" "}
            <span className="text-primary-yellow">
              {t("studentRetentionManagement.cardJavi.title_part_two")}
            </span>
          </p>
          <p className="text-white text-lg w-full md:w-[450px] h-auto mt-4 rounded-2x rounded-2xl border p-4 bg-[#42688dbd] border-white">
            {t("studentRetentionManagement.cardJavi.description_one")} <br />{" "}
            <span className="text-primary-yellow font-bold">
              {" "}
              {t("studentRetentionManagement.cardJavi.span")}
            </span>{" "}
            {t("studentRetentionManagement.cardJavi.description_two")}
          </p>
          <div className="grid grid-cols-3 justify-between w-full max-w-[350px] mt-10">
            <span className="text-2xl font-renogare text-primary-yellow">
              +
              <CounterNumeric countNumber={10000} />
            </span>
            <span className="text-2xl font-renogare text-[#DCEBF9]">
              +
              <CounterNumeric countNumber={5} />
            </span>
            <span className="text-2xl font-renogare text-white">
              <CounterNumeric countNumber={100} />%
            </span>
          </div>
          <div className="grid grid-cols-3 justify-between w-full max-w-[350px] mt-1">
            <p className="text-sm  text-white">
              {" "}
              {t("studentRetentionManagement.cardJavi.students")}
            </p>
            <p className="text-sm  text-white">
              {t("studentRetentionManagement.cardJavi.years")}
            </p>
            <p className="text-sm  text-white">
              {t("studentRetentionManagement.cardJavi.commitment")}
            </p>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="transform origin-bottom mt-5 p-[0.05rem]">
          <div className={styles.blueBar}>
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `
        linear-gradient(to right, #32526E 1px, transparent 1px),
        linear-gradient(to bottom, #32526E 1px, transparent 1px)
      `,
                backgroundSize: "48px 48px, 48px 48px",
              }}
            />
          </div>
          <div className={styles.orangeBar}></div>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-2 justify-center text-center">
            <motion.div className="will-change-transform" {...slideFromLeft}>
              <h2 className="text-5xl text-center m-7 md:text-7xl md:ml-10 md:m-5 md:mt-20 font-impact text-white p-2">
                {t("studentRetentionManagement.success.title")}
              </h2>

              <section className="relative">
                <div className="mt-10 md:mt-5 md:absolute md:ml-4 md:top-20">
                  <p className="shadow-lg text-center md:text-left text-lg md:text-lg sm:text-lg text-dark-blue w-[340px] h-[90px] md:h-[75px] md:w-[560px] p-5 bg-[#FFFEFE] rounded-2xl border-l-4 border-primary-yellow mx-auto md:mx-0 transform hover:scale-105 transition-transform duration-300">
                    {t("studentRetentionManagement.success.paragraph_one")}{" "}
                    <span className="text-primary-yellow font-bold">
                      {t(
                        "studentRetentionManagement.success.paragraph_one_span"
                      )}
                    </span>{" "}
                  </p>

                  <p className="shadow-lg text-center md:text-left mt-4 text-lg md:text-lg sm:text-lg text-dark-blue w-[340px] h-[90px] md:h-[75px] md:w-[560px] p-5 bg-[#FFFEFE] rounded-2xl border-l-4 border-[#28A499] mx-auto md:mx-0 transform hover:scale-105 transition-transform duration-300">
                    {t("studentRetentionManagement.success.paragraph_two")}{" "}
                    <span className="text-[#28A499] font-bold">
                      {t(
                        "studentRetentionManagement.success.paragraph_two_span"
                      )}
                    </span>{" "}
                  </p>
                </div>
              </section>
            </motion.div>
            <motion.div className="will-change-transform" {...slideFromRight}>
              {" "}
              <div className="content-center flex flex-col items-center md:items-start">
                <div className="mt-5 md:mt-0 relative flex flex-col w-[350px] md:w-[500px] md:-rotate-3 transition duration-500 ease-in-out md:hover:rotate-0">
                  <img
                    className="shadow-xl w-full border-4 border-white rounded-2xl md:min-h-[350px] object-cover"
                    src={Grupo}
                    alt={t("studentRetentionManagement.success.alt_img_group")}
                  />

                  <p className="absolute bottom-1 left-0 right-0 w-[98%] mx-auto bg-black bg-opacity-50 text-white p-2 text-center rounded-b-xl">
                    {t("studentRetentionManagement.success.message_group")}
                  </p>
                </div>

                <div className="relative flex flex-col md:left-36 w-[300px] md:w-[400px] md:rotate-3 mt-3 transition duration-500 ease-in-out md:hover:rotate-0">
                  <img
                    className="shadow-xl w-full border-4 border-white rounded-2xl"
                    src={Graduado}
                    alt={t(
                      "studentRetentionManagement.success.alt_img_graduate"
                    )}
                  />
                  <p className="absolute bottom-1 left-0 right-0 w-[98%] mx-auto bg-black bg-opacity-50 text-white p-2 text-center rounded-xl">
                    {t("studentRetentionManagement.success.message_graduate")}
                  </p>
                </div>
              </div>{" "}
            </motion.div>
          </section>
        </div>
        <div className="absolute flex justify-center mt-10 md:mb-0 md:mt-0 md:justify-start items-center md:ml-2">
          <motion.div {...floatSnake(0)}>
            <img
              className="relative md:bottom-20 w-[100px] mr-2 drop-shadow-[0px_0px_6px_rgba(255,186,8,1)]"
              src={JaviGuinandoOjo}
              alt=""
            />
          </motion.div>
          <div>
            <a
              className="flex relative md:bottom-20 px-4 py-1 bg-white text-dark-blue border font-bold text-lg rounded-2xl shadow-2xl"
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("studentRetentionManagement.success.btn_whatsapp")}
            </a>
          </div>
        </div>
      </section>
      <StudentRetentionService />
    </section>
  );
}
export default StudentRetentionManagement;
