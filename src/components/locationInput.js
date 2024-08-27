import ElementFactory from '../modules/elementFactory';
import Events from '../events';

const LocationInput = () => {
    const elements = ElementFactory();
    const events = Events();

    const create = () => {
        const container = elements.create('div', { className: 'content-form-container' })
        const form = elements.create('form', { className: 'content-form-location', action: '#' });
        const label = elements.create('label', { className: 'content-form-location-label', for: 'location-input', innerHTML: 'Get weather for ' });
        const input = elements.create('input', { className: 'content-form-location-input location-input', name: 'location-input', type: 'text', placeholder: 'City name or zip code'});

        container.appendChild(form);
        form.appendChild(label);
        form.appendChild(input);
        document.getElementById('content').appendChild(container);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const location = form.querySelector(`input[name='location-input']`).value;
            localStorage.setItem("location", location)
            events.locationSet(location);
        })
    }

    return { create };
}

export default LocationInput;