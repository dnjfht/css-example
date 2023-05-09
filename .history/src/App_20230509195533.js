import React, { useState } from "react";
import Products from "./components/Products";

export default function App() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((prev) => !prev)}>Toggle</button>
    </div>
  );
}
