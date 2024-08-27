const Events = () => {

    const locationSet = (location) => {
        const event = new CustomEvent('locationSet', { detail: location });
        document.querySelector('')
    }

    return { locationSet };
}

export default Events;