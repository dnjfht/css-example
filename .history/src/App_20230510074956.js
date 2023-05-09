import { useEffect, useRef, useState } from "react";

export default function App() {
  const [mousePoint, setMousePoint] = useState({ X: 0, Y: 0 });

  const pointRef = useRef();
  console.log(pointRef);

  const handleMouseMove = (e) => {
    setMousePoint({ X: e.clientX, Y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <div
        ref={pointRef}
        style={{ left: mousePoint.X - 15, top: mousePoint.Y - 15, width: 100 }}
      />
    </div>
  );
}
