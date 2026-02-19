import Estudiante from "../../../assets/images/views/socialIntervention/estudiante-en-acompanamiento.webp";

import { TiHeart } from "react-icons/ti";
import { RiFocus2Line } from "react-icons/ri";
import { PiHeartStraight } from "react-icons/pi";
import { BsChat } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Description() {

  const { t } = useTranslation();

  const slideFromRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const floatSnake = (delay = 0) => ({
    initial: { y: -10 },
    animate: { y: [0, -25, 0] },
    transition: {
      duration: 2.6,
      repeat: Infinity,
      ease: "linear",
      delay,
    },
  });

  const socialData = [
    {
      icon: <RiFocus2Line />,
      title: t("socialIntervention.socialData.item_one.title"),
      description: t("socialIntervention.socialData.item_one.description"),
    },
    {
      icon: <PiHeartStraight />,
      title: t("socialIntervention.socialData.item_two.title"),
      description: t("socialIntervention.socialData.item_two.description"),
    },
    {
      icon: <BsChat />,
      title: t("socialIntervention.socialData.item_three.title"),
      description: t("socialIntervention.socialData.item_three.description"),
    },
    {
      icon: <GoPeople />,
      title: t("socialIntervention.socialData.item_four.title"),
      description: t("socialIntervention.socialData.item_four.description"),
    },
    {
      icon: <GoLightBulb />,
      title: t("socialIntervention.socialData.item_five.title"),
      description: t("socialIntervention.socialData.item_five.description"),
    },
    {
      icon: <FiCheckCircle />,
      title: t("socialIntervention.socialData.item_six.title"),
      description: t("socialIntervention.socialData.item_six.description"),
    },
  ];
  return (
    <>
      <section className="container block mx-auto">
        <div className="flex justify-center">
          <section className="flex flex-col lg:flex-row justify-center gap-5 p-8 text-center md:p-10">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-fit">
                <img
                  className="h-full max-h-[500px] md:max-h-[700px] mb-16 md:mb-0 border-[4px] border-solid border-white rounded-3xl shadow-2xl"
                  src={Estudiante}
                  alt=""
                />

                <motion.div
                  {...floatSnake(1)}
                  className="group z-10 absolute right-2 -bottom-6 md:-right-5 md:-bottom-10 lg:-bottom-2 xl:-bottom-10 w-24 md:w-40"
                >
                  <div className="bg-[#ffffff] p-3 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-2xl transition-all">
                    <span
                      className="absolute -top-10 left-1/2 -translate-x-1/2 
                             scale-0 group-hover:scale-100 transition-all duration-200
                             bg-dark-blue text-white text-base py-1 px-3 rounded-lg shadow-xl flex items-center justify-center"
                    >
                      FATV <TiHeart className="inline text-base" />
                      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-dark-blue"></span>
                    </span>
                    <div>
                      <PiHeartStraight className="p-2 text-4xl md:text-5xl text-primary-yellow bg-yellow-100 rounded-xl" />
                    </div>
                    <div className="felx flex-col text-center">
                      <span className="text-md md:text-3xl text-dark-blue drop-shadow-2xl font-impact">
                        +500
                      </span>
                      <h4 className="text-dark-blue font-semibold text-xs">
                        {t("socialIntervention.figure")}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="">
              <section>
                <span className="text-lg text-primary-yellow font-impact">
                  {t("socialIntervention.span")}
                </span>
                <h1 className="text-4xl md:text-5xl text-dark-blue font-impact">
                  {t("socialIntervention.title")}
                </h1>
                <p className="text-lg text-blue-base p-5 mt-5 text-justify max-w-3xl">
                  {t("socialIntervention.description")}
                </p>
              </section>

              <motion.div {...slideFromRight}>
                <section className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-3 mt-5 md:mt-0">
                  {socialData.map((socialData, index) => (
                    <div
                      key={index}
                      className="bg-white max-w-sm block mx-auto p-2 border-2 rounded-2xl border-gray-200 shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                      <section className="group/icon flex flex-wrap md:flex-nowrap items-start justify-evenly">
                        <div className="flex items-center m-2 justify-center rounded-xl p-2 bg-dark-blue group-hover/icon:bg-primary-yellow transition-colors">
                          <div className="text-xl rounded-lg text-white group-hover/icon:text-dark-blue transition-colors">
                            {socialData.icon}
                          </div>
                        </div>
                        <div className="flex flex-col m-2 text-center md:text-left">
                          <h4 className="text-lg text-dark-blue font-extrabold">
                            {socialData.title}{" "}
                          </h4>
                          <p className="text-sm text-blue-base mt-2">
                            {socialData.description}
                          </p>
                        </div>
                      </section>
                    </div>
                  ))}
                </section>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Description;
