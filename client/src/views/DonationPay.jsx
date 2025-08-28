import React, { useState, useEffect } from "react";

function DonationPay() {
  const [donationAmount, setDonationAmount] = useState(0);
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
    <div className="lg:pt-[145px] flex justify-center flex-wrap">
      <div className="w-[95%] grid grid-cols-1 lg:grid-cols-2 rounded-xl mt-4 shadow-2xl justify-center p-4">
        <div className="flex flex-col flex-wrap gap-6 mb-14 mt-14 lg:border-r">
          <p className="font-semibold">Pago a</p>
          <h1 className="text-4xl font-bold leading-tight">
            Fundación Antivirus <br /> para la Deserción
          </h1>
          <p className="font-bold text-lg lg:mb-48 opacity-85">
            DONACIÓN ANTIVIRUS PARA LA <br /> DESERCIÓN
          </p>
          <p className="text-lg opacity-85 text-justify m-5">
            EN LA FUNDACIÓN ANTIVIRUS PARA LA DESERCIÓN SOMOS UNA ORGANIZACIÓN
            SIN ÁNIMO DE LUCRO QUE BUSCA DISMINUIR LOS NIVELES DE DESERCIÓN
            ESTUDIANTIL EN COLOMBIA, MEJORAR LOS NIVELES DE PERMANENCIA Y DE
            GRADUACIÓN, SIENDO ESTA NUESTRA MANERA DE APORTAR AL LOGRO DE UN
            PAÍS CON MÁS EDUCACIÓN Y CONSECUENTEMENTE CON MÁS DESARROLLO.
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-14 lg:pl-10">
          <h1 className="font-bold text-3xl mb-10">Ingresa el monto a donar</h1>
          <p className="text-center text-gray-700">Monto a donar</p>
          <input
            className="w-full h-16 rounded-xl border border-gray-300 hover:border-blue-300 text-center mb-8"
            type="number"
            min="0"
            step="0.01"
            value={donationAmount}
            onChange={handleChange}
          />

          <div className="flex flex-col gap-12  border-gray-300">
            <h3 className=" text-lg font-bold">Comentarios adicionales</h3>
            <textarea
              className="w-full h-16 rounded-xl border border-gray-300 hover:border-blue-300 mb-8"
              placeholder="Escribe tus comentarios aquí"
            />
          </div>

          <div className="flex items-center mb-10">
            <input
              type="checkbox"
              id="monthlyDonation"
              className="rounded border-gray-300 text-zinc-900 focus:ring-zinc-900"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="monthlyDonation" className="ml-2 text-gray-700">
              Permitir que el pago sea mensual según el monto mencionado
            </label>
          </div>

          <button
            className={`bg-zinc-900 text-yellow-400 rounded-2xl py-4 px-8 ${
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
