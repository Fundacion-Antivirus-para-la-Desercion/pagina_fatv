import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function BannerView({ imagesBannerMap }) {
  const { i18n, t } = useTranslation();

  const socialMedia = [
    {
      href: "https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d",
      icon: <FaFacebook className="text-2xl text-white" />,
    },
    {
      href: "https://www.instagram.com/somosantivirus/",
      icon: <AiFillInstagram className="text-2xl text-white" />,
    },
    {
      href: "https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w",
      icon: <AiFillYoutube className="text-2xl text-white" />,
    },
    {
      href: "https://www.tiktok.com/@somosantivirus",
      icon: <FaTiktok className="text-2xl text-white" />,
    },
    {
      href: "https://www.linkedin.com/company/antivirus-desercion/",
      icon: <FaLinkedin className="text-2xl text-white" />,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full">
        <img
          src={imagesBannerMap.image}
          alt={t(imagesBannerMap.keyAlt)}
          className="w-full h-[50vh] max-h-[500px] md:h-full object-cover object-[45%_50%]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center pointer-events-none">
          <div className="space-y-2">
            <h1 className="font-impact leading-none text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-3">
              <span className="inline-block bg-[#fff] text-dark-blue px-3 py-1 rotate-[-1deg]">
                {t(imagesBannerMap.keyH1)}
              </span>
              {imagesBannerMap.keyBr && (
                <span className="block mt-2">
                  <span className="inline-block bg-[#fff] text-dark-blue px-3 py-1 rotate-[1deg]">
                    {t(imagesBannerMap.keyBr)}
                  </span>
                </span>
              )}
            </h1>
            <span className="px-6 py-2 md:py-2 bg-dark-blue text-white font-semibold text-center text-sm md:text-2xl lg:text-3xl tracking-wide rounded-full shadow-xl">
              Fundación Antivirus para la Deserción
            </span>
          </div>
        </div>
        <div className="absolute bottom-2 md:bottom-4 left-4 flex space-x-2 sm:space-x-4">
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="box-icon"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerView;
