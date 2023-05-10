import React from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: 20,
        color: "white",
        minHeight: 200,
        maxWidth: 200,
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
