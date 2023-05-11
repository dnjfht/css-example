import React, { useState } from "react";

export default function Counter2({ total, onClick }) {
  const [count, setCount] = useState(0);

  //   const handleClickCountDown = () => {
  //     if (count > 0) setCount(count - 1);
  //   };

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
      {/* <button
        style={{
          width: 130,
          padding: "6px 16px",
          marginTop: 10,
          boxSizing: "border-box",
          backgroundColor: "orange",
          border: "2px solid #222",
          borderRadius: 8,
          fontSize: 30,
          color: "white",
        }}
        onClick={handleClickCountDown}
      >
        Add -
      </button> */}
    </div>
  );
}
