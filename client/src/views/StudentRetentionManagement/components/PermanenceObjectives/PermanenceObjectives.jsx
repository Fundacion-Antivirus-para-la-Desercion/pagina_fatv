import { useTranslation } from "react-i18next";
import CounterNumeric from "../../../../components/ContextData/CounterNumer.jsx";
import { JAVI_FELIZ_SVG as Javi } from "../../../../assets/cloudinaryImages.js";
import { motion } from "framer-motion";
import {
  floatSnake,
  slideFromLeft,
} from "../../../../components/motion/constants/Animations.js";

function PermanenceObjectives() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 gap-10">
      <div className="flex flex-col items-center max-w-[700px]">
        <h1 className="lineSubtitle m-5 mt-8 md:m-2 md:mt-16 text-4xl text-center text-blue-base md:text-5xl font-impact">
          {t("studentRetentionManagement.title")}
        </h1>
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
            loading="lazy"
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
  );
}

export default PermanenceObjectives;
