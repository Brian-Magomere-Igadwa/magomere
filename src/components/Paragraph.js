import React from "react";

export default function Paragraph({ paragraph }) {
  return (
    <div>
      <p className="regular-text big-size dark-green" style={{ width: "70%" }}>
        {paragraph}
      </p>
    </div>
  );
}
