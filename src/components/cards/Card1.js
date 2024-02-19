import React, { useState, useEffect } from "react";
import classes from "./Card1.module.css";

function Card1(props) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 744);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 744);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={
        isSmallScreen
          ? classes.smallScreenContainer
          : props.i === "/02" || props.i === "/03"
          ? classes.contianerHighlighted
          : classes.contianer
      }
    >
      <p className={classes.para}>{props.i}</p>
      <h3 className={classes.heading}>{props.title}</h3>
    </div>
  );
}

export default Card1;
