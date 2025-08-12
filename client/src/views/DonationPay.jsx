import React, { useState, useEffect } from 'react';

function DonationPay() {
    const [donationAmount, setDonationAmount] = useState(0);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.wompi.co/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleClick = () => {
        if (Number.isNaN(parseFloat(donationAmount)) || !acceptedTerms) {
            console.error('Monto de donación no válido o términos no aceptados');
            return;
        }

        const form = document.createElement('form');
        form.action = 'https://checkout.wompi.co/p/';
        form.method = 'GET';
        document.body.appendChild(form);

        const publicKey = document.createElement('input');
        publicKey.type = 'hidden';
        publicKey.name = 'public-key';
        publicKey.value = import.meta.env.VITE_WOMPI_PUBLIC_KEY;; 
        form.appendChild(publicKey);

        const currency = document.createElement('input');
        currency.type = 'hidden';
        currency.name = 'currency';
        currency.value = 'COP'; 
        form.appendChild(currency);

        const amount = document.createElement('input');
        amount.type = 'hidden';
        amount.name = 'amount-in-cents';
        amount.value = donationAmount * 100;
        form.appendChild(amount);

        const reference = document.createElement('input');
        reference.type = 'hidden';
        reference.name = 'reference';
        reference.value = 'REFERENCIA_DE_PAGO'; 
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
        <div className='lg:pt-[145px]'>
            <div className='flex rounded-xl mt-14 ml-20 mr-20 shadow-2xl justify-center'>
                <div className='w-2/5 flex flex-col gap-6 mb-14 mt-14 border-r'>
                    <p className='font-normal'>Pago a</p>
                    <h1 className='text-4xl font-bold leading-tight'>
                        Fundación<br />
                        Antivirus para la<br />
                        Deserción
                    </h1>
                    <p className='font-bold text-lg mb-48 opacity-85'>DONACIÓN ANTIVIRUS PARA LA <br /> DESERCIÓN</p>
                    <p className='text-lg opacity-85 w-80'>EN LA FUNDACIÓN ANTIVIRUS PARA LA DESERCIÓN SOMOS UNA ORGANIZACIÓN SIN ÁNIMO DE LUCRO QUE BUSCA DISMINUIR LOS NIVELES DE DESERCIÓN ESTUDIANTIL EN COLOMBIA, MEJORAR LOS NIVELES DE PERMANENCIA Y DE GRADUACIÓN, SIENDO ESTA NUESTRA MANERA DE APORTAR AL LOGRO DE UN PAÍS CON MÁS EDUCACIÓN Y CONSECUENTEMENTE CON MÁS DESARROLLO.</p>
                </div>

                <div className='flex flex-col gap-6 mt-14 pl-10'>
                    <b>Concepto de Fundación Antivirus para la Deserción</b>
                    <div className='flex flex-col'>
                        <select>
                            <option value="opción" disabled>Seleccione una opción</option>
                            <option value="">Donación a estudiante</option>
                            <option value="">Donación a la Fundación</option>
                            <option value="">Pago por servicio de provocación</option>
                        </select>
                    </div>

                    <h1 className='font-bold text-3xl mb-10'>Ingresa el monto a pagar</h1>
                    <p className='text-center text-gray-700'>Monto a pagar</p>
                    <input className='w-full h-16 rounded-xl border border-gray-300 hover:border-blue-300 text-center mb-8' type="number" min="0" step="0.01" value={donationAmount} onChange={handleChange} />

                    <div className='flex flex-col gap-12'>
                        <h3>Comentarios adicionales</h3>
                        <textarea placeholder='Escribe tus comentarios aquí' />
                    </div>

                    <div className='flex items-center mb-10'>
                        <input type="checkbox" id="monthlyDonation" className="rounded border-gray-300 text-zinc-900 focus:ring-zinc-900" onChange={handleCheckboxChange} />
                        <label htmlFor="monthlyDonation" className="ml-2 text-gray-700">Permitir que el pago sea mensual según el monto mencionado</label>
                    </div>

                    <button
                        className={`bg-zinc-900 text-yellow-400 rounded-2xl py-4 px-8 ${(!acceptedTerms || Number.isNaN(parseFloat(donationAmount))) && 'opacity-50 cursor-not-allowed'}`}
                        onClick={handleClick}
                        disabled={!acceptedTerms || Number.isNaN(parseFloat(donationAmount))}
                    >
                        Continuar
                    </button>
                </div>
            </div>
            <p className='ml-20'>PAGOS SEGUROS POR 
                <span className='font-bold'> Wompi</span></p>
        </div>
    );
}

export default DonationPay;
