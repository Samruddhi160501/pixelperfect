import React, { useState } from "react";
import Image1 from "../../assets/Image2.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image2.png";
import classes from "../../Pages/OurService/OurService.module.css"
const images = [Image1, Image2, Image3];
function CaraouselContainer() {
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
  );
}

export default CaraouselContainer;
