import { motion } from "framer-motion";
import React, { useState } from "react";
import Row from "../core/components/Row";
import Menu from "./Menu";
import { useMediaQuery } from "react-responsive";
import menu from "../assets/menu.png";
import Column from "../core/components/Column";

export default function Nav() {
  const isMobile = useMediaQuery({ query: `(max-width:760px)` });
  const [popUp, setPopUp] = useState(false);

  const handleClick = () => {
    setPopUp(!popUp);
  };

  if (!isMobile) {
    return (
      <motion.Row
        style={{
          width: "100%",
          paddingLeft: "24px",
          // paddingRight: "24px",
          // background: "pink",
          display: "flex",
          justifyContent: "space-between",
        }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <h3 className="bold-text dark-green pointer">magomere.</h3>
        <Menu />
      </motion.Row>
    );
  }
  return (
    <motion.Row
      style={{
        width: "100%",
        paddingLeft: "24px",
        // paddingRight: "24px",
        // background: "pink",
        display: "flex",
        justifyContent: "space-between",
      }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.8,
      }}
    >
      <h3 className="bold-text dark-green pointer">magomere.</h3>
      <Column>
        <div className="pointer" onClick={handleClick}>
          <img src={menu} width={72} height={72} />
        </div>

        {popUp && (
          <motion.div
            className="dark-green-bg"
            style={{
              position: "absolute",
              margin: "8rem 4rem 0 0",
              display: "flex",
              width: "80%",
              zIndex: 90,

              height: "80vh",
              paddingLeft: "1rem",
              // justifyContent: "center",
            }}
            initial={{
              x: "20rem",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.4,
              easings: "tween",
            }}
          >
            <Column>
              <h3 className="menu-item hover-bold bold-text white pointer">
                About me
              </h3>
              <a
                className="menu-item regular-text white pointer"
                style={{ textDecoration: "none" }}
                href="#contact"
              >
                <h3 className="menu-item regular-text white pointer">
                  Contact
                </h3>
              </a>
              <a
                className="menu-item regular-text white pointer"
                style={{ textDecoration: "none" }}
                href="https://github.com/Brian-Magomere-Igadwa"
              >
                <h3 className="menu-item regular-text white pointer">Github</h3>
              </a>
            </Column>
          </motion.div>
        )}
      </Column>
    </motion.Row>
  );
}
