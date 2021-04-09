import { Button, ButtonGroup } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, HStack, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("lightPallete.yellow", "darkPallete.teal");
  const color = useColorModeValue("lightPallete.red", "white");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [mobileNav, mobileNavOpen] = useState(false);
  const MotionButton = motion(Button);
  const MotionVStack = motion(VStack);

  const openNav = () => {
    mobileNavOpen(!mobileNav);
  };
  return (
    <Box padding={8} maxW="90vw" margin="auto">
      {isTabletOrMobile ? (
        <Button onClick={() => openNav()} bg="transparent">
          {mobileNav ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
      ) : (
        <Flex justifyContent="flex-end" alignItems="center">
          <ButtonGroup spacing={10} variant="ghost" textColor={color}>
            <MotionButton
              whileHover={{
                y: -5,
              }}
              _hover={{
                bg,
              }}
            >
              Home
            </MotionButton>
            <MotionButton
              whileHover={{
                y: -5,
              }}
              _hover={{
                bg,
              }}
            >
              About
            </MotionButton>
            <MotionButton
              whileHover={{
                y: -5,
              }}
              _hover={{
                bg,
              }}
            >
              Projects
            </MotionButton>
            <MotionButton
              whileHover={{
                y: -5,
              }}
              _hover={{
                bg,
              }}
            >
              Contact
            </MotionButton>
            <MotionButton
              onClick={toggleColorMode}
              display="flex"
              flexDirection="column"
              _hover={{
                bg: "transparent",
              }}
            >
              <AnimatePresence>
                {colorMode == "light" ? (
                  <>
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                    >
                      <SunIcon fontSize="3xl" marginBottom={2} />
                    </motion.div>

                    <Divider></Divider>
                    <motion.div
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                    >
                      <MoonIcon marginTop={2} color="lightPallete.yellow" />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                    >
                      <MoonIcon fontSize="3xl" marginBottom={2} />
                    </motion.div>
                    <Divider colorScheme="white"></Divider>
                    <motion.div
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                    >
                      <SunIcon marginTop={2} color="#888" />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </MotionButton>
          </ButtonGroup>
        </Flex>
      )}
      {isTabletOrMobile ? (
        <Box>
          <AnimatePresence>
            {mobileNav ? (
              <MotionVStack
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                width="full"
                spacing={10}
                mt={10}
              >
                <MotionButton
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variant="ghost"
                  _hover={{
                    bg,
                  }}
                >
                  Home
                </MotionButton>
                <MotionButton
                  variant="ghost"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  _hover={{
                    bg,
                  }}
                >
                  About
                </MotionButton>
                <MotionButton
                  variant="ghost"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  _hover={{
                    bg,
                  }}
                >
                  Projects
                </MotionButton>
                <MotionButton
                  variant="ghost"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  _hover={{
                    bg,
                  }}
                >
                  Contact
                </MotionButton>
                <MotionButton
                  variant="ghost"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={toggleColorMode}
                  _hover={{
                    bg,
                  }}
                >
                  {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
                </MotionButton>
              </MotionVStack>
            ) : null}
          </AnimatePresence>
        </Box>
      ) : null}
    </Box>
  );
}

export default NavBar;