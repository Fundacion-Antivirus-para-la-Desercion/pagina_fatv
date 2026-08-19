import SeoHead from "../../components/seo/SeoHead";
import FoundationATV from "./FoundationAtv/FoundationATV";
import OrganizationalStructure from "./OrganizationalStructure/OrganizationalStructure";
import EthicsTransparency from "./EthicsTransparency/EthicsTransparency";

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
