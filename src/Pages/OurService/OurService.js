import React from "react";
import Header from "../../Layouts/Header/Header";
import classes from "./OurService.module.css";
import photo1 from "../../assets/photo1.png";
import Container2 from "../../Layouts/Container2/Container2";
import Footer from "../../components/Footer/Footer";
import Container4 from "../../Layouts/Container4";
import Container3 from "../../Layouts/Container3/Container3";
import Highlights from "../../Layouts/Highlights/Highlights";
import { designmenu } from "../../utils/data";
function OurService() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.heading}>
        <h1 className={classes.text}>Design Systems for scale</h1>
        <p className={classes.para}>
          Add consistency to the scaling up of User Experience with an organized
          assembly of guidelines, components and documentation.
        </p>
      </div>
      <img src={photo1} alt="photo1" className={classes.photo1} />
      <Container2 />
      <Highlights />
      <div className={classes.designSystem}>
        <h3 className={classes.heading2}>Design Systems are ideal for :</h3>
        <hr className={classes.line} />
        <div className={classes.designContainer}>
          {designmenu.map((item) => (
            <div key={item.id} className={item.id === '/02' ? classes.cardHighlighted : classes.card}>
              <p>{item.id}</p>
              <p style={{marginLeft:"15px"}}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Container3 />
      <Container4 />
      <Footer />
    </div>
  );
}

export default OurService;
