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

export const searchForCity = async (city: string) => {
  try {
    const apiKey = process.env.REACT_APP_SECRET_KEY;
    const url = `https://openweathermap.org/data/2.5/find?&q=${city}&type=like&sort=population&cnt=30&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
