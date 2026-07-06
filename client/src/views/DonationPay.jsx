import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube, Autoplay } from "swiper/modules";
import Acompañamiento1 from "../../src/assets/images/views/donationPay/acompañamiento1.jpg";
import Acompañamiento2 from "../../src/assets/images/views/donationPay/acompañamiento2.jpg";
import Acompañamiento3 from "../../src/assets/images/views/donationPay/acompañamiento3.jpg";
import Acompañamiento4 from "../../src/assets/images/views/donationPay/acompañamiento4.jpg";
import Acompañamiento5 from "../../src/assets/Banner/banner6c.jpeg";
import Pay from "../../src/assets/images/views/donationPay/pay.png";

const DONATION_STEP = 1000;
const ALLOWED_DONATION_CONTROL_KEYS = [
  "Backspace",
  "Delete",
  "Tab",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
];

function DonationPay() {
  const { t } = useTranslation();
  const [donationAmount, setDonationAmount] = useState("10000");
  const [isOtherAmountSelected, setIsOtherAmountSelected] = useState(false);
  const donationAmountText = donationAmount;
  const donationAmountInputSize = Math.max(donationAmountText.length, 1);
  const donationAmountInputWidth =
    isOtherAmountSelected && donationAmount === ""
      ? "22ch"
      : `${donationAmountInputSize + 4}ch`;
  const parsedDonationAmount = Number(donationAmount);
  const hasOnlyDigits = /^\d+$/.test(donationAmountText);
  const isDonationAmountValid =
    donationAmount !== "" &&
    hasOnlyDigits &&
    Number.isInteger(parsedDonationAmount) &&
    parsedDonationAmount > 0 &&
    parsedDonationAmount % DONATION_STEP === 0;
  const donationAmountError =
    donationAmount === ""
      ? ""
      : parsedDonationAmount <= 0
        ? t("donation.amount_must_be_greater_than_zero")
        : !Number.isInteger(parsedDonationAmount) ||
            parsedDonationAmount % DONATION_STEP !== 0
          ? t("donation.amount_must_be_multiple_of_step", {
              step: "1.000",
            })
          : "";

  const [wompiStatus, setWompiStatus] = useState("loading");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.wompi.co/widget.js";
    script.async = true;

    const timeout = setTimeout(() => setWompiStatus("error"), 10000);

    script.onload = () => {
      clearTimeout(timeout);
      setWompiStatus("ready");
    };
    script.onerror = () => {
      clearTimeout(timeout);
      setWompiStatus("error");
    };

    document.body.appendChild(script);

    return () => {
      clearTimeout(timeout);
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    if (!isDonationAmountValid) {
      console.error("Monto de donación no válido");
      return;
    }

    const form = document.createElement("form");
    form.action = "https://checkout.wompi.co/p/";
    form.method = "GET";
    document.body.appendChild(form);

    const publicKey = document.createElement("input");
    publicKey.type = "hidden";
    publicKey.name = "public-key";
    publicKey.value = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
    form.appendChild(publicKey);

    const currency = document.createElement("input");
    currency.type = "hidden";
    currency.name = "currency";
    currency.value = "COP";
    form.appendChild(currency);

    const amount = document.createElement("input");
    amount.type = "hidden";
    amount.name = "amount-in-cents";
    amount.value = parsedDonationAmount * 100;
    form.appendChild(amount);

    const reference = document.createElement("input");
    reference.type = "hidden";
    reference.name = "reference";
    const uuid = crypto.randomUUID().replace(/-/g, "");
    reference.value = uuid;
    form.appendChild(reference);

    form.submit();
  };

  const handleChange = (e) => {
    const { value } = e.target;

    if (value === "") {
      setDonationAmount("");
      return;
    }

    if (!/^\d+$/.test(value)) {
      return;
    }

    const normalizedValue = value.replace(/^0+(?=\d)/, "");

    const nextAmount = Number(normalizedValue);

    if (Number.isNaN(nextAmount) || nextAmount < 0) {
      return;
    }

    setDonationAmount(normalizedValue);
  };

  const handleDonationAmountKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    }

    if (ALLOWED_DONATION_CONTROL_KEYS.includes(e.key) || /^\d$/.test(e.key)) {
      return;
    }

    e.preventDefault();
  };

  return (
    <div className="flex justify-center px-4 pb-10 pt-12 lg:px-6 lg:pb-14 lg:pt-[145px]">
      <div className="flex w-full max-w-5xl flex-col items-center gap-5">
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl lg:min-h-[760px] lg:grid-cols-2">
          <div className="flex flex-col gap-6 bg-[#EDEFF8] p-6 text-center md:text-left lg:justify-center lg:p-10 lg:border-r">
            <h1 className="text-xl md:text-2xl text-blue-base font-bold mb-5 leading-tight">
              {t("donation.foundation_name")}
            </h1>

            <div>
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                modules={[EffectCube, Autoplay]}
                className="mySwiper w-44 h-44 lg:w-64 lg:h-64 rounded-xl"
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <img
                    src={Acompañamiento1}
                    alt={t("donation.alt_text")}
                    className="block w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Acompañamiento2}
                    alt={t("donation.alt_text")}
                    className="block w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Acompañamiento3}
                    alt={t("donation.alt_text")}
                    className="block w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Acompañamiento4}
                    alt={t("donation.alt_text")}
                    className="block w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Acompañamiento5}
                    alt={t("donation.alt_text")}
                    className="block w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-blue-base opacity-85 text-justify m-3 md:m-5 leading-relaxed md:leading-normal">
              {t("donation.description")}
            </p>
          </div>

          <div className="flex justify-center flex-col gap-6 p-6 lg:p-10">
            <div className="flex items-center justify-center mb-5">
              <img className="w-10 h-10" src={Pay} alt="" />
              <h2 className="m-2 font-impact  text-xl md:text-3xl text-center text-primary-yellow">
                {t("donation.be_part_solution")}
              </h2>
            </div>

            <p className="text-base text-center md:text-left font-bold text-dark-blue">
              {t("donation.amount_to_donate")}
            </p>
            <div
              className={`flex h-10 w-full items-center justify-center rounded-xl border px-4 ${
                donationAmountError
                  ? "border-red-400 focus-within:border-red-500"
                  : "border-gray-300 hover:border-blue-300 focus-within:border-blue-300"
              }`}
            >
              <span className="mr-1 font-semibold text-[#222D56]">
                $
              </span>
              <input
                className={`h-full min-w-[6ch] bg-transparent text-[#222D56] outline-none ${
                  isOtherAmountSelected && donationAmount === ""
                    ? "text-center placeholder:text-center"
                    : "text-left"
                }`}
                type="number"
                min="0"
                step={DONATION_STEP}
                style={{ width: donationAmountInputWidth }}
                value={donationAmount}
                placeholder={
                  isOtherAmountSelected
                    ? t("donation.enter_amount_to_donate")
                    : undefined
                }
                onChange={handleChange}
                onKeyDown={handleDonationAmountKeyDown}
                inputMode="numeric"
                aria-invalid={Boolean(donationAmountError)}
                aria-describedby={
                  donationAmountError ? "donation-amount-error" : undefined
                }
              />
            </div>
            {donationAmountError && (
              <p id="donation-amount-error" className="mb-5 text-sm text-red-600">
                {donationAmountError}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-2 mb-5 md:mb-10">
              <button
                onClick={() => {
                  setDonationAmount("5000");
                  setIsOtherAmountSelected(false);
                }}
                className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                  donationAmount === "5000"
                    ? "bg-primary-purple text-white"
                    : "hover:bg-primary-purple hover:text-white"
                }`}
              >
                $5.000
              </button>
              <button
                onClick={() => {
                  setDonationAmount("10000");
                  setIsOtherAmountSelected(false);
                }}
                className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                  donationAmount === "10000"
                    ? "bg-primary-yellow text-white"
                    : "hover:bg-primary-yellow hover:text-white"
                }`}
              >
                $10.000
              </button>
              <button
                onClick={() => {
                  setDonationAmount("20000");
                  setIsOtherAmountSelected(false);
                }}
                className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                  donationAmount === "20000"
                    ? "bg-primary-purple text-white"
                    : "hover:bg-primary-purple hover:text-white"
                }`}
              >
                $20.000
              </button>
              <button
                onClick={() => {
                  setDonationAmount("50000");
                  setIsOtherAmountSelected(false);
                }}
                className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                  donationAmount === "50000"
                    ? "bg-primary-yellow text-white"
                    : "hover:bg-primary-yellow hover:text-white"
                }`}
              >
                $50.000
              </button>
              <button
                onClick={() => {
                  setDonationAmount("100000");
                  setIsOtherAmountSelected(false);
                }}
                className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                  donationAmount === "100000"
                    ? "bg-primary-purple text-white"
                    : "hover:bg-primary-purple hover:text-white"
                }`}
              >
                $100.000
              </button>
              <button
                onClick={() => {
                  setDonationAmount("");
                  setIsOtherAmountSelected(true);
                }}
                className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                  isOtherAmountSelected
                    ? "bg-primary-yellow text-white"
                    : "hover:bg-primary-yellow hover:text-white"
                }`}
              >
                {t("donation.other_amount")}
              </button>
              <p className="text-xs lg:text-sm w-full mt-2 font-semibold text-[#222D56] text-center">
                {t("donation.cop")}
              </p>
            </div>

            

            {wompiStatus === "error" && (
              <p className="text-sm text-red-600 text-center">
                {t("donation.payment_service_unavailable")}
              </p>
            )}

            <button
              className={`bg-dark-blue text-white font-semibold rounded-2xl py-4 px-8 ${
                (!isDonationAmountValid || wompiStatus !== "ready") &&
                "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleClick}
              disabled={!isDonationAmountValid || wompiStatus !== "ready"}
            >
              {wompiStatus === "loading"
                ? t("donation.loading_payment")
                : t("donation.continue")}
            </button>
          </div>
        </div>
        <p className="text-center text-sm text-blue-base lg:text-base">
          {t("donation.secure_payments")}
          <span className="font-bold"> Wompi</span>
        </p>
      </div>
    </div>
  );
}

export default DonationPay;
