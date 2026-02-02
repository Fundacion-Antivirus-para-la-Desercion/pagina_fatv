import { useEffect, useMemo, useState } from "react";
import LogoAtvConecta from "../../../assets/images/views/proVocacion/information/logo-atv-conecta-blanco.webp";
import { IoIosArrowForward } from "react-icons/io";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTranslation } from "react-i18next";

function goAtvConnect() {
  const { t } = useTranslation();

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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

  return (
    <>
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

export default goAtvConnect;
