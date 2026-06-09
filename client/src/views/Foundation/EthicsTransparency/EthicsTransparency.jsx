import { motion } from "framer-motion";
import { expandableTransition } from "../../../components/motion/constants/Animations";
import PdfCards from "./PdfCards";

function EthicsTransparencyCard() {
  return (
    <>
      <motion.section {...expandableTransition()}>
        <div>
          <PdfCards />
        </div>
      </motion.section>
    </>
  );
}

export default EthicsTransparencyCard;
