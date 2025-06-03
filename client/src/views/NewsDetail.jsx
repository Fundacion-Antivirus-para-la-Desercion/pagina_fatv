import "./NewsDetail.css";
import { useState } from "react";
import Slider from "../../public/img_DataAnalytics/banner-DataAnalytics.webp";
import Date from "../assets/Icons/date.svg";
import Movimiento from "../../src/assets/images/views/imagesNews/2024-un-año-de-movimiento-retos-y-transformación.jpeg";
import MovimientoDos from "../../src/assets/images/views/imagesNews/movimiento-2.jpeg";
import Back from "../../src/assets/Icons/back.svg";

function NewsDetail() {
  const [socialMedia, setSocialMedia] = useState([
    {
      href: "https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d",
      name: "facebook-circle",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.instagram.com/somosantivirus/",
      name: "instagram-alt",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w",
      name: "youtube",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.tiktok.com/@somosantivirus",
      name: "tiktok",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.linkedin.com/company/antivirus-desercion/",
      name: "linkedin-square",
      type: "logo",
      color: "#ffffff",
    },
  ]);

  return (
    <>
      <div className="lg:pt-[145px]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full h-60 sm:h-80 md:h-96">
            <img
              src={Slider}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
            <h1 className="absolute inset-0 flex items-center justify-center uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
              NOTICIAS
            </h1>
            <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon"
                >
                  <box-icon
                    name={social.name}
                    type={social.type}
                    color={social.color}
                  ></box-icon>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mb-5 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-4 relative p-4 mt-6">
        <div id="content" className="p-4 border border-[#222D56] rounded-2xl">
          <img className="mr-1" src={Date} />
          <h1 className="news-detail mb-4 text-left text-[3rem] text-title font-extrabold max-md:text-3xl leading-10">
            2024: UN AÑO DE MOVIMIENTO, RETOS Y TRANSFORMACIÓN
          </h1>

          <p className="text-details text-lg mb-6">
            El 2024 fue un año de retos, preguntas, movimiento y gestión para la
            Fundación Antivirus para la Deserción, un año que nos invitó a
            repensar el camino y las formas en las que, como organización
            social, aportamos a la sociedad. En medio de un entorno desafiante
            reafirmamos nuestro compromiso por la educación y el acompañamiento
            a de miles de jóvenes en el país.
          </p>
          <img
            className="mb-2 mt-5 w-full h-auto object-cover rounded-lg shadow-md"
            src={Movimiento}
            alt=""
          />
          <p className="text-details text-lg mb-4">
            En el informe de gestión se refleja la constancia, el amor, la
            innovación y la pasión, que movieron cada una de nuestras acciones
            para cumplir nuestro propósito misional. Movilizamos conversaciones,
            campañas y alianzas visibilizando las necesidades de los jóvenes
            para no desertar, invitamos a estudiantes, tutores, docentes,
            instituciones y aliados a ser parte de una red que abraza, escucha y
            camina con ellos.
          </p>
          <p className="text-details text-lg mb-4">
            Durante este período, reflexionamos sobre la problemática, pero,
            sobre todo, nos pusimos en acción, realizando gestión de la
            permanencia en la Universidad de Antioquia y la Universidad Nacional
            en la carrera de Ingeniería de sistemas. Acompañamos los estudiantes
            becados de la Fundación Aurelio Llano Posada, Fundación Nutresa, la
            plataforma filantrópica Ver+ Beca Tech y del municipio de Itagüí;
            con el cual, también tuvimos un proceso de orientación
            sociovocacional con los jóvenes del grado 10° en 12 de sus
            Instituciones educativas públicas. Tramitamos la permanencia en los
            Bootcamps Nodo EAFIT y Código C13. Finalmente, acompañamos y
            empoderamos a las estudiantes Linieras del proceso formativo de la
            Corporación Tener Futuro.
          </p>
          <img
            className="mb-2 mt-5 w-full h-auto object-cover rounded-lg shadow-md"
            src={MovimientoDos}
            alt=""
          />
          <p className="text-details text-lg mb-6">
            Este informe es un reflejo del camino recorrido, del apoyo realizado
            y el trayecto que nos falta; es la muestra fehaciente de que cuando
            se suman esfuerzos se construye país y se cambian historias. Cada
            estudiante que logramos acompañar y cada joven que se gradúa, es una
            promesa cumplida. Así como cada aliado que se suma, hace parte de
            una educación más justa, cercana y sostenible. En el 2024, no
            hablamos solo de deserción, hablamos de permanencia, de esperanza,
            de futuro y de transformación social. Agradecemos a todos nuestros
            aliados, quienes de forma directa o indirecta apoyaron nuestro
            trabajo para construir un país más próspero, pacífico y armonioso,
            en donde los sueños cuentan y los triunfos se trabajan. A los
            estudiantes que creen en nuestro acompañamiento y nos permiten
            transitar el camino juntos. A nuestros colaboradores que día a día
            hacen posible un cambio y entregan su cinco por ciento para una
            sociedad más consciente; gracias por creer en la Fundación Antivirus
            para la Deserción y por creer que juntos podemos lograrlo.
          </p>
          <p className="text-details text-lg mb-4">
            Continuaremos en acción, con la convicción de que podemos seguir
            construyendo redes de apoyo que hacen posible los sueños de muchos
            jóvenes.
          </p>
          <a
            className="news-detail text-1xl font-bold text-[#222D56] mb-4"
            href="https://fundacionantivirus-my.sharepoint.com/personal/coordinaciontecnologiadatos_fundacionantivirusparaladesercion_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordinaciontecnologiadatos%5Ffundacionantivirusparaladesercion%5Forg%2FDocuments%2FDatos%20adjuntos%2FReporteAnual2024%5Ffinal%2Epdf&parent=%2Fpersonal%2Fcoordinaciontecnologiadatos%5Ffundacionantivirusparaladesercion%5Forg%2FDocuments%2FDatos%20adjuntos&ga=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Léelo aquí: ReporteAnual2024_final
          </a>
        </div>

        <div id="sidebar" className="p-4 lg:col-start-2">
          <div className="shadow-xl rounded-2xl sticky top-4 border border-[#222D56] p-4">
            <h3 className="news-detail mb-4 text-left text-3xl text-title font-extrabold max-md:text-2xl leading-8">
              OTROS ARTÍCULOS QUE TE PUEDEN INTERESAR
            </h3>
            <ul className="p-4">
              <li className="mb-2">
                <section className="grid grid-cols-[4fr_6fr] gap-4 items-center">
                  <div>
                    <img
                      src="https://www.fundacionantivirusparaladesercion.org/data/articles/WhatsApp%20Image%202025-05-12%20at%2010.07.13%20AM%20(1).jpeg"
                      alt="Artículo 1"
                      className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Título del Artículo 1
                    </h4>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Leer más
                    </button>
                  </div>
                </section>
              </li>
              <li className="mb-2">
                <section className="grid grid-cols-[4fr_6fr] gap-4 items-center">
                  <div>
                    <img
                      src="https://www.fundacionantivirusparaladesercion.org/data/articles/WhatsApp%20Image%202025-05-12%20at%2010.07.13%20AM%20(1).jpeg"
                      alt="Artículo 1"
                      className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Título del Artículo 1
                    </h4>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Leer más
                    </button>
                  </div>
                </section>
              </li>
              <li className="mb-2">
                <section className="grid grid-cols-[4fr_6fr] gap-4 items-center">
                  <div>
                    <img
                      src="https://www.fundacionantivirusparaladesercion.org/data/articles/WhatsApp%20Image%202025-05-12%20at%2010.07.13%20AM%20(1).jpeg"
                      alt="Artículo 1"
                      className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Título del Artículo 1
                    </h4>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Leer más
                    </button>
                  </div>
                </section>
              </li>
              <li className="mb-2">
                <section className="grid grid-cols-[4fr_6fr] gap-4 items-center">
                  <div>
                    <img
                      src="https://www.fundacionantivirusparaladesercion.org/data/articles/WhatsApp%20Image%202025-05-12%20at%2010.07.13%20AM%20(1).jpeg"
                      alt="Artículo 1"
                      className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Título del Artículo 1
                    </h4>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Leer más
                    </button>
                  </div>
                </section>
              </li>
            </ul>
          </div>
        </div>

        <section>
          <div>
            <a className="news-detail group flex items-center text-2xl font-semibold text-[#7c78b3] cursor-pointer">
              <img
                className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:-translate-x-1"
                src={Back}
                alt="Atras"
              />
              Regresar a noticias
            </a>
          </div>
        </section>
      </section>
    </>
  );
}

export default NewsDetail;
