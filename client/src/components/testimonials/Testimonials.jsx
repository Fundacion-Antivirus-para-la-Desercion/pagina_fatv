import styles from "./Testimonials.module.css";
import Testimonial1 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-01.jpg";
import Testimonial2 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-02.jpg";
import Testimonial3 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-03.jpg";
import Testimonial4 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-04.jpg";
import Testimonial5 from "../../assets/images/views/proVocacion/testimonials/testimonio-provocación-05.jpg";
import Comilla from "../../assets/images/views/proVocacion/testimonials/comilla.png";
import Focus from "../../assets/images/views/proVocacion/information/focus.svg";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  const contentTestimonials = [
    {
      image: Testimonial1,
      description:
        "Muy importante el acompañamiento y las personas que lo hacen, porque uno se siente en confianza y siente que uno está aprendiendo algo... El hecho de que lleguen con preguntas que no obliguen pero que incentiven a darle una respuesta ha hecho que tenga una mejor preparación para mi futuro o al menos tenga más planteado lo que estoy haciendo hoy para mi futuro.",
      author: "- Samuel Durango Baena",
    },
    {
      image: Testimonial2,
      description:
        "Hemos aprendido a conocernos bastante bien. Ha sido un crecimiento personal he aprendido a quererme, a conocerme más a fondo, mirar lo que quiero para mi vida en unos años y a saber que tengo un gran avance en mí. Que tengo que ser constante con lo que quiero lograr y que tengo que tener propósitos fijos. A futuro me imagino como una gran profesional, teniendo mi propia empresa o marca o siendo independiente.",
      author: "- Salomé Arango",
    },
    {
      image: Testimonial3,
      description:
        "Sinceramente, antes de que Antivirus llegara tenía mucha inseguridad de qué iba a estudiar o qué iba a hacer con mi vida, porque nadie sabe que va a pasar con el futuro porque es incierto. Pero Antivirus llegó y poco a poco nos ha podido dar seguridad, nos ha enseñado que todo en la vida tiene una solución y nuestros problemas se pueden volver en capacidades para nosotros mismos.",
      author: "- Estiwar Espinal ",
    },
    {
      image: Testimonial4,
      description:
        "Antivirus ha hecho un trabajo maravilloso, gracias a Antivirus he intentado soltarle ese miedo al futuro, ha tranquilizado mucho las cosas, nosotras como estudiantes de 11 cargamos con varias responsabilidades y nos preocupa mucho qué pasará después del colegio ¿qué haré? Y Antivirus nos ha ayudado a conocernos un poquito más y saber a qué me puedo dedicar o por qué camino coger.",
      author: "- Antonia Aristizábal ",
    },
    {
      image: Testimonial5,
      description:
        "El acompañamiento me pareció muy agradable, mi mayor aprendizaje fue en la toma decisiones, entender mejor mis emociones, pensar antes de actuar. Ustedes lograron en mí que yo fuera más seguro como de las decisiones que quiera tomar en mi vida. Lo que más me gusto fueron las charlas, la metodología y la temática, eso nos iluminó.",
      author: "- Matías González",
    },
  ];
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const whatsAppNumber = "573173831481";

  return (
    <>
      <section className="relative px-6 py-10 mb-2 shadow-lg bg-[#222D56]">
        <h1 className="p-3 text-5xl text-center text-white font-extrabold max-md:text-3xl">
          TESTIMONIOS
        </h1>

        <Swiper
          ref={mainSwiperRef}
          spaceBetween={30}
          speed={3000}
          autoplay={{
            delay: 26000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          modules={[Autoplay, Navigation, Thumbs]}
          className="mySwiper"
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={handleSlideChange}
        >
          {contentTestimonials.map((slide, index) => (
            <SwiperSlide key={`main-${index}`}>
              <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
                <div>
                  <img
                    className={`rounded-full min-h-80 w-80 object-cover shadow-sm border-[12px] border-[#F6A623] ${styles.borderImage}`}
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
                <div className=" text-lg space-y-4 text-justify max-w-xl">
                  <img className="w-8 mx-auto" src={Comilla} alt="Testimonio" />
                  <p className={`${styles.text}`}> {slide.description}</p>
                  <p className="font-semibold text-right text-xl text-[#F6A623]">
                    {slide.author}
                  </p>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        <section className="flex justify-end">
          <div className="flex gap-4 items-center">
            <a
              className="flex items-cente px-4 py-2 bg-white text-[#222D56] border-2 font-bold text-lg "
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lo quiero
              <img src={Focus} alt="icono" className="w-7 h-7" />
            </a>
            <a
              className="px-4 py-2 bg-[#222D56] text-white border-2 font-bold text-lg mr-5"
              href="#form-contac-us"
            >
              Más información
            </a>
          </div>
        </section>
      </section>
    </>
  );
}

export default Testimonials;
