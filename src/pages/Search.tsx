import { Container, Flex, Button, Text, Image, Skeleton, Input } from "@chakra-ui/react";
import React from "react";
import { useState, useRef } from "react";
import NoResults from "../assets/no-results.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import { searchForCity } from "../functions/index";
import SearchResults from "../components/SearchResults";

export default function Search(props) {
  const [isLoaded, setLoaded] = useState(true);
  const [data, setData] = useState("");
  const [timer, setTimer] = useState(null);
  const citySearchRef = useRef();
  const launchCitySearch = () => {
    if (citySearchRef.current.value.length > 2) {
      if (timer) {
        clearTimeout(timer);
        setTimer(null);
      }
      setTimer(
        setTimeout(async () => {
          setLoaded(false);
          setData(await searchForCity(citySearchRef.current.value));
          setLoaded(true);
        }, 500)
      );
    }
  };

  console.log("data", data);

  return (
    <Container py={4}>
      <Flex direction="column" justify="center" align="center">
        <Flex w={"100%"} align="center">
          <Button as={RouterLink} to="/" variant="outline" leftIcon={<BiArrowBack />} mr={4}>
            Go back
          </Button>
          <Input variant="outline" placeholder="Type 3 or more characters..." ref={citySearchRef} onChange={launchCitySearch} />
        </Flex>

        <Flex direction="column" justify="center" align="center" my={16} w={"100%"}>
          <Skeleton isLoaded={isLoaded} w={"100%"} borderRadius="2xl" height="100px">
            {data && data.list.length > 0 ? (
              <SearchResults data={data} setCity={props.setCity} />
            ) : (
              <Flex direction="column" justify="center" align="center">
                <Image src={NoResults} boxSize="200px" />
                <Text fontSize="xl" color={"#51555E"}>
                  No results found
                </Text>
              </Flex>
            )}
          </Skeleton>
        </Flex>
      </Flex>
    </Container>
  );
}
