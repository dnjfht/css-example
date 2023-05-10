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
      }}
    >
      {children}
    </div>
  );
}
