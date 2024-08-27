import './assets/styles.css';
import WeatherService from "./modules/weatherService";
import Forecast from './components/forecast';

const app = (async () => {
    const weatherService = WeatherService();
    const forecast = Forecast();
    
    console.log((await weatherService.getForecast('Boise')).days[0]);
})();