import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import IconDonation from "../../assets/images/views/donationPay/coin.png";
import JaviCorto from "../../assets/images/views/javi/javi-corto.webp";
import { floatSnake } from "../motion/constants/Animations.js";
import { IoHeart } from "react-icons/io5";
import { useTranslation, Trans } from "react-i18next";

const AUTO_CLOSE_MS = 11000;

const DonationWelcomePopUp = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const { t } = useTranslation();

  const addDonationPopupCookie = () => {
    const DATE_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000;

    const expires = new Date(Date.now() + DATE_EXPIRATION_MS).toUTCString();

    document.cookie = `donation_popup_shown=true; expires=${expires}; path=/; SameSite=Lax`;
  };

  const shouldShowDonationPopup = () => {
    return !document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith("donation_popup_shown="));
  };

  useEffect(() => {
    if (!shouldShowDonationPopup()) {
      return;
    }

    const openDelay = setTimeout(() => {
      addDonationPopupCookie();
      setVisible(true);

      const step = 100 / (AUTO_CLOSE_MS / 50);
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const next = prev - step;
          return next <= 0 ? 0 : next;
        });
      }, 50);

      timeoutRef.current = setTimeout(() => close(), AUTO_CLOSE_MS);
    }, 800);

    return () => {
      clearTimeout(openDelay);
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const close = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={close}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg mx-4 overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 h-2 bg-primary-purple/20 w-full">
          <div
            className="h-full bg-primary-purple transition-all ease-linear rounded-r-full"
            style={{ width: `${progress}%`, transitionDuration: "50ms" }}
          />
        </div>

        <button
          onClick={close}
          aria-label="Cerrar"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl leading-none font-bold"
        >
          &times;
        </button>

        <div className="flex flex-col items-center text-center px-10 pt-12 gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-renogare text-primary-purple leading-tight mb-5">
              <IoHeart className="inline-block mr-2" />
              {t("donationWelcomePopUp.title")}
            </h2>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
              <Trans i18nKey="donationWelcomePopUp.message" components={{ 1: <br /> }} />
            </p>
          </div>

          <Link
            to="/DonationPay"
            className="flex items-center gap-2 mt-4 px-8 py-2 shadow-md bg-primary-purple text-white rounded-3xl cursor-pointer hover:bg-primary-purple/90 transition-colors"
          >
            <div className="text-lg md:text-2xl text-white">
              {t("donationWelcomePopUp.donateButton")}
            </div>
          </Link>

          <div className="relative flex items-end justify-center w-full h-40">
            <motion.div
              {...floatSnake()}
              className="absolute top-8 left-10 md:left-28 z-20 bg-primary-purple rounded-full p-1 shadow-lg"
            >
              <img
                src={IconDonation}
                alt="Moneda de donación"
                className="w-12 h-12 drop-shadow-md"
              />
            </motion.div>
            <img
              src={JaviCorto}
              alt="Javi"
              className="relative z-10 h-36 md:h-44 w-auto drop-shadow-lg"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-primary-purple/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationWelcomePopUp;
