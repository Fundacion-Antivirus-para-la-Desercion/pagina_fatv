import { useTranslation } from "react-i18next";
import Javi from "../assets/images/views/javi/javi-feliz.svg";
import JaviGinandoOjo from "../assets/images/views/javi/javi-guina-el-ojo.svg";
import Grupo from "../assets/images/views/studentretentionManagement/manos.jpg";
import Graduado from "../assets/images/views/studentretentionManagement/graduado.png";
import { motion, useInView } from "framer-motion";
import CounterNumeric from "../components/ContextData/CounterNumer.jsx";
import styles from "./StudentRetentionManagement.module.css";

function StudentRetentionManagement() {
  const { t } = useTranslation();

  const expandableTransition = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
  };

  const slideFromLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.7 },
  };

  const whatsAppNumber = "573173831481";

  return (
    <section className="lg:pt-[145px]">
      <div className="relative w-full h-72 sm:h-80 md:h-96">
        <div className="absolute inset-0 bg-blue-links"></div>
        <h1 className="absolute inset-0 flex items-center justify-center font-impact text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-banner">
          {t("studentRetentionManagement.heading")}
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
      <section className="grid grid-cols-1 lg:grid-cols-2 container mx-auto md:my-10">
        <div>
          <h2 className="lineSubtitle m-5 mt-8 md:m-2 text-4xl text-blueBase md:text-5xl font-impact">
            {t("studentRetentionManagement.title")}
          </h2>

          <div className="flex flex-col items-center lg:items-end md:mr-20 ">
            <motion.div {...slideFromLeft}>
              {" "}
              <p className="m-5 w-[350px] text-lg text-blueBase md:w-[420px] p-5 bg-gradient-to-r from-[#FFEBB8] border-l-4 border-[#FFBA08]">
                {t("studentRetentionManagement.objectiveOne.text_one")}{" "}
                <span className="text-[#FFBA08] font-bold">
                  {t("studentRetentionManagement.objectiveOne.span")}
                </span>{" "}
                {t("studentRetentionManagement.objectiveOne.text_two")}
              </p>
            </motion.div>
            <motion.div {...slideFromLeft}>
              <p className="m-5 w-[350px] text-lg text-blueBase md:w-[420px] p-5 bg-gradient-to-r from-[#E8FCFB] border-l-4 border-[#28A499]">
                {t("studentRetentionManagement.objectiveTwo.text_one")}{" "}
                <span className="text-[#28A499] font-bold">
                  {t("studentRetentionManagement.objectiveTwo.span")}
                </span>{" "}
                {t("studentRetentionManagement.objectiveTwo.text_two")}
              </p>
            </motion.div>
            <motion.div {...slideFromLeft}>
              <p className="m-5 w-[350px] text-lg text-blueBase md:w-[420px] p-5 bg-gradient-to-r from-[#D3C3E3] border-l-4 border-[#7C76B5]">
                {t("studentRetentionManagement.objectiveThree.text_one")}{" "}
                <span className="text-[#7C76B5] font-bold">
                  {t("studentRetentionManagement.objectiveThree.span")}
                </span>{" "}
                {t("studentRetentionManagement.objectiveThree.text_two")}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#222D56] rounded-2xl m-3 p-8 text-center max-w-[600px] lg:mx-auto">
          <img
            className="w-[130px] h-auto mb-4"
            src={Javi}
            alt={t("studentRetentionManagement.cardJavi.alt_img_javi")}
          />

          <p className="text-white text-2xl font-impact">
            {t("studentRetentionManagement.cardJavi.title_part_one")} <br />{" "}
            <span className="text-[#FFBA08]">
              {t("studentRetentionManagement.cardJavi.title_part_two")}
            </span>
          </p>

          <p className="text-white text-lg w-full md:w-[400px] mt-4 rounded-lg  p-4 bg-[#5e7ea3] border-white">
            {t("studentRetentionManagement.cardJavi.description_one")} <br />{" "}
            <span className="text-[#FFBA08] font-bold">
              {" "}
              {t("studentRetentionManagement.cardJavi.span")}
            </span>{" "}
            {t("studentRetentionManagement.cardJavi.description_two")}
          </p>

          <div className="flex justify-between w-full max-w-[350px] mt-10">
            <span className="text-2xl font-renogare text-[#FFBA08]">
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
          <div className="flex justify-between w-full max-w-[350px] mt-1">
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
      <section>
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
            <div>
              <h3 className="text-4xl text-center m-7 md:text-7xl md:ml-10 md:m-5 md:mt-20 font-impact text-white p-2">
                {t("studentRetentionManagement.success.title")}
              </h3>

              <section className="relative">
                <div className="mt-5 md:absolute md:ml-2 md:top-36">
                  <p className="shadow-lg text-left font-bold text-base sm:text-lg text-blueBase w-[340px] md:w-[500px] p-5 bg-white rounded-xl border-l-4 border-[#FFBA08] mx-auto md:mx-0">
                    {t("studentRetentionManagement.success.paragraph_one")}{" "}
                    <span className="text-[#FFBA08] font-bold">
                      {t(
                        "studentRetentionManagement.success.paragraph_one_span"
                      )}
                    </span>{" "}
                  </p>

                  <p className="shadow-lg mt-4 font-bold text-base sm:text-lg text-blueBase w-[340px] md:w-[500px] p-5 bg-white rounded-xl border-l-4 border-[#28A499] mx-auto md:mx-0">
                    {t("studentRetentionManagement.success.paragraph_two")}{" "}
                    <span className="text-[#28A499] font-bold">
                      {t(
                        "studentRetentionManagement.success.paragraph_two_span"
                      )}
                    </span>{" "}
                  </p>
                </div>
              </section>
            </div>
            <div className="content-center flex flex-col items-center md:items-start">
              <div className="mt-5 md:mt-0 relative flex flex-col w-[350px] md:w-[500px] md:-rotate-3">
                <img
                  className="shadow-xl w-full border-4 border-white rounded-xl md:min-h-[350px] object-cover"
                  src={Grupo}
                  alt={t("studentRetentionManagement.success.alt_img_group")}
                />

                <p className="absolute bottom-1 left-0 right-0 w-[98%] mx-auto bg-black bg-opacity-50 text-white p-2 text-center rounded-b-xl">
                  {t("studentRetentionManagement.success.message_group")}
                </p>
              </div>
              <div className="relative flex flex-col md:left-36 w-[300px] md:w-[400px] md:rotate-3 mt-4">
                <img
                  className="shadow-xl w-full border-4 border-white rounded-xl"
                  src={Graduado}
                  alt={t("studentRetentionManagement.success.alt_img_graduate")}
                />
                <p className="absolute bottom-1 left-0 right-0 w-[98%] mx-auto bg-black bg-opacity-50 text-white p-2 text-center rounded-b-xl">
                  {t("studentRetentionManagement.success.message_graduate")}
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center mt-10 md:mt-0 md:justify-start items-center md:ml-2">
          <img
            className="w-[100px] mr-2 drop-shadow-[0px_0px_6px_rgba(255,186,8,1)]"
            src={JaviGinandoOjo}
            alt=""
          />
          <div>
            <a
              className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-2xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Estamos con tigo!💪
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
export default StudentRetentionManagement;
