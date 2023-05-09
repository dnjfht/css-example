import { useRef, useState } from "react";

export default function App() {
  const [mousePoint, setMousePoint] = useState({ clientX, clientY });

  const pointRef = useRef();
  console.log(pointRef);

  document.documentElement.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
  });

  document.return(
    <div>
      <div ref={pointRef} />
    </div>
  );
}
