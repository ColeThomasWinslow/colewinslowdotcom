import React from "react";
import { Link } from "react-scroll";

export default function WebNavMenu() {
  const NavLinks = [
    { id: 0, title: "Home", icon: "", link: "home" },
    { id: 1, title: "Skills", icon: "", link: "skills" },
    { id: 2, title: "Portfolio", icon: "", link: "portfolio" },
    { id: 2, title: "About", icon: "", link: "about" },
  ];
  return (
    <div className="web-nav-menu">
      {NavLinks.map((elm) => {
        return (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="nav-element"
            to={elm.link}
            href={elm.link}
          >
            {elm.title}
          </Link>
        );
      })}
    </div>
  );
}
