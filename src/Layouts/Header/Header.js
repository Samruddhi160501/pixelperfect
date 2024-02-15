import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/LOGO.png";
import menu from "../../assets/MENU.png";
import { Link } from "react-router-dom";
import HeaderTab from "./HeaderTab";
function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [isTab, setIsTab] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsTab(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isTab ? (
        <HeaderTab />
      ) : (
        <div className={classes.container}>
          <div className={classes.left}>
            <img src={menu} alt="menu" className={classes.menu} />
            <img src={logo} alt="logo" className={classes.logo} />
          </div>
          <nav className={`${classes.navbar} ${showLinks ? classes.show : ""}`}>
            <ul>
              <Link className={classes.link}>
                The Company
              </Link>
              <Link  className={classes.link}>
                Our Services
              </Link>
              <Link  className={classes.link}>
                Our Expertise
              </Link>
              <Link  className={classes.link}>
                Client Work
              </Link>
            </ul>
          </nav>
          <button className={classes.btn}>Engage Us</button>
        </div>
      )}
    </>
  );
}

export default Header;
