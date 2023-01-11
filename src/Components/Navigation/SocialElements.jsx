import React from "react";
import LinkedIn from "../../Assets/LinkedIn.svg";
import Github from "../../Assets/Github.svg";
import Chess from "../../Assets/Chess.svg";
import { motion } from "framer-motion";
export default function SocialElements() {
  const Socials = [
    { id: 1, title: "Chess.com", icon: Chess, link: "" },
    { id: 2, title: "LinkedIn.com", icon: LinkedIn, link: "" },
    { id: 3, title: "Github.com", icon: Github, link: "" },
  ];
  return (
    <>
      {Socials.map((social) => {
        return (
          <motion.a
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            whileTap={{ scale: 0.95 }}
            className="social-element"
            rel="noreferrer"
            href={social.link}
            target="_blank"
          >
            <img
              className="social-element-icon"
              src={social.icon}
              alt={social.title}
            />
          </motion.a>
        );
      })}
    </>
  );
}
