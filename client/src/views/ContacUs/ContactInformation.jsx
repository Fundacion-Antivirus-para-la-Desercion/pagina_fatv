import { useTranslation } from "react-i18next";
import { JAVI_SENALA_IMG as JaviSenala } from "../../assets/cloudinaryImages";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

function ContactInformation() {
  const { t } = useTranslation();

  return (
    <div id="maps" className="relative my-32 px-2 lg:px-10 flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="relative lg:w-[700px] h-[500px] rounded-xl overflow-hidden shadow-lg">
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
            <p className="text-2xl font-bold">
              {t("contactUs.googleMaps")}
            </p>
            <FaLocationDot />
          </div>
          <p className="text-xl">{t("contactUs.findUsHere")}</p>
        </a>
      </div>

      <img
        src={JaviSenala}
        alt={t("contactUs.banner.alt")}
        className="h-full max-h-[500px] hidden lg:block"
        loading="lazy"
      />

      <div className="relative w-full lg:w-450 max-md:p-6 max-lg:p-6 text-center md:text-left">
        <p className="text-base md:text-lg text-primary-purple font-impact">
          {t("contactUs.startConversation")}
        </p>

        <h1 className="lineSubtitle text-blue-base font-impact text-4xl md:text-5xl lg:text-5xl mb-2 mt-2">
          {t("contactUs.conversationTitle")}
        </h1>

        <p className="text-dark-blue font-bold">
          {t("contactUs.mainHeadquarters")}
        </p>
        <p className="text-blue-base">{t("contactUs.address")} </p>
        <p className="text-blue-base">{t("contactUs.city")}</p>
        <p className="text-dark-blue font-bold">{t("contactUs.email")}</p>
        <p className="text-blue-base overflow-hidden whitespace-nowrap text-ellipsis">
          {t("contactUs.emailAddress")}
        </p>

        <p className="text-dark-blue font-bold">
          {t("contactUs.whatsapp")}
        </p>
        <p className="text-blue-base">{t("contactUs.whatsappNumber")}</p>
      </div>
    </div>
  );
}

export default ContactInformation;
