import { useEffect, useRef, useState } from "react";

export default function App() {
  const [mousePoint, setMousePoint] = useState({ X: 0, Y: 0 });

  const pointRef = useRef();
  console.log(pointRef);

  const handleMouseMove = (e) => {
    setMousePoint({ X: e.clientX, Y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "100vh" }}
    >
      <div
        ref={pointRef}
        style={{
          left: mousePoint.X - 15 + "px",
          top: mousePoint.Y - 15 + "px",
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: "brownRed",
        }}
      />
    </div>
  );
}
