import React from "react";
import Row from "../core/components/Row";
import Menu from "./Menu";

export default function Nav() {
  return (
    <Row
      style={{
        width: "100%",
        paddingLeft: "24px",
        // paddingRight: "24px",
        // background: "pink",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3 className="semibold-text dark-green pointer">magomere.</h3>
      <Menu />
    </Row>
  );
}
