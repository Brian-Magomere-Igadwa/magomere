import React from "react";

export default function BigTitle({ bigTitle, color }) {
  return (
    <div>
      <h1
        className={`title bigger-smaller-size ${
          color?.length > 0 ? "white" : "dark-green"
        }`}
      >
        {bigTitle}
      </h1>
    </div>
  );
}
