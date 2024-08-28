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

    document.addEventListener('DOMContentLoaded', () => {
        locationInput.headerInput();
        if (!localStorage.getItem("location")) {
            locationInput.contentInput();
        } else {
            forecast.currentConditions(localStorage.getItem("location"));
        }
    })

    document.addEventListener('locationSet', (event) => {
        localStorage.setItem("location", event.detail);
        const inputs = document.querySelectorAll('.location-input');
        for (const input of inputs) {
            input.value = event.detail;
        }
    });
})();