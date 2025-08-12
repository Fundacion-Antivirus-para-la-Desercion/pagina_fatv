import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/Banner/banner1c.jpeg";
import banner3 from "../assets/Banner/banner3c.jpeg";
import banner5 from "../assets/Banner/banner5c.jpeg";
import banner6 from "../assets/Banner/banner6c.jpeg";
import banner7 from "../assets/Banner/banner7c.jpeg";
import banner8 from "../assets/Banner/banner8c.jpeg";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      navigation={true}
      speed={2000}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="h-[86vh] object-cover object-[50%_33%] w-full"
          src={banner1}
          alt="Slide 1"
        />

        <div className="carousel-text">
          <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
          <p>
            A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA
            ANALÍTICA DE DATOS.
          </p>
        </div>
        <div className="absolute inset-0 bg-[#232e55] opacity-20 z-10"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[86vh] object-cover object-[50%_33%] w-full"
          src={banner3}
          alt="Slide 3"
        />

        <div className="carousel-text">
          <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
          <p>
            A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA
            ANALÍTICA DE DATOS
          </p>
        </div>
        <div className="absolute inset-0 bg-[#232e55] opacity-20 z-10"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[86vh] object-cover object-[50%_33%] w-full"
          src={banner5}
          alt="Slide 5"
        />

        <div className="carousel-text">
          <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
          <p>
            A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA
            ANALÍTICA DE DATOS
          </p>
        </div>
        <div className="absolute inset-0 bg-[#232e55] opacity-20 z-10"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[86vh] object-cover object-[50%_33%] w-full"
          src={banner6}
          alt="Slide 6"
        />

        <div className="carousel-text">
          <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
          <p>
            A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA
            ANALÍTICA DE DATOS
          </p>
        </div>
        <div className="absolute inset-0 bg-[#232e55] opacity-20 z-10"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[86vh] object-cover object-[50%_33%] w-full"
          src={banner7}
          alt="Slide 7"
        />

        <div className="carousel-text">
          <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
          <p>
            A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA
            ANALÍTICA DE DATOS
          </p>
        </div>
        <div className="absolute inset-0 bg-[#232e55] opacity-20 z-10"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[86vh] object-cover object-[50%_33%] w-full"
          src={banner8}
          alt="Slide 8"
        />

        <div className="carousel-text">
          <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
          <p>
            A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA
            ANALÍTICA DE DATOS
          </p>
        </div>
        <div className="absolute inset-0 bg-[#232e55] opacity-20 z-10"></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
