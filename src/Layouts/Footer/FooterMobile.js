import React from "react";
import classes from "./Footer.module.css";
import { socialMedia, menu, menu2 } from "../../utils/data";
import logo from "../../assets/LOGO.png";
function FooterMobile() {
  return (
    <div className={classes.footer}>
      <img src={logo} alt="logo" className={classes.logofooter} />
      <div>
        {menu.map((item) => (
          <p key={item} className={classes.menuList}>
            {item}
          </p>
        ))}
      </div>
      <div>
        {menu2.map((item) => (
          <p key={item} className={classes.menuList}>
            {item}
          </p>
        ))}
      </div>
      <div className={classes.socialMedia}>
        {socialMedia.map((item) => (
          <li key={item} className={classes.socialMediaText}>
            {item}
          </li>
        ))}
      </div>
      <div >
        <p className={classes.domain}>Business enquiries:</p>
        <p className={classes.contact}>eshani@spinachexperience.design</p>
        <p className={classes.contact}>+91 9821297209</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div >
        <p className={classes.domain}>Career enquiries:</p>
        <p className={classes.contact}>fedora@spinachexperience.design</p>
        <p className={classes.contact}>+91 8097260369</p>
      </div>
      <div>
        <p className={classes.add}>Address:</p>
        <p className={classes.address}>
          7th floor, Corporate Park ||, Sion-Trombay Road, Chembur, Mumbai-
          400071 , India.
        </p>
        <p className={classes.map}>View on Google maps</p>
      </div>

      <hr className={classes.line} />
      <p className={classes.copyright}> © 2024 Spinach Experience Design</p>
    </div>
  );
}

export default FooterMobile;
