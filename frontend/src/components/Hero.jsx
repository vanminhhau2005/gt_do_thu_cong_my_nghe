import React from "react";

export default function Hero({ height = 85 }) {
  return (
    <div
      style={{
        height: `${height}px`,
        backgroundColor: "#FFF8E7", // trắng ngà
        width: "100%",
      }}
    />
  );
}
