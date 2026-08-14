import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  JAVI_SVG as JaviGuinandoOjo,
  MANOS_IMG as Grupo,
  GRADUADO_IMG as Graduado,
} from "../../../../assets/cloudinaryImages";
import styles from "../../../StudentRetentionManagement.module.css";
import WhatsAppRedirect from "../../../../components/whatsAppRedirect/WhatsAppRedirect.js";
import {
  slideFromLeft,
  slideFromRight,
  floatSnake,
} from "../../../../components/motion/constants/Animations.js";

function StudentSuccess() {
  const { t } = useTranslation();

  return (
    <section id="student-success" className="relative">
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
        <section className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-4 lg:mt-2 justify-center text-center">
          <motion.div className="will-change-transform" {...slideFromLeft}>
            <h2 className="text-5xl text-center m-7 md:text-7xl md:ml-10 md:m-5 md:mt-12 font-impact text-white p-2">
              {t("studentRetentionManagement.success.title")}
            </h2>

            <section className="relative">
              <div className="mt-10 md:mt-5 xl:absolute lg:ml-4 lg:top-16">
                <p className="shadow-lg text-center md:text-left text-lg md:text-lg sm:text-lg text-dark-blue w-[340px] md:w-[560px] p-5 bg-[#FFFEFE] rounded-2xl border-l-4 border-primary-yellow mx-auto md:mx-0 transform hover:scale-105 transition-transform duration-300">
                  {t("studentRetentionManagement.success.paragraph_one")}{" "}
                  <span className="text-primary-yellow font-bold">
                    {t("studentRetentionManagement.success.paragraph_one_span")}
                  </span>{" "}
                </p>

                <p className="shadow-lg text-center md:text-left mt-4 text-lg md:text-lg sm:text-lg text-dark-blue w-[340px] md:w-[560px] p-5 bg-[#FFFEFE] rounded-2xl border-l-4 border-[#28A499] mx-auto md:mx-0 transform hover:scale-105 transition-transform duration-300">
                  {t("studentRetentionManagement.success.paragraph_two")}{" "}
                  <span className="text-[#28A499] font-bold">
                    {t("studentRetentionManagement.success.paragraph_two_span")}
                  </span>{" "}
                </p>
              </div>
            </section>
          </motion.div>
          <motion.div
            className="will-change-transform"
            {...slideFromRight({ transition: { delay: 0 } })}
          >
            {" "}
            <div className="content-center flex flex-col items-center lg:items-start flex-wrap">
              <div className="mt-5 md:mt-0 relative flex flex-col w-[350px] md:w-[500px] lg:-rotate-3 transition duration-500 ease-in-out md:hover:rotate-0">
                <img
                  className="shadow-xl w-full border-4 border-white rounded-2xl md:min-h-[350px] object-cover"
                  src={Grupo}
                  alt={t("studentRetentionManagement.success.alt_img_group")}
                  loading="lazy"
                />

                <p className="absolute bottom-1 left-0 right-0 w-[98%] mx-auto bg-black bg-opacity-50 text-white p-2 text-center rounded-b-xl">
                  {t("studentRetentionManagement.success.message_group")}
                </p>
              </div>

              <div className="relative flex flex-col md:left-36 w-[300px] md:w-[400px] md:rotate-3 mt-3 transition duration-500 ease-in-out md:hover:rotate-0">
                <img
                  className="shadow-xl w-full border-4 border-white rounded-2xl"
                  src={Graduado}
                  loading="lazy"
                  alt={t("studentRetentionManagement.success.alt_img_graduate")}
                />
                <p className="absolute bottom-1 left-0 right-0 w-[98%] mx-auto bg-black bg-opacity-50 text-white p-2 text-center rounded-xl">
                  {t("studentRetentionManagement.success.message_graduate")}
                </p>
              </div>
            </div>{" "}
          </motion.div>
        </section>
        <section className="relative bottom-0 md:bottom-48 xl:bottom-36">
          <div className="absolute flex justify-center mt-10 lg:mb-0 lg:mt-0 lg:justify-start items-center ml-12 xl:ml-24">
            <motion.div
              {...floatSnake({ transition: { duration: 3, delay: 0 } })}
            >
              <img
                className="relative w-[100px] mr-2 drop-shadow-[0px_0px_6px_rgba(255,186,8,1)]"
                src={JaviGuinandoOjo}
                alt=""
                loading="lazy"
              />
            </motion.div>
            <div>
              <a
                className="flex relative px-4 py-1 bg-white text-dark-blue border font-bold text-lg rounded-2xl shadow-2xl"
                href={WhatsAppRedirect(t("whatsappMessage.studentRetention"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("studentRetentionManagement.success.btn_whatsapp")}
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default StudentSuccess;
