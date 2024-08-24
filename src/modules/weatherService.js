import { format } from 'date-fns';

const API_KEY = '9VTULFNXC5FZCZMXK6PZC9GWQ';

const WeatherService = () => {
  const getWeatherCurrent = async (location = 'Boise') => {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?key=${API_KEY}`, { method: 'GET' })
    .then((res) => res)
    .catch((err) => {
        throw new Error(err);
    });

    return response;
  }

  const getForecast = async () => {

  }

  return { getWeatherCurrent, getForecast };
}

export default WeatherService;