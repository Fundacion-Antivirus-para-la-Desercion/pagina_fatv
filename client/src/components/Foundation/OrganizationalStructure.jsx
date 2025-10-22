import JaviSonrie from "../../../src/assets/images/views/javi/javi-senala.webp";
import style from "./OrganizationalStructure.module.css";
import { useTranslation } from "react-i18next";

function OrganizationalStructure() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative grid grid-cols-[15%,85%] mb-10 mt-20">
        <div>
          <img
            className="hidden md:block md:h-[550px] ml-2 bottom-0 absolute z-10"
            src={JaviSonrie}
            alt="Javi Sonrie"
          />
        </div>
        <section className="grid grid-cols-1 relative md:grid-cols-2 max-w-[1000px] m-5 mx-auto items-center">
          <div className={`w-full ${style.puzzlePieceOne}`}>
            <div className="p-10 m-2">
              <p>
                <small className="text-[#222D56]  text-base leading-[1.533] tracking-[0.3em] uppercase">
                  {t("foundation.foundationATV.founders.subtitle")}
                </small>
              </p>
              <h5 className="font-impact uppercase text-[#222D56] text-4xl leading-[0.917] mb-[10px]">
                {t("foundation.foundationATV.founders.title")}
              </h5>

              <div className="lg:columns-2 gap-[15px] break-inside-avoid">
                <p className="w-full relative block text-[#222D56] text-left mb-[15px] text-base break-inside-avoid">
                  Carlos
                  <strong className="text-inherit block">
                    Vásquez Restrepo
                  </strong>
                </p>
                <p className="w-full relative block text-[#222D56] text-left mb-[15px] text-base break-inside-avoid">
                  Paulina
                  <strong className="text-inherit block">Tamayo Mejía</strong>
                </p>
                <p className="w-full relative block text-[#222D56] text-left mb-[15px] text-basebreak-inside-avoid">
                  Víctor Manuel
                  <strong className="text-inherit block">
                    Valencia Martínez
                  </strong>
                </p>
                <p className="w-full relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
                  Luis Fernando
                  <strong className="text-inherit block">González Urán</strong>
                </p>
                <p className="w-full relative block text-[#222D56] text-left mb-[15px] text-base break-inside-avoid">
                  Andrea
                  <strong className="text-inherit block">
                    Jaramillo Ramírez
                  </strong>
                </p>
                <p className="w-full relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
                  Laura
                  <strong className="text-inherit block">Calle Escobar</strong>
                </p>
                <p className="w-full relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
                  León Felipe
                  <strong className="text-inherit block">
                    Hernández López
                  </strong>
                </p>
                <p className="w-full z-10 relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
                  Aida
                  <strong className="text-inherit block">Orduz Quijano</strong>
                </p>
              </div>
            </div>
          </div>

          <div className={`w-full ${style.puzzlePieceTwo}`}>
            <div className="p-10 m-2">
              <p>
                <small className="text-white text-base leading-[1.533] tracking-[0.3em] uppercase">
                  {t("foundation.foundationATV.board_directors.subtitle")}
                </small>
              </p>
              <h5 className="font-impact uppercase text-white text-4xl leading-[0.917] mb-[10px]">
                {t("foundation.foundationATV.board_directors.title")}
              </h5>

              <div className="lg:columns-2 gap-[15px] break-inside-avoid mt-3">
                <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                  Carlos Vásquez Restrepo
                  <strong className="text-inherit block">
                    {t(
                      "foundation.foundationATV.board_directors.positions.president"
                    )}
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                  Luis Fernando Sánchez Hurtado
                  <strong className="text-inherit block">
                    {t(
                      "foundation.foundationATV.board_directors.positions.vicepresident"
                    )}
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                  David Santiago Botero Rodríguez
                  <strong className="text-inherit block">
                    {t(
                      "foundation.foundationATV.board_directors.positions.second_representative"
                    )}
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                  Víctor Manuel Valencia Martínez
                  <strong className="text-inherit block">
                    {t(
                      "foundation.foundationATV.board_directors.positions.subdirector"
                    )}
                  </strong>
                </p>
                <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                  Luis Fernando
                  <strong className="text-inherit block">González Urán</strong>
                </p>
              </div>
            </div>
          </div>

          <div className={`w-full ${style.puzzlePieceThree}`}>
            <div className="p-10 m-2">
              <p>
                <small className="text-white text-base leading-[1.533] tracking-[0.3em] uppercase">
                  {t("foundation.foundationATV.fiscal_reviewer.subtitle")}
                </small>
              </p>
              <h5 className="font-impact text-white uppercase text-4xl leading-[0.917] mb-[10px]">
                {t("foundation.foundationATV.fiscal_reviewer.title")}
              </h5>
              <p className="w-full relative block text-white text-left mb-[15px] text-sm break-inside-avoid">
                Orlando
                <strong> Gaviria Flórez</strong>
              </p>
            </div>
          </div>

          <div className={`w-full ${style.puzzlePieceFour}`}>
            <div className="p-10 ml-5 m-2">
              <p>
                <small className="text-[#222d56] text-base leading-[1.533] tracking-[0.3em] uppercase">
                  {t("foundation.foundationATV.accountant.subtitle")}
                </small>
              </p>
              <h5 className="font-impact text-[#222d56] uppercase text-4xl leading-[0.917] mb-[10px]">
                {t("foundation.foundationATV.accountant.title")}
              </h5>
              <p className="w-full relative block text-[#222d56] text-left mb-[15px] text-base break-inside-avoid">
                María Verónica
                <strong className="text-inherit block ">Ortiz Rodríguez</strong>
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default OrganizationalStructure;
