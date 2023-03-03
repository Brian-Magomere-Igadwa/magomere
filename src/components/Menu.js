import React from "react";
import "./../core/components/styles/Global.css";
import Row from "./../core/components/Row";

export default function Menu() {
  return (
    <Row
      style={{
        width: "30vw",
        justifyContent: "space-around",
      }}
    >
      <h3 className="menu-item hover-bold regular-text light-green pointer">
        About me
      </h3>
      <h3 className="menu-item regular-text dark-green pointer">About me</h3>
    </Row>
  );
}
