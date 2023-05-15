import React from "react";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button``;

export default function App() {
  return (
    <>
      <Button1 />
      <Button2 />

      <Container>
        <Button>버튼인데요?</Button>
      </Container>
    </>
  );
}
