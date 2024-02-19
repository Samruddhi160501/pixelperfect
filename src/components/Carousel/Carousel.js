import React, { useState } from "react";
import phase0 from "../../assets/Phase0.png";
import phase1 from "../../assets/Phase1.png";
import phase2 from "../../assets/Phase2.png";
import phase3 from "../../assets/Phase3.png";
import phase4 from "../../assets/Phase4.png";
import phase5 from "../../assets/Phase5.png";
import classes from "./Carousel.module.css";
import Image1 from "../../assets/Image2.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image2.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { SMALL } from "../../utils/data";
const images = [phase0, phase1, phase2, phase3, phase4, phase5];
const images2 = [Image1, Image2, Image3];

function Carousel({ container }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isSmallScreen = window.innerWidth <= 744;
  const isMobileScreen = window.innerWidth <= 390;

  const handlePrev = (images) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (images) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {container === SMALL ? (
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            overflow: "hidden",
            paddingLeft: `${
              isSmallScreen ? "0px" : isMobileScreen ? "0px" : "10%"
            }`,
            paddingTop: "5%",
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
              onClick={() => handlePrev(images)}
            />
            <MdOutlineArrowRightAlt
              size="48px"
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => handleNext(images)}
            />
          </div>
        </div>
      ) : (
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
            {images2.map((imageUrl, index) => (
              <img
                src={imageUrl}
                key={index}
                className={classes.image}
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
            onClick={() => handlePrev(images2)}
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
            onClick={() => handleNext(images2)}
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
      )}
    </>
  );
}

export default Carousel;
