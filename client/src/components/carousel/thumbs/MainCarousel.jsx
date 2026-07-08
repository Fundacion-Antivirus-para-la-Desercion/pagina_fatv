import { useState, useRef } from "react";
import { useTranslation } from "react-i18next"; // Importa el hook useTranslation
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./MainCarousel.css";
import WhatsAppRedirect from "../../whatsAppRedirect/WhatsAppRedirect";

import banner1 from "../../../assets/Banner/colaboradores-fatv.jpeg";
import banner2 from "../../../assets/Banner/becarios-itagui.webp";
import banner3 from "../../../assets/Banner/evento-alianza-educacion-itagui.jpeg";
import banner4 from "../../../assets/Banner/campana-social.webp";

function MainCarousel() {
  const { t } = useTranslation(); // Inicializa el hook de traducción
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  const slides = [
    {
      image: banner1,
      // Usamos las keys de traducción para el título y la descripción
      titleKey: "home.carousel.slides.slide1.title",
      descriptionKey: "home.carousel.slides.slide1.description",
    },
    {
      image: banner2,
      titleKey: "home.carousel.slides.slide2.title",
      descriptionKey: "home.carousel.slides.slide2.description",
    },
    {
      image: banner3,
      titleKey: "home.carousel.slides.slide3.title",
      descriptionKey: "home.carousel.slides.slide3.description",
    },
    {
      image: banner4,
      titleKey: "home.carousel.slides.slide4.title",
      descriptionKey: "home.carousel.slides.slide4.description",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="relative overflow-hidden">
      <Swiper
        ref={mainSwiperRef}
        spaceBetween={30}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        modules={[Autoplay, Navigation, Thumbs]}
        className="mySwiper"
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`main-${index}`}>
            <section className="relative lg:grid grid-cols-[40%_60%] bg-dark-blue">
              <div className="relative z-50 flex items-center p-5">
                <section>
                  <h1 className="mb-4 text-3xl md:text-[43px] text-primary-yellow font-impact leading-normal">
                    {t(slide.titleKey)} {/* Usamos t() para el título */}
                  </h1>
                  <p className="text-sm lg:text-xl w-3/4 mb-2 text-white">
                    {t(slide.descriptionKey)}{" "}
                  </p>

                  <div className="flex flex-wrap mt-8 gap-4">
                    <a
                      className="px-4 py-2 bg-white text-blue-base border-2 rounded-xl font-bold text-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg text-center"
                      href={WhatsAppRedirect()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("home.carousel.buttons.contact")}{" "}
                      {/* Usamos t() para el botón de contacto */}
                    </a>
                    <a
                      className="px-4 py-2 bg-dark-blue text-white border-2 rounded-xl font-bold text-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg text-center"
                      href="#services"
                    >
                      {t("home.carousel.buttons.more")}{" "}
                      {/* Usamos t() para el botón de "Ver más" */}
                    </a>
                  </div>
                </section>
              </div>
              <div>
                <img
                  className="h-[45vh] md:h-[80vh] object-cover object-[50%_33%] w-full"
                  src={slide.image}
                  alt={t("home.carousel.slide_alt", { title: t(slide.titleKey) })}
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-5 right-[2%] z-10 w-[35%]">
        <Swiper
          ref={thumbsSwiperRef}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="thumbnails-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={`thumb-${index}`}
              className={`cursor-pointer transition-opacity duration-300 ${
                activeIndex === index
                  ? "opacity-100 border-2 border-primary-yellow"
                  : "opacity-60"
              }`}
              onClick={() => {
                if (mainSwiperRef.current) {
                  mainSwiperRef.current.swiper.slideTo(index);
                }
              }}
            >
              <img
                src={slide.image}
                alt={t("home.carousel.slide_alt", { title: t(slide.titleKey) })}
                className="h-20 w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MainCarousel;
