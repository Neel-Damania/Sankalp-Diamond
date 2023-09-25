import React from "react";
import Navbar from "../components/Navbar.js";
import ImageSlider from "../components/ImageSlider.js";
import { Box } from "@chakra-ui/react";

import prod1 from "../assets/images/Prod1.png";

import prod3 from "../assets/images/Prod3.png";
import prod4 from "../assets/images/Prod4.png";

const Home = () => {
  const images = [prod4, prod3, prod1];
  return (
    <Box bgColor="gray.200" h="100vh">
      <Navbar />

      <ImageSlider images={images} />
    </Box>
  );
};

export default Home;
