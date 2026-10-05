import SeoHead from "@/components/SeoHead/SeoHead.jsx";
import OurAllies from "../components/our_allies/Our_allies";
import AboutUs from "../components/aboutUs/AboutUs";
import OurTeam from "../components/ourTeam/OurTeam";
import ContextData from "../components/ContextData/ContextData";
import ServicesATV from "../components/Services_ATV/Services_ATV";
import Carousel from "../components/carousel/thumbs/MainCarousel";
import DonationWelcomePopUp from "@/views/Home/components/DonationWelcomePopUp.jsx";
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
