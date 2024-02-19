import React, { useEffect, useState } from "react";
import classes from "./Footer.module.css";
import { socialMedia, menu, menu2 } from "../../utils/data";
import logo from "../../assets/LOGO.png";
import FooterMobile from "./FooterMobile";
function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 630);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 630);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <FooterMobile />
      ) : (
        <div className={classes.footer}>
          <div className={classes.socialMedia}>
            {socialMedia.map((item) => (
              <li key={item} className={classes.socialMediaText}>
                {item}
              </li>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingBottom: "10%",
            }}
          >
            <div className={classes.cont1}>
              <img src={logo} alt="logo" className={classes.logofooter} />
              <p className={classes.address}>
                7th floor, Corporate Park ||, Sion-Trombay Road, Chembur,
                Mumbai- 400071 , India.
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
            {isSmallScreen ? (
              <div className={classes.cont4updated}>
                <div>
                  <p className={classes.domain}>Business enquiries:</p>
                  <p className={classes.contact}>
                    eshani@spinachexperience.design
                  </p>
                  <p className={classes.contact}>+91 9821297209</p>
                </div>

                <div className={classes.cont42}>
                  <p className={classes.domain}>Career enquiries:</p>
                  <p className={classes.contact}>
                    fedora@spinachexperience.design
                  </p>
                  <p className={classes.contact}>+91 8097260369</p>
                </div>
              </div>
            ) : (
              <div className={classes.cont4}>
                <p className={classes.domain}>Business enquiries:</p>
                <p className={classes.contact}>
                  eshani@spinachexperience.design
                </p>
                <p className={classes.contact}>+91 9821297209</p>
                <br></br>
                <br></br>
                <br></br>
                <p className={classes.domain}>Career enquiries:</p>
                <p className={classes.contact}>
                  fedora@spinachexperience.design
                </p>
                <p className={classes.contact}>+91 8097260369</p>
              </div>
            )}
          </div>
          <hr className={classes.line} />
          <p className={classes.copyright}> © 2024 Spinach Experience Design</p>
        </div>
      )}
    </>
  );
}

export default Footer;
