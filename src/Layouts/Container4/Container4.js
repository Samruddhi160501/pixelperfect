import React, { useState, useEffect } from "react";
import classes from "./Container4.module.css";
import illustration from "../../assets/Illustartion.png";
function Container4() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 390);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 390);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {isSmallScreen ? (
        <div className={classes.container}>
          <p className={classes.small}>/Next service</p>
          <h3 className={classes.heading}>Web and mobile apps</h3>
          <img
            src={illustration}
            alt="illustration"
            className={classes.img}
          ></img>
          <button className={classes.btn}>Know more</button>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.leftContainer}>
            <p className={classes.small}>/Next service</p>
            <h3 className={classes.heading}>Web and mobile apps</h3>
            <p className={classes.para}>
              Design stickiness and retention for web and mobile customer apps
              with our proven and tested Customer Experience Design process,
              builds behavioural engagement by leveraging Design Thinking for an
              end-to-end view of the customer acquisition and retention journey.
            </p>
            <button className={classes.btn}>Know more</button>
          </div>
          <img
            src={illustration}
            alt="illustration"
            className={classes.img}
          ></img>
        </div>
      )}
    </div>
  );
}

export default Container4;
