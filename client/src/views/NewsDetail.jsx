import "./NewsDetail.css";
import { useState } from "react";
import Slider from "../../public/img_DataAnalytics/banner-DataAnalytics.webp";
import Date from "../assets/Icons/date.svg";

import Back from "../../src/assets/Icons/back.svg";
import OtherNews from "../components/other-news/OtherNews";
import { Link, useLocation } from "react-router-dom";

function NewsDetail() {
  const location = useLocation();
  const news = location.state?.news;

  if (!news) {
    return (
      <div className="p-10 text-2xl">No hay información de la noticia.</div>
    );
  }

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
          <p className="flex tracking-[0.3rem] font-light m-2 text-[#33526d]">
            <img className="mr-1" src={Date} />
            NOTICIAS
          </p>
          <h1 className="news-detail mb-4 text-left text-[3rem] text-title font-extrabold max-md:text-3xl leading-10">
            {news.newDetailContent.title}
          </h1>
          {news.newDetailContent.content.map((content, index) => {
            if (content.type === "parrafo") {
              return (
                <p key={index} className="text-details text-lg mb-6 mt-5">
                  {content.value}
                </p>
              );
            } else if (content.type === "img") {
              return (
                <img
                  key={index}
                  src={content.value}
                  alt=""
                  className="w-[600px] h-auto mx-auto object-cover rounded-lg shadow-md mb-2"
                />
              );
            } else {
              return <a href={content.url}>{content.value}</a>;
            }
          })}
        </div>

        <OtherNews />

        <section>
          <div>
            <Link
              to="/News"
              className="group flex items-center text-2xl text-[#7c78b3] cursor-pointer font-semibold"
            >
              <img
                className="ml-3 relative top-1 transform transition-transform duration-300 group-hover:-translate-x-1"
                src={Back}
                alt="Atras"
              />
              Regresar a noticias
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default NewsDetail;
