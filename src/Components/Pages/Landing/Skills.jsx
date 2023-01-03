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
        <div className="slider frontend">
          {" "}
          {FrontEndSkills.map(({ name }) => {
            return <div className="slide">{name}</div>;
          })}
        </div>
        <div className="slider backend ">
          {BackEndSkills.map(({ name }) => {
            return <div className="slide">{name}</div>;
          })}
        </div>
      </div>
      <div className="skills-bottom"></div>
    </div>
  );
}
