import React, { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}
