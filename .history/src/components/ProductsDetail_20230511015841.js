import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function ProductsDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>DarkMode :</p>
      <button>Toggle</button>
    </div>
  );
}
