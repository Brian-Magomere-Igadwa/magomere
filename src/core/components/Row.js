import React from "react";
import "./styles/Row.css";

export default function Row({ children, style }) {
  return (
    <div className="Row" style={style}>
      {children}
    </div>
  );
}
