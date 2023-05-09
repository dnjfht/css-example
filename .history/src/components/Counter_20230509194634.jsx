import React, { useState } from "react";

export default function Counter({ total, handleClickTotal }) {
  const [count, setCount] = useState(0);

  const handleClickCountUp = () => {
    setCount((prev) => prev + 1);
    handleClickTotal();
  };

  //   const handleClickCountDown = () => {
  //     if (count > 0) setCount(count - 1);
  //   };

  return (
    <div
      style={{
        width: 400,
        padding: 20,
        margin: "40px auto",
        border: "3px solid orange",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
