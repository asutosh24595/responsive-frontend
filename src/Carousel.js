import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import img1 from "./assets/assets-27.jpg";
import img2 from "./assets/assets-25.jpg";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="slider-container mt-3 mb-4">
      <Slider {...settings}>
        <div>
          <img src={img1} alt=""></img>
        </div>
        <div>
          <img src={img2} alt=""></img>
        </div>
        <div>
          <img src={img1} alt=""></img>
        </div>
        <div>
          <img src={img2} alt=""></img>
        </div>
        <div>
          <img src={img1} alt=""></img>
        </div>
        <div>
          <img src={img2} alt=""></img>
        </div>
        <div>
          <img src={img1} alt=""></img>
        </div>
        <div>
          <img src={img2} alt=""></img>
        </div>
        <div>
          <img src={img1} alt=""></img>
        </div>
        <div>
          <img src={img2} alt=""></img>
        </div>
        <div>
          <img src={img1} alt=""></img>
        </div>
        <div>
          <img src={img2} alt=""></img>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
