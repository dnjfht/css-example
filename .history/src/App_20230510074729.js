import { useEffect, useRef, useState } from "react";

export default function App() {
  const [mousePoint, setMousePoint] = useState({ X: 0, Y: 0 });

  const pointRef = useRef();
  console.log(pointRef);

  const handleMouseMove = (e) => {
    setMousePoint({ X: e.clientX, Y: e.clientY });
  };

  useEffect(() => {
    pointRef.current.style.left = +"px";
    pointRef.current.style.top = mousePoint.clientY - 15 + "px";
  }, [mousePoint]);

  document.return(
    <div onMouseMove={handleMouseMove}>
      <div
        ref={pointRef}
        style={{ left: mousePoint.X - 15, top: mousePoint.Y - 15 }}
      />
    </div>
  );
}
