import { Box, Container, Flex, IconButton, Text, Image } from "@chakra-ui/react";
import React from "react";
import { capitalize } from "../functions/capitalize";
export default function WeatherStat(props) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Text my={1} fontSize="sm">
        {props.day}
      </Text>
      <Image boxSize="64px" my={1} src={`http://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`} />
      <Text my={1}>{props.temp + "°"}</Text>
    </Flex>
  );
}
