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
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import logoImage from "../assets/images/output-onlinepngtools.png";
import Navbar from "../components/Navbar";
import { FiPhone, FiMapPin, FiMail, FiUser } from "react-icons/fi";
import backgroundImage from "../assets/images/jewel.jpg";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Flex
        // direction={{ base: "column-reverse", md: "row" }}
        // justify="center"
        // align="center"
        // p={{ base: 4, md: 10 }}
        // bgGradient={"linear(to left, white, #33d6ff)"}
        // color="white"
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        p={{ base: 4, md: 10 }}
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        color="white" // White text color
      >
        <Box
          flex={{ base: 1, md: 1.5 }}
          p={{ base: 4, md: 8 }}
          maxW={{ base: "100%", md: "600px" }}
        >
          <Heading
            as="h1"
            size={{ base: "md", md: "xl" }}
            style={{
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
              fontWeight: "bold",
            }}
          >
            {" "}
            Website Under Construction
          </Heading>
        </Box>

        <Box
          flex={{ base: 1, md: 1 }}
          display={{ base: "none", md: "block" }}
          maxW={{ base: "100%", md: "40%" }}
        >
          <Image
            src={logoImage}
            alt="Logo"
            boxShadow="lg"
            borderRadius="full"
            bgColor="white"
          />
        </Box>
      </Flex>
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
                  +91 22 4909 8154
                </Text>
                <Text mt="2" color="gray.600">
                  +91 22 6183 2771
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
    </>
  );
};

export default AboutPage;
