import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Hoja de doble cara que gira sobre el lomo para simular el paso de página.
 *
 * Es solo una capa visual: envuelve dos `BookPage` normales (anverso y reverso)
 * y gira durante ~0.8s. No mide ni controla el tamaño del contenido —eso lo
 * sigue haciendo la paginación medida— por eso el efecto realista no vuelve a
 * romper los items responsive.
 *
 * Mecánica (modelo de libro físico):
 * - Forward (dir=1): la hoja ocupa la mitad derecha, con bisagra en el lomo
 *   (borde izquierdo), y gira 0 → -180°. El anverso (página derecha actual) tapa
 *   la derecha al inicio; el reverso (próxima página izquierda) aterriza sobre la
 *   izquierda al final.
 * - Backward (dir=-1): espejo — bisagra en el borde derecho, gira 0 → +180°.
 *
 * El reverso lleva `rotateY(180deg)` para que su texto quede legible (doble giro).
 */
const FACE_STYLE = {
  position: "absolute",
  inset: 0,
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

const TRANSITION = { duration: 0.8, ease: [0.645, 0.045, 0.355, 1] };

const PageLeaf = ({ direction, width, height, front, back, onComplete }) => {
  const forward = direction === 1;

  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: forward ? -180 : 180 }}
      transition={TRANSITION}
      onAnimationComplete={onComplete}
      className="pointer-events-none"
      style={{
        position: "absolute",
        top: 0,
        left: forward ? width : 0,
        width,
        height,
        zIndex: 30,
        transformStyle: "preserve-3d",
        transformOrigin: forward ? "left center" : "right center",
      }}
    >
      {/* Anverso: página que se está levantando */}
      <div style={FACE_STYLE}>
        {front}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0.5] }}
          transition={TRANSITION}
          style={{
            background: forward
              ? "linear-gradient(to left, rgba(20,25,45,0.45), transparent 65%)"
              : "linear-gradient(to right, rgba(20,25,45,0.45), transparent 65%)",
          }}
        />
      </div>

      {/* Reverso: página que aparece al voltear */}
      <div style={{ ...FACE_STYLE, transform: "rotateY(180deg)" }}>
        {back}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.35, 0] }}
          transition={TRANSITION}
          style={{
            background: forward
              ? "linear-gradient(to right, rgba(20,25,45,0.45), transparent 65%)"
              : "linear-gradient(to left, rgba(20,25,45,0.45), transparent 65%)",
          }}
        />
      </div>
    </motion.div>
  );
};

PageLeaf.propTypes = {
  direction: PropTypes.oneOf([1, -1]).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  front: PropTypes.node.isRequired,
  back: PropTypes.node.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default PageLeaf;
