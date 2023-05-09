import React from "react";

export default function ProfileImgWrap({ isNew, image }) {
  return (
    <div style={{ position: "relative" }}>
      {isNew ? (
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
            NEW
          </h3>
        </>
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
    </div>
  );
}
