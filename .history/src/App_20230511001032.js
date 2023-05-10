import React from "react";
import Navbar from "./components/Navbar";
import ProfileImgWrap from "./components/ProfileImgWrap";

export default function App() {
  return (
    <div>
      <Navbar>
        <ProfileImgWrap
          image="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          name="Bob"
          size={200}
        />
      </Navbar>
    </div>
  );
}
