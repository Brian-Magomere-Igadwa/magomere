import React from "react";

export default function Paragraph({ paragraph, color }) {
  return (
    <div>
      <p
        className={`regular-text big-size ${
          color?.length > 0 ? "white" : "dark-green"
        }`}
        style={{ width: "70%" }}
      >
        {paragraph}
      </p>
    </div>
  );
}
