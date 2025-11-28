import React from "react";
import { useTranslation } from "react-i18next";
import "./Commun.css";
import CommunicationsTeam from "../../../public/img_Communications/communicationsTeam.webp";

function Commun() {
  const { t } = useTranslation();

  return (
    <div id="communications">
      <div className="data_analytics">
        <div className="data_analytics--cnt">
          <div className="data_analytics--content">
            <div className="data_analytics--text">
              <p className="title">
                {t("communications_ATV.commun.our_model")}
              </p>
              <h4 className="lineSubtitle subtitle font-impact">
                {t("communications_ATV.commun.subtitle")}
              </h4>

              <p className="text-justify">
                {t("communications_ATV.commun.paragraph_1")}
                <br />
                <br />
                {t("communications_ATV.commun.paragraph_2")}
                <br />
                <br />
                {t("communications_ATV.commun.paragraph_3")}
                <br />
                <br />
                {t("communications_ATV.commun.paragraph_4")}
              </p>
            </div>
            <div className="data_analytics--image">
              <picture>
                <img
                  src={CommunicationsTeam}
                  alt={t("communications_ATV.commun.alt_image")}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commun;
