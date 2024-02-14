import React from "react";
import photo1 from "../../assets/photo1.png";

function Image() {
  return (
    <img
      src={photo1}
      alt="photo1"
      style={{
        backgroundColor:"black",
        margin: "0",
        padding: "0",
        width: "100%",
      }}
    />
  );
}

export default Image;
