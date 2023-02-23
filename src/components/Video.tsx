import React from "react";

export default function Video(props: {
  src: string;
  children: React.ReactNode[];
}) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        gap: "20px",
      }}
    >
      <div style={{ flex: "1 0 350px" }}>{props.children}</div>
      <div style={{ flex: "2 0 300px" }}>
        <video
          style={{ width: "100%", pointerEvents: "none" }}
          muted
          autoPlay
          loop
        >
          <source src={props.src} />
        </video>
      </div>
    </div>
  );
}
