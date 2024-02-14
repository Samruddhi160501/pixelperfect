import React from "react";
import classes from "./Footer.module.css";
import { socialMedia, menu, menu2 } from "../../utils/data";
import logo from "../../assets/LOGO.png";
function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.socialMedia}>
        {socialMedia.map((item) => (
          <li className={classes.socialMediaText}>{item}</li>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={classes.cont1}>
          <img src={logo} alt="logo" className={classes.logofooter} />
          <p className={classes.address}>
            7th floor, Corporate Park ||, Sion-Trombay Road, Chembur, Mumbai-
            400071 , India.
          </p>
          <p className={classes.map}>View on Google maps</p>
        </div>
        <div className={classes.cont2}>
          {menu.map((item) => (
            <p key={item} className={classes.menuList}>
              {item}
            </p>
          ))}
        </div>
        <div className={classes.cont3}>
          {menu2.map((item) => (
            <p key={item} className={classes.menuList}>
              {item}
            </p>
          ))}
        </div>
        <div className={classes.cont4}>
          <p className={classes.domain}>Business enquiries:</p>
          <p className={classes.contact}>eshani@spinachexperience.design</p>
          <p className={classes.contact}>+91 9821297209</p>
          <br></br>
          <br></br>
          <br></br>
          <p className={classes.domain}>Career enquiries:</p>
          <p className={classes.contact}>fedora@spinachexperience.design</p>
          <p className={classes.contact}>+91 8097260369</p>
        </div>
      </div>
      <hr className={classes.line} />
      <p className={classes.copyright}> © 2024 Spinach Experience Design</p>
    </div>
  );
}

export default Footer;
