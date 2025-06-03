import React from "react";
import "./News.css";
import imgBannerATV from "../../../public/img_DataAnalytics/banner-DataAnalytics.webp";
import { useState, useEffect } from "react";
import Movimiento from "../../../src/assets/images/views/imagesNews/2024-un-año-de-movimiento-retos-y-transformación.jpeg";
import Renovacion from "../../../src/assets/images/views/imagesNews/RUT.jpg";
import Desercion from "../../../src/assets/images/views/imagesNews/desercion-universitaria.gif";
import Conversatorio from "../../../src/assets/images/views/imagesNews/conversatorio-universidad-envigado.jpg";
import Participacion from "../../../src/assets/images/views/imagesNews/participación-XI-congreso-latinoamericano.jpg";
import Ponencia from "../../../src/assets/images/views/imagesNews/ponencia-en-congreso-internacional-de-omunicaciones.jpg";
import ValleDelSofware from "../../../src/assets/images/views/imagesNews/medellín-valle-del-software-MVS.jpg";
import Mencion from "../../../src/assets/images/views/imagesNews/mención-honorífica.jpg";
import EncuentroColaboradores from "../../../src/assets/images/views/imagesNews/ENCUENTRO.jpeg";
import VisionCompartida from "../../../src/assets/images/views/imagesNews/vision-compartida.jpeg";
import EstadoEducacion from "../../../src/assets/images/views/imagesNews/estado-de-la-educación-en-antioquia.jpeg";
import DiseñoInterior from "../../../src/assets/images/views/imagesNews/nuestro-diseño-interior.jpeg";
import NuestraInvestigacion from "../../../src/assets/images/views/imagesNews/nuestra-investigación-de-mercados.webp";
import LlevandoEducacion from "../../../src/assets/images/views/imagesNews/llevando-la-educación-a-nuevos-horizontes -colombia.webp";
import Date from "../../../src/assets/Icons/date.svg";
import Arrow from "../../../src/assets/Icons/arrow.svg";

function News() {
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

  const [proyectsContent, setProyectsContent] = useState([
    {
      title: "Universidades",
      img: "https://estaticos.elcolombiano.com/binrepository/580x365/0c0/0d0/none/11101/CFOY/udea_38598473_20210923105540.jpg",
      name: "universidades",
      href: "/Universidades",
    },
    {
      title: "BootCamps",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sSUWjF6jkDN3m9Et_JQTunBm1dYY0NoKeA&s",
      name: "bootcamps",
      href: "/BootCamps",
    },
    {
      title: "Colegios",
      img: "https://bogota.gov.co/sites/default/files/styles/1050px/public/2023-05/laureldeceraokpg.jpeg",
      name: "colegios",
      href: "/Colegios",
    },
    {
      title: "Becarios",
      img: "https://empresas.infoempleo.com/hrtrends/media/2023/02/Empresa-que-decide-contratar-a-becarios.jpg",
      name: "Becarios",
      href: "/Becarios",
    },
  ]);

  const [university, setUniversity] = useState([
    {
      name: "UDEA",
      img: "logo",
      href: "",
    },
  ]);
  return (
    <>
      <div className="lg:pt-[145px]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full h-60 sm:h-80 md:h-96">
            <img
              src={imgBannerATV}
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

      <section className="noticias-content p-24">
        <div>
          <img
            className="mb-3 aspect-ratio"
            src={Movimiento}
            alt="2024: Un año de movimiento, retos y transformación"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            2024: UN AÑO DE MOVIMIENTO, RETOS Y TRANSFORMACIÓN
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={Renovacion}
            alt="Renovación del régimen especial por la transparencia"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            RENOVACIÓN DEL RÉGIMEN ESPECIAL POR LA TRANSPARENCIA
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={Desercion}
            alt="La deserción universitaria"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            LA DESERCIÓN UNIVERSITARIA
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={Conversatorio}
            alt="Conversatorio en universidad de Envigado"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            CONVERSATORIO EN UNIVERSIDAD DE ENVIADO
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={Participacion}
            alt="Participación en el XI congreso latino americano sobre el abandono en educación superior"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            PARTICIPACIÓN EN EL XI CONGRESO LATINOAMERICANO SOBRE ABANDONO EN
            EDUCACIÓN SUPERIOR
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={Ponencia}
            alt="Ponencia en congreso internacional de comunicaciones"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            PONENCIA EN CONGRESO INTERNACIONAL DE COMUNICACIONES
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={ValleDelSofware}
            alt="Medellín valle del software"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            MEDELLÍN VALLE DEL SOFTWARE-MVS
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={Mencion}
            alt="Recibimos mención honorífica"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            RECIBIMOS MENCIÓN HONORÍFICA
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={EncuentroColaboradores}
            alt="Encuentro con colaboradores FATV"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            ENCUENTRO CON COLABORADORES FATV
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={VisionCompartida}
            alt="Visión compartida"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            VISIÓN COMPARTIDA
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={EstadoEducacion}
            alt="Estado de la educación en Antioquia"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            ESTADO DE LA EDUCACIÓN EN ANTIOQUIA
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={DiseñoInterior}
            alt="Nuestro diseño interior"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            ¡NUESTRO DISEÑO INTERIOR!
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={NuestraInvestigacion}
            alt="Nuestra investigación de mercados"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            NUESTRA INVESTIGACIÓN DE MERCADOS
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={LlevandoEducacion}
            alt="Llevando la educación a nuevos horizontes en Colombia"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            LLEVANDO LA EDUCACIÓN A NUEVOS HORIZONTES EN COLOMBIA
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>

        <div>
          <img
            className="mb-3 aspect-ratio"
            src={EncuentroColaboradores}
            alt="La importacia de los datos para acabar con la deserción"
          />
          <p className="flex tracking-[0.3rem] font-light">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <p className="mb-4 text-left text-[2.5rem] text-title font-extrabold max-md:text-3xl leading-9">
            LA IMPORTANCIA DE LOS DATOS PARA ACABAR CON LA DESERCIÓN
          </p>
          <hr className="mb-3" />
          <a className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer">
            Leer más
            <img
              className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:translate-x-1"
              src={Arrow}
              alt="Ver más"
            />
          </a>
        </div>
      </section>
    </>
  );
}
export default News;
