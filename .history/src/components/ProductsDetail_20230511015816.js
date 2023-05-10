import React, { useContext } from "react";

export default function ProductsDetail() {
  const { darkMode, toggleDarkMode } = useContext();
  return (
    <div>
      Product Detail
      <p>DarkMode :</p>
      <button>Toggle</button>
    </div>
  );
}
