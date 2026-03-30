import React from "react";
import RunningBanner from "../../../components/RunningBanner/RunningBanner";

function CommunicationSkills() {
  const skills = [
    "FOTOGRAFÍA PROFESIONAL",
    "DISEÑO GRÁFICO",
    "MOTION GRAPHICS",
    "BRANDING",
    "MARKETING SOCIAL",
    "GESTIÓN DE REDES",
    "STORYTELLING",
    "EDUCOMUNICACIÓN",
    "ESTRATEGIA DIGITAL",
    "EDICIÓN DE VIDEO",
  ];

  return (
    <div className="bg-primary-purple text-sm md:text-base text-white py-5 overflow-hidden w-full">
      <RunningBanner items={skills} speed={40} />
    </div>
  );
}

export default CommunicationSkills;
