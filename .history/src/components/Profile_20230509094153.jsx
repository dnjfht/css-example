import React from "react";

export default function Profile({ image, name, job, state }) {
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
          position: "relative",
        }}
        src={image}
        alt="profileImg"
      />
      <h3 style={{ position: "absolute", top: 0, right: 0 }}>{state}</h3>
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
