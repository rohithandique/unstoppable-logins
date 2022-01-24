import React from "react";
import AuthButton from "./AuthButton";
import {
  chakra, Box, useColorModeValue, Button, Stack, Image, Text, Link
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"; 
import { Link as RouterLink } from "react-router-dom";
import HeroPic from "../images/hero.png"

const Hero = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
          All your{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            customer requests
          </Text>{" "}
          in one single place.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600",'gray.300')}
        >
          UseName is a feature voting forum where you can 
          request and vote on features.
        </chakra.p>
        <Stack
        direction={{base:"column",sm:"row"}}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <AuthButton size="lg"/>
          <Link as={RouterLink} to="/callback" style={{textDecoration: 'none'}}>
            <Button
              colorScheme="gray"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              rightIcon={<ArrowForwardIcon />}
            >
              Go To Forums
            </Button>
          </Link>
          
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src={HeroPic}
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Box>
  );
};

export default Hero;