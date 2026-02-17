import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function StepsAtvConnect() {
  const { t } = useTranslation();

  const expandableTransition = (delayValue) => ({
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut", delay: delayValue },
    viewport: { once: true },
  });

  return (
    <>
      <section className="mt-5 text-center p-10">
        <div>
          <span className="text-primary-purple font-impact text-lg md:text-xl">
            {t("atvConnect.steps.span")}
          </span>
          <h5 className="text-dark-blue font-impact text-4xl md:text-5xl">
            {t("atvConnect.steps.title")}
          </h5>
          <h6 className="text-primary-yellow font-impact text-4xl md:text-5xl">
            {t("atvConnect.steps.span_two")}
          </h6>
        </div>
        <div>
          <section className="md:flex md:justify-evenly m-10">
            <motion.div
              {...expandableTransition(0)}
              className="relative flex flex-col items-center mt-5"
            >
              <span className="text-8xl font-impact text-[#F0F1F5]">01</span>
              <p className="absolute bottom-6 text-xl text-dark-blue font-extrabold">
                {t("atvConnect.steps.step_one.title")}
              </p>
              <p className="text-gray-400">
                {t("atvConnect.steps.step_one.description")}
              </p>
            </motion.div>
            <motion.div
              {...expandableTransition(0.4)}
              className="relative flex flex-col items-center mt-5"
            >
              <span className="text-8xl font-impact text-[#F0F1F5]">02</span>
              <p className="absolute bottom-6 text-xl text-dark-blue font-extrabold">
                {t("atvConnect.steps.step_two.title")}
              </p>
              <p className="text-gray-400">
                {t("atvConnect.steps.step_two.description")}
              </p>
            </motion.div>
            <motion.div
              {...expandableTransition(0.8)}
              className="relative flex flex-col items-center mt-5"
            >
              <span className="text-8xl font-impact text-[#F0F1F5]">03</span>
              <p className="absolute bottom-6 text-xl text-dark-blue font-extrabold">
                {t("atvConnect.steps.step_three.title")}
              </p>
              <p className="text-gray-400">
                {t("atvConnect.steps.step_three.description")}
              </p>
            </motion.div>
          </section>
        </div>
      </section>
    </>
  );
}

export default StepsAtvConnect;
