export const convertUnixToDay = (timestamp: number) => {
  const a = new Date(timestamp * 1000);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = days[a.getDay()];
  return dayOfWeek;
};
