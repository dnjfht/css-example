import React from "react";
import ProfileImgWrap from "./ProfileImgWrap";

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
      <ProfileImgWrap image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
