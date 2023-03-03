import React from "react";
import Row from "../core/components/Row";
import Column from "../core/components/Column";

export default function SideNumber({ number, message }) {
  return (
    <div
      style={{
        height: "85vh",
        width: "14%",
        // background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
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
        <h1 className="light-green pointer title bigger-small-size ">
          {number}
        </h1>
        <div
          className="light-green-bg"
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
            className="semibold-text light-green pointer align-center rotate-it"
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
    </div>
  );
}
