import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import FoundationATV from "./FoundationAtv/FoundationATV";
import OrganizationalStructure from "./OrganizationalStructure/OrganizationalStructure";
import EthicsTransparency from "./EthicsTransparency/EthicsTransparency";

function Foundation() {
  const { t } = useTranslation();
  return (
    <div className="Foundation-container lg:pt-[145px]">
      <Helmet>
        <title>{t("foundation.banner.h1")} | Fundación Antivirus para la Deserción</title>
        <meta name="description" content={t("foundation.metaDescription")} />
      </Helmet>
      <FoundationATV />
      <OrganizationalStructure />
      <EthicsTransparency />
    </div>
  );
}

export default Foundation;
