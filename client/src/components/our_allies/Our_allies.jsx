import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";
import {
  ALIADO_ALCALDIA_ITAGUI_IMG,
  ALIADO_MISION_TIC_IMG,
  ALIADO_AURELIO_LLANO_IMG,
  ALIADO_FUNDACION_FRATERNIDAD_MEDELLIN,
  ALIADO_EAFIT_IMG,
  ALIADO_NODO_A_IMG,
  ALIADO_CODIGO_C13_IMG,
  ALIADO_THT_IMG,
  ALIADO_SOFIA_PEREZ_SOTO_IMG,
  ALIADO_CELERIX_IMG,
  ALIADO_UDEA_IMG,
  ALIADO_FUNDACION_UDEA_IMG,
  ALIADO_FUNDACION_NUTRESA_IMG,
  ALIADO_FIDELITY_CHARITABLE_IMG,
  ALIADO_FONDO_LIBRO_IMG,
  ALIADO_VELEZ_REYES_IMG,
  ALIADO_UNAL_MEDELLIN_IMG,
  ALIADO_BECA_TECH_IMG,
  ALIADO_RODRIGO_ARROYAVE_IMG,
  ALIADO_GLOBANT_IMG,
  ALIADO_WEB3FORU_IMG,
  ALIADO_GENTE_UNIDA_IMG,
  ALIADO_ELEDE_IMG,
  ALIADO_GOLONDRINAS_IMG,
  ALIADO_SURA_IMG,
  ALIADO_ISA_INTERCOLOMBIA_IMG,
  ALIADO_AUTECO_IMG,
} from "../../assets/cloudinaryImages";

function OurAllies() {
  const { t } = useTranslation();

  const logos = [
    { src: ALIADO_ALCALDIA_ITAGUI_IMG,     name: "Alcaldía de Itagüí Antioquia" },
    { src: ALIADO_MISION_TIC_IMG,          name: "Misión TIC" },
    { src: ALIADO_AURELIO_LLANO_IMG,       name: "Fundación Aurelio Llano Posada" },
    { src: ALIADO_FUNDACION_FRATERNIDAD_MEDELLIN,   name: "Fundación Fraternidad Medellín" },
    { src: ALIADO_EAFIT_IMG,               name: "Universidad EAFIT" },
    { src: ALIADO_NODO_A_IMG,              name: "Nodo A" },
    { src: ALIADO_CODIGO_C13_IMG,          name: "Código C13" },
    { src: ALIADO_THT_IMG,                 name: "THT" },
    { src: ALIADO_SOFIA_PEREZ_SOTO_IMG,    name: "Fundación Sofía Pérez de Soto" },
    { src: ALIADO_CELERIX_IMG,             name: "Celerix" },
    { src: ALIADO_UDEA_IMG,                name: "Universidad de Antioquia" },
    { src: ALIADO_FUNDACION_UDEA_IMG,      name: "Fundación Universidad de Antioquia" },
    { src: ALIADO_FUNDACION_NUTRESA_IMG,   name: "Fundación Nutresa" },
    { src: ALIADO_FIDELITY_CHARITABLE_IMG, name: "Fidelity Charitable" },
    { src: ALIADO_FONDO_LIBRO_IMG,         name: "Fundación Fondo del Libro" },
    { src: ALIADO_VELEZ_REYES_IMG,         name: "Vélez Reyes" },
    { src: ALIADO_UNAL_MEDELLIN_IMG,       name: "Universidad Nacional de Colombia - Medellín" },
    { src: ALIADO_BECA_TECH_IMG,           name: "Beca Tech" },
    { src: ALIADO_RODRIGO_ARROYAVE_IMG,    name: "Fundación Rodrigo Arroyave" },
    { src: ALIADO_GLOBANT_IMG,              name: "Globant" },
    { src: ALIADO_WEB3FORU_IMG,            name: "Web3 For U" },
    { src: ALIADO_GENTE_UNIDA_IMG,         name: "Gente Unida" },
    { src: ALIADO_ELEDE_IMG,               name: "Fundación Elede" },
    { src: ALIADO_GOLONDRINAS_IMG,         name: "Golondrinas" },
    { src: ALIADO_SURA_IMG,                name: "Sura" },
    { src: ALIADO_ISA_INTERCOLOMBIA_IMG,   name: "ISA InterColombia" },
    { src: ALIADO_AUTECO_IMG,              name: "Auteco" },
  ];

  return (
    <section className="p-4 lg:p-28 relative">
      <h1 className="mt-5 md:mt-0 mb-5 max-md:text-3xl md:mb-10 text-center text-5xl font-impact text-blue-base ">
        {t("home.ourAllies.title")}
      </h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-start transition-transform duration-500 hover:scale-125">
              <img
                className="w-auto h-52 object-contain"
                src={logo.src}
                alt={logo.name}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default OurAllies;
