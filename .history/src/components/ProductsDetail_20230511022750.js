import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function ProductsDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode :{/* Boolean은 값이 출력되지 않으므로 문자열로 바꿔주기 */}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}
