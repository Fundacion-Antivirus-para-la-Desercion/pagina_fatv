import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { GoStarFill } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";

import "swiper/css";
import "swiper/css/effect-fade";
import { floatSnake } from "../../../components/motion/constants/Animations.js";
import { getTestimonials } from "./testimonialsData";

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
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

function Avatar({ testimonial }) {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-teal-300 flex items-center justify-center text-white font-semibold text-base border-2 border-white flex-shrink-0">
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
  );
}

Avatar.propTypes = { testimonial: testimonialShape.isRequired };

function LargeTestimonialCard({ testimonial, readMoreLabel }) {
  return (
    <div className="relative overflow-hidden bg-brand-teal-50/20 rounded-3xl p-10 max-h-[300px] flex flex-col h-full border border-brand-teal-300/40">
      {/* Decorative blob top-right */}
      <div className="absolute  top-0 right-0 w-24 h-24 rounded-full bg-brand-teal-50 translate-x-8 -translate-y-8 pointer-events-none" />

      {/* Quote icon + Testimony text */}
      <div className="flex items-start gap-3 flex-1">
        <LuQuote className="text-brand-teal-300 text-4xl flex-shrink-0 mt-1" />
        <p className="text-blue-base text-lg sm:text-xl leading-relaxed">
          {testimonial.testimony}
        </p>
      </div>

      <div className="border-t border-gray-200 mt-6 pt-4 flex items-center justify-between gap-4 flex-wrap">
        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar testimonial={testimonial} />
          <div className="flex flex-col">
            <p className="text-blue-base font-semibold text-sm">{testimonial.role}</p>
            <p className="text-blue-base opacity-60 text-xs">{testimonial.university}</p>
          </div>
        </div>

        {/* Stars + button */}
        <div className="flex items-center gap-4">
          <StarRating />
          <button className="bg-brand-teal-300 text-white text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap hover:bg-brand-teal-400 transition-colors">
            {readMoreLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

LargeTestimonialCard.propTypes = {
  testimonial: testimonialShape.isRequired,
  readMoreLabel: PropTypes.string.isRequired,
};

function SmallTestimonialCard({ testimonial }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl p-6 flex flex-col h-full border border-brand-teal-300/40">
      {/* Decorative blob top-right */}
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-brand-teal-50 translate-x-6 -translate-y-6 pointer-events-none" />

      {/* Quote icon */}
      <FaQuoteLeft className="text-brand-teal-300 text-xl mb-3 flex-shrink-0" />

      {/* Testimony text */}
      <p className="text-blue-base text-base leading-relaxed flex-1">
        {testimonial.testimony}
      </p>

      <div className="border-t border-gray-200 mt-4 pt-3 flex items-center gap-3">
        <Avatar testimonial={testimonial} />
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-blue-base font-semibold text-sm truncate">{testimonial.role}</p>
          <p className="text-blue-base opacity-60 text-xs truncate">{testimonial.university}</p>
        </div>
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
    initial: { opacity: 0, y: -60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true, amount: 0.4 },
  };

  const testimonials = getTestimonials(t);
  const largeTestimonials = testimonials.filter((item) => item.key === "large");
  const smallTestimonials = testimonials.filter((item) => item.key !== "large");

  const readMoreLabel = t("atvConnect.testimonialsAtvConnect.readMore");

  return (
    <section className="relative p-5 md:p-10">
      {/* Decorative blobs */}
      <motion.div
        {...floatSnake(0)}
        className="absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full top-0 right-5"
      />
      <motion.div
        {...floatSnake(0)}
        className="absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full top-20 right-5"
      />
      <motion.div
        {...floatSnake(0)}
        className="absolute z-0 bg-primary-yellow bg-opacity-40 h-40 w-40 rounded-full -bottom-5 left-16"
      />
      <motion.div
        {...floatSnake(0)}
        className="absolute z-0 bg-dark-blue bg-opacity-40 h-16 w-16 rounded-full -bottom-16 left-5"
      />

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <span className="text-lg text-primary-purple font-impact">
          {t("atvConnect.testimonialsAtvConnect.span")}
        </span>
        <h1 className="text-4xl md:text-5xl text-dark-blue font-impact">
          {t("atvConnect.testimonialsAtvConnect.title")}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 relative z-10">
        {/* Large testimonial — full width, carousel fade */}
        <motion.div {...slideFromTop}>
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
            className="w-full py-3 -my-3 cursor-grab active:cursor-grabbing"
          >
            {largeTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                <LargeTestimonialCard
                  testimonial={testimonial}
                  readMoreLabel={readMoreLabel}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Small testimonials — single row, 1/2/3 cols responsive */}
        <motion.div {...slideFromTop}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            speed={900}
            grabCursor
            allowTouchMove
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full py-3 -my-3 cursor-grab active:cursor-grabbing"
          >
            {smallTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                <SmallTestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsAtvConnect;
