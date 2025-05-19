import React, { useState } from "react";
import BannerView from "../../components/Banner-views/BannerView";
import colegio1 from "../../../public/projects/Colegios/colegioItagui.webp";

function Colegio() {
  const [colegios, setColegios] = useState([
    {
      name: "Colegio Itagui",
      img: colegio1,
      parrafo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
  ]);

  return (
    <div className="relative top-[145px]">
      <BannerView title={"COLEGIOS"} />
      <div className="m-8 sm:m-20">
        {colegios.map((item, key) => (
          <div key={key} className="mb-10">
            <h1 className="text-yellow-500 text-2xl font-bold mb-4">
              {item.name}
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <img
                className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-6"
                src={item.img}
                alt={item.name}
              />
              <p className="text-blue-600 text-lg lg:w-1/2">{item.parrafo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Colegio;
