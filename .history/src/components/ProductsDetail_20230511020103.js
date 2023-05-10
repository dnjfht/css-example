import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function ProductsDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode : <span>{darkMode}</span>
      </p>
      <button onClick={() => toggleDarkMode()>Toggle</button>
    </div>
  );
}
