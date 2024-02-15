import React from "react";
import classes from "./Container3.module.css";
import vector2 from  "../../assets/Vector2.png";
export default function Container3() {
  return (
    <div className={classes.container}>
      <div className={classes.con}>
        <h2 className={classes.heading}>
          Feeling the lag of inconsistent design?
        </h2>
        <p className={classes.para}>Partner with us</p>
        <button className={classes.connectbtn}>Connect now</button>
      </div>
      <img src={vector2} alt="vector" className={classes.imgvector}></img>

    </div>
  );
}
