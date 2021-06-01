import { Box, Flex, Text, Image, Skeleton } from "@chakra-ui/react";
import React from "react";

export default function HomeLoading() {
  return (
    <Box w={"100%"} px={4}>
      <Flex direction="column" justify="flex-start" my={3} w={"100%"}>
        <Text as={Skeleton} fontSize="4xl" my={2}>
          Sydney
        </Text>
        <Text as={Skeleton} fontSize="md">
          Thursday 28 April 2018
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center" w={"100%"}>
        <Image as={Skeleton} src="http://openweathermap.org/img/wn/01d@2x.png" my={2} />
        <Text as={Skeleton} fontSize="6xl" pl={4}>
          26°
        </Text>
        <Text as={Skeleton} my={2} h={"50px"}>
          Partly Cloudy
        </Text>
        <Flex as={Skeleton} justify="space-around" direction="row" width={"100%"} h={"100px"} my={8} px={8}></Flex>
        <Flex as={Skeleton} justify="space-around" align="center" w={"100%"} h={"100px"} my={2}></Flex>
      </Flex>
    </Box>
  );
}
