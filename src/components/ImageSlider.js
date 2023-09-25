import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/ImageSlider.css";
import { Box, Heading, Text } from "@chakra-ui/react";

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
    <Box position="relative">
      <Slider {...settings} className="image-slider">
        {images.map((imageUrl, index) => (
          <div key={index}>
            <div className="image-container">
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="slider-image"
              />
              <div className="slick-dots-container">
                <ul className="slick-dots" />
              </div>
              <div className="image-overlay">
                <div className="construction-text">
                  <Heading
                    as="h1"
                    size="lg"
                    fontSize={{ base: "l", md: "4xl" }}
                    color="white"
                  >
                    Website Under Construction
                  </Heading>
                  <Text as="i" fontSize={{ base: "lg", md: "4xl" }}>
                    Our team is working hard to bring you an amazing experience.
                    Stay tuned for updates!
                  </Text>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
  );
};
export default ImageSlider;
