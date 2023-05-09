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
        border: "2px solid orange",
      }}
    >
      <span>{count}</span>
      <button onClick={handleClickCountUp}>Add +</button>
      <button onClick={handleClickCountDown}>Add -</button>
    </div>
  );
}
