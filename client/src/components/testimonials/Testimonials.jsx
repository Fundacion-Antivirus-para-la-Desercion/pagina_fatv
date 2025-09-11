import styles from "./Testimonials.module.css";
import Testimonial1 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-01.jpg";
import Testimonial2 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-02.jpg";
import Testimonial3 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-03.jpg";
import Testimonial4 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-04.jpg";
import Testimonial5 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-05.jpg";
import Comilla from "../../assets/images/views/proVocacion/testimonials/comilla.png";
import Focus from "../../assets/images/views/proVocacion/information/focus.svg";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t } = useTranslation();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  const testimonialsImages = [
    Testimonial1,
    Testimonial2,
    Testimonial3,
    Testimonial4,
    Testimonial5,
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const whatsAppNumber = "573173831481";

  const contentTestimonials = t(
    "provocacion.testimonials.testimonials_content",
    {
      returnObjects: true,
    }
  );

  return (
    <>
      <section className="relative px-6 py-10 mb-2 shadow-lg bg-[#222D56]">
        <h1 className="p-3 text-5xl text-center text-white font-extrabold max-md:text-3xl">
          {t("provocacion.testimonials.title")}
        </h1>

        <Swiper
          ref={mainSwiperRef}
          spaceBetween={30}
          speed={3000}
          autoplay={{
            delay: 26000,
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
          {contentTestimonials.map((testimonial, index) => (
            <SwiperSlide key={`main-${index}`}>
              <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
                <div>
                  <img
                    className={`rounded-full min-h-80 w-80 object-cover shadow-sm border-[12px] border-[#F6A623] ${styles.borderImage}`}
                    src={testimonialsImages[index]}
                    alt={`${t(
                      "provocacion.testimonials.alt_testimonial_img"
                    )} ${index + 1}`}
                  />
                </div>
                <div className=" text-lg space-y-4 text-justify max-w-xl">
                  <img
                    className="w-8 mx-auto"
                    src={Comilla}
                    alt={t("provocacion.testimonials.alt_comilla")}
                  />
                  <p className={`${styles.text}`}> {testimonial.description}</p>
                  <p className="font-semibold text-right text-xl text-[#F6A623]">
                    {testimonial.author}
                  </p>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        <section className="flex justify-end">
          <div className="flex gap-4 flex-wrap items-center">
            <a
              className="flex px-4 py-1 bg-white text-[#222D56] border-2 font-bold text-lg rounded-xl items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("provocacion.testimonials.button1")}
              <img
                src={Focus}
                alt={t("provocacion.testimonials.alt_focus")}
                className="w-10 h-10"
              />
            </a>
            <a
              className="px-4 py-2 bg-[#222D56] text-white border-2 font-bold rounded-xl text-lg mr-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              href="#form-contac-us"
            >
              {t("provocacion.testimonials.button2")}
            </a>
          </div>
        </section>
      </section>
    </>
  );
}

export default Testimonials;
