import './assets/styles.css';
import WeatherService from './modules/weatherService';
import Forecast from './components/forecast';
import LocationInput from './components/locationInput';
import Events from './events';

const app = (async () => {
    const weatherService = WeatherService();
    const forecast = Forecast();
    const locationInput = LocationInput();
    const events = Events();

    document.addEventListener('DOMContentLoaded', async () => {
        locationInput.headerInput();
        if (!localStorage.getItem('location')) {
            locationInput.contentInput();
        } else {
            const weather = await weatherService.getCurrent(localStorage.getItem('location'))
            forecast.currentConditions(weather);
        }
    })

    document.addEventListener('locationSet', async (event) => {
        localStorage.setItem('location', event.detail);
        const inputs = document.querySelectorAll('.location-input');
        for (const input of inputs) {
            input.value = event.detail;
        }
        const weather = await weatherService.getCurrent(localStorage.getItem('location'))
        forecast.currentConditions(weather);
    });
})();