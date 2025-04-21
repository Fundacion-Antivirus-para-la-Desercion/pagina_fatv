import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurTeam.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useRef, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

function OurTeam() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const cards = [
    {
      name: "Carlos vásquez restrepo",
      role: "Presidente",
      image: "/img_OurTeam/CarlosVasquez.jpeg",
    },
    {
      name: "astrid franco",
      role: "Coordinadora Área Social",
      image: "/img_OurTeam/AstridFranco.webp",
    },
    {
      name: "luis fernando sánchez",
      role: "Director",
      image: "/img_OurTeam/LuisSanchez.webp",
    },
    {
      name: "karen gonzález",
      role: "Coordinadora Área Evaluación y Datos",
      image: "/img_OurTeam/KarenGonzales.jpg",
    },
    {
      name: "Víctor Manuel Valencia",
      role: "Subdirector",
      image: "/img_OurTeam/VictorValencia.jpeg",
    },
    {
      name: "jazmín alzate",
      role: "Coordinadora Alianzas y Cooperación",
      image: "/img_OurTeam/JazminAlzate.jpeg",
    },
    {
      name: "david santiago botero",
      role: "Coordinador Área Legal",
      image: "/img_OurTeam/DavidBotero.webp",
    },
    {
      name: "daniela correa",
      role: "Coordinadora Área Comunicaciones",
      image: "/img_OurTeam/DanielaCorrea.webp",
    },
    {
      name: "luis fernando gonzález",
      role: "Coordinador Área Administrativa y Financiera",
      image: "/img_OurTeam/LuisGonzales.webp",
    },
  ];

  const stopAutoplay = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.autoplay.stop();
    }
  };

  const startAutoplay = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.autoplay.start();
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mouseenter", stopAutoplay);
      containerRef.current.addEventListener("mouseleave", startAutoplay);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.addEventListener("mouseenter", stopAutoplay);
        containerRef.current.addEventListener("mouseleave", startAutoplay);
      }
    };
  }, []);

  return (
    <>
      <section></section>

      <div className="OurTeam-block">
        <div className="OurTeam-block-title">
          <h3 className="text-5xl font-extrabold  text-title">
            sobre nuestro <br />
            equipo
          </h3>
        </div>
        <div className="OurTeam">
          <div ref={containerRef} className="cards">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              ref={swiperRef}
              slidesPerView={4}
              loop={true}
              centeredSlides={false}
              speed={6000}
              spaceBetween={30}
              grabCursor={true}
              autoplay={{
                delay: 0,
              }}
              freeMode={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {cards.map((card, index) => (
                <SwiperSlide>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-[50vh] object-cover object-[50%_10%] w-full rounded-b-none rounded-3xl"
                  />
                  <div className="OurTeam-content rounded-r-3xl rounded-t-none">
                    <div className="OurTeam-content-info">
                      <h5 className="content-info-name">{card.name}</h5>
                      <p className="content-info-role">{card.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
