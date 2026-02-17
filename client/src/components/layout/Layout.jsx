import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Btns from "../btns-wompi-and-donation/Btns";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Btns />
    </>
  );
}

export default Layout;
