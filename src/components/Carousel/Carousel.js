import React, { useState } from "react";
import phase0 from "../../assets/Phase0.png";
import phase1 from "../../assets/Phase1.png";
import phase2 from "../../assets/Phase2.png";
import phase3 from "../../assets/Phase3.png";
import phase4 from "../../assets/Phase4.png";
import phase5 from "../../assets/Phase5.png";
import classes from "./Carousel.module.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const images = [phase0, phase1, phase2, phase3, phase4, phase5];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isSmallScreen = window.innerWidth <= 744;
  const isMobileScreen = window.innerWidth <= 390;

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
    <div
      style={{
        position: "relative",
        maxWidth: "100%",
        overflow: "hidden",
        paddingLeft: `${
          isSmallScreen ? "64px" : isMobileScreen ? "24px" : "167px"
        }`,
        paddingTop: "2%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${
            currentImageIndex * (100 / images.length)
          }%)`,
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
      <div className={classes.arrowcontainer}>
        <MdOutlineArrowRightAlt
          size="48px"
          style={{
            color: "black",
            cursor: "pointer",
            transform: "rotate(180deg)",
          }}
          onClick={handlePrev}
        />
        <MdOutlineArrowRightAlt
          size="48px"
          style={{ color: "black", cursor: "pointer" }}
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default Carousel;
