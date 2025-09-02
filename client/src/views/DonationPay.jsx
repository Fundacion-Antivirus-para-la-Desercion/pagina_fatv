import React, { useState, useEffect } from "react";

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
  const [donationAmount, setDonationAmount] = useState(100);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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

  const handleCheckboxChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  return (
    <div className="lg:pt-[145px] flex  justify-center flex-wrap">
      <div className="w-[80%] grid grid-cols-1 rounded-3xl lg:grid-cols-2 shadow-2xl justify-center">
        <div className="flex flex-col flex-wrap gap-6 p-10 rounded-l-3xl bg-[#EDEFF8] lg:border-r">
          <h1 className="text-2xl text-title font-bold mb-5 leading-tight">
            Fundación Antivirus para la Deserción
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
              className="mySwiper w-60 h-60"
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img
                  src={Acompañamiento1}
                  alt="Acompañamiento a estudiantes"
                  className="block w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Acompañamiento2}
                  alt="Acompañamiento a estudiantes"
                  className="block w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Acompañamiento3}
                  alt="Acompañamiento a estudiantes"
                  className="block w-full h-full object-cover"
                />
              </SwiperSlide>
                <SwiperSlide>
                    <img
                    src={Acompañamiento4}
                    alt="Acompañamiento a estudiantes"
                    className="block w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    src={Acompañamiento5}
                    alt="Acompañamiento a estudiantes"
                    className="block w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
          </div>

          <p className="text-lg text-title opacity-85 text-justify m-5">
            En la fundación antivirus para la deserción somos una organización
            sin ánimo de lucro que busca disminuir los niveles de deserción
            estudiantil en Colombia, mejorar los niveles de permanencia y de
            graduación, siendo esta nuestra manera de aportar al logro de un
            país con más educación y consecuentemente con más desarrollo.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:pl-10 p-10">
          <div className="flex items-center justify-center mb-5">
            <img className="w-10 h-10" src={Pay} alt="" />
            <h1 className="m-2 font-bold text-3xl text-[#f8b732]">
              Dona ahora
            </h1>
          </div>

          <p className="text-base font-bold text-[#222D56]">Monto a donar</p>
          <input
            className="w-full h-10 rounded-xl border border-gray-300 hover:border-blue-300 text-center mb-5"
            type="number"
            min="100"
            step="1"
            value={donationAmount}
            onChange={handleChange}
          />

          <div className="flex flex-wrap justify-center gap-2">
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-[#7C78B3] hover:text-white transition-colors duration-200">
              $5.000
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-[#f8b732] hover:text-white transition-colors duration-200">
              $10.000
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-[#7C78B3] hover:text-white transition-colors duration-200">
              $20.000
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-[#f8b732] hover:text-white transition-colors duration-200">
              $50.000
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-[#7C78B3] hover:text-white transition-colors duration-200">
              $100.000
            </button>
          </div>

          <div className="flex flex-col gap-12  border-gray-300">
            <p className=" text-base text-[#222D56] font-bold">
              Comentarios adicionales
            </p>
            <textarea
              className="w-full h-16 rounded-xl border border-gray-300 hover:border-blue-300 mb-8"
              placeholder="Escribe tus comentarios aquí"
            />
          </div>

          <div className="flex items-center mb-10">
            <input
              type="radio"
              id="monthlyDonation"
              className="rounded border-gray-300 text-zinc-900 focus:ring-zinc-900"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="monthlyDonation" className="ml-2 text-gray-700">
              Permitir que el pago sea mensual según el monto mencionado
            </label>
          </div>

          <div className="flex items-center mb-10">
            <input
              type="radio"
              id="monthlyDonation"
              className="rounded border-gray-300 text-zinc-900 focus:ring-zinc-900"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="monthlyDonation" className="ml-2 text-gray-700">
              Contribución única
            </label>
          </div>
           

          <button
            className={`bg-[#222D56] text-white font-semibold rounded-2xl py-4 px-8 ${
              (!acceptedTerms || Number.isNaN(parseFloat(donationAmount))) &&
              "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleClick}
            disabled={
              !acceptedTerms || Number.isNaN(parseFloat(donationAmount))
            }
          >
            Continuar
          </button>
        </div>
      </div>
      <p className="lg:ml-20">
        PAGOS SEGUROS POR
        <span className="font-bold"> Wompi</span>
      </p>
    </div>
  );
}

export default DonationPay;
