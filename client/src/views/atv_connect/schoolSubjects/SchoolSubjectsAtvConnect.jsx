import Javi from "../../../assets/images/views/javi/Javi-4.png";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useTranslation } from "react-i18next";

function SchoolSubjectsAtvConnect() {
  const [init, setInit] = useState(false);

  const { t } = useTranslation();

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

  const subjects = [
    {
      subject: t("atvConnect.subjects.subject_list.calculus"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.physics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.chemistry"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.programming"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.statistics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.algebra"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.accounting"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.economics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.english"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.biology"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.mathematics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.data_bases"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.algorithms"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.thermodynamics"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.circuits"),
    },
    {
      subject: t("atvConnect.subjects.subject_list.finance"),
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[30%,70%] bg-dark-blue p-5 md:p-10 md:pt-20 md:pb-[184px] relative mb-10">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full z-0 bg-dark-blue"
        />
        <div className="m-10 md:m-2 relative text-center md:text-left">
          <span className="text-lg text-primary-purple font-impact">
            {t("atvConnect.subjects.span")}{" "}
          </span>
          <h6 className="text-4xl md:text-5xl text-white font-impact">
            {t("atvConnect.subjects.title")}
          </h6>
        </div>

        <div className="flex flex-wrap items-center relative">
          <section className="flex flex-wrap justify-center items-center text-white p-3 gap-4">
            {subjects.map((subjects, index) => (
              <span
                key={index}
                className="rounded-3xl border border-white border-opacity-35 text-base py-2 px-5 cursor-pointer"
              >
                {subjects.subject}
              </span>
            ))}
          </section>
        </div>

        <div className="relative">
          <img
            className="block mx-auto md:absolute md:top-[-90px] max-w-[190px] md:max-w-[200px]"
            src={Javi}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default SchoolSubjectsAtvConnect;
