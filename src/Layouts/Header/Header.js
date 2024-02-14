import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/LOGO.png";
import menu from "../../assets/MENU.png";
import { Link } from "react-router-dom";
import logo2 from "../../assets/LOGO2.png";
function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);
  const [isTab, setIsTab] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsTab(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        {isTab ? (
          <img src={logo2} alt="logo" className={classes.logo2} />
        ) : (
          <img src={logo} alt="logo" className={classes.logo} />
        )}
      </div>
      {isMobile ? (
        <div className={classes.right}>
          <img src={menu} alt="menu" className={classes.menu} />
        </div>
      ) : (
        <div className={classes.right}>
          <img src={menu} alt="menu" className={classes.menu} />
        </div>
      )}
      <nav className={`${classes.navbar} ${showLinks ? classes.show : ""}`}>
        <ul>
          <Link to="/company" className={classes.link}>
            The Company
          </Link>
          <Link to="/services" className={classes.link}>
            Our Services
          </Link>
          <Link to="/expertise" className={classes.link}>
            Our Expertise
          </Link>
          <Link to="/clientwork" className={classes.link}>
            Client Work
          </Link>
        </ul>
      </nav>
      <button className={classes.btn}>Engage Us</button>
    </div>
  );
}

export default Header;
