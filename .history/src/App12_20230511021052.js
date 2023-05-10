import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      {/* Context를 가져다 사용하려면 이렇게 우산을 씌워주면 된다. */}
      {/* 이렇게 해주면 PRovider 아래에 있는 자식 component들이 모두 darkMode, toggleDarkMode를 가져다 쓸 수 있다 */}
      <div style={{ width: "100%", height: "100vh" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
// 무작정 어플리케이션 전체에 우산을 씌우지 말고 최대한 필요한 곳에 우산을 씌우자!
