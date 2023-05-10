import React from "react";
import ProfileImgWrap from "./ProfileImgWrap";

export default function Navbar({ children }) {
  return (
    <div>
      <header style={{ backgroundColor: "yellow" }}>{children}</header>
    </div>
  );
}
