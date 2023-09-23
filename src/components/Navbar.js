import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  HStack,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

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
        bg="#00FFFF"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            Your Jewellery
          </Heading>
        </Flex>

        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link to="/">
            <Button
              variant="ghost"
              textColor="white"
              _hover={{
                bg: "white",
                color: "#00AA99",
              }}
              _active={{ bg: "#00AA99" }}
            >
              Home
            </Button>
          </Link>
          <Button
            variant="ghost"
            textColor="white"
            _hover={{
              bg: "white",
              color: "#00AA99",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Products
          </Button>
          <Button
            variant="ghost"
            textColor="white"
            _hover={{
              bg: "white",
              color: "#00AA99",
            }}
            _active={{ bg: "#00AA99" }}
          >
            About Us
          </Button>
          <Link to="/contact">
            <Button
              variant="ghost"
              textColor="white"
              _hover={{
                bg: "white",
                color: "#00AA99",
              }}
              _active={{ bg: "#00AA99" }}
            >
              Contact
            </Button>
          </Link>
          <Button
            variant="ghost"
            textColor="white"
            _hover={{
              bg: "white",
              color: "#00AA99",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Events
          </Button>
          <Button
            variant="ghost"
            textColor="white"
            _hover={{
              bg: "white",
              color: "#00AA99",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Gallery
          </Button>
          <Button
            variant="ghost"
            textColor="white"
            _hover={{
              bg: "white",
              color: "#00AA99",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Blog
          </Button>
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
          bg="#00FFFF"
          color="#f8f8f8"
          display={{ base: "block", md: "none" }}
        >
          <Button
            variant="ghost"
            w="100%"
            mb={4}
            _hover={{
              bg: "#00CCCC",
              color: "white",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            w="100%"
            mb={4}
            _hover={{
              bg: "#00CCCC",
              color: "white",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Products
          </Button>
          <Button
            variant="ghost"
            w="100%"
            mb={4}
            _hover={{
              bg: "#00CCCC",
              color: "white",
            }}
            _active={{ bg: "#00AA99" }}
          >
            About Us
          </Button>
          <Button
            variant="ghost"
            w="100%"
            _hover={{
              bg: "#00CCCC",
              color: "white",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Contact
          </Button>
          <Button
            variant="ghost"
            w="100%"
            _hover={{
              bg: "#00CCCC",
              color: "white",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Events
          </Button>
          <Button
            variant="ghost"
            w="100%"
            _hover={{
              bg: "#00CCCC",
              color: "white",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Gallery
          </Button>
          <Button
            variant="ghost"
            w="100%"
            _hover={{
              bg: "#00CCCC",
              color: "white",
            }}
            _active={{ bg: "#00AA99" }}
          >
            Blog
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
