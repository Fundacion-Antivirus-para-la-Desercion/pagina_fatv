import FoundationATV from "./FoundationAtv/FoundationATV";
import OrganizationalStructure from "./OrganizationalStructure/OrganizationalStructure";
import EthicsTransparencyCard from "../../components/cards/EthicsTransparencyCard";
import EthicsTransparency from "./EthicsTransparency/EthicsTransparency";

function Foundation() {
  return (
    <div className="Foundation-container lg:pt-[145px]">
      <FoundationATV />
      <OrganizationalStructure />
      {/* <EthicsTransparencyCard /> */}
      <EthicsTransparency />
    </div>
  );
}

export default Foundation;
