import './assets/styles.css';
import WeatherService from "./modules/weatherService";
import Forecast from './components/forecast';
import LocationInput from './components/locationInput';
import Events from './events';

const app = (async () => {
    const weatherService = WeatherService();
    const forecast = Forecast();
    const locationInput = LocationInput();
    const events = Events();

    document.addEventListener("DOMContentLoaded", () => {
        // if (!localStorage.getItem("location")) {
            locationInput.create();
        // }
    })
})();