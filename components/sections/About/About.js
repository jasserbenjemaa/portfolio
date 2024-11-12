"use client";
import React from "react";
import classes from "./About.module.css";
import ScrollingMotion from "../../ScrollingMotion";


const four = (
  <>
    <p className={classes["para"]}>
        <p>I’m passionate about creating impactful web experiences.</p>

        <h2>My Journey</h2>
        <p>My journey in web development began with tackling personal projects that evolved from curiosity to expertise. Fast-forward to today, I’ve had opportunities to contribute to varied projects, including working with React, .NET, and Python.</p>

        <h2>Focus & Interests</h2>
        <p>I’m driven by a commitment to building secure, user-friendly applications and have a keen interest in modern tech challenges, like integrating 3D environments and robust user authentication.</p>
       
      .
    </p>
  </>
);

const items = [ four];
const About = () => {
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

export default About;
