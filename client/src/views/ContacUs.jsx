import React, { useState } from "react";
import BannerView from "../components/Banner-views/BannerView";
import imgContact from "../../public/contactUs/contact-image.webp";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName
      ? ""
      : " Nombre completo es requerido.";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : " Correo electrónico es inválido.";
    tempErrors.phone = formData.phone ? "" : " Teléfono es requerido.";
    tempErrors.subject = formData.subject ? "" : " Asunto es requerido.";
    tempErrors.message = formData.message ? "" : " Mensaje es requerido.";
    tempErrors.terms = formData.terms
      ? ""
      : " Debe aceptar los términos y condiciones.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "terms" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true); // Cambiar el estado a enviando
      const emailParams = {
        from_name: formData.fullName,
        email_id: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        terms: formData.terms ? "Acepto" : "No acepto",
      };

      emailjs
        .send(
          "service_2bvz6wb", //  service ID de EmailJS
          "template_oacf6ns", //  template ID de EmailJS
          emailParams,
          "06in3EAhhtx15iDoZ" //  public key de EmailJS
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            terms: false,
          }); // Limpiar el formulario
          setIsSending(false); // Restablecer el estado de envío
        })
        .catch((err) => {
          console.error("FAILED...", err);
          setIsSending(false); // Restablecer el estado de envío incluso en caso de error
        });
    }
  };

  return (
    <div className="lg:pt-[145px]">
      <BannerView title="Contactanos" />
      <div className="mt-20 mb-20 flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="relative">
          <img src={imgContact} className="w-full lg:w-auto" />

          <div className="absolute bg-blue-links text-white bottom-0 left-0 p-4 w-full lg:w-80 text-center">
            <div className="flex items-center justify-center gap-2">
              <p className="text-2xl font-bold">Google Maps</p>
              <FaLocationDot />
            </div>

            <a
              className="text-xl"
              href="https://www.google.com/maps/place/Fundacion+Antivirus+para+la+Desercion/@6.1546087,-75.6316542,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468164563dd5f3:0xe4f4c0dbfe0be02e!8m2!3d6.1546034!4d-75.6290793!16s%2Fg%2F11vf1_zb9j?hl=es&entry=ttu"
            >
              Encuéntranos aquí{" "}
            </a>
          </div>
        </div>

        <div className="w-full lg:w-450 max-md:p-6 max-lg:p-6 max-sm:text-center">
          <p className="tracking-nm text-blue-links">COMENCEMOS</p>

          <h1 className="font-anton text-blue-links text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2">
            UNA CONVERSACIÓN ¿TIENES ALGUNA PREGUNTA? ¡TENEMOS LA RESPUESTA!
          </h1>

          <p className="text-blue-links font-bold">Sede principal</p>
          <p className="text-cc">Cl 79 S 50-69 La Estrella </p>
          <p className="text-cc">Medellín - Antioquia - Colombia</p>
          <p className="text-blue-links font-bold">Correo electrónico</p>
          <p className="text-cc">
            contactenos@fundacionantivirusparaladesercion.org
          </p>

          <p className="text-blue-links font-bold">WhatsApp</p>
          <p className="text-cc">3206417053</p>
        </div>
      </div>
      <div className="w-full  h-full  mb bg-white">
        <h3 className="font-anton  text-5xl  text-[#F6A623] text-center -mt-6 absolute leading-none mx-auto left-0 right-0  xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl md:-mt-8 lg:-mt-10 sm:-mt-6 xl:-mt-12">
          ESCRÍBENOS AQUÍ
        </h3>

        <div className="bg-blue-links w-full h-90 mb-20 flex items-center justify-center">
          <form
            className="w-full h-full px-8 py-10 md:px-44 md:py-32 bg-blue-link text-white shadow-md rounded-md relative"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="NOMBRE COMPLETO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="CORREO ELECTRÓNICO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="TELÉFONO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ASUNTO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="text-red-500">{errors.subject}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                placeholder="MENSAJE"
                className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms" className="text-white">
                Acepto los términos y condiciones
              </label>
              {errors.terms && <p className="text-red-500">{errors.terms}</p>}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className={`w-full md:w-1/2 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isSending ? "cursor-not-allowed" : ""
                }`}
                disabled={isSending}
              >
                {isSending ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
