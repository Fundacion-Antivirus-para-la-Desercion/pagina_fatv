import { useTranslation } from "react-i18next";

import CardsCarousel from "../carousel/cards/CardsCarousel.jsx";
import AudienceSlide from "./AudienceSlide.jsx";
import SkillsSlide from "./SkillsSlide.jsx";
import ServicesSlide from "./ServicesSlide.jsx";
import PaymentInfo from "./PaymentInfo.jsx";

// Sección "Información" de ProVocación.
// Cada slide le dice al carrusel qué título mostrar a la izquierda (`title`,
// `description` opcional) y qué contenido mostrar en el centro (`content`).
// El panel derecho (`aside`) es el mismo para todos los slides.
function Information() {
  const { t } = useTranslation();
  const base = "provocacion.information.cards";

  const slides = [
    {
      id: "audience",
      title: t(`${base}.one.title`),
      description: t(`${base}.one.description`),
      singleLine: true,
      content: <AudienceSlide />,
    },
    {
      id: "capabilities",
      title: t(`${base}.two.title`),
      description: t(`${base}.two.description`),
      content: <SkillsSlide />,
    },
    {
      id: "services",
      title: t(`${base}.three.title`),
      description: t(`${base}.three.description`),
      content: <ServicesSlide />,
    },
  ];

  return <CardsCarousel slides={slides} aside={<PaymentInfo />} />;
}

export default Information;
