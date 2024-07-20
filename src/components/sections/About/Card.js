import React from "react";
import classes from "./Card.module.css";
const Card = ({ icon, tec }) => {
  return (
    <div className={classes["tec"]}>
      <div className={classes["header"]}>
        <div className={classes["icon"]}>{icon()}</div>
        <h3 className={classes["end"]}>{tec.end}</h3>
      </div>
      <ul>
        {tec.list.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
