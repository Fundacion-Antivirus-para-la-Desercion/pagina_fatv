import AcompanamientoColegio from "../../../assets/images/views/consultorias/acompanamiento-estudiante.webp";
import AcompanamientoUdea from "../../../assets/images/views/consultorias/acompanamiento-u-de-a.webp";
import FraternidadMedellin from "../../../assets/images/views/consultorias/aliados-fraternidad-medellin.webp";
import AcompanamientoBecarios from "../../../assets/images/views/consultorias/becarios.webp";
import ReunionSecretriaItagui from "../../../assets/images/views/consultorias/reunion-secretaria-itagui.webp";
import SocialFest from "../../../assets/images/views/consultorias/social-fest.webp";
import ReunionFavt from "../../../assets/images/views/consultorias/reunion-colaboradores-FATV.webp";
import EncuentroGobernacion from "../../../assets/images/views/consultorias/encuentro-gobernacion-antioquia-2.webp";
import { TiHeart } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiShootingStarFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectFade, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Description() {
  const { t } = useTranslation();

  const floatSnake = (delay = 0) => ({
    initial: { y: -10 },
    animate: { y: [0, -25, 0] },
    transition: {
      duration: 2.6,
      repeat: Infinity,
      ease: "linear",
      delay,
    },
  });

   const slideFromTop = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 },
  };

  const imagesConsulting = [
    {
      image: AcompanamientoColegio,
      description: t(
        "consultorias.description.imagesConsultingArray.image_one.description",
      ),
      alt: t("consultorias.description.imagesConsultingArray.image_one.alt"),
    },
    {
      image: SocialFest,
      description: t(
        "consultorias.description.imagesConsultingArray.image_two.description",
      ),
      alt: t("consultorias.description.imagesConsultingArray.image_two.alt"),
    },
    {
      image: ReunionSecretriaItagui,
      description: t(
        "consultorias.description.imagesConsultingArray.image_three.description",
      ),
      alt: t("consultorias.description.imagesConsultingArray.image_three.alt"),
    },
    {
      image: FraternidadMedellin,
      description: t(
        "consultorias.description.imagesConsultingArray.image_four.description",
      ),
      alt: t("consultorias.description.imagesConsultingArray.image_four.alt"),
    },
    {
      image: AcompanamientoBecarios,
      description: t(
        "consultorias.description.imagesConsultingArray.image_five.description",
      ),
      alt: t("consultorias.description.imagesConsultingArray.image_five.alt"),
    },
    {
      image: EncuentroGobernacion,
      description: t(
        "consultorias.description.imagesConsultingArray.image_six.description",
      ),
      alt: t("consultorias.description.imagesConsultingArray.image_six.alt"),
    },
    {
      image: ReunionFavt,
      description: t(
        "consultorias.description.imagesConsultingArray.image_seven.description",
      ),
      alt: t("consultorias.description.imagesConsultingArray.image_seven.alt"),
    },
    {
      image: AcompanamientoUdea,
      description: t(
        "consultorias.description.imagesConsultingArray.image_eight.description",
      ),
      alt: t("consultorias.description.imagesConsultingArray.image_eight.alt"),
    },
  ];

  const consultingData = [
    {
      item: "1",
      title: t("consultorias.description.universities"),
      description: t("consultorias.description.universities_description"),
    },
    {
      item: "2",
      title: t("consultorias.description.bootcamps"),
      description: t("consultorias.description.bootcamps_description"),
    },
    {
      item: "3",
      title: t("consultorias.description.schools"),
      description: t("consultorias.description.schools_description"),
    },
    {
      item: "4",
      title: t("consultorias.description.scholarship_programs"),
      description: t(
        "consultorias.description.scholarship_programs_description",
      ),
    },
  ];
  return (
    <>
      <section className="relative bg-[#F6F6F6] grid grid-cols-1 md:grid-cols-2 md:items-stretch md:gap-16 p-12 md:py-20">
        <div
          className="absolute inset-0 z-1"
          style={{
            backgroundImage: `
        linear-gradient(to right, #FFFFFF 1px, transparent 1px),
        linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
      `,
            backgroundSize: "48px 48px, 48px 48px",
          }}
        />
        <section className="relative">
          <div className="text-center md:text-left">
            <h2 className="lineSubtitle text-3xl md:text-4xl text-blue-base font-impact">
              {t("consultorias.description.consulting_title")}
              <span className="text-3xl md:text-4xl font-impact text-primary-yellow">
                {t("consultorias.description.consulting_title_span")}
              </span>
            </h2>

            <p className="relative text-lg text-blue-base text-center md:text-left mt-10">
              {t("consultorias.description.description_general")}
            </p>
          </div>

          <motion.section {...slideFromTop} className="relative grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mt-5 mb-5 md:mb-0">
            {consultingData.map((consultingData, index) => (
              <div
                key={index}
                className="relative bg-white p-5 rounded-2xl shadow-lg max-w-md block mx-auto hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center">
                  <span className="flex items-center justify-center bg-primary-yellow text-white text-lg font-bold p-3 mr-3 rounded-2xl w-10 h-10">
                    {consultingData.item}
                  </span>
                  <h4 className="text-blue-base font-semibold text-lg">
                    {consultingData.title}
                  </h4>
                </div>

                <p className="text-blue-base text-base m-3 text-center">
                  {consultingData.description}
                </p>
              </div>
            ))}
          </motion.section>
        </section>

        <section className="relative">
          <motion.div
            {...floatSnake(1)}
            className="group z-10 absolute -right-10 top-10 w-20 md:w-36"
          >
            <div className="bg-[#f6f6f6cb] p-3 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-2xl transition-all">
              <span
                className="absolute -top-10 left-1/2 -translate-x-1/2 
                   scale-0 group-hover:scale-100 transition-all duration-200
                   bg-dark-blue text-white text-base py-1 px-3 rounded-lg shadow-xl flex items-center justify-center"
              >
                FATV <TiHeart className="inline text-base" />
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-dark-blue"></span>
              </span>
              <div>
                <LuGraduationCap className="p-2 text-4xl md:text-5xl text-primary-yellow bg-yellow-100 rounded-xl" />
              </div>
              <div className="felx flex-col text-center">
                <span className="text-xl md:text-3xl text-dark-blue drop-shadow-2xl font-impact">
                  91%
                </span>
                <h4 className="text-dark-blue font-semibold text-xs">
                  {t(
                    "consultorias.description.imagesConsultingArray.retention_figure",
                  )}
                </h4>
              </div>
            </div>
          </motion.div>

          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="h-full rounded-3xl"
          >
            {imagesConsulting?.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-full border-[4px] border-solid border-white rounded-3xl shadow-2xl object-cover"
                  src={item.image}
                  alt={`Slide ${index}`}
                />
                <p className="absolute text-sm md:text-lg bottom-1 left-0 right-0 w-[98%] mx-auto bg-black bg-opacity-50 text-white p-2 text-center rounded-xl">
                  <PiShootingStarFill className="text-dark-yellow inline mr-2 text-xl" />
                  {t(imagesConsulting[index].description)}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <motion.div
            {...floatSnake(0)}
            className="group z-10 absolute -left-11 bottom-14 w-20 md:w-36"
          >
            <Link
              to="/ContactUs"
              className="bg-[#f6f6f6cb] p-3 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-2xl transition-all"
            >
              <span
                className="absolute -top-10 left-1/2 -translate-x-1/2 
                   scale-0 group-hover:scale-100 transition-all duration-200
                   bg-dark-blue text-white text-base py-1 px-3 rounded-lg shadow-xl flex items-center justify-center"
              >
                Click <MdKeyboardArrowRight className="inline text-base" />
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-dark-blue"></span>
              </span>

              <div>
                <IoMdContact className="p-2 text-4xl md:text-5xl text-dark-blue bg-blue-100 rounded-xl" />
              </div>
              <div className="flex flex-col md:items-center md:justify-center">
                <h4 className="text-dark-blue font-semibold text-sm md:text-lg">
                  {t(
                    "consultorias.description.imagesConsultingArray.link_see_more",
                  )}
                </h4>
              </div>
            </Link>
          </motion.div>
        </section>
      </section>
    </>
  );
}

export default Description;
