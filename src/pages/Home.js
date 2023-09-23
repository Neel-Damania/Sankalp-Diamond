import React from "react";
import Navbar from "../components/Navbar.js";
import ImageSlider from "../components/ImageSlider.js";
import { Flex, Box } from "@chakra-ui/react";
import image1 from "../assets/images/Product1.jpg";
import image2 from "../assets/images/Product2.jpg";
import image3 from "../assets/images/Product3.jpg";
import image4 from "../assets/images/Product4.jpg";

const Home = () => {
  const images = [image1, image2, image3, image4];
  return (
    <Box bgColor="gray.200" h="100vh">
      <Navbar />
      <ImageSlider images={images} />
    </Box>
  );
};

export default Home;
