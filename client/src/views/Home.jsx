import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import OurAllies from "../components/our_allies/Our_allies";
import AboutUs from "../components/aboutUs/AboutUs";
import OurTeam from "../components/ourTeam/OurTeam";
import ContextData from "../components/ContextData/ContextData";
import ServicesATV from "../components/Services_ATV/Services_ATV";
import Carousel from "../components/carousel/thumbs/MainCarousel";
import DonationWelcomePopUp from "../components/modal/DonationWelcomePopUp";
function Home() {
  const { t } = useTranslation();
  return (
    <div className="lg:pt-[145px]">
      <Helmet>
        <title>{t("home.carousel.slides.slide1.title")} | Fundación Antivirus para la Deserción</title>
        <meta name="description" content={t("home.metaDescription")} />
      </Helmet>
      <DonationWelcomePopUp />
      <Carousel />
      <AboutUs />
      <ContextData />
      <OurAllies />
      <ServicesATV />
      <OurTeam />
    </div>
  );
}

export default Home;
