import React from "react";

export default function WebNavMenu() {
  const NavLinks = [
    { id: 1, title: "Home", icon: "", link: "/projects" },
    { id: 2, title: "Projects", icon: "", link: "/projects" },
    { id: 3, title: "About ", icon: "", link: "/projects" },
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
