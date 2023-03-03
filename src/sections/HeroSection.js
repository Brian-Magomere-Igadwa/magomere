import React from "react";
import Column from "../core/components/Column";
import Row from "../core/components/Row";
import SideNumber from "../components/SideNumber";
import Nav from "../components/Nav";
import MissionSection from "../components/MissionSection";

export default function HeroSection() {
  return (
    <div>
      <Row>
        <div style={{ width: "65%" }}>
          <Column>
            <Nav />
            <Row>
              <SideNumber number="01" message="Who is Magomere" />
              <MissionSection
                bigTitle="Creating a 
positive impact."
                paragraph="Hey ! I am Igadwa Magomere. 
I have made it a life long cause 
to create a positive impact 
through technology."
              />
            </Row>
          </Column>
        </div>
        <div
          className="light-green-bg"
          style={{ height: "100vh", width: "35%" }}
        ></div>
      </Row>
    </div>
  );
}