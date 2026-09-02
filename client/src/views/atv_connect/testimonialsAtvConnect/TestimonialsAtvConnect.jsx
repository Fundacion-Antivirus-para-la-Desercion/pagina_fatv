import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { GoStarFill } from "react-icons/go";
import "swiper/css";
import "swiper/css/effect-fade";
import { floatSnake } from "../../../components/motion/constants/Animations.js";
import { getTestimonials } from "./testimonialsData";

function StarRating() {
  return (
    <div className="flex gap-0.5 text-brand-teal-300">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-base">
          <GoStarFill className="text-primary-yellow" />
        </span>
      ))}
    </div>
  );
}

const testimonialShape = PropTypes.shape({
  testimony: PropTypes.string,
  initial: PropTypes.string,
  photo: PropTypes.string,
  role: PropTypes.string,
  university: PropTypes.string,
});

function LargeTestimonialCard({ testimonial }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl p-6 min-h-[400px] flex flex-col h-full  border-4 border-brand-teal-300">
      {/* Decorative line top-left */}
      <div className="absolute top-5 left-6 w-10 h-[3px] bg-brand-teal-300 rounded-full" />
      {/* Decorative circle top-right */}
      <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-brand-teal-50 translate-x-10 -translate-y-10" />

      <div className="flex items-center gap-4">
        <div className="relative flex items-center flex-shrink-0">
          <div className="w-14 h-14 mt-10 rounded-full overflow-hidden bg-brand-teal-300 flex items-center justify-center text-white font-semibold text-lg border-2 border-white flex-shrink-0">
            {testimonial.photo ? (
              <img
                src={testimonial.photo}
                alt={testimonial.role}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              testimonial.initial
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-blue-base font-semibold text-sm">
            {testimonial.role}
          </p>
          <p className="text-blue-base opacity-60 text-sm">
            {testimonial.university}
          </p>
        </div>
      </div>
      <p className="text-blue-base text-base leading-relaxed flex-1">
        {testimonial.testimony}
      </p>

      <div className="border-t border-gray-100 my-4" />

      <div className="flex items-center justify-between">
        <StarRating />
      </div>
    </div>
  );
}

LargeTestimonialCard.propTypes = {
  testimonial: testimonialShape.isRequired,
};

function SmallTestimonialCard({ testimonial }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl p-6 flex flex-col h-full border-4 border-brand-teal-300">
      {/* Decorative line top-left */}

      <div className="absolute top-5 left-6 w-8 h-[3px] bg-brand-teal-300 rounded-full" />
      {/* Decorative circle top-right */}
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-brand-teal-50 translate-x-7 -translate-y-7" />

      <div className="flex items-center gap-4 mb-5 mt-5">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-brand-teal-300 flex items-center justify-center text-white font-semibold text-lg border-2 border-white flex-shrink-0">
          {testimonial.photo ? (
            <img
              src={testimonial.photo}
              alt={testimonial.role}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            testimonial.initial
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-blue-base font-semibold text-sm">
            {testimonial.role}
          </p>
          <p className="text-blue-base opacity-60 text-sm">
            {testimonial.university}
          </p>
        </div>
      </div>
      <p className="text-blue-base text-base leading-relaxed flex-1">
        {testimonial.testimony}
      </p>

      <div className="border-t border-gray-100 mt-4 pt-3 flex justify-end">
        <StarRating />
      </div>
    </div>
  );
}

SmallTestimonialCard.propTypes = {
  testimonial: testimonialShape.isRequired,
};

function TestimonialsAtvConnect() {
  const { t } = useTranslation();

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  // Config común de los carouseles pequeños: sin navegación visible,
  // pero arrastrables con mouse/touch. `reverseDirection` invierte el sentido
  // del autoplay para que la fila "small-right" viaje hacia la derecha.
  const smallSwiperProps = (reverseDirection) => ({
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: { 640: { slidesPerView: 2 } },
    loop: true,
    speed: 900,
    grabCursor: true,
    allowTouchMove: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection,
    },
  });

  const testimonials = getTestimonials(t);

  const largeTestimonials = testimonials.filter((item) => item.key === "large");
  const smallLeftTestimonials = testimonials.filter(
    (item) => item.key === "small-left",
  );
  const smallRightTestimonials = testimonials.filter(
    (item) => item.key === "small-right",
  );

  return (
    <section className="relative p-5 md:p-10">
      <motion.div
        {...floatSnake(0)}
        className="absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full top-0 right-5"
      ></motion.div>
      <motion.div
        {...floatSnake(0)}
        className="absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full top-20 right-5"
      ></motion.div>
      <div className="text-center mb-10">
        <span className="text-lg text-primary-purple font-impact">
          {t("atvConnect.testimonialsAtvConnect.span")}
        </span>
        <h1 className="text-4xl md:text-5xl text-dark-blue font-impact">
          {t("atvConnect.testimonialsAtvConnect.title")}
        </h1>
      </div>

      <div
        id="newtestimonials"
        className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 mt-10 items-stretch"
      >
        {/* Columna izquierda — testimonio largo (carousel con fade) */}
        <div className="lg:w-3/5 min-w-0 flex flex-col">
          <motion.div {...slideFromTop} className="h-full">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              rewind={largeTestimonials.length > 1}
              speed={1200}
              grabCursor
              allowTouchMove
              autoplay={
                largeTestimonials.length > 1 && {
                  delay: 9000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              }
              /* py-3/-my-3: deja aire dentro del overflow del Swiper para que
                 la sombra y el borde de la card no queden recortados */
              className="h-full w-full py-3 -my-3 cursor-grab active:cursor-grabbing"
            >
              {largeTestimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="!h-auto">
                  <LargeTestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Columna derecha — dos filas de tarjetas pequeñas (2 visibles por fila) */}
        <div className="lg:w-3/5 min-w-0 flex flex-col gap-6">
          {/* Fila superior — avanza hacia la izquierda */}
          <motion.div {...slideFromTop} className="h-full">
            <Swiper
              {...smallSwiperProps(false)}
              className="w-full py-3 -my-3 cursor-grab active:cursor-grabbing"
            >
              {smallLeftTestimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="!h-auto">
                  <SmallTestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Fila inferior — avanza hacia la derecha */}
          <motion.div {...slideFromTop} className="h-full">
            <Swiper
              {...smallSwiperProps(true)}
              className="w-full py-3 -my-3 cursor-grab active:cursor-grabbing"
            >
              {smallRightTestimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="!h-auto">
                  <SmallTestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
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
    </section>
  );
}

export default TestimonialsAtvConnect;
