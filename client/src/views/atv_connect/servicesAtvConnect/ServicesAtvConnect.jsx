import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaMedal } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { DoodleLine } from "../../../assets/images/svg/Svg";
import { useTranslation } from "react-i18next";
import { LuBookOpen } from "react-icons/lu";
import { motion } from "framer-motion";

function ServicesAtvConnect() {
  const { t } = useTranslation();

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const floatSnake = (delay = 0) => ({
    initial: { y: -10 },
    animate: { y: [0, -25, 0] },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
      delay,
    },
  });

  const slideFromRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  return (
    <>
      <section className="bg-[#F6F6F6] grid grid-cols-1 lg:grid-cols-2 text-center p-10 md:gap-10">
        <motion.div
          {...slideFromTop}
          className="relative items-center justify-center flex flex-col"
        >
          <span className="text-lg md:text-xl font-impact text-primary-purple">
            {t("atvConnect.services.span")}
          </span>
          <h2 className="text-4xl md:text-5xl font-impact text-blue-base">
            {t("atvConnect.services.title_one")} <br />
            <span className="text-primary-yellow">
              {t("atvConnect.services.title_two")}
            </span>
          </h2>

          <div className="relative w-full h-auto">
            <FaMedal className="sticky top-0 bottom-0 right-0 left-0 block mx-auto text-9xl m-5 text-gray-200" />
          </div>
        </motion.div>

        <div className="relative">
          <motion.div {...floatSnake(0)} className="absolute top-0 right-0">
            <BsRocketTakeoff className="hidden md:block mx-auto text-9xl m-5 text-gray-200 rotate-12" />
            <div className="hidden md:block relative top-[10px] left-[-170px] w-full h-full bg-opacity-10 -rotate-45">
              <DoodleLine />
            </div>
          </motion.div>
          <section className="">
            <motion.div {...slideFromRight}>
              {" "}
              <section className="bg-white group/icon flex flex-wrap md:flex-nowrap items-start justify-evenly max-w-[450px] m-3 mb-5 p-5 border-2 rounded-2xl border-gray-200 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center m-2 justify-center rounded-xl p-3 bg-dark-blue group-hover/icon:bg-primary-yellow transition-colors">
                  <LuBookOpen className="text-2xl rounded-lg text-white group-hover/icon:text-dark-blue transition-colors" />{" "}
                </div>
                <div className="flex flex-col m-2 text-left text-blue-base">
                  <h4 className="text-lg md:text-xl font-bold">
                    {t("atvConnect.services.item_tutoring.title")}
                  </h4>
                  <p className="text-sm md:text-base">
                    {t("atvConnect.services.item_tutoring.description")}
                  </p>
                </div>
              </section>
            </motion.div>
            <motion.div {...slideFromRight}>
              <section className="relative bg-white group/icon flex flex-wrap md:flex-nowrap items-start justify-evenly max-w-[450px] m-3 mb-5 p-5 border-2 rounded-2xl border-gray-200 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center m-2 justify-center rounded-xl p-3 bg-dark-blue group-hover/icon:bg-primary-yellow transition-colors">
                  <FaArrowTrendUp className="text-2xl rounded-lg text-white group-hover/icon:text-dark-blue transition-colors" />{" "}
                </div>
                <div className="flex flex-col m-2 text-left text-blue-base">
                  <h4 className="text-lg md:text-xl font-bold">
                    {t("atvConnect.services.item_progress.title")}
                  </h4>
                  <p className="text-sm md:text-base">
                    {t("atvConnect.services.item_progress.description")}
                  </p>
                </div>
              </section>
            </motion.div>
            <motion.div {...slideFromRight}>
              <section className="bg-white group/icon flex flex-wrap md:flex-nowrap items-start justify-evenly max-w-[450px] m-3 mb-5  p-5 border-2 rounded-2xl border-gray-200 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center m-2 justify-center rounded-xl p-3 bg-dark-blue group-hover/icon:bg-primary-yellow transition-colors">
                  <IoMdTime className="text-2xl rounded-lg text-white group-hover/icon:text-dark-blue transition-colors" />{" "}
                </div>
                <div className="flex flex-col m-2 text-left text-blue-base">
                  <h4 className="text-lg md:text-xl font-bold">
                    {t("atvConnect.services.item_hours.title")}
                  </h4>
                  <p className="text-sm md:text-base">
                    {t("atvConnect.services.item_hours.description")}
                  </p>
                </div>
              </section>
            </motion.div>
          </section>
        </div>
      </section>
    </>
  );
}

export default ServicesAtvConnect;
