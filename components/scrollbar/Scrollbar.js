import React, { useEffect } from "react";
import classes from "./Scrollbar.module.css";

const Scrollbar = () => {
  useEffect(() => {
    const progress = document.getElementById("pro");
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    const handleScroll = () => {
      const progressHeight = (window.pageYOffset / totalHeight) * 63.3;
      progress.style.height = `${progressHeight}%`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={classes["bar"]}></div>
      <div className={classes["progressbar"]} id="pro"></div>
    </>
  );
};

export default Scrollbar;
