import React, { useState } from "react";

export default function Counter2({ total, onClick }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        {count}
        <span>/ {total}</span>
      </p>
      <button onClick={onClick}>Add +</button>
    </div>
  );
}
