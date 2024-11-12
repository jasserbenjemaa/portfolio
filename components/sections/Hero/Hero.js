"use client";
import React from "react";
import classes from "./Hero.module.css";
import ScrollingMotion from "../../ScrollingMotion";

const one = <h1 className={classes["hi"]}>Hi, my name is</h1>;
const two = <h2 className={classes["name"]}>Jasser Ben Jomaa</h2>;
const three = <h3 className={classes["job"]}>a software engineer </h3>;
const four = (
  <>
    <p className={classes["para"]}>
      Hey there! I&#39;m Jasser, a computer science student with a love for web
      development. These days, I&#39;m diving deep into the world of ReactJS
      and NodeJS.{" "}
      <a href="mailto:jasserj663@gmail.com" className={classes["link"]}>
        Get In Touch
      </a>
      .
    </p>
  </>
);

const items = [one, two, three, four];
const Hero = () => {
  return (
    <div className={classes["container"]}>
      {items.map((item, i) => (
        <ScrollingMotion key={i} styleProps={{ delay: i / 10 }}>
          {item}
        </ScrollingMotion>
      ))}
    </div>
  );
};

export default Hero;
