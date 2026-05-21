import Javi from "../../assets/images/views/javi/javi-guina-el-ojo.svg";
import JaviCard from "../../assets/images/views/javi/javi-sonriendo.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { floatSnake } from "../motion/constants/Animations.js";
import { useRef, useEffect } from "react";
// Import Swiper styles
import "swiper/css";

// import required modules

function OurTeam() {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const foundationLogo = "/logo.png";

  const cards = [
    {
      name: "Carlos Vásquez Restrepo",
      role: t("ourTeam.roles.president"),
      image: "/img_OurTeam/carlos-vasquez.webp",
      backgroundColor: "#32526E",
    },
    {
      name: "Astrid Franco Gonzalez",
      role: t("ourTeam.roles.social_intervention_coordinator"),
      image: "/img_OurTeam/astrid-franco-gonzalez.webp",
      backgroundColor: "#D3C3E3",
    },
    {
      name: "Luis Fernando Sánchez Hurtado",
      role: t("ourTeam.roles.executive_director"),
      image: "/img_OurTeam/luis-fernando-sanchez.webp",
      backgroundColor: "#90C4F9",
    },
    {
      name: "Karen González Alarcón",
      role: t("ourTeam.roles.technology_and_data_coordinator"),
      image: "/img_OurTeam/karen-gonzalez-alarcon.webp",
      backgroundColor: "#81F0E7",
    },
    {
      name: "Víctor Manuel Valencia Martínez",
      role: t("ourTeam.roles.deputy_director"),
      image: "/img_OurTeam/victor-valencia.webp",
      backgroundColor: "#2C9Bc7",
    },
    {
      name: "David Santiago Botero",
      role: t("ourTeam.roles.legal_area_coordinator"),
      image: "/img_OurTeam/david-botero.webp",
      backgroundColor: "#90C4F9",
    },
    {
      name: "Manuela Correa Quintero",
      role: t("ourTeam.roles.communications_coordinator"),
      image: "/img_OurTeam/manuela-correa.webp",
      backgroundColor: "#765497",
    },
    {
      name: "Javi",
      role: t("ourTeam.roles.ambassador"),
      image: JaviCard,
      backgroundColor: "#2C395B",
    },
    {
      name: "Luis Fernando González",
      role: t("ourTeam.roles.administrative_and_financial_coordinator"),
      image: "/img_OurTeam/luis-gonzales.webp",
      backgroundColor: "#0B8F84",
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
      <div className="relative flex-col justify-center mt-20 mb-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(34, 45, 86) 1.5px, transparent 1.2px)",
            backgroundSize: "38px 38px",
          }}
        />
        <div className="flex items-center justify-center mx-auto text-center">
          <motion.div {...floatSnake()}>
            <img
              className="h-20 md:h-28 drop-shadow-[0px_0px_6px_rgba(255,186,8,1)]"
              src={Javi}
              alt="Javi Guinando"
            />
          </motion.div>
          <h3 className="text-3xl md:text-5xl font-impact text-blue-base">
            {t("ourTeam.title")}
          </h3>
        </div>
        <div className="w-full p-10 pb-20">
          <div
            ref={containerRef}
            className="cards mx-auto mt-5 max-w-[1400px]"
          >
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
                  <div className="group transition-all duration-500 rounded-xl">
                    <div className="relative overflow-hidden rounded-xl rounded-b-none">
                      <div className="pointer-events-none absolute inset-0 z-10 duration-500 group-hover:opacity-100" />
                      <img
                        src={card.image}
                        alt={card.name}
                        className="h-[45vh] w-full object-cover object-[50%_1%] transition-all duration-500 ease-out group-hover:scale-110"
                        style={{ backgroundColor: card.backgroundColor }}
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
          <motion.div
            {...floatSnake(0)}
            className="absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full top-0 right-5"
          ></motion.div>
          <motion.div
            {...floatSnake(0)}
            className="absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full top-20 right-5"
          ></motion.div>
          <motion.div
            {...floatSnake(0)}
            className="absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full -bottom-5 left-16"
          ></motion.div>

          <motion.div
            {...floatSnake(0)}
            className="absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full -bottom-16 left-5"
          ></motion.div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
