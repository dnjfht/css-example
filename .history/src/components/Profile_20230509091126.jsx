import React from "react";

export default function Profile(props) {
  return (
    <div
      style={{
        width: 240,
        height: 400,
        padding: "30px",
        textAlign: "center",
        borderRadius: 20,
        boxShadow: "6px 6px 10px rgba(0,0,0,0.2)",
      }}
    >
      <img
        style={{
          width: 200,
          height: 200,
          objectFit: "cover",
          borderRadius: 50,
        }}
        src={props.image}
        alt="profileImg"
      />
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  );
}
