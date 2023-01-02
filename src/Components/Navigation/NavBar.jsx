import React from "react";
import Logo from "./Logo";
import MobileNavMenu from "./MobileNavMenu";
import SocialElements from "./SocialElements";
import WebNavMenu from "./WebNavMenu";

export default function NavBar() {
  return (
    <nav>
      {/* <div className="nav-header ">
        <div className="nav-header-info max-container">
          <p className="nav-header-text"></p>
          <div className="nav-header-social-cont">
            <SocialElements />
          </div>
        </div>
      </div> */}
      <div className="nav-link-box max-container">
        <div className="nav-menu-box">
          <Logo />
          <WebNavMenu />
          <MobileNavMenu />{" "}
        </div>
        <div className="nav-cta-cont">
          <div className="nav-header-social-cont">
            <SocialElements />
          </div>
          <button className="cta-btn">Resume</button>
        </div>
      </div>
    </nav>
  );
}
