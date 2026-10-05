import SeoHead from "@/components/SeoHead/SeoHead.jsx";
import FoundationATV from "./components/FoundationATV/FoundationATV.jsx";
import OrganizationalStructure from "./components/OrganizationalStructure/OrganizationalStructure.jsx";
import EthicsTransparency from "./components/EthicsTransparency/EthicsTransparency.jsx";

function Foundation() {
  return (
    <div className="Foundation-container lg:pt-[145px]">
      <SeoHead
        routeKey="foundation"
        titleKey="foundation.banner.h1"
        descriptionKey="foundation.metaDescription"
      />
      <FoundationATV />
      <OrganizationalStructure />
      <EthicsTransparency />
    </div>
  );
}

export default Foundation;
