import { Box, Container, Flex, IconButton, Text, Image, Skeleton } from "@chakra-ui/react";
import React from "react";
import { GoSearch } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import WeatherStat from "../components/WeatherStat";
import HomeLoading from "../components/HomeLoading";
import { getWeatherForLocation } from "../functions/index";
import { useEffect, useState, useCallback } from "react";
import { capitalize } from "../functions/capitalize";
import FiveDaysWeather from "../components/FiveDaysWeather";
export default function Home() {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getData = useCallback(async () => {
    setLoading(true);
    setData(await getWeatherForLocation("makarska"));
    setLoading(false);
  }, []);
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  console.log(Object.keys(data));

  return (
    <Container>
      {isLoading ? (
        <HomeLoading />
      ) : (
        <Box>
          <Flex justify="space-between">
            <IconButton variant="ghost" size="lg" aria-label="Search" icon={<GoSearch />} isRound />
            <IconButton variant="ghost" size="lg" aria-label="Settings" icon={<IoMdSettings />} isRound />
          </Flex>
          <Box w={"100%"} px={4}>
            <Flex direction="column" justify="flex-start" my={3} w={"100%"}>
              <Text fontSize="4xl" my={2}>
                {data.name}
              </Text>
              <Text fontSize="md">Thursday 28 April 2018</Text>
            </Flex>
            <Flex direction="column" justify="center" align="center" w={"100%"}>
              <Image boxSize={"200px"} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} my={1} />
              <Flex justify="space-around" w={"100%"} align="center">
                <WeatherStat padding={1} value={Math.round(data.main.temp_min)} units={"°"} type="Min" />
                <Box>
                  <Text pl={1} fontSize="6xl">{`${Math.round(data.main.temp)}°`}</Text>
                  <Text fontWeight="700" fontSize="xl">
                    {capitalize(data.weather[0].description)}
                  </Text>
                </Box>
                <WeatherStat padding={1} value={Math.round(data.main.temp_max)} units={"°"} type="Max" />
              </Flex>

              <Flex justify="space-between" align="center" direction="row" w={"100%"} my={8} px={4}>
                <WeatherStat padding={0} value={Math.round(data.wind.speed)} units={"m/s"} type={Object.keys(data)[5]} />
                <WeatherStat padding={0} value={data.main.humidity} units={"%"} type={Object.keys(data.main)[5]} />
                <WeatherStat padding={0} value={Math.round(data.main.feels_like)} units={"°"} type={"Feels like"} />
                <WeatherStat padding={0} value={data.main.pressure} units={" hPa"} type={capitalize(Object.keys(data.main)[4])} />
              </Flex>
              <FiveDaysWeather lat={data.coord.lat} lon={data.coord.lon} />
            </Flex>
          </Box>
        </Box>
      )}
    </Container>
  );
}
