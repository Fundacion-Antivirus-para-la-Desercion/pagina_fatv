import SeoHead from "@/components/SeoHead/SeoHead.jsx";
import OurAllies from "./components/OurAllies.jsx";
import AboutUs from "./components/AboutUs.jsx";
import OurTeam from "./components/OurTeam.jsx";
import ContextData from "./components/ContextData/ContextData.jsx";
import ServicesATV from "./components/ServicesATV/ServicesATV.jsx";
import Carousel from "./components/MainCarousel/MainCarousel.jsx";
import DonationWelcomePopUp from "./components/DonationWelcomePopUp.jsx";
function Home() {
  return (
    <div className="lg:pt-[145px]">
      <SeoHead
        routeKey="home"
        descriptionKey="home.metaDescription"
      />
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
