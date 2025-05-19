import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./Carousel.css";

import banner1 from "../assets/Banner/banner1c.jpeg";
import banner2 from "../../public/projects/Becarios/becarios-itagui.webp";
import banner3 from "../assets/Banner/banner5c.jpeg";
import banner4 from "../assets/Banner/banner10c.jpeg";

function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  const slides = [
    {
      image: banner1,
      title: "FOMENTAMOS LA PERMANENCIA ESTUDIANTIL",
      description:
        "Acompañamos a los estudiantes para poder lograr sus sueños.",
    },
    {
      image: banner2,

      title: "UNIMOS FUERZAS PARA EVITAR LA DESERCIÓN",
      description:
        "Nuestras áreas son: Intervención social, Comunicaciones, Tecnología y Datos.",
    },
    {
      image: banner3,
      title: "MÁS DE 11.000 ESTUDIANTES ACOMPAÑADOS Y CONTANDO",
      description: "¡Únete a nuestra comunidad de agentes del cambio!",
    },
    {
      image: banner4,
      title: "¡DESCUBRE NUESTRAS ESTRATEGIAS DE ACOMPAÑAMIENTO! ",
      description: "¡Tu futuro está a un clic de distancia!",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const whatsAppNumber = "573173831481";

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
            <section className="relative lg:grid grid-cols-[40%_60%] bg-[#222D56]">
              <div className="relative z-50 carousel-text flex items-center p-5">
                <section>
                  <h1 className="mb-4 text-[43px] leading-normal">
                    {slide.title}
                  </h1>
                  <p className="text-xl w-3/4 mb-2">{slide.description}</p>

                  <a
                    className="px-4 py-2 bg-[#fff] text-[#222D56] border-2 font-bold text-lg mr-5"
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CONTÁCTENOS
                  </a>
                  <a
                    className="px-4 py-2 bg-[#222D56] text-white border-2 font-bold text-lg mr-5"
                    href="#redirection-services"
                  >
                    Ver más
                  </a>
                </section>
              </div>
              <div>
                <img
                  className="h-[80vh] object-cover object-[50%_33%] w-full"
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex absolute bottom-2 left-[11%] w-full z-10">
        <div className="swiper-button-prev-custom mx-2 cursor-pointer text-white text-2xl bg-[#f8b732] rounded-full py-2 px-3">
          &lt;
        </div>
        <div className="swiper-button-next-custom mx-2 cursor-pointer text-white text-2xl bg-[#f8b732] rounded-full py-2 px-3">
          &gt;
        </div>
      </div>

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
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={`thumb-${index}`}
              className={`cursor-pointer transition-opacity duration-300 ${
                activeIndex === index
                  ? "opacity-100 border-2 border-[#f8b732]"
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
                alt={`Thumbnail ${index + 1}`}
                className="h-20 w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;
