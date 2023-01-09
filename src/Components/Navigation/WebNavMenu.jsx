import React from "react";
import { Link } from "react-scroll";

export default function WebNavMenu() {
  const NavLinks = [
    { id: 1, title: "Home", icon: "", link: "home" },
    { id: 2, title: "Skills", icon: "", link: "skills" },
    { id: 3, title: "Portfolio", icon: "", link: "portfolio" },
    // { id: 2, title: "Coding ", icon: "", link: "coding" },
    { id: 4, title: "About", icon: "", link: "about" },
  ];
  return (
    <div className="web-nav-menu">
      {NavLinks.map((elm) => {
        return (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-25}
            duration={400}
            className="nav-element"
            to={elm.link}
          >
            {elm.title}
          </Link>
        );
      })}
    </div>
  );
}
