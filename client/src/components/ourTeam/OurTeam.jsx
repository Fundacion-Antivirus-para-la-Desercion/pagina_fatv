import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const foundationLogo = "/logo.png";

  const cards = [
    {
      name: "Carlos vásquez restrepo",
      role: t("ourTeam.roles.president"),
      image: "/img_OurTeam/carlos-vasquez.webp",
      bagraundColor: "#32526E",
    },
    {
      name: "astrid franco gonzalez",
      role: t("ourTeam.roles.social_intervention_coordinator"),
      image: "/img_OurTeam/astrid-franco-gonzalez.webp",
      bagraundColor: "#D3C3E3",
    },
    {
      name: "luis fernando sánchez hurtado",
      role: t("ourTeam.roles.executive_director"),
      image: "/img_OurTeam/luis-fernando-sanchez.webp",
      bagraundColor: "#90C4F9",
    },
    {
      name: "karen gonzález alarcón",
      role: t("ourTeam.roles.technology_and_data_coordinator"),
      image: "/img_OurTeam/karen-gonzalez-alarcon.webp",
      bagraundColor: "#81F0E7",
    },
    {
      name: "Víctor Manuel Valencia martínez",
      role: t("ourTeam.roles.deputy_director"),
      image: "/img_OurTeam/victor-valencia.webp",
      bagraundColor: "#2C395B",
    },
    {
      name: "david santiago botero",
      role: t("ourTeam.roles.legal_area_coordinator"),
      image: "/img_OurTeam/david-botero.webp",
      bagraundColor: "#90C4F9",
    },
    {
      name: "Manuela Correa Quintero",
      role: t("ourTeam.roles.communications_coordinator"),
      image: "/img_OurTeam/manuela-correa.webp",
      bagraundColor: "#765497",
    },
    {
      name: "luis fernando gonzález",
      role: t("ourTeam.roles.administrative_and_financial_coordinator"),
      image: "/img_OurTeam/luis-gonzales.webp",
      bagraundColor: "#0B8F84",
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
        containerRef.current.removeEventListener("mouseenter", stopAutoplay);
        containerRef.current.removeEventListener("mouseleave", startAutoplay);
      }
    };
  }, []);

  return (
    <>
      <div className="relative flex justify-center  mt-36">
        <div className="absolute flex top-[-45px] mx-auto my-[10px] text-center">
          <h3 className="text-4xl md:text-6xl font-impact text-blue-base">
            {t("ourTeam.title_part1")}
            {t("ourTeam.title_part2")}
          </h3>
        </div>
        <div className="w-full p-10 pb-20 bg-primary-yellow">
          <div ref={containerRef} className="cards mx-auto mt-16 max-w-[1400px]">
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
                  <div className="group transition-all duration-500rounded-xl">
                    <div className="relative overflow-hidden rounded-xl rounded-b-none">
                      <div className="pointer-events-none absolute inset-0 z-10 duration-500 group-hover:opacity-100" />
                      <img
                        src={card.image}
                        alt={card.name}
                        className="h-[45vh] w-full object-cover object-[50%_10%] transition-all duration-500 ease-out group-hover:scale-110"
                        style={{ backgroundColor: card.bagraundColor }}
                      />
                      <img
                        src={foundationLogo}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-36 -right-36 z-10 w-[130px] rotate-[-12deg] object-contain transition-all duration-700 group-hover:bottom-2 group-hover:right-2"
                      />
                    </div>
                    <div className="flex h-40 items-center rounded-br-[40px] rounded-t-none bg-dark-blue p-4 text-left transition-colors duration-500">
                      <div className="relative">
                        <h5 className="font-impact flex w-full uppercase text-white text-3xl leading-none mb-[10px] tracking-tight max-[480px]:text-[24px] max-[480px]:mb-[5px]">
                          {card.name}
                        </h5>
                        <p className="text-white transition-colors duration-500 group-hover:text-primary-yellow">
                          {card.role}
                        </p>
                      </div>
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
