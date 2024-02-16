import React from "react";
import classes from "../../Pages/OurService/OurService.module.css";
import Carousel from "../../components/Carousel/Carousel";
function CaraouselContainer() {
  return (
    <div className={classes.caraouselContainer} style={{ marginTop: "-5%" }}>
      <h3 className={classes.heading3}>Our previous experience.</h3>
      <Carousel container="big" />
    </div>
  );
}

export default CaraouselContainer;
