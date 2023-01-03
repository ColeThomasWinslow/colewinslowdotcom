import React from "react";

export default function WebNavMenu() {
  const NavLinks = [
    { id: 0, title: "Home", icon: "", link: "/home" },
    { id: 1, title: "Skills", icon: "", link: "/projects" },
    { id: 2, title: " Portfolio", icon: "", link: "/Portfolio" },
    { id: 3, title: "Contact", icon: "", link: "/Contact" },
  ];
  return (
    <div className="web-nav-menu">
      {NavLinks.map((elm) => {
        return (
          <a className="nav-element" href={elm.link}>
            {elm.title}
          </a>
        );
      })}
    </div>
  );
}
