import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      <div style={{ width: "100%", height: "100vh" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
