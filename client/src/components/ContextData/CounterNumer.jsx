import { useState, useEffect, useRef } from "react";

const CounterNumeric = ({ countNumber = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 800; // ms
    const start = 0;
    const increment = countNumber / (duration / 16); // ~60fps

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= countNumber) {
        clearInterval(timer);
        current = countNumber;
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, countNumber]);

  return (
    <span ref={ref}>
      {count.toLocaleString("es-CO", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, 
        style: "decimal",
      })}
    </span>
  );
};

export default CounterNumeric;
