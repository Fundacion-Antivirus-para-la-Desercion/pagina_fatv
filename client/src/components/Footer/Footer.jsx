import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import logo from "../../../public/logo.png";
import WhatsAppRedirect from "../whatsAppRedirect/WhatsAppRedirect";

function Footer() {
  const { t } = useTranslation("translation");
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollBtn(window.scrollY > 1000);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      href: "https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d",
      icon: <FaFacebook className="text-2xl text-white" />,
      labelKey: "footer.social_links.facebook",
    },
    {
      href: "https://www.instagram.com/somosantivirus/",
      icon: <AiFillInstagram className="text-2xl text-white" />,
      labelKey: "footer.social_links.instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w",
      icon: <AiFillYoutube className="text-2xl text-white" />,
      labelKey: "footer.social_links.youtube",
    },
    {
      href: "https://www.tiktok.com/@somosantivirus",
      icon: <FaTiktok className="text-2xl text-white" />,
      labelKey: "footer.social_links.tiktok",
    },
    {
      href: "https://www.linkedin.com/company/antivirus-desercion/",
      icon: <FaLinkedin className="text-2xl text-white" />,
      labelKey: "footer.social_links.linkedin",
    },
  ];

  return (
    <div className="footer-container">
      <footer className="bg-dark-blue w-[100%] text-white">
        <div className="footer-content">
          <div className="logo-footer">
            <img src={logo} alt={t("footer.logo_alt")} loading="lazy" />
          </div>
          <div className="footer-info">
            <div className="footer-visitanos">
              <h2 className="font-impact">{t("footer.visitUs")}</h2>
              <a
                href="https://www.google.com/maps/place/Fundacion+Antivirus+para+la+Desercion/@6.1546087,-75.6316542,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468164563dd5f3:0xe4f4c0dbfe0be02e!8m2!3d6.1546034!4d-75.6290793!16s%2Fg%2F11vf1_zb9j?hl=es&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.visitUs")}
                className="hover:text-primary-yellow transition-colors"
              >
                <p>{t("footer.address1")}</p>
                <p>{t("footer.address2")}</p>
                <p>{t("footer.address3")}</p>
              </a>
            </div>
            <div className="footer-contacto">
              <h2 className="font-impact">{t("footer.contact")}</h2>
              <address className="not-italic">
                <div className="email">
                  <a
                    href={`mailto:${t("footer.contactEmail")}`}
                    aria-label={t("footer.contactEmail")}
                    className="hover:text-primary-yellow transition-colors"
                  >
                    {t("footer.contactEmail")}
                  </a>
                </div>
                <br />
                <a
                  href={WhatsAppRedirect()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-primary-yellow transition-colors"
                >
                  {t("footer.contactWhatsapp")}
                </a>
              </address>
            </div>
            <div className="footer-redes">
              <h2 className="font-impact">{t("footer.socialNetworks")}</h2>
              <div className="mr-10 flex flex-wrap space-x-2 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.labelKey}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(social.labelKey)}
                    title={t(social.labelKey)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.dataProtection")}</p>
        </div>
        <div className={`footer-redirecion ${showScrollBtn ? "is-visible" : ""} bg-brand-blue-50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95`}>
          <button
            type="button"
            className="btn-up"
            aria-label={t("footer.scroll_to_top")}
            title={t("footer.scroll_to_top")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp className="text-dark-blue text-2xl md:text-3xl" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;