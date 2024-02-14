import React from "react";

import classes from "./Card1.module.css";
function Card1(props) {
  return (
    <div className={classes.contianer}>
      <p className={classes.para}>{props.i}</p>
      <h3 className={classes.heading}>{props.title}</h3>
    </div>
  );
}

export default Card1;
