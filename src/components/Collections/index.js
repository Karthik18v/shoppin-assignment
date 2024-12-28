import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const images = [
  "https://i.imghippo.com/files/wcVT2624KA.jpeg",
  "https://i.imghippo.com/files/KTLK7363yQ.jpeg",
  "https://i.imghippo.com/files/tXSK4365Ts.jpeg",
  "https://i.imghippo.com/files/TG6051wo.jpeg",
  "https://i.imghippo.com/files/poJb4930ouk.jpeg",
  "https://i.imghippo.com/files/dqy4432dhY.jpeg",
  "https://i.imghippo.com/files/sjRf8986Aj.jpeg",
];

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Collections = () => {
  return (
    <div className="main">
      <img
        src="https://i.imghippo.com/files/jpdb5018iY.png"
        alt="watch"
        className="watch"
      />
      <Slider {...settings}>
        {images.map((each) => (
          <div>
            <img src={each} alt="band" className="band" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Collections;
