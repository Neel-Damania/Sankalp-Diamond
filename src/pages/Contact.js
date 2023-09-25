import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Flex,
  Button,
  Icon,
  HStack,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.js";
import { FiPhone, FiMapPin, FiMail, FiUser } from "react-icons/fi";
import contactus from "../assets/images/Contactus.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail size={24} color="#00FFFF" />,
      text: "info@yourjewelrystore.com",
    },
    {
      icon: <FiPhone size={24} color="#00FFFF" />,
      text: "+1 (123) 456-7890",
    },
    {
      icon: <FiUser size={24} color="#00FFFF" />,
      text: "John Doe",
    },
  ];

  return (
    <Box w="100vw" h="100vh" overflowX="hidden">
      <Navbar />
      <Box
        bgImage={contactus}
        bgSize="cover"
        bgPosition="center"
        h="40vh"
        position="relative"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Heading as="h1" size="2xl" color="white">
            Contact Us
          </Heading>
        </Box>
      </Box>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Box mx="auto" w="80vw" h="70vh">
          <Box py={{ base: "4", md: "8" }}>
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              justifyContent="space-between"
              gap={{ base: "4", lg: "8" }}
              mx={{ base: "auto", lg: "none" }}
              my={10}
              alignItems="flex-start"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  p="4"
                  bg="white"
                  rounded="lg"
                  boxShadow="lg"
                  mb="4"
                  borderTop="5px solid #00FFFF"
                >
                  <Heading as="h2" size="lg" color="gray.700">
                    Corporate Office
                  </Heading>
                  <Divider mt="2" />
                  <Flex alignItems="center" mt="4">
                    <Icon as={FiMapPin} boxSize={6} color="teal.500" mr="2" />
                    <Text color="gray.600">
                      Office No. 304, 3rd Floor,
                      <br /> 68/72, Ganpat Bhavan,
                      <br /> Dhanji Street, Zaveri Bazar, <br />
                      Mumbai - 400 003, Maharashtra, India
                    </Text>
                  </Flex>
                  {/* <Flex alignItems="center" mt="2">
                    <Icon as={FiPhone} boxSize={6} color="teal.500" mr="2" />
                    <Text color="gray.600">{phoneNumber}</Text>
                  </Flex>
                  <Flex alignItems="center" mt="2">
                    <Icon as={FiMail} boxSize={6} color="teal.500" mr="2" />
                    <Text color="gray.600">{emailAddress}</Text>
                  </Flex> */}
                </Box>
              </motion.div>

              <Box
                p="4"
                bg="white"
                rounded="lg"
                boxShadow="lg"
                mb="6"
                borderTop="5px solid #00FFFF"
              >
                <Heading as="h2" size="lg" mb="2" color="gray.700">
                  Manufacturing Unit 1
                </Heading>
                <Divider mt="2" />
                <Flex alignItems="center" mt="4">
                  <Icon as={FiMapPin} boxSize={6} color="teal.500" mr="2" />
                  <Text color="gray.600">
                    Unit No. 501, 5th Floor, <br /> 68/72, Ganpat Bhavan, <br />
                    Dhanji Street, Zaveri Bazaar,
                    <br /> Mumbai - 400 003, Maharashtra, India
                  </Text>
                </Flex>
              </Box>
              <Box
                p="4"
                bg="white"
                rounded="lg"
                boxShadow="lg"
                mb="6"
                borderTop="5px solid #00FFFF"
              >
                <Heading as="h2" size="lg" mb="2" color="gray.700">
                  Manufacturing Unit 2
                </Heading>
                <Divider mt="2" />
                <Flex alignItems="center" mt="4">
                  <Icon as={FiMapPin} boxSize={6} color="teal.500" mr="2" />
                  <Text color="gray.600">
                    Gala No. 31, 1st Floor,
                    <br /> Apurva Industrial Estate,
                    <br /> Makwana Road, Marol, Andheri East, <br /> Mumbai -
                    400 059, Maharashtra, India
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Heading as="h1" size="2xl" my="4" ml="10%" color="gray.700">
              Seeking your valuable appointment for a Product review...
            </Heading>
          </Box>
          {/* Footer */}
          <Box p="4" w="100%" bg="white" rounded="lg" mb="4">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexDir={{ base: "column", md: "row" }}
            >
              <Box textAlign="center" mb={{ base: "4", md: "0" }}>
                <Icon as={FiMail} boxSize={6} color="teal.500" mr="2" />
                <Text mt="2" color="gray.600">
                  sankalpdiamond@yahoo.com
                </Text>
              </Box>
              <Box textAlign="center" mb={{ base: "4", md: "0" }}>
                <Icon as={FiPhone} boxSize={6} color="teal.500" mr="2" />
                <Text mt="2" color="gray.600">
                  +91 98202 57173
                </Text>
              </Box>
              <Box textAlign="center">
                <Icon as={FiUser} boxSize={6} color="teal.500" mr="2" />
                <Text mt="2" color="gray.600">
                  Mr. Hemant Rathod
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
