import React from "react";
import Header from "../../Layouts/Header/Header";
import classes from "./OurService.module.css";
import Container2 from "../../Layouts/Container2/Container2";
import Footer from "../../Layouts/Footer/Footer";
import Container4 from "../../Layouts/Container4/Container4";
import Container3 from "../../Layouts/Container3/Container3";
import Highlights from "../../Layouts/Highlights/Highlights";
import Image from "../../components/Image/Image";
import DesignSystem from "../../Layouts/Container1/DesignSystem";
import FloatContainer from "../../Layouts/FloatContainer/FloatContainer";
import CaraouselContainer from "../../Layouts/CaraouselContainer/CaraouselContainer";

function OurService() {
  return (
    <div className={classes.container} data-testid="our-service-component">
      <Header />
      <DesignSystem />
      <Image />
      <Container2 />
      <Highlights />
      <FloatContainer />
      <CaraouselContainer />
      <Container3 />
      <Container4 />
      <Footer />
    </div>
  );
}

export default OurService;
