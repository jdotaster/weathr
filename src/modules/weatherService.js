import { format } from 'date-fns';

const API_KEY = '9VTULFNXC5FZCZMXK6PZC9GWQ';

const WeatherService = () => {
  const getData = async (options = { location: 'Boise' }) => {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
        + `${options.location}`
        + `${options.date1 ? '/' + options.date1 : ''}`
        + `${options.date2 ? '/' + options.date2 : ''}`
        + `?key=${API_KEY}`, 
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

  const getCurrent = async (location) => {
    const data = await getData({location: location, date1: 'today'});
    const current =  data.currentConditions;
    return {
      conditions: current.conditions,
      dewpoint: current.dew,
      feelslike: current.feelslike,
      humidity: current.humidity,
      pressure: current.pressure,
      sunrise: current.sunrise,
      sunset: current.sunset,
      temp: current.temp,
      windspeed: current.windspeed
    }
  }

  const getHourly = async (location) => {
    const data = await getData({location: location, date1: 'today'});
    return data.days.hours;
  }

  const getForecast = async (location) => {
    const data = await getData({location: location, date1: 'next7days'});
    return data;
  }

  return { getCurrent, getForecast };
}

export default WeatherService;