import React from "react";
import { Box, Heading, Text, Container, Image } from "@chakra-ui/react";
import construction from "../assets/images/construction.jpg";
import Navbar from "../components/Navbar.js";

const Construction = () => {
  return (
    <Box w="100vw" h="100vh" bg="gray.100" overflowX="hidden">
      <Navbar />
      <Container maxW="container.md" p={4}>
        <Box maxW="600px" mx="auto" mb={4}>
          <img
            src={construction}
            alt="Under Construction"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>
        <Heading as="h1" size="2xl" mb={4} textAlign="center" color="teal.500">
          Coming Soon!
        </Heading>
        <Text fontSize="xl" textAlign="center" color="gray.700">
          We are working on something amazing! Please check back later.
        </Text>
      </Container>
    </Box>
  );
};

export default Construction;
