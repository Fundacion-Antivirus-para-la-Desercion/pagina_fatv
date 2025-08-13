import React, { useState } from "react";
import BannerView from "../../components/Banner-views/BannerView";
import universidad1 from "../../../public/projects/universidades/udea.webp";
import universidad2 from "../../../public/projects/universidades/uni-nacional.webp";

function Universidades() {
  const [universidades, setUniversidades] = useState([
    {
      name: "UDEA",
      img: universidad1,
      parrafo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      name: "Universidad Nacional",
      img: universidad2,
      parrafo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
  ]);

  return (
    <div className="lg:pt-[145px]">
      <Header />
      <BannerView title={"UNIVERSIDADES"} />
      <div className="m-8 sm:m-20">
        {universidades.map((item, key) => (
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

export default Universidades;
