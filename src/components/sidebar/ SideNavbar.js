import React from "react";
import classes from "./Sidenavbar.module.css";
import Github from "../icons/github";
import Linkedin from "../icons/linkedin";
import Email from "../icons/email";

const Navbar = () => {
  return (
    <nav className={classes["nav"]}>
      <div className={classes["container"]}>
        <div className={classes["icons"]}>
          <a
            href="mailto:jasserj663@gmail.com"
            className={classes["email-icon"]}
          >
            <Email />
          </a>
          <a
            href="https://github.com/jasserbenjemaahttps://github.com/jasserbenjemaa"
            className={classes["github-icon"]}
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/jasser-ben-jomaa-910468310/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className={classes["linkedin-icon"]}
          >
            <Linkedin />
          </a>
        </div>
        <div className={classes["line"]}></div>
      </div>
    </nav>
  );
};

export default Navbar;
