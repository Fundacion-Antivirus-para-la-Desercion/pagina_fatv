import React from "react";
import EstudiantesUno from "../../assets/images/views/proVocacion/information/estudiantes-uno.jpeg";
import EstudiantesDos from "../../assets/images/views/proVocacion/information/estudiantes-dos.jpeg";
import EstudiantesTres from "../../assets/images/views/proVocacion/information/estudiantes-tres.jpeg";
import EstudiantesCuatro from "../../assets/images/views/proVocacion/information/estudiantes-cuatro.jpeg";
import EstudiantesCinco from "../../assets/images/views/proVocacion/information/estudiantes-cinco.jpeg";
import EstudiantesSeis from "../../assets/images/views/proVocacion/information/estudiantes-seis.jpeg";
import EstudiantesSiete from "../../assets/images/views/proVocacion/information/estudiantes-siete.jpeg";
import EstudiantesOcho from "../../assets/images/views/proVocacion/information/estudiantes-ocho.jpeg";
import EstudiantesNueve from "../../assets/images/views/proVocacion/information/estudiantes-nueve.jpeg";
import EstudiantesDiez from "../../assets/images/views/proVocacion/information/estudiantes-diez.jpeg";
import EstudiantesOnce from "../../assets/images/views/proVocacion/information/estudiantes-once.jpeg";
import EstudiantesDoce from "../../assets/images/views/proVocacion/information/estudiantes-doce.jpeg";
import EstudiantesTrece from "../../assets/images/views/proVocacion/information/estudiantes-trece.jpeg";
import EstudiantesCatorce from "../../assets/images/views/proVocacion/information/estudiantes-catorce.jpeg";
import Estudiantesquince from "../../assets/images/views/proVocacion/information/estudiantes-quince.jpeg";
import EstudiantesDieciseis from "../../assets/images/views/proVocacion/information/estudiantes-dieciseis.jpg";

import Javicorto from "../../assets/images/views/javi/javi-corto.webp";
import Javi from "../../assets/images/views/javi/javi-senala.webp";
import FocusTransparent from "../../assets/images/views/proVocacion/information/focus.webp";
import { floatSnake } from "../../components/motion/constants/Animations.js";
import { motion } from "framer-motion";

import Focus from "../../assets/images/views/proVocacion/information/focus.svg";

import { useTranslation } from "react-i18next";
import CardsCarousel from "../carousel/cards/CardsCarousel.jsx";

const whatsAppNumber = "573173831481";

function Information() {
  const { t } = useTranslation();

  const slideData = [
    <section className="grid grid-cols-1 xl:grid-cols-[3fr_7fr] items-center justify-center mb-2 xl:mb-5">
      <div className="justify-self-center xl:justify-self-end">
        <img
          className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
          src={EstudiantesDiez}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
        <h4 className="text-xl md:text-3xl font-impact text-dark-blue bg-primary-yellow rounded-xl p-2 mb-2">
          {t("provocacion.information.cards.one.title")}
        </h4>
        <div className="mb-4 w-full">
          <div className="mb-3">
            <strong className="block text-base md:text-xl text-dark-blue mb-1">
              {t("provocacion.information.cards.one.questionOne")}
            </strong>
            <p className="text-sm md:text-base xl:text-lg md:text-left">
              {t("provocacion.information.cards.one.answerOne")}
            </p>
          </div>
          <div className="mb-3">
            <strong className="block text-base md:text-xl text-dark-blue mb-1">
              {t("provocacion.information.cards.one.questionTwo")}
            </strong>
            <p className="text-sm md:text-base xl:text-lg md:text-left">
              {t("provocacion.information.cards.one.answerTwo")}
            </p>
          </div>
          <div className="mb-3">
            <strong className="block text-base md:text-xl text-dark-blue mb-1">
              {t("provocacion.information.cards.one.questionThree")}
            </strong>
            <p className="text-sm md:text-base xl:text-lg md:text-left">
              {t("provocacion.information.cards.one.answerThree")}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-full w-full flex justify-center items-center mt-4">
        <a
          className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          href={`https://wa.me/${whatsAppNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("provocacion.information.i_want_it")}
          <img src={Focus} alt="icono" className="w-10 h-10" />
        </a>
      </div>
    </section>,

    <section className="grid grid-cols-1 xl:grid-cols-[3fr_7fr] items-center justify-center mb-2 xl:mb-5">
      <div className="justify-self-center xl:justify-self-end">
        <img
          className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
          src={EstudiantesDieciseis}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
        <h4 className="text-xl md:text-3xl font-impact text-dark-blue bg-primary-yellow rounded-xl p-2 mb-2">
          {t("provocacion.information.cards.two.title")}
        </h4>
        <p className="text-base md:text-xl mb-2">
          {t("provocacion.information.cards.two.description")}
        </p>
        <h5 className="text-xl md:text-2xl font-impact text-dark-blue mb-2">
          {t("provocacion.information.cards.two.titleTwo")}
        </h5>
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
            <li key={key} className="mb-1 text-sm md:text-base xl:text-lg">
              {t(`provocacion.information.cards.two.studentFocus.${key}`)}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-full w-full flex justify-center items-center mt-4">
        <a
          className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          href={`https://wa.me/${whatsAppNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("provocacion.information.i_want_it")}
          <img src={Focus} alt="icono" className="w-10 h-10" />
        </a>
      </div>
    </section>,

    <section className="grid grid-cols-1 xl:grid-cols-[3fr_7fr] items-center justify-center mb-2 xl:mb-5">
      <div className="justify-self-center xl:justify-self-end">
        <img
          className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
          src={EstudiantesDos}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
        <h4 className="text-xl md:text-3xl font-impact text-dark-blue bg-primary-yellow rounded-xl p-2 mb-2">
          {t("provocacion.information.cards.three.title")}
        </h4>
        <ul className="list-disc pl-5">
          {["one", "two", "three", "four", "five", "six", "seven"].map(
            (key) => (
              <li key={key} className="mb-1 text-sm md:text-base xl:text-lg">
                {t(`provocacion.information.cards.three.listServices.${key}`)}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="col-span-full w-full flex justify-center items-center mt-4">
        <a
          className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          href={`https://wa.me/${whatsAppNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("provocacion.information.i_want_it")}
          <img src={Focus} alt="icono" className="w-10 h-10" />
        </a>
      </div>
    </section>,

    <section className="grid grid-cols-1 xl:grid-cols-[3fr_7fr] items-center justify-center mb-2 xl:mb-5">
      <div className="justify-self-center xl:justify-self-end">
        <img
          className="w-[450px] rounded-xl mb-6 xl:mb-0 xl:mr-8"
          src={EstudiantesTres}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-4 flex-1 px-3 md:px-5 lg:px-5 mt-6 xl:mt-0">
        <h4 className="text-xl md:text-3xl font-impact text-dark-blue bg-primary-yellow rounded-xl p-2 mb-2">
          {t("provocacion.information.cards.four.title_two")}
        </h4>
        <ul className="list-disc pl-5">
          {["one", "two", "three", "price", "final_price"].map((key) => (
            <li key={key} className="mb-1 text-sm md:text-base xl:text-lg">
              {t(`provocacion.information.cards.four.${key}`)}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-full w-full flex justify-center items-center mt-4">
        <a
          className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          href={`https://wa.me/${whatsAppNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("provocacion.information.i_want_it")}
          <img src={Focus} alt="icono" className="w-10 h-10" />
        </a>
      </div>
    </section>,
  ];

  return <CardsCarousel slideData={slideData} />;
}

export default Information;
