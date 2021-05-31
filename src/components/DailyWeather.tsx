import { Box, Container, Flex, IconButton, Text, Image } from "@chakra-ui/react";
import React from "react";
import { capitalize } from "../functions/capitalize";
export default function WeatherStat(props) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Text fontSize="sm" fontWeight="600">
        {props.day}
      </Text>
      <Image boxSize="64px" src={`http://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`} />
      <Text fontWeight="700" fontSize="lg">
        {props.temp + "°"}
      </Text>
    </Flex>
  );
}
