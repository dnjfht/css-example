import React from "react";

export default function Card({ children }) {
  return (
    <div style={{ backgroundColor: "black", borderRadius: 20 }}>{children}</div>
  );
}
