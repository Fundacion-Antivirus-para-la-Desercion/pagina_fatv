import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurTeam.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import { useRef, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

function OurTeam() {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const cards = [
    {
      name: "Carlos vásquez restrepo",
      role: t("ourTeam.roles.president"),
      image: "/img_OurTeam/CarlosVasquez.jpeg",
    },
    {
      name: "astrid franco gonzalez",
      role: t("ourTeam.roles.social_intervention_coordinator"),
      image: "/img_OurTeam/AstridFranco.webp",
    },
    {
      name: "luis fernando sánchez hurtado",
      role: t("ourTeam.roles.executive_director"),
      image: "/img_OurTeam/LuisSanchez.webp",
    },
    {
      name: "karen gonzález alarcón",
      role: t("ourTeam.roles.technology_and_data_coordinator"),
      image: "/img_OurTeam/KarenGonzales.jpg",
    },
    {
      name: "Víctor Manuel Valencia martínez",
      role: t("ourTeam.roles.deputy_director"),
      image: "/img_OurTeam/VictorValencia.jpeg",
    },
    {
      name: "david santiago botero",
      role: t("ourTeam.roles.legal_area_coordinator"),
      image: "/img_OurTeam/DavidBotero.webp",
    },
    {
      name: "Manuela Correa Quintero",
      role: t("ourTeam.roles.communications_coordinator"),
      image: "/img_OurTeam/ManuelaCorreaQuintero.webp",
    },
    {
      name: "luis fernando gonzález",
      role: t("ourTeam.roles.administrative_and_financial_coordinator"),
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
      <div className="OurTeam-block">
        <div className="OurTeam-block-title">
          <h3 className="text-5xl font-impact text-blue-base">
            {t("ourTeam.title_part1")} <br />
            {t("ourTeam.title_part2")}
          </h3>
        </div>
        <div className="OurTeam bg-primary-yellow">
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
                <SwiperSlide key={index}>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-[50vh] object-cover object-[50%_10%] w-full rounded-b-none rounded-3xl"
                  />
                  <div className="OurTeam-content bg-dark-blue rounded-r-3xl rounded-t-none">
                    <div className="OurTeam-content-info">
                      <h5 className="content-info-name font-impact">{card.name}</h5>
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
