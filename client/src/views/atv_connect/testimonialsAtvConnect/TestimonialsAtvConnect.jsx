import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function TestimonialsAtvConnect() {
  const { t } = useTranslation();

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const testimonials = [
    {
      id: "testimony-one",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_one.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.university",
      ),
    },
    {
      id: "testimony-two",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_two.description",
      ),
      initial: "T",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_two.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_two.university",
      ),
    },
    {
      id: "testimony-three",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_three.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_three.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_three.university",
      ),
    },
    {
      id: "testimony-four",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_four.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_four.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_four.university",
      ),
    },
    {
      id: "testimony-five",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_five.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_five.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_five.university",
      ),
    },
    {
      id: "testimony-six",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_six.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_six.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_six.university",
      ),
    },
    {
      id: "testimony-seven",
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_seven.description",
      ),
      initial: "E",
      photo: null,
      role: t("atvConnect.testimonialsAtvConnect.testimony_seven.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_seven.university",
      ),
    },
  ];

  return (
    <section className="p-5 md:p-10">
      <div className="text-center mb-10">
        <span className="text-lg text-primary-purple font-impact">
          {t("atvConnect.testimonialsAtvConnect.span")}
        </span>
        <h1 className="text-4xl md:text-5xl text-dark-blue font-impact">
          {t("atvConnect.testimonialsAtvConnect.title")}
        </h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="mySwiper pb-1 md:pb-10"
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#94a3b8",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="flex items-stretch h-auto">
            <motion.div {...slideFromTop} className="w-full h-full">
              <div className="bg-white rounded-3xl shadow-md p-6 min-h-[340px] flex flex-col h-full">
                <span className="text-6xl text-brand-teal-300 font-serif leading-none select-none">
                  &ldquo;
                </span>

                <p className="text-blue-base text-base leading-relaxed mt-2 flex-1">
                  {testimonial.testimony}
                </p>

                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-brand-teal-300 flex items-center justify-center text-white font-semibold text-lg">
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
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TestimonialsAtvConnect;
