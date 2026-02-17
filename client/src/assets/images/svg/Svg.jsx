export const Sun = ({ classNames = "" }) => (
  <svg
    viewBox="0 0 200 200"
    className={`absolute w-32 h-32 animate-spin-slower ${classNames}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="
      100,10
      120,35
      150,25
      155,55
      185,60
      165,85
      190,100
      165,115
      185,140
      155,145
      150,175
      120,165
      100,190
      80,165
      50,175
      45,145
      15,140
      35,115
      10,100
      35,85
      15,60
      45,55
      50,25
      80,35
    "
      fill="#FFBA08"
      strokeLinejoin="round"
    />
  </svg>
);

export const SunBlue = ({ classNames = "" }) => (
  <svg
    viewBox="0 0 200 200"
    className={`absolute w-32 h-32 animate-spin-slower ${classNames}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="
      100,10
      120,35
      150,25
      155,55
      185,60
      165,85
      190,100
      165,115
      185,140
      155,145
      150,175
      120,165
      100,190
      80,165
      50,175
      45,145
      15,140
      35,115
      10,100
      35,85
      15,60
      45,55
      50,25
      80,35
    "
      fill="#222D56"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleLine = () => {
  return (
    <svg
      viewBox="0 0 600 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 bottom-0 w-[200px] h-auto pointer-events-none"
    >
      <path
        d="
          M 20 120
          C 60 80, 120 80, 150 120
          C 180 160, 120 190, 90 150
          C 60 110, 140 100, 200 120
          S 380 170, 520 120
        "
        stroke="#E5E7EB"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="80 20"
        fill="none"
      />
    </svg>
  );
};
