import React from "react";

export default function Profile({ image, name, job, isNew }) {
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
      {isNew ? (
        <div style={{ position: "relative" }}>
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
          <h3
            style={{
              padding: 6,
              backgroundColor: "lightblue",
              borderRadius: 10,
              textAlign: "center",
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: 16,
            }}
          >
            {state}
          </h3>
        </div>
      ) : (
        <>
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
        </>
      )}

      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
