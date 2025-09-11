import React, { useState, useEffect } from "react";
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

function DonationPay() {
  const { t } = useTranslation();
  const [donationAmount, setDonationAmount] = useState(100);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [donationType, setDonationType] = useState(""); // Estado para el tipo de donación

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.wompi.co/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    if (Number.isNaN(parseFloat(donationAmount)) || !acceptedTerms) {
      console.error("Monto de donación no válido o términos no aceptados");
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
    amount.value = donationAmount * 100;
    form.appendChild(amount);

    const reference = document.createElement("input");
    reference.type = "hidden";
    reference.name = "reference";
    reference.value = "REFERENCIA_DE_PAGO";
    form.appendChild(reference);

    form.submit();
  };

  const handleChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
    setAcceptedTerms(true);
  };

  return (
    <div className="lg:pt-[145px] flex  justify-center flex-wrap">
      <div className="w-[80%] grid grid-cols-1 rounded-3xl lg:grid-cols-2 shadow-2xl justify-center">
        <div className="flex flex-col flex-wrap gap-6 p-10 rounded-l-3xl bg-[#EDEFF8] lg:border-r">
          <h1 className="lg:text-2xl sm:text-xl text-title font-bold mb-5 leading-tight">
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
              className="mySwiper w-32 h-32 lg:w-60 lg:h-60 rounded-xl"
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

          <p className="text-lg text-title opacity-85 text-justify m-5">
            {t("donation.description")}
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:pl-10 p-10">
          <div className="flex items-center justify-center mb-5">
            <img className="w-10 h-10" src={Pay} alt="" />
            <h1 className="m-2 font-bold text-3xl text-[#f8b732]">
              {t("donation.be_part_solution")}
            </h1>
          </div>

          <p className="text-base font-bold text-[#222D56]">
            {t("donation.amount_to_donate")}
          </p>
          <input
            className="w-full h-10 rounded-xl border border-gray-300 hover:border-blue-300 text-center mb-5"
            type="number"
            min="100"
            step="1"
            value={donationAmount}
            onChange={handleChange}
          />

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setDonationAmount(5000)}
              className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                donationAmount === 5000
                  ? "bg-[#7C78B3] text-white"
                  : "hover:bg-[#7C78B3] hover:text-white"
              }`}
            >
              $5.000
            </button>
            <button
              onClick={() => setDonationAmount(10000)}
              className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                donationAmount === 10000
                  ? "bg-[#f8b732] text-white"
                  : "hover:bg-[#f8b732] hover:text-white"
              }`}
            >
              $10.000
            </button>
            <button
              onClick={() => setDonationAmount(20000)}
              className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                donationAmount === 20000
                  ? "bg-[#7C78B3] text-white"
                  : "hover:bg-[#7C78B3] hover:text-white"
              }`}
            >
              $20.000
            </button>
            <button
              onClick={() => setDonationAmount(50000)}
              className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                donationAmount === 50000
                  ? "bg-[#f8b732] text-white"
                  : "hover:bg-[#f8b732] hover:text-white"
              }`}
            >
              $50.000
            </button>
            <button
              onClick={() => setDonationAmount(100000)}
              className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                donationAmount === 100000
                  ? "bg-[#7C78B3] text-white"
                  : "hover:bg-[#7C78B3] hover:text-white"
              }`}
            >
              $100.000
            </button>
            <button
              onClick={() => setDonationAmount(0)}
              className={`px-6 py-2 rounded-full border border-gray-300 text-gray-700 transition-colors duration-200 ${
                donationAmount === 0
                  ? "bg-[#f8b732] text-white"
                  : "hover:bg-[#f8b732] hover:text-white"
              }`}
            >
              {t("donation.other_amount")}
            </button>
          </div>

          <div className="flex flex-col gap-5  border-gray-300">
            <p className=" text-base text-[#222D56] font-bold">
              {t("donation.additional_comments")}
            </p>
            <textarea
              className="w-full h-16 rounded-xl p-2 border border-gray-300 hover:border-blue-300"
              placeholder={t("donation.comments_placeholder")}
            />
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="monthlyDonation"
              name="donationType"
              className="rounded border-gray-300 text-zinc-900 focus:ring-zinc-900"
              onChange={() => handleDonationTypeChange("monthly")}
              checked={donationType === "monthly"}
            />
            <label htmlFor="monthlyDonation" className="ml-2 text-gray-700">
              {t("donation.monthly_payment")}
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="oneTimeDonation"
              name="donationType"
              className="rounded border-gray-300 text-zinc-900 focus:ring-zinc-900"
              onChange={() => handleDonationTypeChange("oneTime")}
              checked={donationType === "oneTime"}
            />
            <label htmlFor="oneTimeDonation" className="ml-2 text-gray-700">
              {t("donation.one_time_contribution")}
            </label>
          </div>

          <button
            className={`bg-[#222D56] text-white font-semibold rounded-2xl py-4 px-8 ${
              (!donationType || Number.isNaN(parseFloat(donationAmount))) &&
              "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleClick}
            disabled={!donationType || Number.isNaN(parseFloat(donationAmount))}
          >
            {t("donation.continue")}
          </button>
        </div>
      </div>
      <p className="lg:ml-20">
        {t("donation.secure_payments")}
        <span className="font-bold"> Wompi</span>
      </p>
    </div>
  );
}

export default DonationPay;
