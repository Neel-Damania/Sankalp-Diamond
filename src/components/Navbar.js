import React from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  HStack,
  Image,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/SKP Full logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box boxShadow="lg" bg="#00FFFF">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        p={4}
        bg="white"
        color="#33d6ff"
        minH="10vh"
      >
        <Image
          src={logo}
          alt="Your Logo"
          display="block"
          ml={{ base: "20%", md: 20 }}
          w="200px"
          // aspectRatio="3/2"
          // objectFit="contain"
          mr="20px"
          // border="1px solid black"
          // backgroundColor="black"
        />

        <h1
          className="heading-container"
          style={{
            letterSpacing: "0.5rem",
            fontFamily: "Montserrat",
          }}
        >
          SANKALP DIAMOND
        </h1>

        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link to="/">
            <Button
              variant="ghost"
              textColor="#33d6ff"
              _hover={{
                bg: "#33d6ff",
                color: "white",
              }}
              _active={{ bg: "#33d6ff" }}
            >
              Home
            </Button>
          </Link>

          {/* <Link to="/contact">
            <Button
              variant="ghost"
              textColor="#33d6ff"
              _hover={{
                bg: "#33d6ff",
                color: "white",
              }}
              _active={{ bg: "#33d6ff" }}
            >
              Contact
            </Button>
          </Link> */}
        </HStack>

        <IconButton
          aria-label="Open/Close navigation menu"
          display={{ base: "block", md: "none" }}
          onClick={toggleNav}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />
      </Flex>

      <Collapse in={isOpen}>
        <Box
          p={4}
          pb={8}
          bg="white"
          color="#f8f8f8"
          display={{ base: "block", md: "none" }}
        >
          <Link to="/">
            <Button
              variant="ghost"
              w="100%"
              mb={4}
              textColor="#33d6ff"
              _hover={{
                bg: "#33d6ff",
                color: "white",
              }}
              _active={{ bg: "#33d6ff" }}
            >
              Home
            </Button>
          </Link>

          {/* <Link to="/contact">
            <Button
              variant="ghost"
              w="100%"
              mb={4}
              textColor="#33d6ff"
              _hover={{
                bg: "#33d6ff",
                color: "white",
              }}
              _active={{ bg: "#33d6ff" }}
            >
              Contact
            </Button>
          </Link> */}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
