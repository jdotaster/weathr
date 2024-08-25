import './assets/styles.css';
import WeatherService from "./modules/weatherService";

const app = (async () => {
    const weatherService = WeatherService();
    
    console.log(await weatherService.getCurrent('Boise'));
})();