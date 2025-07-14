import React from "react";
import styles from "./ProVocacion.module.css";
import Provocacion from "../../src/assets/images/views/proVocacion/banner-provocacion.jpg";
import BannerPersuavivo from "../../src/assets/images/views/proVocacion/banner-persuasivo.jpg";
import Becarios from "../../public/projects/Becarios/becarios-itagui.webp";
import Autoconocimiento from "../assets/images/views/proVocacion/componentes/autoconocimiento.webp";
import MundoFormativo from "../assets/images/views/proVocacion/componentes/mundo-formativo.webp";
import MundoLaboral from "../assets/images/views/proVocacion/componentes/mundo-laboral.webp";
import Testimonials from "../components/testimonials/Testimonials";
import Information from "../components/information/Information";
import { useState } from "react";

function ProVocacion() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message:
      "Hola, estoy escribiendo porque quisiera que me contactarán para conocer más de provocación.",
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

  /******************************* */
  const [socialMedia, setSocialMedia] = useState([
    {
      href: "https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d",
      name: "facebook-circle",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.instagram.com/somosantivirus/",
      name: "instagram-alt",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w",
      name: "youtube",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.tiktok.com/@somosantivirus",
      name: "tiktok",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.linkedin.com/company/antivirus-desercion/",
      name: "linkedin-square",
      type: "logo",
      color: "#ffffff",
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="lg:pt-[145px]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full h-60 sm:h-80 md:h-96">
            <img
              src={Provocacion}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>

            <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon"
                >
                  <box-icon
                    name={social.name}
                    type={social.type}
                    color={social.color}
                  ></box-icon>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 grid grid-cols-1 lg:grid-cols-[5fr_5fr] gap-10 justify-between items-center mb-5">
        <div>
          <h1
            className={`mb-5 text-5xl text-title leading-tight font-extrabold max-md:text-3xl  ${styles.title}`}
          >
            OBJETIVO DEL ACOMPAÑAMIENTO
          </h1>
          <p
            className={`text-xl tracking-tighter text-justify max-w-prose mx-auto ${styles.text}`}
          >
            Potenciar el proyecto de vida de los <strong>jóvenes </strong>a
            través de procesos de autoconocimiento, acercamiento a la educación
            superior y al mundo laboral que les permitan tener herramientas para
            construir su proyecto de vida auténtico.
          </p>
        </div>
        <div>
          <img
            src={Becarios}
            alt="Acompañamiento"
            className="w-full max-w-[600px] h-auto object-cover rounded-xl p-4 mx-auto shadow-lg transition-transform duration-500 hover:rotate-3"
          />
        </div>
      </section>

      <Information />

      <section>
        <img
          src={BannerPersuavivo}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="p-5">
        <h2
          className={`text-5xl text-title font-extrabold max-md:text-3xl text-center ${styles.title}`}
        >
          TU FUTURO, PASO A PASO: CONOCE CADA ETAPA
        </h2>
      </section>
      <section className="p-5 grid grid-cols-1 lg:grid-cols-[5fr_5fr_5fr] gap-4">
        <div className="cursor-pointer border-4 border-[#7E96CB] rounded-xl transform transition duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <img
            src={Autoconocimiento}
            alt="Autoconocimiento"
            onClick={() => openImageModal(Autoconocimiento)}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="cursor-pointer border-4 border-[#faa307] rounded-xl transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <img
            src={MundoFormativo}
            alt="Mundo Formativo"
            onClick={() => openImageModal(MundoFormativo)}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="cursor-pointer border-4 border-[#21294F] rounded-xl transform transition duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-2xl">
          <img
            src={MundoLaboral}
            alt="Mundo Laboral"
            onClick={() => openImageModal(MundoLaboral)}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-3xl max-h-full overflow-auto">
            <img
              src={selectedImage}
              alt="Imagen expandida"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Testimonials />

      <div className="w-full  h-full bg-white mt-40 relative">
        <h3
          id="form-contac-us"
          className="font-anton  text-5xl  text-[#F6A623] text-center absolute top-[-30px] leading-none mx-auto left-0 right-0  xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl md:-mt-8 lg:-mt-10 sm:-mt-6 xl:-mt-12"
        >
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
                <select
                  id="motivo"
                  name="motivo"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="familiar">
                    Quiero saber más información para un familiar
                  </option>
                  <option value="desorientado">
                    Me siento desorientado/a y quiero orientación.
                  </option>
                  <option value="educacion">
                    Quiero conocer más sobre educación superior.
                  </option>
                  <option value="acompanamiento">
                    Estoy interesado/a en el acompañamiento vocacional para
                    alguien cercano.
                  </option>
                  <option value="historia">Quiero contar mi historia.</option>
                  <option value="otro">
                    Otro (especificar en el mensaje).
                  </option>
                </select>

                {/*<input
                  type="text"
                  placeholder="ASUNTO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />*/}
                {errors.subject && (
                  <p className="text-red-500">{errors.subject}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                placeholder="MENSAJE"
                className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                rows="1"
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
                className={`w-full md:w-1/2 bg-white text-[#222D56] font-bold py-2 px-4 focus:outline-none focus:shadow-outline ${
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
    </>
  );
}

export default ProVocacion;
