import { Flex, Box, Skeleton } from "@chakra-ui/react";
import React from "react";
import DailyWeather from "./DailyWeather";
import { useState, useEffect, useCallback } from "react";
import { getWeatherForDays } from "../functions/index";
import { convertUnixToDay } from "../functions/helpers";

export default function FivedaysWeather(props) {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getData = useCallback(async () => {
    setLoading(true);
    setData(await getWeatherForDays(props.lat, props.lon));
    setLoading(false);
  }, []);
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <Box w={"100%"}>
      {isLoading ? (
        <Skeleton height="100px" />
      ) : (
        <Flex justify="space-between" align="center" w={"100%"}>
          <DailyWeather
            day={convertUnixToDay(data.daily[1].dt)}
            weatherIcon={data.daily[1].weather[0].icon}
            temp={Math.round(data.daily[1].temp.day)}
          />
          <DailyWeather
            day={convertUnixToDay(data.daily[2].dt)}
            weatherIcon={data.daily[2].weather[0].icon}
            temp={Math.round(data.daily[2].temp.day)}
          />
          <DailyWeather
            day={convertUnixToDay(data.daily[3].dt)}
            weatherIcon={data.daily[3].weather[0].icon}
            temp={Math.round(data.daily[3].temp.day)}
          />
          <DailyWeather
            day={convertUnixToDay(data.daily[4].dt)}
            weatherIcon={data.daily[4].weather[0].icon}
            temp={Math.round(data.daily[4].temp.day)}
          />
          <DailyWeather
            day={convertUnixToDay(data.daily[5].dt)}
            weatherIcon={data.daily[5].weather[0].icon}
            temp={Math.round(data.daily[5].temp.day)}
          />
        </Flex>
      )}
    </Box>
  );
}
