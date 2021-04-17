import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";

import { Button } from "@chakra-ui/button";
import rb from "public/rb.png";
const Things = () => {
  const bg = useColorModeValue(
    "lightPallete.whiteYellow",
    "darkPallete.darkPurple"
  );

  const cardBg = useColorModeValue(
    "lightPallete.white",
    "darkPallete.lightPurple"
  );
  const cardColor = useColorModeValue(
    "lightPallete.black",
    "darkPallete.white"
  );
  const cardBorder = useColorModeValue("gray.200", "gray.500");
  const cardButton = useColorModeValue("gray.300", "darkPallete.teal");

  const projects = {
    website: [
      {
        id: "011212",
        name: "Athayog Living",
        desc:
          "Built the entire website architecture from Front-End to Back-End to help them increase their customer base & sell their courses",
        link: "https://athayogliving.com/",
      },
      {
        id: "011999",
        name: "Royal Brothers",
        desc:
          "Revamped Website UI to a newer modern design for better customer retention with SEO boost",
        link: "https://royalbrothers.com",
      },
    ],
  };

  return (
    <Box
      bg={bg}
      padding={{ base: 10, md: 10, lg: 20 }}
      textAlign="center"
      name="projects"
    >
      <Heading>Things I Did</Heading>
      <Text mt={5}>
        Here are a few design projects I've worked on recently.
      </Text>
      <Grid
        placeItems="center"
        height="100%"
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(18rem, 1fr))",
          md: "repeat(auto-fill, minmax(25rem, 1fr))",
          lg: "repeat(auto-fill, minmax(25rem, 1fr))",
        }}
        gridGap={5}
        justifyContent="center"
        alignItems="center"
        placeContent="center"
        margin="auto"
        textAlign="center"
        margin={{ base: "0 0 ", md: "0 0", lg: "0 10rem" }}
        mt={{ base: 10, md: 15, lg: 20 }}
      >
        {projects.website.map((data) => {
          return (
            <Flex
              position="relative"
              rounded="lg"
              overflow="hidden"
              bg={cardBg}
              justifySelf="center"
              direction="column"
              justifyContent="space-between"
              key={data.id}
              alignSelf="center"
              textColor="black"
              height="100%"
              textColor={cardColor}
              padding={{ base: 5, md: 10, lg: 10 }}
              zIndex={10}
              border="1px solid"
              borderColor={cardBorder}
            >
              <Text fontWeight="medium" fontSize={{ base: "2xl", md: "3xl" }}>
                {data.name}
              </Text>
              <Text mt={5}>{data.desc}</Text>

              <Link href={data.link} passHref>
                <Button mt={5} bg={cardButton}>
                  Visit Website
                </Button>
              </Link>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Things;
