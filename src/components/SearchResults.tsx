import * as React from "react";
import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
export default function SearchResults({ data, setCity }) {
  const displayCities = () => {
    if (data.list.length > 0) {
      console.log("data", data);
      console.log("ok");
      return data.list.map((item, index) => {
        return (
          <Button
            key={index}
            variant="outline"
            my={2}
            w={"75%"}
            as={RouterLink}
            to="/"
            onClick={() => {
              localStorage.setItem("default", item.name.toLowerCase());
              setCity(item.name.toLowerCase());
            }}
          >
            <Flex justify="space-between" w={"100%"}>
              <Text>{item.name + ", " + item.sys.country}</Text>
              <Image src={`http://openweathermap.org/images/flags/${item.sys.country.toLowerCase()}.png`} />
            </Flex>
          </Button>
        );
      });
    }
  };
  return (
    <Box w={"100%"}>
      <Flex direction="column" justify="center" align="center">
        {displayCities()}
      </Flex>
    </Box>
  );
}
