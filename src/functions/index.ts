export const getWeatherForLocation = async (location: string) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(apiKey);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherForDays = async (lat: number, lon: number) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current,alerts&units=metric&appid=${apiKey}`;
    console.log(url);

    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
//FOR CITY SEARCH
//https://openweathermap.org/data/2.5/find?&q=Split&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1622460800500

//FOR NEXT 7 days forecast
//https://api.openweathermap.org/data/2.5/onecall?lat=43.5089&lon=16.4392&exclude=hourly,minutely,current,alerts&appid=3ea6f91c5400d3dfe437760a7baf06d7

export const searchForCity = async (city: string) => {
  try {
    const apiKey = process.env.REACT_APP_SECRET_KEY;
    const url = `https://thingproxy.freeboard.io/fetch/https://openweathermap.org/data/2.5/find?&q=${city}&type=like&sort=population&cnt=30&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
