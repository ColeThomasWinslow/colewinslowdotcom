import React from "react";
import Marquee from "react-fast-marquee";
export default function Skills() {
  const FrontEndSkills = [
    {
      id: 1,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      id: 2,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      id: 3,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      id: 4,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      id: 5,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      id: 6,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    { id: 7, img: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
  ];
  const BackEndSkills = [
    {
      id: 8,
      img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      id: 9,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      id: 10,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      id: 11,
      img: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    },
    {
      id: 12,
      img: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    },
    {
      id: 13,
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      id: 14,
      img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
  ];

  return (
    <div name="skills">
      <div className="skills-top slanted-div"></div>

      <div className="skills-content">
        {" "}
        <h2 className="secondary-title">Developer Skills</h2>
        <p className="skills-para">
          <span className="Skills-tech"> HTML</span>{" "}
          <span className="Skills-tech">CSS</span>
          <span className="Skills-tech"> Javascript</span>
          <span className="Skills-tech"> Typescript</span>
          <span className="Skills-tech"> SQL</span>{" "}
          <span className="Skills-tech">
            View all skills on my resume
            <svg
              viewBox="0 0 23 23"
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
          </span>
        </p>{" "}
        <Marquee loop={0} speed={90} gradient={false}>
          {" "}
          {FrontEndSkills.map(({ id, img }) => {
            return (
              <div key={id} className="slide">
                <img src={img} alt={img} />
              </div>
            );
          })}
        </Marquee>
        <Marquee speed={90} direction={"right"} gradient={false}>
          {BackEndSkills.map(({ id, img }) => {
            return (
              <div key={id} className="slide ">
                <img src={img} alt={img} />
              </div>
            );
          })}
        </Marquee>{" "}
      </div>
      <div className="skills-bottom "></div>
    </div>
  );
}
