import React from "react";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import StyledComponents from "./StyledComponents";
import TailwindComponents from "./TailwindComponents";

export default function App() {
  return (
    <div>
      <Button1 />
      <Button2 />
      <TailwindComponents />
      <StyledComponents />
      이제 되나?
    </div>
  );
}
