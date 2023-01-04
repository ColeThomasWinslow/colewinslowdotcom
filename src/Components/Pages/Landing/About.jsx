import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div name="about" ref={ref} className="about">
      {isInView && (
        <>
          {" "}
          <motion.div
            initial={{ x: "-100vw" }}
            transition={{ stiffness: 500, ease: "linear" }}
            animate={{ x: 1 }}
            exit={{ x: "-100vw" }}
            className="about-section about-content"
          >
            <p></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            transition={{ stiffness: 500, ease: "linear" }}
            animate={{ x: 1, opacity: 1 }}
            className="about-section"
          >
            <h2 className="secondary-title">About Me</h2>
            <p className="about-text">
              See what the power of coding I can do! Check out these full-stack
              business focused applications I've created below.
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
}
