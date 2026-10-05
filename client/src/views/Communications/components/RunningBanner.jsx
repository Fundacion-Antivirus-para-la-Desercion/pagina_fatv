import React from "react";

const RunningBanner = ({ items = [], speed = 40 }) => {
  const duplicatedItems = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <ul
        className="flex animate-scroll"
        style={{
          width: "max-content",
          willChange: "transform",
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="list-disc font-extrabold cursor-pointer mx-6 whitespace-nowrap"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunningBanner;
