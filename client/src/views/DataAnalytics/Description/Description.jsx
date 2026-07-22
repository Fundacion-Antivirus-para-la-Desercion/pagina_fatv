import Javi from "../../../assets/images/views/javi/javi-brazos-abiertos.webp";
import { WiStars } from "react-icons/wi";
import { FaLightbulb } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosFlash } from "react-icons/io";
import { Icon } from "@iconify/react";

import { motion } from "framer-motion";
import { floatSnake, expandableTransition } from "../../../components/motion/constants/Animations.js";
import { useTranslation, Trans } from "react-i18next";

function Description() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="flex justify-center">
          <section className="w-fit relative bg-dark-blue flex flex-col md:flex-row justify-center rounded-3xl items-center p-12 gap-5 m-5 md:m-10 lg:m-20">
            <div
              className="absolute inset-0 z-1 rounded-3xl"
              style={{
                backgroundImage: `
        linear-gradient(to right, #2F3863 1px, transparent 1px),
        linear-gradient(to bottom, #2F3863 1px, transparent 1px)
      `,
                backgroundSize: "48px 48px, 48px 48px",
              }}
            />
            <div className="relative">
              <img
                src={Javi}
                alt="Acompañamiento"
                className="relative w-auto max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[400px] md:h-[550px] object-cover p-4 mx-auto"
                loading="lazy"
              />
              <motion.div
                {...expandableTransition({ transition: { duration: 2 } })}
                className="absolute top-0 -right-2 md:-right-5 bg-white py-2 px-4 sm:py-3 sm:px-6 rounded-r-3xl rounded-tl-3xl"
              >
                <span className="text-dark-blue text-sm sm:text-base md:text-xl">
                  {t("dataAnalytics.description.javi_text")} 🚀
                </span>
              </motion.div>

              <motion.div
                {...floatSnake()}
                className="absolute top-0 left-0 text-yellow-400 text-3xl md:text-6xl"
              >
                <WiStars />
              </motion.div>
              <motion.div
                {...floatSnake()}
                className="absolute bottom-0 left-0"
              >
                <FaLightbulb className=" text-yellow-400 text-2xl md:text-4xl -rotate-12" />
              </motion.div>
              <motion.div
                {...floatSnake()}
                className="absolute bottom-32 right-0"
              >
                <IoIosFlash className=" text-yellow-400 text-2xl md:text-4xl -rotate-12" />
              </motion.div>
            </div>

            <div className="relative text-center md:text-left">
              <div className="flex gap-5 items-center justify-center md:justify-start mb-5">
                <Icon
                  icon="streamline-color:target-flat"
                  height="48"
                  width="48"
                  className="bg-primary-yellow p-2 rounded-3xl"
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-impact text-white">
                  {t("dataAnalytics.description.title")}{" "}
                  <span className="text-primary-yellow">
                    {t("dataAnalytics.description.span")}
                  </span>
                </h2>
              </div>
              <p className="text-white/85 text-base md:text-2xl text-justify max-w-prose mx-auto">
                <Trans
                  i18nKey="dataAnalytics.description.paragraph"
                  components={{
                    orange: <span className="text-primary-yellow font-bold" />,
                    teal: <span className="text-brand-teal-200 font-bold" />,
                  }}
                />
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Description;
