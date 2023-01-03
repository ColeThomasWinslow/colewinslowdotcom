import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ProjectList = [
    {
      id: 1,
      title: "IssuesMangerPro",
      tech: [{ id: 1, title: "React" }],
      coverImg: "",
      description: "Project Manager and Bug Tracker",
      live: "",
      code: "https://github.com/colewinslow/IssuesManagerPro",
    },
    {
      id: 2,
      title: "Roles.io",
      tech: [{ id: 1, title: "React" }],
      coverImg: "",
      description: "Management System for Roles",
      live: "",
      code: "https://github.com/colewinslow/Roles.io",
    },
    {
      id: 3,
      title: "PuzzleMyImage",
      tech: [{ id: 1, title: "React" }],
      coverImg: "",
      description: "Puzzle Creation and Shop",
      live: "",
      code: "https://github.com/colewinslow/PuzzleMyImage",
    },
    {
      id: 4,
      title: "Talkz Messenger",
      tech: [{ id: 1, title: "React" }],
      coverImg: "",
      description: "Chat Application",
      live: "",
      code: "https://github.com/colewinslow/TalkzMessenger",
    },
  ];
  return (
    <div className="projects">
      <h2 className="secondary-title">Programming Portfolio</h2>
      <p className="hero-text">
        See what the power of coding I can do! Check out these full-stack
        business focused applications I've created below.
      </p>
      <div ref={ref} className="project-container">
        {isInView &&
          ProjectList.map((project) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: "100vh" }}
                transition={{ stiffness: 100, delay: `0.${project.id}` }}
                animate={{ opacity: 1, y: 0 }}
                className="project-card"
              >
                <img src="/" className="project-img" alt={project.title} />
                <p className="project-text">{project.description}</p>
                <button>Live Website</button>
                <button>Code Repository</button>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
