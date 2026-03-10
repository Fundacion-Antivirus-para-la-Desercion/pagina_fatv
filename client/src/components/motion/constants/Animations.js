export const floatSnake = ({
  initial,
  animate,
  transition,
  viewport,
} = {}) => ({
  initial: { y: -10, ...initial },
  animate: { y: [0, -25, 0], ...animate },
  transition: {
    duration: 0.6,
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
