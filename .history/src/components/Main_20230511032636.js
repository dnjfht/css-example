import React, { useContext } from "react";
import Profile2 from "./Profile2";
import Products2 from "./Products2";
import { DarkModeContext } from "../DarkModeContext";

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div style={{}}>
      Main
      <Profile2 />
      <Products2 />
    </div>
  );
}
