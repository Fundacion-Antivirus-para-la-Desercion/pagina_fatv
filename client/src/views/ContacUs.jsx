import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BannerContacUs from "../assets/images/views/contacUs/banner-contact-us.webp";
import imgContact from "../../public/contactUs/contact-image.webp";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";
import Modal from "../components/modal/Modal";
import Javi from "../../public/contactUs/Javi cabezas_feliz.svg";
import BannerView from "../components/Banner-views/BannerView";

function ContactUs() {
  const { t } = useTranslation();

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
      : t("contactUs.validation.fullNameRequired");
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : t("contactUs.validation.emailInvalid");
    tempErrors.phone = formData.phone
      ? ""
      : t("contactUs.validation.phoneRequired");
    tempErrors.subject = formData.subject
      ? ""
      : t("contactUs.validation.subjectRequired");
    tempErrors.message = formData.message
      ? ""
      : t("contactUs.validation.messageRequired");
    tempErrors.terms = formData.terms
      ? ""
      : t("contactUs.validation.termsRequired");
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const [open, setOpen] = useState(false);

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
        terms: formData.terms
          ? t("contactUs.modal.termsAccepted")
          : t("contactUs.modal.termsNotAccepted"),
      };

      emailjs
        .send(
          "service_ciqn2wp", //  service ID de EmailJS
          "template_oacf6ns", //  template ID de EmailJS
          emailParams,
          "06in3EAhhtx15iDoZ", //  public key de EmailJS
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
        title={t("contactUs.modal.title")}
      >
        <div className="flex flex-col items-center text-center">
          <img src={Javi} alt="Confirmación" className="w-32 h-32 mb-4" />

          <h2 className="text-2xl font-bold  mb-2 text-center text-title">
            {t("contactUs.modal.successTitle")}
          </h2>

          <p className="text-gray-700">{t("contactUs.modal.thankYou")}</p>
        </div>
      </Modal>
      <div className="lg:pt-[145px]">
        <BannerView
          imagesBannerMap={{
            image: BannerContacUs,
            keyAlt: "contactUs.banner.alt",
            keyH1: "contactUs.banner.h1",
          }}
        />
        <div className="mt-20 mb-20 flex flex-col lg:flex-row justify-center items-center gap-20">
          <div className="relative">
            <img src={imgContact} className="w-full lg:w-auto" />

            <div className="absolute bg-dark-blue text-white bottom-0 left-0 p-4 w-full lg:w-80 text-center">
              <div className="flex items-center justify-center gap-2">
                <p className="text-2xl font-bold">
                  {t("contactUs.googleMaps")}
                </p>
                <FaLocationDot />
              </div>

              <a
                className="text-xl"
                href="https://www.google.com/maps/place/Fundacion+Antivirus+para+la+Desercion/@6.1546087,-75.6316542,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468164563dd5f3:0xe4f4c0dbfe0be02e!8m2!3d6.1546034!4d-75.6290793!16s%2Fg%2F11vf1_zb9j?hl=es&entry=ttu"
              >
                {t("contactUs.findUsHere")}{" "}
              </a>
            </div>
          </div>

          <div className="w-full lg:w-450 max-md:p-6 max-lg:p-6 max-sm:text-center">
            <p className="text-blue-base tracking-nm">
              {t("contactUs.startConversation")}
            </p>

            <h1 className="lineSubtitle text-blue-base font-impact text-4xl md:text-5xl lg:text-5xl mb-2 mt-2">
              {t("contactUs.conversationTitle")}
            </h1>

            <p className="text-dark-blue font-bold">
              {t("contactUs.mainHeadquarters")}
            </p>
            <p className="text-blue-base">{t("contactUs.address")} </p>
            <p className="text-blue-base">{t("contactUs.city")}</p>
            <p className="text-dark-blue font-bold">{t("contactUs.email")}</p>
            <p className="text-blue-base overflow-hidden whitespace-nowrap text-ellipsis">
              {t("contactUs.emailAddress")}
            </p>

            <p className="text-dark-blue font-bold">
              {t("contactUs.whatsapp")}
            </p>
            <p className="text-blue-base">{t("contactUs.whatsappNumber")}</p>
          </div>
        </div>
        <div className="w-full  h-full  mb bg-white">
          <h3 className="text-5xl font-impact text-primary-yellow text-center -mt-6 absolute leading-none mx-auto left-0 right-0  xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl md:-mt-8 lg:-mt-10 sm:-mt-6 xl:-mt-12">
            {t("contactUs.writeToUs")}
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
                    placeholder={t("contactUs.form.fullName")}
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
                    placeholder={t("contactUs.form.email")}
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
                    placeholder={t("contactUs.form.phone")}
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
                  <input
                    type="text"
                    placeholder={t("contactUs.form.subject")}
                    className="w-full p-2 bg-dark-blue text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-primary-yellow">{errors.subject}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  placeholder={t("contactUs.form.message")}
                  className="w-full p-2 bg-dark-blue text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  rows="4"
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
                  {t("contactUs.form.termsConditions")}
                </label>
                {errors.terms && (
                  <p className="text-primary-yellow w-full">{errors.terms}</p>
                )}
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className={`w-full md:w-1/2 bg-white text-dark-blue font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${
                    isSending ? "cursor-not-allowed" : ""
                  }`}
                >
                  {t("contactUs.form.sendButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
