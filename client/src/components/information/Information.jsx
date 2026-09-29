import PropTypes from "prop-types";
import {
  MdOutlineAttachMoney,
  MdPayment,
} from "react-icons/md";
import { BiCreditCardAlt } from "react-icons/bi";
import {
  FaUsers,
  FaUser,
  FaLaptop,
  FaBolt,
  FaExchangeAlt,
  FaWhatsapp,
  FaUserGraduate,
  FaRegClock,
  FaRegCompass,
  FaChevronRight,
} from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineBank } from "react-icons/ai";

import { cardItemReveal } from "../../components/motion/constants/Animations.js";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import CardsCarousel from "../carousel/cards/CardsCarousel.jsx";
import WhatsAppRedirect from "../../components/whatsAppRedirect/WhatsAppRedirect.js";

const SERVICES_LEFT = [
  { key: "one", Icon: FaUsers },
  { key: "two", Icon: FaUser },
  { key: "three", Icon: FaLaptop },
  { key: "four", Icon: FaBolt },
];

// En 2xl (card de 1400px, tamaño del mockup) las filas tienen alto fijo (círculo de 40px)
// y el espaciado replica el mockup, así un texto más largo no desalinea los íconos.
const SERVICES_RIGHT = [
  { key: "five", Icon: FaExchangeAlt, spacing: "" },
  { key: "six", Icon: FaWhatsapp, spacing: "2xl:mt-[34px]" },
  { key: "seven", Icon: TbCertificate, spacing: "2xl:mt-[28px]" },
];

const AUDIENCE_LEFT = [
  { question: "questionOne", answer: "answerOne", Icon: FaUserGraduate },
];

const AUDIENCE_RIGHT = [
  { question: "questionTwo", answer: "answerTwo", Icon: FaRegClock },
  { question: "questionThree", answer: "answerThree", Icon: FaRegCompass },
];

const FOCUS_KEYS = [
  "autoperception",
  "autobservacion",
  "autoestima",
  "autoconcepto",
  "autonomia",
  "autoconfianza",
  "automotivacion",
  "autoevaluacion",
];

const PAYMENT_METHODS = [
  { key: "one", Icon: AiOutlineBank },
  { key: "two", Icon: MdPayment },
  { key: "three", Icon: BiCreditCardAlt },
];

const iconCircleClass =
  "flex flex-shrink-0 items-center justify-center rounded-full bg-[#FEBE11] text-[#132E49]";

// "🧠 Autopercepción: Reconocer…" → emoji, etiqueta y descripción, sin tocar la traducción.
function splitFocusText(text) {
  const [emoji, ...rest] = text.split(" ");
  const body = rest.join(" ");
  const colon = body.indexOf(":");
  if (colon === -1) return { emoji, label: "", detail: body };
  return {
    emoji,
    label: body.slice(0, colon + 1),
    detail: body.slice(colon + 1),
  };
}

function IconItem({
  Icon,
  children,
  align = "center",
  className = "gap-[18px]",
}) {
  return (
    <motion.li
      variants={cardItemReveal}
      className={`flex ${align === "start" ? "items-start" : "items-center"} ${className}`}
    >
      <span className={`${iconCircleClass} h-10 w-10`}>
        <Icon size={20} />
      </span>
      {children}
    </motion.li>
  );
}

IconItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["center", "start"]),
  className: PropTypes.string,
};

function Information() {
  const { t } = useTranslation();
  const base = "provocacion.information.cards";

  const renderAudience = ({ question, answer, Icon }) => (
    <IconItem key={question} Icon={Icon} align="start">
      <div className="text-base leading-[17px]">
        <strong className="mb-1 block text-dark-blue">
          {t(`${base}.one.${question}`)}
        </strong>
        <p>{t(`${base}.one.${answer}`)}</p>
      </div>
    </IconItem>
  );

  const renderService = ({ key, Icon, spacing = "" }, textClass, gapClass) => (
    <IconItem
      key={key}
      Icon={Icon}
      className={`${gapClass} 2xl:h-10 ${spacing}`}
    >
      <span className={`text-base leading-[17px] ${textClass}`}>
        {t(`${base}.three.listServices.${key}`)}
      </span>
    </IconItem>
  );

  const renderFocus = (key) => {
    const { emoji, label, detail } = splitFocusText(
      t(`${base}.two.studentFocus.${key}`),
    );
    return (
      <motion.li
        key={key}
        variants={cardItemReveal}
        className="flex items-center gap-3"
      >
        <span
          className={`${iconCircleClass} h-10 w-10 text-xl`}
          aria-hidden="true"
        >
          {emoji}
        </span>
        <span className="text-base leading-[16px]">
          <strong className="text-dark-blue">{label}</strong>
          {detail}
        </span>
      </motion.li>
    );
  };

  const slides = [
    {
      id: "audience",
      title: t(`${base}.one.title`),
      content: (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-6 xl:pt-[26px]">
          <ul className="flex flex-col gap-5">
            {AUDIENCE_LEFT.map(renderAudience)}
          </ul>
          <ul className="flex flex-col gap-5">
            {AUDIENCE_RIGHT.map(renderAudience)}
          </ul>
        </div>
      ),
    },
    {
      id: "capabilities",
      title: t(`${base}.two.title`),
      description: t(`${base}.two.description`),
      content: (
        <div className="xl:pt-[18px]">
          <motion.h4
            variants={cardItemReveal}
            className="mb-3 inline-block rounded-full bg-primary-yellow px-4 py-[3px] font-impact text-2xl tracking-wide text-dark-blue"
          >
            {t(`${base}.two.titleTwo`)}
          </motion.h4>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-[10px] md:grid-cols-2">
            {FOCUS_KEYS.map(renderFocus)}
          </ul>
        </div>
      ),
    },
    {
      id: "services",
      title: t(`${base}.three.title`),
      content: (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[302px_1fr] xl:gap-x-0">
          <ul className="flex flex-col gap-5 xl:pt-[26px]">
            {SERVICES_LEFT.map((item) =>
              renderService(item, "max-w-[190px]", "gap-[18px]"),
            )}
          </ul>
          <ul className="flex flex-col gap-5 xl:pt-[32px] 2xl:gap-0">
            {SERVICES_RIGHT.map((item) =>
              renderService(item, "2xl:max-w-[230px]", "gap-base"),
            )}
          </ul>
        </div>
      ),
    },
  ];

  const aside = (
    <div className="flex flex-col gap-2">
      <ul className="flex flex-col rounded-2xl bg-primary-ice px-5 pb-4 pt-3">
        <div className="flex items-center gap-3 mb-3">
          <IoWalletOutline className="size-10 flex-shrink-0 rounded-full bg-brand-blue-50 p-2 text-dark-blue" />
          <h4 className="text-xl font-extrabold text-dark-blue">
            {t(`${base}.four.title`)}
          </h4>
        </div>
        <div className="ml-[19px] flex flex-col gap-3 border-l-2 border-primary-mediumblue/40 pl-5">
          {PAYMENT_METHODS.map(({ key, Icon }) => (
            <li
              key={key}
              className="flex items-center gap-3 text-base text-dark-blue"
            >
              <Icon className="size-5 flex-shrink-0 text-dark-blue" />
              <span>{t(`${base}.four.${key}`)}</span>
            </li>
          ))}
        </div>
      </ul>

      <div className="flex items-start gap-2.5 rounded-3xl bg-primary-ice px-4 py-2">
        <MdOutlineAttachMoney className="mt-0.5 size-8 flex-shrink-0 rounded-full  p-[4px] text-dark-blue bg-white" />
        <div className="flex flex-col">
          <h4 className="text-xl font-extrabold leading-tight text-dark-blue">
            {t(`${base}.four.title_two`)}
          </h4>
          <PriceLine text={t(`${base}.four.price`)} />
          <span className="mt-1 text-xl text-dark-blue">
            $ {t(`${base}.four.final_price`)}{" "}
            <span className="text-xs font-semibold tracking-wide text-dark-blue">COP</span>
          </span>
        </div>
      </div>

      <div className="mt-1 flex items-center gap-2 xl:ml-auto xl:mr-4">
        <a
          className="group flex items-center justify-center gap-2 rounded-3xl bg-primary-yellow px-8 py-3 font-renogare text-lg text-brand-blue-300"
          href={WhatsAppRedirect(t("whatsappMessage.provocation"))}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("provocacion.information.button_whatsapp")}
          <FaArrowRight className="size-5  group-hover:translate-x-1 duration-300" />
        </a>
        <div className="flex flex-col gap-3" aria-hidden="true">
          <span className="h-[4px] w-4 -rotate-[30deg] rounded-full bg-primary-yellow" />
          <span className="h-[4px] w-4 -rotate-[5deg] rounded-full bg-primary-yellow" />
          <span className="h-[4px] w-4 rotate-[25deg] rounded-full bg-primary-yellow" />
        </div>
      </div>
    </div>
  );

  return <CardsCarousel slides={slides} aside={aside} />;
}

// "450.000 + IVA" → importe destacado + sufijo, preservando el texto traducido.
function PriceLine({ text }) {
  const [amount, ...suffix] = text.split(" ");
  return (
    <p className="mt-[1px] leading-[20px] text-blue-base">
      <span className="text-base">{amount}</span>{" "}
      <span className="text-base">{suffix.join(" ")}</span>
    </p>
  );
}

PriceLine.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Information;
