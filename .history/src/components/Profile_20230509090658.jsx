import React from "react";

export default function Profile() {
  return (
    <div
      style={{
        width: 240,
        padding: 20,
        textAlign: "center",
        border: "2px solid deeppink",
        borderRadius: 20,
        boxShadow: "6px 6px 10px rgba(0,0,0,0.2)",
      }}
    >
      <img
        style={{ width: 200, height: 200, objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="profileImg"
      />
      <h1>James Kim</h1>
      <p>프론트엔드 개발자</p>
    </div>
  );
}
