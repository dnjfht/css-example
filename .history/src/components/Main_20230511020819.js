import React, { useContext } from "react";
import Profile2 from "./Profile2";
import Products2 from "./Products2";
import { DarkModeContext } from "../DarkModeContext";

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      {darkMode === true ? (
        <div style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "white" }}>
          Main
          <Profile2 />
          <Products2 />
        </div>
      ) : (
        <div>
          Main
          <Profile2 />
          <Products2 />
        </div>
      )}
    </>
  );
}
