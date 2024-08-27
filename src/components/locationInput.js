import ElementFactory from '../modules/elementFactory';
import Events from '../events';

const LocationInput = () => {
    const elements = ElementFactory();
    const events = Events();

    const registerSubmitEvent = (form, input) => {
        form.addEventListener('submit', () => {
            event.preventDefault();
            const location = input.value;
            localStorage.setItem("location", location)
            events.locationSet(location);
        })
    }

    const contentInput = () => {
        const container = elements.create('div', { className: 'content-form-container' })
        const form = elements.create('form', { className: 'content-form-location location-input-form', action: '#' });
        const label = elements.create('label', { className: 'content-form-location-label', for: 'location-input', innerHTML: 'Get weather for ' });
        const input = elements.create('input', { className: 'content-form-location-input location-input', name: 'location-input', type: 'text', placeholder: 'City name or zip code'});

        container.appendChild(form);
        form.appendChild(label);
        form.appendChild(input);
        document.getElementById('content').appendChild(container);

        registerSubmitEvent(form, input);
    }

    const headerInput = () => {
        const container = elements.create('div', { className: 'header-form-container' });
        const form = elements.create('form', { className: 'header-location-form location-input-form', action: '#' });
        const input = elements.create('input', { className: 'header-location-input location-input', type: 'text', placeholder: 'City name or zip code' });

        container.appendChild(form);
        form.appendChild(input);
        document.getElementById('header').appendChild(container);

        registerSubmitEvent(form, input);
    }

    return { contentInput, headerInput };
}

export default LocationInput;