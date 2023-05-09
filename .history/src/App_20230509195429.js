import React, { useState } from "react";
import Products from "./components/Products";

export default function App() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      <Products />
    </div>
  );
}
