import { useTranslation } from "react-i18next";
import { MdOutlineAttachMoney, MdPayment } from "react-icons/md";
import { BiCreditCardAlt } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineBank } from "react-icons/ai";

import WhatsAppRedirect from "@/hooks/WhatsAppRedirect.js";

const base = "provocacion.information.cards.four";

// Keys de i18n dentro de "cards.four".
const PAYMENT_METHODS = [
  { key: "one", Icon: AiOutlineBank },
  { key: "two", Icon: MdPayment },
  { key: "three", Icon: BiCreditCardAlt },
];

function PaymentMethods() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col rounded-2xl bg-primary-ice px-5 pb-4 pt-3">
      <div className="flex items-center gap-3 mb-3">
        <IoWalletOutline className="size-10 flex-shrink-0 rounded-full bg-brand-blue-50 p-2 text-dark-blue" />
        <h4 className="text-xl font-extrabold text-dark-blue">
          {t(`${base}.title`)}
        </h4>
      </div>
      <ul className="ml-[19px] flex flex-col gap-3 border-l-2 border-primary-mediumblue/40 pl-5">
        {PAYMENT_METHODS.map(({ key, Icon }) => (
          <li key={key} className="flex items-center gap-3 text-base text-dark-blue">
            <Icon className="flex-shrink-0 text-dark-blue" />
            <span>{t(`${base}.${key}`)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriceBox() {
  const { t } = useTranslation();
  // "450.000 + IVA" → amount: "450.000", suffix: ["+", "IVA"]
  const [amount, ...suffix] = t(`${base}.price`).split(" ");

  return (
    <div className="flex items-start gap-2.5 rounded-3xl bg-primary-ice px-4 py-2">
      <MdOutlineAttachMoney className="mt-0.5 size-8 flex-shrink-0 rounded-full p-[4px] text-dark-blue bg-white" />
      <div className="flex flex-col">
        <h4 className="text-xl font-extrabold leading-tight text-dark-blue">
          {t(`${base}.title_two`)}
        </h4>
        <p className="mt-[1px] leading-[20px] text-blue-base">
          <span className="text-base">{amount}</span>{" "}
          <span className="text-base">{suffix.join(" ")}</span>
        </p>
        <span className="mt-1 text-xl text-dark-blue">
          $ {t(`${base}.final_price`)}{" "}
          <span className="text-xs font-semibold tracking-wide text-dark-blue">
            COP
          </span>
        </span>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  const { t } = useTranslation();

  return (
    <div className="mt-1 flex items-center gap-2 xl:ml-auto xl:mr-4 p-3 justify-center">
      <a
        className="group flex items-center justify-center gap-2 rounded-3xl bg-primary-yellow py-3 px-8 xl:px-5 xl:py-2 font-renogare text-base text-brand-blue-300"
        href={WhatsAppRedirect(t("whatsappMessage.provocation"))}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("provocacion.information.button_whatsapp")}
        <FaArrowRight className="size-5 group-hover:translate-x-1 duration-300" />
      </a>
      {/* Tres rayitas amarillas decorativas al lado del botón */}
      <div className="flex flex-col gap-3" aria-hidden="true">
        <span className="h-[4px] w-4 -rotate-[30deg] rounded-full bg-primary-yellow" />
        <span className="h-[4px] w-4 -rotate-[5deg] rounded-full bg-primary-yellow" />
        <span className="h-[4px] w-4 rotate-[25deg] rounded-full bg-primary-yellow" />
      </div>
    </div>
  );
}

// Panel derecho del carrusel: es igual en todos los slides.
function PaymentInfo() {
  return (
    <div className="flex flex-col gap-2">
      <PaymentMethods />
      <PriceBox />
      <WhatsAppButton />
    </div>
  );
}

export default PaymentInfo;
