import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import logo from "../../../public/logo.png";

function Footer() {
  const { t } = useTranslation("translation");

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
      <footer className="bg-dark-blue">
        <div className="footer-content">
          <div className="logo-footer">
            <img src={logo} alt={t("footer.logo_alt")} loading="lazy" />
          </div>
          <div className="footer-info">
            <div className="footer-visitanos">
              <h2 className="font-impact">{t("footer.visitUs")}</h2>
              <p>{t("footer.address1")}</p>
              <p>{t("footer.address2")}</p>
              <p>{t("footer.address3")}</p>
            </div>
            <div className="footer-contacto">
              <h2 className="font-impact">{t("footer.contact")}</h2>
              <div className="email">
                <p>{t("footer.contactEmail")}</p>
              </div>
              <br />
              <p>{t("footer.contactWhatsapp")}</p>
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
        <div className="footer-redirecion">
          <button
            type="button"
            className="btn-up"
            aria-label={t("footer.scroll_to_top")}
            title={t("footer.scroll_to_top")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="63"
              viewBox="0 0 39 63"
              fill="none"
            >
              <path
                d="M36.799 47.1034C34.8356 49.0209 33.0599 50.7508 31.1799 52.5891C28.8539 50.2006 26.4529 47.737 24.056 45.2735L23.5475 45.4652V62.806H15.6066V45.1901C12.9179 47.9454 10.5252 50.3965 8.0867 52.8976C6.05667 50.7091 4.35178 48.8625 2.33008 46.6866C4.23089 44.8775 6.39015 42.8641 8.49104 40.7966C11.2047 38.1287 13.8475 35.3901 16.5778 32.7389C18.4203 30.9507 20.5003 30.8673 22.2886 32.6222C27.124 37.3659 31.8844 42.1888 36.799 47.1076V47.1034Z"
                fill="#7C78B3"
              />
              <path
                d="M0 0.00805664H7.57824V7.67383H0V0.00805664Z"
                fill="#7C78B3"
              />
              <path
                d="M31.397 7.61159V0H39.0002V7.61159H31.397Z"
                fill="#7C78B3"
              />
              <path
                d="M23.2433 7.66156H15.7109V0.0666504H23.2433V7.66156Z"
                fill="#7C78B3"
              />
              <path
                d="M15.6777 23.4015V15.8108H23.3143V23.4015H15.6777Z"
                fill="#7C78B3"
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
