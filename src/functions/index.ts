export const getWeatherForLocation = async (location: string) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export const getWeatherForDays = async (lat: number, lon: number) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current,alerts&units=metric&appid=${apiKey}`;
  console.log(url);

  const response = await fetch(url);
  const data = response.json();
  return data;
};
//FOR CITY SEARCH
//https://openweathermap.org/data/2.5/find?&q=Split&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1622460800500

//FOR NEXT 7 days forecast
//https://api.openweathermap.org/data/2.5/onecall?lat=43.5089&lon=16.4392&exclude=hourly,minutely,current,alerts&appid=3ea6f91c5400d3dfe437760a7baf06d7
