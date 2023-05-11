import React, { useState } from "react";

export default function Counter2({ total, onClick }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{ fontSize: 120 }}>
        {count}
        <span style={{ fontSize: 20 }}>/ {total}</span>
      </p>
      <button onClick={onClick}>Add +</button>
    </div>
  );
}
