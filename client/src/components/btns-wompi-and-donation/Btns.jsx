import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Btns.module.css";
import IconDonation from "../../../src/assets/images/views/donationPay/coin.png";
import { useTranslation } from "react-i18next";

function Btns() {
  const { t } = useTranslation();
  const location = useLocation();
  const [showDonationPay, setShowDonationPay] = useState(false);

  useEffect(() => {
    const sessionStorageValue =
      location.pathname.toLowerCase() === "/provocacion" ? false : true;

    setShowDonationPay(sessionStorageValue);
  }, [location.pathname]);

  return (
    <Link
      to="/DonationPay"
      className={`fixed top-1/2 right-4 transform -translate-y-1/2 z-50 group ${
        showDonationPay === true ? "block" : "hidden"
      }`}
    >
      <div
        className={`flex items-center rounded-full p-2 shadow-lg bg-primary-purple ${styles.btnDonate}`}
      >
        <img
          src={IconDonation}
          alt={t("btns.alt_donation_icon")}
          className="w-10 h-10"
        />
        <p className="text-white text-lg font-bold">{t("btns.donate")}</p>
      </div>
    </Link>
  );
}

export default Btns;