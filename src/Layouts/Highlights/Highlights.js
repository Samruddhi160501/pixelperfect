import React from "react";
import { highlight } from "../../utils/data";
import classes from "./Highlits.module.css";
function Highlights() {
  return (
    <div className={classes.container} data-testid="highlights">
      <p className={classes.heading}>Design system process highlights:</p>
      <p className={classes.heading2}>
        A Design System redesign roadmap has to be delicately handled and marked
        out with much careful consideration rather than impulse.
      </p>
      <div className={classes.cardcontainer}>
        {highlight.map((item) => (
          <div className={classes.card} key={item.id}>
            <p className={classes.id}>{item.id}</p>
            <p className={classes.title}>{item.title}</p>
            <p className={classes.para}>{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
