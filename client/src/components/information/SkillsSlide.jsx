import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaEye,
  FaHeart,
  FaSearch,
  FaCompass,
  FaStar,
  FaFire,
  FaChartBar,
} from "react-icons/fa";

import {
  cardContainerVariants,
  cardItemReveal,
} from "@/constants/animations.js";
import { iconCircleClass } from "./IconItem.jsx";

const SKILL_CONFIGS = [
  { key: "autoperception", Icon: FaBrain },
  { key: "autobservacion", Icon: FaEye },
  { key: "autoestima", Icon: FaHeart },
  { key: "autoconcepto", Icon: FaSearch },
  { key: "autonomia", Icon: FaCompass },
  { key: "automotivacion", Icon: FaFire },
  { key: "autoconfianza", Icon: FaStar },
  { key: "autoevaluacion", Icon: FaChartBar },
];

// "Autopercepción: Reconocer…" → { label: "Autopercepción", detail: "Reconocer…" }
function parseSkill(text) {
  const colon = text.indexOf(":");
  if (colon === -1) return { label: "", detail: text.trim() };
  return {
    label: text.slice(0, colon).trim(),
    detail: text.slice(colon + 1).trim(),
  };
}

function SkillItem({ Icon, text }) {
  const { label, detail } = parseSkill(text);

  return (
    <motion.li variants={cardItemReveal} className="flex items-center gap-3">
      <span className={`${iconCircleClass} h-10 w-10 flex-shrink-0`} aria-hidden="true">
        <Icon size={18} />
      </span>
      <span className="text-base leading-snug">
        <strong className="text-dark-blue">{label}:</strong>
        {" "}{detail}
      </span>
    </motion.li>
  );
}

SkillItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

function SkillsSlide() {
  const { t } = useTranslation();
  const base = "provocacion.information.cards.two";

  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <motion.h4
        variants={cardItemReveal}
        className="self-start inline-block mb-5 rounded-full bg-primary-yellow px-4 py-[3px] font-impact text-2xl tracking-wide text-dark-blue"
      >
        {t(`${base}.titleTwo`)}
      </motion.h4>

      <motion.ul
        variants={cardContainerVariants}
        className="grid grid-cols-1 gap-x-6 gap-y-[10px] text-blue-base md:grid-cols-2"
      >
        {SKILL_CONFIGS.map(({ key, Icon }) => (
          <SkillItem key={key} Icon={Icon} text={t(`${base}.studentFocus.${key}`)} />
        ))}
      </motion.ul>
    </div>
  );
}

export default SkillsSlide;
