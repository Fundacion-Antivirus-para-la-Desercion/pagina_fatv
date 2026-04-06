import { VscDeviceCameraVideo } from "react-icons/vsc";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { PiShareNetworkBold } from "react-icons/pi";
import { LuPalette } from "react-icons/lu";
import CounterNumeric from "../../../components/ContextData/CounterNumer.jsx";
import { useTranslation } from "react-i18next";

function Metrics() {
  const { t } = useTranslation();
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-10 text-center w-full mx-auto">
        <div className="group bg-dark-blue p-5 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl">
          <div className="flex flex-col items-center justify-center p-5 text-white h-full">
            <VscDeviceCameraVideo className="text-4xl text-primary-yellow mb-5" />
            <span className="statistic-number text-4xl text-white font-impact mb-3">
              <CounterNumeric countNumber={300} />+
            </span>
            <p className="relative text-base md:text-lg w-fit mx-auto after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-primary-yellow after:scale-x-0 after:origin-center after:transition-transform after:duration-500 group-hover:after:scale-x-100">
              {t("communications.metrics.one")}
            </p>
          </div>
        </div>
        <div className="group bg-primary-yellow p-5">
          <div className="flex flex-col items-center justify-center p-5 text-dark-blue h-full">
            <MdOutlinePhotoCamera className="text-4xl mb-5" />
            <span className="statistic-number text-4xl text-dark-blue font-impact mb-3">
              <CounterNumeric countNumber={1500} />+
            </span>
            <p className="relative text-base md:text-lg w-fit mx-auto after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-dark-blue after:scale-x-0 after:origin-center after:transition-transform after:duration-500 group-hover:after:scale-x-100">
              {t("communications.metrics.two")}
            </p>
          </div>
        </div>
        <div className="group bg-dark-blue p-5">
          <div className="flex flex-col items-center justify-center p-5 text-white h-full">
            <PiShareNetworkBold className="text-4xl text-primary-yellow mb-5" />
            <span className="statistic-number text-4xl text-white font-impact mb-3">
              <CounterNumeric countNumber={15} />
              k+
            </span>
            <p className="relative text-base md:text-lg w-fit mx-auto after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-primary-yellow after:scale-x-0 after:origin-center after:transition-transform after:duration-500 group-hover:after:scale-x-100">
              {t("communications.metrics.three")}
            </p>
          </div>
        </div>
        <div className="group bg-primary-yellow p-5 rounded-bl-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl">
          <div className="flex flex-col items-center justify-center p-5 text-dark-blue h-full">
            <LuPalette className="text-4xl mb-5" />
            <span className="statistic-number text-4xl text-dark-blue font-impact mb-3">
              <CounterNumeric countNumber={200} />+
            </span>
            <p className="relative text-base md:text-lg w-fit mx-auto after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-dark-blue after:scale-x-0 after:origin-center after:transition-transform after:duration-500 group-hover:after:scale-x-100">
              {t("communications.metrics.four")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Metrics;
