import FoundationATV from "./FoundationAtv/FoundationATV";
import OrganizationalStructure from "./OrganizationalStructure/OrganizationalStructure";
import EthicsTransparencyCard from "../../components/cards/EthicsTransparencyCard";

function Foundation() {
  return (
    <div className="Foundation-container lg:pt-[145px]">
      <FoundationATV />
      <OrganizationalStructure />
      <EthicsTransparencyCard />
    </div>
  );
}

export default Foundation;
