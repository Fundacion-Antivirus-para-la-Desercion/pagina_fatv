import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Btns from "../btns-wompi-and-donation/Btns";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { slideFromTopBody } from "../motion/constants/Animations.js";
import { useRoute } from "../../routes/useRoute";

function Layout() {
  // Se depende de `routeKey` y no del pathname: la key lógica es la misma en
  // los dos idiomas (atvConnect vale para /es/atv-conecta y /en/atv-connect),
  // así cambiar de idioma no remonta la sección ni reproduce la animación de
  // entrada, y tampoco pierde la posición de scroll. Navegar entre páginas
  // distintas sí cambia la key, que es cuando la animación tiene sentido.
  const { routeKey } = useRoute();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [routeKey]);
  return (
    <>
      <Header />
      <div style={{ overflow: "hidden" }}>
        <motion.section key={routeKey} {...slideFromTopBody()}>
          <Outlet />
        </motion.section>
      </div>
      <Footer />
      <Btns />
    </>
  );
}

export default Layout;
