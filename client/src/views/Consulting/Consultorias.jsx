import SeoHead from "../../components/seo/SeoHead";
import {
  BANNER_CONSULTING_IMG as BannerConsulting,
  CARD_CONSULTING_IMG as card,
  ESTUDIANTES_AULA_IMG as EstudiantesAula,
} from "../../assets/cloudinaryImages";
import BannerView from "../../components/Banner-views/BannerView";
import { PiShootingStarFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import Description from "./Description/Description.jsx";
import WhyChooseUs from "./Description/WhyChooseUs/WhyChooseUs.jsx";
import { motion } from "framer-motion";

function Consultorias() {
  const { t } = useTranslation();

  const pillarsData = [
    {
      title: t("consultorias.pillars.titlePillarOne"),
      description: t("consultorias.pillars.descriptionPillarOne"),
    },
    {
      title: t("consultorias.pillars.titlePillarTwo"),
      description: t("consultorias.pillars.descriptionPillarTwo"),
    },
    {
      title: t("consultorias.pillars.titlePillarThree"),
      description: t("consultorias.pillars.descriptionPillarThree"),
    },
  ];

  const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  return (
    <>
      <SeoHead
        routeKey="consulting"
        titleKey="consultorias.banner.h1"
        descriptionKey="consultorias.metaDescription"
      />
      <div className="relative lg:pt-[145px] ">
        <BannerView
          imagesBannerMap={{
            image: BannerConsulting,
            keyAlt: "consultorias.banner.alt",
            keyH1: "consultorias.banner.h1",
            keyBr: "consultorias.banner.br",
          }}
        />
      </div>

      <Description />
      <WhyChooseUs />

      <section
        className="relative bg-blue-base justify-center items-center text-center md:mt-10 p-5 md:p-14 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${EstudiantesAula})` }}
      >
        <div className="absolute w-full h-full opacity-70 bg-dark-blue top-0 left-0"></div>

        <div className="relative mt-10">
          <h3 className=" text-4xl md:text-5xl font-impact text-white">
            {t("consultorias.pillars.title")}
            <span className="text-4xl md:text-5xl font-impact text-primary-yellow">
              {t("consultorias.pillars.title_span")}
            </span>
          </h3>
          <p className="text-white text-lg md:text-xl mt-5">
            {t("consultorias.pillars.description")}
          </p>
        </div>

        <motion.div {...slideFromTop}>
          <div className="relative flex flex-wrap mt-10 gap-8 md:gap-5 mx-auto justify-center items-center">
            {pillarsData.map((pillar) => (
              <section
                key={pillar.title}
                className="group relative flex flex-col p-10 justify-center rounded-3xl transition-all duration-500 hover:-translate-y-2 min-w-[300px] max-w-[450px] min-h-[280px]"
              >
                <img
                  src={card}
                  alt="Card background"
                  className="absolute inset-0 w-full h-full rounded-3xl"
                  loading="lazy"
                />
                <PiShootingStarFill className="absolute top-0 left-0 text-primary-yellow text-4xl" />
                <div className="relative">
                  <h4 className="bg-dark-blue text-white rounded-3xl p-2 text-xl md:text-2xl mb-3">
                    {pillar.title}
                  </h4>

                  <p className="text-base md:text-lg mb-3 text-white text-center p-3">
                    {pillar.description}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Consultorias;
