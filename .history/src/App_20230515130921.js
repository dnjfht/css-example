import React from "react";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.5em 1em;
  ${(props) => 
  props.primary && css`
  background:#009cd5`;
  color:isLabelWithInternallyDisabledControl;
  }
`;

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
