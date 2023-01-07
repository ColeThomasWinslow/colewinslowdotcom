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
          <motion.div className="about-section about-content">
            <div className="about-img-cont">
              <img
                src="https://images.unsplash.com/photo-1531771686035-25f47595c87a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                alt="Cole winslow"
              />
            </div>
          </motion.div>{" "}
          <motion.div className="about-section">
            <h2 className="secondary-title">A Little More About Me</h2>
            <p className="about-text">
              Hey everyone i'm Cole! A full-stack developer based in Arizona. If
              you're looking for someone with a passion for problem-solving,
              communication and technology - I'm your guy! Im always trying to
              grow my network, so even if you don't need my help as a programmer
              feel free to reach out to start up a conversation!
            </p>
          </motion.div>{" "}
        </>
      )}
    </div>
  );
}
