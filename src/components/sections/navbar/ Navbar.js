import React from "react";
import classes from "./navbar.module.css";
import Logo from "../../icons/logo";
const nav = [" Home", " About", " Projects", " Contact"];
const Navbar = () => {
  return (
    <nav className={classes["nav"]}>
      <a href="#home" className={classes["logo"]}>
        <Logo />
      </a>
      <ul className={classes["links"]}>
        {nav.map((e, i) => (
          <li href={`#${e}`}>
            <span className={classes["number"]}>0{i + 1}.</span>
            {e}
          </li>
        ))}
        <a
          className={classes["resume-link"]}
          href="resume.pdf"
          download={"./resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
