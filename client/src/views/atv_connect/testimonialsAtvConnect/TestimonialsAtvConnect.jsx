import { LuQuote } from "react-icons/lu";
import LogoAtvConecta from "../../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

function TestimonialsAtvConnect() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const { t } = useTranslation();

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const particlesLoaded = (container) => {
    console.log("particles conatiner");
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false, // <--- ESTO ES LO MÁS IMPORTANTE
        zIndex: 0, // Asegura un z-index bajo si es necesario
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1.5,
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        size: {
          value: { min: 2, max: 4 },
          random: true,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const testimonials = [
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.description",
      ),
      initial: "M",
      name: "María F.",
      profession: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.profession",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_two.description",
      ),
      initial: "C",
      name: "Carlos A.",
      profession: t(
        "atvConnect.testimonialsAtvConnect.testimony_two.profession",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_three.description",
      ),
      initial: "L",
      name: "Laura S.",
      profession: t(
        "atvConnect.testimonialsAtvConnect.testimony_three.profession",
      ),
    },
    {
      testimony: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.description",
      ),
      initial: "M",
      name: "María F.",
      profession: t(
        "atvConnect.testimonialsAtvConnect.testimony_one.profession",
      ),
    },
  ];

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
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index}>
              <motion.div {...slideFromTop}>
                <section className="relative inline-block m-5 mt-10">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary-yellow rounded-2xl" />
                  <section className="relative p-5 min-h-[270px] bg-white border-2 border-dark-blue rounded-2xl shadow-sm">
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
                          {testimonials.name}
                        </p>
                        <p className="text-blue-base opacity-[0.7]">
                          {testimonials.profession}
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

      <section className="flex flex-col items-center bg-brand-teal-400 p-10 relative overflow-hidden">
        <Particles
          id="tsparticles-testimonials"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full z-0 bg-brand-teal-400"
        />
        <div className="relative flex flex-col text-center items-center">
          <img
            className="w-28 h-28 md:w-32 md:h-32 block mx-auto"
            src={LogoAtvConecta}
            alt=""
          />
          <p className="text-3xl md:text-5xl text-white font-impact m-5">
            {t("atvConnect.goAtv.start_now")}
          </p>
          <p className="text-base text-white text-center">
            {" "}
            {t("atvConnect.goAtv.paragraph_start")}
          </p>
          <div className="flex justify-center">
            <a
              href="https://atvconecta.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group px-10 py-4 relative overflow-hidden w-full max-w-[310px] mt-8 text-dark-blue text-lg md:text-xl font-bold rounded-full shadow-xl bg-primary-yellow transform hover:scale-105 transition-all duration-500"
              to="/"
            >
              <span className="relative">
                {" "}
                {t("atvConnect.goAtv.btn_start_free")}
              </span>
              <div class="absolute inset-0 bg-[#ffffff3a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <IoIosArrowForward className="text-xl ml-2 text-dark-blue" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsAtvConnect;
