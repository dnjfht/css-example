import React from "react";
import Navbar from "./components/Navbar";
import ProfileImgWrap from "./components/ProfileImgWrap";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Card>
        <p>Card1</p>
      </Card>

      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>
    </div>
  );
}
