import { MONTHS_OF_THE_YEAR } from "../constants/common";

type ObjectWithNumberAsKey = { [k: number]: string };

export const subtractHours = (date: Date, hours: number) => {
  date.setHours(date.getHours() - hours);

  return date;
};

export const formatHours = (date: Date) => {
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();
  const dateHours = date.getHours();
  const dateMinutes = date.getMinutes();

  const nameOfTheMonth = (MONTHS_OF_THE_YEAR as ObjectWithNumberAsKey)[
    dateMonth
  ];

  return `${nameOfTheMonth} ${dateDay}th at ${dateHours}:${dateMinutes}`;
};

export const getPassedHours = (date: Date) => {
  const currentDate = new Date().getTime();
  const dateInMillis = date.getTime();

  const millisDifference = currentDate - dateInMillis;

  const secondsDifference = Math.floor(millisDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const weeksDifference = Math.floor(daysDifference / 7);
  // TODO: using 30 days as default for months. This should be improved
  const monthsDifference = Math.floor(weeksDifference / 30);

  if (monthsDifference > 0)
    return `${monthsDifference} ${monthsDifference === 1 ? "month" : "months"}`;
  if (weeksDifference > 0)
    return `${weeksDifference} ${monthsDifference === 1 ? "month" : "months"}`;
  if (daysDifference > 0)
    return `${daysDifference} ${daysDifference === 1 ? "day" : "days"}`;
  if (hoursDifference > 0)
    return `${hoursDifference}${hoursDifference === 1 ? "hr" : "hrs"}`;
  if (minutesDifference > 0)
    return `${minutesDifference}${minutesDifference === 1 ? "min" : "mins"}`;
};
