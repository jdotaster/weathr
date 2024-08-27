const Events = () => {

    const locationSet = (location) => {
        const event = new CustomEvent('locationSet', { detail: location });
        document.dispatchEvent(event);
    }

    return { locationSet };
}

export default Events;