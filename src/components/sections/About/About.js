import React from "react";
import classes from "./About.module.css";
import ScrollingMotion from "../../ScrollingMotion";
import node from "../../icons/node";
import react from "../../icons/react";
import Card from "./Card";

const About = () => {
  const backend = ["Node.js", "SQL", "Java", "Python"];
  return (
    <ScrollingMotion>
      <div className={classes["about"]}>
        <h2 className={classes["about-me"]}>About Me</h2>
        <div className={classes["container"]}>
          <div className={classes["paragraph"]}>
            <p className={classes["para"]}>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!{<br />} Fast-forward to today, and I’ve had the
              privilege of working at an advertising agency, a start-up, a huge
              corporation, and a student-led design studio. My main focus these{" "}
              {<br />}days is building accessible, inclusive products and
              digital experiences at Upstatement for a variety of clients. I
              also recently launched a course that covers everything you need to
              build a web app with the Spotify API using Node & React.
            </p>
          </div>
          <Card icon={node} tec={{ end: "Backend", list: backend }} />
          <Card icon={react} tec={{ end: "Frontend", list: backend }} />
        </div>
      </div>
    </ScrollingMotion>
  );
};

export default About;
