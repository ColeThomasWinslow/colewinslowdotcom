import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import ProfileImg from "./ProfileImg.png";
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div name="about" ref={ref} className="about">
      {isInView && (
        <>
          {" "}
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
          <motion.div className="about-content">
            <div className="about-img-cont">
              <img src={ProfileImg} alt="Cole winslow" />
            </div>
          </motion.div>{" "}
        </>
      )}
    </div>
  );
}
