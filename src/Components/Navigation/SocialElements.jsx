import React from "react";

export default function SocialElements() {
  const Socials = [
    { id: 1, title: "LinkedIn.com", icon: "", link: "" },
    { id: 2, title: "Github.com", icon: "", link: "" },
    { id: 3, title: "Chess.com", icon: "", link: "" },
  ];
  return (
    <div className="socials">
      {Socials.map((social) => {
        return (
          <a className="social-element" href={social.link} target="_blank">
            <img
              className="social-element-icon"
              src={social.icon}
              alt={social.title}
            />
          </a>
        );
      })}
    </div>
  );
}
