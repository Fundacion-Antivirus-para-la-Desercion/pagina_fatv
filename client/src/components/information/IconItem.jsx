import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { cardItemReveal } from "../motion/constants/Animations.js";

// Círculo amarillo que envuelve un ícono (o un emoji). El tamaño lo agrega quien lo usa.
export const iconCircleClass =
  "flex flex-shrink-0 items-center justify-center rounded-full bg-[#FEBE11] text-[#132E49]";

// Fila de lista: círculo con ícono a la izquierda + el texto que recibe como children.
// `className` define la alineación y el espacio entre el círculo y el texto.
function IconItem({ Icon, className = "items-center gap-[18px]", children }) {
  return (
    <motion.li variants={cardItemReveal} className={`flex ${className}`}>
      <span className={`${iconCircleClass} h-12 w-12`}>
        <Icon size={23} />
      </span>
      {children}
    </motion.li>
  );
}

IconItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default IconItem;
