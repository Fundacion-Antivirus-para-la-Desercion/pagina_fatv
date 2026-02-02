import { LuQuote } from "react-icons/lu";
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
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.description",
      ),
      initial: "E",
      role: t("atvConnect.testimonialsAtvConnect.testimony_one.role"),

      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.university",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_two.description",
      ),
      initial: "T",
      role: t("atvConnect.testimonialsAtvConnect.testimony_two.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_two.university",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_three.description",
      ),
      initial: "E",
      role: t("atvConnect.testimonialsAtvConnect.testimony_three.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_three.university",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_four.description",
      ),
      initial: "E",
      role: t("atvConnect.testimonialsAtvConnect.testimony_four.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_four.university",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_five.description",
      ),
      initial: "E",
      role: t("atvConnect.testimonialsAtvConnect.testimony_five.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_five.university",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_six.description",
      ),
      initial: "E",
      role: t("atvConnect.testimonialsAtvConnect.testimony_six.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_six.university",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_seven.description",
      ),
      initial: "E",
      role: t("atvConnect.testimonialsAtvConnect.testimony_seven.role"),
      university: t(
        "atvConnect.testimonialsAtvConnect.testimony_seven.university",
      ),
    },
  ];

  return (
    <>
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
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper pb-1 md:pb-10"
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#94a3b8",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index} className="flex items-stretch">
              <motion.div {...slideFromTop}>
                <section className="relative inline-block m-5">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary-yellow rounded-2xl" />
                  <section className="relative flex items-center flex-wrap p-5 min-h-[350px] bg-white border-2 border-dark-blue rounded-2xl shadow-sm">
                    <LuQuote className="text-4xl text-primary-yellow opacity-70" />
                    <p className="m-5 text-lg text-blue-base font-semibold">
                      {testimonials.testimony}
                    </p>

                    <section className="flex items-center">
                      <div>
                        <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold">
                          {testimonials.initial}
                        </p>
                      </div>{" "}
                      <div className="flex flex-col m-2">
                        <p className="text-blue-base font-semibold">
                          {testimonials.role}
                        </p>
                        <p className="text-blue-base opacity-[0.7]">
                          {testimonials.university}
                        </p>
                      </div>
                    </section>
                  </section>
                </section>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default TestimonialsAtvConnect;
