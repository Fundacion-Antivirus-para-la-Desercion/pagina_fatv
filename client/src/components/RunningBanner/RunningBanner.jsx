import React from "react";

const RunningBanner = ({ items = [], speed = 25 }) => {
  const duplicatedItems = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <ul
        className="flex gap-12 animate-scroll"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <li key={index} className="list-disc font-extrabold cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunningBanner;
