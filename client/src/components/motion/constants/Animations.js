export const floatSnake = ({
  initial,
  animate,
  transition,
  viewport,
} = {}) => ({
  initial: { y: -10, ...initial },
  animate: { y: [0, -25, 0], ...animate },
  transition: {
    duration: 2.6,
    repeat: Infinity,
    ease: "linear",
    delay: 0.3,
    ...transition,
  },
  viewport: { once: true, amount: 0.6, ...viewport },
});

export const slideFromRight = ({
  initial,
  whileInView,
  transition,
  viewport,
} = {}) => ({
  initial: { opacity: 0, x: 100, ...initial },
  whileInView: { opacity: 1, x: 0, ...whileInView },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.3, ...transition },
  viewport: { once: true, amount: 0.6, ...viewport },
});

/**
 * Animación para deslizar desde arriba con opacidad hacia abajo. Se puede personalizar con parámetros opcionales.
 * @param {Object} param0.viewport - Configuración del viewport (opcional).
 * @param {boolean} param0.viewport.once - Si la animación se ejecuta solo una vez (predeterminado: true).
 * @param {number} param0.viewport.amount - Porcentaje de visibilidad para activar la animación (predeterminado: 0.6).
 */
export const slideFromTop = ({
  initial,
  whileInView,
  transition,
  viewport,
} = {}) => ({
  initial: { opacity: 0, y: -100, ...initial },
  whileInView: { opacity: 1, y: 0, ...whileInView },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.3, ...transition },
  viewport: { once: true, amount: 0.6, ...viewport },
});



/**
 * Animación de expansión con opacidad y escala.
 * @param {Object} param0 - Configuración de la animación (opcional).
 * @param {Object} param0.initial - Estado inicial de la animación (opcional).
 * @param {Object} param0.whileInView - Estado final de la animación (opcional).
 * @param {Object} param0.transition - Configuración de la transición (opcional).
 * @param {Object} param0.viewport - Configuración del viewport (opcional).
 * @returns {Object} Configuración de la animación para Framer Motion.
 */
export const expandableTransition = ({
  initial,
  whileInView,
  transition,
  viewport,
} = {}) => ({
  initial: { opacity: 0, scale: 0.5, ...initial },
  whileInView: { opacity: 1, scale: 1, ...whileInView },
  transition: { duration: 0.8, ease: "easeOut", ...transition },
  viewport: { once: true, ...viewport },
});

/**
 * Animación para deslizar desde arriba con opacidad hacia abajo, diseñada para el cuerpo principal de la página. Se puede personalizar con parámetros opcionales.
 * @param {Object} param0 - Configuración de la animación (opcional).
 * @param {Object} param0.initial - Estado inicial de la animación (opcional).
 * @param {Object} param0.animate - Estado de animación final (opcional).
 * @param {Object} param0.transition - Configuración de la transición (opcional).
 * @param {Object} param0.viewport - Configuración del viewport (opcional).
 * @returns {Object} Configuración de la animación para Framer Motion.
 */
export const slideFromTopBody = ({
  initial,
  animate,
  transition,
} = {}) => ({
  initial: { y: -75, opacity: 0, ...initial },
  animate: { y: 0, opacity: 1, ...animate },
  transition: { 
    duration: 0.4, 
    ease: "easeOut",
    opacity: { duration: 0.01 },
    ...transition,
  },
});

/**
 * Variants para el contenedor padre del contenido de una card.
 * Orquesta el stagger de los elementos hijos al entrar y salir.
 * Usar con AnimatePresence mode="wait" en CardsCarousel.
 */
export const cardContainerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

/**
 * Variants para cada elemento individual del contenido de una card.
 * Entra desde la izquierda y sale levemente hacia la derecha.
 * Usar en motion.h4, motion.p, motion.li, etc. con variants={cardItemReveal}.
 */
export const cardItemReveal = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2, ease: "easeIn" } },
};

/**
 * Animación personalizada para las métricas.
 * Diseñada para activarse solo la primera vez que el usuario llega a la sección.
 * @param {Object} param0 - Configuración de la animación (opcional).
 * @param {Object} param0.initial - Estado inicial de la animación (opcional).
 * @param {Object} param0.whileInView - Estado final de la animación (opcional).
 * @param {Object} param0.transition - Configuración de la transición (opcional).
 * @param {Object} param0.viewport - Configuración del viewport (opcional).
 * @returns {Object} Configuración de la animación para Framer Motion.
 */
export const slideFromTopForMetrics = ({
  initial,
  whileInView,
  transition,
  viewport,
} = {}) => ({
  initial: { opacity: 0, y: -50, ...initial },
  whileInView: { opacity: 1, y: 0, ...whileInView },
  transition: { duration: 1, delay: 0, ...transition },
  viewport: { once: true, amount: 0.6, ...viewport }, // Cambiado para activarse solo una vez
});
