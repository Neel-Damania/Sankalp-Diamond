import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
