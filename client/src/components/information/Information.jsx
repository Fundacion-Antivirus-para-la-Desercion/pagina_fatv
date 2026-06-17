import EstudiantesDos from "../../assets/images/views/proVocacion/information/estudiantes-dos.jpeg";
import EstudiantesDiez from "../../assets/images/views/proVocacion/information/estudiantes-diez.jpeg";
import EstudiantesDieciseis from "../../assets/images/views/proVocacion/information/estudiantes-dieciseis.jpg";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { BiCreditCardAlt } from "react-icons/bi";

import {
  floatSnake,
  cardItemReveal,
  expandableTransition,
} from "../../components/motion/constants/Animations.js";
import { motion } from "framer-motion";

import Focus from "../../assets/images/views/proVocacion/information/focus.svg";

import { useTranslation } from "react-i18next";
import CardsCarousel from "../carousel/cards/CardsCarousel.jsx";
import WhatsAppRedirect from "../../components/whatsAppRedirect/WhatsAppRedirect.js";

function Information() {
  const { t } = useTranslation();

  const slideData = [
    <section className="grid grid-cols-1 xl:grid-cols-[3fr_7fr] justify-center mb-2 xl:mb-5">
      <div className="justify-self-center xl:justify-self-end">
        <img
          className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
          src={EstudiantesDiez}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
        <motion.h4
          variants={cardItemReveal}
          className="text-xl md:text-3xl font-impact text-dark-blue text-center bg-primary-yellow rounded-xl p-2 mb-2"
        >
          {t("provocacion.information.cards.one.title")}
        </motion.h4>
        <div className="mb-4 w-full">
          <motion.div variants={cardItemReveal} className="mb-3">
            <strong className="block text-base md:text-xl text-dark-blue mb-1">
              {t("provocacion.information.cards.one.questionOne")}
            </strong>
            <p className="text-sm md:text-base xl:text-lg text-justify md:text-left mb-5">
              {t("provocacion.information.cards.one.answerOne")}
            </p>
          </motion.div>
          <motion.div variants={cardItemReveal} className="mb-3">
            <strong className="block text-base md:text-xl text-dark-blue mb-1">
              {t("provocacion.information.cards.one.questionTwo")}
            </strong>
            <p className="text-sm md:text-base xl:text-lg text-justify md:text-left mb-5">
              {t("provocacion.information.cards.one.answerTwo")}
            </p>
          </motion.div>
          <motion.div variants={cardItemReveal} className="mb-3">
            <strong className="block text-base md:text-xl text-dark-blue mb-1">
              {t("provocacion.information.cards.one.questionThree")}
            </strong>
            <p className="text-sm md:text-base xl:text-lg text-justify md:text-left mb-5">
              {t("provocacion.information.cards.one.answerThree")}
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        {...expandableTransition(0)}
        className="col-span-full w-full flex justify-center items-center mt-4"
      >
        <a
          className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          href={WhatsAppRedirect(t("whatsappMessage.provocation"))}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("provocacion.information.button_whatsapp")}
          <img src={Focus} alt="icono" className="w-10 h-10" />
        </a>
      </motion.div>
    </section>,

    <section className="grid grid-cols-1 xl:grid-cols-[3fr_7fr] justify-center mb-2 xl:mb-5">
      <div className="justify-self-center xl:justify-self-end">
        <img
          className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
          src={EstudiantesDieciseis}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
        <motion.h4
          variants={cardItemReveal}
          className="text-xl md:text-3xl font-impact text-dark-blue text-center bg-primary-yellow rounded-xl p-2 mb-2"
        >
          {t("provocacion.information.cards.two.title")}
        </motion.h4>
        <motion.p
          variants={cardItemReveal}
          className="text-sm md:text-lg mb-2 text-justify md:text-left"
        >
          {t("provocacion.information.cards.two.description")}
        </motion.p>
        <motion.h5
          variants={cardItemReveal}
          className="text-xl md:text-3xl font-impact text-dark-blue text-center bg-primary-yellow rounded-xl p-2 mb-2"
        >
          {t("provocacion.information.cards.two.titleTwo")}
        </motion.h5>
        <ul className="list-disc pl-5">
          {[
            "autoperception",
            "autobservacion",
            "autoestima",
            "autoconcepto",
            "autonomia",
            "autoconfianza",
            "automotivacion",
            "autoevaluacion",
          ].map((key) => (
            <motion.li
              variants={cardItemReveal}
              key={key}
              className="mb-1 text-sm md:text-base xl:text-lg"
            >
              {t(`provocacion.information.cards.two.studentFocus.${key}`)}
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        {...expandableTransition(0)}
        className="col-span-full w-full flex justify-center items-center mt-4"
      >
        <a
          className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          href={WhatsAppRedirect(t("whatsappMessage.provocation"))}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("provocacion.information.button_whatsapp")}
          <img src={Focus} alt="icono" className="w-10 h-10" />
        </a>
      </motion.div>
    </section>,

    <section className="grid grid-cols-1 xl:grid-cols-[3fr_7fr] justify-center mb-2 xl:mb-5">
      <div className="justify-self-center xl:justify-self-end">
        <img
          className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
          src={EstudiantesDos}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
        <motion.h4
          variants={cardItemReveal}
          className="text-xl md:text-3xl text-center font-impact text-dark-blue bg-primary-yellow rounded-xl p-2 mb-2"
        >
          {t("provocacion.information.cards.three.title")}
        </motion.h4>
        <ul className="list-disc pl-5">
          {["one", "two", "three", "four", "five", "six", "seven"].map(
            (key) => (
              <motion.li
                variants={cardItemReveal}
                key={key}
                className="mb-1 text-sm md:text-base xl:text-lg"
              >
                {t(`provocacion.information.cards.three.listServices.${key}`)}
              </motion.li>
            ),
          )}
        </ul>
        <div className="flex justify-evenly gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
          <div className="flex-col">
            <motion.h4
              variants={cardItemReveal}
              className="text-xl md:text-2xl font-impact text-dark-blue text-center bg-primary-yellow rounded-xl p-1 mb-2"
            >
              {t("provocacion.information.cards.four.title")}
            </motion.h4>
            <ul className="list-none pl-5">
              <motion.li
                variants={cardItemReveal}
                className="flex items-start mb-1 text-sm md:text-base xl:text-lg"
              >
                <MdOutlineAttachMoney className="flex-shrink-0 mt-1 mr-2 bg-dark-blue rounded-full p-1 text-white text-2xl" />
                <span>{t("provocacion.information.cards.four.one")}</span>
              </motion.li>
              <motion.li
                variants={cardItemReveal}
                className="flex items-start mb-1 text-sm md:text-base xl:text-lg"
              >
                <MdPayment className="flex-shrink-0 mt-1 mr-2 bg-dark-blue rounded-full p-1 text-white text-2xl" />
                <span>{t("provocacion.information.cards.four.two")}</span>
              </motion.li>
              <motion.li
                variants={cardItemReveal}
                className="flex items-start mb-1 text-sm md:text-base xl:text-lg"
              >
                <BiCreditCardAlt className="flex-shrink-0 mt-1 mr-2 bg-dark-blue rounded-full p-1 text-white text-2xl" />
                <span>{t("provocacion.information.cards.four.three")}</span>
              </motion.li>
            </ul>
          </div>
          <div>
            <motion.h4
              variants={cardItemReveal}
              className="text-xl md:text-2xl font-impact text-dark-blue text-center bg-primary-yellow rounded-xl p-1 mb-2"
            >
              {t("provocacion.information.cards.four.title_two")}
            </motion.h4>

            <ul className="list-none pl-5 text-center">
              {["price", "final_price"].map((key) => (
                <motion.li
                  variants={cardItemReveal}
                  key={key}
                  className="mb-1 text-sm md:text-base xl:text-lg"
                >
                  {t(`provocacion.information.cards.four.${key}`)}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <motion.div
        {...expandableTransition(0)}
        className="col-span-full w-full flex justify-center items-center mt-4"
      >
        <a
          className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          href={WhatsAppRedirect(t("whatsappMessage.provocation"))}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("provocacion.information.button_whatsapp")}
          <img src={Focus} alt="icono" className="w-10 h-10" />
        </a>
      </motion.div>
    </section>,
  ];

  return <CardsCarousel slideData={slideData} />;
}

export default Information;
