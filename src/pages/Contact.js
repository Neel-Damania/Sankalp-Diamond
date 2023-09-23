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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.js";
import { FiPhone, FiMapPin, FiMail, FiUser } from "react-icons/fi";

const Contact = () => {
  const officeName = "Your Jewelry Store";
  const officeAddress = "123 Sparkling Avenue, Jewelry City, Gem Country";
  const phoneNumber = "+1 (123) 456-7890";
  const emailAddress = "info@yourjewelrystore.com";

  const manufacturingUnits = [
    {
      unitName: "Manufacturing Unit 1",
      unitAddress: "789 Gemstone Way, Jewelry City, Gem Country",
      unitPhone: "+1 (987) 654-3210",
      unitEmail: "unit1@yourjewelrystore.com",
    },
    {
      unitName: "Manufacturing Unit 2",
      unitAddress: "456 Precious Street, Jewelry City, Gem Country",
      unitPhone: "+1 (555) 123-4567",
      unitEmail: "unit2@yourjewelrystore.com",
    },
  ];

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
      <Box mx="auto" w="80vw" h="70vh">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box py={{ base: "4", md: "8" }}>
            <Heading as="h1" size="2xl" my="4" ml="10%" color="gray.700">
              Seeking your valuable appointment for a Product review...
            </Heading>

            <Flex
              flexDir={{ base: "column", lg: "row" }}
              justifyContent="space-between"
              alignItems="flex-start"
              gap={{ base: "4", lg: "8" }}
              my={10}
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
                    <Text color="gray.600">{officeAddress}</Text>
                  </Flex>
                  <Flex alignItems="center" mt="2">
                    <Icon as={FiPhone} boxSize={6} color="teal.500" mr="2" />
                    <Text color="gray.600">{phoneNumber}</Text>
                  </Flex>
                  <Flex alignItems="center" mt="2">
                    <Icon as={FiMail} boxSize={6} color="teal.500" mr="2" />
                    <Text color="gray.600">{emailAddress}</Text>
                  </Flex>
                </Box>
              </motion.div>
              {manufacturingUnits.map((unit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    p="4"
                    bg="white"
                    rounded="lg"
                    boxShadow="lg"
                    mb="6"
                    borderTop="5px solid #00FFFF"
                  >
                    <Heading as="h2" size="lg" mb="2" color="gray.700">
                      {unit.unitName}
                    </Heading>
                    <Divider mt="2" />
                    <Flex alignItems="center" mt="4">
                      <Icon as={FiMapPin} boxSize={6} color="teal.500" mr="2" />
                      <Text color="gray.600">{unit.unitAddress}</Text>
                    </Flex>
                  </Box>
                </motion.div>
              ))}
            </Flex>
          </Box>
        </motion.div>
      </Box>
      <Box p="4" w="80vw" mx="auto" bg="white" rounded="lg" mb="4">
        <HStack spacing="4" justifyContent="space-between">
          <Box textAlign="center">
            <Icon as={FiMail} boxSize={6} color="teal.500" mr="2" />
            <Text mt="2" color="gray.600">
              info@yourjewelrystore.com
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FiPhone} boxSize={6} color="teal.500" mr="2" />
            <Text mt="2" color="gray.600">
              +1 (123) 456-7890
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FiUser} boxSize={6} color="teal.500" mr="2" />
            <Text mt="2" color="gray.600">
              John Doe
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Contact;
