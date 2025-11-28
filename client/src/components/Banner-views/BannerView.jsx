import useImageByLanguage from "../../hooks/useImageByLanguage";

function BannerView({ imagesBannerMap }) {
  const bannerByLanguage = useImageByLanguage({
    enImage: imagesBannerMap.enImage,
    esImage: imagesBannerMap.esImage,
    keyTitle: imagesBannerMap.keyTitle,
  });

  const socialMedia = [
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
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full">
        <img
          src={bannerByLanguage.src}
          alt={bannerByLanguage.alt}
          className="w-full h-[20vh] max-h-[400px] md:h-full object-cover object-[30%_50%]"
        />
        <div className="absolute inset-0"></div>
        <div className="absolute bottom-0 md:bottom-4 left-4 flex space-x-2 sm:space-x-4">
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
  );
}

export default BannerView;
