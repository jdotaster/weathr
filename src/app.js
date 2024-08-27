import './assets/styles.css';
import WeatherService from "./modules/weatherService";
import Forecast from './components/forecast';
import LocationInput from './components/locationInput';

const app = (async () => {
    const weatherService = WeatherService();
    const forecast = Forecast();
    const locationInput = LocationInput();

    document.addEventListener("DOMContentLoaded", () => {
        if (!localStorage.getItem("location")) {
            locationInput.create();
        }
    })
})();