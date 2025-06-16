import React from "react";
import styles from "./ProVocacion.module.css";
import Provocacion from "../../src/assets/images/views/proVocacion/banner-provocacion.jpg";
import BannerPersuavivo from "../../src/assets/images/views/proVocacion/banner-persuasivo.jpg";
import Becarios from "../../public/projects/Becarios/becarios-itagui.webp";
import Testimonials from "../components/testimonials/Testimonials";
import { useState, useEffect } from "react";

function ProVocacion() {
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

      <section className="p-5 grid grid-cols-1 lg:grid-cols-[5fr_5fr] gap-10 justify-between items-center">
        <div>
          <h1
            className={`mb-5 text-5xl text-title font-extrabold max-md:text-3xl  ${styles.title}`}
          >
            OBJETIVO DEL ACOMPAÑAMIENTO
          </h1>
          <p className={`text-xl tracking-tighter text-justify max-w-prose mx-auto ${styles.text}`}>
            Potenciar el proyecto de vida de los
            <strong> jóvenes entre los 14 y 20 años,</strong> a través de
            procesos de autoconocimiento, acercamiento a la educación superior y
            al mundo laboral que les permitan tener herramientas para construir
            su proyecto de vida auténtico.
          </p>
        </div>
        <div>
          <img
            src={Becarios}
            alt="Banner"
            className="w-full max-w-[600px] h-auto object-cover rounded-xl p-4 mx-auto shadow-lg transition-transform duration-500 hover:rotate-3"
          />
        </div>
      </section>

      <section>
        <img
          src={BannerPersuavivo}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </section>
      <Testimonials />
    </>
  );
}

export default ProVocacion;
