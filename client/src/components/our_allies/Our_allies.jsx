import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";

function OurAllies() {
  const { t } = useTranslation();

  const logos = [
    { src: "/logos_alianzas/alcaldia-de-Itagui-Antioquia-para-descargar-impuesto-predial.png", name: "Alcaldía de Itagüí Antioquia" },
    { src: "/logos_alianzas/mision-tic.png", name: "Misión TIC" },
    { src: "/logos_alianzas/Logo Aurelio Llano_Mesa de trabajo 1.png", name: "Fundación Aurelio Llano Posada" },
    { src: "/logos_alianzas/logo_EAFIT.png", name: "Universidad EAFIT" },
    { src: "/logos_alianzas/nodoa.png", name: "Nodo A" },
    { src: "/logos_alianzas/Logo-codigo-C13_Mesa de trabajo 1.png", name: "Código C13" },
    { src: "/logos_alianzas/THT_Logo.png", name: "THT" },
    { src: "/logos_alianzas/logo-sofia-perez-de-soto-fundacion.webp", name: "Fundación Sofía Pérez de Soto" },
    { src: "/logos_alianzas/celerix.png", name: "Celerix" },
    { src: "/logos_alianzas/udea.webp", name: "Universidad de Antioquia" },
    { src: "/logos_alianzas/fundacion-universidad-de-antioquia.webp", name: "Fundación Universidad de Antioquia" },
    { src: "/logos_alianzas/Logo-fundacion-nutresa.webp", name: "Fundación Nutresa" },
    { src: "/logos_alianzas/logo-fidelity-charitable.webp", name: "Fidelity Charitable" },
    { src: "/logos_alianzas/unnamed.png", name: "Aliado" },
    { src: "/logos_alianzas/Logo_velezreyes.jpg", name: "Vélez Reyes" },
    { src: "/logos_alianzas/UNAL_Aplicación_Medellín.svg", name: "Universidad Nacional de Colombia - Medellín" },
    { src: "/logos_alianzas/logo_Beca Tech Negro.png", name: "Beca Tech" },
    { src: "/logos_alianzas/fundacion-rodrigo-arroyave.jpeg", name: "Fundación Rodrigo Arroyave" },
    { src: "/logos_alianzas/globan.png", name: "Globan" },
    { src: "/logos_alianzas/web3foru.png", name: "Web3 For U" },
    { src: "/logos_alianzas/Logo-Autorizado-gente-unida.png", name: "Gente Unida" },
    { src: "/logos_alianzas/elede-fundacion.png", name: "Fundación Elede" },
    { src: "/logos_alianzas/golondrinas.png", name: "Golondrinas" },
    { src: "/logos_alianzas/logo_sura.png", name: "Sura" },
    { src: "/logos_alianzas/Isa_InterColombia_logo.png", name: "ISA InterColombia" },
    { src: "/logos_alianzas/Auteco_logo.png", name: "Auteco" },
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
