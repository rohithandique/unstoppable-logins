import React from "react";
import AuthButton from "./AuthButton";
import {
  chakra, Box, Flex, useColorModeValue, HStack, Button,
  useDisclosure, VStack, IconButton, CloseButton, Link
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link as={RouterLink} to="/" style={{textDecoration: 'none'}}>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              UseName
            </chakra.h1>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href="https://unstoppabledomains.com/" isExternal style={{textDecoration: 'none'}}>
                <Button variant="ghost">Domains</Button>
              </Link>
              <Link href="https://unstoppabledomains.com/learn" isExternal style={{textDecoration: 'none'}}>
                <Button variant="ghost">Learn</Button>
              </Link>
              <Link href="https://unstoppabledomains.com/developers" isExternal style={{textDecoration: 'none'}}>
                <Button variant="ghost">Build</Button>
              </Link>
              <Link href="https://unstoppabledomains.com/apps" isExternal style={{textDecoration: 'none'}}>
                <Button variant="ghost">Applications</Button>
              </Link>
              <AuthButton size="md"/>
            </HStack>
            
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                icon={<HamburgerIcon />}
                variant="ghost"
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link href="https://unstoppabledomains.com/" isExternal style={{textDecoration: 'none'}}>
                  <Button w="full" variant="ghost">Domains</Button>
                </Link>
                <Link href="https://unstoppabledomains.com/learn" isExternal style={{textDecoration: 'none'}}>
                  <Button w="full" variant="ghost">Learn</Button>
                </Link>
                <Link href="https://unstoppabledomains.com/developers" isExternal style={{textDecoration: 'none'}}>
                  <Button w="full" variant="ghost">Build</Button>
                </Link>
                <Link href="https://unstoppabledomains.com/apps" isExternal style={{textDecoration: 'none'}}>
                  <Button w="full" variant="ghost">Applications</Button>
                </Link>
                <AuthButton size="md"/>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}