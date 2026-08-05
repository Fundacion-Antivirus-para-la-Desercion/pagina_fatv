import { useTranslation } from "react-i18next";
import { JAVI_ESQUINA_IMG as JaviSenala } from "../../assets/cloudinaryImages";
import { FaLocationDot, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { floatSnake } from "../../components/motion/constants/Animations.js";
import WhatsAppRedirect from "../../components/whatsAppRedirect/WhatsAppRedirect.js";

function ContactInformation() {
  const { t } = useTranslation();

  return (
    <div className="relative py-10 md:py-24 my-8 md:my-16 px-2 lg:px-10 flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-0">
      <div className="relative w-full lg:w-450 max-md:p-6 max-lg:p-6 text-center md:text-left">
        <p className="text-base md:text-lg text-primary-purple font-impact">
          {t("contactUs.startConversation")}
        </p>

        <h1 className="lineSubtitle text-blue-base font-impact text-4xl md:text-5xl lg:text-6xl mb-2 mt-2">
          {t("contactUs.conversationTitle")}
        </h1>

        <p className="text-blue-base text-md mt-4">
          {t("contactUs.paragraphDescription")}
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <a
            href={WhatsAppRedirect(t("whatsappMessage.contactPage"))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("contactUs.whatsapp")}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:border-brand-teal-300 hover:shadow-md transition-all"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-teal-50 shrink-0">
              <FaWhatsapp className="text-brand-teal-300 text-2xl" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {t("contactUs.whatsapp")}
              </span>
              <span className="text-dark-blue font-bold text-xl">
                {t("contactUs.whatsappNumber")}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${t("contactUs.emailAddress")}`}
            aria-label={t("contactUs.email")}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:border-brand-purple-200 hover:shadow-md transition-all"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-50 shrink-0">
              <FaEnvelope className="text-primary-purple text-2xl" />
            </span>
            <span className="flex flex-col min-w-0">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {t("contactUs.email")}
              </span>
              <span className="text-dark-blue font-bold text-sm md:text-base truncate lg:whitespace-normal lg:overflow-visible">
                {t("contactUs.emailAddress")}
              </span>
            </span>
          </a>

          <a
            href="https://www.google.com/maps/place/Fundacion+Antivirus+para+la+Desercion/@6.1546087,-75.6316542,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468164563dd5f3:0xe4f4c0dbfe0be02e!8m2!3d6.1546034!4d-75.6290793!16s%2Fg%2F11vf1_zb9j?hl=es&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("contactUs.mainHeadquarters")}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:border-dark-blue hover:shadow-md transition-all"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-50 shrink-0">
              <FaLocationDot className="text-dark-blue text-2xl" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {t("contactUs.mainHeadquarters")}
              </span>
              <span className="text-dark-blue font-bold text-base">
                {t("contactUs.address")}, {t("contactUs.city")}
              </span>
            </span>
          </a>
        </div>
      </div>
      <img
        src={JaviSenala}
        className="hidden xl:block md:h-[300px] lg:h-[350px] w-auto"
        alt={t("contactUs.altLocation")}
      />

      <div className="relative w-full h-[280px] md:w-[450px] md:h-[400px] xl:w-[650px] xl:h-[500px] rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4762.25177817499!2d-75.62899159999999!3d6.154664400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468164563dd5f3%3A0xe4f4c0dbfe0be02e!2sFundacion%20Antivirus%20para%20la%20Desercion!5e0!3m2!1ses!2sco!4v1785759788967!5m2!1ses!2sco"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={t("contactUs.altLocation")}
          className="w-full h-full"
        />
        <a
          href="https://www.google.com/maps/place/Fundacion+Antivirus+para+la+Desercion/@6.1546087,-75.6316542,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468164563dd5f3:0xe4f4c0dbfe0be02e!8m2!3d6.1546034!4d-75.6290793!16s%2Fg%2F11vf1_zb9j?hl=es&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("contactUs.findUsHere")}
          className="absolute bg-dark-blue text-white bottom-0 left-0 p-4 w-full lg:w-80 text-center cursor-pointer"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="text-2xl font-bold">{t("contactUs.googleMaps")}</p>
            <FaLocationDot />
          </div>
          <p className="text-xl">{t("contactUs.findUsHere")}</p>
        </a>
      </div>

      <motion.div
        {...floatSnake(0)}
        className="hidden md:block absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full top-0 right-5"
      />
      <motion.div
        {...floatSnake(0)}
        className="hidden md:block absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full top-20 right-5"
      />
      <motion.div
        {...floatSnake(0)}
        className="hidden md:block absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full -bottom-5 left-16"
      />
      <motion.div
        {...floatSnake(0)}
        className="hidden md:block absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full -bottom-16 left-5"
      />
    </div>
  );
}

export default ContactInformation;
