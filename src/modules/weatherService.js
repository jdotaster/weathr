import { format } from 'date-fns';

const API_KEY = '9VTULFNXC5FZCZMXK6PZC9GWQ';

const WeatherService = (location = 'Boise') => {
  const getData = async () => {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?key=${API_KEY}`, 
      { 
        method: 'GET' 
      }
    )
    .then((res) => res)
    .catch((err) => {
        throw new Error(err);
    });

    return response.json();
  }

  const getCurrent = async () => {
    const data = await getData();
    return data.currentConditions;
  }

  const getForecast = async () => {
    const data = await getData();
    return data;
  }

  return { getCurrent, getForecast };
}

export default WeatherService;