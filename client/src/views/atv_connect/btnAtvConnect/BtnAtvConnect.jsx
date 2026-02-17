import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./BtnAtvConnect.module.css";
import IconATVConnect from "../../../assets/images/views/atvConnect/javiAtvConecta.webp";
import { useTranslation } from "react-i18next";

function BtnAtvConnect() {
  const { t } = useTranslation();
  const location = useLocation();
  const [showDonationPay, setShowDonationPay] = useState(false);

  useEffect(() => {
    const sessionStorageValue =
      location.pathname.toLowerCase() === "/provocacion" ? false : true;

    setShowDonationPay(sessionStorageValue);
  }, [location.pathname]);

  return (
    <a
      href="https://atvconecta.com/login"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed top-1/2 right-4 transform -translate-y-1/2 z-50 group ${
        showDonationPay === true ? "block" : "hidden"
      }`}
    >
      <div
        className={`flex items-center rounded-full p-2 shadow-lg bg-brand-teal-400 ${styles.btnDonate}`}
      >
        <img
          src={IconATVConnect}
          alt={t("btns.alt_donation_icon")}
          className="w-12 h-12 rounded-full"
        />
        <p className="text-white text-base font-bold">ATVConecta</p>
      </div>
    </a>
  );
}

export default BtnAtvConnect;
