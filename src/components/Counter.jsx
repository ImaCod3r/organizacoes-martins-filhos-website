import React, { useState, useEffect } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

function Counter({ limit, speed = 100, step }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 })
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < limit && isVisible) {
      const timer = setTimeout(() => {
        setCount(prev => prev + step);
      }, speed);
    
      return () => clearTimeout(timer);
    }

    if(!isVisible) {
      setCount(0);
    }
  }, [count, limit, speed, isVisible]);

  return (
    <div ref={ref} className="counter">
      {count}
    </div>
  );
}

export default Counter;