import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { SplitText } from "./SplitText";
import { FaSpotify, FaCheckCircle } from "react-icons/fa";
import TopTracks from "./TopTracks";
import HeroMe from "public/Hero.png";
import HeroMeDark from "public/HeroDark.png";
import Image from "next/image";
import Me from "public/me.svg";
import MeDark from "public/meDark.svg";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import HeroScroll from "public/HeroScroll.png";
import { motion } from "framer-motion";
const HeroMobile = () => {
  const color = useColorModeValue(
    "lightPallete.darkRed",
    "darkPallete.veryLightTeal"
  );
  const colorTimeline = useColorModeValue(
    "lightPallete.red",
    "darkPallete.teal"
  );
  const image = useColorModeValue(Me, MeDark);
  return (
    <Box position="relative">
      <Grid
        placeItems="center"
        padding={{ base: 5, md: 10, lg: 10 }}
        height={{ base: "100%", md: "100vh", lg: "100vh" }}
        gridGap={{ base: 10, md: 10, lg: 10 }}
      >
        <Heading
          textAlign="center"
          mt={10}
          fontSize="5xl"
          fontWeight="bold"
          lineHeight="shorter"
        >
          <SplitText
            initial={{ y: "100%", x: 0 }}
            animate="visible"
            variants={{
              visible: (i) => ({
                y: 0,
                originY: 0,

                transition: {
                  delay: i * 0.1,
                },
              }),
            }}
          >
            Harsimran Singh Barki
          </SplitText>
        </Heading>
        <Text textColor={color} justifySelf="center" textAlign="center">
          Hi!. I Like to deal with beautiful UI and convert them into -
          functional & usable websites. I studied in's and out's of web -
          development, accessibility, SEO and performance so you don't have -
          to.
        </Text>

        <Box textColor={colorTimeline} justifySelf="center">
          <List spacing={3}>
            <ListItem alignItems="center" display="flex">
              <ListIcon as={FaSpotify} color="green.500" />
              Listening - {""}
              <TopTracks />
            </ListItem>
            <ListItem alignItems="center" display="flex">
              <ListIcon as={FaCheckCircle} color="green.500" /> 2021 Jan - First
              Freelance Project
            </ListItem>
            <ListItem alignItems="center" display="flex">
              <ListIcon as={FaCheckCircle} color="green.500" />
              2019 Apr - First Full Time Job
            </ListItem>
            <ListItem alignItems="center" display="flex">
              <ListIcon as={FaCheckCircle} color="green.500" />
              2019 Feb - Started as a intern
            </ListItem>
          </List>
        </Box>
        <Flex
          alignItems="base"
          justifyContent="flex-end"
          width="90vw"
          marginTop={20}
          cursor="pointer"
        >
          <Text mr={5}>scroll</Text>
          <motion.div
            whileHover={{
              y: 10,
            }}
          >
            <Image src={HeroScroll} layout="intrinsic" height={30} width={15} />
          </motion.div>
        </Flex>
      </Grid>
      <Box
        position="absolute"
        zIndex={1}
        bottom="-2"
        left="50%"
        transform="translate(-50%,0%)"
      >
        <Link
          activeClass="active"
          to="who"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          {" "}
          <Image src={image} layout="intrinsic" height={150} width={150} />
        </Link>
      </Box>
    </Box>
  );
};

export default HeroMobile;
