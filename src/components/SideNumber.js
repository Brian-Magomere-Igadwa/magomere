import React from "react";
import Row from "../core/components/Row";
import Column from "../core/components/Column";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function SideNumber({ number, message, color }) {
  const isMobile = useMediaQuery({ query: `(max-width:760px)` });
  if (!isMobile) {
    return (
      <motion.div
        style={{
          height: "85vh",
          width: "14%",
          // background: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          overflow: "hidden",
        }}
        initial={{
          y: "10vh",
          opacity: [0, 0, 0, 0, 1],
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          times: [0, 1],
          easings: "tween",
        }}
      >
        <div
          style={{
            //   width: "14%",
            height: "80vh",
            display: "flex",
            // justifyContent: "space-evenly",
            //   background: "red",
            // alignContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            className={`title bigger-smaller-size pointer  ${
              color?.length > 0 ? "white" : "light-green"
            }`}
          >
            {number}
          </h1>
          <div
            className={`pointer ${
              color?.length > 0 ? "white-bg" : "light-green-bg"
            }`}
            style={{
              width: "2px",
              height: "20vh",
              display: "flex",
              alignSelf: "center",
            }}
          />
          <div
            style={{
              // background: "green",
              flexGrow: 1,
              marginTop: "2rem",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            <h3
              className={` semibold-text  pointer align-center rotate-it ${
                color?.length > 0 ? "white" : "light-green"
              }`}
              style={{
                height: "20vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                //   width: "20px",
                maxLines: 1,
              }}
            >
              {message}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      style={{
        height: "85vh",
        width: "100%",
        // background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        overflow: "hidden",
      }}
      initial={{
        y: "10vh",
        opacity: [0, 0, 0, 0, 1],
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        times: [0, 1],
        easings: "tween",
      }}
    >
      <div
        style={{
          //   width: "14%",
          height: "80vh",
          display: "flex",
          // justifyContent: "space-evenly",
          //   background: "red",
          // alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          className={`title small-size pointer  ${
            color?.length > 0 ? "white" : "light-green"
          }`}
        >
          {number}
        </h1>
        <div
          className={`pointer ${
            color?.length > 0 ? "white-bg" : "light-green-bg-b"
          }`}
          style={{
            width: "2px",
            height: "20vh",
            display: "flex",
            alignSelf: "center",
          }}
        />
        <div
          style={{
            // background: "green",
            flexGrow: 1,
            marginTop: "2rem",
            // display: "flex",
            // justifyContent: "center",
          }}
        >
          <h3
            className={` semibold-text  pointer align-center rotate-it ${
              color?.length > 0 ? "white" : "light-green"
            }`}
            style={{
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              //   width: "20px",
              maxLines: 1,
            }}
          >
            {message}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
