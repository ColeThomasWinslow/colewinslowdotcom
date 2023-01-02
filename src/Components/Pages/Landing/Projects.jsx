import React from "react";

export default function Projects() {
  const ProjectList = [
    {
      id: 1,
      title: "IssuesMangerPro",
      tech: [{ id: 1, title: "React" }],
      coverImg: "",
      description: "Bug Tracker and Project Manager",
      live: "",
      code: "https://github.com/colewinslow/IssuesManagerPro",
    },
    {
      id: 2,
      title: "Roles.io",
      tech: [{ id: 1, title: "React" }],
      coverImg: "",
      description: "Business Management System for Roles",
      live: "",
      code: "https://github.com/colewinslow/Roles.io",
    },
    {
      id: 3,
      title: "PuzzleMyImage",
      tech: [{ id: 1, title: "React" }],
      coverImg: "",
      description: "Puzzle Creation And E-commerce Shop",
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
      <div className="project-container">
        {ProjectList.map((project) => {
          return (
            <div className="project-card">
              <h3>{project.title}</h3>
              <p className="project-text">{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
