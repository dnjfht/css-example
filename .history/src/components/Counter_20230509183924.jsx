import React from "react";

export default function Counter({ count, setCount }) {
  const handleClickCountUp = (event) => {
    setCount(count++);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClickCountUp}>Add +</button>
    </div>
  );
}
