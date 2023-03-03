import React from "react";
import Column from "../core/components/Column";
import Row from "../core/components/Row";
import SideNumber from "../components/SideNumber";
import MissionSection from "../components/MissionSection";
import Paragraph from "../components/Paragraph";
import location from "../assets/location.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import twitter from "../assets/twitter.png";
import In from "../assets/In.png";
import { useMediaQuery } from "react-responsive";
// import { LocationOnIcon } from "@mui/icons-material";

export default function SkillsSection() {
  const isMobile = useMediaQuery({ query: `(max-width:760px)` });
  if (!isMobile) {
    return (
      <div
        id="contact"
        className="white-bg center-it "
        style={{ width: "100%", height: "100vh", overflow: "hidden" }}
      >
        <Column>
          <div style={{ width: "100%" }}>
            <Row>
              <SideNumber
                number="03"
                message="Let’s talk growth of your business"
              />
              <div style={{ width: "50%" }}>
                <Column>
                  <MissionSection
                    bigTitle="LETS CHAT"
                    paragraph="Let me hear you."
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingTop: "2rem",
                      alignContent: "center",
                    }}
                  >
                    {/* <LocationOnIcon /> */}

                    <div style={{ padding: "2rem" }}>
                      <img
                        src={location}
                        alt="location"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div style={{ width: "55%" }}>
                      <Column>
                        <h5
                          className="regular-text big-size"
                          style={{ width: "90%", textAlign: "left" }}
                        >
                          We are stationed in Kenya,Murang’a town near Murang’a
                          University.
                        </h5>
                        <div
                          style={{
                            width: "80%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <a href="https://www.upwork.com/freelancers/~01cf18506ffc3dabe8?viewMode=1">
                            <img
                              src={fb}
                              alt="location"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href="https://twitter.com/m_igadwa">
                            <img
                              src={twitter}
                              alt="location"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href="https://www.instagram.com/__igadwa/">
                            <img
                              src={ig}
                              alt="location"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href="https://ke.linkedin.com/in/brian-igadwa-3a5774255">
                            <img
                              src={In}
                              alt="Linked In"
                              width={24}
                              height={24}
                            />
                          </a>
                        </div>
                      </Column>
                    </div>
                  </div>
                </Column>{" "}
              </div>
            </Row>
          </div>
          <div
            className="dark-green-bg center-it white"
            style={{ width: "100%" }}
          >
            <h5 className="bold-text small-size">copyright 2023 magomere.</h5>
          </div>
        </Column>
      </div>
    );
  }
  return (
    <div
      id="contact"
      className="white-bg center-it "
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      <Column>
        <div style={{ width: "100%" }}>
          <Row>
            <div
              style={{
                width: "100%",
                marginLeft: "2rem",
                // background: "yellow",
              }}
            >
              <Column>
                <MissionSection
                  bigTitle="LET'S CHAT"
                  paragraph="Let me hear you."
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "2rem",
                    alignContent: "center",
                    width: "100%",
                  }}
                >
                  {/* <LocationOnIcon /> */}

                  <div style={{ padding: "2rem" }}>
                    <img src={location} alt="location" width={24} height={24} />
                  </div>
                  <div style={{ width: "55%" }}>
                    <Column>
                      <h5
                        className="regular-text big-size dark-green"
                        style={{ width: "90%", textAlign: "left" }}
                      >
                        We are stationed in Kenya,Murang’a town near Murang’a
                        University.
                      </h5>
                      <div
                        style={{
                          width: "40vw",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a href="https://www.upwork.com/freelancers/~01cf18506ffc3dabe8?viewMode=1">
                          <img src={fb} alt="location" width={24} height={24} />
                        </a>
                        <a href="https://twitter.com/m_igadwa">
                          <img
                            src={twitter}
                            alt="location"
                            width={24}
                            height={24}
                          />
                        </a>
                        <a href="https://www.instagram.com/__igadwa/">
                          <img src={ig} alt="location" width={24} height={24} />
                        </a>
                        <a href="https://ke.linkedin.com/in/brian-igadwa-3a5774255">
                          <img
                            src={In}
                            alt="Linked In"
                            width={24}
                            height={24}
                          />
                        </a>
                      </div>
                    </Column>
                  </div>
                </div>
              </Column>{" "}
            </div>
            <SideNumber
              number="03"
              message="Let’s talk growth for your business"
            />
          </Row>
        </div>
        <div
          className="dark-green-bg center-it white"
          style={{ width: "100%" }}
        >
          <h5 className="regular-text small-size" style={{ fontSize: "16px" }}>
            copyright 2023 magomere.
          </h5>
        </div>
      </Column>
    </div>
  );
}
