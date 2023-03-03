import React from "react";
import Column from "../core/components/Column";
import BigTitle from "./BigTitle";
import Paragraph from "./Paragraph";

export default function MissionSection({ bigTitle, paragraph, color }) {
  return (
    <div style={{ width: "100%", textAlign: "left" }}>
      <Column>
        <BigTitle bigTitle={bigTitle} color={color} />
        <Paragraph paragraph={paragraph} color={color} />
      </Column>
    </div>
  );
}
