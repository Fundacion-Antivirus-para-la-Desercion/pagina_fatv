import { IoShieldCheckmark } from "react-icons/io5";
import { MdVolunteerActivism } from "react-icons/md";
import { WiStars } from "react-icons/wi";

import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import {
  floatSnake,
  expandableTransition,
} from "../../components/motion/constants/Animations";

function EthicsTransparencyCard() {
  const { t } = useTranslation();
  return (
    <>
      <motion.section {...expandableTransition()} className="relative p-5">
        <motion.div
          {...floatSnake({ transition: { delay: 0.5 } })}
          className="hidden md:block absolute left-36 top-1/2 transform -translate-y-1/2"
        >
          <WiStars className="hidden md:block text-9xl m-5 text-primary-yellow transition-all duration-300" />
        </motion.div>
        <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-10 max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl  border-t-[10px] border-primary-yellow m-10 mt-5 md:mt-32 group hover:scale-105 transition-all duration-500 relative">
          <div className="flex items-center justify-center rounded-full bg-dark-blue p-5 shadow-md transition-all duration-500 group-hover:bg-primary-yellow">
            <IoShieldCheckmark className="text-6xl text-white transition-colors duration-300 group-hover:text-dark-blue group-hover:scale-105" />
          </div>
          <div className="flex flex-col items-center md:items-start text-blue-base gap-2">
            <h5 className="text-2xl md:text-3xl font-impact text-dark-blue mb-2 text-center md:text-left">
              {t("ethicsTransparency.title")}
            </h5>
            <p className="text-base md:text-xl leading-relaxed text-justify max-w-3xl">
              {t("ethicsTransparency.description")}
            </p>
          </div>
        </section>
        <motion.div
          {...floatSnake({ transition: { delay: 1 } })}
          className="hidden xl:block absolute right-36 top-1/2 transform -translate-y-1/2"
        >
          <WiStars className="hidden md:block text-9xl m-5 text-primary-yellow transition-all duration-300" />
        </motion.div>
      </motion.section>
    </>
  );
}

export default EthicsTransparencyCard;
