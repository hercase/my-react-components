import React, { useRef } from "react";
import "./styles.scss";

const TrackingSquare = () => {
  const square = useRef(null);

  const handleMove = (e) => {
    let rect = e.target.getBoundingClientRect();
    const el = square.current;
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    el.style.setProperty("--x", x + "px");
    el.style.setProperty("--y", y + "px");
  };

  return (
    <div
      onMouseMove={handleMove}
      ref={square}
      className="tracking-square"
    ></div>
  );
};

export default TrackingSquare;
