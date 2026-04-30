import { useEffect, useRef, useState } from "react";
import "./WriteEffect.css";

const WriteEffect = ({ text = "" }) => {
  const [writeText, setWriteText] = useState("");
  const [showSpanAnimation, setShowSpanAnimation] = useState("");
  const timerWrittenText = useRef(null);
  const timerDeleteText = useRef(null);
  const timeoutRef = useRef(null);

  const handleDeleteText = (currentText, interval, index) => {
    setShowSpanAnimation("");
    timerDeleteText.current = setInterval(() => {
      if (index >= 0) {
        setWriteText(currentText.substr(0, index--));
      } else {
        clearInterval(timerDeleteText.current);
        timeoutRef.current = setTimeout(() => {
          handleWriteText(currentText, 100, 0);
        }, 1000);
      }
    }, interval);
  };

  const handleWriteText = (currentText, interval, index) => {
    timerWrittenText.current = setInterval(() => {
      if (index <= currentText.length) {
        setWriteText(currentText.substr(0, index++));
      } else {
        clearInterval(timerWrittenText.current);
        setShowSpanAnimation("writing-text_cursor");
        timeoutRef.current = setTimeout(() => {
          handleDeleteText(currentText, 60, index - 1);
        }, 5000);
      }
    }, interval);
  };

  useEffect(() => {
    handleWriteText(text, 100, 0);
    return () => {
      clearInterval(timerWrittenText.current);
      clearInterval(timerDeleteText.current);
      clearTimeout(timeoutRef.current);
    };
  }, [text]);

  return (
    <span className={`writing-text ${showSpanAnimation}`}>{writeText}</span>
  );
};

export default WriteEffect;
