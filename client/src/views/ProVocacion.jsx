import styles from "./ProVocacion.module.css";
import BannerFoundationEn from "../../src/assets/images/views/proVocacion/banner-provocacion.webp";
import BannerPersuavivo from "../../src/assets/images/views/proVocacion/banner-persuasivo.webp";
import Acompañamiento from "../../src/assets/images/views/proVocacion/collage-provocacion.webp";
import Autoconocimiento from "../assets/images/views/proVocacion/componentes/autoconocimiento.webp";
import MundoFormativo from "../assets/images/views/proVocacion/componentes/mundo-formativo.webp";
import MundoLaboral from "../assets/images/views/proVocacion/componentes/mundo-laboral.webp";
import EnMundoFormativo from "../assets/images/views/proVocacion/componentes/training-world.webp";
import EnAutoconocimiento from "../assets/images/views/proVocacion/componentes/self-knowledge.webp";
import EnMundoLaboral from "../assets/images/views/proVocacion/componentes/the-world-of-work.webp";
import Testimonials from "../components/testimonials/Testimonials";
import Information from "../components/information/Information";
import Focus from "../assets/images/views/proVocacion/information/focus.svg";
import BannerView from "../components/Banner-views/BannerView";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../components/modal/Modal";
import emailjs from "emailjs-com";

function ProVocacion() {
  const { t, i18n } = useTranslation();
  const isEnglish = (i18n && (i18n.resolvedLanguage || i18n.language)) === "en";
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
      : t("provocacion.validation.full_name_required");
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : t("provocacion.validation.email_invalid");
    tempErrors.phone = formData.phone
      ? ""
      : t("provocacion.validation.phone_required");
    tempErrors.subject = formData.subject
      ? ""
      : t("provocacion.validation.subject_required");
    tempErrors.message = formData.message
      ? ""
      : t("provocacion.validation.message_required");
    tempErrors.terms = formData.terms
      ? ""
      : t("provocacion.validation.terms_required");
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
      setOpen(true);
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
          "service_ciqn2wp", //  service ID de EmailJS
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
        })
        .finally(() => {
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        });
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const whatsAppNumber = "573173831481";
  const [open, setOpen] = useState(false);

  // Limpia el formulario y errores
  const limpiarFormulario = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      terms: false,
    });
    setErrors({});
  };

  const cerrarModal = () => {
    setOpen(false);
    limpiarFormulario();
  };

  const validatePhoneNumber = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <Modal
        isOpen={open}
        onClose={() => cerrarModal()}
        title={t("provocacion.modal.title")}
      >
        <div className="flex flex-col items-center text-center">
          <img src={Focus} alt="Confirmación" className="w-20 h-20 mb-4" />

          <h2 className="text-2xl font-bold mb-2 text-center text-blue-base">
            {t("provocacion.modal.title")}
          </h2>

          <p className="text-gray-700">{t("provocacion.modal.description")}</p>
        </div>
      </Modal>
      <section className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            enImage: BannerFoundationEn,
            esImage: BannerFoundationEn,
            keyTitle: "",
          }}
        />

        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 group">
          <a
            className={`flex items-center rounded-full bg-white p-2 shadow-lg ${styles.btnProvocation}`}
            href={`https://wa.me/${whatsAppNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Focus} alt="Botón fijo" className="w-10 h-10" />
            <span className="text-blue-base font-bold">
              {t("provocacion.let_yourself_be_provoked")}
            </span>
          </a>
        </div>
      </section>

      <section className="p-5 grid grid-cols-1 lg:grid-cols-[5fr_5fr] gap-10 justify-between items-center">
        <div>
          <h1
            className={`lineSubtitle mt-5 md:mt-0 mb-5 text-4xl text-blue-base leading-tight font-impact md:text-5xl  ${styles.title}`}
          >
            {t("provocacion.title_initial")}
          </h1>
          <p
            className="text-blue-base text-base md:text-xl tracking-tighter text-justify max-w-prose mx-auto"
          >
            {t("provocacion.description")}
          </p>
        </div>
        <div>
          <img
            src={Acompañamiento}
            alt="Acompañamiento"
            className="w-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[500px] object-cover rounded-xl p-4 mx-auto shadow-lg transition-transform duration-500 hover:rotate-3"
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
          className={`text-5xl text-blue-base font-impact max-md:text-3xl text-center ${styles.title}`}
        >
          {t("provocacion.title_future")}
        </h2>
      </section>
      <section className="p-5 grid grid-cols-1 lg:grid-cols-[5fr_5fr_5fr] gap-4">
        <div className="cursor-pointer border-4 border-[#7E96CB] rounded-xl transform transition duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <img
            src={isEnglish ? EnAutoconocimiento : Autoconocimiento}
            alt="Autoconocimiento"
            title="Ampliar imagen"
            onClick={() =>
              openImageModal(isEnglish ? EnAutoconocimiento : Autoconocimiento)
            }
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="cursor-pointer border-4 border-primary-yellow rounded-xl transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <img
            src={isEnglish ? EnMundoFormativo : MundoFormativo}
            alt="Mundo Formativo"
            title="Ampliar imagen"
            onClick={() =>
              openImageModal(isEnglish ? EnMundoFormativo : MundoFormativo)
            }
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="cursor-pointer border-4 border-dark-blue rounded-xl transform transition duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-2xl">
          <img
            src={isEnglish ? EnMundoLaboral : MundoLaboral}
            alt="Mundo Laboral"
            title="Ampliar imagen"
            onClick={() =>
              openImageModal(isEnglish ? EnMundoLaboral : MundoLaboral)
            }
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

      <div className="w-full h-full bg-white mt-40 relative">
        <h3
          id="form-contac-us"
          className="text-5xl text-primary-yellow font-impact text-center absolute top-[-30px] leading-none mx-auto left-0 right-0 xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl md:-mt-8 lg:-mt-10 sm:-mt-6 xl:-mt-12"
        >
          {t("provocacion.title")}
        </h3>

        <div className="bg-dark-blue w-full h-90 mb-20 flex items-center justify-center">
          <form
            className="w-full h-full px-8 py-10 md:px-44 md:py-32 bg-blue-link text-white shadow-md rounded-md relative"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder={t("provocacion.full_name_placeholder")}
                  className="w-full p-2 bg-dark-blue text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-primary-yellow">{errors.fullName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("provocacion.email_placeholder")}
                  className="w-full p-2 bg-dark-blue text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-primary-yellow">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t("provocacion.phone_placeholder")}
                  className="w-full p-2 bg-dark-blue text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="phone"
                  value={formData.phone}
                  onChange={validatePhoneNumber}
                />
                {errors.phone && (
                  <p className="text-primary-yellow">{errors.phone}</p>
                )}
              </div>
              <div>
                <select
                  id="motivo"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 bg-dark-blue text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">
                    {t("provocacion.subject_placeholder")}
                  </option>
                  <option value="familiar">
                    {t("provocacion.subject_options.family_info")}
                  </option>
                  <option value="desorientado">
                    {t("provocacion.subject_options.need_guidance")}
                  </option>
                  <option value="educacion">
                    {t("provocacion.subject_options.higher_education")}
                  </option>
                  <option value="acompanamiento">
                    {t("provocacion.subject_options.vocational_support")}
                  </option>
                  <option value="historia">
                    {t("provocacion.subject_options.share_story")}
                  </option>
                  <option value="otro">
                    {t("provocacion.subject_options.other")}
                  </option>
                </select>

                {/*<input
                  type="text"
                  placeholder="ASUNTO"
                  className="w-full p-2 bg-dark-blue text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />*/}
                {errors.subject && (
                  <p className="text-primary-yellow">{errors.subject}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                placeholder={t("provocacion.message_placeholder")}
                className="w-full p-2 bg-dark-blue text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                rows="1"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-primary-yellow">{errors.message}</p>
              )}
            </div>
            <div className="mt-4 flex items-center flex-wrap">
              <input
                id="terms"
                type="checkbox"
                className="mr-2"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms" className="text-white">
                {t("provocacion.terms_label")}
              </label>
              {errors.terms && (
                <p className="w-full text-primary-yellow">{errors.terms}</p>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className={`w-full md:w-1/2 bg-white text-dark-blue font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${
                  isSending ? "cursor-not-allowed" : ""
                }`}
              >
                {t("provocacion.submit_button")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProVocacion;
