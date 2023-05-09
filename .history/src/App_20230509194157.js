import React, { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  const [total, setTotal] = useState(0);

  const handleClickTotal = () => {
    setTotal((prev) => prev + 1);
  };
  return (
    <div style={{ textAlign: "center", width: 500, margin: "0 auto" }}>
      <p
        style={{
          width: "100%",
          backgroundColor: "gold",
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        Total Count : {total}
        <span>{total > 20 ? "🔥" : "☃"}</span>
      </p>
      <Counter total={total} handleClickTotal={handleClickTotal} />
      <Counter total={total} handleClickTotal={handleClickTotal} />
    </div>
  );
}
