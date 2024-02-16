import React, { useState, useEffect } from "react";
import classes from "../../Pages/OurService/OurService.module.css";
import { designmenu } from "../../utils/data";

function FloatContainer() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1024);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={classes.designSystem}
      style={{ position: "relative", zIndex: 2 }}
    >
      <h3 className={classes.heading2}>
        {isSmallScreen ? "This is ideal for" : "Design Systems are ideal for"}
      </h3>
      <hr className={classes.line} />
      <div className={classes.designContainer}>
        {designmenu.map((item) => (
          <div
            key={item.id}
            className={
              item.id === "/02" ? classes.cardHighlighted : classes.card
            }
          >
            <p>{item.id}</p>
            <p className={classes.floatText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloatContainer;
