import React, { useEffect, useState } from "react";
import classes from "./Container2.module.css";
import { data1, SMALL } from "../../utils/data";
import Card1 from "../../components/cards/Card1";
import Carousel from "../../components/Carousel/Carousel";
function Container2() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 744);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={classes.container2}>
      <h1 className={classes.heading}>
        A design system for website & apps is critical to resolve:
      </h1>
      <div className={classes.card}>
        {data1.map((data) => (
          <Card1 i={data.i} title={data.title} key={data.id} />
        ))}
      </div>
      {isMobile ? (
        <hr
          style={{
            display: "none",
          }}
        ></hr>
      ) : (
        <hr
          style={{
            width: "60px",
            border: "2px solid rgba(4, 4, 4, 1)",
            marginTop: "5%",
            textAlign: "center",
          }}
        ></hr>
      )}

      <h1 className={classes.heading2}>
        Our proven methodology for Design Systems.
      </h1>
      <p className={classes.para2}>
        Redesigning a design system is a densely strategised process that
        involves careful planning, collaboration, and iterative refinement.
      </p>
      <Carousel container={SMALL} />
      <hr
        style={{
          width: "100%",
          marginTop: "5%",
          textAlign: "center",
          border: "1px solid rgba(224, 224, 224, 1)",
        }}
      ></hr>
    </div>
  );
}

export default Container2;
