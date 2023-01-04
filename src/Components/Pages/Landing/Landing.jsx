import React from "react";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Landing() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}
