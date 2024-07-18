import React from "react";
import classes from "./Hero.module.css";
import ScrollingMotion from "../../ScrollingMotion";

const one = <h1>Hi, my name is</h1>;
const two = <h2>Jasser Ben Jomaa</h2>;
const three = <h3>a software engineer </h3>;
const four = (
  <>
    <p>
      I’m a software engineer specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I’m focused on
      building accessible, human-centered products at{" "}
      <a
        href="https://upstatement.com/"
        target="_blank"
        rel="noreferrer"
        className={classes["link"]}
      >
        Upstatement
      </a>
      .
    </p>
  </>
);

const items = [one, two, three, four];
const Hero = () => {
  return (
    <div className={classes["hero"]}>
      {items.map((item, i) => (
        <ScrollingMotion key={i} styleProps={{ delay: i / 10 }}>
          <div>{item}</div>
        </ScrollingMotion>
      ))}
    </div>
  );
};

export default Hero;
