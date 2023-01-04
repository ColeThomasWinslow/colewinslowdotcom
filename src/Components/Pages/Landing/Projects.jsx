import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
  const ProjectList = [
    {
      id: 1,
      title: "IssuesMangerPro",
      tech: [
        { title: "React" },
        { title: "Redux" },
        { title: "MongoDB" },
        { title: "Express" },
        { title: "Node" },
        { title: "Bootstrap" },
        { title: "Framer.Motion" },
      ],
      coverImg:
        "https://cdn.dribbble.com/userupload/4047570/file/original-f4c098b972f07f621733deb4e2e4ee13.png?compress=1&resize=1504x1128",

      description: "Project Manager and Bug Tracker",
      live: "",
      code: "https://github.com/colewinslow/IssuesManagerPro",
    },
    {
      id: 2,
      title: "Roles.io",
      tech: [
        { title: "React" },
        { title: "MySQL" },
        { title: "Sequelize" },
        { title: "Express" },
        { title: "Node" },
        { title: "TailwindCSS" },
      ],
      coverImg:
        "https://cdn.dribbble.com/users/1937255/screenshots/17730757/media/5f1a23f81f104e47fcb06069b2456b21.png?compress=1&resize=1600x1200&vertical=top",
      description: "Management System for Roles",
      live: "",
      code: "https://github.com/colewinslow/Roles.io",
    },
    {
      id: 3,
      title: "PuzzleMyImage",
      tech: [
        { title: "React" },
        { title: "Img Uploads" },
        { title: "Algorithm Design" },
        { title: "Stripe" },
        { title: "Google Firebase" },
      ],
      coverImg:
        "https://cdn.dribbble.com/userupload/3279154/file/original-d95ded83b926de6bd359ec2d12d13ec7.png?compress=1&resize=1504x1128",
      description: "Puzzle Creation and Shop",
      live: "",
      code: "https://github.com/colewinslow/PuzzleMyImage",
    },
    {
      id: 4,
      title: "Talkz Messenger",
      tech: [
        { title: "React" },
        { title: "TypeScript" },
        { title: "graphQL" },
        { title: "Redux" },
        { title: "Web Sockets" },
      ],
      coverImg:
        "https://cdn.dribbble.com/users/393931/screenshots/17594585/media/afb517c99764e5c75b2b125526a21ef6.png?compress=1&resize=1600x1200&vertical=top",
      description: "Chat Application",
      live: "",
      code: "https://github.com/colewinslow/TalkzMessenger",
    },
  ];
  return (
    <div name="projects" className="portfolio">
      <h2 className="secondary-title">Programming Portfolio</h2>
      <p className="hero-text">
        See what the power of coding I can do! Check out these full-stack
        applications I've created below.
      </p>
      <div className="project-container">
        {ProjectList.map((project) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: -1 }}
              transition={{ stiffness: 100, delay: `0.${project.id}` }}
              animate={{ opacity: 1, y: 0 }}
              className="project-card"
            >
              <div className="img-cont">
                <img
                  src={project.coverImg}
                  className="project-img"
                  alt={project.title}
                />
              </div>
              <p className="project-text">{project.description}</p>{" "}
              <div className="tech-cont">
                {project.tech.map((elm) => {
                  return <span className="tech">{elm.title}</span>;
                })}
              </div>
              <button className="card-btn">Code Repository</button>
              <button className="card-btn live">Live Website</button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
