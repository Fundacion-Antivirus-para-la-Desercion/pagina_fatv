import React from "react";
import RunningBanner from "../../../components/RunningBanner/RunningBanner";
import { useTranslation } from "react-i18next";

function CommunicationSkills() {
  const { t } = useTranslation();
  const skills = [
    t("communications.communicationsSkills.one"),
    t("communications.communicationsSkills.two"),
    t("communications.communicationsSkills.three"),
    t("communications.communicationsSkills.four"),
    t("communications.communicationsSkills.five"),
    t("communications.communicationsSkills.six"),
    t("communications.communicationsSkills.seven"),
    t("communications.communicationsSkills.eight"),
    t("communications.communicationsSkills.nine"),
    t("communications.communicationsSkills.ten"),
  ];

  return (
    <div className="bg-primary-purple text-sm md:text-base text-white py-5 overflow-hidden w-full">
      <RunningBanner items={skills} speed={40} />
    </div>
  );
}

export default CommunicationSkills;
