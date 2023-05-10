import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
