import { motion } from "framer-motion";
import React from "react";

export default function Skills() {
  const FrontEndSkills = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  const BackEndSkills = [
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
  ];

  return (
    <div>
      <div className="skills-top"></div>

      <div className="skills-content">
        {" "}
        <h2 className="secondary-title">Developer Skills</h2>
        <p className="skills-para">
          HTML, CSS, Javascript, React, Typescript, SQL ect.{" "}
          <br className="nameBreak" />{" "}
          <svg
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7986 3.22925H15.7986C16.3291 3.22925 16.8378 3.43996 17.2129 3.81503C17.5879 4.19011 17.7986 4.69882 17.7986 5.22925V19.2292C17.7986 19.7597 17.5879 20.2684 17.2129 20.6435C16.8378 21.0185 16.3291 21.2292 15.7986 21.2292H3.79865C3.26821 21.2292 2.7595 21.0185 2.38443 20.6435C2.00936 20.2684 1.79865 19.7597 1.79865 19.2292V5.22925C1.79865 4.69882 2.00936 4.19011 2.38443 3.81503C2.7595 3.43996 3.26821 3.22925 3.79865 3.22925H5.79865"
              stroke="#7AA1E3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.7986 1.22925H6.79865C6.24636 1.22925 5.79865 1.67696 5.79865 2.22925V4.22925C5.79865 4.78153 6.24636 5.22925 6.79865 5.22925H12.7986C13.3509 5.22925 13.7986 4.78153 13.7986 4.22925V2.22925C13.7986 1.67696 13.3509 1.22925 12.7986 1.22925Z"
              stroke="#7AA1E3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          view all skills on my resume{" "}
        </p>{" "}
        <div className="slider frontend">
          {" "}
          {FrontEndSkills.map(({ id }) => {
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="slide"
              >
                {id}
              </motion.div>
            );
          })}
        </div>
        <div className="slider backend reverse ">
          {BackEndSkills.map(({ id }) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={id}
                className="slide "
              >
                {id}
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="skills-bottom"></div>
    </div>
  );
}
