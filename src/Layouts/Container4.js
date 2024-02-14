import React from "react";
import classes from "./Container4.module.css";
import illustration from "../assets/Illustartion.png";
function Container4() {
  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <p className={classes.small}>/Next service</p>
        <h3 className={classes.heading}>Web and mobile apps</h3>
        <p className={classes.para}>
          Design stickiness and retention for web and mobile customer apps with
          our proven and tested Customer Experience Design process, builds
          behavioural engagement by leveraging Design Thinking for an end-to-end
          view of the customer acquisition and retention journey.
        </p>
        <button className={classes.btn}>Know more</button>
      </div>
      <img src={illustration} alt="illustration" className={classes.img}></img>
    </div>
  );
}

export default Container4;
