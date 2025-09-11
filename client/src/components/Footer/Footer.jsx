import React from "react";
import "./Footer.css";
import logo from "../../../public/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-content">
          <div className="logo-footer">
            <img src={logo} alt="logo-footer" />
          </div>
          <div className="footer-info">
            <div className="footer-visitanos">
              <h2>Visítanos</h2>
              <p>Calle 79 sur # 50-165</p>
              <p>Oficinas 301 y 401 La Estrella</p>
              <p>Antioquia - Colombia</p>
            </div>
            <div className="footer-contacto">
              <h2>Llámanos o escríbenos</h2>
              <div className="email">
                <p>contactenos@</p>
                <p>fundacionantivirusparaladesercion</p>
                <p>.org</p>
              </div>
              <br />
              <p>WhatsApp: +57</p>
              <p>3173831481</p>
            </div>
            <div className="footer-redes">
              <h2>Nuestras redes sociales</h2>
              <div className="bxicon">
                <a
                  href="https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon
                    name="facebook-circle"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </a>
                <a
                  href="https://www.instagram.com/somosantivirus/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon
                    name="instagram-alt"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon
                    name="youtube"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </a>
                <a
                  href="https://www.tiktok.com/@somosantivirus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon
                    name="tiktok"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </a>
                <a
                  href="https://www.linkedin.com/company/antivirus-desercion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon
                    name="linkedin"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <p>Antivirus para la Deserción © 2024 all rights reserved</p>
          <p>Política de protección de datos</p>
        </div>
        <div className="footer-redirecion">
          {" "}
          {/* Movemos el div del botón de redirección aquí */}
          <button>
            <svg
              className="svg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Cambia el evento aquí
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
