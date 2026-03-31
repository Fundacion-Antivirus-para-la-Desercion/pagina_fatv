import { TbMovie } from "react-icons/tb";
import { MdCampaign } from "react-icons/md";

import { FaPenNib } from "react-icons/fa";

import { IoBookOutline } from "react-icons/io5";

const communicationServices = [
  {
    icon: <TbMovie />,
    span: "Producción Audiovisual",
    description:
      "Videos institucionales, documentales cortos y contenido multimedia que narra historias de transformación.",
  },
  {
    icon: <MdCampaign />,
    span: "Marketing Social",
    description:
      "Campañas estratégicas que amplifican el impacto social y generan conexiones significativas.",
  },
  {
    icon: <IoBookOutline />,
    span: "Educomunicación",
    description:
      "Contenido educativo que transforma la comunicación en herramienta de aprendizaje.",
  },
  {
    icon: <FaPenNib />,
    span: "Diseño y Branding",
    description:
      "Identidad visual coherente, memorable y con propósito a través de piezas gráficas.",
  },
  {
    icon: <TbMovie />,
    span: "Gestión de Redes",
    description:
      "Estrategias de contenido digital que generan comunidad y visibilizan nuestro trabajo.",
  },
];



function Services() {
  return (
    <>
      <section className="bg-dark-blue p-5">
        <div className="text-center mt-10">
          <span className="text-sm md:text-lg text-primary-yellow font-impact">
            QUÉ HACEMOS
          </span>
          <h3 className="text-3xl md:text-5xl text-white font-impact">
            SERVICIOS DEL ÁREA
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto mt-5 md:mt-10">
          {communicationServices.map((service, index) => (
            <div
              key={index}
              className="flex items-start bg-[#ffffff10] rounded-xl border border-[#ffffff40] p-6 shadow-md transform hover:scale-105 transition-all duration-500 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="bg-[#ffb90838] text-primary-yellow text-2xl rounded-xl p-3 flex items-center justify-center mr-4">
                {service.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {service.span}
                </h4>
                <p className="text-base md:text-lg text-[#ffffff7b]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}

export default Services;
