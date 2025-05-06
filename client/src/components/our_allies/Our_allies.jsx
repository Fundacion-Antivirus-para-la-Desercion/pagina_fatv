import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function OurAllies() {
  const logos = [
    "/logos_alianzas/alcaldia-de-Itagui-Antioquia-para-descargar-impuesto-predial.png",
    "/logos_alianzas/mision-tic.png",
    "/logos_alianzas/Logo Aurelio Llano_Mesa de trabajo 1.png",
    "/logos_alianzas/logo_EAFIT.png",
    "/logos_alianzas/nodoa.png",
    "/logos_alianzas/Logo-codigo-C13_Mesa de trabajo 1.png",
    "logos_alianzas/THT_Logo.png",
    "/logos_alianzas/logo-sofia-perez-de-soto-fundacion.webp",
    "logos_alianzas/celerix.png",
    "/logos_alianzas/udea.webp",
    "/logos_alianzas/fundacion-universidad-antioquia.png",
    "/logos_alianzas/Logo-fundacion-nutresa.webp",
    "/logos_alianzas/logo-fidelity-charitable.webp",
    "/logos_alianzas/unnamed.png",
    "/logos_alianzas/Logo_velezreyes.jpg",
    "/logos_alianzas/UNAL_Aplicación_Medellín.svg",
    "/logos_alianzas/logo_Beca Tech Negro.png",
    "/logos_alianzas/fundacion-rodrigo-arroyave.jpeg",
    "/logos_alianzas/globan.png",
    "/logos_alianzas/web3foru.png",
    "/logos_alianzas/Logo-Autorizado-gente-unida.png",
    "/logos_alianzas/elede-fundacion.png",
    "/logos_alianzas/golondrinas.png",
    "/logos_alianzas/logo_sura.png",
    "/logos_alianzas/Isa_InterColombia_logo.png",
    "/logos_alianzas/Auteco_logo.png",
  ];

  return (
    <section className="p-28 relative">
      <h1 className="mb-20 text-center text-5xl text-title font-extrabold max-md:text-3xl">
        NUESTROS ALIADOS
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
                src={logo}
                alt={`Logo aliado ${index}`}
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
