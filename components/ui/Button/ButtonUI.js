import classes from "./ButtonUI.module.css";
import IconGitHub from "@/components/icons/github";
import IconExternalLink from "@/components/icons/externalLink";
import { useState } from "react";

const ButtonUI = ({ onClick, name, gitHubUrl, projectUrl, id, isClicked }) => {
  const iconExternal = `${classes["icon"]} ${classes["external-icon"]}`;
  const iconDiv = `${classes["icon-div"]}`;
  const projectName = `${classes["project-name"]} ${
    isClicked ? classes["clicked"] : ""
  }`;
  const container = `${classes["container"]} ${
    isClicked ? classes["clicked"] : ""
  }`;

  const handleClick = () => {
    onClick(id);
  };
  return (
    <div className={container} onClick={handleClick}>
      <h3 className={projectName} onClick={handleClick}>
        {name}
      </h3>
      <div className={iconDiv}>
        <a href={gitHubUrl} className={classes["icon"]}>
          <IconGitHub />
        </a>
        <a href={projectUrl} className={iconExternal}>
          <IconExternalLink />
        </a>
      </div>
    </div>
  );
};

export default ButtonUI;
