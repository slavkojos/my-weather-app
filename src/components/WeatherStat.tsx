import { Box, Container, Flex, IconButton, Text, Image } from "@chakra-ui/react";
import { capitalize } from "../functions/capitalize";

export default function WeatherStat(props) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Text pl={props.padding} my={1}>
        {props.value + props.units}
      </Text>
      <Text fontSize="sm">{capitalize(props.type)}</Text>
    </Flex>
  );
}
