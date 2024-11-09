"use client";
import classes from "./SideProject.module.css";
import React, { useState } from "react";
import Image from "next/image";
import ButtonUI from "../../ui/Button/ButtonUI";
import projects from "../../../contents/projects/project";

const container = `${classes["container"]}`;
const wrapper = `${classes["wrapper"]}`;
const image = `${classes["image"]}`;
const description = `${classes["description"]}`;
const buttons = `${classes["buttons"]}`;

const SideProject = () => {
  const [number, setNumber] = useState(0);
  const numberHandler = (id) => {
    console.log(id);
    setNumber(id);
  };
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={image}>
          <Image
            src={projects[number].image}
            alt={`project number ${number}`}
          />
        </div>
        <div className={buttons}>
          {projects.map((e) => (
            <ButtonUI
              isClicked={e.id === number}
              onClick={numberHandler}
              id={e.id}
              key={e.id}
              name={e.name}
              githubUrl={e.gitHubUrl}
              projectUrl={e.projectUrl}
            />
          ))}
        </div>
        <div className={description}>
          <p>{projects[number].description}</p>
          <div>{projects[number].tec.map((e) => e)}</div>
        </div>
      </div>
    </div>
  );
};

export default SideProject;
