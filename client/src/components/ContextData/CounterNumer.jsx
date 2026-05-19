import { useState, useEffect, useRef } from "react";

const CounterNumeric = ({ countNumber = 0 }) => {
  // Convert to number in case it arrives as a string
  const targetNumber = parseFloat(countNumber);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const hasDecimals = targetNumber % 1 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 800;
    const fps = 60;
    const interval = 1000 / fps;
    const totalFrames = duration / interval;
    const increment = targetNumber / totalFrames;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        clearInterval(timer);
        setCount(targetNumber);
      } else {
        setCount(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-US", {
        // Use en-US to ensure the decimal point
        minimumFractionDigits: hasDecimals ? 1 : 0,
        maximumFractionDigits: hasDecimals ? 1 : 0,
      })}
    </span>
  );
};

export default CounterNumeric;
