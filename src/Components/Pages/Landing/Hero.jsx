import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div name="home" className="hero">
      <div className="hero-body">
        <h1 className="hero-title">
          Hi, I'm
          <motion.span
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            animate={{ opacity: 1 }}
          >
            Cole Winslow
          </motion.span>
          <br />
          Welcome to my Website! <br />
        </h1>
        <div>
          <p className="hero-text">
            Im a software engineer & passionate coder who loves to build out
            applications using Javascript{" "}
            <img
              className="JS-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="20"
              height="20"
            />
            . Take a look at what i've created below and feel free to reach out
            via LinkedIn or email me at
            <a className="email-link" href="/">
              colewinslow174@gmail.com.
            </a>
          </p>
        </div>{" "}
        <div className="hero-cta-box">
          <>
            <motion.a
              initial={{ x: "-100vw" }}
              transition={{ stiffness: 500, ease: "linear" }}
              animate={{ x: 1 }}
              exit={{ x: "-100vw" }}
              href="/"
              className="hero-btn"
            >
              <img
                data-src="https://doimages.nyc3.digitaloceanspaces.com/github-logo.svg"
                src="https://doimages.nyc3.digitaloceanspaces.com/github-logo.svg"
                alt="GitHub Icon"
                class="hero-btn-icon"
              ></img>{" "}
              View my Github
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: "100vw" }}
              transition={{ stiffness: 500, ease: "linear" }}
              animate={{ x: 1, opacity: 1 }}
              href="/"
              className="hero-btn"
            >
              <svg
                class="hero-btn-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
              >
                <g fill="none" fill-rule="evenodd">
                  <rect width="72" height="72" fill="#117EB8" rx="4" />
                  <path
                    fill="#FFF"
                    d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                  />
                </g>
              </svg>{" "}
              Message me on linkedIn
            </motion.a>
          </>
        </div>
      </div>
    </div>
  );
}

export default Hero;
