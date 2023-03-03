import React from "react";
import Column from "../core/components/Column";
import BigTitle from "./BigTitle";
import Paragraph from "./Paragraph";

export default function MissionSection({ bigTitle, paragraph }) {
  return (
    <div style={{ width: "56%", textAlign: "left", marginLeft: "4rem" }}>
      <Column>
        <BigTitle bigTitle={bigTitle} />
        <Paragraph paragraph={paragraph} />
      </Column>
    </div>
  );
}
