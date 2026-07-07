import BannerConsulting from "../../assets/images/views/consultorias/banner-consulting.webp";
import BannerView from "../../components/Banner-views/BannerView";
import { PiShootingStarFill} from "react-icons/pi";
import { RiFocus2Line } from "react-icons/ri";
import { FaLightbulb, FaStar,FaGraduationCap, FaUserFriends} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import Description from "./Description/Description.jsx";
import { motion } from "framer-motion";
import card from "../../assets/images/views/consultorias/card-p.webp";

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

  const cards = [
    { icon: <FaStar />,          titleKey: "consultorias.whyChooseUs.cards.methodology_title",   descKey: "consultorias.whyChooseUs.cards.methodology_description" },
    { icon: <RiFocus2Line />,    titleKey: "consultorias.whyChooseUs.cards.focus_title",         descKey: "consultorias.whyChooseUs.cards.focus_description" },
    { icon: <FaUserFriends />,   titleKey: "consultorias.whyChooseUs.cards.accompaniment_title", descKey: "consultorias.whyChooseUs.cards.accompaniment_description" },
    { icon: <FaGraduationCap />, titleKey: "consultorias.whyChooseUs.cards.experience_title",   descKey: "consultorias.whyChooseUs.cards.experience_description" },
    { icon: <BsStars />,         titleKey: "consultorias.whyChooseUs.cards.solutions_title",    descKey: "consultorias.whyChooseUs.cards.solutions_description" },
    { icon: <FaLightbulb />,     titleKey: "consultorias.whyChooseUs.cards.innovation_title",   descKey: "consultorias.whyChooseUs.cards.innovation_description" },
  ];

  return (
    <>
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

      <section className="mt-10 md:mt-20 max-w-screen-2xl mx-auto">
        <div className="text-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-blue-base font-impact m-5">
              {t("consultorias.whyChooseUs.title")}
              <br />
              <span className="text-primary-yellow">
                {t("consultorias.whyChooseUs.titlle_span")}
              </span> 
            </h2>
          </div>
          <p className="text-blue-base text-base md:text-lg mt-10">
            {t("consultorias.whyChooseUs.description")}
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-2 p-5 md:p-10 gap-8 md:gap-10">
          {cards.map(({ icon, titleKey, descKey }) => (
            <div key={titleKey} className="group bg-white min-h-[230px] w-full p-5 shadow-2xl rounded-2xl hover:border-primary-yellow border-2 hover:scale-105 transition-all duration-500 ease-in-out">
              <div className="flex items-start space-x-4">
                <div className="flex justify-center w-14 h-14 rounded-full bg-white">
                  <span className="text-3xl text-primary-yellow">{icon}</span>
                </div>
                <h2 className="text-lg md:text-xl font-extrabold text-blue-base mt-1">
                  {t(titleKey)}
                </h2>
              </div>
              <p className="text-base md:text-lg p-5 text-blue-base text-justify ">
                {t(descKey)}
              </p>
            </div>
          ))}
        </section>
      </section>
      <section className="relative bg-blue-base justify-center items-center text-center  md:mt-10 p-5 md:p-14 bg-[url('/src/assets/images/views/consultorias/estudiantes-en-aula.webp')] bg-cover bg-center overflow-hidden">
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
              <section key={pillar.title} className="group relative flex flex-col p-10 justify-center rounded-3xl transition-all duration-500 hover:-translate-y-2 min-w-[300px] max-w-[450px] min-h-[280px]">
                <img
                  src={card}
                  alt="Card background"
                  className="absolute inset-0 w-full h-full rounded-3xl"
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
