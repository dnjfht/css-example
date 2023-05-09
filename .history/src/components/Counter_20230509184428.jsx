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
        padding: 40,
        margin: "0 auto",
        border: "3px solid orange",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 100 }}>{count}</span>
      <button onClick={handleClickCountUp}>Add +</button>
      <button onClick={handleClickCountDown}>Add -</button>
    </div>
  );
}
