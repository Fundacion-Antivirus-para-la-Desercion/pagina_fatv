import { useTranslation } from "react-i18next";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaPersonCircleQuestion } from "react-icons/fa6";

import IconItem from "./IconItem.jsx";

// Cada ítem es una pregunta + su respuesta (keys de i18n dentro de "cards.one").
const FIRST_GROUP = [
  { question: "questionOne", answer: "answerOne", Icon: PiStudentFill },
];

const SECOND_GROUP = [
  { question: "questionTwo", answer: "answerTwo", Icon: MdOutlineAccessTime },
  {
    question: "questionThree",
    answer: "answerThree",
    Icon: FaPersonCircleQuestion,
  },
];

// Slide 1: "Dirigido a".
function AudienceSlide() {
  const { t } = useTranslation();
  const base = "provocacion.information.cards.one";

  const renderItem = ({ question, answer, Icon }) => (
    <IconItem key={question} Icon={Icon} className="items-start gap-[18px]">
      <div className="text-base text-blue-base leading-[17px]">
        <strong className="mb-1 text-lg block text-dark-blue">
          {t(`${base}.${question}`)}
        </strong>
        <p>{t(`${base}.${answer}`)}</p>
      </div>
    </IconItem>
  );

  // Son dos listas a propósito: entre ellas no hay espacio (gap). Si se unen en
  // una sola <ul> aparece un espacio de 20px entre el primer y el segundo ítem.
  return (
    <div className="flex h-full flex-col justify-center p-5">
      <ul className="flex flex-col gap-5">{FIRST_GROUP.map(renderItem)}</ul>
      <ul className="flex flex-col gap-5">{SECOND_GROUP.map(renderItem)}</ul>
    </div>
  );
}

export default AudienceSlide;
