import { motion } from "framer-motion";
import React from "react";
export default function Projects() {
  const ProjectList = [
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
        "https://cdn.dribbble.com/userupload/4047570/file/original-f4c098b972f07f621733deb4e2e4ee13.png?compress=1&resize=1504x1128",

      description: "Project Management tool",
      live: "",
      code: "https://github.com/colewinslow/Roles.io",
    },
    {
      id: 2,
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
    {
      id: 4,
      title: "PuzzleMyImage",
      tech: [
        { title: "React" },
        { title: "Img Uploads" },
        { title: "Algorithm Design" },
        { title: "Stripe" },
        { title: "Google Firebase" },
      ],
      coverImg:
        "https://cdn.dribbble.com/userupload/4157352/file/original-a58756522375e6108d370f4fcaeb60e0.jpg?compress=1&resize=2048x1536",
      description: "Puzzle Creation and Shop",
      live: "",
      code: "https://github.com/colewinslow/PuzzleMyImage",
    },
    {
      id: 3,
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
        "https://cdn.dribbble.com/users/1937255/screenshots/17730757/media/5f1a23f81f104e47fcb06069b2456b21.png?compress=1&resize=1600x1200&vertical=top",

      description: "Computers & Programming",
      live: "",
      code: "https://github.com/colewinslow/IssuesManagerPro",
    },
  ];
  return (
    <div name="projects" className="portfolio">
      <h2 className="secondary-title">Programming Portfolio</h2>
      <p className="hero-text">
        See what the power of coding I can do! Check out these <br />
        full-stack applications I've created below.
      </p>
      <div className="project-container">
        {ProjectList.map((project) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: -1 }}
              transition={{ stiffness: 100, delay: `0.${project.id}` }}
              animate={{ opacity: 1, y: 0 }}
              className="project-card-cont"
            >
              <div className="project-card">
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
                </div>{" "}
                <a
                  rel="noreferrer"
                  href={project.live}
                  target="_blank"
                  className="card-btn live"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.604 22.2601C18.1269 22.2601 22.604 17.783 22.604 12.2601C22.604 6.7373 18.1269 2.26015 12.604 2.26015C7.08116 2.26015 2.604 6.7373 2.604 12.2601C2.604 17.783 7.08116 22.2601 12.604 22.2601Z"
                      stroke="#24335a"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.604 12.2601H22.604"
                      stroke="#24335a"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.604 2.26015C15.1053 4.9985 16.5268 8.55218 16.604 12.2601C16.5268 15.9681 15.1053 19.5218 12.604 22.2601C10.1027 19.5218 8.68125 15.9681 8.604 12.2601C8.68125 8.55218 10.1027 4.9985 12.604 2.26015V2.26015Z"
                      stroke="#24335a"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Live Website
                </a>
                <a
                  rel="noreferrer"
                  href={project.code}
                  target="_blank"
                  className="card-btn"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9141 18.766L22.9141 12.766L16.9141 6.76601"
                      stroke="#24335a"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.91406 6.76601L2.91406 12.766L8.91406 18.766"
                      stroke="#24335a"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Code Repository
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
