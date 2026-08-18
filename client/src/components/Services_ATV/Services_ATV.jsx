import "./Services_ATV.css";
import "boxicons";
import { useTranslation } from "react-i18next";
import {
  FOCUS_BLANCO_IMG as Focus,
  JAVI_CARA_ATV_CONECTA_IMG as LogoAtvConecta,
} from "../../assets/cloudinaryImages";
import { Link } from "react-router-dom";
import { LuGraduationCap } from "react-icons/lu";
import { PiHandshake } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useEffect, useMemo, useState } from "react";

const RING_COLOR_MAP = {
  "bg-dark-blue": "ring-dark-blue",
  "bg-primary-yellow": "ring-primary-yellow",
  "bg-primary-purple": "ring-primary-purple",
  "bg-brand-teal-300": "ring-brand-teal-300",
};

const SERVICES_DATA = [
  {
    id: "permanence",
    Icon: LuGraduationCap,
    imageBg: "bg-dark-blue",
    titleKey: "home.servicesATV.services.permanence_title",
    descriptionKey: "home.servicesATV.services.permanence_description",
    altKey: "home.servicesATV.services.permanence_icon_alt",
    route: "/gestion-de-la-permanencia",
  },
  {
    id: "consulting",
    Icon: PiHandshake,
    imageBg: "bg-primary-purple",
    titleKey: "home.servicesATV.services.persistence_consulting_title",
    descriptionKey:
      "home.servicesATV.services.persistence_consulting_description",
    altKey: "home.servicesATV.services.consulting_icon_alt",
    route: "/consultorias",
  },
  {
    id: "vocational",
    image: Focus,
    imageBg: "bg-primary-yellow",
    titleKey: "home.servicesATV.services.socio_vocational_guidance_title",
    descriptionKey:
      "home.servicesATV.services.socio_vocational_guidance_description",
    altKey: "home.servicesATV.services.vocational_icon_alt",
    route: "/provocacion",
  },
  {
    id: "atvconnect",
    image: LogoAtvConecta,
    imageBg: "bg-brand-teal-300",
    titleKey: "home.servicesATV.services.atvconnect_title",
    titleKeyTwo: "home.servicesATV.services.atvconnect_title_two",
    descriptionKey: "home.servicesATV.services.atvconnect_description",
    altKey: "home.servicesATV.services.atvconnect_icon_alt",
    route: "/atvconnect",
  },
];

const ServicesATV = () => {
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
        enable: false,
        zIndex: 0,
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <section
      id="services"
      className="relative text-blue-base p-5 py-10 md:py-16 bg-dark-blue"
    >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-full z-0 bg-dark-blue"
      />

      <div className="relative text-center">
        <span className="inline-block mb-5 text-primary-purple text-xs tracking-nm bg-brand-purple-200/20 rounded-3xl py-2 px-4 border border-brand-purple-100">
          FUNDACIÓN ATV
        </span>

        <h2 className="font-impact text-3xl md:text-5xl mb-5 text-white">
          {t("home.servicesATV.title")}
        </h2>

        <hr className="mx-auto border-2 border-primary-yellow max-w-32 mb-10 rounded-sm" />
      </div>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {SERVICES_DATA.map((service) => {
          const ringColor =
            RING_COLOR_MAP[service.imageBg] ?? "ring-primary-purple";

          return (
            <div
              key={service.id}
              className="group relative flex flex-col pt-10 hover:translate-y-[-8px] transition-transform duration-300"
            >
              <div
                className={`absolute top-0 left-6 z-10 w-20 h-20 rounded-full ring-4 ring-offset-2 ${ringColor} transition-transform duration-300 group-hover:scale-105`}
              >
                <div
                  className={`w-full h-full rounded-full ${service.imageBg} flex items-center justify-center`}
                >
                  {service.Icon ? (
                    <service.Icon
                      size={36}
                      className="text-white"
                      aria-label={t(service.altKey)}
                      role="img"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={t(service.altKey)}
                      loading="lazy"
                      className="w-full h-full object-contain rounded-full p-2"
                    />
                  )}
                </div>
              </div>

              <div className="relative flex flex-col flex-1 bg-white p-4 border-4 border-white rounded-2xl shadow-2xl">
                <div className="h-12" />

                <h3 className="mb-5 md:mb-10 text-dark-blue text-xl font-extrabold text-center">
                  {t(service.titleKey)}
                  {service.titleKeyTwo && (
                    <>
                      <br />
                      {t(service.titleKeyTwo)}
                    </>
                  )}
                </h3>

                <p className="mb-5 md:mb-12 text-blue-base text-md leading-relaxed text-center">
                  {t(service.descriptionKey)}
                </p>

                <Link
                  className="flex items-center gap-2 mx-auto w-fit bg-primary-purple text-white p-2 px-14 rounded-3xl text-lg duration-300 mt-auto"
                  to={service.route}
                  aria-label={`${t("home.servicesATV.services.more_info")} — ${t(service.titleKey)}`}
                >
                  {t("home.servicesATV.services.more_info")}
                  <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesATV;
