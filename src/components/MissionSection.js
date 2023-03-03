import { motion } from "framer-motion";
import React from "react";
import Column from "../core/components/Column";
import BigTitle from "./BigTitle";
import Paragraph from "./Paragraph";

export default function MissionSection({ bigTitle, paragraph, color }) {
  return (
    <motion.div
      style={{ width: "100%", textAlign: "left" }}
      initial={{
        opacity: 0,
        x: "100%",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        ease: easeOutElastic,
        duration: 4,
        delay: 0.3,
      }}
    >
      <Column>
        <BigTitle bigTitle={bigTitle} color={color} />
        <Paragraph paragraph={paragraph} color={color} />
      </Column>
    </motion.div>
  );
}
function easeOutElastic(x) {
  const c4 = (2 * Math.PI) / 3;

  return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -40 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}
