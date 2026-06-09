import { IoShieldCheckmark } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  floatSnake,expandableTransition,} from "../../../components/motion/constants/Animations";
import PdfCards from "./PdfCards";


function EthicsTransparencyCard() {
  const { t } = useTranslation();
  return (
    <>
      <motion.section {...expandableTransition()} className="">
       
        <div className="flex-col justify-center max-w-4xl mx-auto px-6 py-10 text-blue-base">
          <h5 className="text-3xl md:text-5xl font-impact mb-5 text-center md:text-center">
            {t("ethicsTransparency.title")}
          </h5>
          <p className="text-base md:text-xl leading-relaxed text-justify max-w-4xl mx-auto">
            {t("ethicsTransparency.description")}
          </p>
        </div>


        <div>
          <PdfCards />
        </div>

      </motion.section>
    </>
  );
}

export default EthicsTransparencyCard;
