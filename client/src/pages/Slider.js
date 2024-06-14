import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "./Slider.css";
// import {img} from "../images1/chivda.jpg"

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Adjust the autoplay interval as needed
      >
        <div>
          <img
            className="slide-img"
            src={require("../images1/first-s.png")}
            alt="Image X"
          />
        </div>
        <div>
          <img src={require("../images1/second-s.png")} alt="Image Y" />
        </div>
        <div>
          <img src={require("../images1/third-s.png")} alt="Image Z" />
        </div>
        <div>
          <img src={require("../images1/fourth-s.png")} alt="Image C" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
