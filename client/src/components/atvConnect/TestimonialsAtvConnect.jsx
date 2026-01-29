import { LuQuote } from "react-icons/lu";
import LogoAtvConecta from "../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seminario from "../../assets/images/views/atvConnect/seminario.png";


function TestimonialsAtvConnect() {
  const { t } = useTranslation();

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  return (
    <>
      <section className="p-14">
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
          className="mySwiper pb-10"
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#94a3b8",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
          {" "}
          <SwiperSlide>
            <motion.div {...slideFromTop}>
              {" "}
              <section className="relative inline-block m-5 mt-10">
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary-yellow rounded-2xl" />
                <section className="relative p-5 bg-white border-2 border-dark-blue rounded-2xl shadow-sm h-[316px]">
                  <LuQuote className="text-4xl text-primary-yellow opacity-70" />

                  <p className="m-5 text-lg text-blue-base font-semibold">
                    {t(
                      "atvConnect.testimonialsAtvConnect.testimony_one.description",
                    )}
                  </p>

                  <div className="flex flex-col m-5">
                    <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold mb-2">
                      M
                    </p>
                    <p className="text-blue-base font-semibold leading-tight">
                      María F.
                    </p>
                    <p className="text-blue-base text-sm opacity-80">
                      {t(
                        "atvConnect.testimonialsAtvConnect.testimony_one.profession",
                      )}
                    </p>
                  </div>
                </section>
              </section>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div {...slideFromTop}>
              {" "}
              <section className="relative inline-block m-5 mt-10">
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary-yellow rounded-2xl" />
                <section className="relative p-5 bg-white border-2 border-dark-blue rounded-2xl shadow-sm">
                  <LuQuote className="text-4xl text-primary-yellow opacity-70" />
                  <p className="m-5 text-lg text-blue-base font-semibold">
                    {t(
                      "atvConnect.testimonialsAtvConnect.testimony_two.description",
                    )}
                  </p>
                  <div className="flex flex-col m-5">
                    <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold">
                      C
                    </p>
                    <p className="text-blue-base font-semibold">Carlos A.</p>
                    <p className="text-blue-base">
                      {" "}
                      {t(
                        "atvConnect.testimonialsAtvConnect.testimony_two.profession",
                      )}
                    </p>
                  </div>
                </section>
              </section>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div {...slideFromTop}>
              {" "}
              <section className="relative inline-block m-5 mt-10">
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary-yellow rounded-2xl" />
                <section className="relative p-5 bg-white border-2 border-dark-blue rounded-2xl shadow-sm">
                  <LuQuote className="text-4xl text-primary-yellow opacity-70" />
                  <p className="m-5 text-lg text-blue-base font-semibold">
                    {t(
                      "atvConnect.testimonialsAtvConnect.testimony_three.description",
                    )}
                  </p>
                  <div className="flex flex-col m-5">
                    <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold">
                      L
                    </p>
                    <p className="text-blue-base font-semibold">Laura S.</p>
                    <p className="text-blue-base">
                      {" "}
                      {t(
                        "atvConnect.testimonialsAtvConnect.testimony_three.profession",
                      )}{" "}
                    </p>
                  </div>
                </section>
              </section>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div {...slideFromTop}>
              {" "}
              <section className="relative inline-block m-5 mt-10">
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary-yellow rounded-2xl" />
                <section className="relative p-5 bg-white border-2 border-dark-blue rounded-2xl shadow-sm">
                  <LuQuote className="text-4xl text-primary-yellow opacity-70" />

                  <p className="m-5 text-lg text-blue-base font-semibold">
                    {t(
                      "atvConnect.testimonialsAtvConnect.testimony_one.description",
                    )}
                  </p>

                  <div className="flex flex-col m-5">
                    <p className="flex items-center justify-center bg-dark-blue rounded-full w-12 h-12 text-white font-semibold mb-2">
                      M
                    </p>
                    <p className="text-blue-base font-semibold leading-tight">
                      María F.
                    </p>
                    <p className="text-blue-base text-sm opacity-80">
                      {t(
                        "atvConnect.testimonialsAtvConnect.testimony_one.profession",
                      )}
                    </p>
                  </div>
                </section>
              </section>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="flex flex-col items-center bg-brand-teal-400 p-10 mb-5 m-5 relative">
        <img
          className="w-full absolute inset-0"
          src={Seminario}
          alt=""
        />
        <img
          className="w-28 h-28 md:w-32 md:h-32"
          src={LogoAtvConecta}
          alt=""
        />
        <p className="text-3xl md:text-5xl text-white font-impact m-5">
          {t("atvConnect.testimonialsAtvConnect.start_now")}
        </p>
        <p className="text-base text-white text-center">
          {" "}
          {t("atvConnect.testimonialsAtvConnect.paragraph_start")}
        </p>
        <div className="flex justify-center">
          <Link
            className="flex  items-center group px-10 py-4 relative overflow-hidden w-full max-w-[310px] mt-8 text-dark-blue text-lg md:text-xl font-bold rounded-full shadow-xl bg-primary-yellow transform hover:scale-105 transition-all duration-500"
            to="/"
          >
            <span className="relative">
              {" "}
              {t("atvConnect.testimonialsAtvConnect.btn_start_free")}
            </span>
            <div class="absolute inset-0 bg-[#ffffff3a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <IoIosArrowForward className="text-xl ml-2 text-dark-blue" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default TestimonialsAtvConnect;
