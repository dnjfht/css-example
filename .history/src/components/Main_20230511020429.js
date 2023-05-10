import React, { useContext } from "react";
import Profile2 from "./Profile2";
import Products2 from "./Products2";

export default function Main() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Main
      <Profile2 />
      <Products2 />
    </div>
  );
}
