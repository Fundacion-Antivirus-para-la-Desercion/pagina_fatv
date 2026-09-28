import PropTypes from "prop-types";
import { MdOutlineAttachMoney, MdPayment, MdOutlineAccountBalanceWallet } from "react-icons/md";
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
import { PiCurrencyCircleDollarBold } from "react-icons/pi";

import { cardItemReveal } from "../../components/motion/constants/Animations.js";
import { motion } from "framer-motion";

import { FOCUS_SVG as Focus } from "../../assets/cloudinaryImages";

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

const AUDIENCE_LEFT = [{ question: "questionOne", answer: "answerOne", Icon: FaUserGraduate }];

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
  { key: "one", Icon: MdOutlineAttachMoney },
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
  return { emoji, label: body.slice(0, colon + 1), detail: body.slice(colon + 1) };
}

function IconItem({ Icon, children, align = "center", className = "gap-[18px]" }) {
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
      <div className="text-[14px] leading-[17px]">
        <strong className="mb-1 block text-[#0E1A45]">{t(`${base}.one.${question}`)}</strong>
        <p>{t(`${base}.one.${answer}`)}</p>
      </div>
    </IconItem>
  );

  const renderService = ({ key, Icon, spacing = "" }, textClass, gapClass) => (
    <IconItem key={key} Icon={Icon} className={`${gapClass} 2xl:h-10 ${spacing}`}>
      <span className={`text-[14px] leading-[17px] ${textClass}`}>
        {t(`${base}.three.listServices.${key}`)}
      </span>
    </IconItem>
  );

  const renderFocus = (key) => {
    const { emoji, label, detail } = splitFocusText(t(`${base}.two.studentFocus.${key}`));
    return (
      <motion.li key={key} variants={cardItemReveal} className="flex items-center gap-3">
        <span className={`${iconCircleClass} h-8 w-8 text-[15px]`} aria-hidden="true">
          {emoji}
        </span>
        <span className="text-[13px] leading-[16px]">
          <strong className="text-[#0E1A45]">{label}</strong>
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
          <ul className="flex flex-col gap-5">{AUDIENCE_LEFT.map(renderAudience)}</ul>
          <ul className="flex flex-col gap-5">{AUDIENCE_RIGHT.map(renderAudience)}</ul>
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
            className="mb-3 inline-block rounded-full bg-[#FEC623] px-4 py-[3px] font-impact text-[14px] tracking-wide text-[#0E1A45]"
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
            {SERVICES_LEFT.map((item) => renderService(item, "max-w-[190px]", "gap-[18px]"))}
          </ul>
          <ul className="flex flex-col gap-5 xl:pt-[32px] 2xl:gap-0">
            {SERVICES_RIGHT.map((item) => renderService(item, "2xl:max-w-[230px]", "gap-[14px]"))}
          </ul>
        </div>
      ),
    },
  ];

  const aside = (
    <div className="flex flex-col">
      <div className="relative z-10 ml-[4px] mr-[7px] flex h-[26px] items-center gap-[10px] rounded-full bg-[#FEC623] pl-[14px]">
        <PiCurrencyCircleDollarBold className="h-[21px] w-[21px] rounded-full bg-[#0E1A45] p-[2px] text-white" />
        <h4 className="font-impact text-[13px] text-[#0E1A45]">{t(`${base}.four.title`)}</h4>
      </div>

      <ul className="-mt-[2px] flex flex-col gap-[3.7px] rounded-b-[12px] bg-[#F0F6FC] pb-[5px] pl-[19px] pt-[8.6px]">
        {PAYMENT_METHODS.map(({ key, Icon }) => (
          <li key={key} className="flex items-center gap-[12px] text-[13px] text-[#1B2A5C]">
            <Icon className="h-[18.5px] w-[18.5px] flex-shrink-0 rounded-full bg-[#20295C] p-[3px] text-white" />
            <span>{t(`${base}.four.${key}`)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-[5.5px] flex items-start gap-[9px] rounded-[12px] bg-[#E6F1FA] pb-[6px] pl-[16px] pt-[6px]">
        <MdOutlineAccountBalanceWallet className="-mt-[3px] h-[25px] w-[25px] flex-shrink-0 rounded-full bg-[#0E1A45] p-[4px] text-white" />
        <div className="flex flex-col">
          <h4 className="font-impact text-[13px] leading-[16px] text-[#0E1A45]">
            {t(`${base}.four.title_two`)}
          </h4>
          <PriceLine text={t(`${base}.four.price`)} />
          <span className="mt-[2px] text-[12px] leading-[14px] text-[#1B2A5C]">
            {t(`${base}.four.final_price`)}
          </span>
        </div>
      </div>

      <a
        className="group mx-auto mt-[5px] flex items-center gap-[12px] xl:ml-auto xl:mr-[26px]"
        href={WhatsAppRedirect(t("whatsappMessage.provocation"))}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex h-[38px] w-[126px] items-center justify-center gap-2 rounded-[13px] bg-[#073A6C] text-[15px] text-white transition-transform duration-300 group-hover:-translate-y-0.5">
          {t("provocacion.information.button_whatsapp")}
          <img src={Focus} alt="" className="h-[22px] w-[22px]" loading="lazy" />
        </span>
        <span className="flex h-[33px] w-[33px] items-center justify-center rounded-full bg-[#FEBE11] text-[#0E1A45] transition-transform duration-300 group-hover:translate-x-0.5">
          <FaChevronRight size={12} />
        </span>
      </a>
    </div>
  );

  return <CardsCarousel slides={slides} aside={aside} />;
}

// "450.000 + IVA" → importe destacado + sufijo, preservando el texto traducido.
function PriceLine({ text }) {
  const [amount, ...suffix] = text.split(" ");
  return (
    <p className="mt-[1px] leading-[20px] text-[#0E1A45]">
      <span className="text-[19px] font-bold">{amount}</span>{" "}
      <span className="text-[15px]">{suffix.join(" ")}</span>
    </p>
  );
}

PriceLine.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Information;
