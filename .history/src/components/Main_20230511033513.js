import React, { useContext } from "react";
import Profile2 from "./Profile2";
import Products2 from "./Products2";
import { DarkModeContext } from "../DarkModeContext";

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "rgba(0,0,0,0.9)" : "white",
      }}
    >
      Main
      <Profile2 />
      <Products2 />
    </div>
  );
}
