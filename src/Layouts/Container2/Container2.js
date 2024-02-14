import React from "react";
import classes from "./Container2.module.css";
import { data1 } from "../../utils/data";
import Card1 from "../../components/cards/Card1";
import Carousel from "../../components/Carousel/Carousel";
function Container2() {
  return (
    <div className={classes.container2}>
      <h1 className={classes.heading}>
        A design system for website & apps is critical to resolve:
      </h1>
      <div className={classes.card}>
        {data1.map((data) => (
          <Card1 i={data.i} title={data.title} />
        ))}
      </div>
      <hr
        style={{
          width: "60px",
          border: "2px solid rgba(4, 4, 4, 1)",
          marginTop: "5%",
          textAlign: "center",
        }}
      ></hr>

      <h1 className={classes.heading2}>
        Our proven methodology for Design Systems.{" "}
      </h1>
      <p className={classes.para2}>
        Redesigning a design system is a densely strategised process that
        involves careful planning, collaboration, and iterative refinement.
      </p>
      <Carousel/>
    </div>
  );
}

export default Container2;
