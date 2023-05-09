import React from "react";

export default function Profile({ name, job, state }) {
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
        src={image}
        alt="profileImg"
      />
      <h2>{state}</h2>
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
