import React from "react";
import { useVisibility } from "../hooks/useVisibility";
import "../styles/ScrollAnim.css";

const ScrollAnimRepeat = ({ children }) => {
  const [ref, isVisible] = useVisibility({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`fade-up-section ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimRepeat;