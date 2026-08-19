import LocalizedLink from "../routing/LocalizedLink";
import styles from "./Btns.module.css";
import { ICON_DONATION_IMG as IconDonation } from "../../assets/cloudinaryImages";
import { useTranslation } from "react-i18next";
import { useRoute } from "../../routes/useRoute";

// Estas dos páginas tienen su propio CTA fijo en la misma posición de la
// pantalla, así que el botón flotante de donación se oculta ahí.
const HIDDEN_ON = ["provocacion", "atvConnect"];

function Btns() {
  const { t } = useTranslation();
  const { routeKey } = useRoute();
  const showDonationPay = !HIDDEN_ON.includes(routeKey);

  return (
    <LocalizedLink
      routeKey="donation"
      className={`fixed top-1/2 right-4 transform -translate-y-1/2 z-50 group ${
        showDonationPay ? "block" : "hidden"
      }`}
    >
      <div
        className={`flex items-center rounded-full p-2 shadow-lg bg-primary-purple ${styles.btnDonate}`}
      >
        <img
          src={IconDonation}
          alt={t("btns.alt_donation_icon")}
          className="w-10 h-10"
          loading="lazy"
        />
        <p className="text-white text-lg font-bold">{t("btns.donate")}</p>
      </div>
    </LocalizedLink>
  );
}

export default Btns;