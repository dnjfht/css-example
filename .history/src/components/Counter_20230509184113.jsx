import React from "react";

export default function Counter({ count, setCount }) {
  const handleClickCountUp = () => {
    setCount(count + 1);
  };

  const handleClickCountDown = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClickCountUp}>Add +</button>
      <button onClick={handleClickCountDown}>Add -</button>
    </div>
  );
}
