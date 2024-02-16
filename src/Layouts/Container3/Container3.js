import React, { useState, useEffect } from "react";
import classes from "./Container3.module.css";
import vector2 from "../../assets/Vector2.png";
export default function Container3() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1440);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.con}>
        <h2 className={classes.heading}>
          Feeling the lag of inconsistent design?
        </h2>
        <p className={classes.para}>
          {isSmallScreen ? "Book a consultation with us." : "Partner with us"}
        </p>
        <button className={classes.connectbtn}>Connect now</button>
      </div>
      <img src={vector2} alt="vector" className={classes.imgvector}></img>
    </div>
  );
}
