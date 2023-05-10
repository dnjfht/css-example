import { useEffect, useRef, useState } from "react";

export default function App() {
  const [mousePoint, setMousePoint] = useState({ X: 0, Y: 0 });

  const handleMouseMove = (e) => {
    setMousePoint({ X: e.clientX, Y: e.clientY });

    // 만약 수평으로만 이동이 가능하다면? :
    // setMousePoint((prev) => ({ ...prev, X: e.clientX }));
  };
  console.log(mousePoint);

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "100vh", backgroundColor: "lightgray" }}
    >
      <div
        style={{
          position: "absolute",
          left: mousePoint.X - 15 + "px",
          top: mousePoint.Y - 15 + "px",
          width: 20,
          height: 20,
          borderRadius: 50,
          backgroundColor: "red",
        }}
      />
    </div>
  );
}
