import React from "react";
import Column from "../core/components/Column";
import Row from "../core/components/Row";
import SideNumber from "../components/SideNumber";
import Nav from "../components/Nav";
import MissionSection from "../components/MissionSection";

export default function SkillsSection() {
  return (
    <div
      className="dark-green-bg center-it "
      style={{ width: "100%", height: "100vh" }}
    >
      <Row>
        <SideNumber number="02" message="Skills" color="white" />

        <div
          className=" dark-green-bg"
          style={{
            width: "40%",
            height: "90vh",
            alignSelf: "end",
          }}
        >
          <Column>
            <MissionSection
              paragraph="I have worked with well 
established organizations,
engineers and visionaries to
develop their products.
I have been a lead designer at
nifixie as well a number of other
firms."
              bigTitle="Design"
              color="white"
            />
            <div
              className="center-it"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "start",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <h5>Adobe</h5>
              <h5>Figma</h5>
              <h5>Sketch</h5>
            </div>
          </Column>
        </div>
        <div
          style={{
            width: "40%",
            alignSelf: "end",
            height: "90vh",
          }}
        >
          <Column>
            <MissionSection
              paragraph="I developed my first product
solely with the aim of helping
students facing difficulty with
programming. The app is called 
Nifixie.
I had to grasp the concepts from
the backend and front end.
I ended up picking up Node Js, 
Express, React Native as well as 
No Sql with Mongo Db."
              bigTitle="Coding"
              color="white"
            />
            <div
              className="center-it"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "start",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <h5>R.Native</h5>
              <h5>Node Js</h5>
              <h5>Express</h5>
            </div>
          </Column>
        </div>
      </Row>
    </div>
  );
}
