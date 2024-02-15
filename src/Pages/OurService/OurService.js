import React, { useState } from "react";
import Header from "../../Layouts/Header/Header";
import classes from "./OurService.module.css";
import Container2 from "../../Layouts/Container2/Container2";
import Footer from "../../components/Footer/Footer";
import Container4 from "../../Layouts/Container4/Container4";
import Container3 from "../../Layouts/Container3/Container3";
import Highlights from "../../Layouts/Highlights/Highlights";
import { designmenu } from "../../utils/data";
import Image1 from "../../assets/Image2.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image2.png";
import Image from "../../components/Image/Image";
const images = [Image1, Image2, Image3];
const isSmallScreen = window.innerWidth <= 1024;

function OurService() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

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
      <Image />
      <Container2 />
      <Highlights />
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
              <p style={{ marginLeft: "15px" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.caraouselContainer} style={{ marginTop: "-5%" }}>
        <h3 className={classes.heading3}>Our previous experience.</h3>
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            overflow: "hidden",
            paddingTop: "2%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${currentImageIndex * (100 / 3)}%)`,
            }}
          >
            {images.map((imageUrl, index) => (
              <img
                src={imageUrl}
                key={index}
                className={classes.crop_image}
                alt={index}
              />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              left: "10px",
              cursor: "pointer",
              background: "rgba(255,255,255,0.5)",
              padding: "5px",
            }}
            onClick={handlePrev}
          >
            {/* Left arrow SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M15.71 15.88L10.59 12l5.12-3.88a.996.996 0 1 0-1.41-1.47l-6 4.5a.996.996 0 0 0 0 1.47l6 4.5a.996.996 0 1 0 1.41-1.47z" />
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              right: "10px",
              cursor: "pointer",
              background: "rgba(255,255,255,0.5)",
              padding: "5px",
            }}
            onClick={handleNext}
          >
            {/* Right arrow SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8.71 15.88L13.83 12 8.71 8.12a.996.996 0 1 1 1.41-1.41l5.59 5.59a.996.996 0 0 1 0 1.41l-5.59 5.59a.996.996 0 1 1-1.41-1.41z" />
            </svg>
          </div>
        </div>
      </div>
      <Container3 />
      <Container4 />
      <Footer />
    </div>
  );
}

export default OurService;
