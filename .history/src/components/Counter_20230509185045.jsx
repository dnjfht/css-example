import React from "react";

export default function Counter({ count, setCount }) {
  const handleClickCountUp = () => {
    setCount(count + 1);
  };

  const handleClickCountDown = () => {
    if (count > 0) setCount(count - 1);
  };

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
      <span style={{ fontSize: 120 }}>{count}</span>
      <button
        style={{
          width: 130,
          padding: "6px 16px",
          boxSizing: "border-box",
          backgroundColor: "#ff2987",
          border: "2px solid #222",
          borderRadius: 8,
          fontSize: 30,
        }}
        onClick={handleClickCountUp}
      >
        Add +
      </button>
      <button
        style={{
          width: 130,
          padding: "6px 16px",
          marginTop: 10,
          boxSizing: "border-box",
          backgroundColor: "#ff2987",
          border: "2px solid #222",
          borderRadius: 8,
          fontSize: 30,
          color: "white",
        }}
        onClick={handleClickCountDown}
      >
        Add -
      </button>
    </div>
  );
}
