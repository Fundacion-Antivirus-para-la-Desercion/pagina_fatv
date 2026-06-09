import FoundationATV from "./FoundationAtv/FoundationATV";
import OrganizationalStructure from "./OrganizationalStructure/OrganizationalStructure";
import EthicsTransparency from "./EthicsTransparency/EthicsTransparency";

function Foundation() {
  return (
    <div className="Foundation-container lg:pt-[145px]">
      <FoundationATV />
      <OrganizationalStructure />
      <EthicsTransparency />
    </div>
  );
}

export default Foundation;
