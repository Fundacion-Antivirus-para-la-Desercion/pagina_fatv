import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaUserFriends } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiClockCountdownFill } from "react-icons/pi";
import { BsPersonArmsUp } from "react-icons/bs";
import { JAVI_CON_PORTATIL_IMG as Javi } from "../../../assets/cloudinaryImages";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import { slideFromRight } from "../../../components/motion/constants/Animations.js";
const SERVICE_ITEMS = [
  {
    Icon: FaUserFriends,
    titleKey: "atvConnect.services.item_tutoring.title",
    descKey: "atvConnect.services.item_tutoring.description",
  },
  {
    Icon: LiaChalkboardTeacherSolid,
    titleKey: "atvConnect.services.item_progress.title",
    descKey: "atvConnect.services.item_progress.description",
  },
  {
    Icon: PiClockCountdownFill,
    titleKey: "atvConnect.services.item_hours.title",
    descKey: "atvConnect.services.item_hours.description",
  },
  {
    Icon: BsPersonArmsUp,
    titleKey: "atvConnect.services.comprehensive_support.title",
    descKey: "atvConnect.services.comprehensive_support.description",
  },
];

function ServicesAtvConnect() {
  const { t } = useTranslation();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particleOptions = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: 0 },
      fpsLimit: 120,
      particles: {
        number: { value: 200, density: { enable: true } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.7, random: true },
        size: { value: { min: 1, max: 3 }, random: true },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <section className="flex flex-wrap items-center justify-center gap-8 p-10">
      <div className="relative flex items-end justify-center md:mr-32">
        <div className="absolute bottom-[-14px] w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-brand-teal-400" />
        <div className="absolute bottom-0 z-[1] w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-dark-blue overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_#0B8F84_30%,_#bd23fb00_0%)]" />
          {init && (
            <Particles
              id="tsparticles-javi"
              options={particleOptions}
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>
        <img
          src={Javi}
          alt="Character Art"
          className="relative z-10 w-56 md:w-80 object-contain drop-shadow-xl"
        />
      </div>

      <section className="flex flex-col items-center gap-5">
        <section className="text-center">
          <span className="text-base md:text-lg font-impact text-primary-purple">
            {t("atvConnect.services.span")}
          </span>
          <h2 className="text-4xl md:text-5xl font-impact text-blue-base">
            {t("atvConnect.services.title_one")} <br />
            <span className="text-primary-yellow">
              {t("atvConnect.services.title_two")}
            </span>
          </h2>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {SERVICE_ITEMS.map(({ Icon, titleKey, descKey }) => (
            <motion.article
              key={titleKey}
              {...slideFromRight({
                transition: { delay: 0.5 },
                viewport: { amount: 0.1 },
              })}
              className="h-full"
            >
              <div className="flex flex-col h-full bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500">
                <div className="flex justify-between">
                  <div className="p-2 text-4xl text-primary-yellow bg-yellow-100 rounded-xl mb-3">
                    <Icon />
                  </div>
                  <div>
                    <span className="text-dark-blue tex-base md:text-lg font-bold">
                      {t(titleKey)}
                    </span>
                  </div>
                </div>
                <p className="text-left text-sm md:text-base text-dark-blue mt-3">
                  {t(descKey)}
                </p>
              </div>
            </motion.article>
          ))}
        </section>
      </section>
    </section>
  );
}

export default ServicesAtvConnect;
