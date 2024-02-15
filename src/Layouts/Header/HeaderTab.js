import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import menu from "../../assets/MENU.png";
import logo2 from "../../assets/LOGO2.png";
function HeaderTab() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div data-testid="header-tab">
      {isMobile ? (
        <div
          className={classes.container}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <img src={logo2} alt="logo" className={classes.logo2} />
          <img src={menu} alt="menu" className={classes.menu} />
        </div>
      ) : (
        <div
          className={classes.container}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className={classes.tab}>
            <img src={menu} alt="menu" className={classes.menu} />
            <img src={logo2} alt="logo" className={classes.logo2} />
          </div>
          <button className={classes.btn}>Engage Us</button>
        </div>
      )}
    </div>
  );
}

export default HeaderTab;
