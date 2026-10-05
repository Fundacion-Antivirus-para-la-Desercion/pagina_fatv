import { useTranslation } from "react-i18next";
import {
  FaUsers,
  FaUser,
  FaLaptop,
  FaBolt,
  FaExchangeAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

import IconItem from "./IconItem.jsx";

const LEFT_COLUMN = [
  { key: "one", Icon: FaUsers },
  { key: "two", Icon: FaUser },
  { key: "three", Icon: FaLaptop },
  { key: "four", Icon: FaBolt },
];

const RIGHT_COLUMN = [
  { key: "five", Icon: FaExchangeAlt },
  { key: "six", Icon: FaWhatsapp },
  { key: "seven", Icon: TbCertificate },
];

function ServicesSlide() {
  const { t } = useTranslation();
  const base = "provocacion.information.cards.three.listServices";

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ul className="flex flex-col gap-5">
          {LEFT_COLUMN.map(({ key, Icon }) => (
            <IconItem key={key} Icon={Icon} className="items-center gap-[18px]">
              <span className="text-base leading-snug">{t(`${base}.${key}`)}</span>
            </IconItem>
          ))}
        </ul>

        <ul className="flex flex-col gap-5">
          {RIGHT_COLUMN.map(({ key, Icon }) => (
            <IconItem key={key} Icon={Icon} className="items-center gap-[18px]">
              <span className="text-base leading-snug">{t(`${base}.${key}`)}</span>
            </IconItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesSlide;
