import { useEffect, useRef, useState } from "react";

export default function App() {
  const [mousePoint, setMousePoint] = useState({ clientX: 0, clientY: 0 });

  const pointRef = useRef();
  console.log(pointRef);

  document.documentElement.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    setMousePoint({ x: clientX, y: clientY });
  });

  useEffect(() => {
    pointRef.current.style.left = mousePoint.clientX - 15 + "px";
    pointRef.current.style.top = mousePoint.clientY - 15 + "px";
  }, [mousePoint]);

  document.return(
    <div>
      <div ref={pointRef} />
    </div>
  );
}
