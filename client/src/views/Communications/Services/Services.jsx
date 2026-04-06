import { TbMovie } from "react-icons/tb";
import { MdCampaign } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { MdShare } from "react-icons/md";

const communicationServices = [
  {
    icon: <TbMovie />,
    title: "Producción Audiovisual",
    description:
      "Videos institucionales, documentales cortos y contenido multimedia que narra historias de transformación.",
  },
  {
    icon: <MdCampaign />,
    title: "Marketing Social",
    description:
      "Campañas estratégicas que amplifican el impacto social y generan conexiones significativas.",
  },
  {
    icon: <IoBookOutline />,
    title: "Educomunicación",
    description:
      "Contenido educativo que transforma la comunicación en herramienta de aprendizaje.",
  },
  {
    icon: <FaPenNib />,
    title: "Diseño y Branding",
    description:
      "Identidad visual coherente, memorable y con propósito a través de piezas gráficas.",
  },
  {
    icon: <MdShare />,
    title: "Gestión de Redes",
    description:
      "Estrategias de contenido digital que generan comunidad y visibilizan nuestro trabajo.",
  },
];

function Services() {
  return (
    <>
      <section className="bg-dark-blue px-5 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-sm md:text-base uppercase tracking-widest text-primary-yellow font-impact">
            Qué hacemos
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-impact mt-2">
            Servicios del Área
          </h3>
        </div>
        <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
          {communicationServices.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2.5 md:p-3">
              <div className="group flex items-start bg-[#ffffff22] backdrop-blur-sm rounded-2xl border border-white/20 p-5 md:p-6 h-full hover:border-primary-yellow hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="shrink-0 bg-primary-yellow/15 text-primary-yellow text-xl md:text-2xl rounded-xl w-11 h-11 md:w-12 md:h-12 flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-base md:text-lg text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
