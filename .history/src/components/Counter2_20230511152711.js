import React, { useState } from "react";

export default function Counter2({ total, onClick }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{ fontSize: 120 }}>
        {count}
        <span style={{ fontSize: 20 }}>/ {total}</span>
      </p>
      <button
        style={{
          width: 130,
          padding: "6px 16px",
          boxSizing: "border-box",
          backgroundColor: "orange",
          border: "2px solid #222",
          borderRadius: 8,
          fontSize: 30,
          color: "white",
        }}
        onClick={handleClickCountUp}
      >
        Add +
      </button>
    </div>
  );
}
