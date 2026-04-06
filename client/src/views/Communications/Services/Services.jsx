import { TbMovie } from "react-icons/tb";
import { MdCampaign } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { MdShare } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { slideFromTop } from "../../../components/motion/constants/Animations.js";

function Services() {
  const { t } = useTranslation();

  const communicationServices = [
    {
      icon: <TbMovie />,
      title: t("communications.services.serviceOne.title"),
      description: t("communications.services.serviceOne.description"),
    },
    {
      icon: <MdCampaign />,
      title: t("communications.services.servicesTwo.title"),
      description: t("communications.services.servicesTwo.description"),
    },
    {
      icon: <IoBookOutline />,
      title: t("communications.services.servicesThree.title"),
      description: t("communications.services.servicesThree.description"),
    },
    {
      icon: <FaPenNib />,
      title: t("communications.services.servicesFour.title"),
      description: t("communications.services.servicesFour.description"),
    },
    {
      icon: <MdShare />,
      title: t("communications.services.servicesFive.title"),
      description: t("communications.services.servicesFive.description"),
    },
  ];
  return (
    <>
      <section className="bg-dark-blue px-5 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-sm md:text-base uppercase tracking-widest text-primary-yellow font-impact">
            {t("communications.services.span")}
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-impact mt-2">
            {t("communications.services.title")}
          </h3>
        </div>
        <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
          {communicationServices.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 md:p-3">
              <motion.div
                {...slideFromTop(2)}
                className="group md:flex text-center md:text-left items-center md:items-start bg-[#ffffff22] backdrop-blur-sm rounded-2xl border border-white/20 p-5 md:p-6 h-full hover:border-primary-yellow hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <div className="shrink-0 w-fit mx-auto md:mx-0 mb-4 md:mb-0 bg-primary-yellow/15 text-primary-yellow text-xl md:text-2xl rounded-xl p-3 flex items-center justify-center md:mr-4 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg md:text-xl font-extrabold text-white mb-2 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
