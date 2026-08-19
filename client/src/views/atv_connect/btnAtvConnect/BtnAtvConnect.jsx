import styles from "./BtnAtvConnect.module.css";
import { JAVI_CARA_ATV_CONECTA_IMG as IconATVConnect } from "../../../assets/cloudinaryImages";
import { useTranslation } from "react-i18next";
import WhatsAppRedirect from "../../../components/whatsAppRedirect/WhatsAppRedirect";
import { useRoute } from "../../../routes/useRoute";

const HIDDEN_ON = ["provocacion"];

function BtnAtvConnect() {
  const { t } = useTranslation();
  const { routeKey } = useRoute();
  const showAtvConnect = !HIDDEN_ON.includes(routeKey);

  return (
    <a
      href={WhatsAppRedirect(t("whatsappMessage.atvConnect"))}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed top-1/2 right-4 transform -translate-y-1/2 z-50 group ${
        showAtvConnect ? "block" : "hidden"
      }`}
    >
      <div
        className={`flex items-center rounded-full p-2 shadow-lg bg-brand-teal-400 ${styles.btnDonate}`}
      >
        <img
          src={IconATVConnect}
          alt={t("btns.alt_donation_icon")}
          className="w-12 h-12 rounded-full"
          loading="lazy"
        />
        <p className="text-white text-base font-bold">ATVConecta</p>
      </div>
    </a>
  );
}

export default BtnAtvConnect;
